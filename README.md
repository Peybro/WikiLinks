# WikiLinks - a Web Browser Extension

Adds an anchor link to every headline of a Wikipedia article for handy sharing without finding out the correct ID of the heading first.

<hr>
Get it on Mozilla Add-Ons: <a href="https://addons.mozilla.org/de/firefox/addon/wikilinks/">https://addons.mozilla.org/de/firefox/addon/wikilinks/</a>

## Example & Usage

If you're reading this on GitHub right now hover with your mouse over 'Example & Usage' and see the small icon left to it appear.
Clicking it will modify your current URL such that you can directly share the article you're refering to.

## Install

-   Get it <a href="https://addons.mozilla.org/de/firefox/addon/wikilinks/">here</a> for <b>Firefox</b>.
-   For <b>Chrome</b> follow instructions at <a href="#Chrome_or_Chromium_Based_Browser">Deploy for Chromium</a>.

## Deploy Yourself

You can change the shown symbol by replacing the SVG in the source code. Just visit <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> and choose one... Or just stick with the good old plain # .

### Firefox

Goto <a href="about:debugging#/runtime/this-firefox">about:debugging#/runtime/this-firefox</a>, click on "Load temporary Addon" and select 'index.js'.

### Chrome or Chromium Based Browser

Goto <a href="chrome://extensions/">chrome://extensions/</a>, toggle on "Developer Mode", click "Load unpackaged extension" (or similar) and select 'WikiLinks' folder.

## Todo

-   [✅] ~~Deploy as a real Firefox Addon (right now it's just usable via `about:debugging#/runtime/this-firefox`)~~
-   [✅] ~~Replace EventListeners with CSS :hover for better performance~~
-   [✅] ~~Remove the small white space between the headline and the icon~~
-   [💨] ~~Integrate JSX for better source code~~
-   [✅] ~~Develop for Chromium Brwosers, too~~ just recognized it already does...
-   [🔜] Add support for other Wikis, e.g. Fanpedia

## A few more words

1. Big thank you to Bootstrap for their free icon set - looking at you, FontAwesome....
2. I hope Wikipedia will add this one day since it can be pretty handy from time to time. (Are they still woking on VUE.js implementation or is it done yet??)
3. I really don't know why I'm working so much on this little project which will probably hardly used by anyone.
4. Actually I do know: I'm just procrastinating.... Have fun ;)

## Licence

Released under GNU General Public License v3.0
</br>
Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
