function calculate()
{   
    console.log(document.getElementById("name").value)
    if(document.getElementById("name").value=="")
    {
        window.alert("Enter the fields!!!")
        
    }
    else{
        window.location.href="login.html";

    }
    
}
function forgot()
{
    window.alert("Currently unavailable!")
}
function calc()
{
    if(document.getElementById("name").value=="")
    {
        window.alert("Enter the fields!!!")
        
    }
    else{
        window.location.href="profile.html";

    }
}
