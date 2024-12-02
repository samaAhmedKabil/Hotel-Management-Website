var uName=document.getElementById('uName');
var uEmail=document.getElementById('uEmail');


function validateForm()
{
    var adult=document.forms["myForm"]["adults"].value;
    if (document.forms["myForm"]["inDate"].value == ""||document.forms["myForm"]["outDate"].value==""|| document.forms["myForm"]["adults"].value=="" && document.forms["myForm"]["adults"].value >1 ||uName.value==""||uEmail.value=="") { 
    alert("All Fields must be filled out"); 
        return false;
}
else
{
alert("Hello");
}



}