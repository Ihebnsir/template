const themeToggle = document.getElementById('theme-toggle');
const languageSelect = document.getElementById('language-select');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const body = document.body;
const compareBar = document.getElementById('compare-bar');
const compareItems = document.getElementById('compare-items');
const compareLink = document.getElementById('compare-link');

const courseCatalog = {
  excel: { id: 'excel', title: 'Excel & automatisation', price: '120 DT', duration: '6 semaines', level: 'Débutant', center: 'Centre Excel Pro', rating: '4.8', wilaya: 'Tunis', category: 'Technologie' },
  ia: { id: 'ia', title: 'IA générative pour débutants', price: '260 DT', duration: '8 semaines', level: 'Débutant', center: 'TechLab Tunis', rating: '4.9', wilaya: 'Tunis', category: 'Technologie' },
  anglais: { id: 'anglais', title: 'Anglais professionnel', price: '180 DT', duration: '5 semaines', level: 'Intermédiaire', center: 'Lingua Center', rating: '4.7', wilaya: 'Sfax', category: 'Langues' },
  design: { id: 'design', title: 'UI/UX Design Essentials', price: '220 DT', duration: '7 semaines', level: 'Intermédiaire', center: 'Studio Creatif', rating: '4.8', wilaya: 'Sousse', category: 'Design' },
  'search-ia': { id: 'search-ia', title: 'IA générative pour équipes', price: '320 DT', duration: '10 semaines', level: 'Avancé', center: 'Nova Academy', rating: '4.9', wilaya: 'Ariana', category: 'Technologie' },
  'search-ang': { id: 'search-ang', title: 'Anglais professionnel', price: '190 DT', duration: '6 semaines', level: 'Intermédiaire', center: 'Lingua Center', rating: '4.7', wilaya: 'Sfax', category: 'Langues' },
  'search-design': { id: 'search-design', title: 'UI/UX Design Essentials', price: '230 DT', duration: '8 semaines', level: 'Intermédiaire', center: 'Studio Creatif', rating: '4.8', wilaya: 'Sousse', category: 'Design' },
  'detail-ia': { id: 'detail-ia', title: 'IA générative pour débutants', price: '260 DT', duration: '8 semaines', level: 'Débutant', center: 'TechLab Tunis', rating: '4.9', wilaya: 'Tunis', category: 'Technologie' }
};

const translations = {
  fr: {
    pageFavoritesTitle: 'Favoris | SkillBridge',
    pageComparatorTitle: 'Comparateur | SkillBridge',
    navFavorites: 'Favoris',
    favoritesLabel: 'Favoris',
    favoritesTitle: 'Vos formations sauvegardées',
    compareLabel: 'Comparateur',
    compareTitle: 'Comparez jusqu’à 3 formations',
    compareNow: 'Comparer maintenant',
    compareFeature: 'Caractéristique',
    comparePrice: 'Prix',
    compareDuration: 'Durée',
    compareLevel: 'Niveau',
    compareCenter: 'Centre',
    compareRating: 'Note',
    compareWilaya: 'Wilaya',
    pageHomeTitle: 'SkillBridge | Plateforme tunisienne de formation', navHome: 'Accueil', navCourses: 'Formations', navHow: 'Comment ça marche', navLogin: 'Connexion', navMessages: 'Messages', heroBadge: 'Plateforme d’apprentissage locale', heroTitle: 'Apprenez, progressez et débloquez votre futur en Tunisie.', heroText: 'Retrouvez des formations certifiantes près de chez vous, réservez facilement et avancez au rythme qui vous convient.', searchKeyword: 'Mot-clé', searchKeywordPlaceholder: 'Ex. Excel, IA, anglais', searchWilaya: 'Wilaya', wilayaAny: 'Toutes les wilayas', searchButton: 'Rechercher', statRating: 'Note moyenne', statLearners: 'Apprenants actifs', statCenters: 'Centres partenaires', sectionTrends: 'Formations tendances', trendsTitle: 'Les formations les plus demandées', viewAll: 'Voir tout', details: 'Détails', visitCenter: 'Visiter le centre', sectionCenters: 'Centres populaires par région', centersTitle: 'Des centres de confiance partout en Tunisie', sectionHow: 'Comment ça marche', howTitle: 'Un parcours simple en 3 étapes', stepSearch: 'Rechercher', stepSearchText: 'Trouvez une formation par mot-clé, wilaya, niveau ou budget.', stepBook: 'Réserver', stepBookText: 'Consultez les disponibilités, réservez et payez de façon sécurisée.', stepLearn: 'Se former', stepLearnText: 'Accédez à votre espace, échangez en direct et obtenez votre certificat.', sectionCategories: 'Catégories', categoriesTitle: 'Choisissez votre prochaine spécialisation', catTech: 'Informatique', catTechText: 'Développement, IA, cybersécurité.', catLangues: 'Langues', catLanguesText: 'Anglais, arabe, communication.', catCraft: 'Artisanat', catCraftText: 'Couture, ébénisterie, maintenance.', catSport: 'Sport', catSportText: 'Fitness, yoga, coaching sportif.', sectionTestimonials: 'Témoignages', testimonialsTitle: 'Ce que disent nos apprenants', testimonialOne: '“J’ai trouvé une formation de qualité à Sfax en quelques jours. Le parcours est fluide et la plateforme est très rassurante.”', testimonialOneRole: 'Apprenant en IA', testimonialTwo: '“Le chat intégré m’a permis de clarifier mes questions avant même de réserver.”', testimonialTwoRole: 'Apprenant en langues', testimonialThree: '“Un vrai gain de temps pour comparer plusieurs centres et payer en quelques clics.”', testimonialThreeRole: 'Apprenant en design', footerText: 'La plateforme tunisienne qui relie apprentissage, centres et opportunités.', footerExplore: 'Explorer', footerCourses: 'Formations', footerHow: 'Comment ça marche', footerSignup: 'Créer un compte', footerContact: 'Contact', footerLocation: 'Tunis, Tunisie', footerSocial: 'Réseaux', filtersTitle: 'Filtres', filterBudget: 'Budget', filterBudgetAny: 'Tous les prix', filterWilaya: 'Wilaya', filterCategory: 'Domaine', filterCategoryAny: 'Tous les domaines', filterRating: 'Note minimum', filterAvailable: 'Disponible maintenant', applyFilters: 'Appliquer', resultsLabel: 'Résultats', resultsTitle: 'Formations disponibles', resultsCount: '24 formations trouvées', nextPage: 'Suivant', viewDetail: 'Voir la fiche', centerBadge: 'Centre partenaire', centerDescription: 'Centre reconnu pour ses formations pratiques en bureautique et développement.', centerPrograms: 'Toutes les formations', centerProgramsTitle: 'Programmes proposés par ce centre', formationBadge: 'Formation intensive', formationDescription: 'Un programme pratique pour comprendre les outils d’IA générative, créer des prompts efficaces et automatiser des tâches simples.', formationAbout: 'À propos', formationAboutText: 'Cette formation allie théorie, ateliers et cas concrets. À l’issue de la session, vous recevrez un certificat de participation.', featureOne: '6 séances de 2h', featureTwo: 'Supports téléchargeables', featureThree: 'Projet final guidé', reviewsTitle: 'Avis clients', reviewOne: '“Très structuré et très utile pour démarrer, surtout pour les débutants.”', reviewTwo: '“Le formateur est excellent et les exemples sont très concrets.”', bookingTitle: 'Réserver', bookingAvailability: 'Disponible à partir du 18 août', bookButton: 'Réserver', paymentMethodsLabel: 'Paiement sécurisé', paymentMethodsTitle: 'Choisissez votre moyen de paiement', paymentTunisian: 'Carte bancaire tunisienne', paymentTunisianText: 'Visa / Mastercard émises par BIAT, BNA, Attijari ou STB', paymentEdinarText: 'Paiement via Poste Tunisienne', paymentInternational: 'Carte internationale', paymentInternationalText: 'Visa ou Mastercard classique', paymentSecure: 'Paiement sécurisé', paymentCardNumber: 'Numéro de carte', paymentExpiry: 'Date d’expiration', paymentCvv: 'CVV', paymentHolder: 'Nom du titulaire', paymentPayButton: 'Payer 260 DT', dashboardOverview: 'Vue d’ensemble', dashboardReservations: 'Mes réservations', dashboardMessages: 'Messages', dashboardCertificates: 'Certificats', dashboardProfile: 'Profil', dashboardWelcome: 'Bienvenue', dashboardLearnerName: 'Bonjour, Clara', dashboardBack: 'Retour au site', dashboardStatsBookings: 'Formations réservées', dashboardStatsMessages: 'Messages non lus', dashboardStatsCertificates: 'Certificat disponible', dashboardUpcoming: 'Prochaines séances', dashboardUpcomingTitle: 'Vos réservations à venir', statusConfirmed: 'Confirmée', statusPending: 'À payer', dashboardCenterPrograms: 'Mes formations', dashboardCenterReservations: 'Réservations', dashboardCenterStats: 'Statistiques', dashboardCenterWelcome: 'Centre de formation', dashboardReservationsReceived: 'Réservations reçues', dashboardReservationsTitle: 'Dernières demandes', tableLearner: 'Apprenant', tableCourse: 'Formation', tableDate: 'Date', tableStatus: 'Statut', chatTitle: 'Messages', chatNew: '+ Nouveau', chatMessageOne: 'Votre réservation est confirmée.', chatMessageTwo: 'Les horaires seront envoyés demain.', chatMessageThree: 'Merci, nous vous recontacterons très vite.', chatOnline: 'En ligne', chatIncomingOne: 'Bonjour Clara, votre place est réservée pour la séance du 18 août.', chatOutgoingOne: 'Parfait, merci. Est-ce qu’un support sera envoyé à l’avance ?', chatIncomingTwo: 'Oui, vous le recevrez par email 48h avant.', chatInputPlaceholder: 'Écrivez votre message...', chatSend: 'Envoyer', authLoginTitle: 'Connexion', authLoginText: 'Accédez à votre espace SkillBridge.', authEmail: 'Email', authPassword: 'Mot de passe', authLearner: 'Apprenant', authCenter: 'Centre de formation', authLoginButton: 'Se connecter', authNoAccount: 'Pas encore de compte ?', authCreateAccount: 'Créer un compte', authSignupTitle: 'Créer un compte', authSignupText: 'Rejoignez la communauté SkillBridge.', authName: 'Nom complet', authSignupButton: 'S’inscrire', authAlreadyAccount: 'Vous avez déjà un compte ?', authLoginLink: 'Se connecter'
  },
  en: {
    pageHomeTitle: 'SkillBridge | Tunisian training platform', navHome: 'Home', navCourses: 'Courses', navHow: 'How it works', navLogin: 'Login', navMessages: 'Messages', navFavorites: 'Favorites', heroBadge: 'Local learning platform', heroTitle: 'Learn, grow and unlock your future in Tunisia.', heroText: 'Find certified training near you, book in a few clicks and progress at your own pace.', searchKeyword: 'Keyword', searchKeywordPlaceholder: 'e.g. Excel, AI, English', searchWilaya: 'Governate', wilayaAny: 'All governates', searchButton: 'Search', statRating: 'Average rating', statLearners: 'Active learners', statCenters: 'Partner centers', sectionTrends: 'Trending courses', trendsTitle: 'The most requested courses', viewAll: 'View all', details: 'Details', visitCenter: 'Visit center', sectionCenters: 'Popular centers by region', centersTitle: 'Trusted centers across Tunisia', sectionHow: 'How it works', howTitle: 'A simple journey in 3 steps', stepSearch: 'Search', stepSearchText: 'Find a course by keyword, governate, level or budget.', stepBook: 'Book', stepBookText: 'Check availability, book and pay securely.', stepLearn: 'Learn', stepLearnText: 'Access your space, chat live and get your certificate.', sectionCategories: 'Categories', categoriesTitle: 'Choose your next specialization', catTech: 'Technology', catTechText: 'Development, AI, cybersecurity.', catLangues: 'Languages', catLanguesText: 'English, Arabic, communication.', catCraft: 'Craftsmanship', catCraftText: 'Sewing, carpentry, maintenance.', catSport: 'Sport', catSportText: 'Fitness, yoga, coaching.', sectionTestimonials: 'Testimonials', testimonialsTitle: 'What our learners say', testimonialOne: '“I found a quality course in Sfax in a few days. The experience is smooth and reassuring.”', testimonialOneRole: 'AI learner', testimonialTwo: '“The built-in chat helped me clarify everything before booking.”', testimonialTwoRole: 'Language learner', testimonialThree: '“A real time-saver to compare centers and pay in just a few clicks.”', testimonialThreeRole: 'Design learner', footerText: 'The Tunisian platform connecting learning, centers and opportunities.', footerExplore: 'Explore', footerCourses: 'Courses', footerHow: 'How it works', footerSignup: 'Create an account', footerContact: 'Contact', footerLocation: 'Tunis, Tunisia', footerSocial: 'Social', filtersTitle: 'Filters', filterBudget: 'Budget', filterBudgetAny: 'Any price', filterWilaya: 'Governate', filterCategory: 'Domain', filterCategoryAny: 'Any domain', filterRating: 'Minimum rating', filterAvailable: 'Available now', applyFilters: 'Apply', resultsLabel: 'Results', resultsTitle: 'Available courses', resultsCount: '24 courses found', nextPage: 'Next', viewDetail: 'View details', centerBadge: 'Partner center', centerDescription: 'A recognized center for hands-on training in office tools and development.', centerPrograms: 'All courses', centerProgramsTitle: 'Programs offered by this center', formationBadge: 'Intensive course', formationDescription: 'A practical program to understand generative AI tools, craft effective prompts and automate simple tasks.', formationAbout: 'About', formationAboutText: 'This course combines theory, workshops and practical case studies. By the end, you will receive a participation certificate.', featureOne: '6 sessions of 2 hours', featureTwo: 'Downloadable materials', featureThree: 'Guided final project', reviewsTitle: 'Client reviews', reviewOne: '“Very structured and extremely useful to get started, especially for beginners.”', reviewTwo: '“The trainer is excellent and the examples are very practical.”', bookingTitle: 'Book', bookingAvailability: 'Available from August 18', bookButton: 'Book', paymentMethodsLabel: 'Secure payment', paymentMethodsTitle: 'Choose your payment method', paymentTunisian: 'Tunisian bank card', paymentTunisianText: 'Visa / Mastercard issued by BIAT, BNA, Attijari or STB', paymentEdinarText: 'Payment via Poste Tunisienne', paymentInternational: 'International card', paymentInternationalText: 'Classic Visa or Mastercard', paymentSecure: 'Secure payment', paymentCardNumber: 'Card number', paymentExpiry: 'Expiry date', paymentCvv: 'CVV', paymentHolder: 'Cardholder name', paymentPayButton: 'Pay 260 DT', dashboardOverview: 'Overview', dashboardReservations: 'My bookings', dashboardMessages: 'Messages', dashboardCertificates: 'Certificates', dashboardProfile: 'Profile', dashboardWelcome: 'Welcome', dashboardLearnerName: 'Hello, Clara', dashboardBack: 'Back to site', dashboardStatsBookings: 'Booked courses', dashboardStatsMessages: 'Unread messages', dashboardStatsCertificates: 'Certificate available', dashboardUpcoming: 'Upcoming sessions', dashboardUpcomingTitle: 'Your upcoming bookings', statusConfirmed: 'Confirmed', statusPending: 'Pending payment', dashboardCenterPrograms: 'My courses', dashboardCenterReservations: 'Reservations', dashboardCenterStats: 'Statistics', dashboardCenterWelcome: 'Training center', dashboardReservationsReceived: 'Reservations received', dashboardReservationsTitle: 'Latest requests', tableLearner: 'Learner', tableCourse: 'Course', tableDate: 'Date', tableStatus: 'Status', chatTitle: 'Messages', chatNew: '+ New', chatMessageOne: 'Your booking has been confirmed.', chatMessageTwo: 'The schedule will be sent tomorrow.', chatMessageThree: 'Thank you, we will contact you soon.', chatOnline: 'Online', chatIncomingOne: 'Hello Clara, your spot is reserved for the session on August 18.', chatOutgoingOne: 'Perfect, thanks. Will support material be sent in advance?', chatIncomingTwo: 'Yes, you will receive it by email 48 hours before.', chatInputPlaceholder: 'Write your message...', chatSend: 'Send', authLoginTitle: 'Login', authLoginText: 'Access your SkillBridge space.', authEmail: 'Email', authPassword: 'Password', authLearner: 'Learner', authCenter: 'Training center', authLoginButton: 'Log in', authNoAccount: 'Don’t have an account yet?', authCreateAccount: 'Create an account', authSignupTitle: 'Create an account', authSignupText: 'Join the SkillBridge community.', authName: 'Full name', authSignupButton: 'Sign up', authAlreadyAccount: 'Already have an account?', authLoginLink: 'Log in', pageFavoritesTitle: 'Favorites | SkillBridge', pageComparatorTitle: 'Comparator | SkillBridge', favoritesLabel: 'Favorites', favoritesTitle: 'Your saved courses', compareLabel: 'Comparator', compareTitle: 'Compare up to 3 courses', compareNow: 'Compare now', compareFeature: 'Feature', comparePrice: 'Price', compareDuration: 'Duration', compareLevel: 'Level', compareCenter: 'Center', compareRating: 'Rating', compareWilaya: 'Governate'
  },
  ar: {
    pageHomeTitle: 'SkillBridge | منصة تدريب تونسية', navHome: 'الرئيسية', navCourses: 'الدورات', navHow: 'كيف تعمل', navLogin: 'تسجيل الدخول', navMessages: 'الرسائل', navFavorites: 'المفضلة', heroBadge: 'منصة تعلم محلية', heroTitle: 'تعلّم، تقدّم، وافتح آفاقك في تونس.', heroText: 'ابحث عن دورات معتمدة بالقرب منك، واحجز بسهولة، وتقدّم بالوتيرة التي تناسبك.', searchKeyword: 'الكلمة المفتاحية', searchKeywordPlaceholder: 'مثال: إكسل، ذكاء اصطناعي، إنجليزية', searchWilaya: 'الولاية', wilayaAny: 'كل الولايات', searchButton: 'بحث', statRating: 'متوسط التقييم', statLearners: 'متعلمون نشطون', statCenters: 'مراكز شريكة', sectionTrends: 'الدورات الرائجة', trendsTitle: 'الأكثر طلبًا', viewAll: 'عرض الكل', details: 'التفاصيل', visitCenter: 'زيارة المركز', sectionCenters: 'المراكز الشائعة حسب المنطقة', centersTitle: 'مراكز موثوقة في جميع أنحاء تونس', sectionHow: 'كيف تعمل', howTitle: 'رحلة بسيطة في 3 خطوات', stepSearch: 'البحث', stepSearchText: 'ابحث عن دورة حسب الكلمة المفتاحية أو الولاية أو المستوى أو الميزانية.', stepBook: 'الحجز', stepBookText: 'تحقق من التوافر واحجز وادفع بشكل آمن.', stepLearn: 'التعلم', stepLearnText: 'استخدم مساحتك الخاصة وتواصل مباشرة واحصل على شهادتك.', sectionCategories: 'الفئات', categoriesTitle: 'اختر تخصصك القادم', catTech: 'تقنية', catTechText: 'تطوير، ذكاء اصطناعي، أمن سيبراني.', catLangues: 'لغات', catLanguesText: 'الإنجليزية، العربية، التواصل.', catCraft: 'حرف', catCraftText: 'الخياطة، النجارة، الصيانة.', catSport: 'رياضة', catSportText: 'اللياقة، اليوغا، التدريب الرياضي.', sectionTestimonials: 'التقييمات', testimonialsTitle: 'ما يقوله متعلمونا', testimonialOne: '“وجدت دورة جيدة في صفاقس خلال أيام قليلة. التجربة سلسة ومطمئنة جدًا.”', testimonialOneRole: 'متعلم في الذكاء الاصطناعي', testimonialTwo: '“ساعدني الدردشة المدمجة على توضيح كل شيء قبل الحجز.”', testimonialTwoRole: 'متعلم لغات', testimonialThree: '“توفير كبير للوقت لمقارنة المراكز والدفع ببضع نقرات.”', testimonialThreeRole: 'متعلم تصميم', footerText: 'المنصة التونسية التي توصل التعلم والمراكز والفرص.', footerExplore: 'استكشاف', footerCourses: 'الدورات', footerHow: 'كيف تعمل', footerSignup: 'إنشاء حساب', footerContact: 'التواصل', footerLocation: 'تونس، تونس', footerSocial: 'وسائل التواصل', filtersTitle: 'الفلاتر', filterBudget: 'الميزانية', filterBudgetAny: 'أي سعر', filterWilaya: 'الولاية', filterCategory: 'النطاق', filterCategoryAny: 'أي نطاق', filterRating: 'أدنى تقييم', filterAvailable: 'متاح الآن', applyFilters: 'تطبيق', resultsLabel: 'النتائج', resultsTitle: 'الدورات المتاحة', resultsCount: '24 دورة وجدت', nextPage: 'التالي', viewDetail: 'عرض التفاصيل', centerBadge: 'مركز شريك', centerDescription: 'مركز معترف به للتدريب العملي على أدوات المكتب والتطوير.', centerPrograms: 'كل الدورات', centerProgramsTitle: 'البرامج التي يقدمها هذا المركز', formationBadge: 'دورة مكثفة', formationDescription: 'برنامج عملي لفهم أدوات الذكاء الاصطناعي التوليدي، وصياغة طلبات فعالة وأتمتة مهام بسيطة.', formationAbout: 'حول', formationAboutText: 'تجمع هذه الدورة بين النظرية والورش العمل ودراسات الحالة العملية. وفي النهاية ستحصل على شهادة حضور.', featureOne: '6 جلسات مدة كل منها ساعتان', featureTwo: 'مواد قابلة للتنزيل', featureThree: 'مشروع نهائي موجه', reviewsTitle: 'آراء العملاء', reviewOne: '“منظم جدًا ومفيد جدًا للبدء، خصوصًا للمبتدئين.”', reviewTwo: '“المدرب ممتاز والأمثلة عملية جدًا.”', bookingTitle: 'الحجز', bookingAvailability: 'متاح ابتداء من 18 أغسطس', bookButton: 'احجز', paymentMethodsLabel: 'دفع آمن', paymentMethodsTitle: 'اختر طريقة الدفع', paymentTunisian: 'بطاقة بنكية تونسية', paymentTunisianText: 'فيزا / ماستركارد مصدرة من BIAT أو BNA أو Attijari أو STB', paymentEdinarText: 'الدفع عبر Poste Tunisienne', paymentInternational: 'بطاقة دولية', paymentInternationalText: 'فيزا أو ماستركارد كلاسيكية', paymentSecure: 'دفع آمن', paymentCardNumber: 'رقم البطاقة', paymentExpiry: 'تاريخ الانتهاء', paymentCvv: 'الرمز الأمني', paymentHolder: 'اسم حامل البطاقة', paymentPayButton: 'ادفع 260 دينار', dashboardOverview: 'نظرة عامة', dashboardReservations: 'حجوزاتي', dashboardMessages: 'الرسائل', dashboardCertificates: 'الشهادات', dashboardProfile: 'الملف الشخصي', dashboardWelcome: 'أهلاً', dashboardLearnerName: 'مرحبًا، كلارا', dashboardBack: 'العودة إلى الموقع', dashboardStatsBookings: 'دورات محجوزة', dashboardStatsMessages: 'رسائل غير مقروءة', dashboardStatsCertificates: 'شهادة متاحة', dashboardUpcoming: 'الجلسات القادمة', dashboardUpcomingTitle: 'حجوزاتك القادمة', statusConfirmed: 'تم تأكيدها', statusPending: 'في انتظار الدفع', dashboardCenterPrograms: 'دوراتي', dashboardCenterReservations: 'الحجوزات', dashboardCenterStats: 'الإحصاءات', dashboardCenterWelcome: 'مركز تدريب', dashboardReservationsReceived: 'الحجوزات المستلمة', dashboardReservationsTitle: 'أحدث الطلبات', tableLearner: 'المتعلم', tableCourse: 'الدورة', tableDate: 'التاريخ', tableStatus: 'الحالة', chatTitle: 'الرسائل', chatNew: '+ جديد', chatMessageOne: 'تم تأكيد الحجز.', chatMessageTwo: 'سيتم إرسال الجدول غدًا.', chatMessageThree: 'شكرًا، سنتواصل معك قريبًا.', chatOnline: 'متصل', chatIncomingOne: 'مرحبًا كلارا، تم حجز مكانك للجلسة في 18 أغسطس.', chatOutgoingOne: 'ممتاز، شكرًا. هل سيتم إرسال المواد الداعمة مسبقًا؟', chatIncomingTwo: 'نعم، ستصلك عبر البريد الإلكتروني قبل 48 ساعة.', chatInputPlaceholder: 'اكتب رسالتك...', chatSend: 'إرسال', authLoginTitle: 'تسجيل الدخول', authLoginText: 'الوصول إلى مساحة SkillBridge.', authEmail: 'البريد الإلكتروني', authPassword: 'كلمة المرور', authLearner: 'متعلم', authCenter: 'مركز تدريب', authLoginButton: 'تسجيل الدخول', authNoAccount: 'ليس لديك حساب بعد؟', authCreateAccount: 'إنشاء حساب', authSignupTitle: 'إنشاء حساب', authSignupText: 'انضم إلى مجتمع SkillBridge.', authName: 'الاسم الكامل', authSignupButton: 'إنشاء الحساب', authAlreadyAccount: 'هل لديك حساب بالفعل؟', authLoginLink: 'تسجيل الدخول', pageFavoritesTitle: 'المفضلة | SkillBridge', pageComparatorTitle: 'المقارن | SkillBridge', favoritesLabel: 'المفضلة', favoritesTitle: 'دوراتك المحفوظة', compareLabel: 'المقارن', compareTitle: 'قارن ما يصل إلى 3 دورات', compareNow: 'قارن الآن', compareFeature: 'الميزة', comparePrice: 'السعر', compareDuration: 'المدة', compareLevel: 'المستوى', compareCenter: 'المركز', compareRating: 'التقييم', compareWilaya: 'الولاية'
  }
};

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('skillbridge-theme', theme);
}

function getStoredFavorites() {
  try {
    return JSON.parse(localStorage.getItem('skillbridge-favorites') || '[]');
  } catch {
    return [];
  }
}

function setStoredFavorites(items) {
  localStorage.setItem('skillbridge-favorites', JSON.stringify(items));
}

function getStoredComparison() {
  try {
    return JSON.parse(sessionStorage.getItem('skillbridge-compare') || '[]');
  } catch {
    return [];
  }
}

function setStoredComparison(items) {
  sessionStorage.setItem('skillbridge-compare', JSON.stringify(items));
}

function ensureFavoriteLink() {
  if (document.querySelector('[data-favorite-count]')) return;
  const nav = document.querySelector('.main-nav');
  if (!nav) return;
  const link = document.createElement('a');
  link.href = 'favoris.html';
  link.className = 'icon-link';
  link.setAttribute('aria-label', 'Favoris');
  link.innerHTML = '<span>♡</span><span class="count-badge" data-favorite-count>0</span>';
  nav.appendChild(link);
}

function getCourseById(id) {
  return courseCatalog[id] || null;
}

function renderFavoritesCount() {
  ensureFavoriteLink();
  const favorites = getStoredFavorites();
  const counter = document.querySelector('[data-favorite-count]');
  if (counter) counter.textContent = favorites.length;
}

function renderFavoritesPage() {
  const container = document.getElementById('favorites-list');
  if (!container) return;
  const favorites = getStoredFavorites();
  if (favorites.length === 0) {
    container.innerHTML = '<div class="card"><h3>Aucune formation sauvegardée</h3><p>Ajoutez des formations à vos favoris pour les retrouver ici.</p></div>';
    return;
  }
  container.innerHTML = favorites.map(item => {
    const course = getCourseById(item.id) || { ...item, price: '—', duration: '—', level: '—', center: '—', rating: '—', wilaya: '—', category: '—' };
    return `
      <article class="card">
        <div class="section-heading">
          <div>
            <span class="section-label">${course.category || 'Formation'}</span>
            <h3>${course.title}</h3>
          </div>
          <button class="favorite-btn active" type="button" data-favorite-id="${course.id}" data-favorite-title="${course.title}" aria-pressed="true">♥</button>
        </div>
        <p>${course.center}</p>
        <div class="chip-group">
          <span class="chip">⭐ ${course.rating}</span>
          <span class="chip">📍 ${course.wilaya}</span>
          <span class="chip">⏱ ${course.duration}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-primary" href="formation-details.html">Voir les détails</a>
          <button class="compare-btn" type="button" data-compare-id="${course.id}" data-compare-title="${course.title}" aria-pressed="false">⚖ Comparer</button>
        </div>
      </article>`;
  }).join('');
}

function renderComparatorPage() {
  const table = document.querySelector('table');
  if (!table) return;
  const compare = getStoredComparison();
  const headers = [document.getElementById('compare-col-1'), document.getElementById('compare-col-2'), document.getElementById('compare-col-3')];
  headers.forEach((cell, index) => {
    if (!cell) return;
    const item = compare[index];
    cell.textContent = item ? (getCourseById(item.id)?.title || item.title || '—') : '—';
  });
  table.querySelectorAll('tbody tr').forEach(row => {
    row.querySelectorAll('td[data-compare-value]').forEach((cell, index) => {
      const item = compare[index];
      if (!item) {
        cell.textContent = '—';
        return;
      }
      const course = getCourseById(item.id) || { ...item, price: '—', duration: '—', level: '—', center: '—', rating: '—', wilaya: '—' };
      cell.textContent = course[cell.getAttribute('data-compare-value')] || '—';
    });
  });
}

function renderCompareBar() {
  const compare = getStoredComparison();
  if (!compareBar || !compareItems) return;
  if (compare.length === 0) {
    compareBar.style.display = 'none';
    return;
  }
  compareBar.style.display = 'flex';
  compareItems.innerHTML = compare.map(item => `<span class="compare-bar-item">${item.title}</span>`).join('');
  if (compareLink) compareLink.href = `comparateur.html?ids=${compare.map(item => item.id).join(',')}`;
}

function toggleFavorite(id, title) {
  const favorites = getStoredFavorites();
  const exists = favorites.some(item => item.id === id);
  const updated = exists
    ? favorites.filter(item => item.id !== id)
    : [...favorites, { id, title }];
  setStoredFavorites(updated);
  renderFavoritesCount();
  renderFavoritesPage();
  document.querySelectorAll(`[data-favorite-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', !exists);
    btn.setAttribute('aria-pressed', String(!exists));
  });
}

function toggleCompare(id, title) {
  const compare = getStoredComparison();
  const exists = compare.some(item => item.id === id);
  const filtered = compare.filter(item => item.id !== id);
  const updated = exists ? filtered : [...filtered, { id, title }].slice(-3);
  setStoredComparison(updated);
  renderCompareBar();
  renderComparatorPage();
  document.querySelectorAll(`[data-compare-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', !exists && updated.length <= 3);
    btn.setAttribute('aria-pressed', String(!exists && updated.length <= 3));
  });
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.fr;
  document.documentElement.lang = lang;
  body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) el.textContent = dictionary[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dictionary[key]) el.placeholder = dictionary[key];
  });
  localStorage.setItem('skillbridge-lang', lang);
  if (languageSelect) languageSelect.value = lang;
}

function toggleMenu() {
  if (!menuToggle || !mainNav) return;
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

if (themeToggle) {
  const savedTheme = localStorage.getItem('skillbridge-theme') || 'light';
  applyTheme(savedTheme);
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

if (languageSelect) {
  const savedLang = localStorage.getItem('skillbridge-lang') || 'fr';
  applyLanguage(savedLang);
  languageSelect.addEventListener('change', e => applyLanguage(e.target.value));
}

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
}

document.addEventListener('click', event => {
  const favoriteBtn = event.target.closest('.favorite-btn');
  if (favoriteBtn) {
    const id = favoriteBtn.getAttribute('data-favorite-id');
    const title = favoriteBtn.getAttribute('data-favorite-title') || 'Formation';
    toggleFavorite(id, title);
    return;
  }

  const compareBtn = event.target.closest('.compare-btn');
  if (compareBtn) {
    const id = compareBtn.getAttribute('data-compare-id');
    const title = compareBtn.getAttribute('data-compare-title') || 'Formation';
    toggleCompare(id, title);
  }
});

document.querySelectorAll('.payment-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.payment-card').forEach(item => item.classList.remove('active'));
    card.classList.add('active');
    const logo = document.getElementById('payment-logo');
    if (logo) {
      const map = { tunisian: '💳', edinar: '🔐', international: '🌍' };
      logo.textContent = map[card.dataset.method] || '💳';
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.08}s`;
  });
  const favorites = getStoredFavorites();
  favorites.forEach(item => {
    const btn = document.querySelector(`[data-favorite-id="${item.id}"]`);
    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    }
  });
  const compare = getStoredComparison();
  compare.forEach(item => {
    const btn = document.querySelector(`[data-compare-id="${item.id}"]`);
    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    }
  });
  renderFavoritesCount();
  renderFavoritesPage();
  renderComparatorPage();
  renderCompareBar();
});
