# WebToEpub
(c) 2015 David Teviotdale   

Extension for Firefox and Chrome that converts Web Novels (and other web pages) into an EPUB.
Works with many sites, including the following:
* Baka-Tsuki.org
* ArchiveOfOurOwn.org
* blogspot (some)
* mugglenet.com
* FanFiction.net
* gravitytales.com
* hellping.org
* krytykal.org
* moonbunnycafe.com
* nanodesu (some of the *thetranslation.wordpress.com sites)
* readlightnovel.com
* royalroad.com 
* shikkakutranslations.org
* sonako.wikia.com
* wuxiaworld.com
* rebirth.online
* and many other sites

Credits
* Firefox port by Markus Vieth
* Michael Fox (Belldandu)
* typhoon71
* toshiya44
* dreamer2908
* Parser for German Project Gutenberg by GallusMax
* Hogesyx
* Asif Mahmood
* snnsnn
* Sergii Pravdzivyi
* Aurimas Niekis
* Tom Goetz
* Alen Toma (css styling)
* JimmXinu
* gamebeaker (additional metadata, alphapolis, novicetranslations parser)
* Kondeeza
* Mathnerd314
* Sickan90
* Miracutor
* Kiradien
* lamaesus
* Dimava

## How to use with Baka-Tsuki:
* Browse to a Baka-Tsuki web page that has the full text of a story.
* Click on the WebToEpub icon on top right of the window.
* Check story details are correct.
* Select image to use for cover.
* Click the "Pack EPUB" button.
* Wait for progress bar to finish (indicating the images being downloaded) and the generated EPUB to be placed in your downloads directory.

## How to use with Archive of Our Own:
* Browse to first chapter of story you want.
* Click on the WebToEpub icon on top right of the window.
* Check story details are correct.
* Click the "Pack EPUB" button.
* Wait for progress bar to finish (indicating the additional chapters are being downloaded) and the generated EPUB to be placed in your downloads directory.

## How to use for site that there is no specific parser for:
See: https://dteviot.github.io/Projects/webToEpub_DefaultParser.html

## How to create Parsers for new sites
For details on how to extend, see the following
* https://dteviot.github.io/Projects/webToEpub_FAQ.html#write-parser
* https://dteviot.github.io/Projects/webToEpub_FAQ.html
* http://www.codeproject.com/Articles/1060680/Web-to-EPUB-Extension-for-Chrome.

## How to install 
### from Chrome Web Store
* Start Chrome
* Go to https://chrome.google.com/webstore/detail/webtoepub/akiljllkbielkidmammnifcnibaigelm
* Click on the "Add to Chrome" button.

### with Firefox
* Start Firefox
* Go to https://addons.mozilla.org/en-US/firefox/addon/webtoepub-for-baka-tsuki
* Click on "Download anyway"

### on Android
* Get yourself `Kiwi browser`, `Yandex browser`, or `Firefox nightly` (*not* default firefox branch, it does not supports extensions)
* Install from `Chrome web store` for Kiwi and Yandex, of from `Mozilla addons` for Firefox Nightly (links above).  


## Installing beta vesion
### on Chrome
![wte-chrome-small](https://user-images.githubusercontent.com/20068737/136224439-57af48bd-21fb-463d-99db-74f44769327e.gif)
### on Firefox
Get the latest zip (see video above), and choose it at `about:debugging#/runtime/this-firefox` in `load temporal extension` menu


## How to install from Source

Note, I usually put copies of the current Development versions, including the jszip library, in https://drive.google.com/drive/folders/1B_X2WcsaI_eg9yA-5bHJb8VeTZGKExl8?usp=sharing
So, get the relevant zip, then 
* The easiest way is using Firefox.
  1. Download the Firefox version from https://drive.google.com/drive/folders/1B_X2WcsaI_eg9yA-5bHJb8VeTZGKExl8?usp=sharing.
  2. Open Firefox and type "about:debugging#/runtime/this-firefox" into the URL bar.
  3. Click "Load Temporary Add-on".
  4. Click on the zip file you downloaded in step 1.
* For Chrome, just do step 2 then steps 6 to 9 of the Chrome instructions.

### Chrome
1. Download the extension. 
    1. For most recent release, go to https://github.com/dteviot/WebToEpub and click on the "Download Zip" button.
    2. For current development branch, go to https://github.com/dteviot/WebToEpub/tree/ExperimentalTabMode and click on the "Download Zip" button.
2. Unpack zip file
    1. If you downloaded the zip file from Github, move the "plugin" directory to the location you want to keep it.
    2. If you downloaded the zip file from Google Drive, move the unpacked contents to wherever you want to keep them.  This the the "plugin" directory referred to in step 8 below.
3. Open Chrome and type "chrome://extensions" into the browser.
4. Make sure "Developer Mode" at the top of the page is checked.
5. Press the "Load unpacked extension.." button and browse to the "plugin" directory from step 2.
6. On Chrome you may see a warning message "Unrecognized manifest key 'applications'."  This can be safely ignored.  (The source version supports both Firefox and Chrome. The 'applications' key is needed by Firefox, but Chrome does not recognise it.)

### Firefox
1. ~~Make sure you can install unsigned addons (only possible in Nightly and Developer Edition).~~
2. Download the extension.
    1. For most recent release, go to https://github.com/dteviot/WebToEpub and click on the "Download Zip" button.
    2. For current development branch, go to https://github.com/dteviot/WebToEpub/tree/ExperimentalTabMode and click on the "Download Zip" button.
3. Unpack zip file.
    1. If you downloaded the zip file from Github, move the "plugin" directory to the location you want to keep it.
    2. If you downloaded the zip file from Google Drive, move the unpacked contents to wherever you want to keep them.  This the the "plugin" directory referred to in step 10 below.
4. Open the file manifest.json in the plugin directory with a text editor and delete the line that goes: <br>"incognito": "split",<br>
5. In the "plugin" directory from the previous step there is a "jszip" directory.  Create a "dist" directory inside this "jszip" directory.
6. Download jszip library v3.0.0 from https://github.com/Stuk/jszip
7. Extract jszip.min.js from the jszip library and copy to the "dist" directory you created in step 4.
8. Open Firefox and type "about:debugging#/runtime/this-firefox" into the URL bar.
9. Click "Load Temporary Add-on".
10. Select "manifest.json" from the directory in step 3. Or, if you don't intend to change the code, just select the zip file you downloaded.

## License information
Licenced under GPLv3.

WebToEpub uses the following libraries:
* JSZip library v3.0.0: https://github.com/Stuk/jszip, which is dual licensed with the MIT license or GPLv3.
* quint: http://qunitjs.com/, licensed under MIT license.

## Other notes
### To run eslint (and build the plugin)
* Install [Node.js](https://nodejs.org/) (if not already installed)
* Run `npm install` to install dependencies
* Run `npm run lint` to build plugin and lint
* This will produce 3 files in the eslint directory.
    * WebToEpub0.0.0.x.xpi   (Firefox version of plug-in.)
    * WebToEpub0.0.0.x.zip   (Chrome version of plug-in.)
    * packed.js
* Lint tests are OK if output ends with `Wrote Zip to disk; Done in XXXs.`

### To run unit tests
* Install [Node.js](https://nodejs.org/) (if not already installed)
* Run `npm install` to install dependencies
* Run `npm test`
* Tests will be launched in your default browser. To open them in different browser, open the page URL in it.

> ### To run unit tests without Node.js
> * If you are not trying to run unit tests in `/unitTest/` folder, you do not need this
> * If you can use nodejs, see previous paragraph instead
> * If you can not install nodejs or http-server is not working when you run `npm test`, and you have no alternative ways to serve files (like [chrome Web Server app](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb) for example), you have to allow browser to run local html files to run tests.
> #### To run unit tests (without local server) under Chrome
> * Close all running copies of Chrome 
> * Start Chrome with command line argument `--allow-file-access-from-files`.  That is:
>     * Open a command propmt
>     * Browse to the directory holding Chrome
>     * Type in command `chrome.exe --allow-file-access-from-files` . Press "Enter".
>     * If you don't do this, some tests will fail with error messages containing the text **_Failed to execute 'send' on 'XMLHttpRequest': Failed to load_**.
> * Load `unitTest/Tests.html`
> * If you get **_Failed to read the 'localStorage' property from 'Window': Access is denied for this document_** errors
>     * Type **_chrome://settings/content_** into Chrome's search bar 
>     * Uncheck **_Block third-party cookies and site data_**
>     * Click **_Finished_**
>     * Re-run unit tests
> * When finished with unit tests. 
>     * Restore original value of **_Block third-party cookies and site data_** (if you changed it).
>     * close all running copies of Chrome
> 
> #### To run unit tests (without local server) under Firefox
> * Start Firefox 
> * Go to `about:config`
> * Find `security.fileuri.strict_origin_policy` parameter
> * Set it to false
> * Load `unitTest/Tests.html`
> * (Remember to reset `security.fileuri.strict_origin_policy` to true when done.