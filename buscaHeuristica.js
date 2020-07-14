let somadorNodeH = 1;
function criarEstadoInicialBH() {
  let estado = {
    node: 1,
    parent: "",
    minmax: "",
    //professor
    //vetor:["2","*","3","1","7","4","6","8","5"]
    // 17ba 4bh
    vetor: ["1", "2", "3", "7", "8", "4", "6", "*", "5"],
    //31ba 5bh
    //vetor:["1","2","3","7","8","4","6","5","*"]
    //50000
    //vetor:["7","*","1","6","3","4","2","8","5"]

    //vetor:["1","2","3","7","8","*","6","5","4"]
  };
  return estado;
}
function print(no) {
  let printnode = "";
  for (let i = 0; i < no.vetor.length; i++) {
    if (i % 3 == 0) {
      printnode += "\n";
    }
    printnode += no.vetor[i] + " ";
  }
  console.log(printnode);
}
function alteraPosicao(no, newNode, posicaoEmBranco, posicaoMudanca) {
  newNode.vetor[posicaoEmBranco] = no.vetor[posicaoMudanca];
  newNode.vetor[posicaoMudanca] = no.vetor[posicaoEmBranco];
}
function criarfila(estadoInicial) {
  let nodes = [];
  nodes.push(estadoInicial);
  return nodes;
}
function FunMinimax(no, posicaoEmBranco) {
  if (no.vetor[posicaoEmBranco] == 5 && posicaoEmBranco == 8) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 6 && posicaoEmBranco == 7) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 7 && posicaoEmBranco == 6) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 4 && posicaoEmBranco == 5) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == "*" && posicaoEmBranco == 4) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 8 && posicaoEmBranco == 3) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 3 && posicaoEmBranco == 2) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 2 && posicaoEmBranco == 1) {
    return true;
  }
  if (no.vetor[posicaoEmBranco] == 1 && posicaoEmBranco == 0) {
    return true;
  }
  return false;
}

function criarNovoEstado(no, posicaoEmBranco, posicaoMudanca) {
  let newNo = JSON.parse(JSON.stringify(no));
  newNo.parent = no.node;
  alteraPosicao(no, newNo, posicaoEmBranco, posicaoMudanca);
  newNo.minmax = FunMinimax(newNo, posicaoEmBranco);
  return newNo;
}

function estadoObjetivo(no) {
  if (
    no.vetor[0] === "1" &&
    no.vetor[1] === "2" &&
    no.vetor[2] === "3" &&
    no.vetor[3] === "8" &&
    no.vetor[4] === "*" &&
    no.vetor[5] === "4" &&
    no.vetor[6] === "7" &&
    no.vetor[7] === "6" &&
    no.vetor[8] === "5"
  ) {
    return true;
  } else {
    return false;
  }
}

function verificaIgualdade(no, newNode) {
  for (let k = 0; k < no.vetor.length; k++) {
    if (no.vetor[k] !== newNode.vetor[k]) {
      return false;
    }
  }
  return true;
}
function verificaSejaFoiVisitado(no, visitado) {
  for (let k = 0; k < visitado.length; k++) {
    if (verificaIgualdade(no, visitado[k])) {
      return false;
    }
  }
  return true;
}

function expandirH(nodes, no, visitado) {
  console.log("entrou:", nodes.length);
  let posicao = 0;
  for (let i = 0; i < no.vetor.length; i++) {
    if (no.vetor[i] === "*") {
      posicao = i;
    }
  }
  let verificaSeinseriu = false;

  if (posicao == 8) {
    let node1 = criarNovoEstado(no, posicao, 5);
    let node2 = criarNovoEstado(no, posicao, 7);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }

    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }

    if (verificaSeinseriu == false) {
      if (no.vetor[5] != 4) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[7] != 6) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }
    }
  }

  if (posicao == 7) {
    let node1 = criarNovoEstado(no, posicao, 4);
    let node2 = criarNovoEstado(no, posicao, 6);
    let node3 = criarNovoEstado(no, posicao, 8);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }

    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }

    if (node3.minmax) {
      somadorNodeH += 1;
      node3.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node3);
      verificaSeinseriu = true;
    }

    if (verificaSeinseriu == false) {
      if (no.vetor[4] != "*") {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[6] != 7) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }

      if (no.vetor[8] != 5) {
        if (verificaSejaFoiVisitado(node3, visitado)) {
          somadorNodeH += 1;
          node3.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node3);
        }
      }
    }
  }

  if (posicao == 6) {
    let node1 = criarNovoEstado(no, posicao, 3);
    let node2 = criarNovoEstado(no, posicao, 7);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[3] != 8) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[7] != 6) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }
    }
  }

  if (posicao == 5) {
    let node1 = criarNovoEstado(no, posicao, 2);
    let node2 = criarNovoEstado(no, posicao, 4);
    let node3 = criarNovoEstado(no, posicao, 8);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (node3.minmax) {
      somadorNodeH += 1;
      node3.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node3);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[2] != 3) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[4] != "*") {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }

      if (no.vetor[8] != 5) {
        if (verificaSejaFoiVisitado(node3, visitado)) {
          somadorNodeH += 1;
          node3.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node3);
        }
      }
    }
  }

  if (posicao == 4) {
    let node1 = criarNovoEstado(no, posicao, 1);
    let node2 = criarNovoEstado(no, posicao, 3);
    let node3 = criarNovoEstado(no, posicao, 5);
    let node4 = criarNovoEstado(no, posicao, 7);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (node3.minmax) {
      somadorNodeH += 1;
      node3.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node3);
      verificaSeinseriu = true;
    }
    if (node4.minmax) {
      somadorNodeH += 1;
      node4.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node4);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[1] != 2) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[3] != 8) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }

      if (no.vetor[5] != 4) {
        if (verificaSejaFoiVisitado(node3, visitado)) {
          somadorNodeH += 1;
          node3.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node3);
        }
      }

      if (no.vetor[7] != 6) {
        if (verificaSejaFoiVisitado(node4, visitado)) {
          somadorNodeH += 1;
          node4.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node4);
        }
      }
    }
  }

  if (posicao == 3) {
    let node1 = criarNovoEstado(no, posicao, 0);
    let node2 = criarNovoEstado(no, posicao, 4);
    let node3 = criarNovoEstado(no, posicao, 6);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (node3.minmax) {
      somadorNodeH += 1;
      node3.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node3);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[0] != 1) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[4] != "*") {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }

      if (no.vetor[6] != 7) {
        if (verificaSejaFoiVisitado(node3, visitado)) {
          somadorNodeH += 1;
          node3.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node3);
        }
      }
    }
  }

  if (posicao == 2) {
    let node1 = criarNovoEstado(no, posicao, 1);
    let node2 = criarNovoEstado(no, posicao, 5);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[1] != 2) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[5] != 4) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }
    }
  }

  if (posicao == 1) {
    let node1 = criarNovoEstado(no, posicao, 0);
    let node2 = criarNovoEstado(no, posicao, 2);
    let node3 = criarNovoEstado(no, posicao, 4);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (node3.minmax) {
      somadorNodeH += 1;
      node3.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node3);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[0] != 1) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[2] != 3) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }

      if (no.vetor[4] != "*") {
        if (verificaSejaFoiVisitado(node3, visitado)) {
          somadorNodeH += 1;
          node3.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node3);
        }
      }
    }
  }

  if (posicao == 0) {
    let node1 = criarNovoEstado(no, posicao, 1);
    let node2 = criarNovoEstado(no, posicao, 3);
    if (node1.minmax) {
      somadorNodeH += 1;
      node1.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node1);
      verificaSeinseriu = true;
    }
    if (node2.minmax) {
      somadorNodeH += 1;
      node2.node = JSON.parse(JSON.stringify(somadorNodeH));
      nodes.push(node2);
      verificaSeinseriu = true;
    }
    if (verificaSeinseriu == false) {
      if (no.vetor[1] != 2) {
        if (verificaSejaFoiVisitado(node1, visitado)) {
          somadorNodeH += 1;
          node1.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node1);
        }
      }

      if (no.vetor[3] != 8) {
        if (verificaSejaFoiVisitado(node2, visitado)) {
          somadorNodeH += 1;
          node2.node = JSON.parse(JSON.stringify(somadorNodeH));
          nodes.push(node2);
        }
      }
    }
  }
  console.log("saiu", nodes.length);
  return nodes;
}
function buscaHeuristica() {
  let estadoInicial = criarEstadoInicialBH();
  let nodes = criarfila(estadoInicial);
  let no;
  let visitado = [];

  while (nodes.length > 0) {
    no = nodes.shift();
    visitado.push(no);
    console.log(no);
    if (estadoObjetivo(no)) {
      print(no);
      return [no, visitado];
    }
    nodes = expandirH(nodes, no, visitado);
  }
}
