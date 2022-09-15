function validate() {
    document.getElementById('company').addEventListener('change', ()=> {
        let companyInfo = document.getElementById('companyInfo')
        if(document.getElementById('company').checked == false){
            companyInfo.style.display = 'none'
        }else{
            companyInfo.style.display= 'block'
        }
    })
 
    document.getElementById('submit').addEventListener('click', onClick)
 
    function onClick(e){
        e.preventDefault()
 
        let invalidFields = []
 
        let checkBox = document.querySelector('#company')
        let username = document.getElementById('username')
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/
        if(!usernamePattern.test(username.value)){
            invalidFields.push(username)
        } 
        let email = document.getElementById('email')
        //let emailPattern = /^[^@.]+@[^@]+.[^@]+$/ 
        let emailPattern = /^.*@.*\..*$/;
 
        if(!emailPattern.test(email.value)){
            invalidFields.push(email)
        }
 
        let password = document.getElementById('password')
        let confirmPassword = document.getElementById('confirm-password')
        //let passPattern = /^[\w]{5,15}/
        let passPattern = /^\w{5,15}$/
 
        if(!passPattern.test(password.value) || confirmPassword.value !== password.value){
            invalidFields.push(password)
            invalidFields.push(confirmPassword)
        }
 
        if(checkBox.checked){
            let companyId = document.getElementById('companyNumber')
            // let companyPattern = /^[0-9]{4}$/
            let companyPattern = /^[1-9][0-9]{3}$/
            if(!companyPattern.test(companyId.value)){
                invalidFields.push(companyId)
 
            }
        }
 
        invalidFields.forEach(field => field.style.borderColor = 'red')
       
        if(invalidFields.length == 0){
            document.querySelector('#valid').style.display = 'block'
        }else{
            document.querySelector('#valid').style.display = 'none'
        }
 
    }
}
