$(document).ready(function () {
    $("#cpf").mask("000.000.000-00");
    $("#telefone").mask("(00)00000-0000");
    $("#cep").mask("00000-000");

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            cpf: {
                required: true,
            },
            telefone: {
                required: true,
            },
            endereco: {
                required: true,
            },
            numero: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: "Por favos insira nome completo",
            email: "Por favor insira e-mail correto",
            cpf: "Por favor insira cpf correto",
            telefone: "Por favor insira o telefone correto",
            endereco: "Por favor insira endereco correto",
            cep: "Por favor insira o CEP correto",
        },
        errorPlacement: function (error, elemento) {
            error.addClass("mensagem-erro");
            error.insertAfter(elemento);
        },
        submitHandler: function (form) {
            $("form").find("input").val("");
            console.log(form);
        },
        invalidHandler: function (_, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
    });
});
