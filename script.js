document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Gestion du Thème (Dark/Light) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Vérifier la préférence sauvegardée ou mettre dark par défaut
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Sauvegarde en mémoire
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('bi-moon-stars-fill');
            icon.classList.add('bi-sun-fill');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-stars-fill');
        }
    }

    // --- 2. Injection Automatique du Footer ---
    const footer = document.querySelector('footer');
    if(footer) {
        footer.innerHTML = `
            <div class="container text-center py-4">
                <p class="mb-1 fw-bold text-body-secondary">
                    Réalisé par le Groupe 110 - Binôme 4
                </p>
                <p class="small text-muted mb-0">
                    SAÉ S1.03 | Année universitaire 2025 - 2026
                </p>
            </div>
        `;
    }
});