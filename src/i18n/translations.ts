export type Language = "en" | "ar";

export const translations = {
  en: {
    // =========================================================
    // Navigation
    // =========================================================

    dashboard: "Dashboard",
    uploadReviews: "Upload Reviews",
    aspectAnalysis: "Aspect Analysis",
    branches: "Branches",
    trendAnalysis: "Trend Analysis",
    recommendations: "Recommendations",
    settings: "Settings",

    workspace: "Workspace",

    // =========================================================
    // Project / Brand
    // =========================================================

    projectName: "Smart Customer Feedback Analytics",
    projectShort: "Customer Intelligence",

    dashboardTitle: "Smart Customer Feedback Analytics",

    dashboardSubtitle:
      "Analyze feedback. Discover insights. Improve performance.",

    // =========================================================
    // Dashboard
    // =========================================================

    executiveOverview: "Executive Overview",

    customerSatisfaction: "Customer Satisfaction",

    positiveSentiment: "Positive Sentiment",

    averageRating: "Average Rating",

    totalReviews: "Total Reviews",

    overallSatisfaction: "Overall satisfaction score",

    positiveCustomerFeedback: "Positive customer feedback",

    overallCustomerRating: "Overall customer rating",

    customerReviewsAnalyzed: "Customer reviews analyzed",

    aspectAnalysisTitle: "Aspect Analysis",

    sentimentDistribution: "Sentiment Distribution",

    recentReviews: "Recent Reviews",

    recentCustomerReviews:
      "Recent customer reviews will appear here.",

    // =========================================================
    // Smart Feedback
    // =========================================================

    smartFeedbackIntelligence:
      "Smart Feedback Intelligence",

    turnFeedbackIntoInsights:
      "Turn customer feedback into actionable insights.",

    analyzeFeedback: "Analyze feedback",

    discoverInsights: "Discover insights",

    improvePerformance: "Improve performance",

    // =========================================================
    // Admin
    // =========================================================

    admin: "Admin",

    administrator: "Administrator",

    profile: "Profile",

    logout: "Logout",

    // =========================================================
    // Language
    // =========================================================

    english: "English",

    arabic: "العربية",

    switchToArabic: "Switch to Arabic",

    switchToEnglish: "Switch to English",

    language: "Language",

    languageButtonEnglish: "English",

    languageButtonArabic: "العربية",

    // =========================================================
    // Sentiment
    // =========================================================

    positive: "Positive",

    neutral: "Neutral",

    negative: "Negative",

    // =========================================================
    // Review Aspects
    // =========================================================

    service: "Service",

    delivery: "Delivery",

    price: "Price",

    atmosphere: "Atmosphere",

    food: "Food",

    staff: "Staff",

    quality: "Quality",

    // =========================================================
    // Branches
    // =========================================================

    branchesPerformance: "Branch Performance",

    branch: "Branch",

    reviews: "Reviews",

    rating: "Rating",

    positiveReviews: "Positive",

    nasr: "Nasr",

    maadi: "Maadi",

    dokki: "Dokki",

    // =========================================================
    // Trends
    // =========================================================

    trend: "Trend",

    trends: "Trends",

    trendAnalysisTitle: "Trend Analysis",

    ratingTrend: "Rating Trend",

    sentimentTrend: "Sentiment Trend",

    monthlyTrend: "Monthly Trend",

    // =========================================================
    // Recommendations
    // =========================================================

    recommendationsTitle: "Recommendations",

    recommendationsSubtitle:
      "Actionable recommendations based on customer feedback.",

    recommendation: "Recommendation",

    priority: "Priority",

    high: "High",

    medium: "Medium",

    low: "Low",

    // =========================================================
    // Upload
    // =========================================================

    uploadReviewsTitle: "Upload Reviews",

    uploadReviewsSubtitle:
      "Upload your customer reviews file to analyze feedback.",

    uploadFile: "Upload File",

    chooseFile: "Choose File",

    analyzeReviews: "Analyze Reviews",

    noFileSelected: "No file selected",

    uploadSuccess: "File uploaded successfully",

    uploadError: "Failed to upload file",

    // =========================================================
    // General
    // =========================================================

    search: "Search",

    filter: "Filter",

    date: "Date",

    status: "Status",

    actions: "Actions",

    view: "View",

    details: "Details",

    save: "Save",

    cancel: "Cancel",

    close: "Close",

    edit: "Edit",

    delete: "Delete",

    loading: "Loading...",

    noData: "No data available",

    of: "of",

    // =========================================================
    // Extra general
    // =========================================================

    month: "Month",
    aspect: "Aspect",
    pending: "Pending",
    inProgress: "In Progress",
    completed: "Completed",
    role: "Role",

    // =========================================================
    // Login
    // =========================================================

    appName: "ReviewIQ AI",
    appTagline: "Customer Review Intelligence Platform",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    loginButton: "Login",

    // =========================================================
    // Profile
    // =========================================================

    userProfile: "User Profile",
    adminUserName: "Admin User",

    // =========================================================
    // Settings
    // =========================================================

    accountSettings: "Account Settings",
    manageProfilePreferences: "Manage your profile and preferences.",
    notifications: "Notifications",
    enableNotifications: "Enable Notifications",

    // =========================================================
    // Upload page
    // =========================================================

    uploadReviewsCSV: "Upload Reviews CSV",
    dragDropCSV: "Drag & Drop your CSV file here",
    selectedFile: "Selected File",
    chooseFile: "Choose File",
    noFileChosen: "No file chosen",
    pleaseUploadFirst: "Please upload a file first",
    analyzingFile: "Analyzing",
    analysisType: "Analysis Type",
    aspectBasedSentiment: "Aspect-Based Sentiment",
    overallSentiment: "Overall Sentiment",

    // =========================================================
    // Recommendations content
    // =========================================================

    aiRecommendationsTitle: "AI Recommendations",

    improveFoodQuality: "Improve Food Quality",
    improveFoodQualityDesc: "Customers frequently mention food taste.",

    reduceDeliveryTime: "Reduce Delivery Time",
    reduceDeliveryTimeDesc: "Delivery speed affects customer satisfaction.",

    trainCustomerService: "Train Customer Service",
    trainCustomerServiceDesc: "Improve staff communication skills.",

    reviewPricing: "Review Pricing",
    reviewPricingDesc: "Customers mention high prices.",

    // =========================================================
    // Dashboard extra
    // =========================================================

    aiInsightsTitle: "AI Insights",
    aiInsightsPlaceholder: "AI recommendations will appear here.",

    // =========================================================
    // Months
    // =========================================================

    monthJan: "Jan",
    monthFeb: "Feb",
    monthMar: "Mar",
    monthApr: "Apr",
    monthMay: "May",
    monthJun: "Jun",

    monthJanuary: "January",
    monthFebruary: "February",
    monthMarch: "March",
    monthApril: "April",
    monthMayFull: "May",
    monthJuneFull: "June",
  },

  // ===========================================================
  // ARABIC
  // ===========================================================

  ar: {
    // =========================================================
    // Navigation
    // =========================================================

    dashboard: "لوحة التحكم",

    uploadReviews: "رفع المراجعات",

    aspectAnalysis: "تحليل الجوانب",

    branches: "الفروع",

    trendAnalysis: "تحليل الاتجاهات",

    recommendations: "التوصيات",

    settings: "الإعدادات",

    workspace: "مساحة العمل",

    // =========================================================
    // Project / Brand
    // =========================================================

    projectName:
      "تحليلات ذكية لملاحظات العملاء",

    projectShort:
      "ذكاء العملاء",

    dashboardTitle:
      "تحليلات ذكية لملاحظات العملاء",

    dashboardSubtitle:
      "حلّل آراء العملاء، اكتشف الرؤى، وطوّر الأداء.",

    // =========================================================
    // Dashboard
    // =========================================================

    executiveOverview:
      "نظرة تنفيذية عامة",

    customerSatisfaction:
      "رضا العملاء",

    positiveSentiment:
      "المشاعر الإيجابية",

    averageRating:
      "متوسط التقييم",

    totalReviews:
      "إجمالي المراجعات",

    overallSatisfaction:
      "معدل رضا العملاء",

    positiveCustomerFeedback:
      "آراء العملاء الإيجابية",

    overallCustomerRating:
      "متوسط تقييم العملاء",

    customerReviewsAnalyzed:
      "مراجعات العملاء التي تم تحليلها",

    aspectAnalysisTitle:
      "تحليل الجوانب",

    sentimentDistribution:
      "توزيع المشاعر",

    recentReviews:
      "أحدث المراجعات",

    recentCustomerReviews:
      "ستظهر أحدث مراجعات العملاء هنا.",

    // =========================================================
    // Smart Feedback
    // =========================================================

    smartFeedbackIntelligence:
      "ذكاء ملاحظات العملاء",

    turnFeedbackIntoInsights:
      "حوّل ملاحظات العملاء إلى رؤى قابلة للتنفيذ.",

    analyzeFeedback:
      "تحليل الملاحظات",

    discoverInsights:
      "اكتشاف الرؤى",

    improvePerformance:
      "تحسين الأداء",

    // =========================================================
    // Admin
    // =========================================================

    admin:
      "المسؤول",

    administrator:
      "مدير النظام",

    profile:
      "الملف الشخصي",

    logout:
      "تسجيل الخروج",

    // =========================================================
    // Language
    // =========================================================

    english:
      "English",

    arabic:
      "العربية",

    switchToArabic:
      "التبديل إلى العربية",

    switchToEnglish:
      "التبديل إلى الإنجليزية",

    language:
      "اللغة",

    languageButtonEnglish:
      "English",

    languageButtonArabic:
      "العربية",

    // =========================================================
    // Sentiment
    // =========================================================

    positive:
      "إيجابي",

    neutral:
      "محايد",

    negative:
      "سلبي",

    // =========================================================
    // Review Aspects
    // =========================================================

    service:
      "الخدمة",

    delivery:
      "التوصيل",

    price:
      "السعر",

    atmosphere:
      "الأجواء",

    food:
      "الطعام",

    staff:
      "الموظفون",

    quality:
      "الجودة",

    // =========================================================
    // Branches
    // =========================================================

    branchesPerformance:
      "أداء الفروع",

    branch:
      "الفرع",

    reviews:
      "المراجعات",

    rating:
      "التقييم",

    positiveReviews:
      "إيجابي",

    nasr:
      "مدينة نصر",

    maadi:
      "المعادي",

    dokki:
      "الدقي",

    // =========================================================
    // Trends
    // =========================================================

    trend:
      "الاتجاه",

    trends:
      "الاتجاهات",

    trendAnalysisTitle:
      "تحليل الاتجاهات",

    ratingTrend:
      "اتجاه التقييمات",

    sentimentTrend:
      "اتجاه المشاعر",

    monthlyTrend:
      "الاتجاه الشهري",

    // =========================================================
    // Recommendations
    // =========================================================

    recommendationsTitle:
      "التوصيات",

    recommendationsSubtitle:
      "توصيات قابلة للتنفيذ بناءً على آراء العملاء.",

    recommendation:
      "التوصية",

    priority:
      "الأولوية",

    high:
      "مرتفع",

    medium:
      "متوسط",

    low:
      "منخفض",

    // =========================================================
    // Upload
    // =========================================================

    uploadReviewsTitle:
      "رفع المراجعات",

    uploadReviewsSubtitle:
      "ارفع ملف مراجعات العملاء لتحليل ملاحظاتهم.",

    uploadFile:
      "رفع الملف",

    chooseFile:
      "اختيار ملف",

    analyzeReviews:
      "تحليل المراجعات",

    noFileSelected:
      "لم يتم اختيار ملف",

    uploadSuccess:
      "تم رفع الملف بنجاح",

    uploadError:
      "فشل رفع الملف",

    // =========================================================
    // General
    // =========================================================

    search:
      "بحث",

    filter:
      "تصفية",

    date:
      "التاريخ",

    status:
      "الحالة",

    actions:
      "الإجراءات",

    view:
      "عرض",

    details:
      "التفاصيل",

    save:
      "حفظ",

    cancel:
      "إلغاء",

    close:
      "إغلاق",

    edit:
      "تعديل",

    delete:
      "حذف",

    loading:
      "جارٍ التحميل...",

    noData:
      "لا توجد بيانات متاحة",

    of:
      "من",

    // =========================================================
    // Extra general
    // =========================================================

    month: "الشهر",
    aspect: "الجانب",
    pending: "قيد الانتظار",
    inProgress: "قيد التنفيذ",
    completed: "مكتمل",
    role: "الدور",

    // =========================================================
    // Login
    // =========================================================

    appName: "ReviewIQ AI",
    appTagline: "منصة ذكاء مراجعات العملاء",
    emailPlaceholder: "البريد الإلكتروني",
    passwordPlaceholder: "كلمة المرور",
    loginButton: "تسجيل الدخول",

    // =========================================================
    // Profile
    // =========================================================

    userProfile: "الملف الشخصي للمستخدم",
    adminUserName: "المستخدم المسؤول",

    // =========================================================
    // Settings
    // =========================================================

    accountSettings: "إعدادات الحساب",
    manageProfilePreferences: "إدارة ملفك الشخصي وتفضيلاتك.",
    notifications: "الإشعارات",
    enableNotifications: "تفعيل الإشعارات",

    // =========================================================
    // Upload page
    // =========================================================

    uploadReviewsCSV: "رفع ملف مراجعات CSV",
    dragDropCSV: "اسحب وأفلت ملف CSV هنا",
    selectedFile: "الملف المحدد",
    chooseFile: "اختيار ملف",
    noFileChosen: "لم يتم اختيار أي ملف",
    pleaseUploadFirst: "يرجى رفع ملف أولاً",
    analyzingFile: "جارٍ تحليل",
    analysisType: "نوع التحليل",
    aspectBasedSentiment: "تحليل المشاعر حسب الجوانب",
    overallSentiment: "المشاعر العامة",

    // =========================================================
    // Recommendations content
    // =========================================================

    aiRecommendationsTitle: "توصيات الذكاء الاصطناعي",

    improveFoodQuality: "تحسين جودة الطعام",
    improveFoodQualityDesc: "يذكر العملاء طعم الطعام بشكل متكرر.",

    reduceDeliveryTime: "تقليل وقت التوصيل",
    reduceDeliveryTimeDesc: "تؤثر سرعة التوصيل على رضا العملاء.",

    trainCustomerService: "تدريب خدمة العملاء",
    trainCustomerServiceDesc: "تحسين مهارات التواصل لدى الموظفين.",

    reviewPricing: "مراجعة التسعير",
    reviewPricingDesc: "يذكر العملاء ارتفاع الأسعار.",

    // =========================================================
    // Dashboard extra
    // =========================================================

    aiInsightsTitle: "رؤى الذكاء الاصطناعي",
    aiInsightsPlaceholder: "ستظهر توصيات الذكاء الاصطناعي هنا.",

    // =========================================================
    // Months
    // =========================================================

    monthJan: "يناير",
    monthFeb: "فبراير",
    monthMar: "مارس",
    monthApr: "أبريل",
    monthMay: "مايو",
    monthJun: "يونيو",

    monthJanuary: "يناير",
    monthFebruary: "فبراير",
    monthMarch: "مارس",
    monthApril: "أبريل",
    monthMayFull: "مايو",
    monthJuneFull: "يونيو",
  },
} as const;
