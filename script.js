var formaPagamento = document.getElementById("FormaPagamento");
var troco = document.getElementById("troco");
var valorCompra = document.getElementsByName("valorCompra")[0];
var valorDado = document.getElementById("valorDado");
var valorTroco = document.getElementById("valorTroco");
var btnImprimir = document.getElementById("btnImprimir");

formaPagamento.addEventListener("change", function() {
  if (formaPagamento.value === "dinheiro") {
    troco.style.display = "block";
    valorDado.addEventListener("input", function() {
      var trocoValor = parseFloat(valorDado.value) - parseFloat(valorCompra.value);
      valorTroco.value = trocoValor.toFixed(2);
    });
  } else {
    troco.style.display = "none";
  }
});

btnImprimir.addEventListener("click", function() {
    var camposObrigatorios = document.querySelectorAll(".required");
    var camposPreenchidosCorretamente = true;
    camposObrigatorios.forEach(function(campo) {
      if (!campo.value) {
        camposPreenchidosCorretamente = false;
        campo.classList.add("invalid");
      } else {
        campo.classList.remove("invalid");
      }
    });
    if (!camposPreenchidosCorretamente) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }
  
    // Limpar os campos após a impressão
    camposObrigatorios.forEach(function(campo) {
      campo.value = "";
    });
  
    // Atualizar a página após a impressão
    window.addEventListener("afterprint", function() {
      window.location.reload();
    }, {once: true});
  });
  

  const endereco = document.getElementById('end');
  endereco.addEventListener('input', () => {
    const scrollHeight = endereco.scrollHeight;
    const height = endereco.clientHeight;
    if (scrollHeight > height) {
      endereco.style.height = scrollHeight + 'px';
    }
  });



