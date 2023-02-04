// criar classe

class Produto{
     
     constructor(){
          // dentro dessa class teremos um id que vai inicializar como (0)
          this.id = 1;
          // // vai ter um  nome 
          this.arrayProdutos = [];
          // this.valor = 0;
     }

     salvar(){
          // function adicionar
          // this.lerDados();

          let produto = this.lerDados();
          if( this.validaCampos(produto)){
               this.adicionar(produto)
          }
          
          this.listaTabela();
          this.cancelar();
     }

     adicionar(produto){
          this.arrayProdutos.push(produto);
          this.id++;
     }

     listaTabela(){
          let tbody = document.getElementById("tbody")
          tbody.innerText = ""

          for(let i =0; i< this.arrayProdutos.length; i++){
               let tr = tbody.insertRow();
               // cria uma linha

               let td_id= tr.insertCell();
               let td_produto= tr.insertCell();
               let td_valor= tr.insertCell();
               let td_acoes= tr.insertCell();
               // cria coluna

               td_id.innerText = this.arrayProdutos[i].id
               td_produto.innerText = this.arrayProdutos[i].nomeProduto
               td_valor.innerText = this.arrayProdutos[i].preco

               td_id.classList.add("center")
               let imgEdit =document.createElement("img")
               imgEdit.src = "img/editar.png"

               let imgDelet = document.createElement("img")
               imgDelet.src = "img/icon-delet.svg";
               imgDelet.setAttribute("onclick", "produto.deletar( " + this.arrayProdutos[i].id +")" )

               td_acoes.appendChild(imgEdit);
               td_acoes.appendChild(imgDelet);
               // <td> <ig> </td>
          }
     }
     
     lerDados(){
          // essa function vai ler os dados dos campos input e passa para a function acima
          // alert('voce adicionaou um produto');
          let produto = {}

          produto.id = this.id

          // pegar o valor do produto o id ta selecionado e o value e para pegar o valor
          produto.nomeProduto = document.getElementById("produto").value;
          produto.preco = document.getElementById("preco").value;

          // produto.nomeProduto
          // esse valor e o da variavel let

          return produto;

     }

     validaCampos(produto){
          // se algun campo estiver vazio 

          let msg = "";

          
          if(produto.nomeProduto == ""){
               msg += "- Informe o Nome do produto \n";
          }

          if(produto.preco == ""){
               msg += "- Informe o Preço do produto \n";
          }

          if(msg != ""){
               alert(msg);
               return false
          }
          return true;
     }

     // function excluir produto
     cancelar(){
          document.getElementById("produto").value= "";
          document.getElementById("preco").value= "";
     }

     deletar(id){
          let tbody = document.getElementById("tbody")
          
          for(let i = 0; i < this.arrayProdutos.length; i++){
               if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i)
               }
          }

     }

}

// objeto do tipo produto
var produto = new Produto();


