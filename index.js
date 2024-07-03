// Write your code here!
document.body.removeChild(main)//deletes the main section which is a child of the body
var newHeader=document.createElement('h1')
newHeader.id='victory'
newHeader.textContent='Alpha is the champion'
document.body.append('newHeader')//newHeader variable points to a h1 element and is attached in the DOM
