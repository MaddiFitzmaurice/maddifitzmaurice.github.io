



// if (window.location.href.includes(".html")) {

//     var index;

//     if (window.location.href.includes("index"))
//     {
//         index = window.location.href.indexOf("index.html");
//     }
//     else {
//         index = window.location.href.indexOf(".html");
//     }

//     // if (window.location.href.includes("#"))
//     // {
//     //     var anchorName = window.location.hash;
//     //     anchorName = anchorName.replace("#", "");
//     // }

//     window.location.href = window.location.href.slice(0, index);
// }



function anchor(elementName) {
    document.getElementById(elementName).scrollIntoView();
}