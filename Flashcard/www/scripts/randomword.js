function GetRandomWord() {

    var request = new XMLHttpRequest();

    request.open('GET', 'https://random-word-api.herokuapp.com/word', true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var word = data[0];
            var deck = createDeckOne(word);
            setDeckStartDisplay(deck);

        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
        }
    }

    request.send();
}