var canLogin = false;
var canRegister = false;


function logined() {
    cleared()
    canLogin = true;
    canRegister = false;
    showed();
}

function registered() {
    cleared()
    canLogin = false;
    canRegister = true;
    showed();
}

function logining() {

    var sign = checked(1)
    if (sign === 0) {
        var lo = document.getElementById("Logining")

        console.log("lo")
        lo.submit()
        // console.log(lo.value)
    }
}

function registering() {

    var sign = checked(0)
    if (sign === 0) {
        var lo = document.getElementById("Registering")
        console.log("re")
        lo.submit()
    }
}

function exited() {
    cleared()
    canLogin = false;
    canRegister = false;
    showed();
}

function cleared() {

    document.getElementById('l_username').value = null;
    document.getElementById('l_password').value = null;
    document.getElementById('r_username').value = null;
    document.getElementById('r_password').value = null;
    document.getElementById('r_confirmpassword').value = null;
    var l_noname = document.querySelector('#l_noname')
    var l_nopassword = document.querySelector('#l_nopassword')
    var r_noname = document.querySelector('#r_noname')
    var r_nopassword = document.querySelector('#r_nopassword')
    var r_noconfirmpassword = document.querySelector('#r_noconfirmpassword')
    var l__username = document.querySelector('#l_username')
    var l__password = document.querySelector('#l_password')
    var r__username = document.querySelector('#r_username')
    var r__password = document.querySelector('#r_password')
    var r__confirmpassword = document.querySelector('#r_confirmpassword')
    l_noname.setAttribute('style', 'visibility: hidden;')
    l_nopassword.setAttribute('style', 'visibility: hidden;')
    r_noname.setAttribute('style', 'visibility: hidden;')
    r_nopassword.setAttribute('style', 'visibility: hidden;')
    r_noconfirmpassword.setAttribute('style', 'visibility: hidden;')
    l__username.setAttribute('style', 'border-color: black;')
    l__password.setAttribute('style', 'border-color: black;')
    r__username.setAttribute('style', 'border-color: black;')
    r__password.setAttribute('style', 'border-color: black;')
    r__confirmpassword.setAttribute('style', 'border-color: black;')
    console.log('null')


}

function showed() {
    console.log(canLogin, canRegister)


    var l = document.querySelector('.Loginer')
    var r = document.querySelector('.Register')
    if (canLogin) {
        // l.style.display = "block";
        l.setAttribute('style', 'visibility: visible;')
    } else {
        // l.style.display = "block";
        l.setAttribute('style', 'visibility: hidden;')
    }
    if (canRegister) {
        r.setAttribute('style', 'visibility: visible;')
    } else {
        r.setAttribute('style', 'visibility: hidden;')
    }
}

function checked(i) {

    var can=0
    if (i === 1) {
        console.log('logining')
        var l_username = document.getElementById('l_username')
        var l_password = document.getElementById('l_password')
        var l_noname = document.querySelector('#l_noname')
        var l_nopassword = document.querySelector('#l_nopassword')
        var l__username = document.querySelector('#l_username')
        var l__password = document.querySelector('#l_password')
        if (l_username.value === null || l_username.value === '') {
            l_noname.setAttribute('style', 'visibility: visible;')
            l__username.setAttribute('style', 'border-color: red;')
            can++
        } else {
            l_noname.setAttribute('style', 'visibility: hidden;')
            l__username.setAttribute('style', 'border-color: black;')

        }
        if (l_password.value === null || l_password.value === '') {
            l_nopassword.setAttribute('style', 'visibility: visible;')
            l__password.setAttribute('style', 'border-color: red;')
            can++
        } else {
            l_nopassword.setAttribute('style', 'visibility: hidden;')
            l__password.setAttribute('style', 'border-color: black;')
        }



    }
    else
    {
        var r_username = document.getElementById('r_username')
        var r_password = document.getElementById('r_password')
        var r_confirmpassword = document.getElementById('r_confirmpassword')
        var r_noname = document.querySelector('#r_noname')
        var r_nopassword = document.querySelector('#r_nopassword')
        var r_noconfirmpassword = document.querySelector('#r_noconfirmpassword')
        var r__username = document.querySelector('#r_username')
        var r__password = document.querySelector('#r_password')
        var r__confirmpassword = document.querySelector('#r_confirmpassword')
        if (r_username.value === null || r_username.value === '') {
            r_noname.setAttribute('style', 'visibility: visible;')
            r__username.setAttribute('style', 'border-color: red;')
            can++
        } else {
            r_noname.setAttribute('style', 'visibility: hidden;')
            r__username.setAttribute('style', 'border-color: black;')
        }
        if (r_password.value === null || r_password.value === '') {
            r_nopassword.setAttribute('style', 'visibility: visible;')
            r__password.setAttribute('style', 'border-color: red;')
            can++
        } else {
            r_nopassword.setAttribute('style', 'visibility: hidden;')
            r__password.setAttribute('style', 'border-color: black;')
        }
        if (r_confirmpassword.value === null || r_confirmpassword.value === '') {
            r_noconfirmpassword.setAttribute('style', 'visibility: visible;')
            r__confirmpassword.setAttribute('style', 'border-color: red;')
            can++
        } else {
            r_noconfirmpassword.setAttribute('style', 'visibility: hidden;')
            r__confirmpassword.setAttribute('style', 'border-color: black;')
        }

    }
    return can

}