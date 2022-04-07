document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = 'kyllä';
    if(kirjautunut === 'kyllä'){
        document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    }
    else {
        document.getElementById('tervetuloa_teksti');
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}