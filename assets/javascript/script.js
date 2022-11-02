var header = document.getElementById("header-prompt");
var button = document.getElementById("kanye-btn");
var image = document.getElementById("kanye-img");
var quote = document.getElementById("kanye-quote");
var kanyeUrl = ('https://api.kanye.rest')

function getQuote() {
    fetch(kanyeUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        quote.innerHTML = '"' + data.quote + '" <br>--Kanye West'
        image.setAttribute("src", ("./assets/images/kanyeimage1.webp"))
    })
    
}

button.addEventListener("click", getQuote);