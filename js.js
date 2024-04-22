

signUpDiv= document.getElementById("signUpDiv")
logInDiv= document.getElementById("logInDiv")
// The array to hold the data of the users
const allData= [];
const usernames= [];
const mails= []

document.getElementById("signUpLink").addEventListener("click", (e)=>{
    e.preventDefault;
    signUpDiv.classList.toggle("hide")
    logInDiv.classList.toggle("hide")

})

document.getElementById("logInLink").addEventListener("click", (e)=>{
    e.preventDefault;
    signUpDiv.classList.toggle("hide")
    logInDiv.classList.toggle("hide")
})

document.getElementById("signUpBtn").addEventListener("click", (e)=>{
    x = document.getElementById("username").value;
    y = document.getElementById("email").value;
    z = document.getElementById("password").value;
    if(usernames.includes(x)||mails.includes(y)){
        alert("This username or email are already in use")
    }else{
        if(x==""||y==""||z==""){
            alert("Please fill all tabs")
        }
        else{
            allData.push({"username":x,"email":y,"password":z})
            usernames.push(x);
            mails.push(y);
            alert("User created")
            console.log(allData);
        } 
    }
})

document.getElementById("signInBtn").addEventListener("click", (e)=>{
    x= document.getElementById("usernameOrEmail").value
    y= document.getElementById("logInPassword").value
    loggedIn= false;
    for(data in allData){
        if((allData[data]["username"] == x || allData[data]["email"] == x) && allData[data]["password"] == y){
            alert("Logged In");
            loggedIn= true;
            break;
        }
    }
    if(!loggedIn){
        alert("Invalid credentials");
    }
})

