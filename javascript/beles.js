function handleSubmit(event){
    event.preventDefault();
    const geezInput = event.target.elements.geezinput;
    const submitBtn = event.target.elements.submit;
    const latinText = document.querySelector('.latin-text');
    const header = document.querySelector('.header');


    if(submitBtn.textContent == 'Convert'){
        latinText.textContent = geezToLatin(geezInput.value);
        header.style.display = 'none';
        latinText.style.display = 'block';
        submitBtn.textContent = 'Reset';
    }else if(submitBtn.textContent == 'Reset'){
        geezInput.value = '';
        latinText.textContent = '';
        latinText.style.display = 'none';
        header.style.display = 'block';
        submitBtn.textContent = 'Convert';
    }
    
}




function geezToLatin(geezText){
    const convDic = {"ሀ": "he", "ሁ": "hu", "ሂ": "hi", "ሃ": "ha", "ሄ": "hee", "ህ": "h", "ሆ": "ho", "ለ": "le", "ሉ": "lu", "ሊ": "li", "ላ": "la", "ሌ": "lee", "ል": "l", "ሎ": "lo", "ሏ": "laa", "ሐ": "He", "ሑ": "Hu", "ሒ": "Hi", "ሓ": "Ha", "ሔ": "Hee", "ሕ": "H", "ሖ": "Ho", "ሗ": "Haa", "መ": "me", "ሙ": "mu", "ሚ": "mi", "ማ": "ma", "ሜ": "mee", "ም": "m", "ሞ": "mo", "ሟ": "maa", "ረ": "re", "ሩ": "ru", "ሪ": "ri", "ራ": "ra", "ሬ": "ree", "ር": "r", "ሮ": "ro", "ሯ": "raa", "ሰ": "se", "ሱ": "su", "ሲ": "si", "ሳ": "sa", "ሴ": "see", "ስ": "s", "ሶ": "so", "ሷ": "saa", "ሸ": "she", "ሹ": "shu", "ሺ": "shi", "ሻ": "sha", "ሼ": "s", "ሽ": "sh", "ሾ": "sho", "ሿ": "s", "ቀ": "qe", "ቁ": "qu", "ቂ": "qi", "ቃ": "qa", "ቄ": "qee", "ቅ": "q", "ቆ": "qo", "ቇ": "qaa", "ቐ": "qhe", "ቑ": "qhu", "ቒ": "qhi", "ቓ": "qha", "ቔ": "q", "ቕ": "qh", "ቖ": "qho", "በ": "be", "ቡ": "bu", "ቢ": "bi", "ባ": "ba", "ቤ": "bee", "ብ": "b", "ቦ": "bo", "ቧ": "baa", "ቨ": "ve", "ቩ": "vu", "ቪ": "vi", "ቫ": "va", "ቬ": "vee", "ቭ": "v", "ቮ": "vo", "ቯ": "vaa", "ተ": "te", "ቱ": "tu", "ቲ": "ti", "ታ": "ta", "ቴ": "tee", "ት": "t", "ቶ": "to", "ቷ": "taa", "ቸ": "ce", "ቹ": "cu", "ቺ": "ci", "ቻ": "ca", "ቼ": "cee", "ች": "c", "ቾ": "co", "ቿ": "caa", "ነ": "ne", "ኑ": "nu", "ኒ": "ni", "ና": "na", "ኔ": "nee", "ን": "n", "ኖ": "no", "ኗ": "naa", "ኘ": "nye", "ኙ": "nyu", "ኚ": "nyi", "ኛ": "nya", "ኜ": "n", "ኝ": "ny", "ኞ": "nyo", "ኟ": "n", "አ": "e", "ኡ": "u", "ኢ": "i", "ኣ": "a", "ኤ": "e", "እ": "ə", "ኦ": "o", "ኧ": "a", "ከ": "ke", "ኩ": "ku", "ኪ": "ki", "ካ": "ka", "ኬ": "kee", "ክ": "k", "ኮ": "ko", "ኯ": "kaa", "ኸ": "xe", "ኹ": "xu", "ኺ": "xi", "ኻ": "xa", "ኼ": "xee", "ኽ": "x", "ኾ": "xo", "ወ": "we", "ዉ": "wu", "ዊ": "wi", "ዋ": "wa", "ዌ": "wee", "ው": "w", "ዎ": "wo", "ዐ": "e", "ዑ": "u", "ዒ": "i", "ዓ": "a", "ዔ": "e", "ዕ": "ə", "ዖ": "o", "ዘ": "ze", "ዙ": "zu", "ዚ": "zi", "ዛ": "za", "ዜ": "zee", "ዝ": "z", "ዞ": "zo", "ዟ": "zaa", "ዠ": "zhe", "ዡ": "zhu", "ዢ": "zhi", "ዣ": "zha", "ዤ": "z", "ዥ": "zh", "ዦ": "zho", "ዧ": "z", "የ": "ye", "ዩ": "yu", "ዪ": "yi", "ያ": "ya", "ዬ": "yee", "ይ": "y", "ዮ": "yo", "ደ": "de", "ዱ": "du", "ዲ": "di", "ዳ": "da", "ዴ": "dee", "ድ": "d", "ዶ": "do", "ዷ": "daa", "ጀ": "je", "ጁ": "ju", "ጂ": "ji", "ጃ": "ja", "ጄ": "jee", "ጅ": "j", "ጆ": "jo", "ጇ": "jaa", "ገ": "ge", "ጉ": "gu", "ጊ": "gi", "ጋ": "ga", "ጌ": "gee", "ግ": "g", "ጎ": "go", "ጏ": "gaa", "ጠ": "the", "ጡ": "thu", "ጢ": "thi", "ጣ": "tha", "ጤ": "t", "ጥ": "th", "ጦ": "tho", "ጧ": "t", "ጨ": "che", "ጩ": "chu", "ጪ": "chi", "ጫ": "cha", "ጬ": "c", "ጭ": "ch", "ጮ": "cho", "ጯ": "c", "ጰ": "phe", "ጱ": "phu", "ጲ": "phi", "ጳ": "pha", "ጴ": "p", "ጵ": "ph", "ጶ": "pho", "ጷ": "p", "ጸ": "tse", "ጹ": "tsu", "ጺ": "tsi", "ጻ": "tsa", "ጼ": "t", "ጽ": "ts", "ጾ": "tso", "ጿ": "t", "ፈ": "fe", "ፉ": "fu", "ፊ": "fi", "ፋ": "fa", "ፌ": "fee", "ፍ": "f", "ፎ": "fo", "ፏ": "faa", "ፐ": "pe", "ፑ": "pu", "ፒ": "pi", "ፓ": "pa", "ፔ": "pee", "ፕ": "p", "ፖ": "po", "ፗ": "paa", "ቈ": "qwe", "ቊ": "qwi", "ቋ": "qwa", "ቌ": "q", "ቍ": "qw", "ቘ": "q", "ቚ": "q", "ቛ": "q", "ቜ": "q", "ቝ": "qhw", "ኰ": "kwe", "ኲ": "kwi", "ኳ": "kwa", "ኴ": "k", "ኵ": "kw", "ዀ": "xwe", "ዂ": "xwi", "ዃ": "xwa", "ዄ": "x", "ዅ": "xw", "ጐ": "gwe", "ጒ": "gwi", "ጓ": "gwa", "ጔ": "g", "ጕ": "gw"}
    let latinText = '';
    for(let x=0; x < geezText.length; x++){
        const geezChar = geezText[x];
        const latinChar = convDic[geezChar];

        if(latinChar){
            latinText += latinChar;
        } else {
            latinText += geezChar;
        }
    }

    return latinText;
}