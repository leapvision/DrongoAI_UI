(function ($) {
  "use strict";
  var count = 1;

  setToltip();
  fixForFooterNoContent();
  fixForBlogThumbnailSize();
  fixTeamLayout();
  imageSliderSettings();
  textSliderSettings();
  newsBackgroundImages();
  skillsFill();
  portfolioItemContentLoadOnClick();

  fixForMenu();
  singlePostStickyInfo();
  slowScroll();
  logoClickFix();
  placeholderShowHide();
  fitVideo();
  firstSectionActiveFix();
  setMenu();
  SendMail();

  //Show-Hide header sidebar
  $("#toggle").on("click", multiClickFunctionStop);

  $(window).on("load", function () {
    isotopeSetUp();
    setUpParallax();
    hashFix();
    $(".doc-loader").fadeOut(600);
  });

  $(window).on("resize", function () {
    fixForBlogThumbnailSize();
    setActiveMenuItem();
    fixTeamLayout();
  });

  $(window).on("scroll", function () {
    setActiveMenuItem();
  });
  //------------------------------------------------------------------------
  //Helper Methods -->
  //------------------------------------------------------------------------

  function multiClickFunctionStop() {
    $("#toggle").off("click");
    $("#toggle").toggleClass("on");
    if ($("#toggle").hasClass("on")) {
      $(".menu-holder").addClass("show");
      $("#toggle").on("click", multiClickFunctionStop);
    } else {
      $(".menu-holder").removeClass("show");
      $("#toggle").on("click", multiClickFunctionStop);
    }
  }

  function setToltip() {
    $(".tooltip").tipper({
      direction: "top",
      follow: true,
    });
  }

  function fixForFooterNoContent() {
    if (
      $(".footer-content").html().replace(/\s/g, "") == "" ||
      $(".footer-content").html().replace(/\s/g, "") ==
        '<divclass="footer-logo-divider"></div><divclass="footer-social-divider"></div>'
    ) {
      $(".footer").addClass("hidden");
    }
  }

  function fixForBlogThumbnailSize() {
    $(".blog-holder .blog-item-holder.has-post-thumbnail").each(function () {
      if (
        $(this).find(".post-thumbnail").height() >
        $(this).find(".entry-holder").innerHeight() + 80
      ) {
        $(this).addClass("is-smaller");
        $(this)
          .find(".post-thumbnail img")
          .height($(this).find(".entry-holder").innerHeight() + 80);
      }
    });
  }

  function is_touch_device() {
    return !!("ontouchstart" in window);
  }

  function setActiveMenuItem() {
    var currentSection = null;
    $(".section").each(function () {
      var element = $(this).attr("id");
      if ($("#" + element).is("*")) {
        if ($(window).scrollTop() >= $("#" + element).offset().top - 115) {
          currentSection = element;
        }
      }
    });
    $("#header-main-menu ul li")
      .removeClass("active")
      .find('a[href*="#' + currentSection + '"]')
      .parent()
      .addClass("active");
  }

  function isotopeSetUp() {
    $(".grid").isotope({
      itemSelector: ".grid-item",
      masonry: {
        columnWidth: ".grid-sizer",
      },
    });
  }

  function imageSliderSettings() {
    $(".image-slider").each(function () {
      var id = $(this).attr("id");
      console.log("inside the slider  : " + id);
      var auto_value = window[id + "_auto"];
      var hover_pause = window[id + "_hover"];
      var speed_value = window[id + "_speed"];
      auto_value = auto_value === "true" ? true : false;
      hover_pause = hover_pause === "true" ? true : false;
      $("#" + id).owlCarousel({
        loop: true,
        autoHeight: true,
        smartSpeed: 1000,
        autoplay: auto_value,
        autoplayHoverPause: hover_pause,
        autoplayTimeout: speed_value,
        responsiveClass: true,
        items: 1,
      });
      $(this).on("mouseleave", function () {
        $(this).trigger("stop.owl.autoplay");
        $(this).trigger("play.owl.autoplay", [auto_value]);
      });
    });
  }

  function textSliderSettings() {
    $(".text-slider").each(function () {
      var id = $(this).attr("id");
      var auto_value = window[id + "_auto"];
      var hover_pause = window[id + "_hover"];
      var speed_value = window[id + "_speed"];
      auto_value = auto_value === "true" ? true : false;
      hover_pause = hover_pause === "true" ? true : false;
      $("#" + id).owlCarousel({
        loop: true,
        autoHeight: false,
        smartSpeed: 1000,
        autoplay: auto_value,
        autoplayHoverPause: hover_pause,
        autoplayTimeout: speed_value,
        responsiveClass: true,
        dots: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        nav: true,
        items: 1,
      });
    });
  }

  function setUpParallax() {
    $("[data-jarallax-element]").jarallax({
      speed: 0.2,
    });
  }

  function destroyParallax() {
    $("[data-jarallax-element]").jarallax("destroy");
  }

  function fixTeamLayout() {
    if ($(window).width() < 1000) {
      $(".member-right").each(function () {
        if (!$(this).hasClass("small-screen")) {
          $(this)
            .addClass("small-screen")
            .removeClass("big-screen")
            .find("img")
            .insertBefore($(this).find(".member-info"));
        }
      });
    } else {
      $(".member-right").each(function () {
        if (!$(this).hasClass("big-screen")) {
          $(this)
            .addClass("big-screen")
            .removeClass("small-screen")
            .find(".member-info")
            .insertBefore($(this).find("img"));
        }
      });
    }
  }

  function newsBackgroundImages() {
    $(".latest-posts-background-featured-image-holder").each(function () {
      $(this).css(
        "background-image",
        "url(" + ($(this).data("background-image") + ")")
      );
    });
  }

  // function portfolioItemContentLoadOnClick() {
  //   $(".ajax-portfolio").on("click", function (e) {
  //     e.preventDefault();
  //     var portfolioItemID = $(this).data("id");
  //     $(this).addClass("animate-plus");
  //     if ($("#pcw-" + portfolioItemID).length) {
  //       //Check if is allready loaded
  //       $("html, body").animate(
  //         { scrollTop: $("#portfolio-wrapper").offset().top },
  //         400
  //       );
  //       setTimeout(function () {
  //         $("#portfolio-grid, .more-posts-portfolio-holder").addClass("hide");
  //         setTimeout(function () {
  //           $("#pcw-" + portfolioItemID).addClass("show");
  //           $(".portfolio-load-content-holder").addClass("show");
  //           $(".ajax-portfolio").removeClass("animate-plus");
  //           $("#portfolio-grid, .more-posts-portfolio-holder").hide();
  //         }, 300);
  //       }, 500);
  //       $("#pcw-" + portfolioItemID).imagesLoaded(function () {
  //         imageSliderSettings(portfolioItemID);
  //     });
  //     } else {

  //       loadPortfolioItemContent(portfolioItemID);
  //     }
  //   });
  // }

  // function loadPortfolioItemContent(portfolioItemID) {
  //   $.ajax({
  //     url: $('.ajax-portfolio[data-id="' + portfolioItemID + '"]').attr("href"),
  //     type: "GET",
  //     success: function (html) {
  //       var getPortfolioItemHtml = $(html)
  //         .find(".portfolio-item-wrapper")
  //         .html();
  //       $(".portfolio-load-content-holder").append(
  //         '<div id="pcw-' +
  //           portfolioItemID +
  //           '" class="portfolio-content-wrapper">' +
  //           getPortfolioItemHtml +
  //           "</div>"
  //       );

  //       if (!$("#pcw-" + portfolioItemID + " .close-icon").length) {
  //         $("#pcw-" + portfolioItemID).prepend(
  //           '<div class="close-icon"></div>'
  //         );
  //       }
  //       $("html, body").animate(
  //         { scrollTop: $("#portfolio-wrapper").offset().top },
  //         400
  //       );
  //       setTimeout(function () {
  //         $("#pcw-" + portfolioItemID).imagesLoaded(function () {

  //           console.log('Inside imagesLoaded' , portfolioItemID);
  //           skillsFill();
  //           imageSliderSettings(portfolioItemID);
  //           $(".site-content").fitVids(); //Fit Video
  //           $("#portfolio-grid, .more-posts-portfolio-holder").addClass("hide");
  //           setTimeout(function () {
  //             $("#pcw-" + portfolioItemID).addClass("show");
  //             $(".portfolio-load-content-holder").addClass("show");
  //             $(".ajax-portfolio").removeClass("animate-plus");
  //             $("#portfolio-grid").hide();
  //           }, 300);
  //           $(".close-icon").on("click", function (e) {
  //             var portfolioReturnItemID = $(this)
  //               .closest(".portfolio-content-wrapper")
  //               .attr("id")
  //               .split("-")[1];
  //             $(".portfolio-load-content-holder").addClass("viceversa");
  //             $("#portfolio-grid, .more-posts-portfolio-holder").css(
  //               "display",
  //               "block"
  //             );
  //             setTimeout(function () {
  //               $("#pcw-" + portfolioReturnItemID).removeClass("show");
  //               $(".portfolio-load-content-holder").removeClass(
  //                 "viceversa show"
  //               );
  //               $("#portfolio-grid, .more-posts-portfolio-holder").removeClass(
  //                 "hide"
  //               );
  //             }, 300);
  //             setTimeout(function () {
  //               $("html, body").animate(
  //                 {
  //                   scrollTop: $("#p-item-" + portfolioReturnItemID).offset()
  //                     .top,
  //                 },
  //                 400
  //               );
  //             }, 500);

  //           });

  //         });
  //       }, 500);
  //     },
  //   });
  //   return false;
  // }
  function portfolioItemContentLoadOnClick() {
    $(".ajax-portfolio").on("click", function (e) {
      e.preventDefault();
      var portfolioItemID = $(this).data("id");
      $(this).addClass("animate-plus");
      if ($("#pcw-" + portfolioItemID).length) {
        // Check if already loaded
        $("html, body").animate(
          { scrollTop: $("#portfolio-wrapper").offset().top },
          400
        );
        setTimeout(function () {
          $("#portfolio-grid, .more-posts-portfolio-holder").addClass("hide");
          setTimeout(function () {
            $("#pcw-" + portfolioItemID).addClass("show");
            $(".portfolio-load-content-holder").addClass("show");
            $(".ajax-portfolio").removeClass("animate-plus");
            $("#portfolio-grid, .more-posts-portfolio-holder").hide();
          }, 300);
        }, 500);
      } else {
        loadPortfolioItemContent(portfolioItemID);
      }
    });
  }

  function loadPortfolioItemContent(portfolioItemID) {
    $.ajax({
      url: $('.ajax-portfolio[data-id="' + portfolioItemID + '"]').attr("href"),
      type: "GET",
      success: function (html) {
        var getPortfolioItemHtml = $(html)
          .find(".portfolio-item-wrapper")
          .html();
        $(".portfolio-load-content-holder").append(
          '<div id="pcw-' +
            portfolioItemID +
            '" class="portfolio-content-wrapper">' +
            getPortfolioItemHtml +
            "</div>"
        );

        // Apply image slider to newly loaded content:
        $("#pcw-" + portfolioItemID + " .image-slider").each(function () {
          var id = $(this).attr("id");
          var auto_value = window[id + "_auto"];
          var hover_pause = window[id + "_hover"];
          var speed_value = window[id + "_speed"];
          auto_value = auto_value === "true" ? true : false;
          hover_pause = hover_pause === "true" ? true : false;
          $(this).owlCarousel({
            loop: true,
            autoHeight: true,
            smartSpeed: 1000,
            autoplay: auto_value,
            autoplayHoverPause: hover_pause,
            autoplayTimeout: speed_value,
            responsiveClass: true,
            items: 1,
          });
          $(this).on("mouseleave", function () {
            $(this).trigger("stop.owl.autoplay");
            $(this).trigger("play.owl.autoplay", [auto_value]);
          });
        });

        if (!$("#pcw-" + portfolioItemID + " .close-icon").length) {
          $("#pcw-" + portfolioItemID).prepend(
            '<div class="close-icon"></div>'
          );
        }

        $("html, body").animate(
          { scrollTop: $("#portfolio-wrapper").offset().top },
          400
        );
        setTimeout(function () {
          $("#pcw-" + portfolioItemID).imagesLoaded(function () {
            skillsFill();
            $(".site-content").fitVids(); //Fit Video
            $("#portfolio-grid, .more-posts-portfolio-holder").addClass("hide");
            setTimeout(function () {
              $("#pcw-" + portfolioItemID).addClass("show");
              $(".portfolio-load-content-holder").addClass("show");
              $(".ajax-portfolio").removeClass("animate-plus");
              $("#portfolio-grid").hide();
            }, 300);
            $(".close-icon").on("click", function (e) {
              var portfolioReturnItemID = $(this)
                .closest(".portfolio-content-wrapper")
                .attr("id")
                .split("-")[1];
              $(".portfolio-load-content-holder").addClass("viceversa");
              $("#portfolio-grid, .more-posts-portfolio-holder").css(
                "display",
                "block"
              );
              setTimeout(function () {
                $("#pcw-" + portfolioReturnItemID).removeClass("show");
                $(".portfolio-load-content-holder").removeClass(
                  "viceversa show"
                );
                $("#portfolio-grid, .more-posts-portfolio-holder").removeClass(
                  "hide"
                );
              }, 300);
              setTimeout(function () {
                $("html, body").animate(
                  {
                    scrollTop: $("#p-item-" + portfolioReturnItemID).offset()
                      .top,
                  },
                  400
                );
              }, 500);
            });
          });
        }, 500);
      },
    });
    return false;
  }

  function skillsFill() {
    $(".skill-fill").each(function () {
      $(this).width($(this).data("fill"));
    });
  }

  function fixForMenu() {
    $(".header-holder").sticky({ topSpacing: 0 });
  }

  function singlePostStickyInfo() {
    $(".single-post .entry-info").stick_in_parent({
      offset_top: 120,
      parent: ".single-content-wrapper",
      spacer: ".sticky-spacer",
    });
  }

  function slowScroll() {
    $(
      '#header-main-menu ul li a[href^="#"], a.button, a.button-dot, .slow-scroll'
    ).on("click", function (e) {
      if ($(this).attr("href") === "#") {
        e.preventDefault();
      } else {
        if ($(window).width() < 1024) {
          if (!$(e.target).is(".sub-arrow")) {
            $("html, body").animate(
              { scrollTop: $(this.hash).offset().top - 76 },
              1500
            );
            $(".menu-holder").removeClass("show");
            $("#toggle").removeClass("on");
            return false;
          }
        } else {
          $("html, body").animate(
            { scrollTop: $(this.hash).offset().top - 76 },
            1500
          );
          return false;
        }
      }
    });
  }

  function logoClickFix() {
    $(".header-logo").on("click", function (e) {
      if ($(".page-template-onepage").length) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500);
      }
    });
  }

  function placeholderShowHide() {
    $("input, textarea").on("focus", function () {
      $(this).data("placeholder", $(this).attr("placeholder"));
      $(this).attr("placeholder", "");
    });
    $("input, textarea").on("blur", function () {
      $(this).attr("placeholder", $(this).data("placeholder"));
    });
  }

  function fitVideo() {
    $(".site-content, .portfolio-item-wrapper").fitVids({
      ignore: ".wp-block-embed__wrapper",
    });
  }

  function hashFix() {
    var hash = location.hash;
    if (hash != "" && $(hash).length) {
      $("html, body").animate({ scrollTop: $(hash).offset().top - 77 }, 1);
    }
  }

  function firstSectionActiveFix() {
    $(window).scrollTop(1);
    $(window).scrollTop(0);
  }

  function setMenu() {
    $(".main-menu").smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8,
      markCurrentTree: true,
    });
    var $mainMenu = $(".main-menu")
      .on("click", "span.sub-arrow", function (e) {
        var obj = $mainMenu.data("smartmenus");
        if (obj.isCollapsible()) {
          var $item = $(this).parent(),
            $sub = $item.parent().dataSM("sub");
          $sub.dataSM("arrowClicked", true);
        }
      })
      .bind({
        "beforeshow.smapi": function (e, menu) {
          var obj = $mainMenu.data("smartmenus");
          if (obj.isCollapsible()) {
            var $menu = $(menu);
            if (!$menu.dataSM("arrowClicked")) {
              return false;
            }
            $menu.removeDataSM("arrowClicked");
          }
        },
      });
  }

  function isValidEmailAddress(emailAddress) {
    var pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  function SendMail() {
    $('.contact-form [type="submit"]').on("click", function () {
      var emailVal = $("#contact-email").val();
      if (isValidEmailAddress(emailVal)) {
        var params = {
          action: "SendMessage",
          name: $("#name").val(),
          email: $("#contact-email").val(),
          subject: $("#subject").val(),
          message: $("#message").val(),
        };
        $.ajax({
          type: "POST",
          url: "php/sendMail.php",
          data: params,
          success: function (response) {
            if (response) {
              var responseObj = $.parseJSON(response);
              if (responseObj.ResponseData) {
                alert(responseObj.ResponseData);
              }
            }
          },
          error: function (xhr, ajaxOptions, thrownError) {
            //xhr.status : 404, 303, 501...
            var error = null;
            switch (xhr.status) {
              case "301":
                error = "Redirection Error!";
                break;
              case "307":
                error = "Error, temporary server redirection!";
                break;
              case "400":
                error = "Bad request!";
                break;
              case "404":
                error = "Page not found!";
                break;
              case "500":
                error = "Server is currently unavailable!";
                break;
              default:
                error = "Unespected error, please try again later.";
            }
            if (error) {
              alert(error);
            }
          },
        });
      } else {
        alert("Your email is not in valid format");
      }
    });
  }
})(jQuery);

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
  FPS = 60, // Frames per second
  x = 36, // Number of stars
  mouse = {
    x: 0,
    y: 0,
  }; // mouse location

if (canvas.width > 680) {
  x = 100;
}

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 2,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if (distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.15;
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function distance(point1, point2) {
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

// Modal
(function () {
  var $content = $(".modal_info").detach();

  $(".open_button").on("click", function (e) {
    modal.open({
      content: $content,
    });
    $content.addClass("modal_content");
    $(".modal, .modal_overlay").addClass("display");
    $(".open_button").addClass("load");
  });
})();

var modal = (function () {
  var $close = $(
    '<button role="button" class="modal_close" title="Close"><span></span></button>'
  );
  var $content = $('<div class="modal_content"/>');
  var $modal = $('<div class="modal"/>');
  var $window = $(window);

  $modal.append($content, $close);

  $close.on("click", function (e) {
    $(".modal, .modal_overlay").addClass("conceal");
    $(".modal, .modal_overlay").removeClass("display");
    $(".open_button").removeClass("load");
    e.preventDefault();
    modal.close();
  });

  return {
    center: function () {
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({
        top: top + $window.scrollTop(),
        left: left + $window.scrollLeft(),
      });
    },
    open: function (settings) {
      $content.empty().append(settings.content);

      $modal
        .css({
          width: settings.width || "auto",
          height: settings.height || "auto",
        })
        .appendTo("body");

      if (!$(".modal_overlay").length) {
        $('<div class="modal_overlay"/>').appendTo("body");
      }

      modal.center();
      $(window).on("resize", modal.center);
    },
    close: function () {
      $content.empty();
      $modal.detach();
      $(".modal_overlay").detach();
      $(window).off("resize", modal.center);
    },
  };
})();

$(document).ready(function () {
  // When a file is selected
  $("#resume").change(function () {
    var fileName = $(this).val().split("\\").pop(); // Getting only the file name
    $("#file-name").text(fileName !== "" ? fileName : "No file selected");
  });
});

function applyTransformations() {
  $(".small-card:nth-child(4)").css("transform", "translate(120%, -160%)");
  $(".small-card:nth-child(5)").css("transform", "translate(120%, 50%)");
  $(".small-card:nth-child(2)").css("transform", "translate(-230%, 50%)");
  $(".small-card:nth-child(3)").css("transform", "translate(-230%, -150%)");
  $(".small-card:nth-child(6)").css("transform", "translate(-50%, -250%)");
  $(".small-card:nth-child(7)").css("transform", "translate(-50%, 150%)");
}

function removeTransformations() {
  $(".small-card:nth-child(4)").css("transform", "translate(-50%, -50%)");
  $(".small-card:nth-child(5)").css("transform", "translate(-50%, -50%)");
  $(".small-card:nth-child(2)").css("transform", "translate(-50%, -50%)");
  $(".small-card:nth-child(3)").css("transform", "translate(-50%, -50%)");
  $(".small-card:nth-child(6)").css("transform", "translate(-50%, -50%)");
  $(".small-card:nth-child(7)").css("transform", "translate(-50%, -50%)");
}

var s1 = null;
var s2 = null;
var s3 = null;

function addoffset(id) {
  var animationDuration = $(window).width() > 1000 ? 1000 : 100; // Check window height
  var windowsize=$(window).width();
  var offset=windowsize>=700?530:220;

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    animationDuration // Use the determined animation duration
  );
}

function addFadeIn() {
  $("#SERVICES-HOLDER").css("opacity", "1");
}

function addFadeOut() {
  $("#SERVICES-HOLDER").css("opacity", "0");
}

$(document).ready(function () {
  $("#SERVICE-1").hide();
  $("#SERVICE-2").hide();
  $("#SERVICE-3").hide();
  $("#TEAM-HOLDER").hide();
  $("#SERVICES-HOLDER").hide();

  $("#loadPage1").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    $("#main-content-service").hide();
    $("#SERVICES-HOLDER").show();
    $("#SERVICE-1").show();
    addFadeIn();
   
    addoffset("#SERVICE-1");
    s1 = $(window).scrollTop();
    applyTransformations();

    $("#services").hide();
  });

  $("#loadPage2").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    $("#main-content-service").hide();
    $("#SERVICES-HOLDER").show();
    $("#SERVICE-2").show();
    addFadeIn();
    addoffset("#SERVICE-2");
    s2 = $(window).scrollTop();
    applyTransformations();
    $("#services").hide();
  });

  $("#loadPage3").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    $("#main-content-service").hide();
    $("#SERVICES-HOLDER").show();
    $("#SERVICE-3").show();
    addFadeIn();
    addoffset("#SERVICE-3");
    s3 = $(window).scrollTop();
    applyTransformations();
    $("#services").hide();
  });

  $("#loadteam").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of anchor tags

    $("#team").hide();
    $("#TEAM-HOLDER").show();
    console.log("hello");
    $("#TEAM-CARDS").css("opacity", "1");
    $("html, body").animate(
      {
        scrollTop: $("#TEAM-HOLDER").offset().top - 100,
      },
      100
    );
  });

  $("#loadteam2").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of anchor tags

    $("#team").hide();
    $("#TEAM-HOLDER").show();
    console.log("hello");
    $("#TEAM-CARDS").css("opacity", "1");
    $("html, body").animate(
      {
        scrollTop: $("#TEAM-HOLDER").offset().top - 40,
      },
      100
    );
  });
});

$(document).on("click", "#backButton", function () {
  addFadeOut();
  $("#SERVICE-1").hide();
  $("#SERVICE-2").hide();
  $("#SERVICE-3").hide();
  $("#SERVICES-HOLDER").hide();
  removeTransformations();
  $("#services").show();
  $("#main-content-service").show();

  // $("html, body").animate(
  //   {
  //     scrollTop: $("#services_section").offset().top,
  //   },
  //   1000
  // );

  // Retrieve scroll position for the corresponding card
  var targetCard = $(this).data("target"); // Assuming you have data-target attribute set for each Go Back button
  var animationDuration = $(window).width() > 1000 ? 1000 : 50;

  // Animate scroll to the stored position
  if (animationDuration >= 1000) {
    console.log("hello");
    $("html, body").animate(
      {
        
        scrollTop: $("#main-content-service").offset().top-275,
      },
      100
    );
  } else if (targetCard == "SERVICE-1") {
    $("html, body").animate(
      {
        scrollTop: s1,
      },
      animationDuration
    );
  } else if (targetCard == "SERVICE-2") {
    $("html, body").animate(
      {
        scrollTop: s2,
      },
      animationDuration
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: s3,
      },
      animationDuration
    );
  }

  //   $("#services_section").css("padding-top", "200px");
});

$(document).on("click", "#team-back-button", function () {
  $("#TEAM-CARDS").css("opacity", "0");
  $("#TEAM-HOLDER").hide();

  $("#team").show();

  $("html, body").animate(
    {
      scrollTop: $("#team").offset().top,
    },
    1000
  );
});


// hover effect for services cards
$(document).ready(function() {
  $('service-holder').hover(function() {
      $('arrow-image').addClass('arrow-hover');
  }, function() {
      $('arrow-image').removeClass('arrow-hover');
  });
});


//code to refresh the screen to set canvas width
$(document).ready(function() {
  var initialWidth = $(window).width();

  $(window).resize(function() {
      var currentWidth = $(window).width();
      if (Math.abs(currentWidth - initialWidth) > 250) {
          location.reload();
      }
  });
});