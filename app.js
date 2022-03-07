let bgcolor = document.getElementById("switch")
let container = document.getElementById('container')

bgcolor.addEventListener('click',()=>{
    if (bgcolor.checked) {
        container.style.backgroundColor = 'black';
        container.style.color = "white"
        document.body.style.backgroundColor = 'black';
    }else{
        container.style.backgroundColor = '#F4F4F4'
        document.body.style.backgroundColor = 'white'
        container.style.color = "black"
    }
});