// used getElementBYId()
var title = document.getElementById('title');
console.log(title);
// change text
title.innerText = "Learning TypeScript DOM";
//change style
title.style.color = 'white';
title.style.fontSize = '30px';
// used querySelector()
var newTitle = document.querySelector('.heading');
newTitle.innerText = "Changed using query selector";
// add class dynamically
title.classList.add("bg-black");
// added a new element
var newPara = document.createElement('p');
newPara.innerText = 'This is a new paragraph added by typescript';
document.body.appendChild(newPara);
//change text
newPara.innerText = 'This is the another paragraph added by typescript';
// add some border radius
title.style.borderRadius = '15px';
title.style.backgroundColor = 'green';
// console.log(title.innerText);
// console.log(title.textContent);
// console.log(title.innerHTML);
var className = document.getElementsByClassName('heading bg-black');
console.log(className);
var myUl = document.querySelector('ul');
console.log(myUl);
// const green = myUl?.querySelector('li') as HTMLElement;
// green.innerText = 'five';
// green.style.color = 'green';
// const myList = document.querySelectorAll('li') as NodeListOf<HTMLElement>;
// myList[2].style.color = 'green';
