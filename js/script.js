var users = [' Bianchi', ' Neri', ' Rossi', ' Verdi', ' Gialli'];
var text;
var myArray = []
var position = [];

while (!users.includes('FATTO!')) {
    var surname = prompt("Inserisci i cognomi, uno alla volta! Quando hai finito scrivi 'FATTO!'");
    if (surname === 'FATTO!') {
        break;
    } else {
        users.push(' ' + surname);
        myArray.push(' ' + surname);
    }
}

users.sort();

for (i = 0; i < myArray.length; i++) {
    position.push(' ' + users.indexOf(myArray[i]));
}

position.sort(function(a, b){return a-b});

text = users + '<br/><br/>' + 'I cognomi che hai inserito sono in posizione:' + position;

document.getElementById('output').innerHTML = text;