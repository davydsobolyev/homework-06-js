
const form = document.querySelector(".login-form");

form.addEventListener("submit",(event) => {

    event.preventDefault()

    let login = {email :"", password : ""};


    const {elements : {password, email}} = event.currentTarget;

    if(password.value == "" || email.value == ""){

        console.log("alert");

        return;
    }

    login.email = email.value;
    login.password = password.value;
    

    console.log("email:", login.email,"password:",login.password);
    

   


   

    

}
    
    )