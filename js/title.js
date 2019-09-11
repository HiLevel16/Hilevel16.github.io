async function LoadTitle() {
    var title = 'Демин пидор';
    while (true) {
        document.title = "";
        for (var i = 0; i < title.length; i++) {
            document.title = document.title + title[i];
            await sleep(randomInteger(50, 250));
            document.title = document.title + "*";
            await sleep(randomInteger(50, 250));
            document.title = document.title.slice(0, -1);
            document.title = document.title + "/";
            await sleep(randomInteger(50, 250));
            document.title = document.title.slice(0, -1);
            document.title = document.title + "-";
            await sleep(randomInteger(200, 500));
            document.title = document.title.slice(0, -1);
        }
        document.title = title;
        await sleep(500);
        document.title = "";
        for (var i = 0; i < title.length; i++) {
            document.title = document.title + title[i];
            document.title = document.title.slice(-1);
            await sleep(300);
        }
    }

}
window.onload = function() {
    LoadTitle();
}







function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}