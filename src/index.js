let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  function getToys(){
    return fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(data => createToy(data));
  }
  
  
// function createToy(data){
//   const toyCollection = document.getElementById("toy-collection")
//   data.forEach(function(toy){
   
//     let p = document.createElement('p')
//     let h2 = document.createElement('h2')
//     let image = document.createElement('img')
//     let button = document.createElement('button')

//     h2.innerText = toy.name
    
//     image.setAttribute('src', toy.image)
//     image.setAttribute('class', "toy-avatar")
//     // image.src = `${toy.image}`
//     // image.class = 'toy-avatar'
//     button.innerText= 'like'
//     p.innerHTML = toy.likes


//     toyCollection.append(h2, p, image, button)
//   })  
// }
const toyCollection = document.getElementById("toy-collection")

  function createToy(data){
    
    data.forEach(function(toy){
      toyCollection.innerHTML = toyCollection.innerHTML + `
      <h3>${toy.name}</h3>
      <img src="${toy.image}" class="toy-avatar"/>
      <p>${toy.likes}</p>
      <button class="like-btn">Like <3</button> `
    })
  }

  function createNewToy(toy){
    toyCollection.innerHTML = toyCollection.innerHTML + `
      <h3>${toy.name}</h3>
      <img src="${toy.image}" class="toy-avatar"/>
      <p>${toy.likes}</p>
      <button class="like-btn">Like <3</button> `
  }


const newToy = document.querySelector(".add-toy-form")
newToy.addEventListener('submit', function(e){
  e.preventDefault()
  const toy = {
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }
  createNewToy(toy)
  newToy.reset()
})


  getToys()
});
