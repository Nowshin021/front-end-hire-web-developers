function openForm_signup(){
    
    //document.getElementById("mySignupForm").style.display = "grid";
   document.getElementById("landing-section").style.display="none";
   document.getElementById("hidden-form-section-login").style.display="none";
   document.getElementById("hidden-form-section").style.display="grid";

    //document.getElementById("intro-section").style.display="none"
}

function Cancel() {
    document.getElementById("landing-section").style.display = "grid";
    document.getElementById("hidden-form-section").style.display="none";
    document.getElementById("hidden-form-section-login").style.display="none";
    //document.getElementById("intro-section").style.display="grid"
}

function openForm_login(){
    document.getElementById("landing-section").style.display="none";
    document.getElementById("hidden-form-section").style.display="none";
    document.getElementById("hidden-form-section-login").style.display="grid";
    

}


function send_message(){
    alert("Thank you for your feedback")
}