// TASK 1: One object with string, number, boolean, and array data.
const userProfile = {
  name: "Nassypkeliyev Yerassyl",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Coding", "Gaming"]
};

// TASK 2: Arithmetic calculations and console output.
function showProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear; // Approximate age (birth month unknown)
  const hobbiesCount = userProfile.hobbies.length;

  console.log("Profile:", userProfile);
  console.log("Approximate age:", age);
  console.log("Total hobbies:", hobbiesCount);

  document.getElementById("displayName").textContent = userProfile.name;
  document.getElementById("displayYear").textContent = userProfile.birthYear;
  document.getElementById("displayAge").textContent = age;
  document.getElementById("displayCount").textContent = hobbiesCount;
  document.getElementById("displayDeveloper").textContent = userProfile.isDeveloper ? "Yes" : "No";
}

// TASK 5: Create each <li> element using JavaScript.
function showHobbies() {
  const list = document.getElementById("hobbyList");
  list.textContent = ""; // Clear old list before displaying it again.

  userProfile.hobbies.forEach(function(hobby) {
    const li = document.createElement("li");
    li.textContent = hobby;
    list.appendChild(li);
  });
}

// TASKS 3 & 4: Handle form submit and update the object.
document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Do not reload the page.

  const username = document.getElementById("username").value.trim();
  const birthYear = Number(document.getElementById("birthYear").value);
  const currentYear = new Date().getFullYear();
  const message = document.getElementById("formMessage");

  if (username.length < 2 || !Number.isInteger(birthYear) || birthYear < 1900 || birthYear > currentYear) {
    message.textContent = "Enter a valid name and birth year.";
    message.className = "message error";
    return;
  }

  userProfile.name = username;
  userProfile.birthYear = birthYear;
  showProfile();

  message.textContent = "Profile updated successfully!";
  message.className = "message";
});

// TASK 5: Add a new list element and a new hobby to the array.
document.getElementById("addBtn").addEventListener("click", function() {
  const input = document.getElementById("newHobby");
  const hobby = input.value.trim();
  const message = document.getElementById("listMessage");

  if (hobby === "") {
    message.textContent = "Please type a hobby first.";
    message.className = "message error";
    return;
  }

  userProfile.hobbies.push(hobby);
  const li = document.createElement("li");
  li.textContent = hobby;
  document.getElementById("hobbyList").appendChild(li);

  input.value = "";
  message.textContent = "Hobby added!";
  message.className = "message";
  showProfile();
});

// TASK 5: Remove the last <li> element and last hobby from the array.
document.getElementById("removeBtn").addEventListener("click", function() {
  const list = document.getElementById("hobbyList");
  const message = document.getElementById("listMessage");

  if (!list.lastElementChild) {
    message.textContent = "There are no hobbies to remove.";
    message.className = "message error";
    return;
  }

  list.lastElementChild.remove();
  userProfile.hobbies.pop();
  message.textContent = "Last hobby removed!";
  message.className = "message";
  showProfile();
});

// Show initial profile and list when the page opens.
showProfile();
showHobbies();
