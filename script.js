document.getElementById("btnBuscar").addEventListener("click", function (){

    const nome = document.getElementById("nome").ariaValueMax;

    fetch(`https://api.agify.io?name=${nome}`)
    .then(res => res.json())
    .then(dados => {

        if(dados.age === null){
            document.getElementById("resultado").textContent =
            "Não foi possivel estimar idade.";
        } else {
            document.getElementById("resultado").textContent =
            `O nome ${dados.name} tem idade estimulada de ${dados.age} anos.`;
        }

    }).catch(erro => {
        console.log("Erro:", erro);
    });
})