const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');


const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.style.display = "flex";
        whenSignedOut.hidden = true;
        signOutBtn.hidden = false;

    } else {
        // not signed in
        whenSignedIn.style.display = "none";
        whenSignedOut.hidden = false;
        signOutBtn.hidden = true;
    }
});



async function changeSeason(option) {
    try {
        window.location.href = `/score_entry${option.value}.html`;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}