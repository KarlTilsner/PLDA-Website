document.addEventListener('DOMContentLoaded', async function() {
    try {
        const HeaderResponse = await fetch('header.html');
        const HeaderContent = await HeaderResponse.text();
        document.getElementById('documentHeader').innerHTML = HeaderContent;

        const mainResponse = await fetch('home.html');
        const mainContent = await mainResponse.text();
        document.querySelector("main").innerHTML = mainContent;

        const FooterResponse = await fetch('footer.html');
        const FooterContent = await FooterResponse.text();
        document.getElementById('documentFooter').innerHTML = FooterContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }
});