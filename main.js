const red = document.getElementById("red")
const toggle = document.getElementById('toggle')

toggle.addEventListener('click' , function(){
    red.checked = !red.checked
})