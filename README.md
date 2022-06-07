# Mfex2bib
Many small pages from the MATLAB File Exchange do not provide
a straightforward way to convert plain text citations into BibTeX-formatted ones.
This bookmarklet aims to solve this problem with just two clicks.

## Installation
Obtain the bookmarklet by selecting and copying the following line:
<pre>
javascript:(function(){ let author = document.querySelectorAll('a[class=\"author_inline analyticsMlcProfileModal results_author\"]')[0].innerText; let citationTitle = document.querySelectorAll('span[id=\"defaultCitationTitle\"]')[0].innerText; let citationURI = document.baseURI; let dateList = document.querySelectorAll('p[id=\"defaultCitation\"]')[0].children[1].dateTime.replace(/ /g, '-').split('-'); let year = dateList[0]; let month = dateList[1]; let day = dateList[2]; let bibEntry = `@misc{${author.replace(/ /g, '')}${year},\n author = {${author}},\n title = {${citationTitle}},\n year = {${year}},\n url = {${citationURI}},\n howpublished = {MATLAB Central File Exchange},\n urldate = {${year}-${month}-${day}}\n}`; alert(bibEntry); navigator.clipboard.writeText(bibEntry); })();
</pre>
then right-click on your bookmarks bar and select "Add page";
in the "URL" field, paste the line that you have copied earlier,
fill the "Title field as you wish, and finally click "Save".

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
