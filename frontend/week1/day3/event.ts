// const button = document.getElementById('btn') as HTMLButtonElement;
// button.addEventListener("click", ()=>{
//     button.innerText = "Button Clicked";
// });

// button.addEventListener("click", () => {
//     button.style.color="red";
//     button.style.backgroundColor="yellow";
// });

// button.addEventListener("click", (event) => {
//     console.log(event);
// })

// const input = document.getElementById('inputBox') as HTMLInputElement;
// input.addEventListener("input",()=>{
//     console.log(input.value);
// })

// input.addEventListener("input", () =>{
//     input.innerText=input.value;
// })

const myTitle = document.getElementById('title') as HTMLElement;
const input1 = document.getElementById('inputBox') as HTMLInputElement;
const button = document.getElementById('btn') as HTMLButtonElement;

button.addEventListener("click",()=>{
    myTitle.innerText=input1.value;
    button.innerText="clicked";
    button.style.backgroundColor="blue";
    
})



