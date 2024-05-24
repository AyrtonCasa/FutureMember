document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.getElementById('likeButton');

    likeButton.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});