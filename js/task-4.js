const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    event.preventDefault();

    const elements = event.target.elements;

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }

    
    if (info.email === "" || info.password === "") {
        return alert('All form fields must be filled in');
    } else {
        return info;
    }
    
    event.target.reset();

    console.log(info);
}
