document.addEventListener('DOMContentLoaded', () => {
    // Alternar visibilidade das imagens
    const toggleButtons = document.querySelectorAll('.toggle-images');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imageContainer = button.nextElementSibling;
            const isVisible = imageContainer.style.display === 'block';
            imageContainer.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Ver Imagens do Projeto' : 'Ocultar Imagens';
        });
    });

    // Modal de imagem
    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    modal.innerHTML = `
    <span class="image-modal-close">&times;</span>
    <img class="image-modal-content" id="modal-img">
  `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modal-img');
    const closeBtn = modal.querySelector('.image-modal-close');

    document.querySelectorAll('.project-img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});