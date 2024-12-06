const text = document.querySelector('.newText')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const parag = document.createElement('p')
const userText = document.querySelector('input')
const grandParents = document.querySelector('#grand-parent-id')
const parents = document.querySelectorAll('.parent')
const children = document.querySelectorAll(".child")

parag.textContent = 'haha'
text.appendChild(parag)


btn1.addEventListener('click',(e)=>{
  text.style.cssText = `
  color: white;
  background-color: black;
`;
})

btn2.addEventListener('click',(e)=>{
  text.textContent += " "+ userText.value
})

btn3.addEventListener('click',(e)=>{
  text.style.cssText = `
  color: black;
  background-color: white;
`;
})

btn4.addEventListener('click',(e)=>{
  text.textContent = " "
  alert("Texts Cleared")
})

function changeColor(element){
    console.log
    element.style.backgroundColor = 'gray'
}
console.log(parents)
grandParents.addEventListener('click', changeColor(grandParents))
// parents.forEach(changeColor)
// children.addEventListener('click',changeColor)