    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // Carousel autoplay
    const carousel = new bootstrap.Carousel(document.querySelector('#mainCarousel'), {
        interval: 5000,
        wrap: true
    });

    // Add animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.5s ease-out";
        observer.observe(item);
    });

    // Enhanced gallery data
    const galleryData = {
        classico: [
            {
                title: "Francesinha Clássica",
                description: "Design tradicional e elegante com acabamento premium",
                color: "#ff69b4",
                price: "R$ 80,00"
            },
            {
                title: "Nude Básico",
                description: "Elegância atemporal para qualquer ocasião",
                color: "#ffb6c1",
                price: "R$ 70,00"
            },
            {
                title: "Vermelho Clássico",
                description: "O clássico que nunca sai de moda",
                color: "#ff1493",
                price: "R$ 75,00"
            }
        ],
        geometrico: [
            {
                title: "Linhas Geométricas",
                description: "Design moderno com formas exclusivas",
                color: "#ff69b4",
                price: "R$ 90,00"
            },
            {
                title: "Triângulos Coloridos",
                description: "Arte geométrica com cores vibrantes",
                color: "#ff1493",
                price: "R$ 95,00"
            },
            {
                title: "Quadrados Minimalistas",
                description: "Minimalismo sofisticado",
                color: "#ffb6c1",
                price: "R$ 85,00"
            }
        ],
        moderno: [
            {
                title: "Nail Art Abstrata",
                description: "Arte exclusiva para suas unhas",
                color: "#ff1493",
                price: "R$ 120,00"
            },
            {
                title: "Holográfico",
                description: "Efeito holográfico deslumbrante",
                color: "#ff69b4",
                price: "R$ 110,00"
            },
            {
                title: "Chrome Effect",
                description: "O mais moderno em nail design",
                color: "#ffb6c1",
                price: "R$ 100,00"
            }
        ]
    };

    // Enhanced showGalleryType function
    function showGalleryType(type) {
        const container = document.getElementById('galleryCards');
        container.style.display = 'flex';
        container.style.opacity = '0';
        container.innerHTML = '';

        galleryData[type].forEach((item, index) => {
            const card = `
        <div class="col-md-4 gallery-card" style="animation: fadeInUp ${0.3 + (index * 0.1)}s ease-out forwards;">
            <div class="card">
                <div class="nail-design">
                    <svg width="80%" height="80%">
                        <defs>
                            <linearGradient id="designGrad${index}" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:${item.color};stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#ffffff;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#designGrad${index})" rx="10"/>
                    </svg>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="text-primary fw-bold">${item.price}</p>
                    <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário para ${item.title}" 
                       class="btn btn-primary">
                        <i class="fab fa-whatsapp"></i> Agendar
                    </a>
                </div>
            </div>
        </div>
    `;
            container.innerHTML += card;
        });

        // Fade in the container
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transition = 'opacity 0.5s ease-out';
        }, 100);

        // Scroll to the cards
        container.scrollIntoView({ behavior: 'smooth' });
    }
  
    document.addEventListener('DOMContentLoaded', function() {
        // Função para atualizar a imagem expandida nos modais
        function updateImage(modalId, imgId) {
            var modal = document.getElementById(modalId);
            modal.addEventListener('show.bs.modal', function(event) {
                var button = event.relatedTarget; // Elemento que disparou o evento
                var imageSrc = button.getAttribute('data-bs-image'); // Pega o caminho da imagem
                var modalImage = modal.querySelector(`#${imgId}`);
                modalImage.src = imageSrc; // Atualiza o src da imagem no modal
            });
        }

        // Atualizar cada modal de imagem expandida
        updateImage('modalExpandClassico', 'expandImageClassico');
        updateImage('modalExpandGeometrico', 'expandImageGeometrico');
        updateImage('modalExpandModerno', 'expandImageModerno');
    });
