//detects and displays how far along a gradient the user has moved their mouse
//result should be rounded down and displayed as a percentage


function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);
    const result = document.getElementById('result');

    function onMouseMove(ev) {
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
}