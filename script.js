document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Secuencia Didáctica cargada y lista para la aventura!');

    // Mensaje de bienvenida con sonido simulado
    setTimeout(() => {
        showWelcomeMessage();
    }, 1000);

    // Función para mostrar mensaje de bienvenida personalizado
    function showWelcomeMessage() {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
                color: white;
                padding: 30px;
                border-radius: 20px;
                text-align: center;
                z-index: 1000;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                border: 3px solid #FFD700;
                animation: bounceIn 0.8s ease-out;
            ">
                <h2 style="margin: 0 0 15px 0; font-size: 2em;">¡Bienvenidos! 🎉</h2>
                <p style="margin: 0; font-size: 1.2em;">¡Prepárense para descubrir el tesoro de la lectura! 📚✨</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: #FFD700;
                    color: #333;
                    border: none;
                    border-radius: 15px;
                    font-weight: bold;
                    cursor: pointer;
                    font-size: 1.1em;
                ">¡Empezar Aventura!</button>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 999;
            " onclick="this.parentElement.remove()"></div>
        `;
        
        // Añadir estilos de animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounceIn {
                0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.05); }
                70% { transform: translate(-50%, -50%) scale(0.9); }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(welcomeDiv);
    }

    // Añadir efectos hover mejorados a las tarjetas de actividades
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach((card, index) => {
        // Añadir clase fade-in con delay
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);

        // Efectos de sonido simulados con vibración visual
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Efecto de "pulso" en el borde
            card.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.animation = 'none';
        });

        // Efecto de click con ondas
        card.addEventListener('click', (e) => {
            createRippleEffect(e, card);
        });
    });

    // Función para crear efecto de ondas al hacer click
    function createRippleEffect(e, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 215, 0, 0.6);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    // Añadir estilos de animación para el efecto ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        @keyframes pulse {
            0%, 100% { border-color: #FFD700; }
            50% { border-color: #FF6B6B; box-shadow: 0 0 20px rgba(255, 107, 107, 0.5); }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Mejorar efectos de click en los enlaces
    const links = document.querySelectorAll('a[target="_blank"]');
    
    links.forEach(link => {
        // Añadir iconos y efectos mejorados
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05) translateY(-2px)';
            link.style.boxShadow = '0 8px 20px rgba(70, 130, 180, 0.4)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) translateY(0)';
            link.style.boxShadow = 'none';
        });

        link.addEventListener('click', (e) => {
            // Efecto de confirmación más atractivo
            e.preventDefault();
            
            const confirmDiv = document.createElement('div');
            confirmDiv.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #4ECDC4, #45B7D1);
                    color: white;
                    padding: 25px;
                    border-radius: 15px;
                    text-align: center;
                    z-index: 1000;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                    border: 2px solid #FFD700;
                ">
                    <h3 style="margin: 0 0 15px 0;">🎮 ¡Actividad Interactiva!</h3>
                    <p style="margin: 0 0 20px 0;">¿Estás listo para esta aventura de aprendizaje?</p>
                    <button onclick="window.open('${link.href}', '_blank'); this.parentElement.parentElement.remove();" style="
                        margin: 5px;
                        padding: 10px 20px;
                        background: #FFD700;
                        color: #333;
                        border: none;
                        border-radius: 10px;
                        font-weight: bold;
                        cursor: pointer;
                    ">¡Sí, vamos! 🚀</button>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        margin: 5px;
                        padding: 10px 20px;
                        background: #FF6B6B;
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-weight: bold;
                        cursor: pointer;
                    ">Ahora no 😊</button>
                </div>
                <div style="
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    z-index: 999;
                " onclick="this.parentElement.remove()"></div>
            `;
            document.body.appendChild(confirmDiv);
        });
    });

    // Animación de entrada para las secciones con Intersection Observer
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
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Efecto de partículas flotantes en el fondo
    createFloatingParticles();

    function createFloatingParticles() {
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.innerHTML = ['📚', '✨', '🌟', '📖', '🎨'][Math.floor(Math.random() * 5)];
                particle.style.cssText = `
                    position: fixed;
                    font-size: ${Math.random() * 20 + 15}px;
                    left: ${Math.random() * 100}vw;
                    top: 100vh;
                    pointer-events: none;
                    z-index: 1;
                    animation: float ${Math.random() * 10 + 15}s linear infinite;
                    opacity: 0.7;
                `;
                
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 25000);
            }, i * 2000);
        }
    }

    // Añadir estilos para las partículas flotantes
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.7;
            }
            90% {
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);

    console.log('✨ Todas las animaciones e interacciones están listas!');
});

