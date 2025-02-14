
// if (window.location.href.includes(".html")) {

//     var index;

//     if (window.location.href.includes("index")) {
//         index = window.location.href.indexOf("index");
//     }
//     else {
//         index = window.location.href.indexOf(".html");
//     }
  
//     // Wait 5ms so any same page anchors can load
//     setTimeout(()=>{
//         window.location.href = window.location.href.slice(0, index);
//     }, 5);
// }

function anchor(elementName) {
    document.getElementById(elementName).scrollIntoView();
}