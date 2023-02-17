// const inputField = document.querySelector("#search");
// // const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// const url = 'https://od-api.oxforddictionaries.com/api/v2/entries'
// const id =  '9fb5264d'
// const key = 'dea1b37ff5b78803ab5b48c2464829ed'

// inputField.addEventListener("input", (e) => {
// //   e.preventDefault();
// //   let word = e.target.value;
// //   console.log(word);
// //   const getWord = async (word) => {
// //     try {
// //       const res = await fetch(url + word);
// //       const data = await res.json();
// //       console.log(data);
// //     } catch (err) {
// //       console.log(err.message);
// //     }
// //   };

// //   getWord();
// });

let info = document.querySelector(".container");
let html = "";

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  console.log(users);
  showUsers();

  //   update Ui
  // info.innerHTML = `
  // <ul>
  // <li>${users.id}</li>
  // <li></li>
  // <li></li>
  // <li></li>
  // <li></li>
  // <li></li>
  // </ul>
  // `

  // info = users.map(users => `<li key={users.id}>
  //     <p>Name: {users.name}</p>
  // </li>`

  // )
};
getUsers();

showUsers = (users) => {
  document.getElementById("name").innerText = `${users[0].name}`;

  document.getElementById("username").innerText = `${users[0].username}`;
};
