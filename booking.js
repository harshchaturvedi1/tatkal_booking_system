//sign up process handler function
function bookTicket(event) {
    event.preventDefault();

    const form = document.getElementById("signupForm");

    // colecting details entered in form
    const username = form.userName.value;
    const userEmail = form.userEmail.value;
    const userContact = form.userContact.value;
    const userPas = form.userPas.value;
    const userAge = form.userAge.value;

    // checking if any of the fields are empty
    if (username == '')
        alert('Enter user Name to proceed');
    else if (userEmail == '')
        alert('Enter email to proceed');
    else if (userContact == "")
        alert('Enter Contact number to proceed');
    else if (userPas == '')
        alert('Enter password to proceed');

    else {
        let ticket = document.getElementById('ticket');

        let name = document.createElement('h3');
        let age = document.createElement('h4');
        let email = document.createElement('h4');
        let contact = document.createElement('h4');
        let ticketConfirm = document.createElement('h3');


        name.innerHTML = `<h1>Congratulations</h1> ${username},`;
        age.innerHTML = `age: ${userAge} ,`;
        email.innerHTML = `email: ${userEmail} ,`;
        contact.innerHTML = `contact: ${userContact} ,`;
        let train = JSON.parse(localStorage.getItem('train'));
        ticketConfirm.innerHTML = `Your ticket is confirmed in train no: <h1>${train}</h1>`;
        form.style.display = 'none';
        ticket.append(name, age, email, contact, ticketConfirm);


    }
}