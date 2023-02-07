const container = document.querySelector('.container')
const circle = document.querySelector('.circle')
container.addEventListener('mousemove', e => {
    circle.style.left = `${e.x - 50}px`
    circle.style.top = `${e.y - 50}px`
})
