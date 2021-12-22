let pr = "https://api.allorigins.win/raw?url=";
let ftvinfo = "https://www.francetvinfo.fr/titres.rss";;
let ftv_politique = "https://www.francetvinfo.fr/politique.rss";
let ftv_societe = "https://www.francetvinfo.fr/societe.rss";
let ftv_sports = "https://www.francetvinfo.fr/sports.rss";
let ftv_eco = "https://www.francetvinfo.fr/economie.rss";
let ftv_decouverte = "https://www.francetvinfo.fr/decouverte.rss";
let ftv_buzz = "https://www.francetvinfo.fr/culture.rss";
let ftv_monde = "https://www.francetvinfo.fr/monde.rss";

let parser = new RSSParser();

function show_mainInfo() {
    let loopcount = 0;

    parser.parseURL(pr + ftvinfo, function(err, feed) {
        $(".news-all").html("");
        feed.items.forEach(function(entry) {
            loopcount++;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-all").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })
}

function show_all() {
    parser.parseURL(pr + ftv_politique, function(err, feed) {
        let loopcount = 0;
        $(".news-politique").html("");
        feed.items.forEach(function(entry) {
            loopcount = loopcount + 1;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-politique").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })

    parser.parseURL(pr + ftv_societe, function(err, feed) {
        loopcount = 0;
        $(".news-societe").html("");
        feed.items.forEach(function(entry) {
            loopcount = loopcount + 1;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-societe").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })

    parser.parseURL(pr + ftv_sports, function(err, feed) {
        loopcount = 0;
        $(".news-sports").html("");
        feed.items.forEach(function(entry) {
            loopcount = loopcount + 1;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-sports").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })

    parser.parseURL(pr + ftv_eco, function(err, feed) {
        loopcount = 0;
        $(".news-eco").html("");
        feed.items.forEach(function(entry) {
            loopcount = loopcount + 1;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-eco").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })

    parser.parseURL(pr + ftv_decouverte, function(err, feed) {
        loopcount = 0;
        $(".news-decouverte").html("");
        feed.items.forEach(function(entry) {
            loopcount = loopcount + 1;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-decouverte").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })

    parser.parseURL(pr + ftv_buzz, function(err, feed) {
        loopcount = 0;
        $(".news-buzz").html("");
        feed.items.forEach(function(entry) {
            loopcount = loopcount + 1;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            if(loopcount < 5) {
                $(".news-buzz").append(`<a href="${link}"><div class="new">
            <img class="new_image" src="${image}">
            <div class="new_over">
                <h3 class="new_title">${title}</h3>
            </div>
        </div></a>`)
            }
        })
    })
}

function story_ftv() {
    $(".sftv").addClass("opened");
    $("#bottombar").addClass("stopened");
    $("#topbar").addClass("hid");
    $("#app").css("margin-top", "-65px");
    $("#app").css("height", "100vh");
    setTimeout(function(){
        window.location.replace("story_franceinfo.html");
   }, 1000);
}

function story_f24() {
    $(".sf24").addClass("opened");
    $("#bottombar").addClass("stopened");
    $("#topbar").addClass("hid");
    $("#app").css("margin-top", "-65px");
    $("#app").css("height", "100vh");
    setTimeout(function(){
        window.location.replace("story_france24.html");
   }, 1000);
}

function show_story() {
    let incr = 0;

    parser.parseURL(pr + ftvinfo, function(err, feed) {
        feed.items.forEach(function(entry) {
            incr++;
            let title = entry.title;
            let image = entry.enclosure.url;
            let link = entry.link;

            let rand1 = Math.floor(Math.random() * 41) - 20;
            let rand2 = Math.floor(Math.random() * 41) - 20;
            let rand3 = Math.floor(Math.random() * 41) - 20;

            let randCo = '#'+Math.floor(Math.random()*16777215).toString(16);

            $("#pages").append(`<div class="page" id="${incr}" onclick="next(${incr})" style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${image}');">
            <a href="${link}"><h2 style="background-color: ${randCo};transform: rotate(${rand3}deg) translate(${rand1}px,${rand2}0px);">${title}</h2></a>
        </div>`)
        })
    })
}

let cnt = 0;

function next(ch) {
    cnt++;
    $("#"+ch).fadeOut();
    setTimeout(() => {
        $("#"+ch).css("display", "none");
    }, 300);

    if(cnt == 1) {
        once();
    }
}

function once() {
    let rand1 = Math.floor(Math.random() * 41) - 20;
    let rand2 = Math.floor(Math.random() * 41) - 20;
    let rand3 = Math.floor(Math.random() * 41) - 20;

    let randCo = '#'+Math.floor(Math.random()*16777215).toString(16);

    $("#pages").append(`<div class="page" id="9999999999999" style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://source.unsplash.com/random');">
            <a href="index.html"><h2 style="background-color: ${randCo};transform: rotate(${rand3}deg) translate(${rand1}px,${rand2}0px);">Vous avez lu l'éssentiel de l'info !</h2></a>
        </div>`)
}