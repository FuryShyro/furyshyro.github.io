// Animation pour le chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes de téléchargement
    const downloadCards = document.querySelectorAll('.download-card');
    
    downloadCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Simulation du clic sur la vidéo
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if(videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            this.innerHTML = '<iframe width="1250" height="703" src="https://www.youtube.com/embed/2pCEreE6E0s" title="Fortnite | OG (Classic) Lobby Music (C1S10 Battle Pass)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        });
    }
});