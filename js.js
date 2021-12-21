function increaseCounter() {
    const value = parseInt(document.getElementById('counter').value);
    document.getElementById('counter').value = !!value ? parseInt(document.getElementById('counter').value) + 1 : 1;
}

function decreaseCounter() {
    const value = parseInt(document.getElementById('counter').value);
    document.getElementById('counter').value = !!value ? parseInt(document.getElementById('counter').value) - 1 : -1;
}

function resetCounter() {
    document.getElementById('counter').value = 0;
}

document.addEventListener('keyup', e => {
    if (e.key === ' ') {
        increaseCounter();
    }
})