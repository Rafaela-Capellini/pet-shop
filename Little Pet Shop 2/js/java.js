async function carregarDados() {
    //ocultar a div de erro (se ela estiver visível)
    const divErro = document.getElementById('div-erro');
    divErro.style.display = 'none';
}
function exibirErro(mensagem) {
    let divErro = document.getElementById('div-erro');
    divErro.innerHTML = '<b>Erro ao acessar a API</b><br/>' + mensagem;
    divErro.style.display = 'block';
}

//////////////////////^erro^/////////////////////////////////////


/////////////////Gráfico pizza/////////////////////////////

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharPizza);

function desenharPizza() {

    var data = google.visualization.arrayToDataTable(obterDados());

    var options = {
        title: 'Quantidade de pets que vão para banho, tosa, consulta ou para comprar',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('grafico-pizza'));

    chart.draw(data, options);
}

function obterDados() {

    let dados = [
        ['variedade', 'quantidade'],
        ['compras', Math.random() * 100],
        ['banho', Math.random() * 100],
        ['tosa', Math.random() * 100],
        ['consulta', Math.random() * 100]
    ];
    return dados
};

//////////////////////////gráfico Linha////////////////////////////////////////////

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharLinha);

function desenharLinha() {
    let data = google.visualization.arrayToDataTable(obterDados2());

    let options = {
        title: 'Acompanhamento da empresa',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    let chart = new google.visualization.LineChart(document.getElementById('grafico-linha'));

    chart.draw(data, options);
}

function obterDados2() {
    let dados = [
        ['meses', 'vendas', 'gastos', 'lucro'],
        ['janeiro', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['fevereiro', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['março', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['abril', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['maio', Math.random() * 100, Math.random() * 100, Math.random() * 100]
    ];
    return dados;
}


////////////////////////gráfico cronograma/////////////////////


google.charts.load('current', { 'packages': ['timeline'] });
google.charts.setOnLoadCallback(desenharCronograma);
function desenharCronograma() {
    var container = document.getElementById('grafico-cronograma');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    let options = {
        title: 'Acompanhamento da empresa',
    }

    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows(obterDados3());


    chart.draw(dataTable);
}

function obterDados3() {
    let dados = [
        ['Berinbal', new Date(2022, Math.random() * 10), new Date(2023, Math.random() * 10, 4)],
        ['Bernabie', new Date(2022, Math.random() * 10), new Date(2023, Math.random() * 10, 4)],
        ['Kokichi', new Date(2022, Math.random() * 10), new Date(2023, Math.random() * 10, 3)],
        ['Snow', new Date(2022, Math.random() * 10), new Date(2023, Math.random() * 10, 4)],
        ['Floquinho', new Date(2022, Math.random() * 10), new Date(2023, Math.random() * 10, 4)],
        ['Lili', new Date(2022, Math.random() * 10), new Date(2023, Math.random() * 10, 2)]
    ]
    return dados;
}



/////////////////////gráfico coluna ///////////////////////////////


google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(desenharColuna);

function desenharColuna() {
    var data = google.visualization.arrayToDataTable(obterDados4());

    var options = {
        chart: {
            title: 'estatisticas com o aumento de pets',

        }
    };

    var chart = new google.charts.Bar(document.getElementById('grafico-coluna'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function obterDados4() {
    let dados = [
        ['anos', 'gatos', 'cachorros', 'coelhos', 'papagaios', 'chinchilas'],
        ['2020', Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['2021', Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['2022', Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['2023', Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    ]
    return dados;
}



/////////////////////PAGINA Contato/////////////////////////
function aviso1() {
    let divErro = document.getElementById("mensagem-erro");
    divErro.style.display = 'none';
    let divacerto = document.getElementById("mensagem-acerto");
    divErro.style.display = 'none';
    let emmail = container1.innome.value;
    let Descricao = container1.inDes.value;

    if (emmail == '') {
        divErro.innerHTML = "o campo nome nao pode ser vazio!";
        container1.innome.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (emmail.length < 5) {
        divErro.innerHTML = "o campo nome nao pode ter menos que 5 caracteres!";
        container1.innome.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (emmail.length > 100) {
        divErro.innerHTML = "o campo nome nao pode ter mais que 100 caracteres!";
        container1.innome.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Descricao == '') {
        divErro.innerHTML = "o campo nao pode ser vazio!";
        container1.inDes.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Descricao.length < 5) {
        divErro.innerHTML = "o campo nao pode ter menos que 5 caracteres!";
        container1.inDes.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Descricao.length > 100) {
        divErro.innerHTML = "o campo nao pode ter mais que 100 caracteres!";
        container1.inDes.focus();
        divErro.style.display = 'block';
        return false;
    }


    divacerto.innerHTML = "Enviado!";
    return false;
}

/////////////////////PAGINA CADASTRO/////////////////////////
function aviso2() {
    let divErro = document.getElementById("mensagem-erro");
    divErro.style.display = 'none';
    let nomeCompleto = frmRegistro1.inNom.value;
    let ID = frmRegistro1.inID.value;
    let Endereco = frmRegistro1.inEndereço.value;
    let cidade = frmRegistro1.inCidade.value;
    let SiglaDoEstado = frmRegistro1.inSiglaDoEstado.value;
    let Emaill = frmRegistro1.inEmmail.value;
    let senha = frmRegistro1.inSenha.value;
    let dataa = frmRegistro1.inDat.value;
    let fone = frmRegistro1.inTelefone.value;
    let pet = frmRegistro1.inpet.value;
    let idadepet = frmRegistro1.inidade.value;





    if (nomeCompleto == '') {
        divErro.innerHTML = "o campo nome não pode ser vazio!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nomeCompleto.length < 3) {
        divErro.innerHTML = "o campo nome não pode ter menos que 3 caracteres!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nomeCompleto.length > 100) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (ID == '') {
        divErro.innerHTML = "o campo ID não pode ser vazio!";
        frmRegistro1.inID.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (ID.length < -0) {
        divErro.innerHTML = "o campo ID não pode ter número negativo!";
        frmRegistro1.inID.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (dataa.trim() == '') {
        divErro.innerHTML = "o campo data não pode ser vazio!";
        frmRegistro1.inDat.focus();
        divErro.style.display = 'block';
        return false;
    }






    if (Endereco == '') {
        divErro.innerHTML = "o campo Endereço nao pode ser vazio!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Endereco.length < 3) {
        divErro.innerHTML = "o campo Endereço nao pode ser menor que 3 caracteres!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Endereco.length > 100) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade == '') {
        divErro.innerHTML = "o campo cidade nao pode ser vazio!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade.length < 3) {
        divErro.innerHTML = "o campo cidade nao pode ser vazio!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade.length > 50) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (SiglaDoEstado == '') {
        divErro.innerHTML = "o campo UF nao pode ser vazio!";
        frmRegistro1.inSiglaDoEstado.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (SiglaDoEstado.length < 2) {
        divErro.innerHTML = "o campo UF nao pode ter menos que 2 caracteres!";
        frmRegistro1.inSiglaDoEstado.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill == '') {
        divErro.innerHTML = "o campo email nao pode ser vazio!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill.length < 3) {
        divErro.innerHTML = "o campo email nao pode mais que 100 caracteres!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill.length > 100) {
        divErro.innerHTML = "o campo email nao pode ter menos que 3 caracteres!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (fone == '') {
        divErro.innerHTML = "o campo nome não pode ser vazio!";
        frmRegistro1.inTelefone.focus();
        divErro.style.display = 'block';
        return false;
    }
    //////////////

    /*/////////////////////EMAIL//////////////////////////////*/

    if (Emaill.trim() == '') {
        divErro.innerHTML = "O campo não pode ser vazio!";
        divErro.style.display = 'block';
        frmRegistro1.inEmmail.focus();
        return false;
    }

    //aceitar somente e-mails com domínio "gmail.com", "sesisp.org.br","hotmail.com" ou qualquer dominio ".br".
    let padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/
    let emailValido = padraoEmail.test(Emaill);

    if (emailValido == false) {
        if (emailValido) {
            divErro.innerHTML = "O campo deve conter menos de 100 caracteres!";
            divErro.style.display = 'block';
            frmRegistro1.inEmmail.focus();
            return false;
        } else {
            divErro.innerHTML = "O campo deve conter @ ou .com!";
            divErro.style.display = 'block';
            frmRegistro1.inEmmail.focus();
            return false;
        }
    }

    ///////////////
    if (fone == '') {
        divErro.innerHTML = "o campo telefone nao pode ser vazio!";
        frmRegistro1.inTelefone.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (senha == '') {
        divErro.innerHTML = "o campo senha nao pode ser vazio!";
        frmRegistro1.inSenha.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (senha.length < 8) {
        divErro.innerHTML = "o campo senha nao pode ter menos que 8 caracteres!";
        frmRegistro1.inSenha.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (senha.length > 30) {
        divErro.innerHTML = "o campo senha nao pode ter mais de 30 caracteres!";
        frmRegistro1.inSenha.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (pet == '') {
        divErro.innerHTML = "o campo Nome do Pet nao pode ser vazio!";
        frmRegistro1.inpet.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (pet.length < 3) {
        divErro.innerHTML = "o campo Nome do Pet nao pode ser vazio!";
        frmRegistro1.inpet.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (pet.length > 100) {
        divErro.innerHTML = "o campo Nome do Pet nao pode ser vazio!";
        frmRegistro1.inpet.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (idadepet == '') {
        divErro.innerHTML = "o campo Idade do Pet nao pode ser vazio!";
        frmRegistro1.inidade.focus();
        divErro.style.display = 'block';
        return false;
    }
}

function mostraroutros() {
    let select = document.getElementById("select");
    let outros = document.getElementById("outros");

    if (select.value == "Outros")

        outros.style.display = "block";
    else
        outros.style.display = "none";
}

function mostraridade() {
    let paragrafo1 = document.getElementById("paragrafo");

    paragrafo1.textContent = 'seu pet tem:'
}



//////////////////////////agendamento/////////////////////////


///////////////////// /////////////////////////
function aviso() {
    let divErro = document.getElementById("mensagem-erro");
    divErro.style.display = 'none';
    let divacerto = document.getElementById("mensagem-acerto");
    let nome = div1agendamento.inCLIE.value;
    let petn = div1agendamento.inNome.value;
    let Data = div1agendamento.inData.value;
    let horA = div1agendamento.inhora.value;
    let tell = div1agendamento.infone.value;
    let Email = div1agendamento.inMaill.value;




    if (nome == '') {
        divErro.innerHTML = "o campo nome nao pode ser vazio!";
        div1agendamento.inCLIE.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nome.length < 3) {
        divErro.innerHTML = "o campo nome nao pode ter menos que 3 caracteres!";
        div1agendamento.inCLIE.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nome.length > 100) {
        divErro.innerHTML = "o campo nome nao pode ter mais que 100 caracteres!";
        div1agendamento.inCLIE.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (petn == '') {
        divErro.innerHTML = "o campo nome do pet nao pode ser vazio!";
        div1agendamento.inNome.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (petn.length < 3) {
        divErro.innerHTML = "o campo nome do pet nao pode ter menos que 3 caracteres!";
        div1agendamento.inNome.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (petn.length > 100) {
        divErro.innerHTML = "o campo nome do pet nao pode ter mais que 100 caracteres!";
        div1agendamento.inNome.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Email == '') {
        divErro.innerHTML = "o campo email nao pode ser vazio!";
        div1agendamento.inMaill.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Email.length < 5) {
        divErro.innerHTML = "o campo email nao pode ter menos que 5 caracteres!";
        div1agendamento.inMaill.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Email.length > 100) {
        divErro.innerHTML = "o campo email nao pode ter mais que 100 caracteres!";
        div1agendamento.inMaill.focus();
        divErro.style.display = 'block';
        return false;
    }
    ///////////////////////////




    /////////////////////
    //aceitar somente e-mails com domínio "gmail.com", "sesisp.org.br","hotmail.com" ou qualquer dominio ".br".
    let padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/
    let Email1 = padraoEmail.test(Email);
    if (!Email1) {
        divErro.innerHTML = "Formato do e-mail não é válido!";
        div1agendamento.inMaill.focus();
        divErro.style.display = 'block';
        return false;
    }
    ///////////////////////

    if (tell == '') {
        divErro.innerHTML = "o campo telefone nao pode ser vazio!";
        div1agendamento.infone.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (tell.length < 5) {
        divErro.innerHTML = "o campo telefone nao pode ter menos que 5 caracteres!";
        div1agendamento.infone.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (tell.length > 100) {
        divErro.innerHTML = "o campo telefone nao pode ter mais que 100 caracteres!";
        div1agendamento.infone.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (Data.trim() == '') {
        divErro.innerHTML = "o campo data nao pode ser vazio!";
        div1agendamento.inData.focus();
        divErro.style.display = 'block';
        return false;
    }

    let diaSemana = new Date(Data).getDay();

    if (diaSemana == '5' || diaSemana == '6') {
        divErro.innerHTML = "Não é possivel agendar aos fim de semana!";
        div1agendamento.inData.focus();
        divErro.style.display = 'block';
        return false;
    }

    let ano = new Date(Data).getFullYear();

    if (ano > 2025 || ano < 2023) {
        divErro.innerHTML = "agendamentos permitidos somente até 2025!";
        div1agendamento.inData.focus();
        divErro.style.display = 'block';
        return false;
    }




    let removerHora = /\D/g;
    horA = horA.replace(removerHora, '');
    let padraoHora = /^(\d{2})(\d{2})$/;


    let horaValida = true;
    let Hora = ''

    if (horA.length == 4) {
        let vetorHora = padraoHora.exec(horA);
        Hora = vetorHora[1];
    }

    if (Hora < 07 || Hora > 18) {
        divErro.innerHTML = "Não é possivel agendar fora do horário comercial!";
        div1agendamento.inhora.focus();
        divErro.style.display = 'block';
        return false;
    }



    let servico = div1agendamento.select.value;

    let corpoTabela = document.getElementById('corpoTabela');
    let linhaTabela = '<tr>' +
        '<td>' + nome + '</td>' +
        '<td>' + petn + '</td>' +
        '<td>' + servico + '</td>' +
        '<td>' + Data + '</td>' +
        '<td>' + horA + '</td>' +
        '</tr>';

    corpoTabela.innerHTML = corpoTabela.innerHTML + linhaTabela;
    divacerto.style.display = "block";
    return false;
}


/////////////////////PAGINA CADASTRO/////////////////////////

function aviso2() {
    let divErro = document.getElementById("mensagem-erro");
    divErro.style.display = 'none';
    let nomeCompleto = frmRegistro1.inNom.value;
    let ID = frmRegistro1.inID.value;
    let Endereco = frmRegistro1.inEndereço.value;
    let cidade = frmRegistro1.inCidade.value;
    let SiglaDoEstado = frmRegistro1.inSiglaDoEstado.value;
    let Emaill = frmRegistro1.inEmmail.value;
    let senha = frmRegistro1.inSenha.value;
    let dataa = frmRegistro1.inDat.value;
    let fone = frmRegistro1.inTelefone.value;
    let pet = frmRegistro1.inpet.value;
    let idadepet = frmRegistro1.inidade.value;





    if (nomeCompleto == '') {
        divErro.innerHTML = "o campo nome não pode ser vazio!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nomeCompleto.length < 3) {
        divErro.innerHTML = "o campo nome não pode ter menos que 3 caracteres!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nomeCompleto.length > 100) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (ID == '') {
        divErro.innerHTML = "o campo ID não pode ser vazio!";
        frmRegistro1.inID.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (ID.length < -0) {
        divErro.innerHTML = "o campo ID não pode ter número negativo!";
        frmRegistro1.inID.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (dataa.trim() == '') {
        divErro.innerHTML = "o campo data não pode ser vazio!";
        frmRegistro1.inDat.focus();
        divErro.style.display = 'block';
        return false;
    }



    if (Endereco == '') {
        divErro.innerHTML = "o campo Endereço nao pode ser vazio!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Endereco.length < 3) {
        divErro.innerHTML = "o campo Endereço nao pode ser menor que 3 caracteres!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Endereco.length > 100) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade == '') {
        divErro.innerHTML = "o campo cidade nao pode ser vazio!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade.length < 3) {
        divErro.innerHTML = "o campo cidade nao pode ser vazio!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade.length > 50) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (SiglaDoEstado == '') {
        divErro.innerHTML = "o campo UF nao pode ser vazio!";
        frmRegistro1.inSiglaDoEstado.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (SiglaDoEstado.length < 2) {
        divErro.innerHTML = "o campo UF nao pode ter menos que 2 caracteres!";
        frmRegistro1.inSiglaDoEstado.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill == '') {
        divErro.innerHTML = "o campo email nao pode ser vazio!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill.length < 3) {
        divErro.innerHTML = "o campo email nao pode mais que 100 caracteres!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill.length > 100) {
        divErro.innerHTML = "o campo email nao pode ter menos que 3 caracteres!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (fone == '') {
        divErro.innerHTML = "o campo nome não pode ser vazio!";
        frmRegistro1.inTelefone.focus();
        divErro.style.display = 'block';
        return false;
    }
    //////////////

    /*/////////////////////EMAIL//////////////////////////////*/

    if (Emaill.trim() == '') {
        divErro.innerHTML = "O campo não pode ser vazio!";
        divErro.style.display = 'block';
        frmRegistro1.inEmmail.focus();
        return false;
    }

    //aceitar somente e-mails com domínio "gmail.com", "sesisp.org.br","hotmail.com" ou qualquer dominio ".br".
    let padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/
    let emailValido = padraoEmail.test(Emaill);

    if (emailValido == false) {
        if (emailValido) {
            divErro.innerHTML = "O campo deve conter menos de 100 caracteres!";
            divErro.style.display = 'block';
            frmRegistro1.inEmmail.focus();
            return false;
        } else {
            divErro.innerHTML = "O campo deve conter @ ou .com!";
            divErro.style.display = 'block';
            frmRegistro1.inEmmail.focus();
            return false;
        }
    }

    ///////////////
    if (fone == '') {
        divErro.innerHTML = "o campo telefone nao pode ser vazio!";
        frmRegistro1.inTelefone.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (senha == '') {
        divErro.innerHTML = "o campo senha nao pode ser vazio!";
        frmRegistro1.inSenha.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (senha.length < 8) {
        divErro.innerHTML = "o campo senha nao pode ter menos que 8 caracteres!";
        frmRegistro1.inSenha.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (senha.length > 30) {
        divErro.innerHTML = "o campo senha nao pode ter mais de 30 caracteres!";
        frmRegistro1.inSenha.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (pet == '') {
        divErro.innerHTML = "o campo Nome do Pet nao pode ser vazio!";
        frmRegistro1.inpet.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (pet.length < 3) {
        divErro.innerHTML = "o campo Nome do Pet nao pode ser vazio!";
        frmRegistro1.inpet.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (pet.length > 100) {
        divErro.innerHTML = "o campo Nome do Pet nao pode ser vazio!";
        frmRegistro1.inpet.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (idadepet == '') {
        divErro.innerHTML = "o campo Idade do Pet nao pode ser vazio!";
        frmRegistro1.inidade.focus();
        divErro.style.display = 'block';
        return false;
    }
}

function mostraroutros() {
    let select = document.getElementById("select");
    let outros = document.getElementById("outros");

    if (select.value == "Outros")

        outros.style.display = "block";
    else
        outros.style.display = "none";
}

function mostraridade() {
    let paragrafo1 = document.getElementById("paragrafo");

    paragrafo1.textContent = 'seu pet tem:'
}


/////////////////////////////login validação do email e senha///////////////////////////////////

function validarLogin() {

    let divErro = document.getElementById("mensagem-erro");
    divErro.style.display = 'none';

    const userPadrao = 'admin@teste.com.br';
    const senhaPadrao = '!@#ABC123def';

    let userOk = false;
    let senhaOk = false;

    let usuario = frmsobre.email.value;
    let senha = frmsobre.senha.value;

    if (usuario == userPadrao) {
        userOk = true;
    } else {
        divErro.innerHTML = "Usuário não cadastrado!";
        divErro.style.display = 'block';
        return false;
    }

    if (senha == senhaPadrao) {
        senhaOk = true;
    } else {
        divErro.innerHTML = "Senha Incorreta";
        divErro.style.display = 'block';
        return false;
    }

    if (userOk && senhaOk) {
        location.href = 'sobre.html'
    }

}








///////////////////////agendamento//////////////////////
function aviso2() {
    let divErro = document.getElementById("mensagem-erro");
    divErro.style.display = 'none';
    let nomeCompleto = frmRegistro1.inNom.value;
    let ID = frmRegistro1.inID.value;
    let Endereco = frmRegistro1.inEndereço.value;
    let cidade = frmRegistro1.inCidade.value;
    let SiglaDoEstado = frmRegistro1.inSiglaDoEstado.value;
    let Emaill = frmRegistro1.inEmmail.value;
    let senha = frmRegistro1.inSenha.value;
    let dataa = frmRegistro1.inDat.value;
    let fone = frmRegistro1.inTelefone.value;
    let pet = frmRegistro1.inpet.value;
    let idadepet = frmRegistro1.inidade.value;



    let anoo = new Date(dataa).getFullYear();

    if (anoo > 2005 || anoo < 1923 ) {
        divErro.innerHTML = "idade nao permitida";
        frmRegistro1.inDat.focus();
        divErro.style.display = 'block';
        return false;
    }



    if (nomeCompleto == '') {
        divErro.innerHTML = "o campo nome não pode ser vazio!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nomeCompleto.length < 3) {
        divErro.innerHTML = "o campo nome não pode ter menos que 3 caracteres!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nomeCompleto.length > 100) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inNom.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (ID == '') {
        divErro.innerHTML = "o campo ID não pode ser vazio!";
        frmRegistro1.inID.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (ID.length < -0) {
        divErro.innerHTML = "o campo ID não pode ter número negativo!";
        frmRegistro1.inID.focus();
        divErro.style.display = 'block';
        return false;
    }


    if (dataa.trim() == '') {
        divErro.innerHTML = "o campo data não pode ser vazio!";
        frmRegistro1.inDat.focus();
        divErro.style.display = 'block';
        return false;
    }



    if (Endereco == '') {
        divErro.innerHTML = "o campo Endereço nao pode ser vazio!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Endereco.length < 3) {
        divErro.innerHTML = "o campo Endereço nao pode ser menor que 3 caracteres!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Endereco.length > 100) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inEndereço.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade == '') {
        divErro.innerHTML = "o campo cidade nao pode ser vazio!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade.length < 3) {
        divErro.innerHTML = "o campo cidade nao pode ser vazio!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (cidade.length > 50) {
        divErro.innerHTML = "o campo nome não pode mais que 100 caracteres!";
        frmRegistro1.inCidade.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (SiglaDoEstado == '') {
        divErro.innerHTML = "o campo UF nao pode ser vazio!";
        frmRegistro1.inSiglaDoEstado.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (SiglaDoEstado.length < 2) {
        divErro.innerHTML = "o campo UF nao pode ter menos que 2 caracteres!";
        frmRegistro1.inSiglaDoEstado.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill == '') {
        divErro.innerHTML = "o campo email nao pode ser vazio!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill.length < 3) {
        divErro.innerHTML = "o campo email nao pode mais que 100 caracteres!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Emaill.length > 100) {
        divErro.innerHTML = "o campo email nao pode ter menos que 3 caracteres!";
        frmRegistro1.inEmmail.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (fone == '') {
        divErro.innerHTML = "o campo nome não pode ser vazio!";
        frmRegistro1.inTelefone.focus();
        divErro.style.display = 'block';
        return false;
    }

}













///botão
document.addEventListener("DOMContentLoaded",
    function (event) {
        carregarDados();
    })