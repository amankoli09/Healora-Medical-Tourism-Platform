document.getElementById('consultForm').addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();
    const treatment = document.querySelector('input[name="treatment"]:checked');

    const formMessage = document.getElementById('formMessage');

    if(name === '' || email === '' || phone === '' || country === '' || date === '' || message === '' || !treatment){
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Your consultation request has been submitted successfully!";
    formMessage.style.color = "green";

    document.getElementById('consultForm').reset();

});
