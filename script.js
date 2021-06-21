// youtube api
// https://www.googleapis.com/youtube/v3/search

// API key
// AIzaSyCe0f81UEiOiGcNDvCfCCcG6BydRyQXJBg


// link breakdown
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCe0f81UEiOiGcNDvCfCCcG6BydRyQXJBg&type=video&q=ajax
// ?part=snippet
// &key=AIzaSyCe0f81UEiOiGcNDvCfCCcG6BydRyQXJBg
// &type=video
// &q=ajax
// searchVideo(API_key, userinput, 6)

$(document).ready(function() {

    const API_key = 'AIzaSyCe0f81UEiOiGcNDvCfCCcG6BydRyQXJBg'
    let title = document.getElementById("userinput").value;
    var video = ''

    $("#btn").click(function(event) {
        event.preventDefault()
        let title = document.getElementById("userinput").value;

        searchVideo(API_key, title, 10)

    })

})


function searchVideo(key, title, maxres) {
    const API_key = 'AIzaSyCe0f81UEiOiGcNDvCfCCcG6BydRyQXJBg'

    $.get("https://www.googleapis.com/youtube/v3/search" + "?part=snippet" + "&key=" + key + "&type=video" + "&q=" + title + "&maxResults=" + maxres, function(data) {
        console.log(data);

        data.items.forEach(item => {
            video = `
            <iframe width = "420" height = "315" src = "http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>

            `
            $("#result").append(video)

        });
    })
}