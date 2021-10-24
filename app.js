logo = document.getElementById("logo")


function changeBackground () {
    document.body.style.background = "white"
}

logo.addEventListener('mouseover',changeBackground);
logo.addEventListener('mouseout', () => {document.body.style.background = "black"})