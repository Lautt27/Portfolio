function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    document.body.appendChild(starsContainer);

    const numberOfStars = 70;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posición horizontal aleatoria
        star.style.left = `${Math.random() * 100}vw`;

        // Duración de caída aleatoria (entre 5s y 8s)
        star.style.setProperty('--duration', `${Math.random() * 3 + 5}s`);

        // Retraso en la animación aleatorio (0s a 7s)
        star.style.animationDelay = `${Math.random() * 7}s`;

        starsContainer.appendChild(star);
    }
}

window.onload = createStars;
