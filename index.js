let link = document.createElement("a");
let linkText = document.createTextNode("Test");
link.appendChild(linkText);
link.title = "Test";
link.href = "https://stackoverflow.com/questions/76754205/chrome-extension-content-script-not-working-on-google-com?noredirect=1#comment135316749_76754205";

document.querySelector("body > div.L3eUgb > div.o3j99.n1xJcf.Ne6nSd").prepend(link);