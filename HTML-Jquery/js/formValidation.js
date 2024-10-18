
$(document).ready(function(){


    const form=$('#form');


    form.on('submit',function(e){
    
       e.preventDefault();
       validateInputs();
     })
    
    
    
    function validateInputs(){
        console.log("calling validateInputs");
    
        const firstNameVal =$('#firstName').val().trim();
        const lastNameVal = $('#lastName').val().trim();
        const emailVal  = $('#email').val().trim();
        const phoneVal = $('#phone').val().trim();
        const addressVal = $('#address').val().trim();
        const cityVal = $('#city').val().trim();
        const passwordVal = $('#createPassword').val().trim();
        const RpasswordVal = $('#repeatPassword').val().trim();
        const stateVal = $('#state').val().trim();
    
    
        if(firstNameVal===''){
            setError($('#firstName'),'FirstName is required');
        }
        else{
            setSuccess($('#firstName'));
        }
    
        if(lastNameVal===''){
            setError($('#lastName'),'LastName is required');
        }
        else if(lastNameVal.length>5){
            setError($('#lastName'),'LastName should be less than 5');
        }
        else{
            setSuccess($('#lastName'));
        }
    
        if(emailVal===''){
            setError($('#email'),'Email Cannot be Empty');
        }
        else if(!isValidEmail(emailVal)){
    
            setError($('#email'),'Not a Valid Email');
        }
        else{
            setSuccess($('#email'));
        }
    

        
        const format = /^\d{10}$/;
        if(phoneVal===''){
            setError(phone,'phone is required');
        }
        else if(!format.test(phoneVal)){
            setError(phone,'phone number should be in digits');
        }
        else{
            setSuccess(phone);
        }



    
        if(addressVal===''){
            setError($('#address'),'Address is required');
        }
        else{
            setSuccess($('#address'));
        }
    
        if(cityVal===''){
            setError($('#city'),'city is required');
        }
        else{
            setSuccess($('#city'));
        }
    
        if(passwordVal===''){
            setError($('#createPassword'),'password is required');
        }
        else if(passwordVal.length<8){
            setError($('#createPassword'),'password must contain atleate 8 characters');
        }
        else{
            setSuccess($('#createPassword'));
        }
    
        if(RpasswordVal===''){
            setError($('#repeatPassword'),'confirm your password');
        }
        else if(RpasswordVal!==passwordVal){
            setError($('#repeatPassword'),'password do not match');
        }
        else{
            setSuccess($('#repeatPassword'));
        }
    
    
        if (stateVal === 'Please Select your state') {
            setError($('#state'), 'State selection is required');
        } else {
            setSuccess($('#state'));
        }
    
    }
    
    function setError(element,message){
        const inputGroup = element.parent();
        const errorElement = inputGroup.find('.error');
        errorElement.text(message);
        inputGroup.addClass('error').removeClass('success');
    }
    
    
    function setSuccess(element){
        const inputGroup = element.parent();
        const errorElement = inputGroup.find('.error');
        errorElement.text('');
        inputGroup.addClass('success').removeClass('error');
    }
    
    
    
    function isValidEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    








});



   