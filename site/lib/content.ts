// Контент главной. Всё фактическое — с dv.by и 2ГИС (октябрь 2026). Ссылки ведут на существующие страницы dv.by.

const DV = 'https://dv.by';

export const PHONES = [
  { label: 'Короткий номер', note: 'A1 и МТС', value: '7031', tel: '7031' },
  { label: 'A1', note: '', value: '+375 29 1-602-602', tel: '+375291602602' },
  { label: 'МТС', note: '', value: '+375 29 8-602-602', tel: '+375298602602' },
  { label: 'life:)', note: '', value: '+375 25 6-602-602', tel: '+375256602602' },
  { label: 'Городской', note: '', value: '+375 17 388-28-28', tel: '+375173882828' },
];
export const VIBER = { value: '+375 44 715-34-93', note: 'Viber, 8:00–22:00', href: 'viber://chat?number=%2B375447153493' };

export const NAV = [
  { t: 'Услуги', href: '#services' },
  { t: 'Цены', href: `${DV}/prejskurant/` },
  { t: 'Врачи', href: `${DV}/doctors/` },
  { t: 'Клиники', href: '#clinics' },
  { t: 'Статьи', href: '#articles' },
];

// Группы — по списку видов в форме записи dv.by (44 вида, от хомяков до верблюдов)
export const SPECIES = [
  { id: 'cats', title: 'Кошки', img: '/img/stock/cat.webp', kinds: 'Терапия, урология и нефрология, эндокринология, дерматология', href: `${DV}/services/terapiya/`, big: true },
  { id: 'dogs', title: 'Собаки', img: '/img/stock/dog.webp', kinds: 'Прививки, хирургия и ортопедия, неврология, кардиология', href: `${DV}/services/hirurgiya/`, big: true },
  { id: 'rodents', title: 'Грызуны и кролики', img: '/img/stock/rabbit.webp', kinds: 'Кролики, морские свинки, шиншиллы, хомяки, крысы, дегу, песчанки', href: `${DV}/services/terapiya/` },
  { id: 'birds', title: 'Птицы', img: '/img/stock/budgie.webp', kinds: 'Попугаи, канарейки, голуби — у клиники есть врач-орнитолог', href: `${DV}/services/terapiya/` },
  { id: 'reptiles', title: 'Рептилии', img: '/img/stock/tortoise.webp', kinds: 'Черепахи, змеи, игуаны, агамы, хамелеоны, гекконы, вараны', href: `${DV}/services/terapiya/` },
  { id: 'exotic', title: 'Хорьки и экзоты', img: '/img/stock/ferret.webp', kinds: 'Хорьки, ежи, еноты, мангусты, лемуры', href: `${DV}/services/terapiya/` },
  { id: 'large', title: 'Крупные животные', img: '/img/stock/horse.webp', kinds: 'Лошади, козы, коровы и даже верблюды — уточните по телефону', href: 'tel:7031' },
];

export const SERVICES = [
  { t: 'Терапия', d: 'первичный приём, осмотр', href: `${DV}/services/terapiya/` },
  { t: 'Вакцинация', d: 'прививки, паспорт', href: `${DV}/services/vaktsinatsiya/` },
  { t: 'Хирургия', d: 'плановая и экстренная', href: `${DV}/services/hirurgiya/` },
  { t: 'МРТ', d: 'Philips Intera 1,5 Т', href: `${DV}/services/mrt/` },
  { t: 'УЗИ', d: 'брюшная полость, сердце', href: `${DV}/services/uzi/` },
  { t: 'Рентген', d: '9:00–20:30', href: `${DV}/services/rentgen/` },
  { t: 'Анализы', d: 'своя лаборатория', href: `${DV}/services/laboratoriya/` },
  { t: 'Эндоскопия', d: 'гастроскопия', href: `${DV}/services/gastroskopiya/` },
  { t: 'Кардиология', d: 'ЭхоКГ, ЭКГ', href: `${DV}/services/kardiologiya/` },
  { t: 'Неврология', d: 'судороги, параличи', href: `${DV}/services/nevrologiya/` },
  { t: 'Онкология', d: 'диагностика и лечение', href: `${DV}/services/onkologiya/` },
  { t: 'Дерматология', d: 'кожа, шерсть, уши', href: `${DV}/services/dermatologiya/` },
  { t: 'Офтальмология', d: 'глаза', href: `${DV}/services/oftalmologiya/` },
  { t: 'Стоматология', d: 'чистка, лечение', href: `${DV}/services/stomatologiya/` },
  { t: 'Урология', d: 'почки, мочевой пузырь', href: `${DV}/services/urologiya/` },
  { t: 'Репродуктология', d: 'роды, акушерство', href: `${DV}/services/akusherstvo-i-reproduktologiya/` },
  { t: 'Реабилитация', d: 'после травм и операций', href: `${DV}/services/reabilitatsiya/` },
  { t: 'Диспансеризация', d: 'плановый чек-ап', href: `${DV}/services/dispanserizatsiya/` },
  { t: 'Чипирование', d: 'для выезда за границу', href: `${DV}/services/chipirovanie/` },
];

export const URGENT_SIGNS = [
  'Тяжело дышит, синеет язык или дёсны',
  'Кровотечение не останавливается',
  'Судороги, потеря сознания, не может встать',
  'Съел яд, лекарства, инородный предмет',
  'Упал с высоты, сбила машина, травма',
  'Тужится, но не может помочиться — особенно коты',
  'Вздутый твёрдый живот, пустые позывы к рвоте',
  'Тепловой удар, сильная слабость',
];

export const CLINIC_INFO = [
  {
    id: 'p' as const, addr: 'Подшипниковый пр., 9', city: 'Минск', img: '/img/0O9A6174.webp',
    extra: 'Реанимация и интенсивная терапия, лаборатория 9:00–20:30, рентген и УЗИ 9:00–20:30.',
    route: 'https://yandex.by/maps/?text=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D0%9F%D0%BE%D0%B4%D1%88%D0%B8%D0%BF%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%2C%209',
    page: `${DV}/clinic-1/contact/`,
  },
  {
    id: 's' as const, addr: 'ул. Скрипникова, 39', city: 'Минск', img: '/img/0O9A6286.webp',
    extra: 'МРТ, реанимация, инфекционный стационар, лаборатория круглосуточно (ночью — основные анализы).',
    route: 'https://yandex.by/maps/?text=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%2C%2039',
    page: `${DV}/clinic-2/contact/`,
  },
];

export const HOURS = [
  ['9:00–21:00', 'приём по записи'],
  ['9:00–19:00', 'без записи — врачи дневной смены'],
  ['21:00–9:00', 'дежурный врач, ночной тариф'],
];

// Отзывы — с Яндекс Карт, Google Карт и 2ГИС (октябрь 2026). Тексты дословно, сокращены многоточием.
const YA_P = 'https://yandex.by/maps/org/doktor_vet/1345875003/reviews/';
const YA_S = 'https://yandex.by/maps/org/doktor_vet/1279023693/reviews/';
const G_P = 'https://www.google.com/maps/search/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80+%D0%92%D0%B5%D1%82+%D0%9F%D0%BE%D0%B4%D1%88%D0%B8%D0%BF%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9+9+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA';
const G_S = 'https://www.google.com/maps/search/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80+%D0%92%D0%B5%D1%82+%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0+39+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA';
const GIS_S = 'https://2gis.by/minsk/firm/70000001041989461/tab/reviews';

export const RATINGS = [
  { source: 'Яндекс Карты', items: [{ clinic: 'Подшипниковый', rating: '5,0', count: '1707 оценок', href: YA_P }, { clinic: 'Скрипникова', rating: '4,9', count: '1776 оценок', href: YA_S }] },
  { source: 'Google Карты', items: [{ clinic: 'Подшипниковый', rating: '4,0', count: '644 отзыва', href: G_P }, { clinic: 'Скрипникова', rating: '4,2', count: '2189 отзывов', href: G_S }] },
  { source: '2ГИС', items: [{ clinic: 'Скрипникова', rating: '5,0', count: '5 оценок', href: GIS_S }] },
];
export const RATINGS_TOTAL = 'Больше 6 300 оценок';

export const REVIEWS = [
  { author: 'Екатерина Б.', date: 'сентябрь 2026', source: 'Яндекс', clinic: 'Подшипниковый пр., 9', href: YA_P,
    text: 'Огромная благодарность хирургу Кардаш Максиму Александровичу и анестезиологу Панкевич Наталье!!! От кота Яши и всей нашей семьи!!! За их профессинализм и просто за внимательное и душевное отношение…' },
  { author: 'Татьяна Д.', date: 'март 2026', source: 'Google', clinic: 'Подшипниковый пр., 9', href: G_P,
    text: 'От всего сердца хочу поблагодарить Софийскую Татьяну. Вот уже более 4 лет она является настоящим ангелом-хранителем для нашей кошки Шигаруши…' },
  { author: 'Татьяна О.', date: 'сентябрь 2026', source: 'Яндекс', clinic: 'ул. Скрипникова, 39', href: YA_S,
    text: 'Хочу выразить благодарность всему персоналу клиники «Доктор Вет», особенно хирургу-онкологу — Пилейко Виктору Викторовичу и его помощникам за спасение моей кошечки Лексы!…' },
  { author: 'Маша Ф.', date: 'июль 2026', source: 'Google', clinic: 'ул. Скрипникова, 39', href: G_S,
    text: 'Огромное спасибо всей команде Доктор Вет и лично хирургу Клепчукову Владиславу Сергеевичу! Хочу поделиться нашей историей, которая стала для нас настоящим чудом…' },
  { author: 'Сергей Л.', date: 'сентябрь 2026', source: 'Яндекс', clinic: 'ул. Скрипникова, 39', href: YA_S,
    text: 'Больше 10 лет наша шотландская вислоухая кошка состоит на учёте в этой клинике. Сама ветклиника нас полностью устраивает, приветливый персонал…' },
  { author: 'Николай П.', date: 'октябрь 2025', source: '2ГИС', clinic: 'ул. Скрипникова, 39', href: GIS_S,
    text: 'Отличная клиника, профессионалы своего дела, администратор отлично понимает проблему и подсказывает как правильно поступить' },
];

export const ARTICLES = [
  { t: 'Инородные тела в ЖКТ. Когда рентгеновское излучение приходит на помощь', tag: 'Диагностика', img: '/img/xray-case.webp', href: `${DV}/public/inorodnye-tela-v-zhkt-kogda-rentgenovskoe-izluchenie-prihodit-na-pomoshh/` },
  { t: 'Эпилепсия', tag: 'Неврология', href: `${DV}/public/epilepsiya/` },
  { t: 'Мукоцеле желчного пузыря у собак', tag: 'Хирургия', href: `${DV}/public/mukotsele-zhelchnogo-puzyrya-u-sobak/` },
  { t: 'Гипертиреоз', tag: 'Эндокринология', href: `${DV}/public/gipertireoz/` },
  { t: 'Крипторхизм', tag: 'Урология', href: `${DV}/public/kriptorhizm/` },
];

export const LINKS = {
  doctors: `${DV}/doctors/`,
  prices: `${DV}/prejskurant/`,
  publications: `${DV}/publications/`,
  news: `${DV}/news/`,
  about: `${DV}/about/`,
  faq: `${DV}/faq/`,
  erip: `${DV}/oplata-uslug-cherez-erip/`,
  vacancies: `${DV}/vakansii/`,
  privacy: `${DV}/politika-obrabotki-personalnyh-dannyh/`,
  instagram: 'https://www.instagram.com/dv_by/',
  tiktok: 'https://www.tiktok.com/@doktorvetminsk',
};
