document.addEventListener('DOMContentLoaded', () => {
    console.log('Secuencia Didáctica cargada y lista para la aventura!');

    // Mensaje de bienvenida al cargar la página
    setTimeout(() => {
        alert('¡Bienvenidos a La Lectura, Un Tesoro por Descubrir! 📚✨');
    }, 1000);

    // Añadir efectos hover a las tarjetas de actividades
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Añadir efectos de click a los enlaces
    const links = document.querySelectorAll('a[target="_blank"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Mostrar mensaje de confirmación antes de abrir enlace externo
            const confirmOpen = confirm('¿Estás listo para abrir esta actividad interactiva? 🎮');
            if (!confirmOpen) {
                e.preventDefault();
            }
        });
    });

    // Añadir animación de entrada a las secciones
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

