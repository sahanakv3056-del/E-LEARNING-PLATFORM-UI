let user = "";

// LOGIN

function login() {

    let username =
    document.getElementById("username").value.trim();

    let password =
    document.getElementById("password").value.trim();

    if (username === "") {

        alert("Please Enter Username");
        return;
    }

    if (password !== "sanjana") {

        alert("Incorrect Password");
        return;
    }

    user = username;

    localStorage.setItem("user", user);

    document.getElementById("loginPage").style.display =
    "none";

    document.getElementById("app").style.display =
    "block";

    document.getElementById("userDisplay").innerText =
    user;

    document.getElementById("profileUser").innerText =
    user;

    showSection("home");

    loadProgress();
}

// SHOW SECTION

function showSection(id) {

    let sections =
    document.querySelectorAll(".section");

    sections.forEach(function(section) {

        section.classList.remove("active");

    });

    document.getElementById(id)
    .classList.add("active");

    if (id === "dashboard") {

        loadProgress();
    }
}

// OPEN COURSE

function openCourse(title, video, notes) {

    document.getElementById("courseTitle").innerText =
    title;

    document.getElementById("videoPlayer").src =
    video;

    document.getElementById("notesLink").href =
    notes;

    showSection("player");
}

// ENROLL COURSE

function enroll() {

    let course =
    document.getElementById("courseTitle").innerText;

    let progress =
    JSON.parse(localStorage.getItem("progress")) || {};

    progress[course] = "Completed ✅";

    localStorage.setItem(
        "progress",
        JSON.stringify(progress)
    );

    alert(course + " Enrolled Successfully");
}

// LOAD PROGRESS

function loadProgress() {

    let box =
    document.getElementById("progressBox");

    let progress =
    JSON.parse(localStorage.getItem("progress")) || {};

    box.innerHTML = "";

    if (Object.keys(progress).length === 0) {

        box.innerHTML =
        "<p>No Courses Enrolled Yet</p>";

        return;
    }

    for (let course in progress) {

        box.innerHTML += `

        <div class="progress-card">

            <h3>${course}</h3>

            <p>${progress[course]}</p>

        </div>

        `;
    }
}

// LOGOUT

function logout() {

    localStorage.clear();

    location.reload();
}

// AUTO LOGIN

window.onload = function () {

    let savedUser =
    localStorage.getItem("user");

    if (savedUser) {

        user = savedUser;

        document.getElementById("loginPage").style.display =
        "none";

        document.getElementById("app").style.display =
        "block";

        document.getElementById("userDisplay").innerText =
        user;

        document.getElementById("profileUser").innerText =
        user;

        showSection("home");

        loadProgress();
    }
};