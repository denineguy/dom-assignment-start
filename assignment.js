//Question 1:
//Select this task (in two different ways at least!) and change the background-color to black, text-color to white.

const task = document.querySelector('#task-1');
task.style.color = "white"
task.style.backgroundColor = "black"


const listItem = document.querySelector('li');
listItem.style.color = "white"
listItem.style.backgroundColor = "black"

// Question 2:
// Change the document title (in <head></head>) to "Assignment - Solved!". Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.
// const title1 = document.querySelector("title")
// title1.innerText = "Assignment - Solved!"

let title2 = document.head.querySelector("title")
title2.innerText = "Assignment - Solved"


//Question 3:
//Select the <h1> element on this page and change its text to "Assignment - Solved!".
const header = document.querySelector("h1")
header.innerText = "Assignment Solved"