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

// * Login Form Validation
function validate() {
    let uID = document.getElementById("uID").value;
    let uPass = document.getElementById("uPass").value;
    if (uID == "admin" && uPass == "admin") {
        alert("Login successful")
        return true;
    } else {
        alert("Wrong ID or Password")
        document.getElementById("uID").value = "";
        document.getElementById("uPass").value = "";
        return false;
    }
}