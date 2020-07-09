function criarEstadoInicial(){
    let estado = {
      node: 1,
      parent: "",
      vetor:["2","3","5","6","7","1","8","4","*"]  
    }  
    return estado
  }
  function print(no){
      let printnode=""
      for (let i = 0; i < no.vetor.length; i++){
        if(i%3==0){
          printnode+='\n'
        }
        printnode+=no.vetor[i]+" "
      }
      console.log(printnode)
  }
  function alteraPosicao(no,newNode,posicaoEmBranco,posicaoMudanca){
      newNode.vetor[posicaoEmBranco]=no.vetor[posicaoMudanca]
      newNode.vetor[posicaoMudanca]=no.vetor[posicaoEmBranco]
  }
  function criarfila(estadoInicial){
    let nodes = [];
    nodes.push(estadoInicial)
    return nodes;
  }
  function criarNovoEstado(no,posicaoEmBranco,posicaoMudanca){
    let newNo = JSON.parse(JSON.stringify(no))
    alteraPosicao(no,newNo,posicaoEmBranco,posicaoMudanca)
    return newNo
  }
  
  function estadoObjetivo(no){
     if(no.vetor[0]==="1" && no.vetor[1]==="2" && no.vetor[2]==="3" && no.vetor[3]==="8" && no.vetor[4]==="*" && no.vetor[5]==="4" && no.vetor[6]==="7" && no.vetor[7]==="6" && no.vetor[8]==="5"){
       return true
     }else{
       return false
     }
  }

  
  function expandir(nodes,no,repitido){
    let posicao=0;
    for (i = 0; i < no.vetor.length; i++){
        if(no.vetor[i]==="*"){
          posicao=i
        }
    } 
    if(posicao==8){
      nodes.push(criarNovoEstado(no,posicao,5))
      nodes.push(criarNovoEstado(no,posicao,7))
    }
    else if(posicao==5){
      nodes.push(criarNovoEstado(no,posicao,2))
      nodes.push(criarNovoEstado(no,posicao,4))
      nodes.push(criarNovoEstado(no,posicao,8))
    }
    
    console.log("aqui",nodes.length)

    return nodes
  }
  function buscaAmplitude(){
    let estadoInicial=criarEstadoInicial()
    let nodes=criarfila(estadoInicial)
    let no;
    while(nodes.length > 0){
      no=nodes.shift();
      if(estadoObjetivo(no)){
        return no 
      }
      expandir(nodes,no)
      
    }
    
    
  }
aux=criarEstadoInicial()
print(aux)