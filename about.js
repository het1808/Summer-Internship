window.addEventListener("scroll", progressAll);

function progressAll() {
    var triggerProgress = (window.innerHeight / 2) * 4;
    var progressTop = document.getElementById("Html1");

    var progressStart = progressTop.getBoundingClientRect().top;

    if(progressStart < triggerProgress) {
        //HTML

        var progress = document.getElementById('progressDoneHtml');
        progress.style.width = progress.getAttribute('data-done');
        progress.style.opacity = 1;

        //CSS
        var css = document.getElementById('progressDoneCss');
        css.style.width = css.getAttribute('data-done');
        css.style.opacity = 1;

        //BOOT
        var boot = document.getElementById('progressDoneBootstrap');
        boot.style.width = boot.getAttribute('data-done');
        boot.style.opacity = 1;

        //SASS
        var sass = document.getElementById('progressDoneSass');
        sass.style.width = sass.getAttribute('data-done');
        sass.style.opacity = 1;

        //JS
        var js = document.getElementById('progressDoneJavascript');
        js.style.width = js.getAttribute('data-done');
        js.style.opacity = 1;

        //REACT
        var react = document.getElementById('progressDoneReact');
        react.style.width = react.getAttribute('data-done');
        react.style.opacity = 1; 

    }
}








