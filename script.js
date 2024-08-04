// var h =document.querySelector("h1");
// h.innerHTML = "Good Bye";

// var m = document.getElementById("main");
// // m.innerHTML = "Good Bye";        //<h1>"Hey, This is Sachin</h1>" se "Good Bye" aa gya.(but in small lettel not apply the h1 tag in 'Good Bye')
// // m.innerHTML = "<h1>Good Bye</h1>";  //Now its use the properties of h1.

// //for printing multiple elements:
// var s = "";
// for(let i=1;i<=10;i++){
//     s+="<h1>Good Bye</h1>";
// } 
// m.innerHTML = s;

/*
"https://i.pinimg.com/564x/8a/44/39/8a4439689a4b1df26491f7e8b257fbe0.jpg" alt="Dragonite Pokemon"
"https://i.pinimg.com/564x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg" alt="bulbasaur Pokemon"
"https://i.pinimg.com/564x/ad/51/5d/ad515d6f12c4bb7fe88a22dd3f143ed5.jpg" alt="riolu Pokemon"
"https://i.pinimg.com/564x/a3/d4/aa/a3d4aa05160b71850783e8490edc4529.jpg" alt="Plusle Pokemon"
"https://i.pinimg.com/564x/f7/7d/e2/f77de2bb78c72bc29a6575f0f8574d42.jpg" alt="meowth Pokemon"
"https://i.pinimg.com/564x/85/b3/d1/85b3d11ce6fa02fae323fc4c5f50473a.jpg" alt="muy Pokemon"
"https://i.pinimg.com/564x/eb/6d/33/eb6d3373813cd9fb747785a2b247609e.jpg" alt=""
"https://i.pinimg.com/564x/3e/95/6f/3e956fa3eeb09d3aa195e5d9089a232e.jpg" alt="forgeeks pokemon"
"https://i.pinimg.com/564x/31/a2/bb/31a2bb12442ea3348ab8fb223565dc89.jpg" alt="may pokemon
*/

var m = document.getElementById("main");
// var s = "";

let arr = ["https://i.pinimg.com/564x/8a/44/39/8a4439689a4b1df26491f7e8b257fbe0.jpg",
           "https://i.pinimg.com/564x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg",
           "https://i.pinimg.com/564x/ad/51/5d/ad515d6f12c4bb7fe88a22dd3f143ed5.jpg",
           "https://i.pinimg.com/564x/a3/d4/aa/a3d4aa05160b71850783e8490edc4529.jpg",
           "https://i.pinimg.com/564x/f7/7d/e2/f77de2bb78c72bc29a6575f0f8574d42.jpg",
           "https://i.pinimg.com/564x/85/b3/d1/85b3d11ce6fa02fae323fc4c5f50473a.jpg",
           "https://i.pinimg.com/564x/eb/6d/33/eb6d3373813cd9fb747785a2b247609e.jpg",
           "https://i.pinimg.com/564x/3e/95/6f/3e956fa3eeb09d3aa195e5d9089a232e.jpg",
           "https://i.pinimg.com/564x/31/a2/bb/31a2bb12442ea3348ab8fb223565dc89.jpg"
        ];   /*Array of images */
let s="";
for(let i=1;i<=70;i++){
    // let r = Math.floor(Math.random()*10)
    // s+= `<div class="card"><h1>${r}</h1></div>`;
    let r = Math.floor(Math.random()*arr.length);                  /*random index within range of array length */
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
m.innerHTML = s;
