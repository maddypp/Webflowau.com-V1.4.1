function login() {
    var e_user = document.getElementById("ainput1").value;
    var e_password = document.getElementById('ainput2').value;

    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("User successfully logged in");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
