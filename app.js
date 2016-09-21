$(function(jquery){
    $('#search').keydown(function(e){
        if(e.which==13){ 
            getRequest();
        }
    });
});

function getRequest(){
    var search = $('#search').val();
    var params = {
        part: 'snippet',
        q: search,
        key: 'AIzaSyDSI6Mbt1gDjCFmrPuMrZIabk-dveO6qVg'
    };
    url = 'https://www.googleapis.com/youtube/v3/search';
    $('.theResults').empty();
    $.getJSON(url, params, function(data){
        console.log(data);
        var items = data.items;
        $.each(items, function(index, items){
            vidTitle = '<div class="col-md-6 search-result title">' + items.snippet.title + '</div>';
            vidThumburl = items.snippet.thumbnails.default.url;
            vidThumbimg = '<div class="col-md-4 search-result thumb"><img class="thumb" src="'+vidThumburl+'"></div>'
            $('.theResults').append(vidThumbimg);            
            $('.theResults').append(vidTitle);
            $('.results').css('height', 'inherit');
        });
    });
}