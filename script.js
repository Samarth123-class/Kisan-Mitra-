document.addEventListener("DOMContentLoaded", () => {

  const $ = (id) => document.getElementById(id);

  // =====================================
  // SCREEN NAVIGATION
  // =====================================

  function showScreen(screenName) {

    if (screenName === "profile") {
      const name = localStorage.getItem("marutham-name") || "";
      const location = localStorage.getItem("marutham-location") || "";

      const newName = prompt("Enter farmer name:", name);
      if (newName === null) return;

      const newLocation = prompt("Enter village or location:", location);
      if (newLocation === null) return;

      localStorage.setItem("marutham-name", newName);
      localStorage.setItem("marutham-location", newLocation);

      alert("Farmer profile saved on this device.");
      showScreen("home");
      return;
    }

    if (screenName === "more") {
      alert(
        "MARUTHAM\n\n" +
        "Smart Agriculture Assistance\n" +
        "Your Farm. Your Language. Your Smart Companion."
      );
      return;
    }

    document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("active");
    });

    const selected = $(screenName);

    if (!selected) return;

    selected.classList.add("active");

    document.querySelectorAll(".nav-item").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.screen === screenName
      );
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.showScreen = showScreen;

  window.goToServices = function () {
    document.querySelector(".service-grid").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  document.querySelectorAll("[data-screen]").forEach(button => {
    button.addEventListener("click", () => {
      showScreen(button.dataset.screen);
    });
  });

  $("navMic").addEventListener("click", () => {
    showScreen("voice");
    setTimeout(startVoice, 250);
  });


  // =====================================
  // SCHEME SEARCH AND FILTERS
  // =====================================

  let selectedFilter = "all";

  function filterSchemes() {

    const search = $("schemeSearch").value.toLowerCase().trim();

    let count = 0;

    document.querySelectorAll(".scheme-card").forEach(card => {

      const type = card.dataset.type;
      const text = (
        card.dataset.search + " " + card.innerText
      ).toLowerCase();

      const matchesSearch = text.includes(search);
      const matchesFilter =
        selectedFilter === "all" || type === selectedFilter;

      const visible = matchesSearch && matchesFilter;

      card.hidden = !visible;

      if (visible) count++;

    });

    $("noSchemes").hidden = count > 0;
  }

  $("schemeSearch").addEventListener("input", filterSchemes);

  document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

      selectedFilter = button.dataset.filter;

      document.querySelectorAll(".filter").forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      filterSchemes();
    });

  });


  // =====================================
  // CROP IMAGE UPLOAD
  // =====================================

  let cropImageURL = null;

  $("cropImage").addEventListener("change", event => {

    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      $("cropStatus").textContent = "Please select an image file.";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      $("cropStatus").textContent =
        "Please choose an image smaller than 10 MB.";
      return;
    }

    if (cropImageURL) {
      URL.revokeObjectURL(cropImageURL);
    }

    cropImageURL = URL.createObjectURL(file);

    $("cropPreview").src = cropImageURL;

    $("cropStatus").textContent =
      "Image selected successfully: " + file.name;

  });

  $("resetCrop").addEventListener("click", () => {

    $("cropImage").value = "";

    if (cropImageURL) {
      URL.revokeObjectURL(cropImageURL);
      cropImageURL = null;
    }

    $("cropPreview").src =
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=900";

    $("cropStatus").textContent = "Select a crop image to begin.";

    $("cropResult").innerHTML =
      "<p>✓ Upload a clear photo of the affected crop.</p>" +
      "<p>✓ Include both healthy and affected leaves if possible.</p>";

  });

  $("analyzeCrop").addEventListener("click", () => {

    if (!cropImageURL) {
      $("cropStatus").textContent =
        "Please upload a crop image first.";
      return;
    }

    $("cropStatus").textContent =
      "Image ready for the AI diagnosis service.";

    $("cropResult").innerHTML =
      "<p>✓ Image uploaded successfully.</p>" +
      "<p>✓ Image preview is ready.</p>" +
      "<p>⚠ Actual disease identification is not connected yet. " +
      "Connect an AI crop-diagnosis backend to produce a real result.</p>";

  });


  // =====================================
  // SOIL IMAGE PREVIEW
  // =====================================

  let soilImageURL = null;

  $("soilImage").addEventListener("change", event => {

    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    if (soilImageURL) {
      URL.revokeObjectURL(soilImageURL);
    }

    soilImageURL = URL.createObjectURL(file);

    $("soilPreview").src = soilImageURL;
    $("soilPreview").hidden = false;

  });


  // =====================================
  // SOIL VALUE SUMMARY
  // =====================================

  $("soilAnalyze").addEventListener("click", () => {

    const phValue = $("soilPH").value;
    const nValue = $("nitrogen").value;
    const pValue = $("phosphorus").value;
    const kValue = $("potassium").value;

    if (
      phValue === "" ||
      nValue === "" ||
      pValue === "" ||
      kValue === ""
    ) {
      $("soilOutput").innerHTML =
        "<h3>Soil Analysis Result</h3>" +
        "<p>Please enter all four soil-test values.</p>";
      return;
    }

    const ph = Number(phValue);
    const n = Number(nValue);
    const p = Number(pValue);
    const k = Number(kValue);

    if (
      !Number.isFinite(ph) ||
      !Number.isFinite(n) ||
      !Number.isFinite(p) ||
      !Number.isFinite(k) ||
      ph < 0 || ph > 14 ||
      n < 0 || p < 0 || k < 0
    ) {
      $("soilOutput").innerHTML =
        "<h3>Soil Analysis Result</h3>" +
        "<p>Please check your values. pH must be between 0 and 14; nutrient values cannot be negative.</p>";
      return;
    }

    let phMessage = "Near neutral";

    if (ph < 6.5) {
      phMessage = "Acidic";
    } else if (ph > 7.5) {
      phMessage = "Alkaline";
    }

    $("soilOutput").innerHTML = `
      <h3>🌱 Soil Analysis Result</h3>
      <div class="nutrient-row">🟢 Soil pH: <b>${ph} (${phMessage})</b></div>
      <div class="nutrient-row">🟢 Nitrogen (N): <b>${n}</b></div>
      <div class="nutrient-row">🟢 Phosphorus (P): <b>${p}</b></div>
      <div class="nutrient-row">🟢 Potassium (K): <b>${k}</b></div>
      <p>Values recorded. Nutrient interpretation requires the units, soil-test method and local reference ranges.</p>
    `;

  });


  // =====================================
  // VOICE ASSISTANT
  // =====================================

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  let recognition = null;

  let listening = false;

  let currentAnswer =
    "ನಮಸ್ಕಾರ! Marutham ಗೆ ಸ್ವಾಗತ. ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.";

  function speak(text) {

    if (!("speechSynthesis" in window)) {
      $("voiceStatus").textContent =
        "Speech output is not supported in this browser.";
      return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "kn-IN";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

  }


  function displayConversation(question, answer) {

    $("userMessage").hidden = false;
    $("assistantMessage").hidden = false;

    $("userMessage").textContent = question;

    $("assistantMessage").innerHTML =
      '<span class="chat-logo">🌿</span><div>' +
      answer +
      '</div>';

    currentAnswer = answer;

    speak(answer);

  }


  function processQuestion(question) {

    const q = question.toLowerCase();

    let answer = "";
    let destination = "";

    if (
      q.includes("crop") ||
      q.includes("disease") ||
      q.includes("leaf") ||
      q.includes("ಬೆಳೆ") ||
      q.includes("ರೋಗ") ||
      q.includes("ಕೀಟ")
    ) {

      answer =
        "ನಿಮ್ಮ ಬೆಳೆಯ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಲು Crop Doctor ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ. " +
        "ಬೆಳೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ನಿಜವಾದ ರೋಗ ಪತ್ತೆಗೆ AI ಸೇವೆ ಸಂಪರ್ಕಿಸಬೇಕು.";

      destination = "crop";

    } else if (
      q.includes("soil") ||
      q.includes("ಮಣ್ಣು") ||
      q.includes("ಮಣ್ಣಿನ")
    ) {

      answer =
        "ಮಣ್ಣಿನ ಪರೀಕ್ಷಾ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು Soil Intelligence ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ. " +
        "ನಿಮ್ಮ ಮಣ್ಣಿನ pH, Nitrogen, Phosphorus ಮತ್ತು Potassium ಮೌಲ್ಯಗಳನ್ನು ನಮೂದಿಸಿ.";

      destination = "soil";

    } else if (
      q.includes("scheme") ||
      q.includes("ಯೋಜನೆ") ||
      q.includes("ಸರ್ಕಾರ")
    ) {

      answer =
        "ಸರ್ಕಾರದ ಕೃಷಿ ಯೋಜನೆಗಳನ್ನು ನೋಡಲು Schemes ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ. " +
        "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಅರ್ಹತೆ ಮತ್ತು ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.";

      destination = "schemes";

    } else if (
      q.includes("market") ||
      q.includes("ಮಾರುಕಟ್ಟೆ")
    ) {

      answer =
        "ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ಮಾಹಿತಿಗಾಗಿ Agri Marketplace ವಿಭಾಗವನ್ನು ತೆರೆಯುತ್ತಿದ್ದೇನೆ.";

      destination = "market";

    } else {

      answer =
        "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇನ್ನಷ್ಟು ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳಿ. " +
        "ನಾನು Crop Doctor, Soil Intelligence, Government Schemes ಮತ್ತು Marketplace ವಿಭಾಗಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಬಹುದು.";

    }

    displayConversation(question, answer);

    if (destination) {

      setTimeout(() => {
        showScreen(destination);
      }, 1800);

    }

  }


  function startVoice() {

    if (!SpeechRecognition) {

      $("voiceStatus").textContent =
        "Voice recognition is unavailable. Open this website in Chrome and allow microphone access.";

      return;

    }

    if (listening) {
      recognition.stop();
      return;
    }

    recognition = new SpeechRecognition();

    recognition.lang = "kn-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {

      listening = true;

      $("voiceButton").classList.add("listening");
      $("voiceStatus").textContent = "Listening...";
      $("voiceHint").textContent = "Speak now";

    };

    recognition.onresult = event => {

      const question =
        event.results[0][0].transcript;

      $("voiceHint").textContent =
        "ನಿಮ್ಮ ಪ್ರಶ್ನೆ: " + question;

      processQuestion(question);

    };

    recognition.onerror = event => {

      $("voiceStatus").textContent =
        "Microphone error: " + event.error;

    };

    recognition.onend = () => {

      listening = false;
      recognition = null;

      $("voiceButton").classList.remove("listening");
      $("voiceStatus").textContent = "Tap to speak again";

    };

    try {
      recognition.start();
    } catch (error) {
      $("voiceStatus").textContent =
        "Could not start microphone. Please try again.";
      recognition = null;
      listening = false;
    }

  }


  $("voiceButton").addEventListener("click", startVoice);

  window.startVoice = startVoice;

  $("stopVoice").addEventListener("click", () => {

    if (recognition && listening) {
      recognition.stop();
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    $("voiceStatus").textContent = "Voice assistant stopped.";

  });


  // Example question buttons

  window.askExample = function (type) {

    const examples = {
      crop: "ನನ್ನ ಬೆಳೆಗೆ ರೋಗ ಬಂದಿದೆ",
      soil: "ನನ್ನ ಮಣ್ಣಿನ ಮಾಹಿತಿ ಬೇಕು",
      scheme: "ನನಗೆ ಕೃಷಿ ಯೋಜನೆಗಳ ಮಾಹಿತಿ ಬೇಕು"
    };

    processQuestion(examples[type] || "ನನಗೆ ಕೃಷಿ ಸಹಾಯ ಬೇಕು");

  };


  // =====================================
  // INITIAL SCREEN
  // =====================================

  showScreen("home");

});