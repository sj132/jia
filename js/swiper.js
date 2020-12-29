var swiper = new Swiper('.swiper-container-lovecyj1', {
    pagination: '.swiper-pagination-lovecyj1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovecyj2', {
    pagination: '.swiper-pagination-lovecyj2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovecyj3', {
    pagination: '.swiper-pagination-lovecyj3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovecyj3',
    prevButton: '.swiper-button-prev-lovecyj3'
});