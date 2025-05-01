document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelectorAll('.section').forEach((section, index) => {
            section.style.animationDelay = `${0.8 + (index * 0.2)}s`;
            section.classList.add('active');
        });
    }, 500);
    
    setupScrollEffects();
    
    const audio = document.getElementById('wedding-audio');
    audio.volume = 0.5;
    
    const playAudio = () => {
        audio.play().catch(error => {
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    };
    
    playAudio();
});

function setupScrollEffects() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
        
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('active');
            }
        });
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}