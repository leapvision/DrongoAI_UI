!(function (t) {
  "use strict";
  function o() {
    t(".blog-holder .blog-item-holder.has-post-thumbnail").each(function () {
      t(this).find(".post-thumbnail").height() >
        t(this).find(".entry-holder").innerHeight() + 80 &&
        (t(this).addClass("is-smaller"),
        t(this)
          .find(".post-thumbnail img")
          .height(t(this).find(".entry-holder").innerHeight() + 80));
    });
  }
  function e() {
    var o = null;
    t(".section").each(function () {
      var e = t(this).attr("id");
      t("#" + e).is("*") &&
        t(window).scrollTop() >= t("#" + e).offset().top - 115 &&
        (o = e);
    }),
      t("#header-main-menu ul li")
        .removeClass("active")
        .find('a[href*="#' + o + '"]')
        .parent()
        .addClass("active");
  }
  function a() {
    t(window).width() < 1e3
      ? t(".member-right").each(function () {
          t(this).hasClass("small-screen") ||
            t(this)
              .addClass("small-screen")
              .removeClass("big-screen")
              .find("img")
              .insertBefore(t(this).find(".member-info"));
        })
      : t(".member-right").each(function () {
          t(this).hasClass("big-screen") ||
            t(this)
              .addClass("big-screen")
              .removeClass("small-screen")
              .find(".member-info")
              .insertBefore(t(this).find("img"));
        });
  }
  t(".tooltip").tipper({ direction: "top", follow: !0 }),
    ("" != t(".footer-content").html().replace(/\s/g, "") &&
      '<divclass="footer-logo-divider"></div><divclass="footer-social-divider"></div>' !=
        t(".footer-content").html().replace(/\s/g, "")) ||
      t(".footer").addClass("hidden"),
    o(),
    a(),
    portfolioItemContentLoadOnClick(),
    t(".latest-posts-background-featured-image-holder").each(function () {
      t(this).css(
        "background-image",
        "url(" + t(this).data("background-image") + ")"
      );
    }),
    t(".skill-fill").each(function () {
      t(this).width(t(this).data("fill"));
    }),
    t(".header-holder").sticky({ topSpacing: 0 }),
    t(".single-post .entry-info").stick_in_parent({
      offset_top: 120,
      parent: ".single-content-wrapper",
      spacer: ".sticky-spacer",
    }),
    t(
      '#header-main-menu ul li a[href^="#"], a.button, a.button-dot, .slow-scroll'
    ).on("click", function (o) {
      if ("#" === t(this).attr("href")) o.preventDefault();
      else {
        if (!(t(window).width() < 1024))
          return (
            t("html, body").animate(
              { scrollTop: t(this.hash).offset().top - 76 },
              1500
            ),
            !1
          );
        if (!t(o.target).is(".sub-arrow"))
          return (
            t("html, body").animate(
              { scrollTop: t(this.hash).offset().top - 76 },
              1500
            ),
            t(".menu-holder").removeClass("show"),
            t("#toggle").removeClass("on"),
            !1
          );
      }
    }),
    t(".header-logo").on("click", function (o) {
      t(".page-template-onepage").length &&
        (o.preventDefault(), t("html, body").animate({ scrollTop: 0 }, 1500));
    }),
    t("input, textarea").on("focus", function () {
      t(this).data("placeholder", t(this).attr("placeholder")),
        t(this).attr("placeholder", "");
    }),
    t("input, textarea").on("blur", function () {
      t(this).attr("placeholder", t(this).data("placeholder"));
    }),
    t(".site-content, .portfolio-item-wrapper").fitVids({
      ignore: ".wp-block-embed__wrapper",
    }),
    t(window).scrollTop(1),
    t(window).scrollTop(0),
    (function () {
      t(".main-menu").smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentTree: !0,
      });
      var o = t(".main-menu")
        .on("click", "span.sub-arrow", function (e) {
          o.data("smartmenus").isCollapsible() &&
            t(this).parent().parent().dataSM("sub").dataSM("arrowClicked", !0);
        })
        .bind({
          "beforeshow.smapi": function (e, a) {
            if (o.data("smartmenus").isCollapsible()) {
              var n = t(a);
              if (!n.dataSM("arrowClicked")) return !1;
              n.removeDataSM("arrowClicked");
            }
          },
        });
    })(),
    t("#toggle").on("click", function o() {
      t("#toggle").off("click"),
        t("#toggle").toggleClass("on"),
        t("#toggle").hasClass("on")
          ? (t(".menu-holder").addClass("show"), t("#toggle").on("click", o))
          : (t(".menu-holder").removeClass("show"),
            t("#toggle").on("click", o));
    }),
    t(window).on("load", function () {
      var o;
      t(".grid").isotope({
        itemSelector: ".grid-item",
        masonry: { columnWidth: ".grid-sizer" },
      }),
        t("[data-jarallax-element]").jarallax({ speed: 0.2 }),
        "" != (o = location.hash) &&
          t(o).length &&
          t("html, body").animate({ scrollTop: t(o).offset().top - 77 }, 1),
        t(".doc-loader").fadeOut(600);
    }),
    t(window).on("resize", function () {
      o(), e(), a();
    }),
    t(window).on("scroll", function () {
      e();
    });
})(jQuery),
  (function () {
    var t = $(".modal_info").detach();
    $(".open_button").on("click", function (o) {
      modal.open({ content: t }),
        t.addClass("modal_content"),
        $(".modal, .modal_overlay").addClass("display"),
        $(".open_button").addClass("load"),
        $("#hiringForm").submit(function (t) {
          t.preventDefault(),
            $("#form-submit").prop("disabled", !0).val("Submitting...");
          var o = new FormData(this);
          $.ajax({
            url: this.action,
            type: "POST",
            data: o,
            processData: !1,
            contentType: !1,
            success: function (t) {
              alert("Form submitted"),
                $("#form-submit").prop("disabled", !1).val("APPLY"),
                $("#hiringForm")[0].reset();
            },
            error: function () {
              alert("Error occurred while submitting the form."),
                $("#form-submit").prop("disabled", !1).val("APPLY");
            },
          });
        });
    });
  })();
var modal = (function () {
  var t = $(
      '<button role="button" class="modal_close" title="Close"><span></span></button>'
    ),
    o = $('<div class="modal_content"/>'),
    e = $('<div class="modal"/>'),
    a = $(window);
  return (
    e.append(o, t),
    t.on("click", function (t) {
      $(".modal, .modal_overlay").addClass("conceal"),
        $(".modal, .modal_overlay").removeClass("display"),
        $(".open_button").removeClass("load"),
        t.preventDefault(),
        modal.close();
    }),
    {
      center: function () {
        var t = Math.max(a.height() - e.outerHeight(), 0) / 2,
          o = Math.max(a.width() - e.outerWidth(), 0) / 2;
        e.css({
          top: t + a.scrollTop(),
          left: $(window).width() < 780 ? "-15px" : o + a.scrollLeft(),
        });
      },
      open: function (t) {
        o.empty().append(t.content),
          e
            .css({
              width: $(window).width() > 1e3 ? "30%" : "80%",
              height: t.height || "auto",
            })
            .appendTo("body"),
          $(".modal_overlay").length ||
            $('<div class="modal_overlay"/>').appendTo("body"),
          modal.center(),
          $(window).on("resize", modal.center);
      },
      close: function () {
        o.empty(),
          e.detach(),
          $(".modal_overlay").detach(),
          $(window).off("resize", modal.center);
      },
    }
  );
})();
function applyTransformations() {
  $(".small-card:nth-child(4)").css("transform", "translate(120%, -160%)"),
    $(".small-card:nth-child(5)").css("transform", "translate(120%, 50%)"),
    $(".small-card:nth-child(2)").css("transform", "translate(-230%, 50%)"),
    $(".small-card:nth-child(3)").css("transform", "translate(-230%, -150%)"),
    $(".small-card:nth-child(6)").css("transform", "translate(-50%, -250%)"),
    $(".small-card:nth-child(7)").css("transform", "translate(-50%, 150%)");
}
function removeTransformations() {
  $(".small-card:nth-child(4)").css("transform", "translate(-50%, -50%)"),
    $(".small-card:nth-child(5)").css("transform", "translate(-50%, -50%)"),
    $(".small-card:nth-child(2)").css("transform", "translate(-50%, -50%)"),
    $(".small-card:nth-child(3)").css("transform", "translate(-50%, -50%)"),
    $(".small-card:nth-child(6)").css("transform", "translate(-50%, -50%)"),
    $(".small-card:nth-child(7)").css("transform", "translate(-50%, -50%)");
}
var s1 = null,
  s2 = null,
  s3 = null,
  p1 = null,
  p2 = null,
  p3 = null,
  p4 = null;
function addoffset(t) {
  var o = $(window).width() >= 700 ? 450 : 200;
  $("html, body").scrollTop($(t).offset().top - o);
}
function addFadeIn() {
  $("#SERVICES-HOLDER").css("opacity", "1");
}
function addFadeOut() {
  $("#SERVICES-HOLDER").css("opacity", "0");
}
$(document).ready(function () {
  $("#SERVICE-1").hide(),
    $("#SERVICE-2").hide(),
    $("#SERVICE-3").hide(),
    $("#TEAM-HOLDER").hide(),
    $("#SERVICES-HOLDER").hide(),
    $("#loadPage1").click(function (t) {
      t.preventDefault(),
        (s1 = $(window).scrollTop()),
        $("#main-content-service").hide(),
        $("#SERVICES-HOLDER").show(),
        $("#SERVICE-1").show(),
        addFadeIn(),
        addoffset("#SERVICE-1"),
        applyTransformations(),
        $("#services").hide();
    }),
    $("#loadPage2").click(function (t) {
      t.preventDefault(),
        (s2 = $(window).scrollTop()),
        $("#main-content-service").hide(),
        $("#SERVICES-HOLDER").show(),
        $("#SERVICE-2").show(),
        addFadeIn(),
        addoffset("#SERVICE-2"),
        applyTransformations(),
        $("#services").hide();
    }),
    $("#loadPage3").click(function (t) {
      t.preventDefault(),
        (s3 = $(window).scrollTop()),
        $("#main-content-service").hide(),
        $("#SERVICES-HOLDER").show(),
        $("#SERVICE-3").show(),
        addFadeIn(),
        addoffset("#SERVICE-3"),
        applyTransformations(),
        $("#services").hide();
    }),
    $("#loadteam").click(function (t) {
      t.preventDefault(),
        $("#team").hide(),
        $("#TEAM-HOLDER").show(),
        $("#TEAM-CARDS").css("opacity", "1");
    }),
    $("#loadteam2").click(function (t) {
      t.preventDefault(),
        $("#team").hide(),
        $("#TEAM-CARDS").css("opacity", "1"),
        $("#TEAM-HOLDER").show();
    });
}),
  $(document).on("click", "#backButton", function () {
    addFadeOut(),
      $("#SERVICE-1").hide(),
      $("#SERVICE-2").hide(),
      $("#SERVICE-3").hide(),
      $("#SERVICES-HOLDER").hide(),
      removeTransformations(),
      $("#services").show(),
      $("#main-content-service").show();
    var t = $(this).data("target");
    ($(window).width() > 1e3 ? 400 : 50) >= 400
      ? $("html, body").scrollTop($("#main-content-service").offset().top - 270)
      : "SERVICE-1" == t
      ? $("html, body").scrollTop(s1)
      : "SERVICE-2" == t
      ? $("html, body").scrollTop(s2)
      : $("html, body").scrollTop(s3);
  }),
  $(document).on("click", "#team-back-button", function () {
    $("#TEAM-CARDS").css("opacity", "0"),
      $("#TEAM-HOLDER").hide(),
      $("#team").show(),
      $("html, body").scrollTop($("#team").offset().top - 75);
  }),
  $(document).ready(function () {
    $("service-holder").hover(
      function () {
        $("arrow-image").addClass("arrow-hover");
      },
      function () {
        $("arrow-image").removeClass("arrow-hover");
      }
    );
  }),
  $(document).ready(function () {
    var t = $(window).width();
    $(window).resize(function () {
      var o = $(window).width();
      Math.abs(o - t) > 250 && location.reload();
    });
  });
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");
(canvas.width = window.innerWidth), (canvas.height = window.innerHeight);
var stars = [],
  FPS = 60,
  x = 26,
  mouse = { x: 0, y: 0 };
canvas.width > 680 && (x = 100);
for (var i = 0; i < x; i++)
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 1 * Math.random() + 2,
    vx: Math.floor(50 * Math.random()) - 25,
    vy: Math.floor(50 * Math.random()) - 25,
  });
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height),
    (ctx.globalCompositeOperation = "lighter");
  for (var t = 0, o = stars.length; t < o; t++) {
    var e = stars[t];
    (ctx.fillStyle = "#fff"),
      ctx.beginPath(),
      ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
      ctx.fill(),
      (ctx.fillStyle = "black"),
      ctx.stroke();
  }
  ctx.beginPath();
  for (t = 0, o = stars.length; t < o; t++) {
    var a = stars[t];
    ctx.moveTo(a.x, a.y),
      distance(mouse, a) < 150 && ctx.lineTo(mouse.x, mouse.y);
    var n = 0;
    for (o = stars.length; n < o; n++) {
      var i = stars[n];
      distance(a, i) < 150 && ctx.lineTo(i.x, i.y);
    }
  }
  (ctx.lineWidth = (window.innerWidth, 0.15)),
    (ctx.strokeStyle = "white"),
    (ctx.imageSmoothingEnabled = !0),
    ctx.stroke();
}
function distance(t, o) {
  var e = 0,
    a = 0;
  return (e = o.x - t.x), (e *= e), (a = o.y - t.y), (a *= a), Math.sqrt(e + a);
}
function update() {
  for (var t = 0, o = stars.length; t < o; t++) {
    var e = stars[t];
    (e.x += e.vx / FPS),
      (e.y += e.vy / FPS),
      (e.x < 0 || e.x > canvas.width) && (e.vx = -e.vx),
      (e.y < 0 || e.y > canvas.height) && (e.vy = -e.vy);
  }
}
function tick() {
  draw(), update(), requestAnimationFrame(tick);
}
canvas.addEventListener("mousemove", function (t) {
  (mouse.x = t.clientX), (mouse.y = t.clientY);
}),
  tick();
var divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider");
function moveDivisor() {
  divisor.style.width = slider.value + "%";
}

function portfolioItemContentLoadOnClick() {
    $(".ajax-portfolio").on("click", function (t) {
      t.preventDefault();
      var o = $(this).data("id");
      if ($("#pcw-" + o).length) {
        // Content already loaded, just show it
        $("#portfolio-grid, .more-posts-portfolio-holder").hide();
        $("#pcw-" + o).show();
        window.scrollTo({ top: $("#portfolio-wrapper").offset().top - 87, behavior: 'auto' });
      } else {
        // Load content via AJAX
        loadPortfolioItemContent(o);
      }
    });
  }
  
  function loadPortfolioItemContent(t) {
    $.ajax({
      url: $('.ajax-portfolio[data-id="' + t + '"]').attr("href"),
      type: "GET",
      success: function (o) {
        var e = $(o).find(".portfolio-item-wrapper").html();
        $(".portfolio-load-content-holder").append(
          '<div id="pcw-' +
            t +
            '" class="portfolio-content-wrapper">' +
            e +
            "</div>"
        );
        $("#pcw-" + t + " .close-icon").length ||
          $("#pcw-" + t).prepend('<div class="close-icon"></div>');
        $("#portfolio-grid, .more-posts-portfolio-holder").hide();
        $("#pcw-" + t).show();
        window.scrollTo({ top: $("#portfolio-wrapper").offset().top - 87, behavior: 'auto' });
  
        $(".close-icon").on("click", function (t) {
            console.log("close clicked");
            var o = $(this)
              .closest(".portfolio-content-wrapper")
              .attr("id")
              .split("-")[1];
            $("#pcw-" + o).remove(); // Remove the content from the DOM
            $("#portfolio-grid, .more-posts-portfolio-holder").show();
            window.scrollTo({ top: $("#p-item-" + o).offset().top - 87, behavior: 'auto' });
          });
          
      },
    });
  }
  
function skillsFill() {
  $(".skill-fill").each(function () {
    $(this).width($(this).data("fill"));
  });
}
