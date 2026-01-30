// Dummy login credentials
const validUser = {
    username: "student",
    password: "1234"
};

// Monthly Activities Array
const monthlyActivities = [
    {
        id: 1,
        activity: "Create project file with tables from 12 to 19",
        subject: "Maths"
    },
    {
        id: 2,
        activity: "Prepare notes on Newton's Laws",
        subject: "Science"
    },
    {
        id: 3,
        activity: "Build a simple HTML & CSS webpage",
        subject: "Computer"
    },
    {
        id: 4,
        activity: "Solve algebra worksheets",
        subject: "Maths"
    }
];

// LOGIN FUNCTION
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === validUser.username && pass === validUser.password) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("welcomePage").classList.remove("hidden");
        document.getElementById("studentName").innerText = user;
    } else {
        document.getElementById("errorMsg").innerText = "Invalid Username or Password";
    }
}

// SHOW MONTHLY PAGE
function showMonthlyPage() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("monthlyPage").classList.remove("hidden");
    displayActivities(monthlyActivities);
}

// DISPLAY ACTIVITIES
function displayActivities(data) {
    const container = document.getElementById("activityList");
    container.innerHTML = "";

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "activity";
        div.innerHTML = `<strong>${item.subject}</strong><br>${item.activity}`;
        container.appendChild(div);
    });
}

// FILTER BY SUBJECT
function filterActivities() {
    const selected = document.getElementById("subjectFilter").value;
    if (selected === "All") {
        displayActivities(monthlyActivities);
    } else {
        const filtered = monthlyActivities.filter(
            act => act.subject === selected
        );
        displayActivities(filtered);
    }
}

// BACK TO WELCOME
function goBack() {
    document.getElementById("monthlyPage").classList.add("hidden");
    document.getElementById("welcomePage").classList.remove("hidden");
}

// LOGOUT
function logout() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}
