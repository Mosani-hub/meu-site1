function atualizarValor() {
  // Preços fixos
  const precoEmpadinha = 3;
  const precoMarmitaMedia = 8;
  const precoMarmitaGrande = 12;

  // Seleção de lanches e bebidas
  const lanche = document.getElementById('lanche').value;
  const bebida = document.getElementById('bebida').value;

  // Quantidades de empadas
  const qtdEmpadinha = parseInt(document.getElementById('empadinha').value) || 0;
  const qtdMarmitaMedia = parseInt(document.getElementById('marmitaMedia').value) || 0;
  const qtdMarmitaGrande = parseInt(document.getElementById('marmitaGrande').value) || 0;

  // Calcular o total
  const total = (lanche.includes("R$") ? parseFloat(lanche.split("R$")[1].replace(",", ".")) : 0) +
                (bebida.includes("R$") ? parseFloat(bebida.split("R$")[1].replace(",", ".")) : 0) +
                (precoEmpadinha * qtdEmpadinha) +
                (precoMarmitaMedia * qtdMarmitaMedia) +
                (precoMarmitaGrande * qtdMarmitaGrande);

  // Atualizar o valor total na tela
  document.getElementById('valorTotal').textContent = total.toFixed(2);
}

function enviarPedido() {
  // Capturar os valores dos pedidos
  const lanche = document.getElementById('lanche').value || "Nenhum";
  const bebida = document.getElementById('bebida').value || "Nenhum";
  const qtdEmpadinha = document.getElementById('empadinha').value || 0;
  const qtdMarmitaMedia = document.getElementById('marmitaMedia').value || 0;
  const qtdMarmitaGrande = document.getElementById('marmitaGrande').value || 0;
  const valorTotal = document.getElementById('valorTotal').textContent;

  // Montar a mensagem do pedido
  const mensagem = `Olá, gostaria de fazer o seguinte pedido:\n\nLanche: ${lanche}\nBebida: ${bebida}\nEmpadinhas: ${qtdEmpadinha} unidade(s)\nEmpada na marmita média: ${qtdMarmitaMedia} unidade(s)\nEmpada na marmita grande: ${qtdMarmitaGrande} unidade(s)\n\nValor Total: R$ ${valorTotal}`;

  // Link para WhatsApp (substitua o número abaixo pelo número da lanchonete)
  const numeroWhatsApp = "5517996390812"; // Exemplo: DDD+Número
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Redirecionar para o WhatsApp
  window.open(urlWhatsApp, "_blank");
}