//log in function start
document.getElementById("signin-btn").addEventListener("click",() =>{
    const inputName = document.getElementById("input-name");
    const inputNameValue = inputName.value;
    console.log(inputNameValue);
    const inputPassword = document.getElementById("input-password");
    const inputPasswordValue = inputPassword.value;
    console.log(inputPasswordValue);
    //condition start
    if(inputNameValue == "admin" && inputPasswordValue == "admin123"){
        alert("log in successful");
        window.location.assign("/home.html");
    }
    else{
        alert("log in failed");
    }
    //condition end
});
//log in function end