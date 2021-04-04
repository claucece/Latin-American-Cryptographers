// code from: https://www.sitepoint.com/jquery-document-ready-plain-javascript/
// this snipet makes sure that all elemnts of the site are loaded before running
// any js code
function docReady(fn) {
    // see if DOM is already available
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
