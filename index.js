// Write your code here!
<<<<<<< HEAD
// const element=document.createElement("div")
// document.body.append(element)
document.querySelector("#main").remove()
let newHeader=document.createElement('h1')
newHeader.setAttribute("id","victory")
newHeader.textContent='kjim is the champion'
=======
document.body.removeChild(main)//deletes the main section which is a child of the body
var newHeader=document.createElement('h1')
newHeader.id='victory'
newHeader.textContent='Alpha is the champion'
document.body.append('newHeader')//newHeader variable points to a h1 element and is attached in the DOM
>>>>>>> cbc9cdcc8c9c8f8e5191cf07a30bb10a68792fee
