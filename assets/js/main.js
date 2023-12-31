/* ==============
 ========= js documentation ==========================

 * theme name: Aikeu
 * version: 1.0
 * description: Artificial Neural Network AI HTML Template
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. get device width
     -------------------------------------------------
     02. get initial scroll position
     -------------------------------------------------
     03. preloader
     -------------------------------------------------
     04. data background
     -------------------------------------------------
     05. custom cursor
     -------------------------------------------------
     06. footer copyright year
     -------------------------------------------------
     07. scroll to top with progress
     -------------------------------------------------
     08. top navbar effects
     -------------------------------------------------
     09. open search box
     -------------------------------------------------
     10. mobile menu
     -------------------------------------------------
     11. offcanvas cart
     -------------------------------------------------
     12.1 offcanvas info for Video Drawer
     -------------------------------------------------
     12. offcanvas info
     -------------------------------------------------
     13. overview toggle class
     -------------------------------------------------
     14. pricing table tab
     -------------------------------------------------
     15. blog toggle class
     -------------------------------------------------
     16. image move animation
     -------------------------------------------------
     17. empower accordion
     -------------------------------------------------
     18. case study accordion
     -------------------------------------------------
     19. blog details show reply box
     -------------------------------------------------
     20. product price range filter
     -------------------------------------------------
     21. product details tab
     -------------------------------------------------
     22. toggle password
     -------------------------------------------------
     23. measure cart
      

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /**
     * ======================================
     * 01. get device width
     * ======================================
     */
    let device_width = window.innerWidth;

    /**
     * ======================================
     * 02. get initial scroll position
     * ======================================
     */
    var initialScroll = $(window).scrollTop();

    /**
     * ======================================
     * 03. preloader
     * ======================================
     */
    if ($("#preloader").length > 0) {
      $("#preloader").hide();
    }
    /**
     * ======================================
     * 04. data background
     * ======================================
     */
    $("[data-background]").each(function () {
      var backgroundImages = $(this).attr("data-background").split(",");
      var cssValue = backgroundImages
        .map(function (image) {
          return 'url("' + image.trim() + '")';
        })
        .join(",");

      $(this).css("background-image", cssValue);
    });

    /**
     * ======================================
     * 05. custom cursor
     * ======================================
     */
    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "button, a, .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }
      }
      itCursor();
    }



    /**
     * 
     * Video Playing
     */

    $(".overlay-div").click(function () {
      $(this).hide();
      $(".videoInMobile")[0].src += "&autoplay=1";
  });

  // Pause the video and show the overlay on video click
  $(".videoInMobile").click(function () {
    
      if (!$(this).hasClass("paused")) {
          $(this).addClass("paused");
          $(this).attr("src", $(this).attr("src").replace("&autoplay=1", ""));
          $(".overlay-div").show();
      }
  });
    /**
     * ======================================
     * 06. footer copyright year
     * ======================================
     */
    if ($("#copyrightYear").length > 0) {
      $("#copyrightYear").text(new Date().getFullYear());
    }

    /**
     * ======================================
     * 07. scroll to top with progress
     * ======================================
     */
    if ($(".progress-wrap").length > 0) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
      var offset = 50;
      var duration = 800;
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
          $(".progress-wrap").addClass("active-progress");
        } else {
          $(".progress-wrap").removeClass("active-progress");
        }
      });
      $(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });

      var initialScroll = $(window).scrollTop();
      if (initialScroll >= 100) {
        $(".progress-wrap").addClass("active-progress");
      }
    }

    /**
     * ======================================
     * 08. top navbar effects
     * ======================================
     */
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".primary-navbar").removeClass("navbar-active");
      } else {
        $(".primary-navbar").addClass("navbar-active");
      }
    });

    var initialScroll = $(window).scrollTop();
    if (initialScroll >= 100) {
      $(".primary-navbar").addClass("navbar-active");
    }

    /**
     * ======================================
     * 09. open search box
     * ======================================
     */
    if ($(".search-popup").length > 0) {
      $(".open-search").on("click", function () {
        $("body").addClass("search-active body-active");
      });

      $(".close-search").on("click", function () {
        $("body").removeClass("search-active body-active");
      });
    }

    /**
     * ======================================
     * 10. mobile menu
     * ======================================
     */
    if ($(".mobile-menu").length > 0) {
      var mobileMenuContent = $(".navbar__menu").html();
      $(".mobile-menu__list").append(mobileMenuContent);

      $(".mobile-menu .navbar__dropdown-label").on("click", function () {
        $(this).parent().siblings().find(".navbar__sub-menu").slideUp(300);
        $(this)
          .parent()
          .siblings()
          .find(".navbar__dropdown-label")
          .removeClass("navbar__item-active");
        $(this).siblings(".navbar__sub-menu").slideToggle(300);
        $(this).toggleClass("navbar__item-active");
      });
    }

    $(".open-mobile-menu").on("click", function () {
      $(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
      $(".nav-fade").each(function (i) {
        $(this).css("animation-delay", 0.2 * 1 * i + "s");
      });

      $(".mobile-menu").addClass("show-menu");
      $(".mobile-menu__wrapper").removeClass("nav-fade-active");
      $("body").addClass("body-active");
    });

    $(".close-mobile-menu, .mobile-menu__backdrop").on("click", function () {
      setTimeout(function () {
        $(".mobile-menu").removeClass("show-menu");
      }, 900);
      setTimeout(function () {
        $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      }, 1100);

      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $("body").removeClass("body-active");
    });

    /**
     * ======================================
     * 11. offcanvas cart
     * ======================================
     */
    $(".open-cart").on("click", function () {
      $(".sidebar-cart").addClass("sidebar-cart-active");
      $(".cart-backdrop").addClass("cart-backdrop-active");
      $("body").addClass("body-active");
    });

    $(".close-cart, .cart-backdrop").on("click", function () {
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");
      $("body").removeClass("body-active");
    });

    var countItem = $(".cart-item-single").length;
    $(".count-item").text(countItem);
    $(".empty-cart").hide();

    // calculate total price
    function calculateTotalPrice() {
      var totalPrice = 0;
      $(".cart-item-single").each(function () {
        var quantity = parseInt($(this).find(".item-quantity").text(), 10);
        var price = parseFloat($(this).find(".item-price").text());
        totalPrice += quantity * price;
      });
      $(".total-price").text(totalPrice.toFixed(2));
    }

    $(".cart-item-single").each(function () {
      var quantity = parseInt($(this).find(".item-quantity").text(), 10);
      // increase item
      $(this)
        .find(".quantity-increase")
        .on("click", function () {
          if (quantity < 100) {
            quantity++;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        });

      // decrease item
      $(this)
        .find(".quantity-decrease")
        .on("click", function () {
          if (quantity > 0) {
            quantity--;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        });

      // delete item
      $(this)
        .find(".delete-item")
        .on("click", function () {
          $(this).closest(".cart-item-single").hide();
          $(this).parent().find(".item-quantity").text(0);
          calculateTotalPrice();
          $(this).parent().removeClass("cart-item-single");
          var countItem = $(".cart-item-single").length;
          $(".count-item").text(countItem);

          if (countItem > 0) {
            $(".empty-cart").hide();
          } else {
            $(".empty-cart").show();
          }
        });
    });

    /**
     * ======================================
     * 12. offcanvas info
     * ======================================
     */
    $(".open-offcanvas").on("click", function () {
      $(".offcanvas-info").addClass("offcanvas-info-active");
      $(".offcanvas-info-backdrop").addClass("offcanvas-info-backdrop-active");
      $("body").addClass("body-active");
    });

    $(".close-offcanvas-info, .offcanvas-info-backdrop").on(
      "click",
      function () {
        $(".offcanvas-info").removeClass("offcanvas-info-active");
        $(".offcanvas-info-backdrop").removeClass(
          "offcanvas-info-backdrop-active"
        );
        $("body").removeClass("body-active");
      }
    );

   /**
     * ======================================
     * 12.1 offcanvas info for Video icon
     * ======================================
     */
   $(".open-offcanvas_player").on("click", function () {
    $(".offcanvas-info_video").addClass("offcanvas-info-active");
    $(".offcanvas-info-backdrop").addClass("offcanvas-info-backdrop-active");
    $("body").addClass("body-active");
  });

  $(".close-offcanvas-info_video, .offcanvas-info-backdrop").on(
    "click",
    function () {
      $(".offcanvas-info_video").removeClass("offcanvas-info-active");
      $(".offcanvas-info-backdrop").removeClass(
        "offcanvas-info-backdrop-active"
      );
      $("body").removeClass("body-active");
    }
  );

    /**
     * ======================================
     * 13. overview toggle class
     * ======================================
     */
    $(".overview__single").on("mouseover", function () {
      $(".overview__single").removeClass("overview__single-active");
      $(this).addClass("overview__single-active");
    });

    /**
     * ======================================
     * 14. pricing table tab
     * ======================================
     */
    $(".yearly").hide();
    $(".yearly-price").on("click", async function () {
      $(".monthly").hide();
      $(".yearly").show();
      $(".price-btn").removeClass("price-btn-active");
      $(this).addClass("price-btn-active");
    });
    $(".monthly-price").on("click", function () {
      $(".yearly").hide();
      $(".monthly").show();
      $(".price-btn").removeClass("price-btn-active");
      $(this).addClass("price-btn-active");
    });

    // 

    const imageUrls1_2 = [
      'assets/images/Partner/Digital/BackWhite/1.png', 
      'assets/images/Partner/Digital/BackWhite/2.png', 
      'assets/images/Partner/Digital/BackWhite/3.png', 
      'assets/images/Partner/Digital/BackWhite/4.png', 
      'assets/images/Partner/Digital/BackWhite/5.png', 
      'assets/images/Partner/Digital/BackWhite/6.png', 
      'assets/images/Partner/Digital/BackWhite/7.png', 
      'assets/images/Partner/Digital/BackWhite/8.png', 
      'assets/images/Partner/Digital/BackWhite/9.png', 
      'assets/images/Partner/Digital/BackWhite/10.png', 
      'assets/images/Partner/Digital/BackWhite/11.png', 
      'assets/images/Partner/Digital/BackWhite/12.png', 
      'assets/images/Partner/Digital/BackWhite/13.png', 
      'assets/images/Partner/Digital/BackWhite/14.png', 
      'assets/images/Partner/Digital/BackWhite/15.png', 
      'assets/images/Partner/Digital/BackWhite/16.png', 
      'assets/images/Partner/Digital/BackWhite/17.png', 
      'assets/images/Partner/Digital/BackWhite/18.png', 
      'assets/images/Partner/Digital/BackWhite/19.png', 
      'assets/images/Partner/Digital/BackWhite/20.png', 
      'assets/images/Partner/Digital/BackWhite/21.png', 
      'assets/images/Partner/Digital/BackWhite/22.png', 
      'assets/images/Partner/Digital/BackWhite/23.png', 
      'assets/images/Partner/Digital/BackWhite/24.png', 
      'assets/images/Partner/Digital/BackWhite/25.png', 
      'assets/images/Partner/Digital/BackWhite/26.png', 
      'assets/images/Partner/Digital/BackWhite/27.png', 
      'assets/images/Partner/Digital/BackWhite/28.png', 
      'assets/images/Partner/Digital/BackWhite/29.png', 
      'assets/images/Partner/Digital/BackWhite/30.png', 
    ];
    
    const imageUrls1 = [
      'assets/images/Partner/Digital/White/1.png', 
      'assets/images/Partner/Digital/White/2.png', 
      'assets/images/Partner/Digital/White/3.png', 
      'assets/images/Partner/Digital/White/4.png', 
      'assets/images/Partner/Digital/White/5.png', 
      'assets/images/Partner/Digital/White/6.png', 
      'assets/images/Partner/Digital/White/7.png', 
      'assets/images/Partner/Digital/White/8.png', 
      'assets/images/Partner/Digital/White/9.png', 
      'assets/images/Partner/Digital/White/10.png', 
      'assets/images/Partner/Digital/White/11.png', 
      'assets/images/Partner/Digital/White/12.png', 
      'assets/images/Partner/Digital/White/13.png', 
      'assets/images/Partner/Digital/White/14.png', 
      'assets/images/Partner/Digital/White/15.png', 
      'assets/images/Partner/Digital/White/16.png', 
      'assets/images/Partner/Digital/White/17.png', 
      'assets/images/Partner/Digital/White/18.png', 
      'assets/images/Partner/Digital/White/19.png', 
      'assets/images/Partner/Digital/White/20.png', 
      'assets/images/Partner/Digital/White/21.png', 
      'assets/images/Partner/Digital/White/22.png', 
      'assets/images/Partner/Digital/White/23.png', 
      'assets/images/Partner/Digital/White/24.png', 
      'assets/images/Partner/Digital/White/25.png', 
      'assets/images/Partner/Digital/White/26.png', 
      'assets/images/Partner/Digital/White/27.png', 
      'assets/images/Partner/Digital/White/28.png', 
      'assets/images/Partner/Digital/White/29.png', 
      'assets/images/Partner/Digital/White/30.png', 
    ];
    const imageUrls2_2 = [
      'assets/images/Partner/Information/BackWhite/1.png', 
      'assets/images/Partner/Information/BackWhite/2.png', 
      'assets/images/Partner/Information/BackWhite/3.png', 
      'assets/images/Partner/Information/BackWhite/4.png', 
      'assets/images/Partner/Information/BackWhite/5.png', 
      'assets/images/Partner/Information/BackWhite/6.png', 
      'assets/images/Partner/Information/BackWhite/7.png', 
      'assets/images/Partner/Information/BackWhite/8.png', 
      'assets/images/Partner/Information/BackWhite/9.png', 
      'assets/images/Partner/Information/BackWhite/10.png', 
      'assets/images/Partner/Information/BackWhite/11.png', 
      'assets/images/Partner/Information/BackWhite/12.png', 
      'assets/images/Partner/Information/BackWhite/13.png', 
      'assets/images/Partner/Information/BackWhite/14.png', 
      'assets/images/Partner/Information/BackWhite/15.png', 
      'assets/images/Partner/Information/BackWhite/16.png', 

    ];
    const imageUrls2 = [
      'assets/images/Partner/Information/White/1.png', 
      'assets/images/Partner/Information/White/2.png', 
      'assets/images/Partner/Information/White/3.png', 
      'assets/images/Partner/Information/White/4.png', 
      'assets/images/Partner/Information/White/5.png', 
      'assets/images/Partner/Information/White/6.png', 
      'assets/images/Partner/Information/White/7.png', 
      'assets/images/Partner/Information/White/8.png', 
      'assets/images/Partner/Information/White/9.png', 
      'assets/images/Partner/Information/White/10.png', 
      'assets/images/Partner/Information/White/11.png', 
      'assets/images/Partner/Information/White/12.png', 
      'assets/images/Partner/Information/White/13.png', 
      'assets/images/Partner/Information/White/14.png', 
      'assets/images/Partner/Information/White/15.png', 
      'assets/images/Partner/Information/White/16.png', 

    ];
    const imageUrls3_2 = [
      'assets/images/Partner/Technology/BackWhite/1.png',
      'assets/images/Partner/Technology/BackWhite/2.png',
      'assets/images/Partner/Technology/BackWhite/3.png',
      'assets/images/Partner/Technology/BackWhite/4.png',
      'assets/images/Partner/Technology/BackWhite/5.png',
      'assets/images/Partner/Technology/BackWhite/6.png',
      'assets/images/Partner/Technology/BackWhite/7.png',
      'assets/images/Partner/Technology/BackWhite/8.png',
      'assets/images/Partner/Technology/BackWhite/9.png',
      'assets/images/Partner/Technology/BackWhite/10.png',
      'assets/images/Partner/Technology/BackWhite/11.png',
      'assets/images/Partner/Technology/BackWhite/12.png',
    ];
    const imageUrls3 = [
      'assets/images/Partner/Technology/White/1.png',
      'assets/images/Partner/Technology/White/2.png',
      'assets/images/Partner/Technology/White/3.png',
      'assets/images/Partner/Technology/White/4.png',
      'assets/images/Partner/Technology/White/5.png',
      'assets/images/Partner/Technology/White/6.png',
      'assets/images/Partner/Technology/White/7.png',
      'assets/images/Partner/Technology/White/8.png',
      'assets/images/Partner/Technology/White/9.png',
      'assets/images/Partner/Technology/White/10.png',
      'assets/images/Partner/Technology/White/11.png',
      'assets/images/Partner/Technology/White/12.png',
    ];

    const imageUrls4_2 = [
      'assets/images/Clients/BackWhite/1.png',
      'assets/images/Clients/BackWhite/2.png',
      'assets/images/Clients/BackWhite/3.png',
      'assets/images/Clients/BackWhite/4.png',
      'assets/images/Clients/BackWhite/5.png',
      'assets/images/Clients/BackWhite/6.png',
      'assets/images/Clients/BackWhite/7.png',
      'assets/images/Clients/BackWhite/8.png',
      'assets/images/Clients/BackWhite/9.png',
      'assets/images/Clients/BackWhite/10.png',
      'assets/images/Clients/BackWhite/11.png',
      'assets/images/Clients/BackWhite/12.png',
      'assets/images/Clients/BackWhite/13.png',
      'assets/images/Clients/BackWhite/14.png',
      'assets/images/Clients/BackWhite/15.png',
      'assets/images/Clients/BackWhite/16.png',
      'assets/images/Clients/BackWhite/17.png',
      'assets/images/Clients/BackWhite/18.png',
      'assets/images/Clients/BackWhite/19.png',
      'assets/images/Clients/BackWhite/20.png',
      'assets/images/Clients/BackWhite/21.png',
    ];

    const imageUrls4 = [
      'assets/images/Clients/White/1.png',
      'assets/images/Clients/White/2.png',
      'assets/images/Clients/White/3.png',
      'assets/images/Clients/White/4.png',
      'assets/images/Clients/White/5.png',
      'assets/images/Clients/White/6.png',
      'assets/images/Clients/White/7.png',
      'assets/images/Clients/White/8.png',
      'assets/images/Clients/White/9.png',
      'assets/images/Clients/White/10.png',
      'assets/images/Clients/White/11.png',
      'assets/images/Clients/White/12.png',
      'assets/images/Clients/White/13.png',
      'assets/images/Clients/White/14.png',
      'assets/images/Clients/White/15.png',
      'assets/images/Clients/White/16.png',
      'assets/images/Clients/White/17.png',
      'assets/images/Clients/White/18.png',
      'assets/images/Clients/White/19.png',
      'assets/images/Clients/White/20.png',
      'assets/images/Clients/White/21.png',
    ];

    
    renderImages(imageUrls1, 'sponsor__slider__tab1');
    hideAllSlidersExcept('sponsor__slider__tab1');

    renderImages(imageUrls4, 'sponsor__slider__tab4');

    document.getElementById('pills-home-tab').addEventListener('click', () => {
      renderImages(imageUrls1, 'sponsor__slider__tab1');
      hideAllSlidersExcept('sponsor__slider__tab1');
      reapplyHoverEvents();
    });

    document.getElementById('pills-profile-tab').addEventListener('click', () => {
      renderImages(imageUrls2, 'sponsor__slider__tab2');
      hideAllSlidersExcept('sponsor__slider__tab2');
      reapplyHoverEvents();
    });

    document.getElementById('pills-contact-tab').addEventListener('click', () => {
      renderImages(imageUrls3, 'sponsor__slider__tab3');
      hideAllSlidersExcept('sponsor__slider__tab3');
      reapplyHoverEvents();
    });

    function renderImages(imageUrls, containerId) {
      const sliderContainer = document.getElementById(containerId);
      if(sliderContainer && sliderContainer.innerHTML) {
        sliderContainer.innerHTML = '';
      }

      imageUrls.forEach(url => {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('sponsor__single', 'text-center');

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.objectPosition = 'center';


        imgWrapper.appendChild(img);
        sliderContainer.appendChild(imgWrapper);
      });

      if ($(`#${containerId}`).hasClass('slick-initialized')) {
        $(`#${containerId}`).slick('unslick');
      }


      $(`#${containerId}`).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: -8000,
        speed: 8000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        draggable: false,
        variableWidth: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }

    function hideAllSlidersExcept(activeSliderId) {
      const tabContainer = document.getElementById('tabContainer');
      const allSliders = tabContainer.querySelectorAll('.sponsor__slider');
      allSliders.forEach(slider => {
        if (slider.id === activeSliderId) {
          slider.style.display = 'block'; 
        } else {
          slider.style.display = 'none'; 
        }
      });
    }




function handleHoverEvents(sliderSelector) {
  document.querySelectorAll(sliderSelector).forEach((slider) => {
    slider.addEventListener('mouseenter', function(event) {
      event.target.style.backgroundColor = "#fff";
      let hoveredImage = event.target.querySelector('img');
      let newSrc = hoveredImage.src.replace('/White/', '/BackWhite/');
      hoveredImage.src = newSrc;
    });

    slider.addEventListener('mouseleave', function(event) {
      event.target.style.backgroundColor = "#000";
      let hoveredImage = event.target.querySelector('img');
      let newSrc = hoveredImage.src.replace('/BackWhite/', '/White/');
      hoveredImage.src = newSrc;
    });
  });
}

function reapplyHoverEvents() {
  handleHoverEvents('.sponsor__slider__tab1 .sponsor__single');
  handleHoverEvents('.sponsor__slider__tab2 .sponsor__single');
  handleHoverEvents('.sponsor__slider__tab3 .sponsor__single');
}

reapplyHoverEvents();

    document.querySelectorAll('.clients_slider .sponsor__slider .sponsor__single').forEach((slider, index) => {
      slider.addEventListener('mouseenter', function(event) {
          
          event.target.style.backgroundColor = "#fff";
          let hoveredImage = event.target.querySelector('img'); 
          let newSrc = hoveredImage.src.replace('/White/', '/BackWhite/');
          hoveredImage.src = `${newSrc}`;
      });
    
      slider.addEventListener('mouseleave', function(event) {
          event.target.style.backgroundColor = "#000";
          let hoveredImage = event.target.querySelector('img'); 
          let newSrc = hoveredImage.src.replace('/BackWhite/','/White/');
          hoveredImage.src = `${newSrc}`;
    });   
    
  });


    /**
     * ======================================
     * 15. blog toggle class
     * ======================================
     */
    $(".blog__single").on("mouseover", function () {
      $(".blog__single").removeClass("blog__single-active");
      $(this).addClass("blog__single-active");
    });

    $(window).on("resize", function () {
      $("body").removeClass("body-active search-active");

      // mobile menu
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(300);

      // sidebar cart
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");

      // offcanvas info
      $(".offcanvas-info").removeClass("offcanvas-info-active");
      $(".offcanvas-info-backdrop").removeClass(
        "offcanvas-info-backdrop-active"
      );
    });

    /**
     * ======================================
     * 16. image move animation
     * ======================================
     */
    if (device_width >= 576) {
      const caseStudyItem = document.querySelectorAll(".revolution-f__single");

      function followImageCursor(event, caseStudyItem) {
        const contentBox = caseStudyItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        caseStudyItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
      }
      caseStudyItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
          setInterval(followImageCursor(event, item), 1000);
        });
      });
    }

    /**
     * ======================================
     * 17. empower accordion
     * ======================================
     */
    $(".h-empower-single:first").addClass("h-empower-single-active");
    $(".h-empower-single:first .sho-item").show();
    $(".o-accordion").on("click", function () {
      var parent = $(this).parent().parent();
      parent.find(".sho-item").slideToggle(600);
      parent.toggleClass("h-empower-single-active");
      parent.siblings().removeClass("h-empower-single-active");
      parent.siblings().find(".sho-item").slideUp(600);
    });

    /**
     * ======================================
     * .18 case study accordion
     * ======================================
     */
    $(".h-s-case-single").on("click", function () {
      $(".h-s-case-single").removeClass("h-s-case-single-active");
      $(this).addClass("h-s-case-single-active");
    });

    /**
     * ======================================
     * 19. blog details show reply box
     * ======================================
     */
    $(".open-reply").each(function () {
      $(this).on("click", function () {
        $(this).parent().next(".reply-box-wrapper").slideToggle();
      });
    });

    /**
     * ======================================
     * 20. product price range filter
     * ======================================
     */
    $("#price-range").slider({
      step: 1,
      range: true,
      min: 0,
      max: 1000,
      values: [0, 1000],
      slide: function (event, ui) {
        $("#priceRange").val(ui.values[0] + " - " + ui.values[1]);
      },
    });
    $("#priceRange").val(
      $("#price-range").slider("values", 0) +
        " - " +
        $("#price-range").slider("values", 1)
    );

    /**
     * ======================================
     * 21. product details tab
     * ======================================
     */
    $(".p-details__tab-single").hide();
    $(".p-details__tab-single:first").show();
    $(".p-d-t-btn").on("click", function () {
      $(".p-d-t-btn").removeClass("p-d-t-btn-active");
      $(this).addClass("p-d-t-btn-active");
      $(".p-details__tab-single").hide();
      var activePlan = $(this).data("target");
      $(activePlan).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 22. toggle password
     * ======================================
     */
    $(".show-pass").each(function () {
      $(this).on("click", function () {
        var passwordField = $(this).next("input");
        if (passwordField.attr("type") === "password") {
          passwordField.attr("type", "text");
          $(this).text("visibility");
        } else {
          passwordField.attr("type", "password");
          $(this).text("visibility_off");
        }
      });
    });

    /**
     * ======================================
     * 23. measure cart
     * ======================================
     */
    function cartItemPrice($row) {
      var totalPrice = 0;
      var quantity = parseInt($row.find(".item-quantity").text(), 10);
      var price = parseFloat($row.find(".item-price").text());
      totalPrice = quantity * price;
      $row.find(".total-price").text(totalPrice.toFixed(2));
    }

    $(".cart-item-single-m").each(function () {
      var $thisRow = $(this);
      var quantity = parseInt($thisRow.find(".item-quantity").text(), 10);

      // increase item
      $thisRow.find(".quantity-increase").on("click", function () {
        if (quantity < 50) {
          quantity++;
          $thisRow.find(".item-quantity").text(quantity);
          cartItemPrice($thisRow);
        }
      });

      // decrease item
      $thisRow.find(".quantity-decrease").on("click", function () {
        if (quantity > 0) {
          quantity--;
          $thisRow.find(".item-quantity").text(quantity);
          cartItemPrice($thisRow);
        }
      });

      // delete item
      $thisRow.find(".remove-item").on("click", function () {
        $thisRow.hide();
        $thisRow.find(".item-quantity").text(0);
        cartItemPrice($thisRow);
        $thisRow.removeClass("cart-item-single-m");
        var countItem = $(".cart-item-single-m").length;

        if (countItem > 0) {
          $(".empty-cart-m").hide();
        } else {
          $(".empty-cart-m").show();
        }
      });
    });

    /**
     * ======================================
     * 24. banner image animation
     * ======================================
     */
    if ($(".hero-section").length > 0) {
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".banner__five-content h1", {
            y: "490px",
            scale: 1.5,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          tl.to(
            ".banner__five-content banner-seven__group",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            ".b-f-s-thumb",
            {
              y: "-200px",
              duration: 2,
            },
            0
          );
          tl.to(
            ".section__cta",
            {
              y: "-170px",
              duration: 2,
            },
            0
          );
        }
      }

      if ($(".h-s-case").length > 0) {
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".h-s-case",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".soluation-container h2", {
            y: "590px",
            scale: 1,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          tl.to(
            ".soluation-container soluation-text",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            ".soluation-text",
            {
              y: "-500px",
              duration: 2,
            },
            0
          );
          tl.to(
            ".h-s-case-wrapper",
            {
              y: "0px",
              duration: 1,
            },
            0
          );
       
        }
      }

      if ($(".craft-alt").length > 0) { 
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".craft-alt",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".about__container h2", {
            y: "300px",
            scale: 1,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          tl.to(
            ".about__container about__text",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            ".about__text",
            {
              y: "-200",
              duration: 2,
            },
            0
          );
          tl.to(
            ".about__container .section__content-cta",
            {
              y: "-200px",
              duration: 2,
            },
            0
          );
       
        }
      }

      if ($(".h-s-case-alter").length > 0) {
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".h-s-case-alter",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".service__container h2", {
            y: "490px",
            scale: 1.5,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          
       
        }
      }

      if ($(".pricing").length > 0) {
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".pricing",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".partaner__container h2", {
            y: "490px",
            scale: 1,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          tl.to(
            ".partaner__container p",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            " .partaner__container p ",
            {
              y: "0px",
              duration: 2,
            },
            0
          );
          tl.to(
            ".section__content-cta",
            {
              y: "0px",
              duration: 2,
            },
            0
          );
          
       
        }
      }

      if ($(".h-empower").length > 0) {
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".h-empower",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".clients__container h2", {
            y: "380px",
            scale: 1,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          tl.to(
            ".clients__container p",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            " .clients__container p ",
            {
              y: "0px",
              duration: 2,
            },
            0
          );
          tl.to(
            ".clients_slider",
            {
              y: "0px",
              duration: 2,
            },
            0
          );
      
        }
      }

      if ($(".blog").length > 0) {
        if (device_width >= 768) {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".blog",
              start: "top top",
              end: "+=20%",
              scrub: 1,
              pin: false,
            },
          });
          tl.to(".blog__container h2", {
            y: "490px",
            scale: 1,
            zIndex: -1,
            opacity: "0.2",
            duration: 3,
          });
          tl.to(
            ".blog__container p",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            " .blog__container p ",
            {
              y: "-450px",
              duration: 2,
            },
            0
          );
          tl.to(
            ".view_more view_more-sub",
            {
              scale: 1.3,
              duration: 2,
            },
            0
          );
          tl.to(
            ".view_more",
            {
              y: "0px",
              duration: 1,
            },
            0
          );
          tl.to(
            ".news__container2",
            {
              y: "0px",
              duration: 1,
            },
            0
          );
      
        }
      }

  });
})(jQuery);
