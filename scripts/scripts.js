async function loadContent() {
    try {
        // Загружаем шапку
        const headerResponse = await fetch('../header.html');
        const headerContent = await headerResponse.text();
        document.getElementById('header_container').innerHTML = headerContent;

        // Загружаем подвал
        const footerResponse = await fetch('../footer.html');
        const footerContent = await footerResponse.text();
        document.getElementById('footer_container').innerHTML = footerContent;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

loadContent();
