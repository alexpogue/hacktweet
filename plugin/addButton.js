replaceContentInContainer('more-tweet-actions', '<a role="button" class="with-icn favorite js-tooltip" href="#"><span class="icon sm-fav"></span><b>Pin</b></a>');

function replaceContentInContainer(matchClass,content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML += content;
            /*elems[i].insertAdjacentHTML('beforeBegin', content);*/
        }
    }
}
