document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    function getRandomColor() {
        const caracteres = '0123456789ABCDEF';
        let couleur = '#';
        for (let i = 0; i < 6; i++) {
            const indexAleatoire = Math.floor(Math.random() * 16);
            couleur += caracteres[indexAleatoire];
        }
        return couleur
    }
    changeColorBtn.addEventListener('click', () => {
        const nouvelleCouleur = getRandomColor();
        colorBox.style.backgroundColor = nouvelleCouleur;
    });
});