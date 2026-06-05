/* =============================================================
   DENTAL GUIDE CHATBOT - AI-Powered Dental Assistance
   ============================================================= */

const dentalGuideData = {
  ar: {
    greeting: "مرحباً! 👋 أنا مساعدك في كراون للأسنان. كيف يمكنني مساعدتك؟",
    placeholder: "اكتب سؤالك عن طب الأسنان...",
    send: "إرسال",
    close: "إغلاق",
    faq: {
      "تسوس الأسنان": {
        question: "كيف يمكنني الوقاية من تسوس الأسنان؟",
        answer: "للوقاية من تسوس الأسنان:\n• اغسل أسنانك مرتين يومياً بمعجون أسنان يحتوي على الفلورايد\n• استخدم خيط الأسنان يومياً\n• قلل من تناول السكريات والمشروبات الغازية\n• قم بزيارة طبيب الأسنان كل 6 أشهر\n• تناول طعاماً صحياً غنياً بالكالسيوم"
      },
      "تنظيف الأسنان": {
        question: "ما الطريقة الصحيحة لتنظيف الأسنان؟",
        answer: "الطريقة الصحيحة لتنظيف الأسنان:\n• استخدم فرشاة ناعمة بزاوية 45 درجة\n• نظف جميع أسطح الأسنان (الخارجية والداخلية)\n• لا تفرك بقوة - هذا يؤذي اللثة\n• امضغ الفرشاة بحركات دائرية هادئة\n• نظف أسنانك لمدة دقيقتين على الأقل\n• لا تنسى تنظيف اللسان وسقف الفم"
      },
      "اللثة": {
        question: "كيف أعتني بصحة لثتي؟",
        answer: "للعناية بصحة اللثة:\n• نظف أسنانك بلطف مرتين يومياً\n• استخدم خيط الأسنان يومياً\n• استخدم غسول الفم المضاد للبكتيريا\n• قلل من التدخين (يسبب أمراض اللثة)\n• تجنب الإجهاد النفسي\n• زر طبيب الأسنان عند ملاحظة نزيف أو احمرار"
      },
      "الفلورايد": {
        question: "ما فوائد الفلورايد للأسنان؟",
        answer: "فوائد الفلورايد:\n• يقوي مينا الأسنان ويحميها من التسوس\n• يساعد على إعادة تمعدن الأسنان\n• يقلل من البكتيريا المسببة للتسوس\n• يوفر حماية طويلة المدى\n• آمن جداً عند استخدامه بالكميات الموصى بها\n• يوجد في معجون الأسنان وغسول الفم"
      },
      "تبييض الأسنان": {
        question: "كيف يمكنني تبييض أسناني بأمان؟",
        answer: "طرق تبييض الأسنان الآمنة:\n• استشر طبيب الأسنان أولاً\n• التبييض الاحترافي في العيادة آمن وفعال\n• تجنب القهوة والشاي والدخان\n• استخدم معاجين تبييض معتدلة\n• لا تستخدم وصفات منزلية قد تضر الأسنان\n• النتائج تستمر 6-12 شهر"
      },
      "الألم": {
        question: "ماذا أفعل عندما أشعر بألم في أسناني؟",
        answer: "عند الشعور بألم في الأسنان:\n• استشر طبيب الأسنان في أسرع وقت\n• تجنب الطعام البارد والساخن\n• استخدم غسول الفم المهدئ\n• قد تحتاج إلى علاج جذور أو حشو\n• لا تتجاهل الألم - قد يشير لمشكلة خطيرة\n• خذ مسكناً مؤقتاً فقط إلى أن ترى الطبيب"
      },
      "تنظيف احترافي": {
        question: "كم مرة يجب أن أزور طبيب الأسنان للتنظيف؟",
        answer: "توصيات زيارة طبيب الأسنان:\n• الأشخاص الأصحاء: كل 6 أشهر\n• المدخنون وأصحاب مرض السكري: كل 3-4 أشهر\n• الأشخاص مع أمراض اللثة: كل 3 أشهر\n• التنظيف الاحترافي يزيل الجير والتكلس\n• يساعد على كشف المشاكل مبكراً\n• يحسن صحة الأسنان بشكل عام"
      },
      "تقويم الأسنان": {
        question: "متى يجب أن أفكر في تقويم أسناني؟",
        answer: "علامات الحاجة لتقويم الأسنان:\n• عدم انتظام الأسنان أو الازدحام\n• عدم الانطباق الصحيح للأسنان\n• بروز الأسنان الأمامية\n• تأثر النطق أو المضغ\n• يمكن البدء في أي عمر\n• استشر أخصائي تقويم للتقييم المجاني"
      },
      "الحساسية": {
        question: "لماذا أعاني من حساسية في أسناني؟",
        answer: "أسباب حساسية الأسنان:\n• انكشاف جذور الأسنان\n• تآكل مينا الأسنان\n• تراجع اللثة\n• شقوق أو كسور صغيرة\n• الإفراط في تبييض الأسنان\n• العلاج: معاجين حساسة، غسول فم، زيارة طبيب"
      },
      "صحة عامة": {
        question: "كيف ترتبط صحة الأسنان بالصحة العامة؟",
        answer: "ارتباط صحة الأسنان بالصحة العامة:\n• أمراض اللثة تزيد من أمراض القلب\n• التهاب اللثة يؤثر على مستويات السكر\n• سوء صحة الأسنان يؤثر على الجهاز المناعي\n• صحة الفم تعكس الصحة العامة\n• النظافة اليومية تقي من الأمراض\n• الفحص المنتظم ضروري للصحة العامة"
      }
    },
    keywords: {
      "تسوس": "تسوس الأسنان",
      "نظافة": "تنظيف الأسنان",
      "اللثة": "اللثة",
      "فلور": "الفلورايد",
      "تبيض": "تبييض الأسنان",
      "ألم": "الألم",
      "طبيب": "تنظيف احترافي",
      "تقويم": "تقويم الأسنان",
      "حساس": "الحساسية",
      "صحة": "صحة عامة"
    }
  },
  en: {
    greeting: "Hello! 👋 I'm your Crown Dental assistant. Ask me about dental care, our products, and how we can help!",
    placeholder: "Ask me about dental care, products, or anything...",
    send: "Send",
    close: "Close",
    faq: {
      "Tooth Decay": {
        question: "How can I prevent tooth decay?",
        answer: "To prevent tooth decay:\n• Brush your teeth twice daily with fluoride toothpaste\n• Use dental floss daily\n• Reduce sugar and sugary drinks\n• Visit your dentist every 6 months\n• Eat a healthy diet rich in calcium"
      },
      "Brushing Teeth": {
        question: "What's the correct way to brush my teeth?",
        answer: "Correct tooth brushing technique:\n• Use a soft-bristled brush at 45-degree angle\n• Clean all surfaces (outer, inner, chewing)\n• Don't brush hard - this hurts your gums\n• Use gentle circular motions\n• Brush for at least 2 minutes\n• Don't forget your tongue and roof of mouth"
      },
      "Gum Care": {
        question: "How do I take care of my gums?",
        answer: "To care for your gums:\n• Brush gently twice daily\n• Use dental floss daily\n• Use antibacterial mouthwash\n• Quit smoking (causes gum disease)\n• Reduce stress\n• See a dentist if you notice bleeding or redness"
      },
      "Fluoride": {
        question: "What are the benefits of fluoride?",
        answer: "Benefits of fluoride:\n• Strengthens tooth enamel and protects against decay\n• Helps remineralize teeth\n• Reduces cavity-causing bacteria\n• Provides long-term protection\n• Safe when used as recommended\n• Found in toothpaste and mouthwash"
      },
      "Teeth Whitening": {
        question: "How can I safely whiten my teeth?",
        answer: "Safe teeth whitening methods:\n• Consult your dentist first\n• Professional in-office whitening is safe and effective\n• Avoid coffee, tea, and smoking\n• Use moderate whitening toothpaste\n• Avoid harmful homemade recipes\n• Results last 6-12 months"
      },
      "Tooth Pain": {
        question: "What should I do if I have tooth pain?",
        answer: "When you experience tooth pain:\n• See a dentist as soon as possible\n• Avoid hot and cold foods\n• Use soothing mouthwash\n• You may need root canal or filling treatment\n• Don't ignore the pain - it may indicate a serious problem\n• Take painkillers temporarily until you see a dentist"
      },
      "Professional Cleaning": {
        question: "How often should I visit a dentist for cleaning?",
        answer: "Dentist visit recommendations:\n• Healthy people: every 6 months\n• Smokers and diabetics: every 3-4 months\n• People with gum disease: every 3 months\n• Professional cleaning removes tartar and calculus\n• Helps detect problems early\n• Improves overall dental health"
      },
      "Orthodontics": {
        question: "When should I consider teeth braces?",
        answer: "Signs you may need braces:\n• Misaligned or crowded teeth\n• Incorrect bite\n• Protruding front teeth\n• Speech or chewing problems\n• Can be done at any age\n• Consult an orthodontist for free assessment"
      },
      "Sensitivity": {
        question: "Why do my teeth feel sensitive?",
        answer: "Causes of tooth sensitivity:\n• Exposed tooth roots\n• Enamel erosion\n• Receding gums\n• Small cracks or fractures\n• Excessive teeth whitening\n• Treatment: sensitivity toothpaste, mouthwash, dentist visit"
      },
      "General Health": {
        question: "How is dental health connected to overall health?",
        answer: "Connection between oral and overall health:\n• Gum disease increases heart disease risk\n• Gum inflammation affects blood sugar levels\n• Poor oral health affects immune system\n• Mouth health reflects overall health\n• Daily hygiene prevents diseases\n• Regular checkups are essential for overall health"
      },
      "Our Products": {
        question: "What products does Crown Dental Store offer?",
        answer: "Crown Dental Store offers premium dental supplies including:\n• Dental Instruments: Mirrors, explorers, scalers, polishers\n• Restorative Materials: Universal composites, bonding agents, glass ionomer cements\n• Endodontic Files: For root canal treatments\n• Impression Materials: Alginate and other impression materials\n• Safety Equipment: Nitrile gloves, face masks, sterilization pouches\n• Brands: ProDental, Dentsply, Tokuyama, 3M ESPE, and more\n• All products are premium quality at competitive prices"
      },
      "Instruments": {
        question: "What dental instruments does Crown offer?",
        answer: "Crown's dental instruments include:\n• Dental Mirrors: Stainless steel, various sizes\n• Dental Explorers: For diagnosis and detection\n• Scalers: For tartar and calculus removal\n• Polishers: For tooth polishing and cleaning\n• All instruments are made from premium stainless steel\n• Available for purchase on our website\n• Perfect for dental clinics and practitioners"
      },
      "Materials": {
        question: "What dental materials are available?",
        answer: "Crown offers quality dental materials:\n• Universal Composites: For various restoration needs\n• Bonding Agents: For adhesion and protection\n• Glass Ionomer Cements: For cementation and restoration\n• Impression Materials: Alginate for accurate impressions\n• All materials from trusted manufacturers\n• Perfect for restorative and cosmetic dentistry\n• Browse our products page for complete selection"
      },
      "Pricing": {
        question: "What are your prices and payment options?",
        answer: "Crown Dental Store pricing:\n• Prices in Egyptian Pounds (EGP)\n• Competitive rates for premium products\n• Special packages available for bulk orders\n• Check our Products page for detailed pricing\n• Contact us for wholesale inquiries\n• Quality guaranteed at all price points\n• Visit our website to view all product prices"
      },
      "Shipping": {
        question: "Do you offer delivery?",
        answer: "For shipping and delivery information:\n• Please visit our Contact page\n• Call or email us for shipping details\n• We're located in Mansoura, Egypt\n• Contact information available on our website\n• Fast and reliable delivery available\n• Ask about bulk order discounts"
      }
    },
    keywords: {
      "decay": "Tooth Decay",
      "brush": "Brushing Teeth",
      "gum": "Gum Care",
      "fluoride": "Fluoride",
      "whiten": "Teeth Whitening",
      "pain": "Tooth Pain",
      "clean": "Professional Cleaning",
      "braces": "Orthodontics",
      "sensitive": "Sensitivity",
      "health": "General Health",
      "product": "Our Products",
      "instrument": "Instruments",
      "material": "Materials",
      "price": "Pricing",
      "deliver": "Shipping",
      "buy": "Our Products",
      "order": "Pricing"
    }
  }
};

// Chatbot State
let chatbotState = {
  isOpen: false,
  messages: [],
  language: 'en'
};

// Initialize Chatbot
function initializeDentalChatbot() {
  createChatbotUI();
  setupChatbotListeners();
  displayGreeting();
}

// Create Chatbot UI
function createChatbotUI() {
  const chatbotHTML = `
    <div id="dental-chatbot-widget" class="dental-chatbot-widget">
      <!-- Chat Button -->
      <button id="dental-chatbot-toggle" class="dental-chatbot-toggle" title="Dental Guide">
        <img src="images/logo/crown-chatbot-icon.png" alt="Chat" style="width: 32px; height: 32px;">
      </button>

      <!-- Chat Window -->
      <div id="dental-chatbot-window" class="dental-chatbot-window">
        <!-- Header -->
        <div class="dental-chatbot-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <img src="images/logo/crown-chatbot-icon.png" alt="Crown Dental" style="width: 28px; height: 28px;">
            <h3 style="margin: 0;">Dental Guide & Support</h3>
          </div>
          <button id="dental-chatbot-close" class="dental-chatbot-close">✕</button>
        </div>

        <!-- Messages -->
        <div id="dental-chatbot-messages" class="dental-chatbot-messages">
          <!-- Messages will appear here -->
        </div>

        <!-- Input Area -->
        <div class="dental-chatbot-input">
          <input 
            type="text" 
            id="dental-chatbot-input" 
            class="dental-chatbot-input-field"
            placeholder="Ask your question..."
            autocomplete="off"
          >
          <button id="dental-chatbot-send" class="dental-chatbot-send-btn">➤</button>
        </div>

        <!-- Suggestions -->
        <div id="dental-chatbot-suggestions" class="dental-chatbot-suggestions"></div>
      </div>
    </div>

    <style>
      /* Chatbot Widget Styles */
      .dental-chatbot-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-family: 'Cairo', sans-serif;
        z-index: 9998;
      }

      .dental-chatbot-toggle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        position: relative;
      }

      .dental-chatbot-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      }

      .dental-chatbot-toggle .badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ef4444;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
      }

      .dental-chatbot-window {
        position: absolute;
        bottom: 80px;
        right: 0;
        width: 350px;
        height: 500px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
        display: none;
        flex-direction: column;
        opacity: 0;
        transform: scale(0.95) translateY(10px);
        transition: all 0.3s ease;
        z-index: 9999;
      }

      .dental-chatbot-window.active {
        display: flex;
        opacity: 1;
        transform: scale(1) translateY(0);
      }

      .dental-chatbot-header {
        background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%);
        color: white;
        padding: 16px;
        border-radius: 12px 12px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .dental-chatbot-header h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }

      .dental-chatbot-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .dental-chatbot-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background: #f9f9f9;
      }

      .dental-chatbot-message {
        display: flex;
        margin-bottom: 8px;
        animation: slideIn 0.3s ease;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .dental-chatbot-message.user {
        justify-content: flex-end;
      }

      .dental-chatbot-message.bot {
        justify-content: flex-start;
      }

      .dental-chatbot-message-content {
        max-width: 70%;
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.4;
        word-wrap: break-word;
      }

      .dental-chatbot-message.user .dental-chatbot-message-content {
        background: #1e40af;
        color: white;
        border-radius: 12px 0 12px 12px;
      }

      .dental-chatbot-message.bot .dental-chatbot-message-content {
        background: #e5e7eb;
        color: #333;
        border-radius: 0 12px 12px 12px;
      }

      .dental-chatbot-input {
        display: flex;
        gap: 8px;
        padding: 12px;
        border-top: 1px solid #e5e7eb;
        background: white;
      }

      .dental-chatbot-input-field {
        flex: 1;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        padding: 10px 14px;
        font-size: 14px;
        font-family: 'Cairo', sans-serif;
        outline: none;
        transition: border-color 0.2s;
      }

      .dental-chatbot-input-field:focus {
        border-color: #1e40af;
      }

      .dental-chatbot-send-btn {
        background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%);
        color: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        transition: transform 0.2s;
      }

      .dental-chatbot-send-btn:hover {
        transform: scale(1.05);
      }

      .dental-chatbot-suggestions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 12px;
        background: white;
        border-top: 1px solid #e5e7eb;
      }

      .dental-chatbot-suggestion {
        padding: 6px 12px;
        background: #f0f0f0;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .dental-chatbot-suggestion:hover {
        background: #1e40af;
        color: white;
        border-color: #1e40af;
      }

      /* RTL Support */
      html[dir="rtl"] .dental-chatbot-widget {
        right: 20px;
        left: auto;
      }

      html[dir="rtl"] .dental-chatbot-window {
        right: 0;
        left: auto;
      }

      html[dir="rtl"] .dental-chatbot-message.user {
        justify-content: flex-start;
      }

      html[dir="rtl"] .dental-chatbot-message.bot {
        justify-content: flex-end;
      }

      html[dir="rtl"] .dental-chatbot-message.user .dental-chatbot-message-content {
        border-radius: 0 12px 12px 12px;
      }

      html[dir="rtl"] .dental-chatbot-message.bot .dental-chatbot-message-content {
        border-radius: 12px 0 12px 12px;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .dental-chatbot-window {
          width: 100%;
          height: 60vh;
          max-height: 500px;
          bottom: 0;
          left: 0;
          border-radius: 12px 12px 0 0;
        }

        .dental-chatbot-widget {
          bottom: 10px;
          left: 10px;
        }

        html[dir="rtl"] .dental-chatbot-widget {
          right: 10px;
          left: auto;
        }
      }
    </style>
  `;

  // Append chatbot to body
  if (!document.getElementById('dental-chatbot-widget')) {
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }
}

// Setup Chatbot Listeners
function setupChatbotListeners() {
  const toggle = document.getElementById('dental-chatbot-toggle');
  const closeBtn = document.getElementById('dental-chatbot-close');
  const sendBtn = document.getElementById('dental-chatbot-send');
  const input = document.getElementById('dental-chatbot-input');

  if (toggle) toggle.addEventListener('click', toggleChatbot);
  if (closeBtn) closeBtn.addEventListener('click', closeChatbot);
  if (sendBtn) sendBtn.addEventListener('click', sendChatMessage);
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendChatMessage();
    });
  }
}

// Toggle Chatbot
function toggleChatbot() {
  const window = document.getElementById('dental-chatbot-window');
  if (window) {
    chatbotState.isOpen = !chatbotState.isOpen;
    window.classList.toggle('active');
  }
}

// Close Chatbot
function closeChatbot() {
  chatbotState.isOpen = false;
  const window = document.getElementById('dental-chatbot-window');
  if (window) window.classList.remove('active');
}

// Display Greeting
function displayGreeting() {
  const lang = chatbotState.language;
  const greeting = dentalGuideData[lang].greeting;
  addBotMessage(greeting);
  displaySuggestions();
}

// Add Bot Message
function addBotMessage(message) {
  const messagesContainer = document.getElementById('dental-chatbot-messages');
  if (!messagesContainer) return;

  const messageDiv = document.createElement('div');
  messageDiv.className = 'dental-chatbot-message bot';
  messageDiv.innerHTML = `<div class="dental-chatbot-message-content">${message}</div>`;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Add User Message
function addUserMessage(message) {
  const messagesContainer = document.getElementById('dental-chatbot-messages');
  if (!messagesContainer) return;

  const messageDiv = document.createElement('div');
  messageDiv.className = 'dental-chatbot-message user';
  messageDiv.innerHTML = `<div class="dental-chatbot-message-content">${message}</div>`;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send Chat Message
function sendChatMessage() {
  const input = document.getElementById('dental-chatbot-input');
  if (!input || !input.value.trim()) return;

  const userMessage = input.value.trim();
  addUserMessage(userMessage);
  input.value = '';

  // Process message
  setTimeout(() => {
    const response = getAnswerFromKnowledgeBase(userMessage);
    addBotMessage(response);
    displaySuggestions();
  }, 300);
}

// Get Answer from Knowledge Base
function getAnswerFromKnowledgeBase(question) {
  const lang = chatbotState.language;
  const data = dentalGuideData[lang];
  const questionLower = question.toLowerCase();

  // Check for keywords
  for (let keyword in data.keywords) {
    if (questionLower.includes(keyword)) {
      const topic = data.keywords[keyword];
      if (data.faq[topic]) {
        return data.faq[topic].answer;
      }
    }
  }

  // Direct topic match
  for (let topic in data.faq) {
    if (questionLower.includes(topic.toLowerCase())) {
      return data.faq[topic].answer;
    }
  }

  // Default response
  return lang === 'ar' 
    ? "عذراً، لم أستطع فهم سؤالك بوضوح. يرجى محاولة بصيغة مختلفة أو اختيار من المواضيع المقترحة أعلاه. 😊"
    : "Sorry, I didn't quite understand your question. Please try a different phrasing or select from the suggested topics above. 😊";
}

// Display Suggestions
function displaySuggestions() {
  const suggestionsContainer = document.getElementById('dental-chatbot-suggestions');
  if (!suggestionsContainer) return;

  const lang = chatbotState.language;
  const data = dentalGuideData[lang];
  const topics = Object.keys(data.faq).slice(0, 4);

  suggestionsContainer.innerHTML = topics
    .map(topic => `
      <button class="dental-chatbot-suggestion" onclick="handleSuggestionClick('${topic}')">
        ${data.faq[topic].question.substring(0, 20)}...
      </button>
    `)
    .join('');
}

// Handle Suggestion Click
function handleSuggestionClick(topic) {
  const lang = chatbotState.language;
  const data = dentalGuideData[lang];
  
  addUserMessage(data.faq[topic].question);
  setTimeout(() => {
    addBotMessage(data.faq[topic].answer);
  }, 300);
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDentalChatbot);
} else {
  initializeDentalChatbot();
}
