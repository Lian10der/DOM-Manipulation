const qrCodeButton = document.getElementById("qrCode")
const qrImagem = document.querySelector(".qrcode")

qrCodeButton.addEventListener("click", function (){
    console.log(qrImagem)
    qrImagem.classList.add('girar');

    setTimeout(function(){
        qrImagem.classList.remove('girar');
    }, 1000)
})

