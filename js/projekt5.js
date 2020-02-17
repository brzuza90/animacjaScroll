$(window).on('scroll', function () {
    /* ANIMACJA PIERWSZEJ SEKCJI */
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);
    const $art2 = $('.art2');
    const $art3 = $('.art3');
    const $art4 = $('.art4');

    const art2FromTop = $art2.offset().top;
    const art3FromTop = $art3.offset().top;
    const art4FromTop = $art4.offset().top;
    // console.log(art2FromTop);
    const art2Height = $art2.outerHeight();
    const art3Height = $art3.outerHeight();
    const art4Height = $art4.outerHeight();
    // console.log(art2Height);
    if (scrollValue > art2FromTop + art2Height / 2 - windowHeight) {
        // console.log('teraz się pojawił cały art2');
        $art2.addClass('active');
    }
    if (scrollValue > art3FromTop + art3Height / 2 - windowHeight) {
        $art3.addClass('active');
    }
    if (scrollValue > art4FromTop + art4Height / 2 - windowHeight) {
        $art4.addClass('active');
    }
    /* ANIMACJA DRUGIEJ SEKCJI */

    const $op1 = $('.op1');
    const $op2 = $('.op2');

    const op1FromTop = $op1.offset().top;
    const op2FromTop = $op2.offset().top;

    const op1Height = $op1.outerHeight();
    const op2Height = $op2.outerHeight();
    if (scrollValue > op1FromTop - windowHeight - op1Height / 5) {
        $op1.addClass('active');
    }
    if (scrollValue > op2FromTop - windowHeight - op2Height / 5) {
        $op2.addClass('active');
    }
    /* USUWANIE ANIMACJI DLA WSZYSTKICH */
    if (scrollValue < 100) {
        $('article').removeClass('active');
    }
})