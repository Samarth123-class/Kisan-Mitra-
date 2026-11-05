
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. ELEMENTS
    // ==========================================

    const languageSelect = document.getElementById("languageSelect");
    const voiceButton = document.getElementById("voiceButton");
    const voiceStatus = document.getElementById("voiceStatus");

    const cropImage = document.getElementById("cropImage");
    const cropPreview = document.getElementById("cropPreview");
    const analyzeCrop = document.getElementById("analyzeCrop");
    const cropResult = document.getElementById("cropResult");

    const soilPH = document.getElementById("soilPH");
    const nitrogen = document.getElementById("nitrogen");
    const phosphorus = document.getElementById("phosphorus");
    const potassium = document.getElementById("potassium");
    const soilSubmit = document.getElementById("soilSubmit");
    const soilResult = document.getElementById("soilResult");

    const schemeSearch = document.getElementById("schemeSearch");
    const schemeList = document.getElementById("schemeList");

    const farmerName = document.getElementById("farmerName");
    const farmLocation = document.getElementById("farmLocation");
    const saveProfile = document.getElementById("saveProfile");
    const profileResult = document.getElementById("profileResult");

    // ==========================================
    // 2. LANGUAGE SETTINGS
    // ==========================================

    const speechLanguages = {
        en: "en-IN",
        kn: "kn-IN",
        hi: "hi-IN",
        ta: "ta-IN",
        te: "te-IN",
        ml: "ml-IN"
    };

    const translations = {
        en: {
            tagline: "Technology That Speaks the Farmer's Language.",
            heroTitle: "Healthy Soil, Better Crops.",
            heroDescription: "Smart agricultural guidance for every farmer.",
            explore: "Explore Services →",
            services: "Our Services",
            cropDoctor: "Crop Doctor",
            cropDescription: "Crop health guidance",
            soil: "Soil Intelligence",
            soilDescription: "Understand your soil",
            schemes: "Govt. Schemes",
            schemesDescription: "Discover benefits",
            marketplace: "Agri Marketplace",
            marketplaceDescription: "Explore farm products",
            talk: "Talk to Marutham",
            assistantDescription: "Your multilingual farming assistant",
            tapMic: "Tap the microphone to speak",
            cropTitle: "AI Crop Doctor",
            cropIntro: "Upload a crop photograph to get crop health guidance.",
            choosePhoto: "Choose crop photograph",
            preview: "Your crop photograph will appear here.",
            analyze: "Analyze Crop",
            soilTitle: "Soil Intelligence",
            soilIntro: "Enter your soil report details.",
            soilButton: "View Soil Information",
            schemesTitle: "Government Schemes",
            schemesIntro: "Discover agricultural schemes and benefits.",
            searchSchemes: "Search government schemes...",
            all: "All",
            central: "Central",
            state: "State",
            marketTitle: "Agri Marketplace",
            marketIntro: "Explore agricultural products and farming resources.",
            marketPlaceholder: "Marketplace products will appear here.",
            profileTitle: "Farmer Profile",
            profileIntro: "Manage your farming information and yearly records.",
            farmerPlaceholder: "Farmer's name",
            locationPlaceholder: "Farm location",
            save: "Save Profile",
            home: "Home",
            navServices: "Services",
            profile: "Profile",
            more: "More",
            thanks: "Thank you for choosing Marutham. ",
            listening: "Listening... Speak now.",
            notSupported: "Voice recognition is not supported in this browser.",
            cropAdvice: "Please upload a clear crop photograph in Crop Doctor. Marutham can display your image, but an AI diagnosis needs to be connected to a backend.",
            soilAdvice: "Please open Soil Intelligence and enter the values from your soil test report. I can provide basic guidance based on the values.",
            schemeAdvice: "Please visit Government Schemes to explore scheme information. Check the official government website for the latest eligibility and application details.",
            marketAdvice: "Please open Agri Marketplace to explore agricultural products and farming resources.",
            waterAdvice: "Water your crops according to the crop's needs, soil condition and local weather. Avoid unnecessary irrigation. Open Soil Intelligence for soil information.",
            harvestAdvice: "Harvesting time depends on the crop variety, maturity and local conditions. Please check local agricultural guidance before harvesting.",
            greeting: "Namaste! How can I help you with your farming today?",
            general: "I can help you explore Crop Doctor, Soil Intelligence, Government Schemes and Agri Marketplace. Please ask me about one of these services.",
            error: "I could not understand that clearly. Please try speaking again.",
            cropStatus: "Real AI crop diagnosis is not connected yet. Your photograph has been uploaded successfully.",
            noImage: "Please choose a crop photograph first.",
            soilInvalid: "Please enter valid soil values before continuing.",
            soilGuidance: "These are basic observations, not a substitute for a laboratory soil report or local agricultural expert.",
            profileSaved: "Farmer profile saved successfully on this device.",
            profileError: "Please enter the farmer's name and farm location.",
            noSchemes: "No matching schemes found."
        },

        kn: {
            tagline: "ರೈತರ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುವ ತಂತ್ರಜ್ಞಾನ.",
            heroTitle: "ಆರೋಗ್ಯಕರ ಮಣ್ಣು, ಉತ್ತಮ ಬೆಳೆ.",
            heroDescription: "ಪ್ರತಿಯೊಬ್ಬ ರೈತನಿಗೂ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ.",
            explore: "ಸೇವೆಗಳು ನೋಡಿ →",
            services: "ನಮ್ಮ ಸೇವೆಗಳು",
            cropDoctor: "ಬೆಳೆ ವೈದ್ಯ",
            cropDescription: "ಬೆಳೆ ಆರೋಗ್ಯದ ಮಾಹಿತಿ",
            soil: "ಮಣ್ಣಿನ ಮಾಹಿತಿ",
            soilDescription: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ತಿಳಿಯಿರಿ",
            schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
            schemesDescription: "ಸೌಲಭ್ಯಗಳನ್ನು ತಿಳಿಯಿರಿ",
            marketplace: "ಕೃಷಿ ಮಾರುಕಟ್ಟೆ",
            marketplaceDescription: "ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
            talk: "ಮಾರುತಮ್ ಜೊತೆ ಮಾತನಾಡಿ",
            assistantDescription: "ನಿಮ್ಮ ಬಹುಭಾಷಾ ಕೃಷಿ ಸಹಾಯಕ",
            tapMic: "ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿ",
            cropTitle: "AI ಬೆಳೆ ವೈದ್ಯ",
            cropIntro: "ಬೆಳೆಯ ಆರೋಗ್ಯದ ಮಾಹಿತಿ ಪಡೆಯಲು ಫೋಟೋ ಹಾಕಿ.",
            choosePhoto: "ಬೆಳೆಯ ಫೋಟೋ ಆಯ್ಕೆ ಮಾಡಿ",
            preview: "ನಿಮ್ಮ ಬೆಳೆ ಫೋಟೋ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.",
            analyze: "ಬೆಳೆ ಪರಿಶೀಲಿಸಿ",
            soilTitle: "ಮಣ್ಣಿನ ಮಾಹಿತಿ",
            soilIntro: "ನಿಮ್ಮ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ವಿವರಗಳನ್ನು ಹಾಕಿ.",
            soilButton: "ಮಣ್ಣಿನ ಮಾಹಿತಿ ನೋಡಿ",
            schemesTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
            schemesIntro: "ಕೃಷಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸೌಲಭ್ಯಗಳನ್ನು ತಿಳಿಯಿರಿ.",
            searchSchemes: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ...",
            all: "ಎಲ್ಲಾ",
            central: "ಕೇಂದ್ರ",
            state: "ರಾಜ್ಯ",
            marketTitle: "ಕೃಷಿ ಮಾರುಕಟ್ಟೆ",
            marketIntro: "ಕೃಷಿ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳನ್ನು ನೋಡಿ.",
            marketPlaceholder: "ಕೃಷಿ ಉತ್ಪನ್ನಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
            profileTitle: "ರೈತರ ವಿವರಗಳು",
            profileIntro: "ನಿಮ್ಮ ಕೃಷಿ ವಿವರಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
            farmerPlaceholder: "ರೈತರ ಹೆಸರು",
            locationPlaceholder: "ಹೊಲದ ಸ್ಥಳ",
            save: "ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
            home: "ಮುಖಪುಟ",
            navServices: "ಸೇವೆಗಳು",
            profile: "ಪ್ರೊಫೈಲ್",
            more: "ಇನ್ನಷ್ಟು",
            thanks: "ಮಾರುತಮ್ ಆಯ್ಕೆ ಮಾಡಿಕೊಂಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು ರೈತರೇ. ",
            listening: "ಕೇಳುತ್ತಿದ್ದೇನೆ... ಮಾತನಾಡಿ.",
            notSupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಲಭ್ಯವಿಲ್ಲ.",
            cropAdvice: "ರೈತರೇ, ಬೆಳೆ ವೈದ್ಯ ವಿಭಾಗದಲ್ಲಿ ಬೆಳೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋ ಹಾಕಿ. ಫೋಟೋವನ್ನು ತೋರಿಸಬಹುದು; ನಿಜವಾದ AI ರೋಗ ಪತ್ತೆಗೆ ಇನ್ನೂ ಬ್ಯಾಕೆಂಡ್ ಸಂಪರ್ಕ ಬೇಕಾಗಿದೆ.",
            soilAdvice: "ಮಣ್ಣಿನ ಮಾಹಿತಿ ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ ನಿಮ್ಮ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ವರದಿಯ ಅಂಕಿಗಳನ್ನು ಹಾಕಿ. ಅದರ ಆಧಾರದ ಮೇಲೆ ಸಾಮಾನ್ಯ ಮಾಹಿತಿ ನೀಡುತ್ತೇನೆ.",
            schemeAdvice: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ವಿಭಾಗದಲ್ಲಿ ಯೋಜನೆಗಳ ಮಾಹಿತಿ ನೋಡಿ. ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿ ವಿವರಗಳನ್ನು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
            marketAdvice: "ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳ ಮಾಹಿತಿಯನ್ನು ನೋಡಿ.",
            waterAdvice: "ಬೆಳೆಯ ಅವಶ್ಯಕತೆ, ಮಣ್ಣಿನ ಸ್ಥಿತಿ ಮತ್ತು ಸ್ಥಳೀಯ ಹವಾಮಾನಕ್ಕೆ ತಕ್ಕಂತೆ ನೀರು ಕೊಡಿ. ಅನಗತ್ಯವಾಗಿ ನೀರು ಹಾಕಬೇಡಿ. ಮಣ್ಣಿನ ಮಾಹಿತಿ ವಿಭಾಗವನ್ನೂ ನೋಡಿ.",
            harvestAdvice: "ಕೊಯ್ಲಿನ ಸಮಯವು ಬೆಳೆ, ಅದರ ಪಕ್ವತೆ ಮತ್ತು ಸ್ಥಳೀಯ ಪರಿಸ್ಥಿತಿಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ. ಕೊಯ್ಲು ಮಾಡುವ ಮೊದಲು ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.",
            greeting: "ನಮಸ್ಕಾರ ರೈತರೇ! ಕೃಷಿಯಲ್ಲಿ ನಿಮಗೆ ಏನು ಸಹಾಯ ಬೇಕು?",
            general: "ಬೆಳೆ ವೈದ್ಯ, ಮಣ್ಣಿನ ಮಾಹಿತಿ, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಬಗ್ಗೆ ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. ಯಾವುದರ ಬಗ್ಗೆ ತಿಳಿಯಬೇಕು?",
            error: "ನಿಮ್ಮ ಮಾತು ಸರಿಯಾಗಿ ಅರ್ಥವಾಗಲಿಲ್ಲ. ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ.",
            cropStatus: "ನಿಮ್ಮ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ. ಆದರೆ ನಿಜವಾದ AI ಬೆಳೆ ರೋಗ ಪತ್ತೆ ವ್ಯವಸ್ಥೆ ಇನ್ನೂ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ.",
            noImage: "ಮೊದಲು ಬೆಳೆಯ ಫೋಟೋ ಆಯ್ಕೆ ಮಾಡಿ.",
            soilInvalid: "ಮುಂದುವರಿಯುವ ಮೊದಲು ಸರಿಯಾದ ಮಣ್ಣಿನ ಮೌಲ್ಯಗಳನ್ನು ನಮೂದಿಸಿ.",
            soilGuidance: "ಇದು ಸಾಮಾನ್ಯ ಮಾಹಿತಿ ಮಾತ್ರ. ಮಣ್ಣಿನ ಪ್ರಯೋಗಾಲಯದ ವರದಿ ಅಥವಾ ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆಗೆ ಬದಲಿಯಲ್ಲ.",
            profileSaved: "ರೈತರ ವಿವರಗಳು ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ.",
            profileError: "ರೈತರ ಹೆಸರು ಮತ್ತು ಹೊಲದ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ.",
            noSchemes: "ಹೊಂದಾಣಿಕೆಯ ಯೋಜನೆಗಳು ಸಿಗಲಿಲ್ಲ."
        },

        hi: {
            tagline: "किसानों की भाषा बोलने वाली तकनीक।",
            heroTitle: "स्वस्थ मिट्टी, बेहतर फसल।",
            heroDescription: "हर किसान के लिए स्मार्ट कृषि मार्गदर्शन।",
            explore: "सेवाएँ देखें →",
            services: "हमारी सेवाएँ",
            cropDoctor: "फसल डॉक्टर",
            cropDescription: "फसल स्वास्थ्य मार्गदर्शन",
            soil: "मिट्टी की जानकारी",
            soilDescription: "अपनी मिट्टी को समझें",
            schemes: "सरकारी योजनाएँ",
            schemesDescription: "लाभों की जानकारी",
            marketplace: "कृषि बाज़ार",
            marketplaceDescription: "कृषि उत्पाद देखें",
            talk: "Marutham से बात करें",
            assistantDescription: "आपका बहुभाषी कृषि सहायक",
            tapMic: "बोलने के लिए माइक दबाएँ",
            cropTitle: "AI फसल डॉक्टर",
            cropIntro: "फसल के स्वास्थ्य की जानकारी के लिए फोटो अपलोड करें।",
            choosePhoto: "फसल की फोटो चुनें",
            preview: "आपकी फसल की फोटो यहाँ दिखाई देगी।",
            analyze: "फसल का विश्लेषण करें",
            soilTitle: "मिट्टी की जानकारी",
            soilIntro: "अपनी मिट्टी की रिपोर्ट के विवरण भरें।",
            soilButton: "मिट्टी की जानकारी देखें",
            schemesTitle: "सरकारी योजनाएँ",
            schemesIntro: "कृषि योजनाओं और लाभों की जानकारी पाएँ।",
            searchSchemes: "योजनाएँ खोजें...",
            all: "सभी",
            central: "केंद्र",
            state: "राज्य",
            marketTitle: "कृषि बाज़ार",
            marketIntro: "कृषि उत्पाद और संसाधन देखें।",
            marketPlaceholder: "कृषि उत्पाद यहाँ दिखाई देंगे।",
            profileTitle: "किसान प्रोफ़ाइल",
            profileIntro: "अपनी खेती की जानकारी सँभालें।",
            farmerPlaceholder: "किसान का नाम",
            locationPlaceholder: "खेत का स्थान",
            save: "प्रोफ़ाइल सहेजें",
            home: "होम",
            navServices: "सेवाएँ",
            profile: "प्रोफ़ाइल",
            more: "और",
            thanks: "Marutham चुनने के लिए धन्यवाद किसान जी। ",
            listening: "सुन रहा हूँ... बोलिए।",
            notSupported: "इस ब्राउज़र में आवाज़ पहचान उपलब्ध नहीं है।",
            cropAdvice: "फसल डॉक्टर में अपनी फसल की साफ़ तस्वीर अपलोड करें। वास्तविक AI रोग पहचान के लिए बैकएंड कनेक्शन आवश्यक है।",
            soilAdvice: "मिट्टी की जानकारी में अपनी मिट्टी की जाँच रिपोर्ट के मान दर्ज करें।",
            schemeAdvice: "सरकारी योजनाओं में जानकारी देखें और पात्रता की पुष्टि आधिकारिक वेबसाइट पर करें।",
            marketAdvice: "कृषि बाज़ार में कृषि उत्पादों और संसाधनों की जानकारी देखें।",
            waterAdvice: "फसल, मिट्टी और स्थानीय मौसम के अनुसार सिंचाई करें।",
            harvestAdvice: "कटाई का समय फसल की किस्म और पकने की स्थिति पर निर्भर करता है।",
            greeting: "नमस्ते किसान जी! आज खेती में क्या सहायता चाहिए?",
            general: "मैं फसल डॉक्टर, मिट्टी, सरकारी योजनाओं और कृषि बाज़ार के बारे में सहायता कर सकता हूँ।",
            error: "मैं आपकी बात समझ नहीं पाया। कृपया फिर से बोलें।",
            cropStatus: "तस्वीर अपलोड हो गई है। वास्तविक AI जाँच अभी जुड़ी नहीं है।",
            noImage: "पहले फसल की तस्वीर चुनें।",
            soilInvalid: "कृपया मिट्टी के सही मान दर्ज करें।",
            soilGuidance: "यह सामान्य जानकारी है, प्रयोगशाला रिपोर्ट या कृषि विशेषज्ञ की सलाह का विकल्प नहीं।",
            profileSaved: "किसान प्रोफ़ाइल इस डिवाइस पर सहेजी गई।",
            profileError: "किसान का नाम और खेत का स्थान दर्ज करें।",
            noSchemes: "कोई मिलती-जुलती योजना नहीं मिली।"
        },

        ta: {
            tagline: "விவசாயியின் மொழியில் பேசும் தொழில்நுட்பம்.",
            heroTitle: "ஆரோக்கியமான மண், சிறந்த பயிர்கள்.",
            heroDescription: "ஒவ்வொரு விவசாயிக்கும் நவீன வேளாண் வழிகாட்டுதல்.",
            explore: "சேவைகளைப் பார்க்கவும் →",
            services: "எங்கள் சேவைகள்",
            cropDoctor: "பயிர் மருத்துவர்",
            cropDescription: "பயிர் ஆரோக்கிய வழிகாட்டுதல்",
            soil: "மண் தகவல்",
            soilDescription: "உங்கள் மண்ணைப் புரிந்துகொள்ளுங்கள்",
            schemes: "அரசுத் திட்டங்கள்",
            schemesDescription: "நன்மைகளை அறியுங்கள்",
            marketplace: "வேளாண் சந்தை",
            marketplaceDescription: "விவசாயப் பொருட்களைப் பாருங்கள்",
            talk: "Marutham உடன் பேசுங்கள்",
            assistantDescription: "உங்கள் பன்மொழி வேளாண் உதவியாளர்",
            tapMic: "பேச மைக்கை அழுத்தவும்",
            cropTitle: "AI பயிர் மருத்துவர்",
            cropIntro: "பயிர் புகைப்படத்தைப் பதிவேற்றவும்.",
            choosePhoto: "பயிர் புகைப்படத்தைத் தேர்ந்தெடுக்கவும்",
            preview: "உங்கள் புகைப்படம் இங்கே தோன்றும்.",
            analyze: "பயிரை ஆய்வு செய்யவும்",
            soilTitle: "மண் தகவல்",
            soilIntro: "மண் பரிசோதனை விவரங்களை உள்ளிடவும்.",
            soilButton: "மண் தகவலைப் பார்க்கவும்",
            schemesTitle: "அரசுத் திட்டங்கள்",
            schemesIntro: "வேளாண் திட்டங்கள் மற்றும் நன்மைகளை அறியுங்கள்.",
            searchSchemes: "திட்டங்களைத் தேடுங்கள்...",
            all: "அனைத்தும்",
            central: "மத்திய",
            state: "மாநில",
            marketTitle: "வேளாண் சந்தை",
            marketIntro: "வேளாண் பொருட்கள் மற்றும் வளங்களைப் பாருங்கள்.",
            marketPlaceholder: "வேளாண் பொருட்கள் இங்கே தோன்றும்.",
            profileTitle: "விவசாயி சுயவிவரம்",
            profileIntro: "உங்கள் விவசாய விவரங்களை நிர்வகிக்கவும்.",
            farmerPlaceholder: "விவசாயியின் பெயர்",
            locationPlaceholder: "வயல் அமைவிடம்",
            save: "சுயவிவரத்தைச் சேமிக்கவும்",
            home: "முகப்பு",
            navServices: "சேவைகள்",
            profile: "சுயவிவரம்",
            more: "மேலும்",
            thanks: "Marutham-ஐத் தேர்ந்தெடுத்ததற்கு நன்றி. ",
            listening: "கேட்கிறேன்... பேசுங்கள்.",
            notSupported: "இந்த உலாவியில் குரல் அடையாளம் காணுதல் ஆதரிக்கப்படவில்லை.",
            cropAdvice: "பயிர் மருத்துவர் பகுதியில் தெளிவான புகைப்படத்தைப் பதிவேற்றவும். உண்மையான AI ஆய்வுக்கு பின்புற சேவையகம் தேவை.",
            soilAdvice: "மண் தகவல் பகுதியில் உங்கள் மண் பரிசோதனை மதிப்புகளை உள்ளிடவும்.",
            schemeAdvice: "அரசுத் திட்டப் பகுதியில் விவரங்களைப் பாருங்கள். தகுதியை அதிகாரப்பூர்வ இணையதளத்தில் உறுதிப்படுத்தவும்.",
            marketAdvice: "வேளாண் சந்தைப் பகுதியில் பொருட்களைப் பாருங்கள்.",
            waterAdvice: "பயிர், மண் மற்றும் உள்ளூர் வானிலைக்கு ஏற்ப நீர்ப்பாசனம் செய்யுங்கள்.",
            harvestAdvice: "அறுவடை நேரம் பயிர் வகை மற்றும் முதிர்ச்சியைப் பொறுத்தது.",
            greeting: "வணக்கம் விவசாயிகளே! இன்று என்ன உதவி தேவை?",
            general: "பயிர் மருத்துவர், மண் தகவல், அரசுத் திட்டங்கள் மற்றும் வேளாண் சந்தை பற்றி உதவ முடியும்.",
            error: "உங்கள் பேச்சைத் தெளிவாகப் புரிந்துகொள்ள முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
            cropStatus: "புகைப்படம் பதிவேற்றப்பட்டது. உண்மையான AI ஆய்வு இன்னும் இணைக்கப்படவில்லை.",
            noImage: "முதலில் புகைப்படத்தைத் தேர்ந்தெடுக்கவும்.",
            soilInvalid: "சரியான மண் மதிப்புகளை உள்ளிடவும்.",
            soilGuidance: "இது பொதுவான தகவல் மட்டுமே; ஆய்வக அறிக்கைக்கு மாற்றாகாது.",
            profileSaved: "விவசாயி விவரம் இந்தச் சாதனத்தில் சேமிக்கப்பட்டது.",
            profileError: "பெயர் மற்றும் வயல் அமைவிடத்தை உள்ளிடவும்.",
            noSchemes: "பொருத்தமான திட்டங்கள் எதுவும் கிடைக்கவில்லை."
        },

        te: {
            tagline: "రైతు భాషలో మాట్లాడే సాంకేతికత.",
            heroTitle: "ఆరోగ్యకరమైన నేల, మెరుగైన పంటలు.",
            heroDescription: "ప్రతి రైతుకు స్మార్ట్ వ్యవసాయ మార్గదర్శకం.",
            explore: "సేవలను చూడండి →",
            services: "మా సేవలు",
            cropDoctor: "పంట వైద్యుడు",
            cropDescription: "పంట ఆరోగ్య సమాచారం",
            soil: "నేల సమాచారం",
            soilDescription: "మీ నేలను తెలుసుకోండి",
            schemes: "ప్రభుత్వ పథకాలు",
            schemesDescription: "ప్రయోజనాలను తెలుసుకోండి",
            marketplace: "వ్యవసాయ మార్కెట్",
            marketplaceDescription: "వ్యవసాయ ఉత్పత్తులను చూడండి",
            talk: "Marutham తో మాట్లాడండి",
            assistantDescription: "మీ బహుభాషా వ్యవసాయ సహాయకుడు",
            tapMic: "మాట్లాడటానికి మైక్ నొక్కండి",
            cropTitle: "AI పంట వైద్యుడు",
            cropIntro: "పంట ఆరోగ్య సమాచారం కోసం ఫోటో అప్‌లోడ్ చేయండి.",
            choosePhoto: "పంట ఫోటోను ఎంచుకోండి",
            preview: "మీ పంట ఫోటో ఇక్కడ కనిపిస్తుంది.",
            analyze: "పంటను విశ్లేషించండి",
            soilTitle: "నేల సమాచారం",
            soilIntro: "మీ నేల పరీక్ష వివరాలను నమోదు చేయండి.",
            soilButton: "నేల సమాచారాన్ని చూడండి",
            schemesTitle: "ప్రభుత్వ పథకాలు",
            schemesIntro: "వ్యవసాయ పథకాలు మరియు ప్రయోజనాలను తెలుసుకోండి.",
            searchSchemes: "పథకాలను వెతకండి...",
            all: "అన్నీ",
            central: "కేంద్ర",
            state: "రాష్ట్ర",
            marketTitle: "వ్యవసాయ మార్కెట్",
            marketIntro: "వ్యవసాయ ఉత్పత్తులు మరియు వనరులను చూడండి.",
            marketPlaceholder: "ఉత్పత్తులు ఇక్కడ కనిపిస్తాయి.",
            profileTitle: "రైతు ప్రొఫైల్",
            profileIntro: "మీ వ్యవసాయ వివరాలను నిర్వహించండి.",
            farmerPlaceholder: "రైతు పేరు",
            locationPlaceholder: "పొలం ప్రదేశం",
            save: "ప్రొఫైల్ సేవ్ చేయండి",
            home: "హోమ్",
            navServices: "సేవలు",
            profile: "ప్రొఫైల్",
            more: "మరిన్ని",
            thanks: "Marutham ఎంచుకున్నందుకు ధన్యవాదాలు రైతు గారూ. ",
            listening: "వింటున్నాను... మాట్లాడండి.",
            notSupported: "ఈ బ్రౌజర్‌లో వాయిస్ గుర్తింపు అందుబాటులో లేదు.",
            cropAdvice: "పంట వైద్యుడు విభాగంలో స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి. నిజమైన AI నిర్ధారణకు బ్యాకెండ్ అవసరం.",
            soilAdvice: "నేల సమాచారం విభాగంలో మీ నేల పరీక్ష విలువలను నమోదు చేయండి.",
            schemeAdvice: "ప్రభుత్వ పథకాల విభాగంలో వివరాలు చూడండి. అర్హతను అధికారిక వెబ్‌సైట్‌లో నిర్ధారించుకోండి.",
            marketAdvice: "వ్యవసాయ మార్కెట్ విభాగంలో ఉత్పత్తులను చూడండి.",
            waterAdvice: "పంట, నేల మరియు స్థానిక వాతావరణాన్ని బట్టి నీరు పెట్టండి.",
            harvestAdvice: "కోత సమయం పంట రకం మరియు పక్వతపై ఆధారపడి ఉంటుంది.",
            greeting: "నమస్కారం రైతులారా! వ్యవసాయంలో ఏ సహాయం కావాలి?",
            general: "పంట వైద్యుడు, నేల సమాచారం, ప్రభుత్వ పథకాలు మరియు వ్యవసాయ మార్కెట్ గురించి సహాయం చేయగలను.",
            error: "మీ మాట అర్థం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.",
            cropStatus: "ఫోటో అప్‌లోడ్ అయింది. నిజమైన AI విశ్లేషణ ఇంకా అనుసంధానం కాలేదు.",
            noImage: "ముందుగా పంట ఫోటోను ఎంచుకోండి.",
            soilInvalid: "దయచేసి సరైన నేల విలువలను నమోదు చేయండి.",
            soilGuidance: "ఇది సాధారణ సమాచారం మాత్రమే; ప్రయోగశాల నివేదికకు ప్రత్యామ్నాయం కాదు.",
            profileSaved: "రైతు వివరాలు ఈ పరికరంలో సేవ్ అయ్యాయి.",
            profileError: "రైతు పేరు మరియు పొలం ప్రదేశాన్ని నమోదు చేయండి.",
            noSchemes: "సరిపోలే పథకాలు కనుగొనబడలేదు."
        },

        ml: {
            tagline: "കർഷകരുടെ ഭാഷ സംസാരിക്കുന്ന സാങ്കേതികവിദ്യ.",
            heroTitle: "ആരോഗ്യമുള്ള മണ്ണ്, മികച്ച വിളകൾ.",
            heroDescription: "ഓരോ കർഷകനും സ്മാർട്ട് കാർഷിക മാർഗ്ഗനിർദ്ദേശം.",
            explore: "സേവനങ്ങൾ കാണുക →",
            services: "ഞങ്ങളുടെ സേവനങ്ങൾ",
            cropDoctor: "വിള ഡോക്ടർ",
            cropDescription: "വിള ആരോഗ്യ മാർഗ്ഗനിർദ്ദേശം",
            soil: "മണ്ണിന്റെ വിവരങ്ങൾ",
            soilDescription: "നിങ്ങളുടെ മണ്ണിനെ അറിയുക",
            schemes: "സർക്കാർ പദ്ധതികൾ",
            schemesDescription: "ആനുകൂല്യങ്ങൾ അറിയുക",
            marketplace: "കാർഷിക വിപണി",
            marketplaceDescription: "കാർഷിക ഉൽപ്പന്നങ്ങൾ കാണുക",
            talk: "Marutham-നോട് സംസാരിക്കുക",
            assistantDescription: "നിങ്ങളുടെ ബഹുഭാഷാ കാർഷിക സഹായി",
            tapMic: "സംസാരിക്കാൻ മൈക്ക് അമർത്തുക",
            cropTitle: "AI വിള ഡോക്ടർ",
            cropIntro: "വിളയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
            choosePhoto: "വിളയുടെ ഫോട്ടോ തിരഞ്ഞെടുക്കുക",
            preview: "നിങ്ങളുടെ ഫോട്ടോ ഇവിടെ കാണാം.",
            analyze: "വിള പരിശോധിക്കുക",
            soilTitle: "മണ്ണിന്റെ വിവരങ്ങൾ",
            soilIntro: "മണ്ണ് പരിശോധനാ വിവരങ്ങൾ നൽകുക.",
            soilButton: "മണ്ണിന്റെ വിവരങ്ങൾ കാണുക",
            schemesTitle: "സർക്കാർ പദ്ധതികൾ",
            schemesIntro: "കാർഷിക പദ്ധതികളും ആനുകൂല്യങ്ങളും അറിയുക.",
            searchSchemes: "പദ്ധതികൾ തിരയുക...",
            all: "എല്ലാം",
            central: "കേന്ദ്രം",
            state: "സംസ്ഥാനം",
            marketTitle: "കാർഷിക വിപണി",
            marketIntro: "കാർഷിക ഉൽപ്പന്നങ്ങളും വിഭവങ്ങളും കാണുക.",
            marketPlaceholder: "ഉൽപ്പന്നങ്ങൾ ഇവിടെ കാണാം.",
            profileTitle: "കർഷക പ്രൊഫൈൽ",
            profileIntro: "നിങ്ങളുടെ കൃഷി വിവരങ്ങൾ കൈകാര്യം ചെയ്യുക.",
            farmerPlaceholder: "കർഷകന്റെ പേര്",
            locationPlaceholder: "കൃഷിയിടത്തിന്റെ സ്ഥലം",
            save: "പ്രൊഫൈൽ സേവ് ചെയ്യുക",
            home: "ഹോം",
            navServices: "സേവനങ്ങൾ",
            profile: "പ്രൊഫൈൽ",
            more: "കൂടുതൽ",
            thanks: "Marutham തിരഞ്ഞെടുത്തതിന് നന്ദി കർഷകരേ. ",
            listening: "ശ്രദ്ധിക്കുന്നു... സംസാരിക്കൂ.",
            notSupported: "ഈ ബ്രൗസറിൽ ശബ്ദ തിരിച്ചറിയൽ ലഭ്യമല്ല.",
            cropAdvice: "വിള ഡോക്ടർ വിഭാഗത്തിൽ വ്യക്തമായ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക. യഥാർത്ഥ AI പരിശോധനയ്ക്ക് ബാക്കെൻഡ് ബന്ധിപ്പിക്കണം.",
            soilAdvice: "മണ്ണിന്റെ വിവരങ്ങൾ വിഭാഗത്തിൽ മണ്ണ് പരിശോധനാ മൂല്യങ്ങൾ നൽകുക.",
            schemeAdvice: "സർക്കാർ പദ്ധതികളുടെ വിവരങ്ങൾ പരിശോധിക്കുക. യോഗ്യത ഔദ്യോഗിക വെബ്‌സൈറ്റിൽ ഉറപ്പാക്കുക.",
            marketAdvice: "കാർഷിക വിപണി വിഭാഗത്തിൽ ഉൽപ്പന്നങ്ങൾ കാണുക.",
            waterAdvice: "വിള, മണ്ണ്, പ്രാദേശിക കാലാവസ്ഥ എന്നിവ അനുസരിച്ച് നനയ്ക്കുക.",
            harvestAdvice: "വിളവെടുപ്പ് സമയം വിളയുടെ ഇനത്തെയും പാകത്തെയും ആശ്രയിച്ചിരിക്കുന്നു.",
            greeting: "നമസ്കാരം കർഷകരേ! കൃഷിയിൽ എന്ത് സഹായമാണ് വേണ്ടത്?",
            general: "വിള ഡോക്ടർ, മണ്ണ്, സർക്കാർ പദ്ധതികൾ, കാർഷിക വിപണി എന്നിവയിൽ സഹായിക്കാം.",
            error: "നിങ്ങൾ പറഞ്ഞത് വ്യക്തമായി മനസ്സിലായില്ല. വീണ്ടും ശ്രമിക്കുക.",
            cropStatus: "ഫോട്ടോ അപ്‌ലോഡ് ചെയ്തു. യഥാർത്ഥ AI പരിശോധന ഇതുവരെ ബന്ധിപ്പിച്ചിട്ടില്ല.",
            noImage: "ആദ്യം വിളയുടെ ഫോട്ടോ തിരഞ്ഞെടുക്കുക.",
            soilInvalid: "ശരിയായ മണ്ണ് മൂല്യങ്ങൾ നൽകുക.",
            soilGuidance: "ഇത് പൊതുവായ വിവരമാണ്; ലാബ് റിപ്പോർട്ടിന് പകരമല്ല.",
            profileSaved: "കർഷക വിവരങ്ങൾ ഈ ഉപകരണത്തിൽ സൂക്ഷിച്ചു.",
            profileError: "കർഷകന്റെ പേരും കൃഷിയിടത്തിന്റെ സ്ഥലവും നൽകുക.",
            noSchemes: "പൊരുത്തപ്പെടുന്ന പദ്ധതികൾ കണ്ടെത്തിയില്ല."
        }
    };

    let currentLanguage = "en";
    let recognition = null;
    let isListening = false;
    let selectedFilter = "all";
    let currentCropImageURL = null;

    function t(key) {
        return translations[currentLanguage]?.[key] ||
               translations.en[key] ||
               key;
    }

    // ==========================================
    // 3. CHANGE WEBSITE LANGUAGE
    // ==========================================

    function applyLanguage(language) {
        currentLanguage = translations[language] ? language : "en";

        document.documentElement.lang =
            speechLanguages[currentLanguage];

        const tr = translations[currentLanguage];

        const setText = (selector, value) => {
            const element = document.querySelector(selector);
            if (element) element.textContent = value;
        };

        setText(".tagline", tr.tagline);
        setText(".hero h1", tr.heroTitle);
        setText(".hero-content > p:not(.tagline)", tr.heroDescription);
        setText(".primary-btn[href='#services']", tr.explore);
        setText(".section-heading h2", tr.services);

        const serviceCards = document.querySelectorAll(".service-card");

        const serviceTranslations = [
            [tr.cropDoctor, tr.cropDescription],
            [tr.soil, tr.soilDescription],
            [tr.schemes, tr.schemesDescription],
            [tr.marketplace, tr.marketplaceDescription]
        ];

        serviceCards.forEach((card, index) => {
            if (!serviceTranslations[index]) return;

            const strong = card.querySelector("strong");
            const small = card.querySelector("small");

            if (strong) strong.textContent = serviceTranslations[index][0];
            if (small) small.textContent = serviceTranslations[index][1];
        });

        setText("#assistant h2", tr.talk);
        setText("#assistant > div > p", tr.assistantDescription);

        if (!isListening && voiceStatus) {
            voiceStatus.textContent = tr.tapMic;
        }

        setText("#crop-doctor h2", tr.cropTitle);
        setText("#crop-doctor > p", tr.cropIntro);
        setText("label[for='cropImage']", tr.choosePhoto);
        setText("#analyzeCrop", tr.analyze);

        if (!cropImage?.files?.length && cropPreview) {
            cropPreview.textContent = tr.preview;
        }

        setText("#soil h2", tr.soilTitle);
        setText("#soil > p", tr.soilIntro);
        setText("#soilSubmit", tr.soilButton);

        if (soilPH) soilPH.placeholder =
            currentLanguage === "en" ? "Soil pH" : "Soil pH";
        if (nitrogen) nitrogen.placeholder = "Nitrogen (N)";
        if (phosphorus) phosphorus.placeholder = "Phosphorus (P)";
        if (potassium) potassium.placeholder = "Potassium (K)";

        setText("#schemes h2", tr.schemesTitle);
        setText("#schemes > p", tr.schemesIntro);

        if (schemeSearch) {
            schemeSearch.placeholder = tr.searchSchemes;
        }

        document.querySelectorAll("[data-filter]").forEach(button => {
            const filter = button.dataset.filter;
            button.textContent = tr[filter] || filter;
        });

        setText("#marketplace h2", tr.marketTitle);
        setText("#marketplace > p", tr.marketIntro);
        setText(".marketplace-placeholder", tr.marketPlaceholder);

        setText("#profile h2", tr.profileTitle);
        setText("#profile > p", tr.profileIntro);

        if (farmerName) farmerName.placeholder = tr.farmerPlaceholder;
        if (farmLocation) farmLocation.placeholder = tr.locationPlaceholder;

        setText("#saveProfile", tr.save);

        const navLinks = document.querySelectorAll(".bottom-nav a");

        const navLabels = [
            tr.home,
            tr.navServices,
            null,
            tr.profile,
            tr.more
        ];

        navLinks.forEach((link, index) => {
            const small = link.querySelector("small");
            if (small && navLabels[index]) {
                small.textContent = navLabels[index];
            }
        });

        if (recognition) {
            recognition.lang = speechLanguages[currentLanguage];
        }

        localStorage.setItem("maruthamLanguage", currentLanguage);
    }

    if (languageSelect) {
        const savedLanguage = localStorage.getItem("maruthamLanguage");

        if (savedLanguage && translations[savedLanguage]) {
            languageSelect.value = savedLanguage;
            applyLanguage(savedLanguage);
        }

        languageSelect.addEventListener("change", () => {
            applyLanguage(languageSelect.value);
        });
    }

    // ==========================================
    // 4. VOICE OUTPUT
    // ==========================================

    function speak(text) {
        if (!("speechSynthesis" in window)) {
            if (voiceStatus) {
                voiceStatus.textContent =
                    "Speech output is not supported by this browser.";
            }
            return;
        }

        window.speechSynthesis.cancel();

        // Keep the website spelling unchanged.
        // Use a pronunciation hint only in spoken English.
        let spokenText = text;

        if (currentLanguage === "en") {
            spokenText = spokenText.replace(
                /\bMarutham\b/gi,
                "Maa-ru-tham"
            );
        }

        const message = new SpeechSynthesisUtterance(spokenText);
        const targetLanguage = speechLanguages[currentLanguage];

        message.lang = targetLanguage;
        message.rate = currentLanguage === "kn" ? 0.88 : 0.92;
        message.pitch = 1;

        function chooseVoice() {
            const voices = window.speechSynthesis.getVoices();

            if (!voices.length) return;

            const matchingVoices = voices.filter(voice =>
                voice.lang.toLowerCase().startsWith(
                    targetLanguage.toLowerCase().split("-")[0]
                )
            );

            if (!matchingVoices.length) return;

            const indianVoice = matchingVoices.find(voice =>
                voice.lang.toLowerCase() === targetLanguage.toLowerCase()
            );

            message.voice = indianVoice || matchingVoices[0];
        }

        chooseVoice();

        // Some browsers load voices after the page opens.
        if (!message.voice) {
            window.speechSynthesis.addEventListener(
                "voiceschanged",
                chooseVoice,
                { once: true }
            );
        }

        window.speechSynthesis.speak(message);
    }

    // ==========================================
    // 5. VOICE RECOGNITION
    // ==========================================

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.lang = speechLanguages[currentLanguage];

        recognition.onstart = () => {
            isListening = true;

            if (voiceStatus) {
                voiceStatus.textContent = t("listening");
            }

            if (voiceButton) {
                voiceButton.classList.add("listening");
            }
        };

        recognition.onresult = (event) => {
            const spokenText =
                event.results[event.results.length - 1][0].transcript;

            const query = spokenText.toLowerCase().trim();

            handleVoiceCommand(query);
        };

        recognition.onerror = (event) => {
            isListening = false;

            if (voiceButton) {
                voiceButton.classList.remove("listening");
            }

            if (event.error === "not-allowed" ||
                event.error === "service-not-allowed") {
                voiceStatus.textContent =
                    "Please allow microphone access in your browser.";
            } else if (event.error === "no-speech") {
                voiceStatus.textContent =
                    "No speech detected. Please try again.";
            } else {
                voiceStatus.textContent = t("error");
            }
        };

        recognition.onend = () => {
            isListening = false;

            if (voiceButton) {
                voiceButton.classList.remove("listening");
            }
        };

    } else if (voiceButton && voiceStatus) {
        voiceButton.disabled = true;
        voiceStatus.textContent = t("notSupported");
    }

    // ==========================================
    // 6. FARMER VOICE ASSISTANT
    // ==========================================

    function handleVoiceCommand(query) {

        let answer = t("general");
        let destination = null;

        // Kannada-friendly responses use conversational wording.
        // The wording is adapted for the North Karnataka audience,
        // but the actual accent depends on the installed speech voice.

        const cropWords = [
            "crop", "plant", "leaf", "leaves", "disease",
            "spots", "yellow", "yellowing", "insect", "pest",
            "ಬೆಳೆ", "ಗಿಡ", "ಎಲೆ", "ರೋಗ", "ಕೀಟ", "ಹಳದಿ",
            "फसल", "पौधा", "पत्ता", "रोग", "कीट",
            "பயிர்", "இலை", "நோய்",
            "పంట", "ఆకు", "తెగులు",
            "വിള", "ഇല", "രോഗം"
        ];

        const soilWords = [
            "soil", "ph", "nitrogen", "phosphorus",
            "potassium", "fertility", "ಮಣ್ಣು", "ಮಣ್ಣಿನ",
            "ನೆಲ", "मिट्टी", "नाइट्रोजन",
            "மண்", "நிலம்", "నేల", "మట్టి", "മണ്ണ്"
        ];

        const schemeWords = [
            "scheme", "government", "subsidy", "pm kisan",
            "kisan", "loan", "ಯೋಜನೆ", "ಸರ್ಕಾರ",
            "ಸಬ್ಸಿಡಿ", "ಕಿಸಾನ್", "योजना", "सरकार",
            "सब्सिडी", "திட்டம்", "அரசு",
            "పథకం", "ప్రభుత్వం", "പദ്ധതി", "സർക്കാർ"
        ];

        const marketWords = [
            "market", "buy", "sell", "price", "seeds",
            "fertilizer", "equipment", "ಮಾರುಕಟ್ಟೆ",
            "ಬೀಜ", "ಗೊಬ್ಬರ", "ಬೆಲೆ", "खरीद", "बेच",
            "बाज़ार", "बीज", "உரம்", "விதை",
            "మార్కెట్", "విత్తనం", "വിപണി"
        ];

        const waterWords = [
            "water", "irrigation", "watering", "ನೀರು",
            "ನೀರಾವರಿ", "पानी", "सिंचाई",
            "தண்ணீர்", "நீர்ப்பாசனம்",
            "నీరు", "నీటిపారుదల", "വെള്ളം"
        ];

        const harvestWords = [
            "harvest", "harvesting", "ಕೊಯ್ಲು",
            "कटाई", "அறுவடை", "కోత", "വിളവെടുപ്പ്"
        ];

        const greetingWords = [
            "hello", "hi", "namaste", "ನಮಸ್ಕಾರ",
            "ನಮಸ್ತೆ", "ನಮಸ್ಕಾರ ರೈತರೇ",
            "नमस्ते", "வணக்கம்", "నమస్కారం"
        ];

        function containsAny(words) {
            return words.some(word => query.includes(word));
        }

        if (containsAny(greetingWords)) {
            answer = t("greeting");
        }

        else if (containsAny(cropWords)) {
            answer = t("cropAdvice");
            destination = "crop-doctor";
        }

        else if (containsAny(soilWords)) {
            answer = t("soilAdvice");
            destination = "soil";
        }

        else if (containsAny(schemeWords)) {
            answer = t("schemeAdvice");
            destination = "schemes";
        }

        else if (containsAny(marketWords)) {
            answer = t("marketAdvice");
            destination = "marketplace";
        }

        else if (containsAny(waterWords)) {
            answer = t("waterAdvice");
            destination = "soil";
        }

        else if (containsAny(harvestWords)) {
            answer = t("harvestAdvice");
            destination = "crop-doctor";
        }

        const finalReply = t("thanks") + answer;

        if (voiceStatus) {
            voiceStatus.textContent = finalReply;
        }

        speak(finalReply);

        if (destination) {
            setTimeout(() => {
                const section = document.getElementById(destination);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 700);
        }
    }

    if (voiceButton && recognition) {
        voiceButton.addEventListener("click", () => {
            if (isListening) {
                recognition.stop();
                return;
            }

            window.speechSynthesis.cancel();

            recognition.lang = speechLanguages[currentLanguage];

            try {
                recognition.start();
            } catch (error) {
                console.error("Voice recognition error:", error);
                voiceStatus.textContent =
                    "Please wait a moment and try again.";
            }
        });
    }

    // ==========================================
    // 7. CROP IMAGE PREVIEW
    // ==========================================

    if (cropImage && cropPreview) {
        cropImage.addEventListener("change", () => {
            const file = cropImage.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) {
                cropPreview.textContent =
                    "Please select a valid image.";
                cropImage.value = "";
                return;
            }

            if (file.size > 10 * 1024 * 1024) {
                cropPreview.textContent =
                    "Please choose an image smaller than 10 MB.";
                cropImage.value = "";
                return;
            }

            if (currentCropImageURL) {
                URL.revokeObjectURL(currentCropImageURL);
            }

            currentCropImageURL = URL.createObjectURL(file);

            const image = document.createElement("img");
            image.src = currentCropImageURL;
            image.alt = "Uploaded crop photograph";
            image.style.maxWidth = "100%";
            image.style.maxHeight = "280px";
            image.style.objectFit = "contain";
            image.style.borderRadius = "12px";

            cropPreview.replaceChildren(image);
        });
    }

    if (analyzeCrop) {
        analyzeCrop.addEventListener("click", () => {
            if (!cropImage || !cropImage.files.length) {
                cropResult.textContent = t("noImage");
                return;
            }

            cropResult.textContent = t("cropStatus");
        });
    }

    // ==========================================
    // 8. SOIL INTELLIGENCE
    // ==========================================

    if (soilSubmit) {
        soilSubmit.addEventListener("click", () => {

            const ph = Number(soilPH.value);
            const n = Number(nitrogen.value);
            const p = Number(phosphorus.value);
            const k = Number(potassium.value);

            if (
                soilPH.value === "" ||
                nitrogen.value === "" ||
                phosphorus.value === "" ||
                potassium.value === "" ||
                !Number.isFinite(ph) ||
                !Number.isFinite(n) ||
                !Number.isFinite(p) ||
                !Number.isFinite(k) ||
                ph < 0 || ph > 14 ||
                n < 0 || p < 0 || k < 0
            ) {
                soilResult.textContent = t("soilInvalid");
                return;
            }

            let observations = [];

            if (ph < 5.5) {
                observations.push(
                    "The entered pH is acidic. Ask a local soil expert whether soil amendment is appropriate."
                );
            } else if (ph > 7.5) {
                observations.push(
                    "The entered pH is alkaline. Check the soil report and crop requirements."
                );
            } else {
                observations.push(
                    "The entered pH is within a commonly used general range for many crops."
                );
            }

            observations.push(
                "Nitrogen: " + n +
                ", Phosphorus: " + p +
                ", Potassium: " + k +
                ". Compare these values with the units and reference ranges on your laboratory report."
            );

            soilResult.replaceChildren();

            const heading = document.createElement("h3");
            heading.textContent = "Soil observations";

            const list = document.createElement("ul");

            observations.forEach(observation => {
                const item = document.createElement("li");
                item.textContent = observation;
                list.appendChild(item);
            });

            const note = document.createElement("p");
            note.textContent = t("soilGuidance");

            soilResult.append(heading, list, note);
        });
    }

    // ==========================================
    // 9. GOVERNMENT SCHEME SEARCH AND FILTER
    // ==========================================

    function filterSchemes() {
        if (!schemeList) return;

        const searchText = schemeSearch ?
            schemeSearch.value.toLowerCase().trim() : "";

        const cards = schemeList.querySelectorAll(".scheme-card");
        let visibleCount = 0;

        cards.forEach(card => {
            const category = card.dataset.category || "";
            const text = card.textContent.toLowerCase();

            const matchesSearch = text.includes(searchText);

            const matchesFilter =
                selectedFilter === "all" ||
                category === selectedFilter;

            const visible = matchesSearch && matchesFilter;

            card.style.display = visible ? "" : "none";

            if (visible) visibleCount++;
        });

        let emptyMessage = schemeList.querySelector(".no-schemes");

        if (visibleCount === 0) {
            if (!emptyMessage) {
                emptyMessage = document.createElement("p");
                emptyMessage.className = "no-schemes";
                schemeList.appendChild(emptyMessage);
            }

            emptyMessage.textContent = t("noSchemes");
        } else if (emptyMessage) {
            emptyMessage.remove();
        }
    }

    if (schemeSearch) {
        schemeSearch.addEventListener("input", filterSchemes);
    }

    document.querySelectorAll("[data-filter]").forEach(button => {
        button.addEventListener("click", () => {
            selectedFilter = button.dataset.filter;

            document.querySelectorAll("[data-filter]").forEach(item => {
                item.classList.toggle("active", item === button);
            });

            filterSchemes();
        });
    });

    // ==========================================
    // 10. FARMER PROFILE
    // ==========================================

    function loadProfile() {
        try {
            const savedProfile =
                JSON.parse(localStorage.getItem("maruthamProfile"));

            if (!savedProfile) return;

            if (farmerName) farmerName.value = savedProfile.name || "";
            if (farmLocation) farmLocation.value = savedProfile.location || "";

        } catch (error) {
            console.error("Profile loading error:", error);
        }
    }

    loadProfile();

    if (saveProfile) {
        saveProfile.addEventListener("click", () => {

            const name = farmerName.value.trim();
            const location = farmLocation.value.trim();

            if (!name || !location) {
                profileResult.textContent = t("profileError");
                return;
            }

            const profile = {
                name: name,
                location: location,
                updatedAt: new Date().toISOString()
            };

            try {
                localStorage.setItem(
                    "maruthamProfile",
                    JSON.stringify(profile)
                );

                profileResult.textContent = t("profileSaved");

            } catch (error) {
                profileResult.textContent =
                    "Unable to save profile in this browser.";
                console.error("Profile saving error:", error);
            }
        });
    }

    // ==========================================
    // 11. SMOOTH NAVIGATION
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);
            }
        });
    });

    // ==========================================
    // 12. NOTIFICATION BUTTON
    // ==========================================

    const notificationButton =
        document.querySelector(".notification-btn");

    if (notificationButton) {
        notificationButton.addEventListener("click", () => {
            alert(
                "Welcome to Marutham! Notifications will be available when the notification service is connected."
            );
        });
    }

    // ==========================================
    // 13. INITIAL SETUP
    // ==========================================

    if (languageSelect) {
        applyLanguage(languageSelect.value || "en");
    }

    filterSchemes();

    console.log("Marutham JavaScript loaded successfully.");

});
