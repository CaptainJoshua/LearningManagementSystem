const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})
console.log("Hello World");
console.log("Hello World"); // Test 2
console.log("Hello World"); // Test 3
console.log("Hello World"); // Test 4
console.log("Hello World"); // Test 5
console.log("hello world"); // Test 6
console.log("hello World"); // Test 7
console.log("hello word"); // Test 8

// *Simple logout function for the logout button
function logOut() {
    setTimeout(function() {
        window.location.href = "login.html";
    }, 5000);
}