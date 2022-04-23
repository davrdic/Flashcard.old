function GetRandomWord() {

    var request = new XMLHttpRequest();

    request.open('GET', 'https://random-word-api.herokuapp.com/word', true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var word = data[0];
            getDefinition(word);
            //var deck = createDeckOne(word);
            //setDeckStartDisplay(deck);

        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
        }
    }

    request.send();
}
function getDefinition(word) {

    var request = new XMLHttpRequest();

    var url = 'https://dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=c0f7643f-8bc7-4f54-bf14-a1af27317602';

    request.open('GET', url, true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        var definition = data[0].shortdef[0];
        if (request.status >= 200 && request.status < 400) {
            var deck = createDeckOne(word, definition);
            setDeckStartDisplay(deck);

        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
        }
    }

    request.send();
}