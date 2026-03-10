var modalNav = (function () {
  var functions = {
    open_modal: function (selector) {
      $(selector).removeClass("close").addClass("open");
      gsap.fromTo(
        selector,
        { scale: 0 },
        { duration: 0.5, scale: 1, display: "block", opacity: 1 }
      );
      functions.update_menu_text(true);
    },
    close_modal: function (selector) {
      $(selector).removeClass("open").addClass("close");
      gsap.to(selector, {
        duration: 0.2, // Fechamento mais rápido
        scale: 0,
        display: "none",
        opacity: 0,
      });
      functions.update_menu_text(false);
    },
    toggle_modal: function (selector) {
      if ($(selector).hasClass("open")) {
        this.close_modal(selector);
        this.check_and_show_home(); // Verifica se alguma seção está aberta, senão mostra a home
      } else {
        this.open_modal(selector);
        this.close_open_sections(); // Fecha qualquer seção aberta ao abrir o modal
        this.hide_home(); // Oculta a home ao abrir o modal
      }
    },
    update_menu_text: function (isOpen) {
      var text = isOpen ? "Fechar" : "Menu";
      var legend = $(".top-menu-legend");
      var legendClose = $(".top-menu-content__close");
      var legendOpen = $(".top-menu-content__open");
      gsap.to(legend, {
        duration: 0.2,
        opacity: 0,
        onComplete: function () {
          gsap.to(legend.text(text), { duration: 0.2, opacity: 1 });
          gsap.to(legendOpen.css("display", isOpen ? "none" : "grid"), { duration: 0.5, opacity: 1 });
          gsap.to(legendClose.css("display", isOpen ? "block" : "none"), { duration: 0.5, opacity: 1 });
        },
      });
    },
    openSection: function (sectionId, effect) {
      // Esconde todas as seções
      $('.section').hide();

      // Aplica o efeito de abertura à seção selecionada
      switch (effect) {
        case 'slide':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, x: 100 }, 
            { duration: 0.5, opacity: 1, x: 0, display: 'block' }
          );
          break;
        case 'fade':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0 }, 
            { duration: 0.5, opacity: 1, display: 'block' }
          );
          break;
        case 'zoom':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, scale: 0.5 }, 
            { duration: 0.5, opacity: 1, scale: 1, display: 'block' }
          );
          break;
        case 'rotate':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, rotation: -180 }, 
            { duration: 0.5, opacity: 1, rotation: 0, display: 'block' }
          );
          break;
        case 'flip':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, rotationY: 180 }, 
            { duration: 0.5, opacity: 1, rotationY: 0, display: 'block' }
          );
          break;
        case 'skew':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, skewX: 30 }, 
            { duration: 0.5, opacity: 1, skewX: 0, display: 'block' }
          );
          break;
        case 'scale-rotate':
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, scale: 0.5, rotation: -180 }, 
            { duration: 0.5, opacity: 1, scale: 1, rotation: 0, display: 'block' }
          );
          break;
        default:
          // Default effect (slide in)
          gsap.fromTo(`#${sectionId}`, 
            { opacity: 0, x: 100 }, 
            { duration: 0.5, opacity: 1, x: 0, display: 'block' }
          );
          break;
      }

      // Oculta a home
      gsap.to(".home", {
        duration: 0.5,
        opacity: 0,
        scale: 0.9,
        onComplete: function () {
          $(".home").hide();
        },
      });
    },
    close_open_sections: function() {
      // Fecha qualquer seção aberta
      $('.section').each(function() {
        if ($(this).css('display') === 'block') {
          gsap.to(this, {
            duration: 0.2, // Fechamento mais rápido
            opacity: 0,
            display: 'none'
          });
        }
      });
    },
    hide_home: function() {
      gsap.to(".home", {
        duration: 0.2, // Fechamento mais rápido
        opacity: 0,
        scale: 0.9,
        onComplete: function () {
          $(".home").hide();
        },
      });
    },
    show_home: function() {
      $(".home").show();
      gsap.to(".home", {
        duration: 0.5,
        opacity: 1,
        scale: 1
      });
    },
    check_and_show_home: function() {
      // Verifica se alguma seção está visível, se não, mostra a home
      var anySectionVisible = false;
      $('.section').each(function() {
        if ($(this).css('display') === 'block') {
          anySectionVisible = true;
        }
      });
      if (!anySectionVisible) {
        this.show_home();
      }
    }
  };

  return {
    plugins: function () {
      $(document).ready(function () {
        $(".top-menu").click(function (e) {
          e.preventDefault();
          functions.toggle_modal(".modal");
        });

        $(".close-modal").click(function () {
          functions.close_modal(".modal");
        });

        // Evento de clique nos itens do menu
        $('.modal-nav__btn-nav').click(function () {
          var sectionId = $(this).attr('data-section'); // Obtém o ID da seção correspondente do atributo data-section
          var effect = $(this).attr('data-effect'); // Obtém o efeito de abertura desejado
          functions.openSection(sectionId, effect);
          functions.close_modal(".modal");
        });
      });
    },
    init: function () {
      this.plugins();
      // Garante que a home seja exibida inicialmente
      functions.show_home();
    },
  };
})();

modalNav.init();
