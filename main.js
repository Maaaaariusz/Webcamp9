if ($(window).width() < 979) {
    $(document).ready(function() {
        $('footer>nav>ul>li>a').click(function() {
                $(this).next('ul').slideToggle();
            })
            // $('footer nav ul li ul').click(function() {
            //     $(this).siblings().removeClass('active');
            //     $(this).toggleClass('active');
            // })
    })

}

$(".slider-inst").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<a class="slick-prev" href=""><i class="icon-left-open"></i></a>',
    nextArrow: '<a class="slick-next" href=""><i class="icon-right-open"></i></a>',
    mobileFirst: true,
    responsive: [{
        breakpoint: 979,
        settings: {
            slidesToShow: 3,
        }
    }]
});