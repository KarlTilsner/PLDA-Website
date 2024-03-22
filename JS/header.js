const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

// const signOutBtn = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('signInBtn').onclick = () => auth.signInWithPopup(provider);
// signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.style.display = "flex";
        whenSignedIn.style.flexDirection = "row";
        whenSignedIn.style.marginLeft = "auto";
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `Hello ${user.displayName}`; // <p>Your ID is: ${user.uid}</p>
    } else {
        // not signed in
        whenSignedIn.style.display = "none";
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});
// Use the code above to hide the nav elements and show the login button when user is not signed in





async function homeLink () {
    try {
        const getNewContent = await fetch('home.html');
        const newContent = await getNewContent.text();
        document.querySelector("main").innerHTML = newContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}




let fixturesLoaded = false;
async function fixturesLink () {
    try {
        const getNewContent = await fetch('fixtures.html');
        const newContent = await getNewContent.text();
        document.querySelector("main").innerHTML = newContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }

    // make sure only to load the stats once per session
    if (!fixturesLoaded) {
        loadFixtures();
        fixturesLoaded = true;
    } else displayFixtures();
}




let statsLoaded = false;
async function statsLink () {
    try {
        const getNewContent = await fetch('seasonstats.html');
        const newContent = await getNewContent.text();
        document.querySelector("main").innerHTML = newContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }

    // make sure only to load the stats once per session
    if (!statsLoaded) {
        loadSeasonStats();
        statsLoaded = true;
    } else displayStats();
}