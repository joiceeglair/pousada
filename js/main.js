$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000');
            
    $('form').validate({ 
        rules: { 
            telefone: {
                required: true
            },
        },
        messages: {
            telefone: 'Por favor, insira o seu telefone para contato'
        },
        
        submitHandler: function(form) {
            console.log(form)
        }
    })
})