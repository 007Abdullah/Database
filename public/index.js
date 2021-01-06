// const url = "https//databas-example.herokuapp.com"
const url = "http://localhost:5000"

function signup() {
    let user = {
        uname: document.getElementById("txt_name").value,
        email: document.getElementById("txt_email").value,
        password: document.getElementById("txt_password").value,
        phone: document.getElementById("txt_number").value,
        gender: document.getElementById("gender").value
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // console.log(Http.responseText)
            let jsonRes = JSON.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes.status === 200) {
                alert(jsonRes.message);
                window.location.href = "login.html";
            } else {
                alert(jsonRes.message);
            }
        }
    }
    return false;
}

function login() {
    let userlg = {
        email: document.getElementById("txt_email").value,
        password: document.getElementById("txt_password").value,
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(userlg));
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // console.log(Http.responseText)
            let jsonRes = JSON.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes.status === 200) {
                alert(jsonRes.message);
            } else {
                alert(jsonRes.message);
            }
        }
    }

    return false;
}