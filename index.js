const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// console.log(characters.length)

let btnEl = document.getElementById('gp_btn')
document.getElementById("gp_btn").disabled = false;

let passEl1 = document.getElementById("password1")
let passEl2 = document.getElementById("password2")

gp_btn.addEventListener("click", function() {
    
    let length = 15;
    let temp = ""
    for (let i=0 ; i<length ; i++) {
        let index1 = Math.floor(Math.random() * characters.length);
        // console.log(index1);
        // console.log(characters[index1]);
        passEl1.value += characters[index1];
        // temp += characters[index1];
        
        
        let index2 = Math.floor(Math.random() * characters.length);
        // console.log(index2);
        // console.log(characters[index2]);
        passEl2.value += characters[index2];

        document.getElementById("gp_btn").disabled = true;

    }
    // console.log(temp)

    // let r = document.getElementById("reset")

    reset.addEventListener("click", function() {
        passEl1.value = ""
        passEl2.value = ""

        btnEl.disabled = false;
    })
}
)

