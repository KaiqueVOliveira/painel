var verifica = false

function comunicacao(boo){
    
    verifica = boo
    console.log(verifica)
}

function apresentaMensagem(id){
    var display = document.getElementById(id).style.display;

    if(display == 'block'){
        document.getElementById(id).style.display = 'none';
        
    }

    else{
        document.getElementById(id).style.display = 'block';
        comunicacao(true)
    }

}

