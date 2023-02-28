var range = document.querySelector('.range')
var rangeBar = document.querySelector('.range-bar')
var value = document.querySelector('.range span')
var body = document.querySelector('body')

function updateProcess(rangePercent) {
    rangeBar.style.width = `${rangePercent}%`
    value.innerText = `${rangePercent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${rangePercent / 100})`
}
range.addEventListener('mousemove', function(e){
    var process = e.pageX - this.offsetLeft
    let rangePercent = Math.ceil((process / this.offsetWidth) * 100)
    
    updateProcess(rangePercent)
})

updateProcess(40)