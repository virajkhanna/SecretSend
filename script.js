function encrypt() {
    var msg = document.getElementById("msg").value;
    var passwd = document.getElementById("passwd").value;
    var encrypted = CryptoJS.AES.encrypt(msg, passwd);
    document.getElementById("encrypted-text").innerHTML = "<b>The secret is: </b>" + encrypted;
}

function decrypt() {
    var msg = document.getElementById("msg").value;
    var passwd = document.getElementById("passwd").value;
    var decrypted = CryptoJS.AES.decrypt(msg, passwd).toString(CryptoJS.enc.Utf8);
    document.getElementById("encrypted-text").innerHTML = "<b>The real secret is: </b>" + decrypted;
}