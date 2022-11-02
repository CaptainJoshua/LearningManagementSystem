var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
show.addEventListener('click', active);

function active() {
    if (input.type === "password") {
        input.type = "text";
        show.style.color = "#1DA1F2";
        show.textContent = "HIDE";
    } else {
        input.type = "password";
        show.textContent = "SHOW";
        show.style.color = "#111";
    }
}

// * Validating the user and password fields, simple validation
function validate() {
    let uID = document.getElementById("uID").value;
    let uPass = document.getElementById("uPass").value;
    if (uID == "admin" && uPass == "admin") {
        alert("Login successfully");
        return true;
    } else {
        alert("Wrong User ID or Password");
        //* This will clear the input fields if the user enters the wrong ID or password
        document.getElementById("uID").value = "";
        document.getElementById("uPass").value = "";
        return false;
    }
}

// * Simple reload page function
function reloadPage() {
    location.reload();
}