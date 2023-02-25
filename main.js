// // const inputField = document.querySelector("#search");
// // // const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// // const url = 'https://od-api.oxforddictionaries.com/api/v2/entries'
// // const id =  '9fb5264d'
// // const key = 'dea1b37ff5b78803ab5b48c2464829ed'

// // inputField.addEventListener("input", (e) => {
// // //   e.preventDefault();
// // //   let word = e.target.value;
// // //   console.log(word);
// // //   const getWord = async (word) => {
// // //     try {
// // //       const res = await fetch(url + word);
// // //       const data = await res.json();
// // //       console.log(data);
// // //     } catch (err) {
// // //       console.log(err.message);
// // //     }
// // //   };

// // //   getWord();
// // });

// let info = document.querySelector(".container");
// let html = "";

// const getUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/");
//   const users = await res.json();
//   console.log(users);
//   showUsers();

//   //   update Ui
//   // info.innerHTML = `
//   // <ul>
//   // <li>${users.id}</li>
//   // <li></li>
//   // <li></li>
//   // <li></li>
//   // <li></li>
//   // <li></li>
//   // </ul>
//   // `

//   // info = users.map(users => `<li key={users.id}>
//   //     <p>Name: {users.name}</p>
//   // </li>`

//   // )
// };
// getUsers();

// showUsers = (users) => {
//   document.getElementById("name").innerText = `${users[0].name}`;

//   document.getElementById("username").innerText = `${users[0].username}`;
// };

// RECENT TRAIL
const wordSearch = document.querySelector("form");
const title = document.querySelector(".title");
const key = "f270d980-9e02-46bd-bf80-a762cf5362b2";
const audio = document.querySelector(".audio");
const noun = document.querySelector(".noun");

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
      title.innerHTML = `
    <h4>${data[0].word}</h4>
    <p>${data[0].phonetic}</p>
  `;
      noun.innerHTML = `
    <p>${data[0].meanings[0].partOfSpeech}</p> <hr>
     <p class="meaning">meaning</p>
    <ul class="meaning-list">
        <li>${data[0].meanings[0].definitions[0].definition}</li>
        <li>${data[0].meanings[0].definitions[1].definition}</li>
        <li>${data[0].meanings[0].definitions[2].definition}</li>
    </ul>
    <p>Synonyms</p> <span class="synonyms"></span>
  `;
      audio.textContent = data[0].phonetics[2].text.audio;
    } catch (err) {
      console.log(err.message);
    }
  };
  getWord();
});
