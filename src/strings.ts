import { writable } from 'svelte/store';

interface Strings {
    "Serving lines": string
    "No Service Alerts": string
    "English": string
    "Brought to you by Livable Portland": string
    "Resources": string
    "Full System Map": string
    "Download the UMO App": string
    "Adopt this stop": string
    "No service scheduled": string
}

export const strings: { [k: string]: Strings } = {
    // English
    "en": {
        "Serving lines": "Serving lines",
        "No Service Alerts": "No Service Alerts 😎",
        "English": "English",
        "Brought to you by Livable Portland": "Brought to you by Livable Portland",
        "Resources": "Resources",
        "Full System Map": "Full System Map",
        "Download the UMO App": "Pay fares and check schedules with your phone by downloading the UMO App",
        "Adopt this stop": "Adopt this stop",
        "No service scheduled": "No service scheduled",
    },
    // Spanish
    "es": {
        "Serving lines": "Líneas de servicio",
        "No Service Alerts": "Sin alertas de servicio 😎",
        "English": "Español",
        "Brought to you by Livable Portland": "Presentado por Livable Portland",
        "Resources": "Recursos",
        "Full System Map": "Mapa completo del sistema",
        "Download the UMO App": "Paga tarifas y consulta horarios con tu móvil descargando la App UMO",
        "Adopt this stop": "Adopta esta parada",
        "No service scheduled": "Sin servicio programado",

    },
    // Arabic
    "ar": {
        "Serving lines": "خطوط التقديم",
        "No Service Alerts": "😎 لا تنبيهات الخدمة",
        "English": "عربي",
        "Brought to you by Livable Portland": "مقدم لكم من Livable Portland",
        "Resources": "موارد",
        "Full System Map": "خريطة النظام الكاملة",
        "Download the UMO App": "ادفع الأسعار وتحقق من الجداول باستخدام هاتفك عن طريق تنزيل تطبيق UMO",
        "Adopt this stop": "تبني هذه المحطة",
        "No service scheduled": "لا توجد خدمة مجدولة",
    },
    // Somali
    "so": {
        "Serving lines": "Khadadka u adeega",
        "No Service Alerts": "Ogeysiis Adeeg ma jiro 😎",
        "English": "Soomaali",
        "Brought to you by Livable Portland": "Waxaa kuu keenay Livable Portland",
        "Resources": "Khayraadka",
        "Full System Map": "Khariidadda Nidaamka oo Buuxa",
        "Download the UMO App": "Bixi qiimaha oo ku hubi jadwalka taleefankaaga adiga oo soo dejinaya UMO App-ka",
        "Adopt this stop": "Qaado joogsigan",
        "No service scheduled": "Ma jiro adeeg la qorsheeyay",
    },
    // Portuguese
    "pt": {
        "Serving lines": "Linhas de veiculação",
        "No Service Alerts": "Nenhum alerta de serviço 😎",
        "English": "Português",
        "Brought to you by Livable Portland": "Trazido a você por Livable Portland",
        "Resources": "Recursos",
        "Full System Map": "Mapa completo do sistema",
        "Download the UMO App": "Pague tarifas e consulte horários com seu celular baixando o App UMO",
        "Adopt this stop": "Adote esta parada",
        "No service scheduled": "Nenhum serviço agendado",
    },
    // French
    "fr": {
        "Serving lines": "Lignes de service",
        "No Service Alerts": "Aucune alerte de service 😎",
        "English": "Français",
        "Brought to you by Livable Portland": "Présenté par Livable Portland",
        "Resources": "Ressources",
        "Full System Map": "Carte complète du système",
        "Download the UMO App": "Payez les tarifs et consultez les horaires avec votre téléphone en téléchargeant l'application UMO",
        "Adopt this stop": "Adoptez cet arrêt",
        "No service scheduled": "Aucun service prévu",
    },
    // Farsi
    "fa": {
        "Serving lines": "خطوط سرویس دهی",
        "No Service Alerts": "😎 هیچ هشدار خدماتی وجود ندارد",
        "English": "فارسی",
        "Brought to you by Livable Portland": "توسط Livable Portland برای شما آورده شده است",
        "Resources": "منابع",
        "Full System Map": "نقشه کامل سیستم",
        "Download the UMO App": "با دانلود برنامه UMO کرایه ها را پرداخت کنید و برنامه ها را با تلفن خود بررسی کنید",
        "Adopt this stop": "این توقف را اتخاذ کنید",
        "No service scheduled": "هیچ سرویسی برنامه ریزی نشده است",
    },
    // Pashto
    "ps": {
        "Serving lines": "د خدمت کولو لینونه",
        "No Service Alerts": "😎 هیڅ خدمت خبرتیا نشته",
        "English": "پښتو",
        "Brought to you by Livable Portland": "د UMO اپلیکیشن ډاونلوډ کولو سره د خپل تلیفون سره کرایه ورکړئ او مهالویش چیک کړئ",
        "Resources": "سرچینې",
        "Full System Map": "د بشپړ سیسټم نقشه",
        "Download the UMO App": "د UMO اپلیکیشن ډاونلوډ کړئ",
        "Adopt this stop": "دا تمځای غوره کړئ",
        "No service scheduled": "هیڅ خدمت ټاکل شوی نه دی",
    },
    // Kinyarwanda
    "rw": {
        "Serving lines": "Gukorera imirongo",
        "No Service Alerts": "Nta Bimenyesha Serivisi",
        "English": "Kinyarwanda",
        "Brought to you by Livable Portland": "Kwishura ibiciro no kugenzura gahunda hamwe na terefone yawe ukuramo UMO App",
        "Resources": "Ibikoresho",
        "Full System Map": "Ikarita yuzuye ya sisitemu",
        "Download the UMO App": "Kuramo UMO",
        "Adopt this stop": "Emera guhagarara",
        "No service scheduled": "Nta serivisi iteganijwe",
    },
    // Swahili
    "sw": {
        "Serving lines": "Kutumikia mistari",
        "No Service Alerts": "Hakuna Arifa za Huduma 😎",
        "English": "Kinyarwanda",
        "Brought to you by Livable Portland": "Imeletwa kwako na Livable Portland",
        "Resources": "Rasilimali",
        "Full System Map": "Ramani Kamili ya Mfumo",
        "Download the UMO App": "Lipa nauli na uangalie ratiba ukitumia simu yako kwa kupakua Programu ya UMO",
        "Adopt this stop": "Pitisha kituo hiki",
        "No service scheduled": "Hakuna huduma iliyoratibiwa",
    },
}

function defaultLanguageStrings() {
    let prefix = (typeof window !== "undefined" && window.localStorage.getItem("language"))
        ? window.localStorage.getItem("language")
        : typeof navigator === "undefined" ? "en" : navigator.language.substring(0, 2)

    return [prefix, strings[prefix] ? strings[prefix] : strings["en"]]
}

export const stringStore = writable(defaultLanguageStrings());

export function setLanguage(language: string) {
    stringStore.set([language, strings[language]])
    window.localStorage.setItem("language", language)
}