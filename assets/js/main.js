let figures = document.querySelectorAll('figure');
figures.forEach(figure => {
    figure.style.backgroundImage = "url('" + figure.dataset.img + "')";
    figure.style.backgroundSize = "cover";

    figure.addEventListener('click', () => {
        window.open(figure.dataset.href, '_blank');
    });
});
