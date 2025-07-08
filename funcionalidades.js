document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', function(impedirSairSemEnviar){
        impedirSairSemEnviar.preventDefault();
       
        adicionarTarefa();
        this.reset();
        

        function adicionarTarefa(){
        
            const titulo = document.getElementById("titulo").value.trim();
            const descricao = document.getElementById("descricao").value.trim();
                if (titulo === "" || descricao === "") {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }
            const tarefa = document.createElement("div");
            tarefa.className = "tarefa"
            tarefa.innerHTML = `
                <strong class="tituloTarefa">${titulo}</strong>
                <textarea class="descricaoTarefa" rows="6" cols="25" readonly >${descricao}</textarea>
                <button class="botaoConcluir"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                                                  </svg><p>Concluir</p></button>
            `;
            document.getElementById("tarefasAdicionadas").appendChild(tarefa);
            
            const tarefasPendentes = document.querySelectorAll(".tarefa").length;
            contador.innerHTML = `${tarefasPendentes}`;

            const botaoConcluir = tarefa.querySelector(".botaoConcluir");
            botaoConcluir.addEventListener("click", function() {
                document.getElementById("tarefasAdicionadas").removeChild(tarefa);
                const tarefasPendentes = document.querySelectorAll(".tarefa").length-length;
                contador.innerHTML = `${tarefasPendentes}`;
            });


        }

           
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });
});