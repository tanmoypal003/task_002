function sendMail() {
    let params = {
        objective: document.getElementById("objective").value,
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value,
    };


    emailjs.send("service_csgh3db", "template_mw8o42m", params).then(alert("Email has been sent!"));
}