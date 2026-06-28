// Multi-lingual translations for Grandma's Bag of Stories sentences
const STORIES_DATABASE: Record<string, Record<string, string>> = {
  // Page 11: The Beginning of the Stories
  "Summer holidays!": {
    ta: "கோடை விடுமுறை!",
    es: "¡Vacaciones de verano!",
    fr: "Vacances d'été!",
    hi: "गर्मियों की छुट्टियाँ!"
  },
  "Ajji smiled to herself as she waited for two more of her grandchildren to arrive.": {
    ta: "தனது பேரக்குழந்தைகளில் மேலும் இரண்டு பேர் வருவதற்காகக் காத்திருந்த அஜ்ஜி தனக்குள்ளேயே சிரித்துக் கொண்டாள்.",
    es: "Ajji sonrió para sí misma mientras esperaba la llegada de dos de sus nietos más.",
    fr: "Ajji sourit en attendant l'arrivée de deux autres de ses petits-enfants.",
    hi: "अज्जी अपने दो और पोते-पोतियों के आने का इंतज़ार करते हुए मुस्कुराईं।"
  },
  "Raghu and Meenu would be here soon.": {
    ta: "ரகுவும் மீனுவும் விரைவில் இங்கு வந்துவிடுவார்கள்.",
    es: "Raghu y Meenu llegarían pronto.",
    fr: "Raghu et Meenu seraient bientôt là.",
    hi: "रघु और मीनू जल्द ही यहाँ होंगे।"
  },
  "Anand and Krishna had already arrived with their mother the previous evening.": {
    ta: "ஆனந்தும் கிருஷ்ணாவும் முந்தைய நாள் மாலையே தங்கள் தாயுடன் வந்து சேர்ந்திருந்தனர்.",
    es: "Anand y Krishna ya habían llegado con su madre la noche anterior.",
    fr: "Anand et Krishna étaient déjà arrivés avec leur mère la veille au soir.",
    hi: "आनंद और कृष्णा पिछली शाम ही अपनी माँ के साथ आ चुके थे।"
  },
  "They had been waiting restlessly for their cousins to arrive ever since.": {
    ta: "அன்றிலிருந்து தங்களது உறவினர்களின் வருகைக்காக அவர்கள் பொறுமையின்றி காத்துக் கொண்டிருந்தனர்.",
    es: "Desde entonces habían estado esperando inquietamente la llegada de sus primos.",
    fr: "Depuis, ils attendaient impatiemment l'arrivée de leurs cousins.",
    hi: "तब से वे अपने चचेरे भाई-बहनों के आने का बेसब्री से इंतज़ार कर रहे थे।"
  },
  "Even though Ajji told them Raghu and Meenu would be here the next morning, these two kids just would not listen.": {
    ta: "ரகுவும் மீனுவும் மறுநாள் காலை வந்துவிடுவார்கள் என்று அஜ்ஜி சொல்லியும், இந்த இரண்டு குழந்தைகள் கேட்கவே இல்லை.",
    es: "Aunque Ajji les dijo que Raghu y Meenu estarían aquí a la mañana siguiente, estos dos niños simplemente no escucharon.",
    fr: "Même si Ajji leur avait dit que Raghu et Meenu seraient là le lendemain matin, ces deux enfants n'ont rien voulu entendre.",
    hi: "भले ही अज्जी ने उनसे कहा था कि रघु और मीनू अगली सुबह यहाँ होंगे, लेकिन ये दोनों बच्चे मानने को तैयार नहीं थे।"
  },
  "They went to the railway station with their grandfather, Ajja, to receive them.": {
    ta: "அவர்களை வரவேற்பதற்காக அவர்கள் தங்கள் தாத்தா அஜ்ஜாவுடன் ரயில் நிலையத்திற்குச் சென்றனர்.",
    es: "Fueron a la estación de tren con su abuelo, Ajja, para recibirlos.",
    fr: "Ils sont allés à la gare avec leur grand-père, Ajja, pour les accueillir.",
    hi: "वे उन्हें लेने के लिए अपने दादा, अज्जा, के साथ रेलवे स्टेशन गए।"
  },
  "The train must have pulled into the tiny railway station of Shiggaon by now, and their grandfather would have hired a taxi to bring them home along with their mother and the stacks of luggage.": {
    ta: "ரயில் இப்போது ஷிக்கான் சிறிய ரயில் நிலையத்திற்குள் நுழைந்திருக்க வேண்டும், மேலும் அவர்களின் தாத்தா தம்பதியினரை அவர்களின் தாயுடன் மற்றும் பெரிய பெட்டிகளுடன் வீட்டிற்கு அழைத்து வர ஒரு டாக்ஸியை வாடகைக்கு எடுத்திருப்பார்.",
    es: "El tren ya debe haber entrado en la pequeña estación de tren de Shiggaon, y su abuelo habría alquilado un taxi para traerlos a casa junto con su madre y las pilas de equipaje.",
    fr: "Le train doit maintenant être entré dans la petite gare de Shiggaon, et leur grand-père aurait loué un taxi pour les ramener à la maison avec leur mère et les piles de bagages.",
    hi: "ट्रेन अब तक शिगाँव के छोटे से रेलवे स्टेशन पर पहुँच चुकी होगी, और उनके दादाजी ने उनकी माँ और ढेर सारे सामान के साथ उन्हें घर लाने के लिए एक टैक्सी किराए पर ली होगी।"
  },
  "Ajji hurried through her bath.": {
    ta: "அஜ்ஜி அவசரமாக குளித்துவிட்டு வந்தாள்.",
    es: "Ajji se bañó rápidamente.",
    fr: "Ajji s'est dépêchée de prendre son bain.",
    hi: "अज्जी ने जल्दी से स्नान किया।"
  },
  "She had finished cooking their favourite dishes, and was now wearing a nice, soft cotton sari before going to the veranda to wait for them.": {
    ta: "அவளுக்குப் பிடித்த உணவுகளை சமைத்து முடித்துவிட்டு, அவர்கள் வருவதற்காக வெராண்டாவில் காத்திருப்பதற்கு முன் ஒரு மென்மையான பருத்தி புடவையை அணிந்திருந்தாள்.",
    es: "Había terminado de cocinar sus platos favoritos y ahora vestía un bonito y suave sari de algodón antes de ir a la terraza a esperarlos.",
    fr: "Elle avait fini de cuisiner leurs plats préférés et portait maintenant un joli sari en coton doux avant d'aller sur la véranda pour les attendre.",
    hi: "उसने उनके पसंदीदा व्यंजन बनाना समाप्त कर लिया था, और अब बरामदे में उनका इंतज़ार करने के लिए एक अच्छी, मुलायम सूती साड़ी पहन ली थी।"
  },
  "There! There they came! What a noise the children were making!": {
    ta: "அங்கே! அவர்கள் வந்துவிட்டார்கள்! குழந்தைகள் என்ன ஒரு கூச்சல் போட்டார்கள்!",
    es: "¡Allí! ¡Ahí venían! ¡Qué ruido hacían los niños!",
    fr: "Là! Les voilà! Quel bruit faisaient les enfants!",
    hi: "वहाँ! वे आ गए! बच्चे कितना शोर मचा रहे थे!"
  },
  "They all nearly tumbled out of the car and came leaping and shouting to her, each wanting to be the first to be hugged by her.": {
    ta: "அவர்கள் அனைவரும் காரில் இருந்து இறங்கி குதித்து அவளிடம் கத்திக்கொண்டே ஓடி வந்தார்கள், ஒவ்வொருவரும் அவளிடம் முதலில் கட்டிப்பிடிக்க விரும்பினர்.",
    es: "Casi todos se cayeron del auto y corrieron saltando y gritándole, cada uno queriendo ser el primero en ser abrazado por ella.",
    fr: "Ils ont tous failli dégringoler de la voiture et sont venus en sautant et en lui criant dessus, chacun voulant être le premier à être serré dans ses bras.",
    hi: "वे सभी कार से बाहर गिरते-पड़ते कूदते हुए और चिल्लाते हुए उसकी ओर दौड़े, हर कोई चाहता था कि वह सबसे पहले उसे गले लगाए।"
  },
  "Each one wanted to be closest to Ajji.": {
    ta: "ஒவ்வொருவரும் அஜ்ஜிக்கு மிக அருகில் இருக்க விரும்பினர்.",
    es: "Cada uno quería estar lo más cerca posible de Ajji.",
    fr: "Chacun voulait être le plus proche possible d'Ajji.",
    hi: "हर कोई अज्जी के सबसे करीब होना चाहता था।"
  },
  "Soon the children settled down.": {
    ta: "விரைவில் குழந்தைகள் அமைதியடைந்தனர்.",
    es: "Pronto los niños se calmaron.",
    fr: "Bientôt, les enfants se sont installés.",
    hi: "जल्द ही बच्चे शांत हो गए।"
  },
  "A visit to Ajji and Ajja’s house meant first inspecting the garden to see how much the plants had grown since they last came.": {
    ta: "அஜ்ஜி மற்றும் அஜ்ஜா வீட்டிற்குச் செல்வது என்பது முதலில் தோட்டத்தை ஆய்வு செய்து, அவர்கள் கடைசியாக வந்ததில் இருந்து செடிகள் எவ்வளவு வளர்ந்திருக்கின்றன என்று பார்ப்பதாகும்.",
    es: "Una visita a la casa de Ajji y Ajja significaba primero inspeccionar el jardín para ver cuánto habían crecido las plantas desde la última vez que vinieron.",
    fr: "Une visite chez Ajji et Ajja signifiait d'abord inspecter le jardin pour voir à quel point les plantes avaient poussé depuis leur dernière visite.",
    hi: "अज्जी और अज्जा के घर आने का मतलब सबसे पहले बगीचे का निरीक्षण करना था कि पिछली बार आने के बाद से पौधे कितने बढ़ गए हैं।"
  },

  // Page 13: Doctor, Doctor
  "The first day, the children asked, ‘Ajji, how do you know so many stories?’": {
    ta: "முதல் நாள், குழந்தைகள் கேட்டார்கள், 'அஜ்ஜி, உங்களுக்கு எப்படி இத்தனை கதைகள் தெரியும்?'",
    es: "El primer día, los niños preguntaron: 'Ajji, ¿cómo sabes tantas historias?'",
    fr: "Le premier jour, les enfants ont demandé: 'Ajji, comment connais-tu tant d'histoires?'",
    hi: "पहले दिन, बच्चों ने पूछा, 'अज्जी, आप इतनी कहानियाँ कैसे जानती हैं?'"
  },
  "Ajji smiled and answered, ‘My grandmother told me many stories. Some I read in books. A few I learnt from youngsters like you, and the rest from your Ajja.’": {
    ta: "அஜ்ஜி புன்னகையுடன் பதிலளித்தார், 'என் பாட்டி எனக்கு நிறைய கதைகள் சொன்னாள். சிலவற்றை நான் புத்தகங்களில் படித்தேன். சில கதைகளை உங்களைப் போன்ற இளைஞர்களிடமிருந்து கற்றுக்கொண்டேன், மீதியை உங்கள் அஜ்ஜாவிடமிருந்து கற்றுக்கொண்டேன்.'",
    es: "Ajji sonrió y respondió: 'Mi abuela me contó muchas historias. Algunas las leo en libros. Unas pocas las aprendí de jóvenes como ustedes, y el resto de su Ajja.'",
    fr: "Ajji sourit et répondit: 'Ma grand-mère m'a raconté beaucoup d'histoires. Certaines que j'ai lues dans des livres. Quelques-unes que j'ai apprises de jeunes comme vous, et le reste de votre Ajja.'",
    hi: "अज्जी मुस्कुराईं और उत्तर दिया, 'मेरी दादी ने मुझे कई कहानियाँ सुनाईं। कुछ मैंने किताबों में पढ़ीं। कुछ मैंने आप जैसे युवाओं से सीखीं, और बाकी आपके अज्जा से सीखीं।'"
  },
  "Then Ajji paused and said, ‘I see all of you have grown a lot since the last time I saw you. So before I start telling any stories, I want to know what each of you want to be when you grow up.’": {
    ta: "பிறகு அஜ்ஜி சிறிது நேரம் நிறுத்தி, 'நான் உங்களை கடைசியாகப் பார்த்ததிலிருந்து நீங்கள் அனைவரும் நிறைய வளர்ந்திருப்பதை நான் காண்கிறேன். எனவே நான் கதைகளைச் சொல்லத் தொடங்குவதற்கு முன், நீங்கள் வளரும்போது என்னவாக விரும்புகிறீர்கள் என்று நான் தெரிந்து கொள்ள விரும்புகிறேன்' என்றார்.",
    es: "Luego Ajji hizo una pausa y dijo: 'Veo que todos ustedes han crecido mucho desde la última vez que los ver. Así que antes de comenzar a contar historias, quiero saber qué quiere ser cada uno de ustedes cuando crezca'.",
    fr: "Puis Ajji fit une pause et dit: 'Je vois que vous avez tous beaucoup grandi depuis la dernière fois que je vous ai vus. Donc avant de commencer à raconter des histoires, je veux savoir ce que chacun de vous veut devenir en grandissant'.",
    hi: "फिर अज्जी रुकीं और कहा, 'मैं देख रही हूँ कि जब से मैंने तुम्हें आखिरी बार देखा है तब से तुम सब बहुत बड़े हो गए हो। इसलिए कोई भी कहानी शुरू करने से पहले, मैं जानना चाहती हूँ कि बड़े होकर तुम सब क्या बनना चाहते हो।'"
  },
  "Finally, he opened his mouth and uttered one word, ‘Water!’": {
    ta: "கடைசியாக, வாயைத் திறந்து ஒரு வார்த்தையைச் சொன்னார், 'தண்ணீர்!'",
    es: "Finalmente, abrió la boca y pronunció una palabra: '¡Agua!'",
    fr: "Finalement, il ouvrit la bouche et prononça un mot: 'De l'eau!'",
    hi: "अंत में, उसने अपना मुँह खोला और एक शब्द कहा, 'पानी!'"
  },
  "Who Was the Happiest of Them All?": {
    ta: "அனைவரிலும் மகிழ்ச்சியாக இருந்தவர் யார்?",
    es: "¿Quién era el más feliz de todos?",
    fr: "Qui était le plus heureux de tous?",
    hi: "उन सबमें सबसे खुश कौन था?"
  },
  "Meenu was upset. She pouted and sulked and would not talk to Ajji. But how can any child be angry with Ajji for very long?": {
    ta: "மீனு வருத்தமடைந்தாள். அவள் உதட்டைப் பிதுக்கி சலித்துக் கொண்டு அஜ்ஜியிடம் பேசவே இல்லை. ஆனால் எந்தக் குழந்தையாவது அஜ்ஜியிடம் நீண்ட நேரம் கோபமாக இருக்க முடியுமா?",
    es: "Meenu estaba molesta. Hizo un puchero, se enfurruñó y no quiso hablar con Ajji. ¿Pero cómo puede un niño estar enojado con Ajji por mucho tiempo?",
    fr: "Meenu était contrariée. Elle boudait et refusait de parler à Ajji. Mais comment un enfant peut-il rester fâché contre Ajji bien longtemps?",
    hi: "मीनू परेशान थी। वह मुँह फुलाए और रूठी रही और अज्जी से बात नहीं की। लेकिन कोई भी बच्चा अज्जी से कब तक नाराज़ रह सकता है?"
  },
  "Their grandmother was just too loving and affectionate for anyone to not tell her what was wrong.": {
    ta: "அவர்களின் பாட்டி மிகவும் அன்பும் பாசமும் கொண்டவர் என்பதால் தங்களுக்கு என்ன தவறு நடந்தது என்று அவளிடம் சொல்லாமல் இருக்க முடியாது.",
    es: "Su abuela era simplemente demasiado cariñosa y afectuosa como para que alguien no le contara lo que andaba mal.",
    fr: "Leur grand-mère était tout simplement trop aimante et affectueuse pour que quiconque ne lui dise pas ce qui n'allait pas.",
    hi: "उनकी दादी इतनी प्यारी और स्नेही थीं कि कोई भी उन्हें अपनी समस्या बताए बिना नहीं रह सकता था।"
  },
  "‘Ajji, it’s been three days, and you have not told a story about a king yet!’ Meenu grumbled.": {
    ta: "'அஜ்ஜி, மூன்று நாட்களாகிவிட்டன, நீங்கள் இன்னும் ஒரு அரசனைப் பற்றி கதை சொல்லவே இல்லை!' என்று மீனு புலம்பினாள்.",
    es: "'¡Ajji, han pasado tres días y todavía no has contado una historia sobre un rey!', se quejó Meenu.",
    fr: "'Ajji, cela fait trois jours et tu n'as pas encore raconté d'histoire de roi !' bougonna Meenu.",
    hi: "'अज्जी, तीन दिन हो गए हैं, और आपने अभी तक किसी राजा की कहानी नहीं सुनाई है!' मीनू बड़बड़ाई।"
  },
  "Ajji nodded. ‘It’s true, Meenu. That was my fault; I should have told you a story about a king right away!’": {
    ta: "அஜ்ஜி தலையசைத்தார். 'உண்மைதான் மீனு. அது என் தவறுதான்; நான் உடனடியாக ஒரு அரசனைப் பற்றி கதை சொல்லியிருக்க வேண்டும்!'",
    es: "Ajji asintió con la cabeza. 'Es verdad, Meenu. Fue culpa mía; ¡debería haberte contado una historia sobre un rey de inmediato!'",
    fr: "Ajji hocha la tête. 'C'est vrai, Meenu. C'était de ma faute ; j'aurais dû te raconter une histoire de roi tout de suite !'",
    hi: "अज्जी ने सिर हिलाया। 'यह सच है, मीनू। वह मेरी गलती थी; मुझे तुम्हें तुरंत एक राजा की कहानी सुनानी चाहिए थी!'"
  },
  "‘And I want a good, nice king, who does good, nice things for his people—not horrible things like punishing them and jailing them,’ Meenu sat straight and demanded.": {
    ta: "'மேலும் எனக்கு ஒரு நல்ல, அமைதியான அரசன் வேண்டும், அவர் தனது மக்களுக்கு நல்ல காரியங்களைச் செய்வார்—அவர்களைத் தண்டிப்பது மற்றும் சிறையில் அடைப்பது போன்ற கொடூரமான காரியங்களைச் செய்யக் கூடாது,' என்று மீனு நேராக நிமிர்ந்து உட்கார்ந்து கேட்டாள்.",
    es: "'Y quiero un rey bueno y amable, que haga cosas buenas por su pueblo, no cosas horribles como castigarlos y encarcelarlos', exigió Meenu sentándose derecha.",
    fr: "'Et je veux un bon roi, gentil, qui fait de bonnes choses pour son peuple — pas des choses horribles comme les punir ou les jeter en prison', exigea Meenu en se redressant.",
    hi: "'और मुझे एक अच्छा, दयालु राजा चाहिए, जो अपनी प्रजा के लिए अच्छे काम करे—सजा देने और जेल में डालने जैसे भयानक काम न करे,' मीनू ने सीधे बैठकर मांग की।"
  },
  "‘All right, dear. Here’s a king, just as you wanted . . .’": {
    ta: "'சரி கண்ணா. இதோ நீ கேட்டபடியே ஒரு அரசன் . . .'",
    es: "'Está bien, cariño. Aquí hay un rey, tal como querías...'",
    fr: "'D'accord, ma chérie. Voici un roi, tout comme tu le voulais...'",
    hi: "'ठीक है, प्रिय। यहाँ एक राजा है, जैसा तुम चाहती थी...'"
  },
  "And Ajji began her story.": {
    ta: "மேலும் அஜ்ஜி தனது கதையைத் தொடங்கினாள்.",
    es: "Y Ajji comenzó su historia.",
    fr: "Et Ajji commença son histoire.",
    hi: "और अज्जी ने अपनी कहानी शुरू की।"
  },
  "King Amrit loved his people and looked after the affairs of his kingdom well.": {
    ta: "அம்ரித் அரசன் தனது மக்களை நேசித்தார் மற்றும் தனது ராஜ்ஜியத்தின் விவகாரங்களை நன்றாகக் கவனித்துக் கொண்டார்.",
    es: "El rey Amrit amaba a su pueblo y cuidaba bien los asuntos de su reino.",
    fr: "Le roi Amrit aimait son peuple et gérait bien les affaires de son royaume.",
    hi: "राजा अमृत अपनी प्रजा से प्यार करते थे और अपने राज्य के मामलों की अच्छी तरह से देखभाल करते थे।"
  },
  "His minister, Chandan, was a wise man who helped the king in his work tirelessly.": {
    ta: "அவரது அமைச்சர் சந்தன், அரசருக்குத் தனது பணியில் அயராது உதவிய ஒரு புத்திசாலி மனிதர் ஆவார்.",
    es: "Su ministro, Chandan, era un hombre sabio que ayudaba al rey en su trabajo incansablemente.",
    fr: "Son ministre, Chandan, était un homme sage qui aidait inlassablement le roi dans sa tâche.",
    hi: "उनका मंत्री, चंदन, एक बुद्धिमान व्यक्ति था जो बिना थके राजा के काम में उनकी मदद करता था।"
  }
};

// Multi-lingual vocabulary lookup for custom generative translation fallback
const MULTI_DICTIONARIES: Record<string, Record<string, string>> = {
  ta: {
    grandma: "பாட்டி",
    stories: "கதைகள்",
    story: "கதை",
    children: "குழந்தைகள்",
    king: "அரசர்",
    thief: "திருடன்",
    gold: "தங்கம்",
    treasure: "புதையல்",
    water: "தண்ணீர்",
    forest: "காடு",
    happy: "மகிழ்ச்சி",
    sad: "சோகம்",
    doctor: "மருத்துவர்",
    village: "கிராமம்",
    summer: "கோடை",
    holiday: "விடுமுறை",
    house: "வீடு",
    cow: "பசு",
    dog: "நாய்"
  },
  es: {
    grandma: "abuela",
    stories: "historias",
    story: "historia",
    children: "niños",
    king: "rey",
    thief: "ladrón",
    gold: "oro",
    treasure: "tesoro",
    water: "agua",
    forest: "bosque",
    happy: "feliz",
    sad: "triste",
    doctor: "médico",
    village: "pueblo",
    summer: "verano",
    holiday: "vacaciones",
    house: "casa",
    cow: "vaca",
    dog: "perro"
  },
  fr: {
    grandma: "grand-mère",
    stories: "histoires",
    story: "histoire",
    children: "enfants",
    king: "roi",
    thief: "voleur",
    gold: "or",
    treasure: "trésor",
    water: "eau",
    forest: "forêt",
    happy: "heureux",
    sad: "triste",
    doctor: "médecin",
    village: "village",
    summer: "été",
    holiday: "vacances",
    house: "maison",
    cow: "vache",
    dog: "chien"
  },
  hi: {
    grandma: "दादी",
    stories: "कहानियाँ",
    story: "कहानी",
    children: "बच्चे",
    king: "राजा",
    thief: "चोर",
    gold: "सोना",
    treasure: "खजाना",
    water: "पानी",
    forest: "वन",
    happy: "खुश",
    sad: "उदास",
    doctor: "डॉक्टर",
    village: "गाँव",
    summer: "गर्मी",
    holiday: "छुट्टी",
    house: "घर",
    cow: "गाय",
    dog: "कुत्ता"
  }
};

export const PAGE_CONTENTS: Record<number, string[]> = {
  3: ["SUDHA MURTY", "GRANDMA'S BAG OF STORIES", "Illustrations By Priya Kuriyan", "PUFFIN BOOKS"],
  6: ["Author's Note", "My grandmother, Krishnaa, popularly known as Krishtakka, was very bright and affectionate. She was also a great storyteller. She never gave us any sermons but taught the values of life through her stories."],
  8: ["Read more in Puffin", "The Magic Drum and Other Favourite Stories by Sudha Murty. A princess who thinks she was a bird, a coconut that cost a thousand rupees, and a shepherd with a bag of words."],
  11: [
    "Summer holidays!",
    "Ajji smiled to herself as she waited for two more of her grandchildren to arrive.",
    "Raghu and Meenu would be here soon. Anand and Krishna had already arrived with their mother the previous evening.",
    "They had been waiting restlessly for their cousins to arrive ever since.",
    "Even though Ajji told them Raghu and Meenu would be here the next morning, these two kids just would not listen.",
    "They went to the railway station with their grandfather, Ajja, to receive them.",
    "The train must have pulled into the tiny railway station of Shiggaon by now, and their grandfather would have hired a taxi to bring them home along with their mother and the stacks of luggage.",
    "Ajji hurried through her bath.",
    "She had finished cooking their favourite dishes, and was now wearing a nice, soft cotton sari before going to the veranda to wait for them.",
    "There! There they came! What a noise the children were making!",
    "They all nearly tumbled out of the car and came leaping and shouting to her, each wanting to be the first to be hugged by her.",
    "Each one wanted to be closest to Ajji.",
    "Soon the children settled down. A visit to Ajji and Ajja’s house meant first inspecting the garden to see how much the plants had grown since they last came."
  ],
  13: [
    "The first day, the children asked, ‘Ajji, how do you know so many stories?’",
    "Ajji smiled and answered, ‘My grandmother told me many stories. Some I read in books. A few I learnt from youngsters like you, and the rest from your Ajja.’",
    "Then Ajji paused and said, ‘I see all of you have grown a lot since the last time I saw you. So before I start telling any stories, I want to know what each of you want to be when you grow up.’",
    "Raghu, who was eleven years old, and the oldest of all, said immediately, ‘I want to be an environment scientist.’",
    "Meenu, who was nine, said, ‘I have not decided, maybe a computer person like my dad.’",
    "Anand, who was ten, said, ‘I want to be an astronaut,’ and his twin sister Krishna firmly said, ‘I want to be a fashion designer.’",
    "Ajji smiled. ‘I am glad all of you have thought about this. We should always have some aim in life which we must try to achieve while being of help to others. Now let me tell you a story of a person who learnt just such a lesson.’",
    "Shall we, too, join Ajji and her gang of young friends and hear the story?",
    "On a blazing hot summer afternoon, an old man came walking down a narrow village path.",
    "He was tired and thirsty. Right by the road, he spotted a tiny grocery store.",
    "It had a tin roof and mud walls. The shopkeeper sat inside fanning himself and shooing away the flies that were buzzing around in the stifling heat.",
    "There was a little bench in front of the store where the villagers met when evening came and the land had cooled down. The old man flopped down on the bench. He was so tired that for a while he could not speak.",
    "Finally, he opened his mouth and uttered one word, ‘Water!’"
  ],
  21: [
    "Kavery and the Thief",
    "The children had gone with their Ajja to the paddy fields that morning. They were all city kids and did not know a thing about farming!",
    "On the way, Anand was surprised to see a bird’s nest on top of the tree. He said to Ajja, ‘I wonder how birds decide where and how to make their nests!’",
    "Ajja said, ‘The straw in the nest is from the paddy field. Do you know, farming helps human beings as well as birds?’",
    "Krishna replied, ‘Ajja, I thought wheat and rice can be just plucked from trees, like mangoes. But today I realized there is so much work in farming.’",
    "That afternoon, after lunch, when they gathered around Ajji for the day’s story, she looked sharply at the children. They had enjoyed learning about farming activities like cleaning seeds and separating the straw from paddy."
  ],
  28: [
    "Who Was the Happiest of Them All?",
    "Meenu was upset. She pouted and sulked and would not talk to Ajji. But how can any child be angry with Ajji for very long?",
    "Their grandmother was just too loving and affectionate for anyone to not tell her what was wrong.",
    "‘Ajji, it’s been three days, and you have not told a story about a king yet!’ Meenu grumbled.",
    "Ajji nodded. ‘It’s true, Meenu. That was my fault; I should have told you a story about a king right away!’",
    "‘And I want a good, nice king, who does good, nice things for his people—not horrible things like punishing them and jailing them,’ Meenu sat straight and demanded.",
    "‘All right, dear. Here’s a king, just as you wanted . . .’",
    "And Ajji began her story.",
    "King Amrit loved his people and looked after the affairs of his kingdom well. His minister, Chandan, was a wise man who helped the king in his work tirelessly."
  ],
  34: [
    "The Enchanted Scorpions",
    "What an exciting morning the children had had that day! Ajja had asked for their help in cleaning up his old storeroom.",
    "Ajja loved to keep all kinds of old things in that room, much to Ajji’s annoyance.",
    "She firmly believed the room was the principle attraction for all the cockroaches, mice, termites and other such bugs in the house. Every summer holiday the children spent a day clearing out the room, exclaiming over all the treasures they had unearthed.",
    "Ajja even let them keep some of the odds and ends they found. That didn’t please their mothers too much though!",
    "Today they had found an old wooden box. It was a big box, beautifully carved all over with flowers, and vines and leaves."
  ],
  40: [
    "The Horse Trap",
    "The next day, there was a surprise summer shower. The land smelled beautiful. The thirsty earth had soaked in every drop of rainwater.",
    "The children had been very busy shifting the puppies and kittens, who were roaming in the back and front yards, into the house so that they did not get drenched in the rain.",
    "Their respective mothers were very busy shifting the pappadams left to dry on the terrace. Summer is the season when, under Ajji’s leadership, pickles and pappadams were made.",
    "Meenu started a calculation. ‘Everyone needs at least five pappadams per day. For the next one month 600 pappadams will be needed. Tomorrow our neighbour Vishnu Kaka’s three grandchildren are coming.’"
  ]
};

const cleanText = (txt: string) => {
  return txt.replace(/[‘’'“”]/g, "'").trim();
};

export const translateText = (text: string, targetLang = 'ta'): string => {
  const cleaned = cleanText(text);

  // 1. Check exact match in database
  const entry = STORIES_DATABASE[cleaned];
  if (entry && entry[targetLang]) {
    return entry[targetLang];
  }

  // 2. Lookup case insensitively
  const dbKey = Object.keys(STORIES_DATABASE).find(
    (k) => k.toLowerCase() === cleaned.toLowerCase()
  );
  if (dbKey && STORIES_DATABASE[dbKey][targetLang]) {
    return STORIES_DATABASE[dbKey][targetLang];
  }

  // 3. Fallback generative translation based on dictionary vocabulary
  const words = cleaned
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(/\s+/);

  const dict = MULTI_DICTIONARIES[targetLang] || MULTI_DICTIONARIES['ta'];
  const translatedWords = words.map((w) => dict[w]).filter(Boolean);

  if (translatedWords.length > 0) {
    return translatedWords.join(" ") + ".";
  }

  return `[Mock ${targetLang.toUpperCase()}]: ${text}`;
};

export const splitIntoSentences = (text: string): string[] => {
  if (!text) return [];
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
};

export const translateTextFree = async (text: string, targetLang = 'ta'): Promise<string> => {
  const cleaned = cleanText(text);

  const entry = STORIES_DATABASE[cleaned];
  if (entry && entry[targetLang]) {
    return entry[targetLang];
  }

  const dbKey = Object.keys(STORIES_DATABASE).find(
    (k) => k.toLowerCase() === cleaned.toLowerCase()
  );
  if (dbKey && STORIES_DATABASE[dbKey][targetLang]) {
    return STORIES_DATABASE[dbKey][targetLang];
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('API fetch failed');
    const data = await res.json();
    return data[0].map((x: any) => x[0]).join('');
  } catch (error) {
    console.error('Free translation API error:', error);
    return translateText(text, targetLang);
  }
};
