async function loadComponent(elementId, file) {

    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    const response = await fetch(file);

    const html = await response.text();

    element.innerHTML = html;
}


loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");