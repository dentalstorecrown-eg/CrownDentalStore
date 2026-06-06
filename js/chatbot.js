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
    greeting: "Welcome to Crown Dental Store! 👋\n\nI'm your professional dental guide and store assistant. I can help with:\n• Clinical dental advice & oral health\n• Our full product catalog & prices\n• Categories, ordering & delivery\n• Contact info & store hours\n\nHow may I assist you today?",
    placeholder: "Ask about dental care, products, orders...",
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
        answer: "Delivery at Crown Dental Store:\n• Nationwide delivery across Egypt (2–5 business days)\n• Safe, protected packaging against damage\n• Located in Mansoura, Egypt — visit or arrange delivery\n• Contact us for bulk order discounts\n• WhatsApp or phone for fastest shipping quotes"
      },
      "About Store": {
        question: "Tell me about Crown Dental Store",
        answer: "Crown Dental Store is a trusted supplier of premium dental tools and supplies for dentists, clinics, and hospitals.\n\n• Mission: Quality products at competitive prices with excellent service\n• Location: Mansoura, Egypt\n• We stock instruments, restorative materials, endodontics, orthodontics, equipment, consumables & PPE\n• Brands include ProDental, Tokuyama, DentalChem, Schneider & more\n• Visit About & Contact page for full company details"
      },
      "How to Order": {
        question: "How do I place an order?",
        answer: "Ordering from Crown Dental Store is easy:\n\n1. Browse Products or Categories on our website\n2. Click 'View Details' for full specifications\n3. Use 'Order Now' on any product card — opens WhatsApp with product details pre-filled\n4. Or contact us directly via phone, WhatsApp, or the Contact form\n\nPayment: Cash on delivery or bank transfer before shipping.\nReturns: Accepted within 14 days of purchase."
      },
      "Business Hours": {
        question: "What are your business hours?",
        answer: "Crown Dental Store business hours:\n• Saturday – Thursday: 9:00 AM – 6:00 PM\n• Friday: Closed\n• Sunday: 10:00 AM – 5:00 PM\n\nFor urgent orders outside hours, message us on WhatsApp and we'll respond as soon as possible."
      },
      "Payment Methods": {
        question: "What payment methods do you accept?",
        answer: "Payment options at Crown Dental Store:\n• Cash on delivery (COD)\n• Bank transfer before shipping\n• Credit card arrangements — contact us to set up\n\nAll prices are listed in Egyptian Pounds (EGP) on our Products page."
      },
      "Returns Policy": {
        question: "What is your return policy?",
        answer: "Crown Dental Store return policy:\n• Returns accepted within 14 days of purchase\n• Items must be unused and in original packaging\n• Contact customer service to initiate a return\n• Shipping is guaranteed and protected against damage"
      },
      "Website Guide": {
        question: "How do I navigate the website?",
        answer: "Crown Dental Store website pages:\n\n🏠 Home — Featured products & categories\n📦 Products — Full catalog with search & filters\n📂 Categories — Browse by specialty (Orthodontics, Endodontics, etc.)\nℹ️ About & Contact — Company info, form, map & FAQ\n\nUse the search bar on Home or Products to find items by name or SKU."
      },
      "Root Canal": {
        question: "What should I know about root canal treatment?",
        answer: "Root canal (endodontic) treatment:\n• Removes infected pulp to save the tooth\n• Needed when decay reaches the nerve or after trauma\n• Modern techniques make it relatively painless with local anesthesia\n• Crown Dental Store supplies NiTi endodontic files, instruments & materials\n• Always performed by a qualified endodontist or dentist"
      },
      "Dental Implants": {
        question: "What are dental implants?",
        answer: "Dental implants are titanium posts surgically placed in the jawbone to replace missing teeth roots.\n\n• Most durable tooth replacement option\n• Requires healthy bone and gums\n• Healing takes 3–6 months before crown placement\n• Crown Dental Store offers implant-related supplies — browse our Implant category\n• Consult an implant specialist for personal assessment"
      },
      "Children Dental": {
        question: "How do I care for my child's teeth?",
        answer: "Children's dental care tips:\n• First dental visit by age 1 or when first tooth appears\n• Use age-appropriate fluoride toothpaste (rice-grain size under 3)\n• Supervise brushing until age 7–8\n• Limit sugary snacks and drinks\n• Dental sealants protect molars from decay\n• Crown Dental Store has pediatric and student supplies available"
      },
      "Bad Breath": {
        question: "What causes bad breath and how to fix it?",
        answer: "Halitosis (bad breath) causes & solutions:\n• Poor oral hygiene — brush twice daily, floss, clean tongue\n• Gum disease — see a dentist for treatment\n• Dry mouth — stay hydrated, chew sugar-free gum\n• Certain foods (garlic, onion) — temporary, brush and rinse\n• Persistent bad breath may indicate infection — dental checkup recommended"
      },
      "Sterilization": {
        question: "Why is dental sterilization important?",
        answer: "Sterilization in dental practice:\n• Prevents cross-infection between patients\n• Autoclave steam sterilization is the gold standard\n• Use sterilization pouches with indicator strips to verify cycles\n• Crown Dental Store stocks sterilization pouches, gloves, masks & PPE\n• All instruments must be cleaned, disinfected, then sterilized before reuse\n• Follow ISO 11607 and local health authority guidelines"
      },
      "Composite Restorations": {
        question: "What are composite dental restorations?",
        answer: "Composite restorations (tooth-colored fillings):\n• Made of resin material matching natural tooth shade\n• Used for cavities, chips, and cosmetic bonding\n• Requires bonding agent and curing light for proper hardening\n• Crown Dental Store offers universal composites, bonding agents & LED curing lights\n• Working time: 5–7 min; curing: 10–20 seconds with LED light\n• Shade selection (A1, A2, A3, etc.) is critical for aesthetics"
      }
    },
    keywords: {
      "decay": "Tooth Decay", "cavity": "Tooth Decay", "caries": "Tooth Decay",
      "brush": "Brushing Teeth", "floss": "Brushing Teeth", "hygiene": "Brushing Teeth",
      "gum": "Gum Care", "gingivitis": "Gum Care", "periodont": "Gum Care",
      "fluoride": "Fluoride", "flouride": "Fluoride",
      "whiten": "Teeth Whitening", "bleach": "Teeth Whitening",
      "pain": "Tooth Pain", "ache": "Tooth Pain", "hurt": "Tooth Pain",
      "clean": "Professional Cleaning", "checkup": "Professional Cleaning", "visit": "Professional Cleaning",
      "braces": "Orthodontics", "orthodont": "Orthodontics", "align": "Orthodontics",
      "sensitive": "Sensitivity", "sensitivity": "Sensitivity",
      "health": "General Health", "heart": "General Health", "diabetes": "General Health",
      "product": "Our Products", "catalog": "Our Products", "sell": "Our Products", "stock": "Our Products",
      "instrument": "Instruments", "mirror": "Instruments", "explorer": "Instruments", "scaler": "Instruments",
      "material": "Materials", "composite": "Composite Restorations", "bonding": "Materials", "resin": "Composite Restorations",
      "price": "Pricing", "cost": "Pricing", "egp": "Pricing", "how much": "Pricing",
      "deliver": "Shipping", "shipping": "Shipping", "ship": "Shipping",
      "buy": "How to Order", "order": "How to Order", "purchase": "How to Order", "whatsapp": "How to Order",
      "about": "About Store", "who are": "About Store", "company": "About Store", "crown": "About Store",
      "hour": "Business Hours", "open": "Business Hours", "close": "Business Hours", "when": "Business Hours",
      "pay": "Payment Methods", "payment": "Payment Methods", "cash": "Payment Methods",
      "return": "Returns Policy", "refund": "Returns Policy",
      "navigate": "Website Guide", "website": "Website Guide", "page": "Website Guide", "find": "Website Guide",
      "root canal": "Root Canal", "endodont": "Root Canal", "ni-ti": "Root Canal",
      "implant": "Dental Implants",
      "child": "Children Dental", "kid": "Children Dental", "baby": "Children Dental", "pediatric": "Children Dental",
      "breath": "Bad Breath", "halitosis": "Bad Breath", "smell": "Bad Breath",
      "steril": "Sterilization", "autoclave": "Sterilization", "infection": "Sterilization", "ppe": "Sterilization",
      "curing": "Composite Restorations", "filling": "Composite Restorations", "restoration": "Composite Restorations",
      "glove": "Our Products", "mask": "Our Products", "handpiece": "Our Products", "equipment": "Our Products",
      "category": "Our Products", "categories": "Our Products",
      "contact": "About Store", "phone": "About Store", "email": "About Store", "address": "About Store", "location": "About Store",
      "wisdom": "Tooth Pain", "extract": "Tooth Pain"
    }
  }
};

// Chatbot State
let chatbotState = {
  isOpen: false,
  messages: [],
  language: 'en',
  suggestionOffset: 0
};

/* =============================================================
   CHATBOT INTELLIGENCE ENGINE
   ============================================================= */

function escapeChatHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatBotMessage(text) {
  return escapeChatHtml(text).replace(/\n/g, '<br>');
}

function getStoreContact() {
  if (typeof contactInfo !== 'undefined') return contactInfo;
  return {
    storeName: 'Crown Dental Store',
    phone: '+201000000000',
    whatsapp: '+201000000000',
    email: 'info@crowndentalstore.com',
    address: 'Mansoura, Egypt'
  };
}

function searchChatProducts(query, limit = 5) {
  if (typeof products === 'undefined' || !products.length) return [];
  const q = query.toLowerCase().trim();
  const terms = q.split(/\s+/).filter(t => t.length > 1);

  const scored = products.map(p => {
    const name = (p.name || '').toLowerCase();
    const cat = (p.category || '').toLowerCase();
    const brand = (p.brand || '').toLowerCase();
    const sku = (p.sku || String(p.id)).toLowerCase();
    const desc = (p.description || '').toLowerCase();
    const haystack = `${name} ${cat} ${brand} ${sku} ${desc}`;
    let score = 0;
    if (name.includes(q) || sku === q) score += 10;
    terms.forEach(t => {
      if (name.includes(t)) score += 5;
      if (cat.includes(t) || brand.includes(t)) score += 3;
      if (haystack.includes(t)) score += 1;
    });
    return { product: p, score };
  }).filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(x => x.product);
}

function getCategoryProductCounts() {
  if (typeof products === 'undefined') return {};
  const counts = {};
  products.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

function buildProductListResponse(limit = 8) {
  if (typeof products === 'undefined' || !products.length) {
    return "Our product catalog is loading. Please visit the Products page to browse all items.";
  }
  const list = products.slice(0, limit).map(p =>
    `• ${p.name} — ${p.price} ${p.currency} (${p.category})`
  ).join('\n');
  const more = products.length > limit ? `\n\n...and ${products.length - limit} more products. Visit Products page for the full catalog.` : '';
  return `Here are our featured products:\n\n${list}${more}`;
}

function buildCategoryResponse() {
  const counts = getCategoryProductCounts();
  const cats = typeof categories !== 'undefined' ? categories : [];
  const lines = cats.map(c => {
    const count = counts[c.nameEnglish] || 0;
    return `• ${c.nameEnglish}${count ? ` (${count} products)` : ''}`;
  }).join('\n');
  return `Crown Dental Store categories:\n\n${lines}\n\nBrowse any category on our Categories page or filter on the Products page.`;
}

function buildContactResponse() {
  const c = getStoreContact();
  return `Contact Crown Dental Store:\n\n📞 Phone: ${c.phone}\n💬 WhatsApp: ${c.whatsapp}\n✉️ Email: ${c.email}\n📍 Location: ${c.address || 'Mansoura, Egypt'}\n\nVisit About & Contact for our form, map, and FAQ.`;
}

function buildProductDetailResponse(product) {
  const avail = product.availability === 'in_stock' ? 'In Stock' :
    product.availability === 'limited_stock' ? 'Limited Stock' : 'Out of Stock';
  return `${product.name}\n\n💰 Price: ${product.price} ${product.currency}\n📂 Category: ${product.category}\n🏷️ Brand: ${product.brand}\n📦 Status: ${avail}\n\n${product.description}\n\n👉 View full details: product-details.html?id=${product.id}\n📲 Order via WhatsApp using the 'Order Now' button on our Products page.`;
}

function getCurrentPageHint() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const hints = {
    'index.html': "You're on the Home page — explore featured products and categories below.",
    'products.html': "You're on the Products page — use filters and search to find exactly what you need.",
    'categories.html': "You're on the Categories page — pick a specialty to see related products.",
    'about-contact.html': "You're on About & Contact — find our form, hours, map, and FAQ here.",
    'product-details.html': "You're viewing a product — use Order on WhatsApp or adjust quantity before ordering."
  };
  return hints[page] || '';
}

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
            <h3 style="margin: 0;">Crown Dental Expert</h3>
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
        max-width: 85%;
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
        white-space: pre-line;
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
        .dental-chatbot-widget {
          bottom: 76px;
          right: 12px;
          left: auto;
        }

        html[dir="rtl"] .dental-chatbot-widget {
          right: auto;
          left: 12px;
        }

        .dental-chatbot-toggle {
          width: 52px;
          height: 52px;
        }

        .dental-chatbot-toggle img {
          width: 28px !important;
          height: 28px !important;
        }

        .dental-chatbot-window {
          position: fixed;
          width: calc(100vw - 16px);
          max-width: 100%;
          height: min(70vh, 520px);
          bottom: 140px;
          right: 8px;
          left: 8px;
          margin: 0 auto;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        html[dir="rtl"] .dental-chatbot-window {
          right: 8px;
          left: 8px;
        }

        .dental-chatbot-header h3 {
          font-size: 14px;
        }

        .dental-chatbot-messages {
          padding: 12px;
        }

        .dental-chatbot-message-content {
          max-width: 85%;
          font-size: 13px;
        }

        .dental-chatbot-input {
          padding: 10px;
        }

        .dental-chatbot-input-field {
          font-size: 16px;
          padding: 10px 12px;
        }

        .dental-chatbot-suggestions {
          padding: 6px 10px;
          max-height: 80px;
          overflow-y: auto;
        }

        .dental-chatbot-suggestion {
          font-size: 11px;
          padding: 5px 10px;
        }
      }

      @media (max-width: 480px) {
        .dental-chatbot-widget {
          bottom: 70px;
          right: 10px;
        }

        .dental-chatbot-window {
          width: calc(100vw - 12px);
          height: min(75vh, 480px);
          bottom: 130px;
          right: 6px;
          left: 6px;
        }

        .dental-chatbot-toggle {
          width: 48px;
          height: 48px;
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
  messageDiv.innerHTML = `<div class="dental-chatbot-message-content">${formatBotMessage(message)}</div>`;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Add User Message
function addUserMessage(message) {
  const messagesContainer = document.getElementById('dental-chatbot-messages');
  if (!messagesContainer) return;

  const messageDiv = document.createElement('div');
  messageDiv.className = 'dental-chatbot-message user';
  messageDiv.innerHTML = `<div class="dental-chatbot-message-content">${escapeChatHtml(message)}</div>`;
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
  const q = question.toLowerCase().trim();

  if (lang === 'ar') {
    for (const keyword in data.keywords) {
      if (q.includes(keyword) && data.faq[data.keywords[keyword]]) {
        return data.faq[data.keywords[keyword]].answer;
      }
    }
    for (const topic in data.faq) {
      if (q.includes(topic.toLowerCase())) return data.faq[topic].answer;
    }
    return "عذراً، لم أستطع فهم سؤالك. جرّب سؤالاً عن المنتجات، الطلب، أو صحة الأسنان. 😊";
  }

  // Greetings
  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|greetings|howdy)\b/.test(q)) {
    const hint = getCurrentPageHint();
    return `Hello! Welcome to Crown Dental Store. I'm your professional dental assistant and store expert.\n\nI can answer clinical dental questions, help you find products & prices, explain how to order, and guide you around our website.\n\n${hint ? hint + '\n\n' : ''}What would you like to know?`;
  }

  // Thanks / goodbye
  if (/\b(thank|thanks|thx|appreciate)\b/.test(q)) {
    return "You're welcome! 😊 If you need anything else — product recommendations, dental advice, or ordering help — I'm here. Visit About & Contact or WhatsApp us for direct support.";
  }
  if (/\b(bye|goodbye|see you)\b/.test(q)) {
    return "Goodbye! Take care of your smile. Crown Dental Store is always here when you need quality dental supplies. 👋";
  }

  // Help / what can you do
  if (/\b(what can you|help me|what do you do|capabilities|assist)\b/.test(q)) {
    return "I'm Crown Dental's AI expert assistant. I can help with:\n\n🦷 Clinical topics — decay, gum care, root canals, implants, whitening, children's dental care\n📦 Store catalog — all products, prices, brands, availability\n📂 Categories — Orthodontics, Endodontics, Restorative, Equipment & more\n🛒 Ordering — how to buy via WhatsApp, payment & delivery\n📍 Contact — phone, email, hours, location\n🌐 Website — navigate pages and find what you need\n\nJust ask naturally — e.g. 'composite resin price' or 'how to prevent gum disease'";
  }

  // Contact info
  if (/\b(phone|call|email|contact|address|location|where.*(you|store|located)|reach)\b/.test(q) && !/\b(product|instrument)\b/.test(q)) {
    return buildContactResponse();
  }

  // Business hours
  if (/\b(hour|open|close|available|business\s*time|working\s*day)\b/.test(q)) {
    return data.faq['Business Hours'].answer;
  }

  // How to order
  if (/\b(how.*(order|buy|purchase)|place.*order|order\s*now|checkout)\b/.test(q)) {
    return data.faq['How to Order'].answer;
  }

  // Payment
  if (/\b(pay|payment|cash|transfer|credit\s*card|cod)\b/.test(q)) {
    return data.faq['Payment Methods'].answer;
  }

  // Returns
  if (/\b(return|refund|exchange)\b/.test(q)) {
    return data.faq['Returns Policy'].answer;
  }

  // Shipping
  if (/\b(deliver|shipping|ship|courier|how\s*long)\b/.test(q)) {
    return data.faq['Shipping'].answer;
  }

  // About store
  if (/\b(about|who\s*are|mission|vision|company|story)\b/.test(q) && !/\b(product)\b/.test(q)) {
    return data.faq['About Store'].answer;
  }

  // Website navigation
  if (/\b(website|navigate|page|where.*(find|product|category)|how.*(find|browse))\b/.test(q)) {
    return data.faq['Website Guide'].answer;
  }

  // List all products / catalog
  if (/\b(all\s*product|product\s*list|catalog|what.*(sell|stock|carry|offer)|show.*product|how many product)\b/.test(q)) {
    if (typeof products !== 'undefined') {
      return `We currently stock ${products.length} premium dental products.\n\n` + buildProductListResponse(6);
    }
    return data.faq['Our Products'].answer;
  }

  // Categories
  if (/\b(categor|orthodont|endodont|restorativ|implant|consumable|equipment|instrument|medical\s*wear)\b/.test(q) && !searchChatProducts(q, 1).length) {
    if (/\b(list|all|what|show|how many)\b/.test(q) || /\bcategor/.test(q)) {
      return buildCategoryResponse();
    }
  }

  // Cheapest / expensive products
  if (/\b(cheapest|lowest\s*price|affordable|budget)\b/.test(q) && typeof products !== 'undefined') {
    const cheapest = [...products].sort((a, b) => a.price - b.price).slice(0, 3);
    const list = cheapest.map(p => `• ${p.name} — ${p.price} ${p.currency}`).join('\n');
    return `Our most affordable products:\n\n${list}\n\nBrowse Products page to filter by price.`;
  }
  if (/\b(expensive|premium|highest\s*price|top\s*end)\b/.test(q) && typeof products !== 'undefined') {
    const pricey = [...products].sort((a, b) => b.price - a.price).slice(0, 3);
    const list = pricey.map(p => `• ${p.name} — ${p.price} ${p.currency}`).join('\n');
    return `Our premium equipment & supplies:\n\n${list}`;
  }

  // Product search — try to match specific products
  const matched = searchChatProducts(q, 3);
  if (matched.length === 1) {
    return buildProductDetailResponse(matched[0]);
  }
  if (matched.length > 1) {
    const list = matched.map(p => `• ${p.name} — ${p.price} ${p.currency} (${p.category})`).join('\n');
    return `I found these products matching your query:\n\n${list}\n\nAsk about a specific product by name for full details, or visit Products page.`;
  }

  // Price query with product name fragment
  if (/\b(price|cost|how much)\b/.test(q) && typeof products !== 'undefined') {
    const priceMatch = searchChatProducts(q.replace(/\b(price|cost|how much|is|the|a|of)\b/g, ' ').trim(), 3);
    if (priceMatch.length) {
      const list = priceMatch.map(p => `• ${p.name}: ${p.price} ${p.currency}`).join('\n');
      return `Pricing information:\n\n${list}\n\nAll prices are in EGP. Use 'Order Now' on the product card to order via WhatsApp.`;
    }
    return data.faq['Pricing'].answer;
  }

  // Keyword matching (longer keywords first for accuracy)
  const sortedKeywords = Object.keys(data.keywords).sort((a, b) => b.length - a.length);
  for (const keyword of sortedKeywords) {
    if (q.includes(keyword)) {
      const topic = data.keywords[keyword];
      if (data.faq[topic]) return data.faq[topic].answer;
    }
  }

  // Direct FAQ topic match
  for (const topic in data.faq) {
    if (q.includes(topic.toLowerCase())) return data.faq[topic].answer;
  }

  // Smart fallback with store context
  const c = getStoreContact();
  return `I'm not sure I understood that completely, but I'm here to help!\n\nTry asking about:\n• A specific product (e.g. "dental mirror" or "composite resin")\n• Dental topics (gum care, root canal, whitening)\n• Ordering, delivery, or payment\n• Our contact: ${c.phone} / WhatsApp\n\nOr tap a suggestion below. 😊`;
}

// Display Suggestions
function displaySuggestions() {
  const suggestionsContainer = document.getElementById('dental-chatbot-suggestions');
  if (!suggestionsContainer) return;

  const lang = chatbotState.language;
  const data = dentalGuideData[lang];
  const allTopics = Object.keys(data.faq);
  const offset = chatbotState.suggestionOffset % allTopics.length;
  chatbotState.suggestionOffset += 4;

  const priority = ['Our Products', 'How to Order', 'Tooth Decay', 'Business Hours', 'About Store', 'Root Canal'];
  const sorted = [
    ...priority.filter(t => allTopics.includes(t)),
    ...allTopics.filter(t => !priority.includes(t))
  ];
  const topics = sorted.slice(offset, offset + 4);
  while (topics.length < 4) topics.push(...sorted.slice(0, 4 - topics.length));

  suggestionsContainer.innerHTML = topics
    .map(topic => {
      const label = data.faq[topic].question.length > 28
        ? data.faq[topic].question.substring(0, 26) + '…'
        : data.faq[topic].question;
      return `<button class="dental-chatbot-suggestion" onclick="handleSuggestionClick('${topic.replace(/'/g, "\\'")}')">${label}</button>`;
    })
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
