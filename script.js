
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const number = getRandomArbitrary(0, 922);
console.log(number);

const getData = async () => {
    try {
        const quote = document.querySelector('.quote');
        const title = document.querySelector('.title');
        const Leer = document.querySelector('#Leer');
        const API = `https://api.sheetson.com/v2/sheets/All/${number}`;
        const response = await fetch(API,  {
headers: {
    "Authorization": "Bearer ew60-FQd7oID3GzRAqJoEvF9WdpPakVCReAGrKMOK8pASEDPgTW9FD3nI0W0pw",
    "X-Spreadsheet-Id": "1Qzyv7bdXPLyhwk2SWxYUfsO-7ydp5eHeyuitsmfysnY"
}
});
        const data = await response.json();
        quote.innerText = `"${data.Quote}"`;
        title.innerText = `${data.Article}`;
        Leer.setAttribute("href", data.Source);
        const Shared = encodeURIComponent(data.Twitter.trim());
        const urlQuote = encodeURIComponent(data.Quote.trim());
        const urlArticle = encodeURIComponent(data.Article.trim());
        const tuit = 'https://twitter.com/intent/tweet?text="' + urlQuote + '"%0AExtraído%20de%20"' + urlArticle + '"%20por%20@leopiccioli%20https://bit.ly/3jYFTkY';
        document.getElementById("Shared").setAttribute("href", tuit);
    } catch (error) {
        console.log('Fetch Error', error);
    };
};
//https://twitter.com/intent/tweet?text=
//quote = %22No%20compitas%20si%20sab%C3%A9s%20que%20vas%20a%20perder%20y%20no%20vas%20a%20aprender%22%20%20%0D
//Extraído%20de%20
//%20%22%C2%BF
//article = Hablo%20Yo%20o%20Pasa%20un%20Tren?%20S02E07%22%20
//por%20@leopiccioli%20http://j.mp/leocita
getData();