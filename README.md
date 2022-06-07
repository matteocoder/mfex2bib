# Mfex2bib
Many small pages from the MATLAB File Exchange do not provide
a straightforward way to convert plain text citations into BibTeX-formatted ones.
This bookmarklet aims to solve this problem with just two clicks.

## Installation
Visit [my homepage](https://matteocoder.github.io/),
then click and drag the text "mfex2bib.js"
from the page to your bookmarks bar, and finally name the bookmarklet.

## Use
Visit the page of your choice from the MATLAB File Exchange—[Such as this one](https://www.mathworks.com/matlabcentral/fileexchange/112850-trussgrabber2d)—then click the bookmarklet; if the conversion was successful,
you should see the BibTeX-formatted citation inside a browser alert.
Finally, click the "OK" button to close the alert,
then you can paste the citation in your `.bib` file.

## Known limitations
- If the author's name needs to be split in a particular way,
you must manually surround the parts of the name that should not be split
with an additional pair of curly braces;
- This bookmarklet works on simple pages that don't already provide a BibTeX-formatted citation, thus it may fail on more complicated ones.
