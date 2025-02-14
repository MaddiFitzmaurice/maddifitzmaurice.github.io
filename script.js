
if (window.location.href.includes(".html")) {
    // window.location.href = window.location.href.replace("index.html", "");
    window.location.href = window.location.href.replace(".html", "");
}



function anchor(elementName) {
    document.getElementById(elementName).scrollIntoView();
}