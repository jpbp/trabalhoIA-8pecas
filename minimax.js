function buscaMinimax(visitado) {
  let result = buscaAmplitude();
  let visi = result[1];
  let newVetor = [];
  newVetor.push(result[0]);
  let auxno = JSON.parse(JSON.stringify(result[0]));
  let i = visi.length - 2;
  while (i > 0) {
    if (auxno.parent == visi[i].node) {
      newVetor.push(visi[i]);
      visi[i].minmax = 1;
      auxno = JSON.parse(JSON.stringify(visi[i]));
    }
    i--;
  }
  newVetor.push(visi[0]);
  return [visi, newVetor.reverse()];
}
