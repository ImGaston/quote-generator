
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const number = getRandomArbitrary(1, 920);
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
        const tuit = 'https://twitter.com/intent/tweet?text=' + Shared;
        document.getElementById("Shared").setAttribute("href", tuit);
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

getData();