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
    let pass = document.getElementById("pass").value;
    if (uID == "admin" && pass == "admin") {
        alert("Login successfully");
        return true;
    } else {
        alert("Login failed");
        return false;
    }
}