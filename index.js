const textarea = document.getElementById("textarea");
const uppercasebtn = document.getElementById("uppercasebtn");
const lowercasebtn = document.getElementById("lowercasebtn");
const clearbtn = document.getElementById("clearbtn");



function uppercase(){

    let text = textarea.value;
    let uppercasetext = text.trim().toUpperCase();        
    textarea.value = uppercasetext;

}

function lowercase(){
    let text = textarea.value;
    let lowercasetext = text.trim().toLowerCase();
    textarea.value = lowercasetext;
}

function cleartext(){
    textarea.value = "";
}
