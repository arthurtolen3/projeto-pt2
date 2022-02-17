console.log('teste');

document.getElementById('button').addEventListener(`click`, function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none'
});