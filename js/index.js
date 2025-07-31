$(document).ready(function () {
    Fancybox.bind('[data-fancybox]');

    let scrollTop = 0;
    window.addEventListener('scroll', function () {
        if (!$('body').hasClass('noscroll')) {
            scrollTop = window.scrollY;
        }
    });

    $('.header__burger-btn').on('click', function () {
        const burger = $('.burger');
        const body = $('body');
        
        burger.toggleClass('burger-opened');

        if (burger.hasClass('burger-opened')) {
            body.addClass('noscroll');
            body.css('top', `-${scrollTop}px`);
        } else {
            body.removeClass('noscroll');
            window.scroll(0, scrollTop);
        }
    });

    $('.burger__close').on('click', function () {
        $('.burger').removeClass('burger-opened');
        $('body').removeClass('noscroll');
        window.scroll(0, scrollTop);
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
        }
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({
            scrollTop: 0
        }, 500, 'swing');
    });

    if ($('.banner').length) {
        const bannerSlider = new Swiper('.banner .swiper', {
            speed: 1000,
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                prevEl: '.banner .slider-arrow-prev',
                nextEl: '.banner .slider-arrow-next'
            },
            pagination: {
                el: '.banner .slider-pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }

    if ($('.aside__categories').length) {
        $('.aside__categories__list_sub').slideUp(0);

        $('.aside__categories_sub>button').on('click', function () {
            let parent = $(this.parentElement);
            let sub = parent.find('.aside__categories__list_sub');
            parent.toggleClass('active');

            if (parent.hasClass('active')) {
                sub.slideDown(300);
            } else {
                sub.slideUp(300);
            }
        });
    }

    if ($('.aside__reviews').length) {
        const asideReviewsSlider = new Swiper('.aside__reviews .swiper', {
            speed: 500,
            loop: true,
            effect: 'fade',
            pagination: {
                el: '.aside__reviews .slider-pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }

    if ($('.popular').length) {
        createCardsSlider('.popular .cards .swiper');
    }

    if ($('.news').length) {
        let newsItemCount = 0;
        $('.news__item').each(function () {
            newsItemCount++;

            const newsSlider = new Swiper(`#news-item-${newsItemCount} .news__item__images .swiper`, {
                speed: 1000,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: `#news-item-${newsItemCount} .news__item__images .slider-pagination`,
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    993: {
                        slidesPerView: 3,
                        spaceBetween: 75
                    },
                    577: {
                        slidesPerView: 2
                    }
                }
            });
        });
    }

    if ($('.sale').length) {
        createProductCardsSlider('.sale .product-cards .swiper');
    }

    if ($('.reviews').length) {
        const reviewsSlider = new Swiper('.reviews .swiper', {
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.reviews .slider-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                993: {
                    slidesPerView: 4,
                    spaceBetween: 50
                },
                769: {
                    slidesPerView: 2
                }
            }
        });
    }

    if ($('.blog').length) {
        createCardsSlider('.blog .cards .swiper');
    }

    if ($('.drop-down').length) {
        let isDropDownBtnHover = false;
        let isDropDownMenuHover = false;

        $('.drop-down-open').on('mouseenter', function () {
            isDropDownBtnHover = true;
            $('.drop-down').addClass('active');
        }).on('mouseleave', function () {
            isDropDownBtnHover = false;
            setTimeout(() => {
                if (!isDropDownMenuHover) {
                    $('.drop-down').removeClass('active');
                }
            }, 10);
        });

        $('.drop-down').on('mouseenter', function () {
            isDropDownMenuHover = true;
        }).on('mouseleave', function () {
            isDropDownMenuHover = false;
            setTimeout(() => {
                if (!isDropDownBtnHover) {
                    $('.drop-down').removeClass('active');
                }
            }, 10);
        });

        $('.drop-down__close').on('click', function () {
            $('.drop-down').removeClass('active');
        });

        $(document).on('scroll', function() {
            if ($(window).scrollTop() >= 120) {
                $('.drop-down').addClass('drop-down_mob');
            } else {
                $('.drop-down').removeClass('drop-down_mob');
            }
        });
    }

    function createCardsSlider(cssPath) {
        const cardsSlider = new Swiper(cssPath, {
            speed: 1000,
            slidesPerView: 2,
            spaceBetween: 13,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            grid: {
                fill: 'row',
                rows: 2
            },
            pagination: {
                el: `${cssPath} + .slider-pagination`,
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                993: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 1
                    }
                }, 
                769: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 1
                    }
                },
                577: {
                    slidesPerView: 3,
                    grid: {
                        fill: 'row',
                        rows: 1
                    }
                }
            }
        });
    }

    function createProductCardsSlider(cssPath) {
        const productCardsSlider = new Swiper(cssPath, {
            speed: 1000,
            slidesPerView: 2,
            spaceBetween: 13,
            grid: {
                fill: 'row',
                rows: 2
            },
            pagination: {
                el: `${cssPath} + .slider-pagination`,
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                993: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                    grid: {
                        fill: 'row',
                        rows: 1
                    },
                },
                769: {
                    slidesPerView: 4
                }
            }
        });
    }
});