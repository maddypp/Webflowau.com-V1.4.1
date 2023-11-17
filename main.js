console.log("Webflow V1.4.1");

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-collapse');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active'); // Toggle the 'active' class
    });
});

width = window.innerWidth;
console.log(width);

if (width <890) {
    document.getElementById("foty").innerHTML = "<div class='f1'><ul class='foot'><li class='foot1 la' >Accounts</li><li class='foot1'><a class='butter' href='create.html'>Create Account</a></li><li class='foot1'><a class='butter' href='Ulogin.html'>Login</a></li><li class='foot1'><a class='butter' href='pageshome.html'>Webflow Pages</a></li></ul></div><div class='f2'><ul class='foot'><li class='foot1 la' >Legal</li><li class='foot1'><a class='butter' target='_blank' href='privacy.html'>Privacy Policy</a></li><li class='foot1'><a class='butter' target='_blank' href='T&CS.html'>Terms and Conditions</a></li><li class='foot1'><a class='butter' target='_blank' href='refund.html'>Refund Policy</a></li></ul></div><hr class='hr'><div class='socials'><a target='_blank' href='www.facebook.com/profile.php?id=61552067220594'><img alt='' class='icon' src='facebook (1).svg'></a><a target='_blank' href='www.instagram.com/webflowau/'><img alt='' class='icon' src='instagram.svg'></a><a target='_blank' href='twitter.com/webflowau'><img alt='' class='icon' src='twitter.svg'></a><a target='_blank' href='www.tiktok.com/@webflowau'><img alt='' class='icon' src='tiktok.svg'></a></div>"
}

