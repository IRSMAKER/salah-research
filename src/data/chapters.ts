export interface Chapter {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: string[];
  discoveries: { title: string; body: string }[];
  refs: string[];
  quote?: { text: string; source: string };
}

export const chapters: Chapter[] = [
  {
    id: "the-question",
    number: "01",
    eyebrow: "The question",
    title: "What if the word is larger than “prayer”?",
    lede:
      "The study began with a suspicion: the Quranic word ṣalāh is usually translated “prayer,” but the same root is used for fire, for divine action, and for buildings. A word that moves through those worlds cannot mean only a ritual.",
    paragraphs: [
      "The root is Ṣ-L-W (ص-ل-و). Its family appears in 108 distinct verses and 118 occurrences, across 42 word forms. Some are the familiar noun ṣalāh. Others are verbs about being made to stand in fire. Others describe God and the angels standing toward a person. Others name places.",
      "If the root had one narrow meaning, these uses would be unrelated accidents of language. The study tested the opposite: that the root names one thing, and the Quran turns that one thing in different directions.",
      "So the question became precise: what single meaning can hold the fire-verses, the divine verses, the commanded verses, and the site-words together — without forcing any of them?",
    ],
    discoveries: [
      {
        title: "The word is a family, not a single form",
        body: "42 forms across 108 verses: noun, plural, verb, passive, imperative, participle, and noun of place.",
      },
      {
        title: "The fire-uses are not marginal",
        body: "22 verses use the root for an imposed standing within fire. Any meaning that cannot hold them is incomplete.",
      },
      {
        title: "The hypothesis",
        body: "Ṣ-L-W names a standing-state within the full working reach of a power that determines one.",
      },
    ],
    refs: ["4:10", "33:43", "2:125", "87:15"],
    quote: {
      text: "A word that can name fire, God's action, a human command, and a building is not a ritual label. It is a structure.",
      source: "Working note, first pass",
    },
  },
  {
    id: "the-method",
    number: "02",
    eyebrow: "The method",
    title: "Read every verse, in its own context",
    lede:
      "The study refused to start from a dictionary definition and then select supporting verses. It read all 108 verses first, in canonical order inside five thematic clusters, and only then asked what they shared.",
    paragraphs: [
      "Each verse was read with its surrounding passage, its grammar, its word-form, and its parallel formulas elsewhere in the Quran. The question was never “what does this verse prove?” but “what is this verse doing with the root?”",
      "Root hygiene came first. Arabic has look-alike roots — وصل (join/reach), صلح (rectify), فصل (separate), صلب (crucify). Every candidate was read and excluded if it belonged to another root. What remained was the true Ṣ-L-W family.",
      "The verses were then grouped by function, not by doctrine: (A) fire-anchors, (B) divine action, (C) commanded formula, (D) life-institutions, (E) transformative check. Canonical order inside each cluster kept the reading honest.",
    ],
    discoveries: [
      {
        title: "108 verses, 118 occurrences, 42 forms",
        body: "The full root family, collected from a 6,236-verse corpus and checked against look-alike roots.",
      },
      {
        title: "Context before concept",
        body: "Every verse was studied with its passage before any synthesis was attempted.",
      },
      {
        title: "Five clusters, one test",
        body: "Fire, divine, commanded, institutional, and transformative uses were kept separate until the end.",
      },
    ],
    refs: ["2:238", "4:102", "22:40", "29:45"],
    quote: {
      text: "Do not ask what the word should mean. Ask what the Quran does with it, verse by verse, until the pattern becomes unavoidable.",
      source: "Method note",
    },
  },
  {
    id: "fire-first",
    number: "03",
    eyebrow: "Cluster A · 22 verses",
    title: "Fire shows the root's skeleton",
    lede:
      "The fire-verses are where the root is least religious and most physical. They show what Ṣ-L-W does when no ritual is in view: it places a person inside a power and keeps them there.",
    paragraphs: [
      "The grammar is unusually consistent. The verb takes the fire as its object, or the person and the fire as a double object: “We will make him stand within a Fire.” The passive forms make the person the object: “he will be made to stand.” The imperative tells the delivered one to stand: “Stand within her today.”",
      "The surrounding vocabulary is settlement-vocabulary: maṣīr (destination), qarār (settled abode), mihād (bedding), ma'āb (return-hostel), nazl (served lodging). The fire is not described as a passing event. It is described as an address.",
      "And every fire-verse follows a breach: property taken unjustly, the Messenger opposed, desire followed, the truth denied and the back turned. The imposed standing is the end-state of self-steering. That pattern will matter when the same root appears as voluntary standing.",
    ],
    discoveries: [
      {
        title: "A standing, not a spark",
        body: "The fire is a medium and a lodging. The person is placed within it and sustained there.",
      },
      {
        title: "Four voices, one state",
        body: "Future, divine “We,” imperative, and passive all describe the same imposed standing.",
      },
      {
        title: "Self-steering becomes self-settlement",
        body: "The breach always precedes the delivery: the person chooses the direction, and the standing settles it.",
      },
      {
        title: "The nouns agree",
        body: "Taṣliya (56:94) and ṣalwah (69:31) name the fire-standing with the root's own noun-forms.",
      },
    ],
    refs: ["4:30", "4:56", "14:29", "17:18", "19:70", "56:94", "69:31", "87:12"],
    quote: {
      text: "The fire is sold to the reader as a home: a destination, a settling-place, a bedding, a served portion.",
      source: "Cluster A finding",
    },
  },
  {
    id: "god-side",
    number: "04",
    eyebrow: "Cluster B · 7 verses",
    title: "The same stem, turned toward God",
    lede:
      "If the root means an imposed standing within fire, what does it mean when God is the one who “stands”? The divine verses answer with the opposite quality, not a different structure.",
    paragraphs: [
      "God “stands toward” the believer, with the angels, to bring him out of darkness into light (33:43). The movement is the reverse of fire: not into darkness, but out of it. The outcome is a greeting of peace (33:44).",
      "The divine standings are granted, not imposed. They are paired with mercy (2:157), with tranquility (9:103), and with the Messenger as a channel (9:99). They can also be withheld: the Prophet is told not to stand toward the hypocrites who die (9:84). The standing is honor, and honor can be refused.",
      "The strongest proof that the root names a state rather than an act is 24:41: the birds know their standing by creation. No ritual instruction is in view. The creature is in a standing-state before God simply by being what it is.",
    ],
    discoveries: [
      {
        title: "Granted, not imposed",
        body: "Divine standings are given with mercy and tranquility, the soft counterpart of fire's holding.",
      },
      {
        title: "The exodus-clause",
        body: "God's standing brings out of darkness into light — the exact inverse of the fire-delivery.",
      },
      {
        title: "Honor can be withheld",
        body: "9:84 forbids standing toward the defiant dead. The same root names a withheld honor.",
      },
      {
        title: "Creation knows its standing",
        body: "The birds' standing (24:41) is innate, not liturgical — evidence of a state.",
      },
    ],
    refs: ["24:41", "2:157", "33:43", "33:56", "9:103", "9:99", "9:84"],
    quote: {
      text: "The fire-stand is imposed and holds. The God-stand is granted and settles. The structure is one; the quality is opposite.",
      source: "Cluster B finding",
    },
  },
  {
    id: "commanded",
    number: "05",
    eyebrow: "Cluster C · 21 verses",
    title: "“Establish the Standing”",
    lede:
      "The command is never “perform a prayer.” It is aqīmū al-ṣalāh — make the standing stand. The verb yuqīmū belongs to the vocabulary of setting something upright and keeping it so.",
    paragraphs: [
      "The commanded Standing has a physical form: Zakariyya is standing (qāʾim) in the sanctuary while he stands toward God (3:39). It has a temporal form: from the decline of the sun to the darkness of night, with the witnessed dawn recitation (17:78). It has a vocal form: neither loud nor low (17:110). It has a purity-form: wash before you rise (5:6).",
      "It is also a covenant-item. The Children of Israel are commanded it in the same breath as social justice (2:83), and it is the first condition of the five-condition covenant (5:12). Abraham settles his offspring near the House for one stated purpose: that they establish the Standing (14:37). He prays to be made an establisher, and for his offspring after him (14:40).",
      "The command is inherited, familial, and prophetic. Jesus is enjoined it for his whole life (19:31). Ishmael commands his household it (19:55). Luqman makes it the first command to his son (31:17). The Standing is not a private devotion added to life; it is the upright shape of life.",
    ],
    discoveries: [
      {
        title: "Establish, do not merely perform",
        body: "The command verb means to make something stand and keep it standing.",
      },
      {
        title: "Seven forms",
        body: "Physical, temporal, vocal, purifying, preservative, personal, and eased — the Standing has a full grammar.",
      },
      {
        title: "Covenant and inheritance",
        body: "It is commanded to communities, prophets, and households, and passed from Abraham to his offspring.",
      },
      {
        title: "Purpose: remembrance",
        body: "20:14 states the purpose directly: establish the Standing for My remembrance.",
      },
    ],
    refs: ["98:5", "2:43", "5:12", "14:37", "14:40", "19:31", "20:14", "17:78", "3:39"],
    quote: {
      text: "The command is not “say a prayer.” It is “make the standing stand” — in the body, in time, in the voice, in the household, in the community.",
      source: "Cluster C finding",
    },
  },
  {
    id: "life",
    number: "06",
    eyebrow: "Cluster D · 44 verses",
    title: "The Standing as clock, law, and community",
    lede:
      "The largest cluster is not about worship in a narrow sense. It is about how the Standing organizes ordinary life: war, travel, Friday trade, legal testimony, household privacy, and the bond of the community.",
    paragraphs: [
      "In danger, the Standing is shortened but not abandoned (4:101). In battle, it is kept in shifts, with weapons and precaution (4:102). It is a prescribed writ with fixed times (4:103). In illness or travel, water gives way to clean earth (4:43, 5:6). The Standing adapts without dissolving.",
      "It is the clock of the household: privacy is framed by the dawn Standing and the night Standing (24:58). It is the clock of the economy: the Friday call suspends trade, and when the Standing concludes, life resumes in the land (62:9-10). It anchors legal truth: witnesses are detained after the Standing and swear by God (5:106).",
      "And it is the bond of the community. Believing men and women establish it together (9:71). It is the first act of the empowered (22:41), the mark of those who maintain God's mosques (9:18), and the practice that trade must not distract from (24:37). The Standing is not one room in the house. It is the frame of the house.",
    ],
    discoveries: [
      {
        title: "Adaptive, not fragile",
        body: "Shortened in fear, shifted in battle, eased in illness, performed on foot or riding — the Standing bends to circumstance.",
      },
      {
        title: "The clock of life",
        body: "Household privacy, Friday trade, and legal testimony are all timed by the Standing.",
      },
      {
        title: "The community bond",
        body: "Men and women establish it together; it is the first act of the empowered and the mark of the true believer.",
      },
      {
        title: "The two-act believer",
        body: "Again and again the Standing is paired with spending: God-ward and people-ward in one breath.",
      },
    ],
    refs: ["4:101", "4:102", "4:103", "5:6", "9:71", "22:41", "24:58", "62:9", "62:10", "2:3"],
    quote: {
      text: "The Standing is the clock of the household, the boundary of trade, the anchor of testimony, and the bond of the community.",
      source: "Cluster D finding",
    },
  },
  {
    id: "transformation",
    number: "07",
    eyebrow: "Cluster E · 13 verses",
    title: "Does it change the one who stands?",
    lede:
      "The final test is the fruit. If the Standing is a state within God's reach, it should shape conduct. 29:45 says it plainly: the Standing forbids immorality and wrongdoing.",
    paragraphs: [
      "The transformed stander is humble (23:2), constant (70:23), guarding (23:9; 70:34), and confident in help (2:45; 2:153). The Standing is heavy for the proud and light for the humble. It is a shelter in patience, not a performance beside it.",
      "The untransformed stander is also described. The hypocrite rises lazily, shows off, and remembers little (4:142). The mocker's standing at the House is whistling and clapping (8:35). The heedless stander is warned with woe (107:4-5). The rejecter neither affirms nor stands (75:31). The form can exist without the state — and the Quran names that failure.",
      "The sharpest test is loss. In Surah 19, a successor generation “lost the Standing and followed desires” (19:59). The surah then moves to kneeling at Jahannam and to those “most worthy of standing within her” (19:70). Losing the voluntary standing does not leave a neutral space. It opens the imposed one.",
    ],
    discoveries: [
      {
        title: "Prevention is the fruit",
        body: "The Standing forbids immorality and wrongdoing; remembrance of God is greater (29:45).",
      },
      {
        title: "The inner qualities",
        body: "Humility, constancy, guardianship, and patience are the state's texture.",
      },
      {
        title: "The form without the state",
        body: "Lazy, showy, heedless, mocking standing is possible — and it is named as failure.",
      },
      {
        title: "Loss opens the other pole",
        body: "Surah 19 chains lost Standing to imposed standing within fire.",
      },
    ],
    refs: ["29:45", "23:2", "70:23", "23:9", "4:142", "8:35", "107:4-5", "75:31", "19:59", "19:70"],
    quote: {
      text: "The Standing is not proved by the posture. It is proved by what the posture prevents.",
      source: "Cluster E finding",
    },
  },
  {
    id: "bridges",
    number: "08",
    eyebrow: "The Quran's own proof",
    title: "Three surahs where both directions meet",
    lede:
      "The strongest evidence is internal. In three surahs, the Quran uses the root in both directions within a single passage — the voluntary standing and the imposed standing — so the reader cannot miss the link.",
    paragraphs: [
      "Surah 19: a successor generation loses the Standing and follows desires (19:59). The surah moves to the scene of kneeling at Jahannam (19:68) and then to those most worthy of standing within her (19:70). The noun and the verb of one root describe one standing-assignment: where devotional standing is displaced, fire-standing is imposed.",
      "Surah 74: the surah opens with a standing-prescription — arise, warn, magnify, purify, abandon favor-counting, be patient (74:1-7). It closes with “I will make him stand within Saqar” (74:26) and with the fire-people's confession: “We were not among those who stood” (74:43). The command to stand and the failure to stand are bracketed by the fire-standing.",
      "Surah 87 is the hinge. It names the Greatest Fire and the one who will be made to stand within it (87:12). Nine verses later it gives the success-triplet: purify, mention the Name of your Lord, then stand (87:14-15). The same stem, object-free, turned toward the Mentioned Name. This is the study's central discovery.",
    ],
    discoveries: [
      {
        title: "Surah 19 · loss and imposition",
        body: "Lost Standing (19:59) → Jahannam (19:68) → worthy of standing within her (19:70).",
      },
      {
        title: "Surah 74 · command and confession",
        body: "Standing-prescription (74:1-7) → Saqar (74:26) → “we were not of those who stood” (74:43).",
      },
      {
        title: "Surah 87 · the hinge",
        body: "Greatest Fire (87:12) → purify, mention the Name, then stand (87:14-15).",
      },
    ],
    refs: ["19:59", "19:70", "74:26", "74:43", "87:12", "87:15"],
    quote: {
      text: "The same stem. One direction is imposed by fire; the other is taken toward the Mentioned Name. The root does not change. The direction does.",
      source: "The bridge finding",
    },
  },
  {
    id: "verification",
    number: "09",
    eyebrow: "The test",
    title: "108 verses, 105 direct fits, 3 nuances, 0 contradictions",
    lede:
      "A meaning is only as good as its worst verse. The final pass took the thesis back through all 108 verses and asked, one by one, whether the verse fits directly, fits with an explained nuance, or breaks the thesis.",
    paragraphs: [
      "105 verses fit directly. Three require an explicit nuance, and the three-pole model explains all three. 22:40 uses the plural for houses of standing — the SITE pole, the space where standing happens. 2:125 uses muṣallā for the assigned spot — again the SITE pole. 87:15 uses the object-free verb for a human standing toward God — the BRIDGE between the imposed and voluntary poles.",
      "No verse required an exception, a forced reading, or a different root meaning. The fire-verses, the divine verses, the commanded verses, the institutional verses, and the transformative verses all sit inside one structure.",
      "That is the verification standard: not “most verses fit,” but “every verse is accounted for, and the difficult ones are named rather than hidden.”",
    ],
    discoveries: [
      {
        title: "105 direct",
        body: "The thesis applies without adjustment across the five clusters.",
      },
      {
        title: "3 nuances, all structural",
        body: "Two SITE-pole verses and one BRIDGE verse — each explained by the three-pole model.",
      },
      {
        title: "0 contradictions",
        body: "No verse required a different root meaning or an unprincipled exception.",
      },
    ],
    refs: ["22:40", "2:125", "87:15"],
    quote: {
      text: "The test is not whether the thesis sounds beautiful. The test is whether the strangest verse still has a home in it.",
      source: "Verification note",
    },
  },
  {
    id: "settled-meaning",
    number: "10",
    eyebrow: "The settled meaning",
    title: "One root, three poles, two directions",
    lede:
      "The root Ṣ-L-W names a standing-state within the full working reach of a power that determines one — sustained, renewed, settled. The same stem names the standing you take and the standing imposed on you.",
    paragraphs: [
      "Toward God, the standing is voluntary: the human stands after purification and Name-mention (87:15), and God responds by standing toward him, bringing him out of darkness into light. Toward fire, the standing is imposed: the person is made to stand within the fire after his own self-steering. The structure is identical; the direction and the quality differ.",
      "The noun ṣalāh names the STATE pole: the standing kept up willingly, qualified by mercy, tranquility, peace, surrender, humility, constancy, and prevention. The fire-verbs name the DELIVERY pole: the standing imposed, qualified by destination, settling, bedding, and holding. The site-words name the SITE pole: the space assigned to standing with the Name.",
      "So the word is both what you are and what you are in. It is a state of being within the reach of a power — and the Quran's entire theology of worship, judgment, and transformation is built on that single standing-state.",
    ],
    discoveries: [
      {
        title: "The one-sentence meaning",
        body: "Ṣ-L-W = a standing-state within the full working reach of a power that determines one.",
      },
      {
        title: "The three poles",
        body: "SITE (assigned space), STATE (willing standing), DELIVERY (imposed standing).",
      },
      {
        title: "The two directions",
        body: "Toward the Mentioned Name, or into fire — the same stem, opposite directions.",
      },
      {
        title: "The consequence",
        body: "Ṣalāh is not a ritual added to life. It is the standing-shape of life before the power that determines it.",
      },
    ],
    refs: ["87:15", "33:43", "4:56", "2:125", "29:45"],
    quote: {
      text: "You either stand toward the Name willingly, or you are made to stand within the fire you chose. The root is one. The direction is everything.",
      source: "Conclusion",
    },
  },
];
