export type Lang = "fr" | "ar";

export const WHATSAPP = "https://wa.me/212629310596";

export const content = {
  fr: {
    dir: "ltr" as const,
    brand: "Écoute+",
    tagline: "Parler. Être écouté. Avancer.",
    positioning:
      "Un espace d'écoute et de soutien humain à distance — non médical, non thérapeutique.",
    modal: {
      welcome: "Bienvenue",
      choose: "Choisissez votre langue",
      button: "Français",
    },
    nav: {
      links: [
        { label: "Le déroulement", href: "/#deroulement" },
        { label: "Tarifs", href: "/#tarifs" },
        { label: "Urgences", href: "/#urgences" },
        { label: "FAQ", href: "/#faq" },
        { label: "À propos", href: "/#a-propos" },
      ],
      cta: "Réserver",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Écoute & soutien humain — service non médical",
      title: "Parfois, on a juste besoin de parler à quelqu'un.",
      subtitle:
        "Un espace pour vous exprimer librement, sans jugement — accompagné·e par une personne qui vous écoute vraiment. Pas par un thérapeute.",
      primary: "Réserver une séance sur WhatsApp",
      secondary: "Comment ça marche ↓",
      note: "Service d'écoute non médical et non thérapeutique.",
    },
    isIsNot: {
      isTitle: "Écoute+, c'est :",
      is: [
        "Un espace pour dire ce que vous portez, sans filtre",
        "Une écoute attentive, sans jugement",
        "Un moment pour remettre de l'ordre dans vos pensées",
        "Un accompagnement humain, à votre rythme",
      ],
      isNotTitle: "Écoute+, ce n'est pas :",
      isNot: [
        "Un cabinet de psychologie ou de psychiatrie",
        "Un diagnostic ou un traitement médical",
        "Un service d'urgence",
        "Un substitut à un suivi professionnel si vous en avez besoin",
      ],
    },
    steps: {
      title: "Le déroulement d'une séance",
      items: [
        {
          n: "01",
          name: "Accueil",
          time: "5 min",
          text: "« Qu'est-ce qui vous amène aujourd'hui ? » Vous parlez, on vous écoute.",
        },
        {
          n: "02",
          name: "Écoute active",
          time: "15-20 min",
          text: "On prend le temps de vraiment comprendre ce que vous vivez, sans vous couper.",
        },
        {
          n: "03",
          name: "Clarification",
          time: "10-15 min",
          text: "On démêle ensemble la situation — ce que vous ressentez, ce qui dépend de vous.",
        },
        {
          n: "04",
          name: "Un pas concret",
          time: "10 min",
          text: "On termine sur une seule action simple pour la semaine. Jamais une liste de 15 conseils.",
        },
        {
          n: "05",
          name: "Conclusion",
          time: "5 min",
          text: "« Comment vous sentez-vous par rapport au début de notre échange ? »",
        },
      ],
    },
    pricing: {
      title: "Services et tarifs de lancement",
      badge: "Le plus choisi",
      items: [
        {
          name: "Session Écoute",
          duration: "30 min",
          price: "39 DH",
          text: "Une séance courte pour parler et vous libérer d'un poids.",
        },
        {
          name: "Session Soutien",
          duration: "50 min",
          price: "69 DH",
          text: "La séance complète : écoute, clarification, et un pas concret à la fin.",
        },
        {
          name: "Pack 4 Séances",
          duration: "4×50 min",
          price: "249 DH",
          text: "Pour un accompagnement suivi dans le temps (~62 DH/séance).",
        },
      ],
      note: "Tarifs de lancement, susceptibles d'évoluer.",
      cta: "Réserver sur WhatsApp",
    },
    forWho: {
      title: "Écoute+ est fait pour vous si...",
      text: "...vous traversez une période difficile — stress, doute, fatigue émotionnelle, relation compliquée — et vous avez simplement besoin de parler à quelqu'un.",
      transition:
        "Si vous vivez une urgence — des pensées de vous faire du mal, de mettre fin à vos jours, ou de faire du mal à quelqu'un — Écoute+ n'est pas le bon service pour vous en ce moment. Consultez immédiatement la section ci-dessous.",
    },
    urgent: {
      title: "🆘 Ressources d'urgence",
      intro:
        "Si vous êtes en danger immédiat, ou si vous avez des pensées de vous faire du mal ou de mettre fin à vos jours :",
      lines: [
        { before: "Appelez le SAMU : ", tel: "141", label: "141", after: "" },
        {
          before: "Ou la Protection civile : ",
          tel: "15",
          label: "15",
          after: " (ou 112 depuis un mobile)",
        },
        {
          before:
            "Ou rendez-vous directement aux urgences de l'hôpital le plus proche — les hôpitaux publics marocains prennent en charge les urgences psychiatriques 24h/24.",
          tel: null,
          label: "",
          after: "",
        },
      ],
      servicesIntro: "Deux services spécialisés que vous pouvez aussi contacter directement :",
      services: [
        {
          before: "Clinique La Vallée (Tamesna, Rabat) — urgences psychiatriques 24h/24, 7j/7 : ",
          tel: "0661500940",
          label: "0661 50 09 40",
          after: " (clinique privée, consultation payante)",
        },
        {
          before: "Service de psychiatrie, CHU Ibn Rochd, Casablanca : ",
          tel: "0522481010",
          label: "05 22 48 10 10",
          after: "",
        },
      ],
      entourage:
        "Si une personne de votre entourage est en danger, ne la laissez pas seule et contactez ces numéros avec elle.",
      noLine:
        "Le Maroc ne dispose pas, à notre connaissance, d'une ligne téléphonique nationale unique dédiée à la prévention du suicide.",
    },
    privacy: {
      title: "Votre confidentialité",
      text: "Nous ne collectons que le strict nécessaire pour organiser votre séance. Vos échanges ne sont ni enregistrés, ni partagés.",
      link: "Lire la politique complète →",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Es-tu psychologue ou psychiatre ?",
          a: "Non. Écoute+ est un service d'écoute et de soutien humain, pas un service médical ou clinique. Si votre situation nécessite un suivi psychologique ou psychiatrique, je vous orienterai vers un professionnel qualifié.",
        },
        { q: "Les séances sont-elles enregistrées ?", a: "Non, aucune séance n'est enregistrée." },
        {
          q: "Comment se passe le paiement ?",
          a: "Le paiement se fait directement via WhatsApp au moment de la réservation.",
        },
        {
          q: "Puis-je annuler ou reporter une séance ?",
          a: "Oui, contactez-moi via WhatsApp au moins 24h à l'avance.",
        },
        {
          q: "Est-ce vraiment confidentiel ?",
          a: "Oui. Seules les informations nécessaires à l'organisation de la séance sont conservées. Voir notre page Confidentialité.",
        },
        {
          q: "Que faire si j'ai besoin d'aide en urgence ?",
          a: "Écoute+ n'est pas un service d'urgence. Consultez la section Ressources d'urgence ci-dessus, ou rendez-vous aux urgences les plus proches.",
        },
      ],
    },
    contact: {
      title: "Prêt·e à parler ?",
      text: "Réservez votre séance directement sur WhatsApp — réponse rapide, aucune inscription requise.",
      cta: "Ouvrir WhatsApp",
    },
    about: {
      title: "Qui est derrière Écoute+",
      text: "Je m'appelle Samie. Je ne suis ni psychologue ni psychiatre. Je crois qu'à côté du soin médical, il existe une place pour un simple espace d'écoute — sans jugement, sans étiquette, sans rendez-vous qui fait peur. Écoute+ est cet espace.",
    },
    footer: {
      links: [
        { label: "Confidentialité", href: "/confidentialite" },
        { label: "Conditions d'utilisation", href: "/conditions" },
        { label: "Ressources d'urgence", href: "/#urgences" },
        { label: "Contact", href: "/#contact" },
      ],
      disclaimer:
        "Écoute+ n'est pas un service médical, psychologique ou psychiatrique. En cas d'urgence, contactez le 141, le 15, ou rendez-vous aux urgences les plus proches.",
    },
    back: "← Retour à l'accueil",
    pages: {
      privacy: {
        title: "Politique de confidentialité",
        paragraphs: [
          "Nous appliquons un principe simple : collecter le moins de données possible, et les conserver le moins longtemps possible.",
          "Ce que nous collectons : votre prénom ou un pseudonyme, un moyen de contact (WhatsApp), le motif général de votre demande en quelques mots.",
          "Ce que nous ne collectons pas : votre nom de famille, votre adresse, une pièce d'identité, un dossier ou historique médical, un enregistrement audio ou vidéo des séances.",
          "Vos échanges restent confidentiels, sauf dans les cas prévus par la loi (danger imminent pour vous-même ou pour autrui).",
          "Ce texte est un point de départ. Le traitement de données liées à la santé est encadré au Maroc par la loi 09-08 et peut nécessiter une formalité auprès de la CNDP avant le lancement commercial du service.",
        ],
      },
      terms: {
        title: "Conditions d'utilisation",
        paragraphs: [
          "Écoute+ n'est pas un service médical, psychologique ou psychiatrique.",
          "Les séances proposées sont des séances d'écoute et de soutien humain. Elles ne constituent ni un diagnostic, ni une psychothérapie, ni un traitement médical, et ne remplacent pas le suivi d'un professionnel de santé qualifié.",
          "En cas d'urgence psychiatrique, de danger immédiat, ou de pensées suicidaires, contactez immédiatement les services d'urgence (141 ou 15) ou rendez-vous aux urgences de l'hôpital le plus proche.",
          "Le prestataire se réserve le droit d'interrompre une séance et d'orienter la personne vers un professionnel de santé si la situation dépasse le cadre d'une séance d'écoute.",
          "Ce texte est un point de départ et doit être révisé par un professionnel du droit avant publication.",
        ],
      },
    },
  },
  ar: {
    dir: "rtl" as const,
    brand: "Écoute+",
    tagline: "تحدّث. كن مسموعًا. تقدّم.",
    positioning: "مساحة للإنصات والدعم الإنساني عن بعد — غير طبية وغير علاجية.",
    modal: {
      welcome: "مرحبًا",
      choose: "اختر لغتك",
      button: "العربية",
    },
    nav: {
      links: [
        { label: "سير الجلسة", href: "/#deroulement" },
        { label: "الأسعار", href: "/#tarifs" },
        { label: "الطوارئ", href: "/#urgences" },
        { label: "أسئلة شائعة", href: "/#faq" },
        { label: "من نحن", href: "/#a-propos" },
      ],
      cta: "احجز",
      menu: "القائمة",
    },
    hero: {
      eyebrow: "إصغاء ودعم إنساني — خدمة غير طبية",
      title: "أحيانًا، كل ما نحتاجه هو أن يستمع إلينا أحد.",
      subtitle:
        "مساحة للتعبير عن نفسك بحرية، دون حكم — يرافقك فيها شخص ينصت إليك فعلاً. وليس معالجًا نفسيًا.",
      primary: "احجز جلسة عبر واتساب",
      secondary: "↓ كيف تسير الجلسة",
      note: "خدمة إنصات غير طبية وغير علاجية.",
    },
    isIsNot: {
      isTitle: "Écoute+ هي:",
      is: [
        "مساحة لتقول ما يثقل عليك، دون رقابة",
        "إنصات حقيقي، دون إصدار أحكام",
        "لحظة لترتيب أفكارك",
        "مرافقة إنسانية، على إيقاعك أنت",
      ],
      isNotTitle: "Écoute+ ليست:",
      isNot: [
        "عيادة لعلم النفس أو الطب النفسي",
        "تشخيصًا أو علاجًا طبيًا",
        "خدمة طوارئ",
        "بديلاً عن متابعة مختص إن كنت بحاجة إليها",
      ],
    },
    steps: {
      title: "كيف تسير الجلسة",
      items: [
        {
          n: "01",
          name: "الاستقبال",
          time: "5 دقائق",
          text: "«ما الذي جاء بك اليوم؟» تتحدث، ونحن ننصت.",
        },
        {
          n: "02",
          name: "الإنصات الفعّال",
          time: "15-20 دقيقة",
          text: "نأخذ وقتنا لفهم ما تعيشه فعلاً، دون مقاطعتك.",
        },
        {
          n: "03",
          name: "التوضيح",
          time: "10-15 دقيقة",
          text: "نفكك الموقف معًا — ما تشعر به، وما هو فعلاً بين يديك.",
        },
        {
          n: "04",
          name: "خطوة عملية",
          time: "10 دقائق",
          text: "ننهي بخطوة بسيطة واحدة للأسبوع. لا قائمة من 15 نصيحة.",
        },
        { n: "05", name: "الختام", time: "5 دقائق", text: "«كيف تشعر مقارنة ببداية حديثنا؟»" },
      ],
    },
    pricing: {
      title: "الخدمات والأسعار الأولى",
      badge: "الأكثر اختيارًا",
      items: [
        {
          name: "جلسة إنصات",
          duration: "30 دقيقة",
          price: "39 درهم",
          text: "جلسة قصيرة للحديث والتفريغ.",
        },
        {
          name: "جلسة دعم",
          duration: "50 دقيقة",
          price: "69 درهم",
          text: "الجلسة الكاملة: إنصات، توضيح، وخطوة عملية في النهاية.",
        },
        {
          name: "باقة 4 جلسات",
          duration: "4×50 دقيقة",
          price: "249 درهم",
          text: "لمرافقة مستمرة على مدى الوقت (~62 درهم للجلسة).",
        },
      ],
      note: "أسعار الانطلاق، قابلة للتغيير.",
      cta: "احجز عبر واتساب",
    },
    forWho: {
      title: "Écoute+ مناسبة لك إذا...",
      text: "...كنت تمر بفترة صعبة — ضغط، شك، إرهاق نفسي، علاقة معقدة — وتحتاج فقط لأن تتحدث مع أحد.",
      transition:
        "إذا كنت تعيش حالة طارئة — أفكار بإيذاء نفسك، أو إنهاء حياتك، أو إيذاء شخص آخر — فـEcoute+ ليست الخدمة المناسبة لك الآن. راجع القسم أدناه فورًا.",
    },
    urgent: {
      title: "🆘 موارد الطوارئ",
      intro: "إذا كنت في خطر مباشر، أو راودتك أفكار بإيذاء نفسك أو إنهاء حياتك:",
      lines: [
        {
          before: "اتصل بالإسعاف الطبي المستعجل (SAMU): ",
          tel: "141",
          label: "141",
          after: "",
        },
        {
          before: "أو الوقاية المدنية: ",
          tel: "15",
          label: "15",
          after: " (أو 112 من الهاتف المحمول)",
        },
        {
          before:
            "أو توجه مباشرة إلى قسم الطوارئ في أقرب مستشفى — المستشفيات العمومية المغربية تستقبل حالات الطوارئ النفسية على مدار الساعة.",
          tel: null,
          label: "",
          after: "",
        },
      ],
      servicesIntro: "يمكنك أيضًا التواصل مباشرة مع مصحتين متخصصتين:",
      services: [
        {
          before: "مصحة لافالي (تامسنا، الرباط) — طوارئ نفسية على مدار الساعة طيلة أيام الأسبوع: ",
          tel: "0661500940",
          label: "0661 50 09 40",
          after: " (مصحة خاصة، الاستشارة مؤدى عنها)",
        },
        {
          before: "مصحة الطب النفسي، المستشفى الجامعي ابن رشد، الدار البيضاء: ",
          tel: "0522481010",
          label: "05 22 48 10 10",
          after: "",
        },
      ],
      entourage: "إذا كان شخص من محيطك في خطر، لا تتركه وحيدًا واتصل معه بهذه الأرقام.",
      noLine: "لا يتوفر المغرب، بحسب ما توصلنا إليه، على خط وطني موحّد مخصص للوقاية من الانتحار.",
    },
    privacy: {
      title: "خصوصيتك",
      text: "لا نجمع سوى الحد الأدنى الضروري لتنظيم جلستك. لا تُسجَّل محادثاتك ولا تُشارَك.",
      link: "اقرأ السياسة الكاملة ←",
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        {
          q: "هل أنت طبيب نفسي أو أخصائي نفسي؟",
          a: "لا. Écoute+ خدمة إنصات ودعم إنساني، وليست خدمة طبية أو سريرية. إذا كانت حالتك تستدعي متابعة نفسية أو طبية، سأوجهك إلى مختص مؤهل.",
        },
        { q: "هل تُسجَّل الجلسات؟", a: "لا، لا تُسجَّل أي جلسة." },
        { q: "كيف يتم الدفع؟", a: "يتم الدفع مباشرة عبر واتساب عند الحجز." },
        {
          q: "هل يمكنني إلغاء أو تأجيل جلسة؟",
          a: "نعم، تواصل معي عبر واتساب قبل 24 ساعة على الأقل.",
        },
        {
          q: "هل الأمر سري فعلاً؟",
          a: "نعم. لا يُحتفظ إلا بالمعلومات الضرورية لتنظيم الجلسة. راجع صفحة الخصوصية.",
        },
        {
          q: "ماذا أفعل إذا احتجت مساعدة عاجلة؟",
          a: "Écoute+ ليست خدمة طوارئ. راجع قسم موارد الطوارئ أعلاه، أو توجه إلى أقرب قسم للمستعجلات.",
        },
      ],
    },
    contact: {
      title: "مستعد/ة للحديث؟",
      text: "احجز جلستك مباشرة عبر واتساب — رد سريع، دون أي تسجيل مسبق.",
      cta: "افتح واتساب",
    },
    about: {
      title: "من وراء Écoute+",
      text: "اسمي سميع. لست طبيبًا نفسيًا ولا أخصائيًا نفسيًا. أؤمن أنه، إلى جانب الرعاية الطبية، هناك مكان لمساحة إنصات بسيطة — دون حكم، دون توصيف، ودون موعد يثير القلق. Écoute+ هي هذه المساحة.",
    },
    footer: {
      links: [
        { label: "الخصوصية", href: "/confidentialite" },
        { label: "شروط الاستخدام", href: "/conditions" },
        { label: "موارد الطوارئ", href: "/#urgences" },
        { label: "تواصل", href: "/#contact" },
      ],
      disclaimer:
        "Écoute+ ليست خدمة طبية أو نفسية أو طب نفسي. في حالات الطوارئ، اتصل بـ141 أو 15، أو توجه إلى أقرب قسم للمستعجلات.",
    },
    back: "→ العودة إلى الصفحة الرئيسية",
    pages: {
      privacy: {
        title: "سياسة الخصوصية",
        paragraphs: [
          "نطبّق مبدأً بسيطًا: نجمع أقل قدر ممكن من المعلومات، ونحتفظ بها لأقصر مدة ممكنة.",
          "ما نجمعه: اسمك الأول أو اسمًا مستعارًا، وسيلة تواصل (واتساب)، سبب طلبك في كلمات قليلة.",
          "ما لا نجمعه: اسم عائلتك، عنوانك، وثيقة هوية، ملف أو تاريخ طبي، تسجيل صوتي أو مرئي للجلسات.",
          "تبقى محادثاتك سرية، إلا في الحالات التي ينص عليها القانون (خطر وشيك عليك أو على غيرك).",
          "هذا النص نقطة انطلاق. معالجة البيانات المرتبطة بالصحة يؤطرها في المغرب القانون 09-08 وقد تستلزم إجراءً لدى CNDP قبل الإطلاق التجاري للخدمة.",
        ],
      },
      terms: {
        title: "شروط الاستخدام",
        paragraphs: [
          "Écoute+ ليست خدمة طبية أو نفسية أو طب نفسي.",
          "الجلسات المقترحة هي جلسات إنصات ودعم إنساني. لا تشكل تشخيصًا، ولا علاجًا نفسيًا، ولا علاجًا طبيًا، ولا تُغني عن متابعة مختص صحي مؤهل.",
          "في حالة طوارئ نفسية، أو خطر مباشر، أو أفكار انتحارية، اتصل فورًا بخدمات الطوارئ (141 أو 15) أو توجه إلى أقرب قسم للمستعجلات.",
          "يحتفظ مقدّم الخدمة بالحق في إيقاف الجلسة وتوجيه الشخص إلى مختص صحي إذا تجاوزت الحالة إطار جلسة الإنصات.",
          "هذا النص نقطة انطلاق ويجب أن يراجعه مختص قانوني قبل النشر.",
        ],
      },
    },
  },
};

export type Content = (typeof content)["fr"];