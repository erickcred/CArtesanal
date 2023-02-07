$(document).ready(function() {
    $("#form-contato").validate({
        rules: {
            nome: {
                required: true,
                minlength: 10,
                maxlength: 100
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Nome é obrigatório!",
                minlength: "Por favor, insira o nome completo!",
                maxlength: "Somente são permitidos <strong> 100 caracteres</strong>!"
            },
            email: {
                required: "E-mail é obrigatório!",
                email: "Esse não parece ser um e-mail valido!"
            },
            telefone: {
                required: "Telefone é obrigatório!"
            },
            mensagem: {
                required: "Mensagem é obrigatória!",
                minlength: "Mensagem muito curta!"
            }
        }
    });

    $("input[name='telefone']").mask("(00) 0 0000-0000", {
        placeholder: "(41) 9 9999-1212"
    });
});