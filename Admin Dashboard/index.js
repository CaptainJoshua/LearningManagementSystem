function dashboard() {
    // upon clicking the dashboard button, the dashboard page is loaded
    window.location.href = "dashboard.html";
}

function students() {
    // upon clicking the students button, the students page is loaded inside a div element
    document.getElementById("content").innerHTML = "<object type='text/html' data='./students/students.html' ></object>";
}

function academe() {
    // upon clicking the teachers button, the teachers page is loaded inside a div element
    document.getElementById("content").innerHTML = "<object type='text/html' data='./academe/academe.html' ></object>";
}

function admin() {
    // upon clicking the admin button, the admin page is loaded inside a div element
    document.getElementById("content").innerHTML = "<object type='text/html' data='./admin/admin.html' ></object>";
}