const btnLocalizacao = document.querySelector("#btnLocalizacao");
const btnCamera = document.querySelector("#btnCamera");
const btnFoto = document.querySelector("#btnFoto");

btnLocalizacao.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            document.querySelector("#latitude").textContent =
                posicao.coords.latitude;

            document.querySelector("#longitude").textContent =
                posicao.coords.longitude;

            document.querySelector("#precisao").textContent =
                posicao.coords.accuracy + " metros";
        },

        function(erro) {

            alert("Não foi possível obter a localização.");
        }
    );
});

btnCamera.addEventListener("click", () => {

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    .then(function(stream) {

        const video = document.querySelector("#camera");

        video.srcObject = stream;

        btnFoto.style.display = "inline-block";
    })

    .catch(function(erro) {

        console.log("Erro ao acessar a câmera:", erro);

        alert("Não foi possível acessar a câmera.");
    });
});

btnFoto.addEventListener("click", () => {

    const video = document.querySelector("#camera");
    const canvas = document.querySelector("#foto");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    video.style.display = "none";
    canvas.style.display = "block";

    btnFoto.style.display = "none";
});