"use-strict";

console.log("Hello world");

// fetch("family.json")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("example.json")
//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (json) {
//     console.log(json);
//   });

const fetchData = () =>
  fetch("family.json")
    .then((res) => res.json())
    .then((json) => console.log(json));

const fetchDataAndDisplay = () =>
  fetch("family.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const fetchedData = document.getElementById("fetchedData");
      fetchedData.innerHTML = "";
      json.map((person) => {
        fetchedData.innerHTML += `<li> Name: ${person.name}, 
         Relationship: ${person.rel}, 
         Age: ${person.age} </li>`;
      });
    });

const fetchDataFromAPIAndDisplay = () =>
  fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const fetchedAPIData = document.getElementById("fetchedAPIData");
      fetchedAPIData.innerHTML = "";
      json.data.map((user) => {
        fetchedAPIData.innerHTML += `<div class="user-wrapper">
        <img src="${user.avatar}" />
        <li>ID#: ${user.id}</li>
        <li>First Name: ${user.first_name}</li>
        <li>Last Name: ${user.last_name}</li>
        <li>Email: ${user.email}</li>
        </div>`;
      });
    });

const fetchPokemon = () =>
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const fetchedPokemon = document.getElementById("fetchedPokemon");
      fetchedPokemon.innerHTML = "";
      json.results.map((poke) => {
        fetchedPokemon.innerHTML += `<div class="pokemon-wrapper">
        <li>Name: ${poke.name}</li>
        <li>Link: ${poke.url}</li>
        </div>`;
      });
    });
