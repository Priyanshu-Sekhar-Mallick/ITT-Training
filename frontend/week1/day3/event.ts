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

const titleElement  = document.getElementById('title') as HTMLElement;
const inputElement  = document.getElementById('inputBox') as HTMLInputElement;
const submitButton  = document.getElementById('btn') as HTMLButtonElement;

submitButton .addEventListener("click",()=>{
    titleElement.innerText=inputElement.value;
    submitButton.innerText="clicked";
    submitButton .style.backgroundColor="blue";
    
})



