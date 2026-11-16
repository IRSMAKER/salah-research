export interface TableRow {
  cells: string[];
}

export const poles = [
  {
    id: "site",
    name: "SITE",
    gloss: "assigned space",
    description:
      "The space assigned to standing with the Name. The root names the place where standing happens: muṣallā, miḥrāb, and the plural ṣalawāt for houses of standing.",
    refs: ["22:40", "2:125", "3:39"],
    marker: "Space",
  },
  {
    id: "state",
    name: "STATE",
    gloss: "willing standing",
    description:
      "The standing kept up willingly: the noun ṣalāh and its plural ṣalawāt. Established, timed, voiced, washed, guarded, and lived. Qualified by mercy, tranquility, peace, humility, and prevention.",
    refs: ["2:3", "2:238", "17:78", "29:45"],
    marker: "Willing",
  },
  {
    id: "delivery",
    name: "DELIVERY",
    gloss: "imposed standing",
    description:
      "The standing imposed within fire: the fire-verbs and their nouns. Assigned, sustained, settled. Qualified by destination, settling-place, bedding, and holding.",
    refs: ["4:30", "4:56", "14:29", "87:12"],
    marker: "Imposed",
  },
];

export const nounLexicon: TableRow[] = [
  { cells: ["ṢALĀH", "noun", "the standing-state, willingly kept", "the believing clusters"] },
  { cells: ["ṢALAWĀT", "plural", "renewed cycles of the standing-state", "2:157 · 23:9 · 33:43"] },
  { cells: ["MUSSALLĀ", "noun of place", "the assigned spot of standing", "2:125"] },
  { cells: ["MIḤRĀB", "noun of place", "the sanctuary of standing", "3:39"] },
  { cells: ["ṢALAWĀT", "plural (sites)", "houses of standing, where the Name is mentioned", "22:40"] },
  { cells: ["TAṢLĪYA", "verbal noun", "a sustained roasting — the fire-standing named by the root", "56:94"] },
  { cells: ["ṢALWAH", "bare noun", "his standing-delivery in the fire", "69:31"] },
];

export const verbVoices: TableRow[] = [
  { cells: ["يَصْلَوْنَهَا", "future active", "they will be made to stand within her", "14:29 · 38:56 · 58:8 · 82:15"] },
  { cells: ["نُصْلِيهِ", "divine “We”", "We will make him stand within a Fire", "4:30 · 4:115"] },
  { cells: ["صِلِيًّا", "earned title", "worthy of standing within her", "19:70"] },
  { cells: ["اصْلَوْهَا", "imperative", "stand within her", "36:64 · 52:16"] },
  { cells: ["صَلُوهُ", "imperative", "make him stand within it", "69:31"] },
  { cells: ["يُصْلَىٰ", "passive", "he will be made to stand", "84:12 · 87:12 · 88:4 · 111:3"] },
  { cells: ["فَصَلَّىٰ", "bridge verb", "then he stands — toward the Mentioned Name", "87:15"] },
  { cells: ["يُصَلِّي عَلَيْكُم", "divine ʿalā", "He stands toward you", "33:43 · 33:56"] },
  { cells: ["صَلُّوا عَلَيْهِ", "human imperative", "stand toward him", "33:56"] },
  { cells: ["أَقِيمُوا الصَّلَاةَ", "human command", "establish the Standing", "the C and D clusters"] },
];

export const honorEconomy: TableRow[] = [
  { cells: ["مَذْمُوم · blameworthy", "honored by God"] },
  { cells: ["مَدْحُور · driven off", "brought out of darkness into light"] },
  { cells: ["laʿnah · curse", "ṣalāh · God's standing-toward"] },
  { cells: ["do not stand toward them (9:84)", "standings granted (2:157)"] },
  { cells: ["holding · qarār, mihād, maṣīr", "tranquility · sakan (9:103)"] },
];

export const breachPattern: TableRow[] = [
  { cells: ["4:10", "consumed orphans' property unjustly", "fire swallowed, then a standing within a Blaze"] },
  { cells: ["4:115", "opposed the Messenger, left the believers' course", "left to his steering, made to stand in Jahannam"] },
  { cells: ["17:18", "wanted the immediate", "Jahannam made for him; he is made to stand within her"] },
  { cells: ["19:59", "lost the Standing, followed desires", "the surah moves to standing within fire"] },
  { cells: ["58:8", "whispered sin and asked why God does not punish", "Jahannam suffices them; they stand within her"] },
  { cells: ["92:15", "denied and turned away", "only the most wretched is made to stand within her"] },
];

export const settlementVocabulary: TableRow[] = [
  { cells: ["maṣīr", "destination, returning-settlement", "4:115 · 58:8"] },
  { cells: ["qarār", "settled abode", "14:29"] },
  { cells: ["mihād", "bedding", "38:56"] },
  { cells: ["ma'āb", "return-hostel", "38:55"] },
  { cells: ["nazl", "served portion, lodging", "56:94"] },
  { cells: ["sakan", "tranquility — the God-side counterpart", "9:103"] },
];

export const siteTable: TableRow[] = [
  { cells: ["ṢALAWĀT", "plural", "houses of standing (other communities)", "22:40"] },
  { cells: ["MUSSALLĀ", "singular", "the assigned spot (Abraham's standing-place)", "2:125"] },
  { cells: ["MIḤRĀB", "singular", "the sanctuary where Zakariyya stands", "3:39"] },
  { cells: ["Buyūt", "plural", "houses where God's Name is mentioned", "24:36 · 22:40"] },
];

export const timeTable: TableRow[] = [
  { cells: ["17:78", "from the sun's decline to the darkness of night; the witnessed dawn recitation"] },
  { cells: ["11:114", "the two ends of the day and the approach of the night"] },
  { cells: ["24:58", "before the dawn Standing; after the night Standing"] },
  { cells: ["62:9-10", "the Friday call; trade suspended; dispersion when concluded"] },
  { cells: ["5:106", "witnesses detained after the Standing"] },
  { cells: ["4:103", "a prescribed writ, timed"] },
];

export const postureTable: TableRow[] = [
  { cells: ["standing · qiyām", "3:39 · 17:78", "the physical form of the Standing"] },
  { cells: ["bowing · rukūʿ", "2:43 · 5:55", "the Standing includes bowing"] },
  { cells: ["prostration · sujūd", "4:102 · 96:19", "the response of the standing servant"] },
  { cells: ["sitting and on the side", "4:103", "remembrance after the Standing"] },
  { cells: ["on foot or riding", "2:239 · 4:102", "the Standing adapts to circumstance"] },
];

export const bridges = [
  {
    surah: "Surah 19",
    title: "Loss and imposition",
    steps: [
      { ref: "19:59", text: "A successor generation lost the Standing and followed desires." },
      { ref: "19:68", text: "The scene turns to kneeling at Jahannam." },
      { ref: "19:70", text: "Then the most worthy of standing within her are named." },
    ],
    note: "Where devotional standing is displaced, fire-standing is imposed. The noun and the verb of one root describe one assignment.",
  },
  {
    surah: "Surah 74",
    title: "Command and confession",
    steps: [
      { ref: "74:1-7", text: "Arise, warn, magnify, purify, abandon favor-counting, be patient." },
      { ref: "74:26", text: "I will make him stand within Saqar." },
      { ref: "74:43", text: "They confess: we were not among those who stood." },
    ],
    note: "The surah opens with the command to stand and closes with the confession of not standing, bracketed by the fire-standing.",
  },
  {
    surah: "Surah 87",
    title: "The hinge",
    steps: [
      { ref: "87:12", text: "He will be made to stand within the Greatest Fire." },
      { ref: "87:14-15", text: "Successful is the one who purifies, mentions the Name of his Lord, then stands." },
      { ref: "87:15", text: "The same stem, object-free, turned toward the Mentioned Name." },
    ],
    note: "The fire-side and the God-side are the two poles of one standing-state, nine verses apart.",
  },
];

export const verificationRows: TableRow[] = [
  { cells: ["A · Fire", "22", "20 direct", "2 nuance", "0"] },
  { cells: ["B · Divine", "7", "7 direct", "0", "0"] },
  { cells: ["C · Commanded", "21", "20 direct", "1 nuance", "0"] },
  { cells: ["D · Life", "45", "45 direct", "0", "0"] },
  { cells: ["E · Transformation", "13", "13 direct", "0", "0"] },
  { cells: ["Total", "108", "105 direct", "3 nuance", "0 contradictions"] },
];
