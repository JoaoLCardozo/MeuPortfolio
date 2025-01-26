const botoes = document.querySelectorAll(".div-botao");

const links = {
    Github: "https://github.com/JoaoLCardozo",
    Linkedin: "https://www.linkedin.com/in/joão-luiz-ferreira-cardozo-5845ba268/",
    Instagram: "https://www.instagram.com",
    Youtube: "https://www.youtube.com",
    Facebook: "https://www.facebook.com"
};

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const textoBotao = botao.textContent.trim();
        const url = links[textoBotao];

        if (url) {
            window.open(url, "_blank");
        } else {
            alert("Link não configurado para este botão!");
        }
    });
});
