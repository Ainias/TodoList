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
    load();
    wordList = document.getElementById('wordlist');
    translationTemplate = document.getElementById('translationtemplate');
    translationTemplate.remove();
    let newWord = document.getElementById('newWord');
    newWord.addEventListener('click', addEmptyTranslation);
    for (let i = 0; i < translations.length; i++) {
        let currentTranslation = translations[i];
        addTranslation(currentTranslation.deutsch, currentTranslation.chinesisch, i);
    }
}

window.onload = start;

function addTranslation(deutsch, chinesisch, index) {
    const newTranslation = translationTemplate.cloneNode(true);
    wordList.appendChild(newTranslation);
    const deutschElement = newTranslation.querySelector('.deutsch');
    deutschElement.value = deutsch;
    const chinesischElement = newTranslation.querySelector('.chinesisch');
    chinesischElement.value = chinesisch;
    translations[index] = { deutsch: deutsch, chinesisch: chinesisch };
    deutschElement.addEventListener('change', function (event) {
        translations[index].deutsch = deutschElement.value;
        save();
    });
    chinesischElement.addEventListener('change', function (event) {
        translations[index].chinesisch = chinesischElement.value;
        console.log(translations);
        save();
    });
}

function addEmptyTranslation() {
    addTranslation('', '', translations.length);
}

function save() {
    let jsonTranslation = JSON.stringify(translations);
    localStorage.setItem('translations', jsonTranslation);
}

function load() {
    let jsonTranslation = localStorage.getItem('translations');
    if (jsonTranslation !== null) {
        translations = JSON.parse(jsonTranslation);
    }
}
