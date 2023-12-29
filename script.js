
  let caixaTexto = document.querySelector('#box-exibir-texto')

function copiartxt(){
    caixaTexto.select()
    document.execCommand('copy')
}

function clickCopy(trat){
    // ---- TRATATIVAS ----
    if (trat == 1){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratUmMomentoEntraremosEmContato.focus()
    
    }else if (trat == 2){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratSouSuporteComoPossoAjudar.focus()

    }else if (trat == 3){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratSouSuporteTecnico.focus()

    }else if (trat == 4){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratComoPossoAjudar.focus()

    }else if (trat == 5){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratMeConfirmeNomeECpf.focus()

    }else if (trat == 6){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratUmMomentoVouVerificar.focus()

    }else if (trat == 7){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratSemRetornoEstamosNoAguardo.focus()

    }else if (trat == 8){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratAtendimentoEncerrado.focus()

    }else if (trat == 9){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratAInfotecAgradeceOContato.focus()

    }else if (trat == 10){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratDisponhaQualquerDuvida.focus()

    }else if(trat == 11){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratAcessoNormalizadoSemIntervencao.focus()
    
    }else if(trat == 12){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratSolicitacaoAtendida.focus()
    
    }else if(trat == 13){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratEncaminhadaParaOSetorResponsavel.focus()

    }else if(trat == 14){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratNosRespondaNoPrivado.focus()
    
    }else if(trat == 15){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        tratAjudoEmAlgoMais.focus()
    }

    //---- ESCRITÓRIO ----
    else if(trat == 'a'){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        ofcPlanosEValoresInfotec.focus()
    
    }else if(trat == 'b'){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        ofcCanaisInfotecPlay.focus()

    }else if(trat == 'c'){
        caixaTexto.value = mensagemTratativa(trat)
        copiartxt()
        ofcContatoEscritorio.focus()
    }
    }
 