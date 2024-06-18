// FUNCTION NAV
var nav = (function () {
  var functions = {
    menu_toggle: function () {
      // Alternar visibilidade com animação
      if ($(".top-menu-content__open").is(":visible")) {
        $(".top-menu-content__open").fadeOut(300, function () {
          $(".top-menu-content__close").fadeIn(300);
        });
      } else {
        $(".top-menu-content__close").fadeOut(300, function () {
          $(".top-menu-content__open").fadeIn(300);
        });
      }
    },

    animate_circles: function () {
      // Adicionar uma pequena animação de escala aos círculos ao clicar
      $(".top-menu-content__circle").on("click", function () {
        $(this).css("transform", "scale(1.1)");
        setTimeout(() => {
          $(this).css("transform", "scale(1)");
        }, 300);
      });
    },
  };

  return {
    plugins: function () {
      $(document).ready(function () {
        $(".top-menu").click(function (e) {
          e.preventDefault();
          functions.menu_toggle();
        });

        functions.animate_circles();

        $(".top-menu-legend").empty().append('<span class="typing"></span>');
        setTimeout(() => {
          $(".typing").text(function () {
            return $(this).closest(".top-menu-legend").hasClass("close")
              ? "Fechar"
              : "Menu";
          });
        }, 10);
      });
    },

    // Init nav
    init: function () {
      this.plugins();
    },
  };
})();

// Init object
nav.init();
