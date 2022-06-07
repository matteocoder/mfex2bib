javascript:(function(){
    let author = document.querySelectorAll('a[class="author_inline analyticsMlcProfileModal results_author"]')[0].innerText;
    let citationTitle = document.querySelectorAll('span[id="defaultCitationTitle"]')[0].innerText;
    let citationURI = document.baseURI;
    let dateList = document.querySelectorAll('p[id="defaultCitation"]')[0].children[1].dateTime.replace(/ /g, '-').split('-');
    let year = dateList[0];
    let month = dateList[1];
    let day = dateList[2];
    let bibEntry = `@misc{${author.replace(/ /g, '')}${year},\n author = {${author}},\n title = {${citationTitle}},\n year = {${year}},\n url = {${citationURI}},\n howpublished = {MATLAB Central File Exchange},\n urldate = {${year}-${month}-${day}}\n}`;
    alert(bibEntry);
    navigator.clipboard.writeText(bibEntry);
})();
