document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("#top-nav ul li a");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        var targetElement = document.querySelector(event.target.getAttribute("href"));
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1000;

        var start = null;
        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            var percentage = Math.min(progress / duration, 1);

            window.scrollTo(0, startPosition + distance * percentage);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    }
});
