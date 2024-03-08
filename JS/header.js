async function homeLink () {
    try {
        const getNewContent = await fetch('home.html');
        const newContent = await getNewContent.text();
        document.querySelector("main").innerHTML = newContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}





async function fixturesLink () {
    try {
        const getNewContent = await fetch('fixtures.html');
        const newContent = await getNewContent.text();
        document.querySelector("main").innerHTML = newContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}





async function statsLink () {
    try {
        const getNewContent = await fetch('seasonstats.html');
        const newContent = await getNewContent.text();
        document.querySelector("main").innerHTML = newContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }

    loadSeasonStats();
}