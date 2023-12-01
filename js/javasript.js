function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "aethenosteam@gmail.com",
        Password : "password",
        To : 'aethenosteam@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "First Name: "+ document.getElementById("firstName").value
        + "<br> Last Name:" + document.getElementById("lastName").value
        + "<br>  Email:" + document.getElementById("email").value
        + "<br> Phone No:" + document.getElementById("phone").value
        + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}