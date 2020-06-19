// descriptions gave on Emojipedia.org
var titles = ["🔍", "😀", "🦊", "🅰️", "🍎", "🏳️‍🌈", "🏊", "🖱️", "👗", "🖐️", "🛎️"];
var emojis = [];

/*search*/
emojis[0] = {};
/*smileys*/
emojis[1] = {
    "😀": [":)", "Grinning Face", "Happy Face", "Smiley Face"],
    "😃": [":D", "Grinning Face with Big Eyes", "Happy Face", "Smiley Face", "Smiling Face with Open Mouth"],
    "😄": ["Grinning Face with Smiling Eyes", "Happy Face", "Smiley Face", "Grinning Face With Squinting Eyes", "Smiling Face with Open Mouth and Smiling Eyes"],
    "😁": ["Beaming Face with Smiling Eyes", "Grinning Face with Smiling Eyes"],
    "😆": ["xD", "><", "Grinning Squinting Face", "Big Grin", "Closed-Eyes Smile", "Laughing", "Grinning Face With Tightly Closed Eyes", "Smiling Face with Open Mouth and Tightly-Closed Eyes"],
    "😅": ["Grinning Face with Sweat", "Exercise", "Happy Sweat", "Grinning Face With Squinting Eyes and Sweat Drop", "Smiling Face with Open Mouth and Cold Sweat"],
    "🤣": ["ROFL", "Rolling on the Floor Laughing"],
    "😂": ["Face with Tears of Joy", "Laughing", "Laughing Crying", "Laughing Tears", "LOL"],
    "🙂": [":)", "Slightly Smiling Face", "Slightly Happy", "This Is Fine"],
    "🙃": ["Upside-Down Face", "Sarcasm", "Silly", "Upside Down Face"],
    "😉": [";)", "Winking Face", "Wink", "Wink Face", "Winky Face"],
    "😊": ["^^", "Smiling Face with Smiling Eyes", "Happy Face", "Smile", "Smiley Face"],
    "😇": ["Smiling Face with Halo", "Angel", "Halo"],
    "🥰": ["Smiling Face with Hearts", "In Love Face", "Smiling Face with Smiling Eyes and Three Hearts"],
    "😍": ["*.*", "Smiling Face with Heart-Eyes", "Heart Eyes", "Heart Face", "Smiling Face with Heart-Shaped Eyes"],
    "🤩": ["Star-Struck", "Excited", "Star Eyes", "Starry Eyed", "Wow Face", "Face With Starry Eyes", "Grinning Face with Star Eyes"],
    "😘": [":*", ":-*", "Face Blowing a Kiss", "Blow A Kiss", "Blowing Kiss", "Kissing", "Face Throwing a Kiss"],
    "😗": [":*", ":-*", "Kissing Face", "Duck Face", "Kissy Face", "Whistling"],
    "☺️": ["Smiling Face", "Happy Face", "Smiley Face", "Smiling", "White Smiling Face"],
    "😚": ["Kissing Face with Closed Eyes", "Kiss Face", "Kissy Face"],
    "😙": ["Kissing Face with Smiling Eyes", "Kiss Face", "Kissy", "Whistle", "Whistling"],
    "😋": ["Face Savoring Food", "Goofy", "Hungry", "Smiling Face Licking Lips", "Face Savouring Delicious Food"],
    "😛": [":P", "Face with Tongue", "Cheeky", "Tongue Face", "Tongue-Out", "Face with Stuck-Out Tongue"],
    "😜": [";P", "Winking Face with Tongue", "Crazy", "Crazy Face", "Winking Face With Stuck-Out Tongue", "Face with Stuck-Out Tongue and Winking Eye"],
    "🤪": ["Zany Face", "Crazy Eyes", "Excited", "Wild", "Goofy Face", "Grinning Face with One Large and One Small Eye"],
    "😝": ["xP", "Squinting Face with Tongue", "Tongue Out", "Face With Stuck Out Tongue and Tightly-Closed Eyes", "Face with Stuck-Out Tongue and Tightly-Closed Eyes"],
    "🤑": ["$", "Money-Mouth Face", "Dollar Sign Eyes", "Money Face", "Rich"],
    "🤗": ["Hugging Face", "Hug", "Hugging", "Hugs", "Happy Face With Hugging Hands"],
    "🤭": ["Oops", "Face with Hand Over Mouth", "Smiling Face with Smiling Eyes and Hand Covering Mouth"],
    "🤫": ["Shh", "Shush", "Shushing Face", "Hush", "Quiet", "Silence", "Silent", "Face with Finger Covering Closed Lips"],
    "🤔": ["What", "?", "Hmm", "Thinking Face", "Chin Thumb", "Thinker", "Throwing Shade"],
    "🤐": ["Zip", "Zipper-Mouth Face", "Lips Sealed", "Sealed Lips", "Zip It", "Face With a Zipper Mouth"],
    "🤨": ["Face with Raised Eyebrow", "Colbert", "The Rock", "Face With Raised Eyebrow", "Face with One Eyebrow Raised"],
    "😐": [":|", "Neutral Face", "Face With Straight Mouth", "Straight Faced"],
    "😑": ["-_-", "Expressionless Face", "Face With Straight Mouth", "Straight Face"],
    "😶": ["Face Without Mouth", "Blank Face", "Mouthless", "Silence", "Silent"],
    "😏": ["Smirking Face", "Flirting", "Sexual Face", "Smug Face", "Suggestive Smile"],
    "😒": ["Unamused Face", "Dissatisfied", "Meh", "Side-Eye", "Unimpressed"],
    "🙄": ["Face with Rolling Eyes", "Eye Roll"],
    "😬": ["Grimacing Face", "Awkward", "Eek", "Foot In Mounth", "Nervous", "Snapchat Mutual #1 Best Friend"],
    "🤥": ["Lying Face", "Liar", "Long Nose", "Pinocchio"],
    "😌": ["Relieved Face", "Content", "Pleased"],
    "😔": ["Sorry", "Pensive Face", "Pensive", "Sad", "Sadface", "Sorrowful", "Sad Pensive Face"],
    "😪": ["Sleepy Face", "Side-Tear", "Snot Bubble", ],
    "🤤": ["Saliva", "Drooling Face", "Drool"],
    "😴": ["Zzz", "Sleeping Face", "Sleep Face", "Snoring", "Zzz Face"],
    "😷": ["Face with Medical Mask", "Coronavirus", "COVID-19", "Mask Face", "Surgical Mask"],
    "🤒": ["Face with Thermometer", "Ill", "Sick"],
    "🤕": ["Face with Head-Bandage", "Bandaged Head", "Clumsy", "Injured"],
    "🤢": ["Nauseated Face", "Disgust", "Green Face", "Vomit"],
    "🤮": ["Face Vomiting", "Spew", "Bleah", "Bleurgh", "Yuk", "Yuck", "Ew", "Spew", "Throwing Up", "Vomit", "Face with Open Mouth Vomiting"],
    "🤧": ["Sneezing Face", "Gesundheit"],
    "🥵": ["Hot Face", "Overheated Face"],
    "🥶": ["Cold Face", "Cool", "Chill", "Freezing Face"],
    "🥴": ["Woozy Face", "Drunk Face", "Face with Uneven Eyes and Wavy Mouth"],
    "😵": ["Dizzy Face", "Cross Eyes Face", "Spiral Eyes Face"],
    "🤯": ["Exploding Head", "Mind Blown", "Shocked Face with Exploding Head"],
    "🤠": ["Cowboy Hat Face", "Cowboy", "Cowboy Face", "Face with Cowboy Hat"],
    "🥳": ["Partying Face", "Party Face", "Face with Party Horn and Party Hat"],
    "😎": ["Smiling Face with Sunglasses", "Cool", "Mutual Best Friends (Snapchat)", "Sunglasses"],
    "🤓": ["Nerd Face", "Nerdy"],
    "🧐": ["Face with Monocle"],
    "😕": [":/", ":S", "Confused Face", "Nonplussed", "Puzzled"],
    "😟": [":(", "Worried Face", "Sad", "Sadface"],
    "🙁": [":(", "Slightly Frowning Face", "Slightly Sad"],
    "☹️": [":(", "Frowning Face", "Megafrown", "White Frowning Face"],
    "😮": [":O", "Wow", "Oh my!", "Face with Open Mouth", "Open Mouth", "Surprised Face With Open Mouth"],
    "😯": [":O", "Hushed Face", "Surprise", "Surprised Face"],
    "😲": [":O", "Wow", "Astonished Face", "Drunk Face", "Gasping Face", "Shocked Face"],
    "😳": [":$", "Flushed Face", "Blushing Face", "Embarrassed", "Shame", "Face With Wide Open Eyes"],
    "🥺": [":(", "Pleading Face", "Begging", "Glossy Eyes", "Simp", "Face with Pleading Eyes"],
    "😦": ["D:", "Frowning Face with Open Mouth", "Yawning"],
    "😨": ["D:", "Fearful Face", "Scared", "Surprised"],
    "😰": ["Anxious Face with Sweat", "Blue Face", "Concerned Face", "Nervous Face", "Face with Open Mouth and Cold Sweat"],
    "😥": [":'(", "Sad but Relieved Face", "Eyebrow Sweat", "Disappointed but Relieved Face"],
    "😢": [":'(", "Crying Face", "Crying", "Tear"],
    "😭": ["Loudly Crying Face", "Bawling", "Crying", "Sad Tears", "Sobbing"],
    "😱": ["Face Screaming in Fear", "Home Alone", "Scream", "Screaming Face"],
    "😖": ["Confounded Face", "Quivering Mouth", "Scrunched Face"],
    "😣": ["Persevering Face", "Helpless Face", "Scrunched Eyes"],
    "😞": [":(", "Disappointed Face", "Sad", "Sadface"],
    "😓": ["Downcast Face with Sweat", "Hard Work", "Sad Sweat Face", "Face with Cold Sweat"],
    "😩": ["Weary Face", "Distraught Face", "Wailing"],
    "😫": ["Tired Face", "Exhausted", "Fed Up", "Distraught Face"],
    "😤": ["Face with Steam From Nose", "Airing of Grievances", "Frustrated", "Mad Face", "Steaming", "Huffing With Anger Face"],
    "😡": ["Pouting Face", "Angry Face", "Grumpy Face", "Mad Face", "Red Face"],
    "😠": ["Angry Face", "Angry", "Grumpy Face"],
    "🤬": ["@#$%&!", "Face with Symbols on Mouth", "Cursing", "Cussing", "Grawlix", "Swearing", "Face With Symbols Over Mouth", "Serious Face with Symbols Covering Mouth"],
    "😈": ["Smiling Face with Horns", "Devil", "Devil Horns", "Happy Devil", "Purple Devil", "Red Devil"],
    "👿": ["Angry Face with Horns", "Devil", "Devil Horns", "Purple Devil", "Purple Goblin", "Sad Devil", "Imp"],
    "🤡": ["Clown Face", "Creepy Clown", "Evil Clown", "Scary Clown"],
    "👽": ["Alien", "ET"],
    "👾": ["Alien Monster", "Space Invader", "Video Game Monster"],
    "🤖": ["Robot", "Robot Face"],
    "👹": ["Ogre", "Mask Face", "Oni", "Red Monster", "Japanese Ogre"],
    "👻": ["Ghost", "Halloween"],
    "👶": ["Baby", "Child", "Toddler"],
    "🧒": ["Child", "Gender Neutral Child"],
    "👧": ["Girl"],
    "🧑": ["Person", "Gender Neutral Adult", "Adult"],
    "👱": ["Person: Blond Hair", "Blond", "Blonde", "Blond Man", "Person with Blond Hair", "Man With Blonde Hair"],
    "👨": ["Man", "Male", "Moustache Man"],
    "🧔": ["Man: Beard", "Beard", "Bearded Man", "Bearded Person"],
    "👨‍🦰": ["Man: Red Hair", "Ginger Man", "Man Redhead", "Man With Red Hair"],
    "👨‍🦱": ["Man: Curly Hair", "Man With Curly Hair"],
    "👨‍🦳": ["Man: White Hair", "Man With Gray Hair"],
    "👨‍🦲": ["Man: Bald", "Man With No Hair"],
    "👩": ["Woman", "Female", "Lady", "Yellow Woman"],
    "👩‍🦰": ["Woman: Red Hair", "Ginger Woman", "Woman Redhead", "Woman With Red Hair"],
    "👩‍🦱": ["Woman: Curly Hair", "Woman With Curly Hair"],
    "👩‍🦳": ["Woman: White Hair", "Woman With Gray Hair"],
    "👩‍🦲": ["Woman: Bald", "Woman With No Hair"],
    "👱‍♀️": ["Woman: Blond Hair", "Woman With Blonde Hair"],
    "👱‍♂️": ["Man: Blond Hair", "Man With Blonde Hair"],
    "🧓": ["Older Person", "Gender Neutral Older Adult"],
    "👴": ["Old Man", "Elderly Man", "Grandpa", "Older Man"],
    "👵": ["Old Woman", "Elderly Woman", "Grandma", "Nanna", "Old Lady", "Older Woman"],
    "👼": ["Baby Angel", "Angel", "Cherub", "Cupid", "Putto"],
    "🎅": ["Santa Claus", "Saint Nicholas", "Sinterklaas", "Father Christmas"],
    "🤶": ["Mrs. Claus", "Mrs Claus", "Mother Christmas"],
    "🤴": ["Prince"],
    "👸": ["Princess", "Blonde Girl", "Girl With Crown", "Girl With Tiara"],
    "👳": ["Person Wearing Turban", "Arab", "Muslim", "Sikh", "Turban", "Man with Turban"],
    "👳‍♂️": ["Man Wearing Turban"],
    "👳‍♀️": ["Woman Wearing Turban"],
    "👲": ["Person With Skullcap", "Asian Man", "Man With Chinese Cap", "Man with Gua Pi Mao"],
    "🧕": ["Woman with Headscarf", "Hijab", "Person with Headscarf"],
    "🤵": ["Person in Tuxedo", "Groom", "Man In Suit", "Man in Tuxedo"],
    "👰": ["Person With Veil", "Bride", "Bride with Veil"],
    "🤰": ["Pregnant Woman", "Pregnancy", "Pregnant Lady"],
    "🤱": ["Breast-Feeding", "Breastfeeding"]
};
/*animals*/
emojis[2] = {
    "😺": [":)", "Grinning Cat", "Happy Cat", "Smiling Cat", "Happy Cat Face", "Smiling Cat Face with Open Mouth"],
    "😸": [":D", "Grinning Cat with Smiling Eyes", "Grinning Cat", "Happy Cat", "Grinning Cat Face"],
    "😹": [":')", "Cat with Tears of Joy", "Happy Tears Cat", "Laughing Cat", ],
    "😻": ["*.*", "Smiling Cat with Heart-Eyes", "Heart Eyes Cat", "Loving Cat", "Smiling Cat Face with Heart-Shaped Eyes"],
    "😼": ["Cat with Wry Smile", "Smirking Cat", "Smirking Cat Face", "Cat Face with Wry Smile"],
    "😽": [":*", "Kissing Cat", "Kissing Cat Face", "Kissing Cat Face with Closed Eyes"],
    "🙀": [":O", "Weary Cat", "Scared Cat", "Screaming Cat", "Cat Face Screaming in Fear", "Weary Cat Face"],
    "😿": [":'(", "Crying Cat", "Sad Cat", "Crying Cat Face"],
    "😾": ["Pouting Cat", "Grumpy Cat", "Pouting Cat Face"],
    "🙈": ["Monkey", "See-No-Evil Monkey", "Mizaru", "Monkey Covering Eyes"],
    "🙉": ["Monkey", "Hear-No-Evil Monkey", "Kikazaru", "Monkey Covering Ears"],
    "🙊": ["Monkey", "Speak-No-Evil Monkey", "Iwazaru", "Monkey Covering Mouth", "No Speaking"],
    "🐵": ["Monkey", "Monkey Face", "Monkey Head"],
    "🐒": ["Monkey", "Cheeky Monkey"],
    "🦍": ["Gorilla"],
    "🐶": ["Dog Face", "Dog", "Puppy"],
    "🐕": ["Dog", "Doggo", "Akita Inu"],
    "🐩": ["Poodle", "Dog", "Miniature Poodle", "Standard Poodle", "Toy Poodle"],
    "🐺": ["Wolf", "Wolf Face"],
    "🦊": ["Fox", "Fox Face"],
    "🦝": ["Raccoon"],
    "🐱": [":3", "Cat Face", "Kitten", "Kitty"],
    "🐈": ["Cat", "Domestic Cat", "Feline", "Housecat"],
    "🦁": ["Lion", "Lion Face"],
    "🐯": ["Tiger Face", "Cute Tiger"],
    "🐅": ["Tiger", "Bengal Tiger"],
    "🐆": ["Leopard", "African Leopard", "Jaguar"],
    "🐴": ["Horse Face", "Horse Head"],
    "🐎": ["Horse", "Galloping Horse", "Racehorse"],
    "🦄": ["Unicorn", "Unicorn Face"],
    "🦓": ["Zebra", "Zebra Face"],
    "🦌": ["Deer", "Buck", "Reindeer", "Stag"],
    "🐮": ["Cow Face", "Cow", "Happy Cow"],
    "🐂": ["Ox", "Bull", "Bullock", "Oxen", "Steer"],
    "🐃": ["Water Buffalo", "Buffalo", "Domestic Water Buffalo"],
    "🐄": ["Cow", "Dairy Cow"],
    "🐷": ["Pig Face", "Pig", "Pig Head"],
    "🐖": ["Pig", "Hog", "Sow"],
    "🐗": ["Boar", "Warthog", "Wild Boar", "Wild Pig"],
    "🐽": ["Pig Nose"],
    "🐏": ["Ram", "Sheep"],
    "🐑": ["Ewe", "Lamb", "Sheep"],
    "🐐": ["Goat"],
    "🐪": ["Camel", "Arabian Camel", "Dromedary Camel", "One-Bump Camel"],
    "🐫": ["Two-Hump Camel", "Asian Camel", "Bactrian Camel"],
    "🦙": ["Llama", "Alpaca"],
    "🦒": ["Giraffe", "Giraffe Face"],
    "🐘": ["Elephant"],
    "🦏": ["Rhinoceros", "Rhino"],
    "🦛": ["Hippopotamus", "Hippo"],
    "🐭": ["Mouse Face", "Mouse"],
    "🐁": ["Mouse", "Dormouse", "Rodent", "Mice"],
    "🐀": ["Rat", "Rodent"],
    "🐹": ["Hamster", "Hamster Face"],
    "🐰": ["Rabbit Face", "Easter Bunny"],
    "🐇": ["Rabbit", "Bunny", "Bunny Rabbit"],
    "🐿️": ["Chipmunk", "Squirrel"],
    "🦔": ["Hedgehog"],
    "🦇": ["Bat", "Batman"],
    "🐻": ["Bear", "Bear Face", "Teddy Bear"],
    "🐨": ["Koala", "Koala Face"],
    "🐼": ["Panda", "Panda Face"],
    "🦘": ["Kangaroo", "Roo"],
    "🦡": ["Badger"],
    "🦃": ["Turkey", "Thanksgiving Turkey", "Wild Turkey"],
    "🐔": ["Chicken", "Hen"],
    "🐓": ["Cock", "Rooster", "Cockerel"],
    "🐣": ["Hatching Chick", "Baby Chicken", "Chick Hatching"],
    "🐤": ["Baby Chick", "Yellow Bird"],
    "🐥": ["Front-Facing Baby Chick", "Baby Chick", "Standing Chick"],
    "🐦": ["Bird"],
    "🐧": ["Penguin"],
    "🕊️": ["Dove", "Dove of Peace"],
    "🦅": ["Eagle", "Bald Eagle"],
    "🦆": ["Duck"],
    "🦢": ["Swan"],
    "🦉": ["Owl"],
    "🦚": ["Peacock"],
    "🦜": ["Parrot"],
    "🐸": ["Frog", "Toad", "Frog Face"],
    "🐊": ["Crocodile", "Alligator", "Croc"],
    "🐢": ["Turtle", "Tortoise"],
    "🦎": ["Lizard", "Gecko"],
    "🐍": ["Snake", "Serpent"],
    "🐲": ["Dragon Face", "Dragon Head"],
    "🐉": ["Dragon"],
    "🦕": ["Sauropod", "Brachiosaurus", "Brontosaurus", "Dinosaur"],
    "🦖": ["T-Rex", "Tyrannosaurus Rex"],
    "🐳": ["Spouting Whale", "Cute Whale"],
    "🐋": ["Whale"],
    "🐬": ["Dolphin"],
    "🐟": ["Fish", "Freshwater Fish"],
    "🐠": ["Tropical Fish", "Fish", "Yellow-Blue Fish"],
    "🐡": ["Blowfish", "Fugu", "Pufferfish"],
    "🦈": ["Shark", "Great White Shark"],
    "🐙": ["Octopus"],
    "🐚": ["Spiral Shell", "Seashell", "Shell"],
    "🐌": ["Snail", "Slug", "Garden Snail"],
    "🦋": ["Butterfly"],
    "🐛": ["Bug", "Caterpillar", "Insect"],
    "🐜": ["Ant", "Bug", "Insect"],
    "🐝": ["Honeybee", "Bee", "Bumblebee"],
    "🐞": ["Lady Beetle", "Ladybird", "Ladybug", "Bug"],
    "🦗": ["Cricket", "Grasshopper"],
    "🕷️": ["Spider"],
    "🦂": ["Scorpion"],
    "🦟": ["Mosquito"],
    "🦀": ["Crab"],
    "🦞": ["Lobster"],
    "🦐": ["Shrimp", "Prawn"],
    "🦑": ["Squid"]
};
/*symbols*/
emojis[3] = {
    "💘": [],
    "💝": [],
    "💖": [],
    "💗": [],
    "💓": [],
    "💞": [],
    "💕": [],
    "💟": [],
    "❣️": [],
    "💔": [],
    "❤️": [],
    "🧡": [],
    "💛": [],
    "💚": [],
    "💙": [],
    "💜": [],
    "🖤": [],
    "🤍": [],
    "🤎": [],
    "💯": [],
    "💬": [],
    "💤": [],
    "♠️": [],
    "♥️": [],
    "♦️": [],
    "♣️": [],
    "🏧": [],
    "🎵": [],
    "🎶": [],
    "🔔": [],
    "🔕": [],
    "🔈": [],
    "🔉": [],
    "🔊": [],
    "🔇": [],
    "⛔": [],
    "🚫": [],
    "🚳": [],
    "🚭": [],
    "🚯": [],
    "🚱": [],
    "🚷": [],
    "🔞": [],
    "☢️": [],
    "☣️": [],
    "⬆️": [],
    "↗️": [],
    "➡️": [],
    "↘️": [],
    "⬇️": [],
    "↙️": [],
    "⬅️": [],
    "↖️": [],
    "↕️": [],
    "↔️": [],
    "↩️": [],
    "↪️": [],
    "⤴️": [],
    "⤵️": [],
    "🔃": [],
    "🔄": [],
    "🔙": [],
    "🔚": [],
    "🔛": [],
    "🔜": [],
    "🔝": [],
    "🛐": [],
    "⚛️": [],
    "🕉️": [],
    "✡️": [],
    "☸️": [],
    "☯️": [],
    "✝️": [],
    "☦️": [],
    "☪️": [],
    "☮️": [],
    "🕎": [],
    "🔯": [],
    "♈": [],
    "♉": [],
    "♊": [],
    "♋": [],
    "♌": [],
    "♍": [],
    "♎": [],
    "♏": [],
    "♐": [],
    "♑": [],
    "♒": [],
    "♓": [],
    "⛎": [],
    "🔀": [],
    "🔁": [],
    "🔂": [],
    "▶️": [],
    "◀️": [],
    "🔼": [],
    "🔽": [],
    "⏩": [],
    "⏪": [],
    "⏫": [],
    "⏬": [],
    "⏹️": [],
    "⏏️": [],
    "🎦": [],
    "📶": [],
    "✖️": [],
    "➕": [],
    "➖": [],
    "➗": [],
    "♾️": [],
    "‼️": [],
    "⁉️": [],
    "❓": [],
    "❔": [],
    "❕": [],
    "❗": [],
    "⭕": [],
    "☑️": [],
    "✔️": [],
    "❌": [],
    "✅": [],
    "❎": [],
    "#️⃣": [],
    "0️⃣": [],
    "1️⃣": [],
    "2️⃣": [],
    "3️⃣": [],
    "4️⃣": [],
    "5️⃣": [],
    "6️⃣": [],
    "7️⃣": [],
    "8️⃣": [],
    "9️⃣": [],
    "🔟": [],
    "🔠": [],
    "🔡": [],
    "🔢": [],
    "🔤": [],
    "🅰️": [],
    "🆎": [],
    "🅱️": [],
    "🆑": [],
    "🆒": [],
    "🆓": [],
    "ℹ️": [],
    "🆔": [],
    "🆕": [],
    "🅾️": [],
    "🆗": [],
    "🅿️": [],
    "🆘": [],
    "🆙": [],
    "🆚": [],
    "🔴": [],
    "🔵": [],
    "⚫": [],
    "⚪": [],
    "⬛": [],
    "⬜": [],
    "🔶": [],
    "🔷": [],
    "🔸": [],
    "🔹": [],
    "🔺": [],
    "🔻": [],
    "🔳": [],
    "🔲": [],
    "©️": [],
    "®️": [],
    "™️": []
};
/*food and drinks*/
emojis[4] = {
    "🍇": [],
    "🍈": [],
    "🍉": [],
    "🍊": [],
    "🍋": [],
    "🍌": [],
    "🍍": [],
    "🥭": [],
    "🍎": [],
    "🍏": [],
    "🍐": [],
    "🍑": [],
    "🍒": [],
    "🍓": [],
    "🥝": [],
    "🍅": [],
    "🥥": [],
    "🥑": [],
    "🍆": [],
    "🥔": [],
    "🥕": [],
    "🌽": [],
    "🌶️": [],
    "🥒": [],
    "🥬": [],
    "🥦": [],
    "🍄": [],
    "🥜": [],
    "🌰": [],
    "🍞": [],
    "🥐": [],
    "🥖": [],
    "🥨": [],
    "🥯": [],
    "🥞": [],
    "🧀": [],
    "🍖": [],
    "🍗": [],
    "🥩": [],
    "🥓": [],
    "🍔": [],
    "🍟": [],
    "🍕": [],
    "🌭": [],
    "🥪": [],
    "🌮": [],
    "🌯": [],
    "🥙": [],
    "🍳": [],
    "🥘": [],
    "🍲": [],
    "🥣": [],
    "🥗": [],
    "🍿": [],
    "🧂": [],
    "🥫": [],
    "🍱": [],
    "🍘": [],
    "🍙": [],
    "🍚": [],
    "🍛": [],
    "🍜": [],
    "🍝": [],
    "🍠": [],
    "🍢": [],
    "🍣": [],
    "🍤": [],
    "🍥": [],
    "🥮": [],
    "🍡": [],
    "🥟": [],
    "🥠": [],
    "🥡": [],
    "🍦": [],
    "🍧": [],
    "🍨": [],
    "🍩": [],
    "🍪": [],
    "🎂": [],
    "🍰": [],
    "🧁": [],
    "🥧": [],
    "🍫": [],
    "🍬": [],
    "🍭": [],
    "🍮": [],
    "🍯": [],
    "🍼": [],
    "🥛": [],
    "☕": [],
    "🍵": [],
    "🍶": [],
    "🍾": [],
    "🍷": [],
    "🍸": [],
    "🍹": [],
    "🍺": [],
    "🍻": [],
    "🥂": [],
    "🥃": [],
    "🥤": [],
    "🥢": [],
    "🍽️": [],
    "🍴": [],
    "🥄": []
};
/*flags*/
emojis[5] = {
    "🏁": [],
    "🚩": [],
    "🎌": [],
    "🏴": [],
    "🏳️": [],
    "🏳️‍🌈": [],
    "🏳️‍⚧️": [],
    "🏴‍☠️": [],
    "🇺🇳": [],
    "🇪🇺": [],
    "🇧🇸": [],
    "🇨🇦": [],
    "🇨🇭": [],
    "🇨🇳": [],
    "🇩🇪": [],
    "🇩🇰": [],
    "🇪🇪": [],
    "🇪🇬": [],
    "🇪🇸": [],
    "🇫🇮": [],
    "🇫🇷": [],
    "🇬🇧": [],
    "🇬🇱": [],
    "🇬🇷": [],
    "🇭🇺": [],
    "🇮🇪": [],
    "🇮🇱": [],
    "🇮🇩": [],
    "🇮🇳": [],
    "🇮🇶": [],
    "🇮🇷": [],
    "🇮🇸": [],
    "🇮🇹": [],
    "🇯🇵": [],
    "🇯🇲": [],
    "🇰🇪": [],
    "🇰🇷": [],
    "🇰🇵": [],
    "🇱🇺": [],
    "🇲🇹": [],
    "🇲🇽": [],
    "🇳🇴": [],
    "🇳🇱": [],
    "🇳🇿": [],
    "🇵🇱": [],
    "🇵🇹": [],
    "🇷🇺": [],
    "🇸🇪": [],
    "🇸🇮": [],
    "🇹🇳": [],
    "🇺🇦": [],
    "🇺🇸": [],
    "🇻🇪": [],
    "🇻🇬": [],
    "🇻🇮": [],
    "🇿🇦": [],
    "🇿🇼": [],
    "🇦🇪": [],
    "🇦🇷": [],
    "🇦🇹": [],
    "🇦🇺": [],
    "🇧🇷": []
};
/*sports*/
emojis[6] = {
    "🧗": [],
    "🏇": [],
    "⛷️": [],
    "🏂": [],
    "🏌️": [],
    "🏄": [],
    "🚣": [],
    "🏊": [],
    "⛹️": [],
    "🏋️": [],
    "🚴": [],
    "🚵": [],
    "🤸": [],
    "🤼": [],
    "🤽": [],
    "🤾": [],
    "🤹": [],
    "🧘": [],
    "🏆": [],
    "🏅": [],
    "🥇": [],
    "🥈": [],
    "🥉": [],
    "⚽": [],
    "⚾": [],
    "🥎": [],
    "🏀": [],
    "🏐": [],
    "🏈": [],
    "🏉": [],
    "🎾": [],
    "🥏": [],
    "🎳": [],
    "🏏": [],
    "🏑": [],
    "🏒": [],
    "🥍": [],
    "🏓": [],
    "🏸": [],
    "🥊": [],
    "🥋": [],
    "⛳": [],
    "⛸️": [],
    "🎣": [],
    "🎽": [],
    "🎿": [],
    "🛷": [],
    "🥌": [],
    "🎯": [],
    "🎱": [],
    "🎮": [],
    "♟️": [],
    "🏹": []
};
/*technologies (smartphones, laptops, ect.) and office*/
emojis[7] = {
    "⌚": [],
    "⏰": [],
    "⏱️": [],
    "⏲️": [],
    "🕰️": [],
    "🕹️": [],
    "🎙️": [],
    "🎚️": [],
    "🎛️": [],
    "📻": [],
    "📱": [],
    "📲": [],
    "☎️": [],
    "📞": [],
    "📟": [],
    "📠": [],
    "🔋": [],
    "🔌": [],
    "💻": [],
    "🖥️": [],
    "🖨️": [],
    "⌨️": [],
    "🖱️": [],
    "🖲️": [],
    "💽": [],
    "💾": [],
    "💿": [],
    "📀": [],
    "🎥": [],
    "🎞️": [],
    "📽️": [],
    "📺": [],
    "📷": [],
    "📸": [],
    "📹": [],
    "📼": [],
    "💳": [],
    "📧": [],
    "📨": [],
    "📩": [],
    "📤": [],
    "📥": [],
    "📮": [],
    "📁": [],
    "📂": [],
    "🗂️": [],
    "📅": [],
    "📈": [],
    "📉": [],
    "📊": [],
    "📌": [],
    "📋": [],
    "📍": [],
    "📎": [],
    "📏": [],
    "📐": [],
    "✂️": [],
    "✏️": [],
    "✒️": [],
    "🖋️": [],
    "🖊️": [],
    "🖌️": [],
    "🖍️": [],
    "📝": [],
    "🗑️": [],
    "📡": [],
    "🔭": [],
    "🔬": []
};
/*clothes and accessories*/
emojis[8] = {
    "👣": [],
    "👓": [],
    "🕶️": [],
    "🥽": [],
    "🥼": [],
    "👔": [],
    "👕": [],
    "👖": [],
    "🧣": [],
    "🧤": [],
    "🧥": [],
    "🧦": [],
    "👗": [],
    "👘": [],
    "👙": [],
    "👚": [],
    "👛": [],
    "👜": [],
    "👝": [],
    "🎒": [],
    "👞": [],
    "👟": [],
    "🥾": [],
    "🥿": [],
    "👠": [],
    "👡": [],
    "👢": [],
    "👑": [],
    "👒": [],
    "🎩": [],
    "🎓": [],
    "🧢": [],
    "⛑️": [],
    "💼": []
};
/*hands and parts of body*/
emojis[9] = {
    "👋": [],
    "🤚": [],
    "✋": [],
    "🖖": [],
    "👌": [],
    "✌️": [],
    "🤞": [],
    "🤟": [],
    "🤘": [],
    "🤙": [],
    "🤏": [],
    "👈": [],
    "👉": [],
    "👆": [],
    "👇": [],
    "☝️": [],
    "🖕": [],
    "👍": [],
    "👎": [],
    "✊": [],
    "👊": [],
    "🤛": [],
    "🤜": [],
    "👏": [],
    "🙌": [],
    "👐": [],
    "🤲": [],
    "🤝": [],
    "🙏": [],
    "✍️": [],
    "💪": [],
    "🦵": [],
    "🦶": [],
    "👂": [],
    "👃": [],
    "🧠": [],
    "🦷": [],
    "👀": [],
    "👁️": [],
    "👅": [],
    "👄": []
};
/*other*/
emojis[10] = {
    "💩": [],
    "💋": [],
    "💅": [],
    "🤳": [],
    "🦴": [],
    "🧳": [],
    "🌂": [],
    "☂️": [],
    "🧵": [],
    "🧶": [],
    "💄": [],
    "💍": [],
    "💥": [],
    "💫": [],
    "💦": [],
    "💨": [],
    "🐾": [],
    "🕸️": [],
    "🦠": [],
    "💐": [],
    "🌍": [],
    "🌎": [],
    "🌏": [],
    "🌐": [],
    "🌑": [],
    "🌓": [],
    "🌕": [],
    "🌗": [],
    "🌙": [],
    "🌛": [],
    "🌜": [],
    "☀️": [],
    "⭐": [],
    "☁️": [],
    "⛅": [],
    "⛈️": [],
    "🌤️": [],
    "🌥️": [],
    "🌦️": [],
    "🌧️": [],
    "🌨️": [],
    "🌩️": [],
    "🌪️": [],
    "🌫️": [],
    "🌈": [],
    "❄️": [],
    "☃️": [],
    "⛄": [],
    "☄️": [],
    "🔥": [],
    "💧": [],
    "🌊": [],
    "🎄": [],
    "🌻": [],
    "🌼": [],
    "🌷": [],
    "🌹": [],
    "🌹": [],
    "🌳": [],
    "🌴": [],
    "☘️": [],
    "🔑": [],
    "🗝️": [],
    "🔨": [],
    "⛏️": [],
    "🔒": [],
    "🔓": [],
    "🔏": [],
    "🔐": [],
    "🗡️": [],
    "⚔️": [],
    "🔫": [],
    "🧰": [],
    "🧲": [],
    "⛓️": [],
    "💉": [],
    "🧬": [],
    "🧪": [],
    "🛏️": [],
    "🚪": [],
    "🚽": [],
    "🚿": [],
    "🛁": [],
    "🧴": [],
    "🧷": [],
    "🧺": [],
    "🧻": [],
    "🧼": [],
    "🧽": [],
    "🧯": [],
    "🚬": [],
    "⚰️": [],
    "⚱️": [],
    "🗿": [],
    "🛡️": [],
    "⚙️": [],
    "⚖️": [],
    "🔗": [],
    "💀": [],
    "☠️": [],
    "🦻": [],
    "🦸": [],
    "🦸‍♀️": [],
    "🦹": [],
    "🦹‍♀️": [],
    "🧙": [],
    "🧙‍♀️": [],
    "🧚": [],
    "🧚‍♀️": [],
    "🧛": [],
    "🧛‍♀️": [],
    "🧜": [],
    "🧜‍♀️": [],
    "🧝": [],
    "🧝‍♀️": [],
    "🧞‍♂️": [],
    "🧞": [],
    "🕵️": [],
    "💂": [],
    "💂‍♀️": [],
    "👮": [],
    "👮‍♀️": [],
    "👨‍🚒": [],
    "👩‍🚒": [],
    "👨‍‍✈️": [],
    "👩‍✈️": [],
    "👨‍‍💻": [],
    "👩‍💻": [],
    "👨‍‍🎤": [],
    "👩‍🎤": [],
    "👨‍‍🎨": [],
    "👩‍🎨": [],
    "👷‍♂️": [],
    "👷‍♀️": [],
    "💑": [],
    "👨‍❤️‍👨": [],
    "👩‍❤️‍👩": []
};