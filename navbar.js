document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="index.html">Mi Proyecto</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html" id="home-link">Página Principal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="items.html" id="items-link">Lista de Items</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form.html" id="form-link">Crear/Editar Item</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html" id="about-link">Acerca de Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html" id="contact-link">Contáctenos</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    document.getElementById("navbar").innerHTML = navbar;

    // Detecta en qué página estamos y aplica la clase 'active'
    const path = window.location.pathname;
    if (path.includes("index.html")) {
        document.getElementById("home-link").classList.add("active");
    } else if (path.includes("items.html")) {
        document.getElementById("items-link").classList.add("active");
    } else if (path.includes("form.html")) {
        document.getElementById("form-link").classList.add("active");
    } else if (path.includes("about.html")) {
        document.getElementById("about-link").classList.add("active");
    } else if (path.includes("contact.html")) {
        document.getElementById("contact-link").classList.add("active");
    }
});


