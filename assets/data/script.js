
function convert(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];

    var numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');

    if (num === 0) return 'zero';

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
        else
            return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + ' thousand';
        if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
        return ones[numString[0]] + ' thousand ' + convert(end);
    }
}
const subtitles = [
    `the basics`,
    `adjectives`,
    `verbs and objects`,
    `more vocabulary`,
    `this and that`,
    `prepositions and locations`,
    `questions, commands and names`,
    `colorful language`,
    `complex adjectives and contexts`,
    `pre-verbs and time`,
    `numbers`,
    `the final countdown`,
]

const videoIds = [
    `4L-dvvng4Zc`,
    `KTbnGX6G_P4`,
    `R7GOqki9vVE`,
    `NiyBYZEykfc`,
    `55gOHqHvX3U`,
    `0RiLRNkah0o`,
    `tYZxkQc27Xw`,
    `oGysrX1gIBU`,
    `hi9wo9XrZ24`,
    `poDGljnC_ec`,
    `QWAcT3Qv0hU`,
    `wT4QCdmHEjU`,
]

const exercises = [
    {
        type: 't',
        problems: [
            {english: "Animals are important.", toki: "soweli li suli."},
            {english: "He is little.", toki: "ona li lili."},
            {english: "I am great.", toki: "mi suli."},
            {english: "It is a dog", toki: "ona li soweli."},
            {english: "You are bad.", toki: "sina ike."}
        ]
    },
    {
        type: 't',
        problems: [
            {english: 'My wife is good.', toki: 'meli mi li pona.'},
            {english: "Your husband is (big / important).", toki: 'mije sina li suli.'},
            {english: 'My dad is strong.', toki: 'mama mije mi li wawa.'},
            {english: 'All animals are good.', toki: 'soweli ale li pona.'},
            {english: 'Fruits are important food.', toki: 'kili li moku suli.'},
            {english: 'My wife is adorable.', toki: 'meli mi li suwi.'},
            {english: 'All warriors are bad.', toki: 'jan utala ale li ike.'},
            {english: 'My friends are your friends.', toki: 'jan pona mi li jan pona sina.'},
            {english: 'Your son is strong.', toki: 'jan lili mije sina li wawa.'},
            {english: 'The small fruit is sweet.', toki: 'kili lili li suwi.'}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "A child is crying (emitting eye water).", toki: "jan lili li pana e telo lukin."},
            {english: "(He / she / they) look at a document.", toki: "ona li lukin e lipu."},
            {english: "The bad animal is attacking a woman.", toki: "soweli ike li utala e meli."},
            {english: "The warrior is eating a big (fruit / vegetable / mushroom).", toki: "jan utala li moku e kili suli."},
            {english: "Little animals are drinking water.", toki: "soweli lili li moku e telo."},
            {english: "I am (watering / cleaning) something big.", toki: "mi telo e ijo suli."},
            {english: "She loves every person.", toki: "ona li olin e jan ale."},
            {english: "The bathroom ('house of water') is good.", toki: "tomo telo li pona."},
            {english: "I hand out documents.", toki: "mi pana e lipu."},
            {english: "An evil warrior is looking at your house.", toki: "jan utala ike li lukin e tomo sina."},
            {english: "My tools are working well.", toki: "ilo mi li pali pona."}
        ]
    },
    {
        type: 't',
        problems: [
            {
                english: "I don't eat animals (i.e. meat).", 
                toki: "mi moku ala e soweli."
            },
            {english: "Your friend is talking about the land and the water.", toki: "jan pona sina li toki e ma, e telo."},
            {english: "An important person is looking at the city and writing things down.", toki: "jan suli li lukin e ma tomo, li sitelen e ijo."},
            {english: "The land has weeds ('bad plants')", toki: "ma li jo e kasi ike."},
            {english: "Small bugs are important and good.", toki: "pipi lili li suli, li pona."},
            {english: "Your city doesn't have any workers", toki: "ma tomo sina li jo ala e jan pali."},
            {english: "My husband doesn't work, (only) eats and fights.", toki: "mije mi li pali ala, li moku, li utala."},
            {english: "My homeland ('original land') is large.", toki: "ma mama mi li suli."},
            {english: "Your painting looks good.", toki: "sitelen sina li pona lukin."},
            {english: "My friend has fish and fruit and makes good food.", toki: "jan pona mi li jo e kala e kili li pali e moku pona."},
        ]
    },
    {
        type: 't',
        problems: [
            {english: "Your community is very different.", toki: "kulupu sina li ante mute."},
            {english: "A bad person broke my tools.", toki: "jan ike li pakala e ilo mi."},
            {english: "I built this house.", toki: "mi pali e tomo ni."},
            {english: "The good warriors protect this community.", toki: "jan utala pona mute li awen e kulupu ni."},
            {english: "The large community endures and grows itself.", toki: "kulupu suli li awen, li suli e ona."},
            {english: "Warm food is very good.", toki: "moku seli li pona mute."},
            {english: "Sleeping children don't make noises", toki: "jan lili lape li kalama ala."},
            {english: "The workers said that they are strong and tough.", toki: "jan pali mute li toki e ni: ona li wawa, li kiwen."},
            {english: "You look different.", toki: "sina ante lukin."},
            {english: "This house preserves the heat.", toki: "tomo ni li awen e seli."},
        ]
    },
    {
        type: 't',
        problems: [
            {english: "They are speaking to their father on a phone.", toki: "ona li toki tawa mama mije ona kepeken ilo toki."},
            {english: "I don't like sweet food / Sweet food is bad for me.", toki: "moku suwi li ike tawa mi."},
            {english: "My homeland is fighting (against) a neighboring country.", toki: "ma mama mi li utala e ma poka."},
            {english: "Your sister is my friend.", toki: "meli sama sina li jan pona mi."},
            {english: "A small bug is on your face.", toki: "pipi lili li lon sinpin sina."},
            {english: "You broke my car.", toki: "sina pakala e tomo tawa mi."},
            {english: "The man feeds ('gives out food to') children.", toki: "(jan) mije li pana e moku tawa jan lili."},
            {english: "I dislike this chat room ('talking structure').", toki: "tomo toki ni li ike tawa mi."},
            {english: "I fixed the house because of you.", toki: "mi pona e tomo tan sina."},
            {english: "They are reading books in the library.", toki: "ona li lukin e lipu lon tomo lipu."}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "Don't eat this fruit/vegetable / mushroom, Lisa!", toki: "jan Lisa o, moku ala e kili ni a!"},
            {english: "The Kansas team defeated all other teams.", toki: "kulupu Kensa li anpa e kulupu ale ante."},
            {english: "Don't think that workers are lowly before the leaders.", toki: "o toki insa ala e ni: jan pali li anpa tawa jan lawa."},
            {english: "Why did you do this?", toki: "sina pali e ni tan seme?"},
            {english: "My (stomach / internal organs) are hurt. Help me!", toki: "insa mi li pakala. o pona e mi a!"},
            {english: "I don't think gods exist.", toki: "mi toki insa e ni: jan sewi li lon ala."},
            {english: "Don't make noise in the library.", toki: "o kalama ala lon tomo lipu."},
            {english: "My boss tells me not to sleep in the office.", toki: "jan lawa mi li toki e ni: o lape ala lon tomo pali."},
            {english: "Your brother looks just like you.", toki: "jan sama mije sina li sama mute lukin sina."},
            {english: "Don't go outside.", toki: "o tawa ala lon ma."}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "I like the color red.", toki: "kule loje li pona tawa mi."},
            {english: "Give me the orange (orange-colored) juice.", toki: "o pana e telo kili loje jelo tawa mi."},
            {english: "I like how your flowers look.", toki: "kasi kule sina li pona lukin tawa mi."},
            {english: "I don't drink alcohol", toki: "mi moku ala e telo nasa."},
            {english: "Don't kill them!", toki: "o moli ala e ona a!"},
            {english: "Your house is bigger than mine.", toki: "tomo sina li suli. tomo mi li lili."},
            {english: "I like blue sky more than gray sky.", toki: "sewi laso li pona mute tawa mi. sewi pimeja walo li pona lili tawa mi."},
            {english: "Ew, gross! This food is terrible!", toki: "jaki a! moku ni li ike mute a!"},
            {english: "I'm in the red house.", toki: "mi lon tomo loje."},
            {english: "The drunk person doesn't listen to me.", toki: "jan nasa li kute ala e mi."}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "I don't like communities with lots of people.", toki: "kulupu pi jan mute li ike tawa mi."},
            {english: "In this house, I speak toki pona and English.", toki: "tomo ni la mi toki kepeken toki pona, mi toki kepeken toki Inli."},
            {english: "If you eat raw meat, it will be bad for your body.", toki: "sina moku e soweli lete la ona li ike tawa sijelo sina."},
            {english: "Their music ('entertaining sounds') is very good.", toki: "kalama musi ona li pona mute."},
            {english: "If you misuse ('use badly') the tools, they will break ('be broken').", toki: "sina kepeken ike e ilo la ona li pakala."},
            {english: "If it's dark outside, stay at home.", toki: "sewi li pimeja la o awen lon tomo."},
            {english: "He is in the bar ('house of crazy water').", toki: "ona li lon tomo pi telo nasa."},
            {english: "The loud person ('person of large sounds') says weird things.", toki: "jan pi kalama suli li toki e ijo nasa."},
            {english: "That blonde ('woman of white hair') is good-looking.", toki: "meli ni pi linja walo li pona lukin."},
            {english: "If you don't talk to people, you won't have friends.", toki: "sina toki ala tawa jan la sina jo ala e jan pona."}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "Open the door.", toki: "o open e lupa."},
            {english: "In a moment, I'll head towards you.", toki: "tenpo lili la mi kama tawa sina."},
            {english: "I want to go to other countries.", toki: "mi wile tawa ma ante."},
            {english: "Can you come to my house?", toki: "sina ken ala ken kama tawa tomo mi?"},
            {english: "If you're coming to my house, use Lincoln Street.", toki: "sina kama tawa tomo mi la o kepeken e nasin Linkan."},
            {english: "If you're on a hill, you can see many things.", toki: "sina lon nena la sina ken lukin e ijo mute."},
            {english: "Do you know how to do it?", toki: "sina sona ala sona pali e ona? / sina sona pali e ona anu seme?"},
            {english: "Everything is possible.", toki: "ale li ken."},
            {english: "Can you open the door?", toki: "sina ken ala ken open e lupa? / sina ken open e lupa anu seme?"},
            {english: "If you don't listen to experts ('people of knowledge'), your work will be bad.", toki: "sina kute ala e jan sona la pali sina li ike"},
            {english: "I work on this for a long time.", toki: "tenpo suli la mi pali e ni. / mi pali e ni lon tenpo suli."},
            {english: "I'm still learning toki pona", toki: "mi awen kama sona e toki pona."}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "I would like to trade these three large animals.", toki: "mi wile esun e soweli suli tu wan ni."},
            {english: "Yesterday, I was in school/college/university ('house of knowledge').", toki: "tenpo suno pini la mi lon tomo sona."},
            {english: "One month ago, it was cold.", toki: "tenpo mun wan pini la lete li lon."},
            {english: "I like you the most.", toki: "sina pona nanpa wan tawa mi."},
            {english: "The rain continued for 40 days.", toki: "tenpo suno mute mute la telo sewi li awen."},
            {english: "I live in house #27 on Washington Street.", toki: "mi lon tomo nanpa mute luka tu pi nasin Wasintan."},
            {english: "The TV ('device of moving pictures') said tomorrow will be sunny.", toki: "ilo pi sitelen tawa li toki e ni: tenpo suno kama la suno li lon."},
            {english: "It will be cold tonight.", toki: "tenpo pimeja ni la lete li lon"},
            {english: "May ('the 5th month') is lovely.", toki: "(tenpo mun / tenpo sike mun) nanpa luka li (pona / suwi)."},
            {english: "You have a lot of musical instruments!", toki: "sina jo e ilo mute pi kalama musi a!"}
        ]
    },
    {
        type: 't',
        problems: [
            {english: "If you want to learn toki pona, the official book is the best way to do so.", toki: "sina wile kama sona e toki pona la pu li nasin pona nanpa wan tawa ni."},
            {english: "Today I feel very good.", toki: "tenpo suno ni la mi pilin pona mute."},
            {english: "Would you want to eat some pizza?", toki: "sina wile ala wile moku e pan sike?"},
            {english: "My bed ('sleeping surface') is broken. I can't sleep because of it.", toki: "supa lape mi li pakala. mi ken ala lape tan ni."},
            {english: "Marie Kondo says: get rid of unnecessary things.", toki: "jan Mali Konto li toki e ni: o weka e ijo ike sina."},
            {english: "There are three types of matter. These are: solids, liquids and gases.", toki: "kulupu ijo tu wan li lon. ona li kulupu kiwen, li kulupu telo, li kulupu kon."},
            {english: "But the princess is in another castle.", toki: "taso, meli lili pi jan lawa li lon tomo awen ante."},
            {english: "I saw a dragon ('big green fire lizard')!", toki: "mi lukin e akesi seli laso suli a!"},
            {english: "Hello! How are you? ('How do you feel?')", toki: "toki! sina pilin seme?"},
            {english: "The hunter gave us lots of meat and fruit.", toki: "jan alasa li pana e moku soweli mute e kili mute tawa mi mute."},
            {english: "I'm reading a document. Very soon (in a short time), it will end.", toki: "mi lukin e lipu. tenpo lili la ona li pini."},
            {english: "I can speak toki pona very well.", toki: "mi ken toki pi pona mute kepeken toki pona."}
        ]
    }
]

const vocab = [
    [
        {"word":"mi","meaning":"I, me, us"},
        {"word":"sina","meaning":"you"},
        {"word":"ona","meaning":"he, she, they, it"},
        {"word":"li","meaning":"(between subj. and verb/adj.)"},
        {"word":"pona","meaning":"good, simple, to improve, to fix"},
        {"word":"ike","meaning":"bad, evil, complex, unnecessary"},
        {"word":"suli","meaning":"big, great, important, to grow"},
        {"word":"lili","meaning":"small, few, young, to shrink"},
        {"word":"kili","meaning":"fruit, vegetable, mushroom"},
        {"word":"soweli","meaning":"land mammal, animal"}
    ],
    [
        {"word":"ala","meaning":"no, not, zero"},
        {"word":"ale/ali","meaning":"all, everything, universe"},
        {"word":"utala","meaning":"fight, battle, challenge"},
        {"word":"wawa","meaning":"strong, powerful"},
        {"word":"suwi","meaning":"sweet, cute, adorable"},
        {"word":"jan","meaning":"person, people, humanity"},
        {"word":"mama","meaning":"parent, ancestor, creator, origin"},
        {"word":"meli","meaning":"woman, female, feminine, wife"},
        {"word":"mije","meaning":"man, male, masculine"},
        {"word":"moku","meaning":"food, to eat"}
    ],
    [
        {"word":"e","meaning":"(specifies an object)"},
        {"word":"ijo","meaning":"thing, object"},
        {"word":"ilo","meaning":"tool, machine, device"},
        {"word":"lipu","meaning":"book, document, paper"},
        {"word":"lukin","meaning":"eye, to look, to see, to seek to"},
        {"word":"olin","meaning":"love, compassion, affection"},
        {"word":"pali","meaning":"to do, to work, to make, labor"},
        {"word":"pana","meaning":"to give, to send, to emit"},
        {"word":"telo","meaning":"water, fluid, to water, to clean"},
        {"word":"tomo","meaning":"home, room, structure"}
    ],
    [
        {"word":"jo","meaning":"to have/carry/contain/hold"},
        {"word":"kala","meaning":"fish, marine animal, sea creature"},
        {"word":"kasi","meaning":"plant, grass, herb, leaf"},
        {"word":"pipi","meaning":"insect, bug"},
        {"word":"sitelen","meaning":"symbol, image, writing, to draw"},
        {"word":"toki","meaning":"speech, to talk, language"},
        {"word":"waso","meaning":"bird, flying creature"},
        {"word":"ma","meaning":"earth, land, outdoors, territory"},
        {"word":"kiwen","meaning":"hard object, metal, stone, solid"},
        {"word":"ko","meaning":"powder, clay, semi-solid"}
    ],
    [
        {"word":"ante","meaning":"different, changed, to change"},
        {"word":"awen","meaning":"keep, stay, endure, protect, continue"},
        {"word":"en","meaning":"and (combines subjects)"},
        {"word":"kalama","meaning":"sound, noise, to read/make sound"},
        {"word":"kulupu","meaning":"group, community, society"},
        {"word":"lape","meaning":"sleep, rest"},
        {"word":"mute","meaning":"many, more, quantity"},
        {"word":"ni","meaning":"this, that"},
        {"word":"pakala","meaning":"break, mistake, (generic curse)"},
        {"word":"seli","meaning":"heat, warmth, chemical reaction"}
    ],
    [
        {"word":"kepeken","meaning":"to use, using, with the help of"},
        {"word":"lon","meaning":"in, at, on, true, present, exist"},
        {"word":"sama","meaning":"same as, similar, like, sibling"},
        {"word":"tan","meaning":"from, because of, cause, reason"},
        {"word":"tawa","meaning":"to, for, moving, from persp. of"},
        {"word":"sewi","meaning":"up, above, sky, divine, sacred"},
        {"word":"noka","meaning":"foot, leg, bottom, under"},
        {"word":"poka","meaning":"hip, side, next to, nearby"},
        {"word":"monsi","meaning":"back, behind, rear, butt"},
        {"word":"sinpin","meaning":"face, foremost, front, wall"}
    ],
    [
        {"word":"a","meaning":"(emotional interjection)"},
        {"word":"anu","meaning":"or"},
        {"word":"mu","meaning":"(any animal sound)"},
        {"word":"o","meaning":"(addressing people, commands)"},
        {"word":"seme","meaning":"what? (for questions)"},
        {"word":"kute","meaning":"listen, hear, obey, ear"},
        {"word":"nimi","meaning":"word, name"},
        {"word":"lawa","meaning":"head, control, own, rule, main"},
        {"word":"anpa","meaning":"lowly, humble, dependent, to conquer/defeat, to bow down"},
        {"word":"insa","meaning":"inside, contents, center, stomach"}
    ],
    [
        {"word":"kule","meaning":"color, colorful"},
        {"word":"jelo","meaning":"yellow (and its shades)"},
        {"word":"laso","meaning":"blue, green (and its shades)"},
        {"word":"loje","meaning":"red (and its shades)"},
        {"word":"pimeja","meaning":"black, dark"},
        {"word":"walo","meaning":"white, bright/light"},
        {"word":"nasa","meaning":"unusual, strange, crazy, drunk"},
        {"word":"jaki","meaning":"dirty, disgusting, toxic"},
        {"word":"moli","meaning":"death, dying"},
        {"word":"unpa","meaning":"sexual (or marital) relations"}
    ],
    [
        {"word":"pi","meaning":"\"of\" (regroups adjectives/adverbs)"},
        {"word":"la","meaning":"\"if/when\" (introduces context)"},
        {"word":"luka","meaning":"hand, arm"},
        {"word":"linja","meaning":"long flexible object, string, rope, hair"},
        {"word":"palisa","meaning":"long solid object, branch, stick"},
        {"word":"selo","meaning":"outer form, shell, skin, boundary"},
        {"word":"sijelo","meaning":"body, physical state, torso"},
        {"word":"len","meaning":"cloth, clothes, layer of privacy"},
        {"word":"lete","meaning":"cold, raw"},
        {"word":"musi","meaning":"entertaining, artistic, fun, game"}
    ],
    [
        {"word":"kama","meaning":"coming, future, event"},
        {"word":"ken","meaning":"can, ability, possibility"},
        {"word":"open","meaning":"start, begin, open"},
        {"word":"pini","meaning":"end, finish, close"},
        {"word":"sona","meaning":"knowledge, to know (how to)"},
        {"word":"wile","meaning":"want, need, desire"},
        {"word":"lupa","meaning":"hole, door, window"},
        {"word":"nasin","meaning":"path, road, directive, way"},
        {"word":"nena","meaning":"hill, mountain, button, bump,nose"},
        {"word":"tenpo","meaning":"time, moment"}
    ],
    [
        {"word":"wan","meaning":"one, part (of smth), united"},
        {"word":"tu","meaning":"two, divide, divided"},
        {"word":"sike","meaning":"circle, round, ball, year"},
        {"word":"mani","meaning":"money, large domesticated animal"},
        {"word":"esun","meaning":"trade, market, shop, exchange"},
        {"word":"mun","meaning":"moon, star, night sky object"},
        {"word":"nanpa","meaning":"number, (ordinal indicator)"},
        {"word":"poki","meaning":"box, container, bowl, cup, drawer"},
        {"word":"sin","meaning":"new, additional, fresh, extra"},
        {"word":"suno","meaning":"sun, light, brightness, shine"}
    ],
    [
        {"word":"akesi","meaning":"\"non-cute\" animal, lizard"},
        {"word":"alasa","meaning":"to hunt, to gather"},
        {"word":"kon","meaning":"air, essence, spirit, ephemeral"},
        {"word":"pan","meaning":"bread, grain, corn, rice, pizza"},
        {"word":"pilin","meaning":"heart, feeling, touch, sense"},
        {"word":"pu","meaning":"the official toki pona book, interacting with it"},
        {"word":"supa","meaning":"horizontal surface"},
        {"word":"taso","meaning":"but, however, only"},
        {"word":"uta","meaning":"mouth, lips"},
        {"word":"weka","meaning":"absent, away, remote, get rid of"}
    ]
]

example = {
    type: 't',
    problems: [
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""},
        {english: "", toki: ""}
    ]
}

const texts = [
    `
    ## Spelling and Punctuation
    
    The language *toki pona* only uses 14 letters of the Latin alphabet, and all of
    these letters have consistent pronunciations. 
    
    These are: a,e,i,j,k,l,m,n,o,p,s,t,u,w.
    
    You might have noticed that all these letters are lowercase. This is because all
    toki pona words are spelled in lowercase, even at the start of sentences.
    
    The consonants (j,k,l,m,n,p,s,t,w) use the same sounds as those in English, with
    the exception of "j", which instead sounds like the English "y".
    
    The vowels (a,e,i,o,u) are a bit more complicated to explain (but simpler to
    pronounce). Unlike English, every vowel uses the same sound in all words. If you
    know how to pronounce the vowel sounds in Spanish, Japanese or Esperanto, then
    you can pronounce them the same way in toki pona.
    
    For examples of English words with corresponding pronunciations:
    
    * **a** sounds like the "a" in the word "far" or (in some dialects of English) 
      the "u" in "up" or the "a" in "bath".
    
    * **e** sounds like the "e" in the word "bet".
    
    * **i** sounds like the "i" in the word "bit" or "ee" in "wee".
    
    * **o** sounds like the "o" in the word "or". 
    
    * **u** sounds like the "oo" in "oops" or "moon".
    
    > #### info
    > The "International Phonetic Alphabet" (IPA) is a common way to write
    > down specific pronunciations of words and phrases in any language. 
    >
    > It uses a version of the Latin alphabet with lots of additional characters
    > added. For example, the IPA pronunciation of the English word "language" is
    > /??l??????w??d????/, but in toki pona, every single letter's pronunciation _is_ its
    > IPA symbol! So "toki pona" is pronounced /toki pona/.
    
    Since there are so few sounds, the way they can be pronounced can be very
    flexible. For example, some might substitute the sounds "p,t,k" with "b,d,g".
    Such a shift would cause a lot of ambiguity or confusion in other languages, but
    toki pona's sounds were chosen to be common to many languages and easy to
    distinguish.
    
    All toki pona words are pronounced with stress on their first syllable.

    ## Basic Structure

    Let's start with the most basic sentence structure in toki pona:

    > [noun] li [noun / adjective].
    
    In English, this would mean:
    
    > [Noun] is (a) [noun].
    
    or 
    
    > [Noun] is [adjective].
    
    For example:
    
    > ona li suli. - (He/she/it/they) is (big/great/important).
    
    As you can see, a single word can have multiple related meanings. In practical
    usage, both "ona" and "suli" will be more clear based on context.
    
    > kili li pona. - (Fruit/vegetable/mushroom)(s) (is/are) good.
    
    And in this case, it doesn't make a lot of sense to use any meaning of "pona"
    other than "good".
    
    There is an exception to the rule. If the subject is "mi" or "sina", then it is
    not necessary to add the word "li". So, instead of
    
    > sina li suli. - You are important.
    
    it's
    
    > sina suli. - You are important.`,
    `To define subjects and adjectives more clearly, you can add extra words as
    adjectives. In toki pona, an adjective that modifies a noun stands after the
    noun in question. This is unlike English, where adjectives go before nouns, but
    similar to French. So, for example:
    
    > jan wawa -- strong person
    
    Many of the nouns covered before can also function as adjectives. For example,
    the pronouns "mi", "sina" and "ona" can serve as possessives.
    
    > mama mi -- my parent
    
    > soweli sina -- your animal
    
    > moku ona -- his/her/their food 
    
    In addition, adjectives can function as nouns:
    
    > wawa sina -- your strength
    
    > suli ona -- his/her/their greatness/size
    
    > #### info
    > Of note is the phrase "jan pona", which literally means "good person", but is
    > widely (and officially) accepted to also mean "friend".
    
    Several adjectives can be added at once:
    
    > soweli lili suwi -- cute pet ("little animal")
    
    Here are some example sentences that demonstrate this:
    
    > mama mi li pona. - My parents are good.
    
    > kili suwi li moku pona. - Sweet fruits are good food.
    
    > jan utala li wawa. - The warrior ("fighting person") is strong.
    
    > jan lili mi li suwi. - My children ("young people") are cute.
    
    > soweli lili li wawa ala. - Little animals are not strong.
    
    > #### warning
    > It is worth noting that the particle "li" is only removed if the subject is
    > just the word "mi" or "sina". If it has any adjectives added to it, then the
    > particle is used.
    `,
    `To add a verb to the sentence, use the following structure:

    > [noun] li [verb]
    
    For example,
    
    > mije li pali. - A man is working. / A man works.
    
    Both the noun and the verb can have adjectives added after it. If added after a
    verb, the adjective functions as an adverb.
    
    > jan wawa li pali pona. - A strong person is working well.
    
    > #### warning
    > There is no way to determine whether a word in such a sentence is an
    > adjective or a verb. For example, the phrase "mi moku" can mean either "I am
    > eating" or "I am food".
    
    
    > #### info
    > Verbs don't have any tense information in them. A way to specify time will be
    > explained in a later page.
    
    To add an object -- the thing that the verb applies to -- use the particle "e"
    for a following structure:
    
    > [subject] li [verb] e [object]
    
    > jan wawa li pali e tomo. - A strong person is (building/working on) a house.
    
    Objects can also have adjectives added to them.
    
    > jan pali li pana e moku pona. - A worker gives out good food.
    
    Here are some sentences:
    
    > jan pona mi li pona e ilo lukin. - My friend is (improving/fixing) a looking
    > instrument (glasses, binoculars, microscope, etc.).
    
    > mi telo e moku. - I clean the food.
    
    > mi olin e meli mi. - I love my wife.
    
    > #### warning
    > 
    > Since the word "lukin" itself describes the act of seeing someone, rather than
    > their appearance, complimenting someone on the latter would usually be expressed
    > as:
    > 
    > > sina pona lukin. - You look good (are "good visually").
    >`,
    `This page will only cover the ten new words and a few small concepts. 

    > jan pali li telo e kasi. - The worker is watering the plants.
    
    > jan wawa li jo e kiwen suli. - The strong person is carrying big rocks.
    
    > telo suli li jo e kala. - The sea/ocean ("big water") has fish.
    
    > mi sitelen e toki sina. - I'm writing down your speech.
    
    > waso lili li moku e pipi. - The small bird eats bugs.
    
    > ma tomo mi li suli. - My city ("housed land") is big.
    
    ## Topics of conversation
    
    > #### warning
    > There is no consensus on which of these ways is more correct, but
    > each has its own positives and negatives. Everything in this entire heading is
    > one big "dialectal difference", and the author's opinions on the differences
    > will follow.
    
    There are two commonly used ways to specify the topic of conversation when using
    the word "toki".
    
    The simpler one, as it was used in "o kama sona e toki pona!", is to specify
    the topic as an adjective:
    
    > ona li toki meli. -- They talk about women.
    
    However, it introduces uncertainty when actual adjectives that apply to "toki"
    are introduced. Does "toki ike" mean "speak badly" or "talk about evil"?
    
    The official book is rather unclear on the subject, but it uses "toki e ijo" to
    mean "communicate things" and "toki wawa" as "testify" ("speak strongly"),
    rather than "talk about strength".
    
    The extended version of this approach, as also commonly used in the toki pona
    community, is to use the topic as an object:
    
    > sina toki e kala. -- You talk about fish.
    
    While this is sometimes considered a rather unconventional use of the particle
    "e" for some, it is less ambiguous and more flexible. For clarity's sake, this
    option will be used throughout the course.
    
    ## Example sentences
    
    And here's some sentences that use interesting phrases.
    
    > jan pali li toki utala e tomo mi. - The worker criticizes ("talks in a
    > fighting way about") my house.
    
    > ona li toki ike e jan pona mi. - They (insult / speak bad things about) my
    > friend(s).
    
    You can put several verbs and several objects into one sentence by adding extra
    particles "li" or "e" followed by their verbs or objects.
    
    > meli li toki e soweli, e waso. - A woman is talking about land animals and
    > birds.
    
    > jan pali li pona e ilo, li lukin e lipu. - A worker fixes the device and looks
    > at (reads) a document.
    
    ## Phrases
    
    The word "toki", when used by itself, is a common greeting:
    
    > toki! -- Hello!`,
    `Before we discover a whole new type of words and new grammar, let's fill in some
    blanks.
    
    The word "en" lets one combine several subjects in one sentence: 
    
    > mi en sina li moku. -- You and I are eating.
    
    Note that it is _not_ used to combine several verbs or objects -- the way to do
    that was explained on [page 4](4.html).
    
    The word "mute" allows to specify whether the subject (or object) is singular or
    plural.
    
    > jan utala mute -- many warriors
    
    > mi mute -- we, us
    
    Here are some example sentences:
    
    > jan lili mute li lape. -- The children are sleeping.
    
    > kiwen suli li pakala e tomo lipu. -- A big rock damaged the library ("house of
    > books").
    
    > mi pakala lili. -- I made a little mistake.
    
    > ilo sina li kalama mute ike. -- Your instrument is making lots of bad noise.
    
    ## The word "ni"
    
    The simplest use of the word "ni" is to mean "this" or "that":
    
    > kulupu ni li pona mute. -- This community is very good.
    
    However, it is much more powerful than that. The word "ni" can also be used to
    create more complex sentences.
    
    It can be used to talk about what other people say (or even quote them,
    depending on context):
    
    > jan lili li toki e ni: sina pona. -- The child said that you're good.
    
    > ona li toki e ni: "toki! sina pona lukin." -- They said: "Hello! You look
    > good."
    
    Or it can be used to provide even more detailed descriptions of subjects or
    objects.
    
    > jan pali ni li pali e tomo mi: ona li jo e kiwen mute. -- The worker with lots
    > of rocks built my home. ("This worker built my home: they have lots of
    > rocks.")`,
    `Prepositions are words that are attached to other parts of the sentence in order
    to express a place or time (more on that in the future) or a specific detail
    about the action.
    
    In toki pona, the words "kepeken", "lon", "sama", "tan" and "tawa" are used as
    prepositions, by being  added at the end of the sentence without any extra
    particles.
    
    Here are some examples of all five of these words, both as prepositions and as
    regular words:
    
    > mi pona e tomo kepeken ilo mi. -- I am repairing the house using my tools.
    
    > mi toki kepeken toki pona. -- I speak in toki pona.
    
    > sina kepeken e ilo sitelen. -- You are using a writing/drawing tool (pen,
    > pencil, brush).
    
    > mi lon tomo sina. -- I am in your house.
    
    > jan ike li kalama mute lon tomo lipu. -- A bad person is being very noisy
    > in the library.
    
    > ona li toki e ijo lon. -- He/she/they speak the truth ("talk about things that
    > exist").
    
    > mi en sina li sama. -- You and I are similar.
    
    > meli sama mi li pona. -- My sister is good.
    
    > kiwen lili li sama lukin pipi. -- The pebble ("small rock") looks like a bug.
    
    > mi lape tan ni: mi jo ala e wawa. -- I sleep, because i don't have any energy.
    
    > mi tawa tan tomo mi. -- I am leaving my house.
    
    > ona li awen lon tomo lipu. -- They stayed in the library.
    
    > tomo tawa mi li pona. -- My car ("moving house/structure") is good.
    
    > mi tawa tomo moku. -- I am going to the restaurant ("house of food").
    
    The word "tawa" can also express perspective.
    
    > sina pona tawa mi. -- I like you. ("You are good for me.")
    
    > #### warning
    > Since "tawa" can be both an adjective and a preposition, certain phrases can
    > be ambiguous. For example, "tomo tawa mi" can mean both "my car" and "a house,
    > from my perspective". The specific meaning will depend on context.
    
    And here are some examples of the location words:
    
    > waso mute li lon sewi. -- Many birds are in the sky.
    
    > mi awen lon tomo mi. -- I am staying in my house.
    
    > mi toki tawa jan sewi. -- I speak to a (deity/angel/someone divine/(possibly
    > literally) man in the sky).
    
    > mi tawa kepeken noka mi. -- I am moving on foot ("using my legs").
    
    > kiwen lili li lon noka mi. -- A small rock is below me.
    
    > mi tawa lon poka sina. -- I walk beside you.
    
    > jan poka li ike tawa mi. -- I don't like my neighbor.
    
    > poka mi li pakala. -- My hip/side is broken.
    
    > ona li lon monsi sina. -- They are behind you.
    
    > jan utala mute li lon sinpin mi. -- Warriors are standing in front of me.
    
    > lipu suli li lon sinpin ni. -- An important document is on this wall.
    
    > sinpin ona li pona lukin. -- Their face looks good.
    
    ## Phrases
    
    There are two different ways to say "goodbye". If you are leaving, it's:
    
    > mi tawa! -- Goodbye! (literally "I'm going.")
    
    If someone else is leaving, it's:
     
    > tawa pona! -- Goodbye! (literally "Good movement!")
    
    In fact, a lot of words followed by "pona" are used as greetings.
    
    > moku pona! -- Bon appetit! / Have a nice meal! (literally "Good food!")
    
    > lape pona! -- Good night! / Sweet dreams! (literally "Good sleep!")
    
    There is also a phrase that functions as many positive expressions, from "thanks" all the way to "peace be upon you":
    
    > pona tawa sina! (literally "Good to you!")
    `,
    `## Vocabulary notes

    The word "anpa"'s different verb meanings sound mutually exclusive, but the
    actual meaning changes depending on what word follows after that.
    
    If "anpa" is used as a verb with "e" and an object following it, then it
    means "to conquer" or "to defeat":
    
    * jan wawa li anpa e jan utala ike. -- The strong person defeated the bad
      warrior.
    
    However, if "anpa" is used without an object, or with a preposition like "tawa",
    then it means "to bow down":
    
    * jan pali li anpa tawa jan lawa. -- The worker bowed down to the boss.
    
    By itself, the word "anu" means "or":
    
    > ona li pona mute anu ike mute. mi sona ala. -- It is (either) very good or
      very bad. I don't know.
    
    ## Interjections and commands
    
    The word "a" functions like a emotional interjection, used to emphasize or add
    emotion to the sentence. It is usually either added at the end of a sentence or
    functions as a sentence on its own.
    
    > sina suwi a! -- You are so cute!
    
    More specifically, laughter is indicated with the sentence "a a a!" (ha ha ha!).
    
    The word "mu" substitutes for any sound made by any animal.
    
    The word "o" is used to address people and issue commands.
    
    When used on its own at the beginning of a sentence, it turns the rest of the
    message into a command.
    
    > o kute e mi! -- Listen to me!
    
    When used after a noun phrase, it addresses a person.
    
    > sina o! -- Hey, you!
    
    > jan ale o! -- Everybody!
    
    Both uses can be combined.
    
    > jan pali o, kepeken e ilo awen! -- Worker, use protective equipment!
    
    ## Questions
    
    There are two ways to ask questions in toki pona.
    
    If you want to ask a yes-or-no question, you phrase the sentence normally, but
    replace the word being questioned with a "[word] ala [word]" structure.
    
    > sina pona ala pona? -- Are you okay?
    
    There are no words for "yes" and "no", so to answer positively, you repeat the
    word being used, and to answer negatively, you add "ala".
    
    > pona. -- Yes.
    
    > pona ala. -- No.
    
    (From what I understand, this structure is similar to what is used in Mandarin.)
    
    > ona li pali ala pali? -- Are they working?
    
    > jan lili li moku ala moku? -- Are the children eating?
    
    Alternatively, you can add "anu seme" ("or what?") at the end of the sentence
    instead.
    
    > sina pona anu seme? -- Are you okay?
    
    For freeform questions, you start with a regular sentence and insert "seme" into
    the part you want to ask:
    
    > sina pali e seme? -- What are you (doing/working on)? ("You work on what?")
    
    > jan seme li pakala e ona? -- Who broke it? ("What person broke it?")
    
    > ijo ni li seme? -- What is this thing? ("This thing is what?")
    
    > sewi li laso tan seme? -- Why is the sky blue? ("Sky is blue because of what?")
    
    ## Names (unofficial words)
    
    So far, these pages only relied on native toki pona words to refer to things and
    people. But this is clearly not enough when you need to call someone by their
    name. For proper names, toki pona uses so-called "unofficial words". These are
    usually names of people, cities, countries, etc., taken from their native
    languages and adapted to toki pona's pronunciation rules. Unlike all toki pona
    words, they're spelled with the first letter capitalized.
    
    Unofficial words are always treated as adjectives, which means that before them
    is always a noun or a noun phrase describing what is being referred to.
    
    > jan Mimi -- (the person) Mimi
    
    > ma Kanata -- (the country) Canada
    
    > toki Inli -- (the language) English
    
    > ma tomo Napoli -- (the city) Naples
    
    Alternatively, the unofficial words can actually be used as adjectives:
    
    > jan Kanata -- a Canadian person
    
    Since there are multiple ways of matching native names to toki pona sounds,
    there may ultimately be several different unofficial names for the same city or
    country's name. (Although there are dictionaries that include lists of toki pona
    names for countries, cities and languages that people can use.)
    
    Also, people speaking toki pona are free to pick their own personal toki pona
    names, either by adapting the name from their native language or coming up with
    something new.
    
    > ### info
    > As you might have noticed, personal names are prefixed with "jan". People in
    > the toki pona community may refer to themselves with their toki pona name even
    > when using other languages, in which case they'll still add "jan" at the
    > beginning.
    >
    
    > #### warning
    > While this isn't the most correct option, it is okay in most cases
    > to not use unofficial words and just pronounce or spell the name how you would
    > do in your (or their) native language. For example, you can refer to a person
    > named Robert as "jan Lope" _or_ "jan Robert".
    
    ## Examples
    
    > o toki ala a! -- Shut up! ("Don't talk!")
    
    > sina pali ala pali e ni? -- Did you do this?
    
    > mi jan San. mi lon ma Mewika. -- I am John. I live in the United States.
    
    > nimi sina li seme? -- What is your name?
    
    > jan lawa mi li ike mute. -- (My boss / our leader) is very bad.
    
    > jan Lopin o, toki! -- Hi, Robin!`,
    `## Colors

    In toki pona, there are five basic color terms: "loje" (red), "jelo" (yellow),
    "laso" (blue and green), "pimeja" (black) and "walo" (white).
    
    These terms can be combined with each other, or words referring to natural
    things, to form other shades:
    
    > laso sewi -- blue ("sky green/blue")
    
    > laso kasi -- green ("plant green/blue")
    
    > loje jelo -- orange ("yellowish red")
    
    > jelo pimeja -- brown ("dark yellow")
    
    > walo pimeja -- gray ("dark white")
    
    > loje walo -- pink ("light red")
    
    ## Example sentences
    
    > kili loje lili li pona tawa mi. -- I like small red fruits (strawberries/raspberries?).
    
    > jan lili li pana e ko jaki tan monsi ona. -- The kid pooped himself.
    
    > jan Simu o, mije li moli. -- He's dead, Jim.
    
    > tomo ni li jo e jaki mute. ni li ike tawa mi a! -- This room is covered in
    > gross materials. I don't like it!
    
    > mije mi li unpa ala e jan ante. -- My husband is faithful ("doesn't have sex with other people").
    
    ## Comparative sentences
    
    While there are words in toki pona for "good" or "bad", there is no "better" or
    "worse". While there are words for "lots" and "little", there's no "more" or
    "less".
    
    To make a comparative statement, you instead split it into two sentences:
    
    > mi wawa. sina wawa lili. -- I am stronger than you. (I am strong.
    > You are slightly strong.)
    
    Of course, the degree of comparison can be adjusted by changing the difference
    between the adjectives.
    
    > mi wawa mute. sina wawa ala. -- I am way stronger than you. (I am very strong.
    > You are weak.)`,
    `Time to introduce two other particles in this language: "pi" and "la".

    ## pi
    
    The word "pi" works by grouping several adjectives or adverbs together.
    Normally, all modifiers in a phrase apply to the first word. For example:
    
    > jan wawa -- strong person
    
    > jan wawa ala -- no strong people
    
    If you need to say "weak people", you need to negate "wawa", but not "jan".
    That's where "pi" comes in handy:
    
    > jan pi wawa ala -- weak person/people ("of no strength")
    
    This also goes with other words:
    
    > jan wawa mute -- many strong people
    
    > jan pi wawa mute -- very strong person/people
    
    It is also useful for using common phrases:
    
    > jan toki utala -- a speaker warrior 
    
    > jan pi toki utala -- a critic
    
    > #### info
    > If you prefer using the "toki [adjective]" structure for describing topics of
    > conversation (see [page 4](4.html) for that), then "pi" would also be used for
    > specifying topics that use several words:
    >
    > > sina toki pi ma tomo mama sina. -- You talk about your hometown.
    >
    
    Including phrases that use unofficial words.
    
    > ma tomo Wasintan li ma tomo lawa pi ma Mewika. -- (the city of) Washington is
    > the capital ("main city") of the United States.
    
    > #### warning
    > While "pi" is often defined as similar to the English word "of", its usage is
    > different. It is only necessary when you're grouping several words together.
    > So, for example, "the language of good" is still "toki pona", rather than
    > "toki pi pona".
    
    ## la
    
    The word "la" allows to combine two sentences to form conditions and introduce
    context.
    
    > [sentence A] la [sentence B].
    
    > In the context of [sentence A], [sentence B].
    
    In the most common case, translates to something like:
    
    > If/when [sentence A], then [sentence B].
    
    For example:
    
    > moku ni li pona la mi pana e ona tawa sina. -- If this food is good, I'll give
    > it to you.
    
    > ona li moli la ni li ike tawa jan ale. -- If they die, it will be bad for
    > everybody.
    
    But there are also other uses. It can replace "lon [phrase]" when talking about
    location or time (more on that in the [next page](10.html):
    
    > o kalama ala lon tomo lipu. -- Be quiet in the library.
    
    > tomo lipu la o kalama ala. -- In the library, be quiet.
    
    It can also introduce perspective, much like "tawa":
    
    > ni li pona tawa mi. -- This is good for me. / I like it.
    
    > mi la ni li pona. -- (From my point of view / In my opinion), this is good.
    
    Or be used to link multiple sentences:
    
    > tan ni la... -- Because of this, ...
    
    > ni la... -- In the context of all this, ...
    
    > #### info
    > The usage of "la" is very flexible, and some people use it for cases other
    > than those described before. Since toki pona is a very context-sensitive
    > language, the most important rule is just "try to get your point across".`,
    `## Pre-verbs

    Time to cover the last grammatical feature of toki pona: pre-verbs. These are
    words that are added before other verbs and modify their meaning.
    
    The word "kama" is used both as a regular verb to mean "to come" and to express
    that something is a current event:
    
    > mi jo e moku. -- I have food.
    >
    > mi kama jo e moku. -- I (got / am getting) food.
    
    > mi kama tan ma Losi -- I come from Russia.
    
    As a pre-verb, the word "ken" functions much like the English word "can":
    
    > mi pali e tomo. -- I work on a house.
    >
    > mi ken pali e tomo. -- I can work on a house.
    
    It can be used on its own to mean "possibility", "ability":
    
    > ni li ken. -- This is possible.
    
    > ken la ale li pona. -- Maybe everything is okay.
    
    The words "open" and "pini" express that the action is beginning or ending.
    
    > mi open pali e tomo. -- I start working on a house.
    
    > mi pini pali e tomo. -- I stop/finish working on a house.
    
    The word "sona" by itself can mean "knowledge" or "to know", but as a pre-verb,
    it means "know how to [do the action]":
    
    > mi sona pali e tomo. -- I know how to work on a house.
    
    > mi sona e ni. -- I know this.
    
    > mi sona sitelen. -- I know how to write/draw.
    
    > mi sona e sitelen. -- I know a writing/picture.
    
    > ona li sona ala sona e toki Inli? -- Do they know English?
    
    When "kama" is added before "sona", you get a phrase that means "to learn":
    
    > jan lili li kama sona toki. -- The child is learning how to speak.
    
    > mi kama sona e toki pona. -- I am learning toki pona. 
    
    or alternatively:
    
    > mi kama sona toki kepeken toki pona. -- I am learning how to speak in toki pona.
    
    The word "wile" is used to express want or need for the following action or
    thing.
    
    > jan lili li wile moku. -- The child (is hungry / wants to eat).
    
    > jan lili li wile e ijo musi. The child wants a toy ("amusing thing").
    
    > wile sina li suli mute. -- Your needs/desires are very big.
    
    In addition to these words, the words "awen" and "lukin" can also be used as
    pre-verbs. "awen" as a pre-verb means "to keep/continue [doing something]" and
    "lukin" means "to look for, to seek, to try [to do something]".
    
    > ona li lukin e lipu. -- They are reading a book.
    
    > ona li awen lukin e lipu. -- They are still reading a book.
    
    > mi jo e tomo. -- I have a house.
    
    > mi lukin jo e tomo. -- I'm searching for a house (to own).
    
    ## Time
    
    The word "tenpo" is useful, because it's at the basis of many phrases that allow
    one to define time at which something is happening. Since toki pona doesn't have
    grammatical tenses, the way time is generally described is by using an
    additional phrase:
    
    > tenpo ni la mi moku. -- (Right now, ) I eat.
    
    or 
    
    > mi moku lon tenpo ni. -- I eat (at this time).
    
    (As explained in [page 9](9.html), such uses of "lon" and "la" are
    interchangable in other cases as well.)
    
    The phrases "tenpo pini" and "tenpo kama" are commonly used to mean "past" and
    "future".
    
    > tenpo pini la mi pali e ijo ike mute. -- I did a lot of bad things in the
    > past.
    
    > tenpo kama la o moku ala e kasi ni. -- In the future, don't eat this plant.
    
    Of course, you can ask questions regarding time by using "tenpo seme":
    
    > tenpo seme la sina pini e pali sina? -- When will you finish your work?`,
    `## Numerals

    The most basic numerals in toki pona are these words:
    
    * ala - 0, nothing
    * wan - 1
    * tu - 2
    * mute (many) - 3 or more
    * ale (all) - everything, endless
    
    This is, quite obviously, a very limited system. But it is not unique to toki
    pona: languages from some hunter-gatherer societies stop their numerals at
    three, two or even one. (In fact, the Pirah?? language is reported to only have
    had words for "small quantity" and "large quantity", the values of which change
    based on context.)
    
    However, there is also a second, additional system that is officially defined,
    and commonly used, to describe larger numbers. It repurposes some of toki pona's
    words as additional numerals:
    
    * ala - 0
    * wan - 1
    * tu - 2
    * luka (hand) - 5
    * mute (many) - 20
    * ale (all) - 100
    
    In this system, words are added or repeated in order to form numbers. For
    example, 42 is "mute mute tu" (20+20+2) and 18 is "luka luka luka tu wan"
    (5+5+5+2+1).
    
    As you can see, this is still a rather limited system. Just to name the year in
    which this page was originally written (2020), it would require one to repeat
    the word "ale" twenty times and add one "mute" at the end.
    
    These limitations are all part of toki pona's philosophy of simplifying thought
    and avoiding unnecessary detail. Some people have tried coming up with other
    numeral systems, but none have found widespread acceptance.
    
    ## Using numerals
    
    Regardless of the specific system, numerals are treated as adjectives and added
    at the end of nouns or noun phrases:
    
    > soweli wan -- one animal
    
    > waso lili tu -- two small birds
    
    For ordinal numbers (first, second...), the word "nanpa" followed by the number
    is used.
    
    > jan nanpa wan -- first person
    
    > tomo nanpa mute luka luka wan -- 31st house (or house #31)
    
    The phrase "nanpa wan" is sometimes used along with adjectives as a superlative
    modifier:
    
    > nena (Ewelesu/Somolunma) li nena suli nanpa wan lon ma ale. -- Mount
    > (Everest/Chomolungma) is the largest mountain in the whole world.
    
    ## The calendar
    
    In combination with "tenpo", the words "suno", "mun" and "sike" are commonly
    used to describe periods of time:
    
    > tenpo suno -- day ("sun time")
    
    > tenpo pimeja -- night ("dark time")
    
    > tenpo mun / tenpo sike mun -- month ("moon time / moon cycle")
    
    > tenpo sike / tenpo suno sike -- year ("circle time / sun circle time").
    
    ## nanpa
    
    In addition to being used for ordinal numerals, the word "nanpa" itself can mean
    "number" or "digit". For example,
    
    > ilo nanpa -- calculator ("number device")
    
    > nanpa pona -- score/points ("good numbers")
    
    Of course, one has to be careful then, because using actual numerals in this
    case would be confusing. For example, would "ilo nanpa tu" mean "second tool"
    or "two calculators"? In the latter example, reshuffling the words into "ilo tu
    nanpa" could work.
    
    ## Weather
    
    When talking about weather, the commonly used sentence is "[noun] li lon", which
    literally means "[noun] exists" and translates to "It is [noun]y". Examples:
    
    > suno li lon. -- It is sunny.
    
    > telo sewi li lon. -- It is rainy. ("Sky water" exists.)
    
    > seli li lon. -- It is warm.
    
    > lete li lon. -- It is cold.
    `,
    `
    These are the final 10 official words in toki pona. They all function in the
    same way as other words mentioned before, with one exception.
    ## taso

    The word "taso" can be used as a regular adjective to mean "only" or "just":
    
    > mi lon tomo ni. -- I'm in this house.
    
    > mi taso li lon tomo ni. -- Only I'm in this house.
    
    > kulupu ona li jo e jan tu taso. -- Their community only has two people.
    
    > mi pali taso. -- I was only working.
    
    But, when added at the beginning of a sentence, it means "but" or "however":
    
    > taso, tenpo kama li wile ala ante. -- But, the future refused to change.
    `,
]

let data = {
    lessons: []
}

for (i = 0; i <= 11; i++) {
    let titleindex = convert(i+1);
    titleindex = titleindex.charAt(0).toUpperCase() + titleindex.slice(1)
    const title = `Lesson ${titleindex}`
    data.lessons[i] = {
        id: i,
        title,
        subtitle: subtitles[i],
        toki_title: '$Coming Soon$',
        video_id: videoIds[i],
        icon_uri: 'none yet',
        lesson: texts[i],
        vocab: vocab[i],
        exercise: exercises[i]
    }
}
const fs = require('fs');

const json = JSON.stringify(data, null, 4);

// write JSON string to a file
fs.writeFile('lessons.json', json, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
