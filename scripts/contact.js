function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "upayannaskar.devportfoliorequest@outlook.com",
        Password: "30C47A465EE21CEC3D5A4F204FCA002EA841",
        To: "upayannaskar@hotmail.com",
        From: "upayannaskar.devportfoliorequest@outlook.com",
        Subject: "Messsage From Portfolio Contact Page",
        Body: "Name : " + document.getElementById('name').value + "<br> Phone : " + document.getElementById('phone').value + "<br> Email : " + document.getElementById('email').value + "<br>" + document.getElementById('msg').value
    }).then(
        message => alert(message)
    );
}

document.getElementById("cross").style.display = "none"
document.getElementById("hamburger").onclick = function() {
    document.getElementById('ham-menu').style.display = "flex"
    document.getElementById('hamburger').style.display = "none"
    document.getElementById('cross').style.display = "flex"
}
document.getElementById("cross").onclick = function() {
    document.getElementById('ham-menu').style.display = "none"
    document.getElementById('hamburger').style.display = "flex"
    document.getElementById('cross').style.display = "none"
}