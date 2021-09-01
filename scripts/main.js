(function ($) {
  var main = {
    init: function () {
      // Enable Navigation
      navigation.init();

      // Dynamic labels
      dynamicLabels.init();
    },
  };

  /*
   * Navigation
   */

  var navigation = {
    navSelector: "#navigation",
    openNavSelector: "button.open",
    closeNavSelector: "button.close",

    init: function () {
      $(this.openNavSelector).click(() => {
        $(this.navSelector).addClass("open");
      });
      $(this.closeNavSelector).click(() => {
        $(this.navSelector).removeClass("open");
      });
    },
  };

  /*
   * Dynamic Labels
   */

  var dynamicLabels = {
    formSelector: ".js-dl-form",
    itemSelector: ".js-dl-item",

    init: function () {
      var _self = this;

      var fieldsObj =
        this.formSelector +
        ' input[type="text"], ' +
        this.formSelector +
        ' input[type="email"], ' +
        this.formSelector +
        ' input[type="number"], ' +
        this.formSelector +
        ' input[type="tel"], ' +
        this.formSelector +
        ' input[type="password"], ' +
        this.formSelector +
        " textarea";

      $(fieldsObj).each(function () {
        _self.setFilled(this);
      });

      $(document).on("focus", fieldsObj, function () {
        $(this).closest(_self.itemSelector).addClass("filled");
      });

      $(document).on("blur", fieldsObj, function () {
        var obj = this;
        _self.setFilled(obj);
      });

      $(document).on("change", fieldsObj, function () {
        _self.setFilled(this);
      });

      $(document).on("click", this.itemSelector, function () {
        $(this)
          .find(
            'input[type="text"], input[type="email"], input[type="number"], input[type="tel"], input[type="password"], textarea'
          )
          .focus();
      });
    },

    setFilled: function (obj) {
      if ($(obj).val() != "") {
        $(obj).closest(this.itemSelector).addClass("filled");
      } else {
        $(obj).closest(this.itemSelector).removeClass("filled");
      }
    },
  };

  $(function () {
    main.init();
  });
})(jQuery);
