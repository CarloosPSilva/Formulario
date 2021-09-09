 /* Função Validar */
 function validar() {
     event.preventDefault();

     // pegando o valor do nome pelos names
     var nome = document.getElementById("nome");
     var apelido = document.getElementById("apelido");
     var cpf = document.getElementById("cpf");
     var dia = document.getElementById("dia");
     var mes = document.getElementById("mes");
     var ano = document.getElementById("ano");
     var time = document.getElementById("time");
     var esporte = document.getElementsByName('sport');
     var esportes = [];

     // verificar se o nome está vazio
     if (!nome.value) {
         alert("Nome não informado");

         // Deixa o input com o focus
         nome.focus();
         // retorna a função e não olha as outras linhas
         return;
     }
     if (!apelido.value) {
         alert("Sobrenome não informado");
         apelido.focus();
         return;
     }

     if (!cpf.value) {
         alert("CPF não informado");
         cpf.focus();
         return;
     }
     if (!dia.value) {
         alert("Dia não informado");
         dia.focus();
         return;
     }

     if (!mes.value) {
         alert("mes não informado");
         mes.focus();
         return;
     }

     if (!ano.value) {
         alert("Ano não informada");
         ano.focus();
         return;
     }
     if (!time.value) {

         alert("Time não informado");
         time.focus();
         return;

     }

     if (document.getElementsByName("sport")[0].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[0].id)
     } else if (document.getElementsByName("sport")[1].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[1].id)
     } else if (document.getElementsByName("sport")[2].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[2].id)
     } else if (document.getElementsByName("sport")[3].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[3].id)
     } else if (document.getElementsByName("sport")[4].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[4].id)
     } else if (document.getElementsByName("sport")[5].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[5].id)
     } else if (document.getElementsByName("sport")[6].checked) {
         esporte = true;
         esportes.push(document.getElementsByName("sport")[6].id)
     } else {
         alert("Esporte não informado");
         esporte.focus();
         esporte = false;
         return;

     }

     alert("Formulário enviado!");

     // envia o formulário
     //formulario.submit();
     const result = {
         nome: nome.value,
         nickname: apelido.value,
         birth_date: `${dia.value}/${mes.value}/${ano.value}`,
         cpf: cpf.value,
         team_id: time.value,
         sports: esportes

     }
     document.getElementById("result").textContent = JSON.stringify(result, undefined, 2);
     document.getElementById("result").style.display = "block"
 }