replaceContentInContainer('tweet-actions', '<li class="action-pin-container"><a role="button" class="with-icn pin js-tooltip" href="#"><span class="icon sm-fav"></span><b>Pin</b></a></li>');

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
