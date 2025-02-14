
if (window.location.href.includes(".html")) {
    const index = window.location.href.indexOf(".html");
  
    // Wait 5ms so any same page anchors can load
    setTimeout(()=>{
        window.location.href = window.location.href.slice(0, index);
    }, 5);
}



function anchor(elementName) {
    document.getElementById(elementName).scrollIntoView();
}