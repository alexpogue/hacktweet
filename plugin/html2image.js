$( document ).ready(function() {
    html2canvas($('#stream-item-tweet-424381358501134337'), {
        onrendered: function(canvas) {
            var cvs = canvas.toDataURL('image/png');
            // $('body').empty();
            $('body').prepend('<img src="'+cvs+'"/>');
        }
    });
});