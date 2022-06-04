let chars =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "!","@","#","$","%","^","&","*","(",")","'","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let range = chars.length
let el_password1 = document.getElementById("pass1")
let el_password2 = document.getElementById("pass2")
let el_password3 = document.getElementById("pass3")
let el_password4 = document.getElementById("pass4")
let randomPassword = ""

function genPassword(){
    randomPassword = ""
    for(i=0; i< 8; i++){
        let password = chars[Math.floor(Math.random() * range)]
        randomPassword += password 
    }  
    
    
    return randomPassword
    
}

function assignPassword(){
    el_password1.textContent= genPassword() 
    el_password2.textContent= genPassword() 
    el_password3.textContent= genPassword() 
    el_password4.textContent= genPassword() 

}