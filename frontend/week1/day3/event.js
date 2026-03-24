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
var myTitle = document.getElementById('title');
var input1 = document.getElementById('inputBox');
var button = document.getElementById('btn');
button.addEventListener("click", function () {
    myTitle.innerText = input1.value;
    button.innerText = "clicked";
    button.style.backgroundColor = "blue";
});
