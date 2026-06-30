function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado").innerHTML = "A média é: " + media.toFixed(2);
}

function resultado() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = "Aprovado";
    } else if (media >= 5) {
        document.getElementById("resultado").innerHTML = "Recuperação";
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado";
    }
}
