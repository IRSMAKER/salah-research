import rawArabic from "./verse-arabic.json";
import { surahName } from "./surahs";

export type Pole = "delivery" | "divine" | "human" | "site" | "bridge";
export type Cluster = "A" | "B" | "C" | "D" | "E";
export type Fit = "direct" | "nuance";

export interface VerseContent {
  ref: string;
  id: string;
  aliases?: string[];
  title: string;
  translation: string;
  pole: Pole;
  fit: Fit;
  note: string;
}

export interface Verse extends VerseContent {
  surah: number;
  surahName: string;
  forms: string[];
  arabic: string;
  slug: string;
  cluster: Cluster;
}

type ArabicEntry = {
  ref: string;
  surah: number;
  forms: string[];
  arabic: string;
};

const arabic = rawArabic as ArabicEntry[];

const content: VerseContent[] = [
  {
    ref: "2:3",
    id: "D1",
    title: "Believe the unseen, establish, spend",
    translation:
      "Those who believe in the unseen, establish the Standing, and spend out of what We have provided them.",
    pole: "human",
    fit: "direct",
    note: "The Standing paired with spending defines the believer: God-ward establishment plus people-ward giving.",
  },
  {
    ref: "2:43",
    id: "C2",
    title: "Bow with those who bow",
    translation:
      "And establish the Standing, give the zakah, and bow with those who bow.",
    pole: "human",
    fit: "direct",
    note: "The Standing is established in company — bowing with those who bow.",
  },
  {
    ref: "2:45",
    id: "D5",
    aliases: ["E1"],
    title: "Help through patience and standing",
    translation:
      "And seek help in patience and the Standing. Indeed it is heavy except upon the humble.",
    pole: "human",
    fit: "direct",
    note: "The Standing is heavy for the proud and light for the humble; it is a help, not a burden.",
  },
  {
    ref: "2:83",
    id: "C3",
    title: "The covenant they turned from",
    translation:
      "And when We took the covenant of the Children of Israel: 'Do not serve anyone but God; and be excellent to parents, relatives, orphans, and the poor; and speak good to people; and establish the Standing and give the zakah.' Then you turned away, except a few of you, and you were turning aside.",
    pole: "human",
    fit: "direct",
    note: "A covenant item the people turned away from — the same turning that the fire-verses name.",
  },
  {
    ref: "2:110",
    id: "D2",
    title: "Send good ahead",
    translation:
      "And establish the Standing and give the zakah. Whatever good you send ahead for yourselves, you will find it with God. Indeed God sees what you do.",
    pole: "human",
    fit: "direct",
    note: "The Standing is an investment: what you send ahead is found with God.",
  },
  {
    ref: "2:125",
    id: "C5",
    title: "A standing-place from Abraham",
    translation:
      "And when We made the House a place of return for people and a sanctuary: 'Take from the standing-place of Abraham a place of standing.' And We charged Abraham and Ishmael: 'Purify My House for those who circle it, those who seclude themselves, and those who bow and prostrate.'",
    pole: "site",
    fit: "nuance",
    note: "SITE pole: muṣallā is the assigned space of standing, taken from Abraham's standing-place.",
  },
  {
    ref: "2:153",
    id: "D6",
    aliases: ["E2"],
    title: "God is with the patient",
    translation:
      "O you who believe, seek help in patience and the Standing. Indeed God is with the patient.",
    pole: "human",
    fit: "direct",
    note: "Patience and the Standing are the two helps; God's presence is with the patient.",
  },
  {
    ref: "2:157",
    id: "B2",
    title: "Standings from their Lord",
    translation:
      "Upon them are standings from their Lord and mercy, and they are the guided.",
    pole: "divine",
    fit: "direct",
    note: "God's standings are granted, paired with mercy, to those who confess return.",
  },
  {
    ref: "2:177",
    id: "D3",
    title: "Righteousness in full character",
    translation:
      "Righteousness is not that you turn your faces toward the east or the west. Rather, righteousness is one who believes in God, the Last Day, the angels, the Book, and the prophets; and gives wealth, despite love for it, to relatives, orphans, the poor, the traveler, the askers, and for freeing slaves; and establishes the Standing and gives the zakah; and fulfills their covenant when they make it; and is patient in hardship, affliction, and times of conflict. Those are the truthful, and those are the mindful.",
    pole: "human",
    fit: "direct",
    note: "The Standing sits inside a ten-item character of righteousness — truth in action.",
  },
  {
    ref: "2:238",
    id: "C16",
    title: "Guard the middle Standing",
    translation:
      "Guard the Standings and the middle Standing, and stand for God, devoutly obedient.",
    pole: "human",
    fit: "direct",
    note: "The Standings are guarded, and the middle one is singled out; the command ends in devout standing.",
  },
  {
    ref: "2:277",
    id: "D4",
    title: "No fear, no grief",
    translation:
      "Indeed those who believe, do righteous deeds, establish the Standing, and give the zakah — their reward is with their Lord, and no fear is upon them, nor do they grieve.",
    pole: "human",
    fit: "direct",
    note: "Establishing the Standing and giving zakah yields fearlessness and grieflessness.",
  },
  {
    ref: "3:39",
    id: "C13",
    title: "Standing in the sanctuary",
    translation:
      "Then the angels called him while he was standing in the sanctuary, standing toward God: 'God gives you good news of Yahya, confirming a word from God, a leader, chaste, and a prophet among the righteous.'",
    pole: "human",
    fit: "direct",
    note: "The physical form appears: Zakariyya standing (qāʾim) in the sanctuary, standing toward God.",
  },
  {
    ref: "4:10",
    id: "A1",
    title: "Fire in the belly",
    translation:
      "Indeed those who consume the property of orphans unjustly are only swallowing fire into their bellies, and they will be made to stand within a Blaze.",
    pole: "delivery",
    fit: "direct",
    note: "Fire swallowed becomes fire stood in: the root names a sustained placement, not a spark.",
  },
  {
    ref: "4:30",
    id: "A2",
    title: "Assigned with a Fire",
    translation:
      "And whoever does that in aggression and injustice — We will make him stand within a Fire, and that is easy for God.",
    pole: "delivery",
    fit: "direct",
    note: "Double-object grammar: the person and the Fire are both objects — the Fire is the medium of the standing.",
  },
  {
    ref: "4:43",
    id: "D7",
    title: "Do not approach while intoxicated",
    translation:
      "O you who believe, do not approach the Standing while intoxicated, until you know what you are saying; nor while in a state of major impurity — unless you are passing through — until you wash. And if you are sick, or on a journey, or one of you comes from the privy, or you have touched women and find no water, then seek clean earth and wipe your faces and hands with it. Indeed God is pardoning and forgiving.",
    pole: "human",
    fit: "direct",
    note: "Purity gates the approach to the Standing; water or clean earth, no hardship intended.",
  },
  {
    ref: "4:56",
    id: "A3",
    title: "Skins renewed, tasting never ends",
    translation:
      "Indeed those who reject Our signs — We will make them stand within a Fire. Every time their skins are roasted through, We will replace them with other skins, so that they may taste the punishment. Indeed God is mighty and wise.",
    pole: "delivery",
    fit: "direct",
    note: "Skins are replaced so the standing is renewed without end — total, sustained contact.",
  },
  {
    ref: "4:77",
    id: "D8",
    title: "The peace-act",
    translation:
      "Have you not seen those who were told: 'Restrain your hands, establish the Standing, and give the zakah'? Then when fighting was prescribed for them, a group of them feared people as they should fear God, or more. And they said: 'Our Lord, why have You prescribed fighting for us? If only You had delayed us for a short term.' Say: 'The enjoyment of this world is little, and the Hereafter is better for one who is mindful, and you will not be wronged by a thread.'",
    pole: "human",
    fit: "direct",
    note: "The Standing is the peace-act for those who fear God rather than people.",
  },
  {
    ref: "4:101",
    id: "D9",
    title: "Shortened in fear",
    translation:
      "And when you strike out in the land, there is no blame upon you to shorten the Standing if you fear that those who reject may harm you. Indeed the rejecters are your clear enemy.",
    pole: "human",
    fit: "direct",
    note: "Travel and fear permit shortening; the Standing bends to circumstance without disappearing.",
  },
  {
    ref: "4:102",
    id: "D10",
    title: "Standing in shifts",
    translation:
      "And when you are among them and establish the Standing for them, let a group of them stand with you and take their weapons. Then when they have prostrated, let them be behind you; and let another group who have not yet stood come and stand with you, and let them take their precaution and their weapons. Those who reject wish that you would neglect your weapons and your equipment, so they could turn upon you in one rush. But there is no blame upon you if you lay down your weapons because of rain or because you are sick — but take your precaution. Indeed God has prepared a humiliating punishment for the rejecters.",
    pole: "human",
    fit: "direct",
    note: "Even in battle the Standing is kept, in shifts, with weapons and precaution.",
  },
  {
    ref: "4:103",
    id: "D11",
    title: "A prescribed writ, timed",
    translation:
      "Then when you have concluded the Standing, remember God standing, sitting, and on your sides. Then when you are secure, establish the Standing. Indeed the Standing is upon the believers a prescribed writ, timed.",
    pole: "human",
    fit: "direct",
    note: "The Standing is a prescribed writ with fixed times; after it, remembrance in every posture.",
  },
  {
    ref: "4:115",
    id: "A4",
    title: "Left to his own steering",
    translation:
      "And whoever opposes the Messenger after guidance has become clear to him, and follows a path other than that of the believers — We will leave him to what he has turned to, and make him stand within Jahannam. What an evil destination.",
    pole: "delivery",
    fit: "direct",
    note: "The one who steers himself away is left to his steering and made to stand in Jahannam.",
  },
  {
    ref: "4:142",
    id: "E3",
    title: "The lazy, show-off standing",
    translation:
      "Indeed the hypocrites try to deceive God, but He deceives them. And when they rise to the Standing, they rise lazily, showing off to people, and they do not remember God except a little.",
    pole: "human",
    fit: "direct",
    note: "The hypocrite's standing is lazy, showy, and forgetful — the form without the state.",
  },
  {
    ref: "4:162",
    id: "D12",
    title: "The firm in knowledge",
    translation:
      "But those firmly grounded in knowledge among them, and the believers, believe in what was sent down to you and what was sent down before you; and the establishers of the Standing, the givers of the zakah, and the believers in God and the Last Day — to them We will give a great reward.",
    pole: "human",
    fit: "direct",
    note: "Establishers of the Standing are named alongside the firmly grounded in knowledge.",
  },
  {
    ref: "5:6",
    id: "D13",
    title: "Wash before you rise",
    translation:
      "O you who believe, when you rise to the Standing, wash your faces and your hands up to the elbows, wipe your heads, and your feet up to the ankles. And if you are in a state of major impurity, purify yourselves. And if you are sick, or on a journey, or one of you comes from the privy, or you have touched women and find no water, then seek clean earth and wipe your faces and hands with it. God does not intend to place hardship upon you, but He intends to purify you and complete His favor upon you, so that you may be grateful.",
    pole: "human",
    fit: "direct",
    note: "Washing precedes rising to the Standing: the body is prepared for standing.",
  },
  {
    ref: "5:12",
    id: "C4",
    title: "The covenant of five conditions",
    translation:
      "And God had taken the covenant of the Children of Israel, and We raised from them twelve leaders. And God said: 'I am with you, if you establish the Standing, give the zakah, believe in My messengers and support them, and lend God a good loan — I will remove your evil deeds from you and admit you into gardens beneath which rivers flow. Then whoever rejects after that among you has strayed from the even path.'",
    pole: "human",
    fit: "direct",
    note: "The Standing is the first condition of the covenant, and breaking it leads to curse.",
  },
  {
    ref: "5:55",
    id: "D14",
    title: "Standing and bowing",
    translation:
      "Your ally is only God, His Messenger, and those who believe — those who establish the Standing, give the zakah, and bow.",
    pole: "human",
    fit: "direct",
    note: "The Standing includes bowing; those who establish it are God's allies.",
  },
  {
    ref: "5:58",
    id: "D15",
    title: "The call mocked",
    translation:
      "And when you call to the Standing, they take it as ridicule and play. That is because they are a people who do not understand.",
    pole: "human",
    fit: "direct",
    note: "The call to the Standing is public, and mockery of it marks a people without understanding.",
  },
  {
    ref: "5:91",
    id: "D16",
    title: "Satan turns you from it",
    translation:
      "Satan only wants to place enmity and hatred among you through wine and gambling, and to turn you away from the remembrance of God and from the Standing. Will you not cease?",
    pole: "human",
    fit: "direct",
    note: "Satan's aim is to turn people from remembrance and from the Standing — the two are joined.",
  },
  {
    ref: "5:106",
    id: "D17",
    title: "Witnesses after the Standing",
    translation:
      "O you who believe, when death approaches one of you at the time of bequest, let two just witnesses among you — or two others from outside you if you are striking out in the land and the calamity of death befalls you — you detain them after the Standing, and they swear by God, if you doubt: 'We will not trade our oath for a price, even if he were a relative, and we will not conceal the testimony of God — indeed then we would be among the sinners.'",
    pole: "human",
    fit: "direct",
    note: "The Standing anchors legal testimony: witnesses are detained after it and swear by God.",
  },
  {
    ref: "6:72",
    id: "D18",
    title: "Establish and fear",
    translation:
      "And that you establish the Standing and be mindful of Him. And He is the One to whom you will be gathered.",
    pole: "human",
    fit: "direct",
    note: "Establishing the Standing is joined to fear of God and orientation to the gathering.",
  },
  {
    ref: "6:92",
    id: "D19",
    title: "Guardians of their Standing",
    translation:
      "And this is a blessed Book which We sent down, confirming what is before it, so that you may warn the Mother of the Towns and those around it. And those who believe in the Hereafter believe in it, and they are guardians over their Standing.",
    pole: "human",
    fit: "direct",
    note: "Guardianship over the Standing marks belief in the Hereafter.",
  },
  {
    ref: "6:162",
    id: "C12",
    title: "My Standing, my life, my death",
    translation:
      "Say: 'Indeed my Standing, my sacrifice, my living, and my dying are for God, Lord of all the worlds.'",
    pole: "human",
    fit: "direct",
    note: "The Standing is one quarter of a total dedication: sacrifice, life, and death belong to God.",
  },
  {
    ref: "7:170",
    id: "D20",
    title: "Hold the Book, establish",
    translation:
      "And those who hold fast to the Book and establish the Standing — indeed We do not waste the reward of the reformers.",
    pole: "human",
    fit: "direct",
    note: "Holding fast to the Book and establishing the Standing is the reformer's act.",
  },
  {
    ref: "8:3",
    id: "D21",
    title: "The true believers",
    translation:
      "Those who establish the Standing and spend out of what We have provided them.",
    pole: "human",
    fit: "direct",
    note: "The Standing plus spending is the two-act portrait of the true believers.",
  },
  {
    ref: "8:35",
    id: "E4",
    title: "Whistling and clapping",
    translation:
      "And their standing at the House was nothing but whistling and clapping. So taste the punishment for what you used to reject.",
    pole: "human",
    fit: "direct",
    note: "The mockers' standing at the House is noise — the state inverted.",
  },
  {
    ref: "9:5",
    id: "D22",
    title: "The gate of peace",
    translation:
      "Then when the sacred months have passed, kill the polytheists wherever you find them, seize them, besiege them, and lie in wait for them at every ambush. But if they repent, establish the Standing, and give the zakah, then let them go their way. Indeed God is forgiving and merciful.",
    pole: "human",
    fit: "direct",
    note: "Repentance, the Standing, and zakah open the way to peace.",
  },
  {
    ref: "9:11",
    id: "D23",
    title: "Brothers in religion",
    translation:
      "But if they repent, establish the Standing, and give the zakah, then they are your brothers in religion. And We detail the signs for a people who know.",
    pole: "human",
    fit: "direct",
    note: "The same three turn enemies into brothers in religion.",
  },
  {
    ref: "9:18",
    id: "D24",
    title: "Maintainers of the mosques",
    translation:
      "Only one who believes in God and the Last Day, establishes the Standing, gives the zakah, and fears none but God maintains the mosques of God. It may be that those are among the guided.",
    pole: "human",
    fit: "direct",
    note: "Maintaining God's mosques is tied to establishing the Standing and fearing none but God.",
  },
  {
    ref: "9:54",
    id: "D25",
    title: "Lazy, unwilling",
    translation:
      "And what prevents their spending from being accepted from them is only that they reject God and His Messenger, and they do not come to the Standing except while lazy, and they do not spend except while unwilling.",
    pole: "human",
    fit: "direct",
    note: "The hypocrites come to the Standing lazily and spend unwillingly.",
  },
  {
    ref: "9:71",
    id: "D26",
    title: "The community bond",
    translation:
      "And the believing men and believing women are allies of one another: they enjoin right, forbid wrong, establish the Standing, give the zakah, and obey God and His Messenger. Those — God will have mercy on them. Indeed God is mighty and wise.",
    pole: "human",
    fit: "direct",
    note: "The Standing is the bond of the believing community, men and women alike.",
  },
  {
    ref: "9:84",
    id: "B7",
    title: "Withheld at death",
    translation:
      "And do not stand toward any of them who dies, ever, and do not stand at his grave. Indeed they rejected God and His Messenger and died while they were defiant.",
    pole: "divine",
    fit: "direct",
    note: "The Standing is honor that can be withheld; the command forbids it at the grave of the defiant.",
  },
  {
    ref: "9:99",
    id: "B6",
    title: "Standings of the Messenger",
    translation:
      "And among the desert Arabs is one who believes in God and the Last Day and takes what he spends as nearness to God and as the standings of the Messenger. Surely it is nearness for them; God will admit them into His mercy. Indeed God is forgiving and merciful.",
    pole: "divine",
    fit: "direct",
    note: "Spending is counted as standings of the Messenger — the Standing as a currency of nearness.",
  },
  {
    ref: "9:103",
    id: "B5",
    title: "Your standing is tranquility",
    translation:
      "Take from their wealth a charity that purifies them and cleanses them by it, and stand toward them. Indeed your standing is tranquility for them. And God is hearing and knowing.",
    pole: "divine",
    fit: "direct",
    note: "The Prophet's standing is tranquility for the repentant — the soft counterpart of fire's holding.",
  },
  {
    ref: "10:87",
    id: "D27",
    title: "Houses as direction",
    translation:
      "And We inspired Moses and his brother: 'Settle your people in Egypt in houses, make your houses a direction, and establish the Standing; and give good news to the believers.'",
    pole: "human",
    fit: "direct",
    note: "Houses become a direction, and the Standing is established in them.",
  },
  {
    ref: "11:87",
    id: "C11",
    title: "Does your Standing command you?",
    translation:
      "They said: 'O Shu'ayb, does your Standing command you that we abandon what our fathers served, or that we not do with our wealth what we wish? Indeed you are the forbearing, the rightly guided.'",
    pole: "human",
    fit: "direct",
    note: "Even the mockers feel the Standing as a commanding force that reforms worship and wealth.",
  },
  {
    ref: "11:114",
    id: "C17",
    title: "Two ends of the day",
    translation:
      "And establish the Standing at the two ends of the day and at the approach of the night. Indeed good deeds remove evil deeds. That is a reminder for the mindful.",
    pole: "human",
    fit: "direct",
    note: "The Standing is timed at both ends of the day; good deeds remove evil deeds.",
  },
  {
    ref: "13:22",
    id: "D28",
    title: "Seeking His face",
    translation:
      "And those who are patient, seeking the face of their Lord, establish the Standing, spend out of what We have provided them secretly and openly, and repel evil with good — for them is the final home.",
    pole: "human",
    fit: "direct",
    note: "Seeking God's face, establishing the Standing, and repelling evil with good.",
  },
  {
    ref: "14:29",
    id: "A5",
    title: "Jahannam, an awful settling-place",
    translation:
      "Jahannam — they will be made to stand within her. What an evil settling-place.",
    pole: "delivery",
    fit: "direct",
    note: "The fire is named as a settling-place; the standing within her is a lodging.",
  },
  {
    ref: "14:31",
    id: "D29",
    title: "Before the Day with no bargaining",
    translation:
      "Say to My servants who believe: establish the Standing and spend out of what We have provided them, secretly and openly, before a Day comes in which there is no trade and no friendship.",
    pole: "human",
    fit: "direct",
    note: "The Standing is urgent — before the Day with no trade and no friendship.",
  },
  {
    ref: "14:37",
    id: "C6",
    title: "Settled to establish",
    translation:
      "Our Lord, I have settled some of my offspring in a valley with no crops, near Your sacred House — our Lord, so that they may establish the Standing. So make hearts among people incline toward them, and provide them with fruits, so that they may be grateful.",
    pole: "human",
    fit: "direct",
    note: "Abraham settles his offspring near the House for one purpose: that they establish the Standing.",
  },
  {
    ref: "14:40",
    id: "C7",
    title: "Make me an establisher",
    translation:
      "My Lord, make me an establisher of the Standing, and from my offspring. Our Lord, and accept my supplication.",
    pole: "human",
    fit: "direct",
    note: "The establisher is made by God; the Standing is a gift and a heritage.",
  },
  {
    ref: "17:18",
    id: "A6",
    title: "Made for him Jahannam",
    translation:
      "Whoever desires the immediate — We hasten for him in it what We will, for whom We intend; then We make Jahannam for him, and he will be made to stand within her, blameworthy and driven off.",
    pole: "delivery",
    fit: "direct",
    note: "Assigned-to-him grammar: Jahannam is made for him, and he is made to stand within her, blameworthy and driven off.",
  },
  {
    ref: "17:78",
    id: "C14",
    title: "From midday to dawn",
    translation:
      "Establish the Standing from the decline of the sun until the darkness of the night, and the dawn recitation. Indeed the dawn recitation is witnessed.",
    pole: "human",
    fit: "direct",
    note: "The Standing has timed boundaries from midday to night, with the witnessed dawn recitation.",
  },
  {
    ref: "17:110",
    id: "C15",
    title: "A voice between loud and low",
    translation:
      "Say: 'Call upon God or call upon the Most Merciful — whichever you call, to Him belong the most beautiful names.' And do not raise your voice in your Standing, nor lower it too much, but seek a path between that.",
    pole: "human",
    fit: "direct",
    note: "The Standing has a vocal form: neither loud nor low, a path between.",
  },
  {
    ref: "19:31",
    id: "C8",
    title: "Enjoined for a lifetime",
    translation:
      "And He has made me blessed wherever I am, and He has enjoined upon me the Standing and the zakah as long as I live.",
    pole: "human",
    fit: "direct",
    note: "Jesus is enjoined the Standing for the whole of his life.",
  },
  {
    ref: "19:55",
    id: "C9",
    title: "A family commanded",
    translation:
      "And he used to command his family the Standing and the zakah, and he was pleasing to his Lord.",
    pole: "human",
    fit: "direct",
    note: "Ishmael commands his household the Standing and zakah, and is pleasing to his Lord.",
  },
  {
    ref: "19:59",
    id: "E5",
    title: "They lost the Standing",
    translation:
      "Then there came after them successors who lost the Standing and followed desires. So they will meet error.",
    pole: "human",
    fit: "direct",
    note: "Losing the Standing and following desires is the Surah 19 hinge to the fire-standing.",
  },
  {
    ref: "19:70",
    id: "A7",
    title: "Most worthy of standing within her",
    translation:
      "Then We are most knowing of those who are most worthy of standing within her.",
    pole: "delivery",
    fit: "direct",
    note: "The fire-standing is an earned title: 'most worthy of standing within her.'",
  },
  {
    ref: "20:14",
    id: "C10",
    title: "For My remembrance",
    translation:
      "Indeed I am God — there is no god but Me. So serve Me and establish the Standing for My remembrance.",
    pole: "human",
    fit: "direct",
    note: "The Standing is established for remembrance — the purpose is dhikr.",
  },
  {
    ref: "20:132",
    id: "C18",
    title: "Command your family",
    translation:
      "And command your family the Standing and be steadfast upon it. We do not ask you for provision; We provide for you. And the outcome belongs to mindfulness.",
    pole: "human",
    fit: "direct",
    note: "The family is commanded the Standing, and steadfastness upon it is required.",
  },
  {
    ref: "21:73",
    id: "D30",
    title: "Leaders who establish",
    translation:
      "And We made them leaders guiding by Our command, and We inspired them the doing of good deeds, the establishing of the Standing, and the giving of the zakah; and they were worshippers of Us.",
    pole: "human",
    fit: "direct",
    note: "Leaders are inspired to establish the Standing; it is a leadership-act.",
  },
  {
    ref: "22:35",
    id: "D31",
    title: "Hearts that tremble",
    translation:
      "Those whose hearts tremble when God is mentioned, and the patient over what befalls them, and the establishers of the Standing, and those who spend out of what We have provided them.",
    pole: "human",
    fit: "direct",
    note: "Trembling hearts, patient endurance, established Standing, and spending belong together.",
  },
  {
    ref: "22:40",
    id: "A8",
    title: "Houses of standing",
    translation:
      "Those who were driven out of their homes without right, only for saying: 'Our Lord is God.' And were it not for God repelling people, some by means of others, there would have been demolished monasteries, churches, houses of standing, and mosques in which the name of God is mentioned much. And God will surely support those who support Him. Indeed God is strong and mighty.",
    pole: "site",
    fit: "nuance",
    note: "SITE pole: ṣalawāt names houses of standing where God's name is mentioned much.",
  },
  {
    ref: "22:41",
    id: "D32",
    title: "The first act of the empowered",
    translation:
      "Those who, if We establish them in the land, establish the Standing, give the zakah, enjoin right, and forbid wrong. And to God belongs the outcome of all matters.",
    pole: "human",
    fit: "direct",
    note: "The first act of the empowered is to establish the Standing.",
  },
  {
    ref: "22:78",
    id: "D33",
    title: "No difficulty in the religion",
    translation:
      "And strive for God with the striving due to Him. He has chosen you and has not placed upon you in the religion any hardship — the way of your father Abraham. He named you the submitters before, and in this, so that the Messenger may be a witness over you and you may be witnesses over people. So establish the Standing, give the zakah, and hold fast to God. He is your protector — what an excellent protector and what an excellent helper.",
    pole: "human",
    fit: "direct",
    note: "No hardship in the religion: establish the Standing, give zakah, hold fast to God.",
  },
  {
    ref: "23:2",
    id: "E6",
    title: "Humble in their Standing",
    translation: "Those who are humble in their Standing.",
    pole: "human",
    fit: "direct",
    note: "Humility is the inner quality of the Standing; the humble inherit Firdaws.",
  },
  {
    ref: "23:9",
    id: "E7",
    title: "Guardians of the Standings",
    translation: "And those who guard their Standings.",
    pole: "human",
    fit: "direct",
    note: "The Standings are guarded — the plural names renewed cycles.",
  },
  {
    ref: "24:37",
    id: "D34",
    title: "Trade does not distract",
    translation:
      "Men whom neither trade nor sale distracts from the remembrance of God, the establishing of the Standing, and the giving of the zakah. They fear a Day in which hearts and eyes will turn over.",
    pole: "human",
    fit: "direct",
    note: "Trade and sale do not distract from remembrance, the Standing, and zakah.",
  },
  {
    ref: "24:41",
    id: "B1",
    title: "Each knows its standing",
    translation:
      "Have you not seen that God is glorified by whoever is in the heavens and the earth, and by the birds with wings spread? Each has known its standing and its glorification. And God knows what they do.",
    pole: "divine",
    fit: "direct",
    note: "The birds know their standing by creation — the strongest proof that the Standing is a state, not a ritual.",
  },
  {
    ref: "24:56",
    id: "D35",
    title: "Mercy promised",
    translation:
      "And establish the Standing, give the zakah, and obey the Messenger, so that you may receive mercy.",
    pole: "human",
    fit: "direct",
    note: "Establishing the Standing and obeying the Messenger is the path to mercy.",
  },
  {
    ref: "24:58",
    id: "D36",
    title: "The household clock",
    translation:
      "O you who believe, let those whom your right hands possess and those among you who have not reached puberty ask your permission three times: before the dawn Standing, when you lay aside your clothes at midday, and after the night Standing. These are three times of privacy for you. There is no blame upon you or upon them after that, as they move about among you, some of you around others. Thus God makes clear the signs to you. And God is knowing and wise.",
    pole: "human",
    fit: "direct",
    note: "The Standing is the household clock: dawn and night Standing frame privacy.",
  },
  {
    ref: "27:3",
    id: "D37",
    title: "Certain of the Hereafter",
    translation:
      "Those who establish the Standing, give the zakah, and are certain of the Hereafter.",
    pole: "human",
    fit: "direct",
    note: "The Standing belongs to those certain of the Hereafter.",
  },
  {
    ref: "29:45",
    id: "E8",
    title: "The Standing forbids",
    translation:
      "Recite what has been revealed to you of the Book and establish the Standing. Indeed the Standing forbids immorality and wrongdoing. And the remembrance of God is greater. And God knows what you do.",
    pole: "human",
    fit: "direct",
    note: "The Standing is transformative: it forbids immorality and wrongdoing; remembrance is greater.",
  },
  {
    ref: "30:31",
    id: "D38",
    title: "Turning to Him",
    translation:
      "Turning to Him, and be mindful of Him, and establish the Standing, and do not be among the polytheists.",
    pole: "human",
    fit: "direct",
    note: "Turning to God, mindfulness, and the Standing are set against polytheism.",
  },
  {
    ref: "31:4",
    id: "D39",
    title: "Establish, give, be certain",
    translation:
      "Those who establish the Standing, give the zakah, and are certain of the Hereafter.",
    pole: "human",
    fit: "direct",
    note: "The same triad as 27:3: Standing, zakah, certainty.",
  },
  {
    ref: "31:17",
    id: "C19",
    title: "Command one: establish",
    translation:
      "O my son, establish the Standing, enjoin right, forbid wrong, and be patient over what befalls you. Indeed that is of the matters of determination.",
    pole: "human",
    fit: "direct",
    note: "Luqman's first command to his son: establish the Standing, then enjoin and forbid.",
  },
  {
    ref: "33:33",
    id: "C20",
    title: "Purify the household",
    translation:
      "And remain in your houses, and do not display yourselves as the display of the former ignorance. And establish the Standing, give the zakah, and obey God and His Messenger. God only intends to remove impurity from you, O people of the House, and to purify you thoroughly.",
    pole: "human",
    fit: "direct",
    note: "The Standing, zakah, and obedience are the household's purification.",
  },
  {
    ref: "33:43",
    id: "B3",
    title: "Out of darkness into light",
    translation:
      "He is the One who stands toward you — He and His angels — to bring you out of darkness into light. And He is merciful to the believers.",
    pole: "divine",
    fit: "direct",
    note: "God stands toward the believers with His angels to bring them out of darkness into light.",
  },
  {
    ref: "33:56",
    id: "B4",
    title: "Stand toward the Prophet",
    translation:
      "Indeed God and His angels stand toward the Prophet. O you who believe, stand toward him and surrender in full surrender.",
    pole: "divine",
    fit: "direct",
    note: "God and the angels stand toward the Prophet; believers are commanded to stand toward him and surrender.",
  },
  {
    ref: "35:18",
    id: "D40",
    title: "Fear Him in the unseen",
    translation:
      "And no bearer bears the burden of another. And if a heavily burdened one calls for help, nothing of it will be carried, even if he were a relative. You only warn those who fear their Lord in the unseen and establish the Standing. And whoever purifies himself only purifies himself for his own soul. And to God is the destination.",
    pole: "human",
    fit: "direct",
    note: "Fear of the unseen God and the Standing go together; purification is for one's own soul.",
  },
  {
    ref: "35:29",
    id: "D41",
    title: "A trade that never perishes",
    translation:
      "Indeed those who recite the Book of God, establish the Standing, and spend out of what We have provided them secretly and openly hope for a trade that will never perish.",
    pole: "human",
    fit: "direct",
    note: "Reciting the Book, establishing the Standing, and spending is a trade that never perishes.",
  },
  {
    ref: "36:64",
    id: "A9",
    title: "Stand within her today",
    translation:
      "Stand within her today, for what you used to reject.",
    pole: "delivery",
    fit: "direct",
    note: "The imperative voice: the delivered one is told to stand within her.",
  },
  {
    ref: "38:56",
    id: "A10",
    title: "An awful bedding",
    translation:
      "Jahannam — they will be made to stand within her. What an evil bedding.",
    pole: "delivery",
    fit: "direct",
    note: "The fire is bedding (mihād) — the standing within her is a settlement.",
  },
  {
    ref: "42:38",
    id: "D42",
    title: "Response and consultation",
    translation:
      "And those who respond to their Lord, establish the Standing, whose affair is consultation among themselves, and who spend out of what We have provided them.",
    pole: "human",
    fit: "direct",
    note: "Response to the Lord, the Standing, consultation, and spending form one portrait.",
  },
  {
    ref: "52:16",
    id: "A11",
    title: "Patience makes no difference",
    translation:
      "Stand within her. Be patient or do not be patient — it is the same for you. You are only repaid for what you used to do.",
    pole: "delivery",
    fit: "direct",
    note: "Inside the standing, patience and impatience are the same; only this side of it matters.",
  },
  {
    ref: "56:94",
    id: "A12",
    title: "A sustained roasting",
    translation: "And a sustained roasting in Jahim.",
    pole: "delivery",
    fit: "direct",
    note: "The root's noun names the fire-standing: taṣliya, a sustained roasting.",
  },
  {
    ref: "58:8",
    id: "A13",
    title: "Jahannam suffices them",
    translation:
      "Have you not seen those who were forbidden from whispering, then return to what they were forbidden, and whisper of sin, aggression, and disobedience to the Messenger? And when they come to you, they greet you with what God did not greet you with, and they say among themselves: 'Why does God not punish us for what we say?' Jahannam is enough for them — they will be made to stand within her. What an evil destination.",
    pole: "delivery",
    fit: "direct",
    note: "Jahannam suffices them and they are made to stand within her — the refused proximity becomes the standing.",
  },
  {
    ref: "58:13",
    id: "D43",
    title: "After forgiveness",
    translation:
      "Did you fear to send charities before your whispered conversation? So when you did not do it, and God turned to you in forgiveness, then establish the Standing, give the zakah, and obey God and His Messenger. And God is aware of what you do.",
    pole: "human",
    fit: "direct",
    note: "After forgiveness, the Standing and zakah are the response.",
  },
  {
    ref: "62:9",
    id: "D44",
    title: "The Friday call",
    translation:
      "O you who believe, when the call is made for the Standing on Friday, hasten to the remembrance of God and leave trade. That is better for you, if you only knew.",
    pole: "human",
    fit: "direct",
    note: "The Friday call gathers to remembrance and suspends trade — the Standing as economic clock.",
  },
  {
    ref: "62:10",
    id: "D45",
    title: "When the Standing concludes",
    translation:
      "Then when the Standing is concluded, disperse in the land, seek the bounty of God, and remember God much, so that you may succeed.",
    pole: "human",
    fit: "direct",
    note: "When the Standing concludes, life resumes in the land with the bounty of God.",
  },
  {
    ref: "69:31",
    id: "A14",
    title: "Seized, then made to stand",
    translation: "Then make him stand within Jahim.",
    pole: "delivery",
    fit: "direct",
    note: "Seized, shackled, then made to stand in Jahim — the procession ends in a standing.",
  },
  {
    ref: "70:22",
    id: "E9a",
    title: "Except those who stand",
    translation: "Except those who stand.",
    pole: "human",
    fit: "direct",
    note: "The exception clause: those who stand are the constant ones.",
  },
  {
    ref: "70:23",
    id: "E9b",
    title: "Constant upon their Standing",
    translation: "Those who are constant upon their Standing.",
    pole: "human",
    fit: "direct",
    note: "Constancy upon the Standing is the mark of the standing community.",
  },
  {
    ref: "70:34",
    id: "E9c",
    title: "Guardians of their Standing",
    translation: "And those who guard their Standing.",
    pole: "human",
    fit: "direct",
    note: "Guardianship of the Standing recurs as the closing mark of the faithful.",
  },
  {
    ref: "73:20",
    id: "C21",
    title: "Recite what is easy",
    translation:
      "Indeed your Lord knows that you stand nearly two-thirds of the night, or half of it, or a third of it — and a group of those with you. And God measures the night and the day. He knows that you will not count it, so He turned to you in mercy. So recite what is easy of the Quran. He knows that some of you will be sick, and others will travel in the land seeking the bounty of God, and others will fight in the way of God. So recite what is easy of it, establish the Standing, give the zakah, and lend God a good loan. And whatever good you send ahead for yourselves, you will find it with God — it is better and greater in reward. And seek God's forgiveness. Indeed God is forgiving and merciful.",
    pole: "human",
    fit: "direct",
    note: "The night Standing is eased: recite what is easy, establish, give, lend to God.",
  },
  {
    ref: "74:26",
    id: "A15",
    title: "I will make him stand in Saqar",
    translation: "I will make him stand within Saqar.",
    pole: "delivery",
    fit: "direct",
    note: "God's first-person future: I will make him stand within Saqar.",
  },
  {
    ref: "74:43",
    id: "E10",
    title: "We were not of those who stood",
    translation: "They will say: 'We were not among those who stood.'",
    pole: "human",
    fit: "direct",
    note: "The confession of the fire-people: we were not among those who stood.",
  },
  {
    ref: "75:31",
    id: "E11",
    title: "Neither affirmed nor stood",
    translation: "He neither affirmed nor stood.",
    pole: "human",
    fit: "direct",
    note: "The rejecter neither affirmed nor stood — the two refusals are one.",
  },
  {
    ref: "82:15",
    id: "A16",
    title: "Not absent from her",
    translation: "They will be made to stand within her on the Day of Judgment.",
    pole: "delivery",
    fit: "direct",
    note: "No absence clause: the standing within her cannot be left.",
  },
  {
    ref: "84:12",
    id: "A17",
    title: "The one who will not stand is stood",
    translation: "And he will be made to stand within a Blaze.",
    pole: "delivery",
    fit: "direct",
    note: "The passive voice: the one who will not stand is stood.",
  },
  {
    ref: "87:12",
    id: "A18",
    title: "The Greatest Fire",
    translation: "He will be made to stand within the Greatest Fire.",
    pole: "delivery",
    fit: "direct",
    note: "The Greatest Fire, and a standing that is neither life nor death.",
  },
  {
    ref: "87:15",
    id: "A19",
    title: "Then he stands",
    translation: "And mentions the name of his Lord, then stands.",
    pole: "bridge",
    fit: "nuance",
    note: "The hinge: after purification and Name-mention, the human stands — the same stem turned toward God.",
  },
  {
    ref: "88:4",
    id: "A20",
    title: "A blazing Fire",
    translation: "Made to stand within a blazing Fire.",
    pole: "delivery",
    fit: "direct",
    note: "Passive again: made to stand within a blazing Fire, served and furnished.",
  },
  {
    ref: "92:15",
    id: "A21",
    title: "Only the most wretched",
    translation:
      "None will be made to stand within her except the most wretched.",
    pole: "delivery",
    fit: "direct",
    note: "Exclusion grammar: only the most wretched is made to stand within her.",
  },
  {
    ref: "96:10",
    id: "E12",
    title: "Forbidding a servant who stands",
    translation: "A servant when he stands.",
    pole: "human",
    fit: "direct",
    note: "A servant is forbidden while standing — the Standing is persecuted.",
  },
  {
    ref: "98:5",
    id: "C1",
    title: "The religion of uprightness",
    translation:
      "And they were not commanded except to serve God, sincere in the religion for Him, turning upright, and to establish the Standing and give the zakah. And that is the religion of uprightness.",
    pole: "human",
    fit: "direct",
    note: "The minimal religion: sincere service, upright turning, the Standing, and zakah.",
  },
  {
    ref: "107:4-5",
    id: "E13",
    title: "Woe to those who stand",
    translation:
      "So woe to those who stand — those who are heedless of their Standing.",
    pole: "human",
    fit: "direct",
    note: "Woe to those who stand but are heedless — the form without the state.",
  },
  {
    ref: "111:3",
    id: "A22",
    title: "A fire of flame",
    translation: "He will be made to stand within a Fire of flame.",
    pole: "delivery",
    fit: "direct",
    note: "The name-tag pun: the father of flame is made to stand in a fire of flame.",
  },
];

const byRef = new Map(arabic.map((entry) => [entry.ref, entry]));

const clusterOf = (id: string): Cluster => id.charAt(0) as Cluster;

export const verses: Verse[] = content.map((item) => {
  const a = byRef.get(item.ref);
  if (!a) {
    throw new Error(`Missing Arabic text for ${item.ref}`);
  }
  return {
    ...item,
    surah: a.surah,
    surahName: surahName(a.surah),
    forms: a.forms,
    arabic: a.arabic,
    slug: item.ref.replace(/:/g, "-"),
    cluster: clusterOf(item.id),
  };
});

if (verses.length !== arabic.length) {
  throw new Error(
    `Verse count mismatch: ${verses.length} content entries vs ${arabic.length} Arabic entries`,
  );
}

export const POLE_META: Record<
  Pole,
  { label: string; short: string; description: string; accent: string }
> = {
  delivery: {
    label: "Delivery",
    short: "Imposed standing",
    description:
      "An assigned standing within the reach of fire — imposed, sustained, settled. The root's fire-verbs.",
    accent: "var(--pole-delivery)",
  },
  divine: {
    label: "Divine",
    short: "God stands toward",
    description:
      "God's own standing toward a person — granted, merciful, bringing out of darkness into light.",
    accent: "var(--pole-divine)",
  },
  human: {
    label: "Human",
    short: "The established standing",
    description:
      "The commanded standing: established, timed, voiced, washed, guarded, and lived.",
    accent: "var(--pole-human)",
  },
  site: {
    label: "Site",
    short: "Assigned space",
    description:
      "The space assigned to standing with the Name — muṣallā, miḥrāb, houses of standing.",
    accent: "var(--pole-site)",
  },
  bridge: {
    label: "Bridge",
    short: "The hinge",
    description:
      "The same stem turned toward God: after purification and Name-mention, the human stands.",
    accent: "var(--pole-bridge)",
  },
};

export const CLUSTER_META: Record<
  Cluster,
  { label: string; description: string }
> = {
  A: {
    label: "A — Fire",
    description: "The root-language anchors: imposed standing within fire.",
  },
  B: {
    label: "B — Divine",
    description: "God and the angels stand toward people.",
  },
  C: {
    label: "C — Commanded",
    description: "Prophets, covenants, and the command to establish.",
  },
  D: {
    label: "D — Life",
    description: "The Standing as institution, clock, law, and community.",
  },
  E: {
    label: "E — Transformation",
    description: "Does the Standing transform? The check by its fruit.",
  },
};

export const verseBySlug = new Map(verses.map((v) => [v.slug, v]));

export const COUNTS = {
  verses: verses.length,
  occurrences: 118,
  forms: 42,
  clusters: 5,
  direct: verses.filter((v) => v.fit === "direct").length,
  nuance: verses.filter((v) => v.fit === "nuance").length,
};
