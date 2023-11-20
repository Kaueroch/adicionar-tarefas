    document.getElementById("adicionar").onclick = function(){
        let input = document.getElementById("adicionartarefas").value
         
        if(input !== ""){                                                     
               // definir o elemento 
               let novatarefa = document.createElement("li");
              //criar um novo elemento após a inserção
               novatarefa.textContent = input;
               //adicionar o elemento na tela
               document.getElementById("tarefas").appendChild(novatarefa);
               document.getElementById("adicionartarefas").value = "";
            }
            /* if(input >= 10){
                alert("Chegou ao limite!!")
                document.getElementById("adicionartarefas").disabled 
            }
            tentei desabilitar mas nao consegui */ 
    }
    document.getElementById("limpar").onclick = function(){
        document.getElementById("tarefas").innerHTML = "";
    }
   

