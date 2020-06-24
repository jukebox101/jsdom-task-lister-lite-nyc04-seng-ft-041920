document.addEventListener("DOMContentLoaded", function () {
  // your code here
  const form = document.querySelector('#create-task-form')

  form.addEventListener("submit", function (event) {

    event.preventDefault()


  const task = event.target.newTaskDescription.value

  const listingObj = {
    newTaskDescription: task
  }

  console.log(listingObj)

  renderOneListing(listingObj)
  })

  const taskSection = document.querySelector("#tasks")

  function renderOneListing(listingObj){

    const taskList = document.createElement("ul")
    taskList.classList.add("task")

    taskList.innerHTML =
     `  
      <li>${listingObj.newTaskDescription}</li>

      `
      taskSection.append(taskList)
  }

})