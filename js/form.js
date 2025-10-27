
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato
    }

}

let botao = document.querySelector('#submit');

function Post(event, form) {
    event.preventDefault()

    let caixa1 = document.querySelector('#caixa');

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value);


    if (data.nome != "" && caixa1.checked) {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
        console.log(data)
        form.reset()
    }

    else if (!caixa1.checked) {
        alert('Para prosseguir concorde com os Termos e Condições ')
    }

}

