// const key = "f270d980-9e02-46bd-bf80-a762cf5362b2";
// const notFound = document.querySelector(".notFound");
// const definationBox = document.querySelector(".def");
// const title = document.querySelector('.title')

// const getData = async (word) => {
//   try {
//     const res = await fetch(
//       `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${key}`
//     );
//     const data = await res.json();
//     console.log(data);

//     if (!data.length) {
//       notFound.innerText = "No result found";
//       return;
//     }

//     if (typeof data[0] == "string") {
//       //if result is suggestions
//       let heading = document.createElement("h3");
//       heading.innerText = "Did you mean?";
//       notFound.appendChild(heading);

//       data.forEach((element) => {
//         let suggestion = document.createElement("span");
//         suggestion.classList.add("suggested");
//         suggestion.innerText = element;
//         notFound.appendChild(suggestion);
//       });
//       return;
//     }

//     // update ui
//     title.innerHtml = `
//     <h4>${data[0].hwi.hw}</h4>
//     <p>${data[0].phonetic}</p>
//     `

//   } catch (err) {
//     console.log(err.message);
//   }
// };

// wordSearch.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const word = wordSearch.word.value;
//   if (word == "") {
//     alert("Please type a word");
//     return;
//   }
//   getData(word);
// });

// RECENT TRAIL
const wordSearch = document.querySelector("form");
const top = document.querySelector(".top");
const key = "f270d980-9e02-46bd-bf80-a762cf5362b2";
const notFound = document.querySelector(".notFound");
const audio = document.querySelector(".uil-play-circle");
const noun = document.querySelector(".noun");
const verb = document.querySelector(".verb");
const adverb = document.querySelector(".adverb");
const adjective = document.querySelector(".adjective");
const synonyms = document.querySelector(".synonyms");
const source = document.querySelector(".source");
const theme = document.querySelector(".switch");
const body = document.querySelector("body");

wordSearch.addEventListener("submit", (e) => {
  e.preventDefault();

  // get word value
  const word = wordSearch.word.value;
  if (word == "") {
    alert("Please type a word");
    return;
  }
  console.log(word);

  // fetch word meaning
  const getWord = async () => {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();
      console.log(data);
      // update UI
      top.innerHTML = `
      <div class="title">
        <h4>${data[0].word}</h4>
        <p>${data[0].phonetic}</p> 
      </div>
        <i class="uil uil-play-circle"></i>
  `;

      noun.innerHTML = `
      <span class="break">
      <p>${data[0].meanings[0].partOfSpeech}</p> <hr>
    </span>
     <p class="meaning">meaning</p>
    <ul class="meaning-list">
        <li>${data[0].meanings[0].definitions[0].definition}</li>
        <li>${data[0].meanings[0].definitions[1].definition}</li>
        <li>${data[0].meanings[0].definitions[2].definition}</li>
    </ul>
    <p>Synonyms
    ${data[0].meanings[0].synonyms.map((synonym) => {
      return `<span class='synonym'>${synonym}</span>`;
    })}
    </p>

  
  `;

      verb.innerHTML = `
  <p>${data[0].meanings[1].partOfSpeech}</p>
        <hr />
        <p class="meaning">meaning</p>
        <ul class="meaning-list">
          <li>${data[0].meanings[1].definitions[0].definition}</li>
          <blockquote>"${data[0].meanings[1].definitions[0].example}"</blockquote>
          <li>${data[0].meanings[1].definitions[1].definition}</li>
          <blockquote>"${data[0].meanings[1].definitions[1].example}"</blockquote>
        </ul>
        
  `;

      adjective.innerHTML = `
      <span>
      <p>${data[0].meanings[2].partOfSpeech}</p> <hr>
    </span>
     <p class="meaning">meaning</p>
    <ul class="meaning-list">
        <li>${data[0].meanings[2].definitions[0].definition}</li>
        <li>${data[0].meanings[2].definitions[1].definition}</li>
        <li>${data[0].meanings[2].definitions[2].definition}</li>
    </ul>
    <p>Synonyms
    ${data[0].meanings[2].synonyms.map((synonym) => {
      return `<span class='synonym'>${synonym}</span>`;
    })}
    </p>

  
  `;

      adverb.innerHTML = `
      <span>
      <p>${data[0].meanings[3].partOfSpeech}</p> <hr>
    </span>
     <p class="meaning">meaning</p>
    <ul class="meaning-list">
        ${data[0].meanings[3].definitions.map((definition) => {
          return `<li>${definition}</li>`;
        })}
        
    </ul>
    <p>Synonyms
    ${data[0].meanings[3].synonyms.map((synonym) => {
      return `<span class='synonym'>${synonym}</span>`;
    })}
    </p>

  
  `;

      source.innerHTML = `
  <p>Source</p>
        <a href="${data[0].sourceUrls[0]}" target="_blank">${data[0].sourceUrls[0]}</a>
  `;
      audio.textContent = data[0].phonetics[2].text.audio;
    } catch (err) {
      console.log(err.message);
    }
  };
  getWord();
});

theme.addEventListener("click", () => {
  toggleTheme();
});

function toggleTheme() {
  // let element = document.body;
  body.classList.toggle("dark-mode");
}

// to display synonyms
{
  /* <p>Synonyms ${data[0].meeanings[0].synonyms.forEach((element) => {
  let suggestion = document.createElement("span");
  suggestion.classList.add("suggested");
  suggestion.innerText = element;
  synonyms.appendChild(suggestion);
})
return;
} </p> */
}
