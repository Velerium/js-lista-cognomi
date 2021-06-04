var users = [' Bianchi', ' Neri', ' Rossi', ' Verdi', ' Gialli'];
var text;
var myArray = []
var position = [];

for (;;) {
    var surname = prompt("Inserisci i cognomi, uno alla volta! Quando hai finito scrivi 'FATTO!'");
    if (surname === 'FATTO!') {
        break;
    } else {
        surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        console.log(surname);
        users.push(' ' + surname);
        myArray.push(' ' + surname);
    }
}

if (myArray.length === 0) {
    alert('Non hai inserito neanche un cognome!')
    location.reload();
}

users.sort();

for (i = 0; i < myArray.length; i++) {
    position.push(' ' + users.indexOf(myArray[i]));
    position[i]++;
}

position.sort(function(a, b){return a-b}); //The standard sort() function doesn't work with numbers.

text = users + '<br/><br/>' + 'I cognomi che hai inserito sono in posizione: ' + position;

document.getElementById('output').innerHTML = text;