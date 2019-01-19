let loginPwdstatus = false;

function changePwdView() {
    let getLoginInput = document.getElementById("loginPwdChange");

    if (loginPwdstatus === false) {
        getLoginInput.setAttribute("type", "text");
        loginPwdstatus = true;
    } else if (loginPwdstatus === true) {
        getLoginInput.setAttribute("type", "password");
        loginPwdstatus = false;
    } 
}
