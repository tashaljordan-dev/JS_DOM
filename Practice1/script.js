console.log("JS is connected!");

// DOM SETUP
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shoppingList");

// Add items to list
addBtn.addEventListener("click", () => {
  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  // Create list item
  const li = document.createElement("li");

  // Create span for text
  const span = document.createElement("span");
  span.textContent = itemText;

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  // Create Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  // REMOVE logic
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  // EDIT / SAVE logic
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;

      li.insertBefore(input, span);
      li.removeChild(span);
      editBtn.textContent = "Save";
    } else {
      const input = li.querySelector("input");
      span.textContent = input.value;

      li.insertBefore(span, input);
      li.removeChild(input);
      editBtn.textContent = "Edit";
    }
  });

  // Append everything
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  shoppingList.appendChild(li);

  // Clear input
  itemInput.value = "";
});