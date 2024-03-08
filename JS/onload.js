document.addEventListener('DOMContentLoaded', async function() {
    let contentHeader = document.getElementById('documentHeader');
    let contentFooter = document.getElementById('documentFooter');

    try {
        const HeaderResponse = await fetch('header.html');
        const HeaderContent = await HeaderResponse.text();
        contentHeader.innerHTML = HeaderContent;

        const mainResponse = await fetch('home.html');
        const mainContent = await mainResponse.text();
        document.querySelector("main").innerHTML = mainContent;

        const FooterResponse = await fetch('footer.html');
        const FooterContent = await FooterResponse.text();
        contentFooter.innerHTML = FooterContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }
});