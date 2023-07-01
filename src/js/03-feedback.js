const form = document.querySelector("form")


form.addEventListener("input", onFormInput)
form.addEventListener("submit", onFormSubmit)

let userForm = {}
  
function onFormInput(e) {
   
    let {email, message} = e.currentTarget.elements

 userForm  = {
        email:  email.value,
        message: message.value,
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(userForm))



   

}

function saveUserLocal(userForm) {

        const saveUser = JSON.parse(localStorage.getItem("feedback-form-state")); 
    if (saveUser) {
        console.log(saveUser);
        userForm.email = saveUser.email;
 
    }
    //  console.log(userForm);
    // const saveUser = JSON.parse(localStorage.getItem("feedback-form-state")); 
    // if (saveUser) {
    //   userForm.value = saveUser.email;
    //      console.log(saveUser.message);
    // }
   
}

function onFormSubmit(e) {
e.preventDefault();
    e.target.reset() 
     console.log(userForm);
}

 saveUserLocal(userForm)
 

    // _.throttle(func, [wait=0], [options={}])
    // if (localStorage.getItem("feedback-form-state")) {
  
    // }