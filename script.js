// const languages = {
//     en: "Английский",
//     es: "Испанкий",
//     fr:  "Французский",
//     de: "Немецкий",
//     ru: "Русский",
//     it: "Итальянский",
// };


// function loadLanguages(){
//     const sourcelang = document.getElementById("sourceLang")
//     const targetLang = document.getElementById("targetLang")
//     for ( const [code,name] of Object.entries(languages)) {
//         sourcelang.innerHTML += `<option value="${code}">${name}</option>`
//         targetLang.innerHTML += `<option value="${code}">${name}</option>`
//     }
// }


// sourcelang.value = "en";
// targetLang.value = "ru";


// async function translateText() {
//     const text = document.getElementById("inputText").value
//     const targetLang = document.getElementById("targetLang").value
//     const sourceLang = document.getElementById("sourceLang").value
// }



const languages = {
    en: "Английский",
    es: "Испанский",
    fr: "Французский",
    de: "Немецкий",
    ru: "Русский",
    it: "Итальянский"
};

function loadLanguages() {
    const sourceLang = document.getElementById("sourceLang");
    const targetLang = document.getElementById("targetLang");




    // ask
    for (const [code, name] of Object.entries(languages)) {
        sourceLang.innerHTML += `<option value="${code}">${name}</option>`;
        targetLang.innerHTML += `<option value="${code}">${name}</option>`;
    }

    sourceLang.value = "en";
    targetLang.value = "ru";
}

async function translateText() {
    const text = document.getElementById("inputText").value;
    const targetLang = document.getElementById("targetLang").value;
    const sourceLang = document.getElementById("sourceLang").value;

    if (!text) {
        alert("Введите текст для перевода");
        return;
    }

    const url ="https://api.mymemory.translated.net/get?q=" + text + "&langpair=" + sourceLang + "|" + targetLang;





// ask


    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("outputText").value = data.responseData.translatedText;
    } catch (error) {
        alert("Ошибка при переводе");
    }
}

loadLanguages();
