console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Hello! This is a premium web experience.');
        });
    }
});
