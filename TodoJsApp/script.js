const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function createNewTask(text) {
  // Create a new list item
  let li = document.createElement("li");
  li.innerHTML = text;

  // Create a close (delete) button
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  return li;
}

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    // Create a new task and append it to the list
    let newTask = createNewTask(inputBox.value);
    listContainer.appendChild(newTask);

    // Save data to local storage
    saveData();
  }

  // Clear the input box
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Toggle the 'checked' class for marking completed tasks
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Remove the parent li when the close button is clicked
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  // Save the listContainer's inner HTML to local storage
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  // Load data from local storage and display it
  listContainer.innerHTML = localStorage.getItem("data");
}

// Show tasks when the page loads
showTask();
