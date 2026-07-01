function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Verificação de valores
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerText = "⚠️ Digite todas as notas corretamente.";
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;
    let mensagem = "A média do aluno é: " + media.toFixed(2);

    if (media >= 6) {
        mensagem += " ✅ O aluno está aprovado!";
    } else {
        mensagem += " ❌ O aluno está reprovado.";
    }

    // Exibe na página
    document.getElementById("resultado").innerText = mensagem;
}
