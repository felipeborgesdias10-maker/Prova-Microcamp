function simularFinanciamento() {
    const valor = parseFloat(document.getElementById("valor").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const juros = 0.015;

    if (!valor || !parcelas) {
        alert("Preencha todos os campos!");
        return;
    }

    const resultado = (valor * (1 + juros * parcelas)) / parcelas;
    document.getElementById("resultado").innerText =
        "Valor estimado da parcela: R$ " + resultado.toFixed(2);
}
