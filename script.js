// Here, we will select the container element, and then, choose the id of the child element in it, and, run the onclick function on it, to change the background color accordingly.

const container = document.querySelector(".container");

// const blue = document.querySelector("#lightblue");
// const red = document.querySelector("#red");
// const orange = document.querySelector("#orangered");
// const yellow = document.querySelector("#yellow");
// const pink = document.querySelector("#pink");


// blue.addEventListener("click", () => {
//     document.body.style.backgroundColor = "lightblue";
// });


container.children[0].addEventListener("click",()=>{
    document.body.style.backgroundColor = container.children[0].id;
    // We now need to loop in the container to change the color of the text, to black, for each child.
    for(let i = 0; i < container.children.length; i++){
    container.children[i].style.color = "black";
    }
})

container.children[1].addEventListener("click",()=>{
    document.body.style.backgroundColor = container.children[1].id;
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.color = "black";
        }
})


container.children[2].addEventListener("click",()=>{
    document.body.style.backgroundColor = container.children[2].id;
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.color = "black";
        }
})

container.children[3].addEventListener("click",()=>{
    document.body.style.backgroundColor = container.children[3].id;
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.color = "black";
        }
})

container.children[4].addEventListener("click",()=>{
    document.body.style.backgroundColor = container.children[4].id;
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.color = "black";
        }
})


container.children[5].addEventListener("click",()=>{
  document.body.style.backgroundColor = `rgb(230,230,230)`;
  for(let i = 0; i < container.children.length-1; i++)
    {
        container.children[i].style.color = container.children[i].id;
    }  
    container.children[5].style.color = "Gray";
})