let wordList;
let translationTemplate;
let translations = [
    {
        deutsch: 'gut',
        chinesisch: 'hao',
    },
    {
        deutsch: 'du',
        chinesisch: 'ni',
    },
];

function start() {
    translations.push({ deutsch: 'hallo', chinesisch: 'nihao' });
    wordList = document.getElementById('wordlist');
    translationTemplate = document.getElementById('translationtemplate');
    translationTemplate.remove();
    let newWord = document.getElementById('newWord');
    newWord.addEventListener('click', addEmptyTranslation);
    for (let i = 0; i < translations.length; i++) {
        let currentTranslation = translations[i];
        addTranslation(currentTranslation.deutsch, currentTranslation.chinesisch);
    }
}

window.onload = start;

function addTranslation(deutsch, chinesisch) {
    let newTranslation = translationTemplate.cloneNode(true);
    wordList.appendChild(newTranslation);
    newTranslation.querySelector('.deutsch').value = deutsch;
    newTranslation.querySelector('.chinesisch').value = chinesisch;
}

function addEmptyTranslation() {
    addTranslation('', '');
}
