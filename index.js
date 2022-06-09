var myText=document.getElementById("myText")
var charCount=document.getElementById("charCount")

myText.addEventListener("keyup",function(){
var characters=myText.value.split('');
charCount.innerText=characters.length;
})
    
const form = document.getElementById("form")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const contact = document.getElementById("contact")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
   
})

function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();

    if (firstnameValue ==='') {
       setErrorFor(firstname,'firstname can not be blank') 
    }else if(firstnameValue.length<3){
        setErrorFor(firstname,'firstname min 3 char')
    }
    
    else{
        setSuccessFor(firstname)
    }

    if (lastnameValue === '') {
        setErrorFor(lastname,'lastname can not be blank') 
    }else{
        setSuccessFor(lastname)
    }
    if (emailValue === '') {
        setErrorFor(email,'email can not be blank') 
    }else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
    
    }else{
        setSuccessFor(email)
    }
    if (contactValue === '') {
        setErrorFor(contact,'contact can not be blank') 
    }else if(contactValue.length>10){
    setErrorFor(contact,' invalid contact')
}
else if(contactValue.length<10){
    setErrorFor(contact,' invalid contact')
}else{
        setSuccessFor(contact)
    }


}

function setErrorFor(input,massage){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = massage
    formControl.className = 'form-control error'

}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



 

