$(document).ready(function(){
 
    $("form[name='registration']").validate({

        rules:{

            firstName:{

                required : true
            },
            lastName:{
                required : true,
                minlength : 5
            },
            email: {

                required : true,
                email:true
            },
            phone: {
                required : true,
                // indianPhone : true,
                minlength : 10,
                maxlength : 10,
                digits : true
            },
            address: {
                required : true
            },
            city: {

                required : true

            },

            createPassword : {

                required : true,
                minlength : 8

            },

            repeatPassword:{

                required : true,
                equalTo : "#createPassword"
            },

            state: {
                required : true
            }
        },
        messages : {

            
            firstName : {

                required : "First Name is required"
                
            }
            ,
            lastName : {
                required : "Last Name is required"
            },
            email:{
                    required: "Email is required",
                    email : "Invalid Email,Please enter valid format"
            },
            phone:{
                required : "Phone number is required",
                minlength : "Phone must contain 10 digits",
                maxlength : "phone number should not exceed 10 digits",
                digits : "phone number should contain only digits"
            },
            address: {
                required :"Address is required"
            },
            city : {
                required : "City is required"
            },

            createPassword : {
                    required : "Password field is required",
                    minlength : "Password must contain minimum of 8 characters"
            },
            repeatPassword : {
                required : "Re-enter password",
                equalTo : "Wrong password,Re-enter the password"
            },

            state : {
                required : "please select your state"
            },
            
        },

        errorPlacement : function(error,element){
                error.insertAfter(element.closest(".input-group"));
        },
        success: function(label,element){
                $(element).closest(".input-group").addClass('success');
                $(element).closest(".input-group").removeClass('error');
        },

        


    });

});