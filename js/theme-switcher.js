// First init
if (document.cookie == '') {
    document.cookie = "theme=default";
}

var themeCookie = document.cookie;

if (themeCookie.match('theme=dark')) {
    $('head').append($('<link rel="stylesheet" href="/css/semantic.superhero.css">'), $('<link rel="stylesheet" href="/css/app-dark.css">'),);
}

console.info(themeCookie);
