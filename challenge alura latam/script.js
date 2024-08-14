function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}


function encriptarTexto(texto) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);
        switch (char) {
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += char;
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    return texto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}


function copiarTexto() {
    const mensajeEncriptado = document.getElementById('msg');
    mensajeEncriptado.select();
    document.execCommand('copy');
    alert('Mensaje copiado al portapapeles');
}

document.getElementById('btn-encriptar').addEventListener('click', function() {
    const inputTexto = document.getElementById('input-texto').value;
    if (validarTexto(inputTexto)) {
        const mensajeEncriptado = encriptarTexto(inputTexto);
        document.getElementById('msg').value = mensajeEncriptado;
    } else {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
    }
});

document.getElementById('btn-desencriptar').addEventListener('click', function() {
    const inputTexto = document.getElementById('input-texto').value;
    if (validarTexto(inputTexto)) {
        const mensajeDesencriptado = desencriptarTexto(inputTexto);
        document.getElementById('msg').value = mensajeDesencriptado;
    } else {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
    }
});


document.getElementById('btn-copy').addEventListener('click', copiarTexto);
