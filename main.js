const form = document.getElementById ('form-drink');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const idadeLegal = document.getElementById ('legal-age');
    const suaIdade = document.getElementById ('my-age');
    
    function calculaIdade (suaIdade, idadeLegal) {
        let permission = (parseInt(suaIdade) >= parseInt(idadeLegal));
        return permission;
    }
    
    let formEValido = calculaIdade (suaIdade.value, idadeLegal.value);
    if (formEValido) {
        alert ('Você é maior de idade e pode beber!');
    } else {
        alert ('Você é menor de idade e não pode beber!');
    }
})