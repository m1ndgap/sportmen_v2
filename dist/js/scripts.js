$(function() {
  $(window).bind('resize', function() {
      var top = ($(window).height() / 2) - ($(".fancybox-wrap").outerHeight() / 2);
      var left = ($(window).width() / 2) - ($(".fancybox-wrap").outerWidth() / 2);
      $(".fancybox-wrap").css({ top: top, left: left});
  }).trigger('resize');

  // Set placeholder on mobile
  setPlaceholderOnMobile();
  $(window).on('load resize', function() {
    setPlaceholderOnMobile();
  })

  function setPlaceholderOnMobile() {
    if ($(window).width() <= 767) {
      $('.js-set-placeholder-on-mobile').each(function() {
        var val = $(this).data('placeholder');
        $(this).attr('placeholder', val);
      });
    } else {
      $('.js-set-placeholder-on-mobile').removeAttr('placeholder');
    }
  }
  // end Set placeholder on mobile



  // Production page: toggle tech data
  $('.js-toggle-tech-content').click(function() {
    $(this).toggleClass('pctm-item__tech-cptn--opened');
    $(this).siblings('.pctm-item__tech-content').slideToggle();
  });
  // end Production page: toggle tech data


  // Customize select
  // $('.js-init-select').styler();
  // end Customize select

  // Product slider
  listenToWindowAndInitSlider();
  $(window).on('resize', function() {
    listenToWindowAndInitSlider();
  });

  function listenToWindowAndInitSlider() {
    if ($(window).width() < 768) {
      initProductSlider();
    } else {
      destroyProductSlider();
    }
  }

  function initProductSlider() {
    if (!$('.js-init-slider-on-mobile.slick-initialized').length) {
      $('.js-init-slider-on-mobile').slick({
        arrows: false,
        fade: true,
        dots: true,
        cssEase: 'linear',
        adaptiveHeight: true
      });
    }
  }

  function destroyProductSlider() {
    if ($('.js-init-slider-on-mobile.slick-initialized').length) {
      $('.js-init-slider-on-mobile.slick-initialized').slick('unslick');
    }
  }
  // Product slider --/

  // FAQ slider
  listenToWindowAndInitFaqSlider();
  $(window).on('resize', function() {
    listenToWindowAndInitFaqSlider();
  });

  function listenToWindowAndInitFaqSlider() {
    var visibleLists = [];

    $('.faq-answer').each(function() {
      if ($(this).is(':visible')) {
        var slider = $(this).find('.js-init-faq-slider');
        visibleLists.push(slider);
      }
    });

    if ($(window).width() < 768) {
      visibleLists.forEach(function(item) {
        initFaqSlider(item);
      })
    } else {
      destroyFaqSlider();
    }
  }

  function initFaqSlider(slider) {
    if (!slider.hasClass('slick-initialized') && $(window).width() < 768) {
      slider.slick({
        arrows: false,
        fade: true,
        dots: true,
        cssEase: 'linear',
        adaptiveHeight: true
      });
      console.log('slick');
      $(slider).slick('setPosition');
    }
  }

  function destroyFaqSlider(slider) {
    if (slider) {
      slider.slick('unslick');
    } else {
      $('.js-init-faq-slider.slick-initialized').slick('unslick');
    }
  }

  $('.faq-end-close').click(function() {
    var slider = $(this).parent().siblings('.faq-answer').find('.js-init-faq-slider');
    initFaqSlider(slider);
  });

  $('.faq-end-open').click(function() {
    var slider = $(this).siblings('.faq-answer').find('.js-init-faq-slider');
    setTimeout(function() {
      destroyFaqSlider(slider);
    }, 500)
  });
  // FAQ slider --/

  // Product colors

  // set interaction between desktop and mobile color blocks
  setInteractionForColors();
  $(window).on('load resize', function() {
    setInteractionForColors();
  });

  function setInteractionForColors() {
    var listOfColorGroups = [];
    $('[data-color-group]').each(function() {
      var group = $(this).data('color-group');
      if (listOfColorGroups.indexOf(group) < 0) {
        listOfColorGroups.push(group);
      }
    });

    var listOfActiveColors = [];
    $('.js-get-this-colors-list').each(function() {
      var self = $(this);

      listOfColorGroups.forEach(function(item) {
        var color = self.find($('[data-color-group="' + item + '"].active')).data('color');
        if (color) {
          listOfActiveColors.push({
            "colorGroup": item,
            "activeColor": color
          });
        }
      });
    });

    listOfActiveColors.forEach(function(item) {
      var group = item['colorGroup'];
      var color = item['activeColor'];

      setActiveColor(group, color);
    });
  }
  // set interaction between desktop and mobile color blocks --/

  $('.js-set-active-color').click(function() {
    var group = $(this).data('color-group');
    var color = $(this).data('color');

    setActiveColor(group, color);
  });

  function setActiveColor(group, color) {
    $('[data-color-group="' + group + '"]').removeClass('active');
    $('[data-color-group="' + group + '"][data-color="' + color + '"]').addClass('active');
  }
  // Product colors --/

    // user's platform detection
    if (isApple() == 'mac') {
        $('body').addClass('mac');
    }
    if (isApple() == 'ios') {
        $('body').addClass('ios');
    }

    function isApple() {
        var isMac = navigator.platform.match(/(Mac)/i);
        var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i);
        if (isMac) {
            return 'mac';
        }
        if (isIOS) {
            return 'ios';
        }

        return false;
    }
    // user's platform detection --/



  $('.js-toggle-hm-menu').click(function() {
    $('#hmMenu').slideToggle(200);
    $(this).toggleClass('collapsed');
    $('.hm-btns').toggleClass('disabled');
  });

  $('.js-toggle-dropdown').click(function() {
    $(this).toggleClass('opened');
    $(this).siblings('.hm-menu__item-dropdown').slideToggle(200);
  });

    var supports_html5_storage = function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    var getCart = function(){
        if (!supports_html5_storage()) {
            return;
        }
        return JSON.parse(localStorage['cart'] || '{}') ;
    }

    var setCart = function(cart){
        if (!supports_html5_storage()) {
            return;
        }
        cart = cart || {};
        localStorage['cart'] = JSON.stringify(cart);
    }

    var addToCart = function(article, amount, addOrSet, type) {
        // type = type || '';
        amount = amount === 0 ? amount : amount||1;
        addOrSet = addOrSet || 0;
        if (!supports_html5_storage()) {
            return;
        }

        var cart = getCart();
        cart[article] = cart[article] || {amount:0};

        if (addOrSet === 0) {
            cart[article]['amount'] = (cart[article]['amount'] || 0) + amount;
        }
        else {
            cart[article]['amount'] = amount;
        }
        if(cart[article]['amount'] > 0 ){
          cart[article].article = article;
          cart[article].title = $('p.productorder-title').text();
          cart[article].price = $('.productorder-links span.productorder-price-numbers.shown').text().replace(/ /g,'');
          cart[article].description = $('.productinfo-ttx p:not(.productinfo-title)').text();
          cart[article].color_pipe = $('.product-color-pipe li.active').data('color');
          cart[article].color_clamp = $('.product-color-clamp li.active').data('color');
          cart[article].diameter = $('div.productorder-diameter p.selected span').text();
          cart[article].cap = $('.productorder-cap.shown p.selected span').text();
          cart[article].pic = $('.productorder-left > div > img:first-of-type').attr('src');
        } else {
          delete cart[article];
        }
        console.log(cart);
        setCart(cart);

        // if (type.indexOf('clamp') == 0) {
        //     var clamps = cart.clamps || {};
        //     var item = clamps[article] || {color:7, count:0};

        //     if (addOrSet === 0) {
        //         item['count'] = (cart[article]['count'] || 0) + count;
        //     }
        //     else {
        //         item['count'] = count;
        //     }
        //     clamps[article] = item;
        //     cart.clamps = clamps;
        // }
        // else {
        //     cart[article] = cart[article] || {count:0, stainless:false};

        //     if (addOrSet === 0) {
        //         cart[article]['count'] = (cart[article]['count'] || 0) + count;
        //     }
        //     else {
        //         cart[article]['count'] = count;
        //     }

        // }
    };

    var removeFromCart = function(article, type) {
        addToCart(article,0,1, type);
    }

    var changeAmount = function(article, amount) {
        var cart = getCart();
        cart[article].amount = cart[article].amount + amount;
        setCart(cart);
    }

    var totalCount = function(){
      let total = 0;
      let sum = totalItemsSum();
      if(localStorage['cart']){
        let cartItems = JSON.parse(localStorage['cart']);
        for(i in cartItems){
          total += cartItems[i].amount;
        }
        if($('.header-cart').children('a').length == 0){
          $('.header-cart').wrapInner('<a href="/cart"></a>');
        }
        // if($('.hm-btns__btn--basket').attr('href').length == 0){
        //   $('.hm-btns__btn--basket').attr('href', '/cart');
        // }
      }
      $('.header-cart-total').text(total);
      $('.header-cart-sum').text(formatPrice(sum));
    }

    totalCount();

    /* ГЕОЛОКАЦИЯ В ШАПКЕ */
    // function init() {
    //     var geolocation = ymaps.geolocation;
    //     $(".header-contacts-city span").text(geolocation.city);
    //     // console.log(geolocation.city);
    //     // $("#geoip").css('display','block');
    // }

    // ymaps.ready(init);

    /* ПЛАВНАЯ ПРОКРУТКА ЯКОРЕЙ */
    // $('a[href^="#"]:not(.fancybox, .callopen)').click(function(){
    //   let target = $(this).attr('href');
    //   $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    //   return false;
    // });

    /* МАСКА ДЛЯ ТЕЛЕФОНОВ В ФОРМЕ */
    $("input[name='content[phone]']").mask("+9(999)999-99-99");

    /* КАРТА ТОВАРА - ПЕРЕКЛЮЧАТЕЛЬ КАРТИНОК */
    $('.productorder-left > img').click(function(){
      let index = $(this).index();
      $('.productorder-left div img').removeClass('shown');
      $('.productorder-left div img').eq($(this).index() - 1).addClass('shown');
    });

    /* КАРТА ТОВАРА - ПЕРЕКЛЮЧАТЕЛЬ ДИАМЕТРА */
    $('.productorder-diameter div').click(function(){
      $('.productorder-diameter div p').removeClass('selected');
      $(this).children('p').addClass('selected');
      let diameter = $(this).attr('id');
      $('.productorder-cap').removeClass('shown');
      let capBlock = $('#' + diameter + '-cap');
      capBlock.addClass('shown');
      capBlock.find('div p').removeClass('selected');
      capBlock.find('div[data-cap="steel"] p').addClass('selected');
      let cap = $('.productorder-cap.shown').find('p.selected').parent().data('cap');
      console.log(cap);
      $('.productorder-price-numbers').removeClass('shown');
      $('#product-price-' + diameter + '-' + cap).addClass('shown');
      $('#product-mobile-price-' + diameter + '-' + cap).addClass('shown');

    });

    /* КАРТА ТОВАРА - ПЕРЕКЛЮЧАТЕЛЬ ЗАГЛУШЕК */
    $('.productorder-cap div').click(function(){
      $('.productorder-cap div p').removeClass('selected');
      $(this).children('p').addClass('selected');
      let diameter = $(this).parent().data('diameter');
      let cap = $(this).data('cap');
      $('.productorder-price-numbers').removeClass('shown');
      $('#product-price-' + diameter + '-' + cap).addClass('shown');
      $('#product-mobile-price-' + diameter + '-' + cap).addClass('shown');
    });

    /* КАРТА ТОВАРА - ПЕРЕКЛЮЧАТЕЛЬ ЦВЕТОВ */
    $('.productorder-colors li').click(function(){
      $(this).parent().children('li').removeClass('active');
      $(this).addClass('active');
    });

    /* КАРТА ТОВАРА - ДОБАВЛЕНИЕ В КОРЗИНУ */
    $('.to-cart').click(function(){
        // var e = $(this).parents('.productorder-right');
        article = $('#product-order-article').text();
        console.log(article);
        addToCart(article, 1);
        totalCount();
         $.fancybox([
              { href : '#popup-added-to-cart' }
          ]);
        $('#popup-added-to-cart').removeClass('hidden');
        console.log(1231231);
    });

    /* КОРЗИНА - ПЕРЕХОД НА ВТОРОЙ ШАГ */
    $('#cart-go-second').click(function(){
        $(".cart-first").css("display", "none");
        $(".cart-second").css("display", "block");
    });

    /* КОРЗИНА - ИЗМЕНЕНИЕ КОЛИЧЕСТВА ТОВАРА */
    $('body').on('click', '.cart-product-plus', function(){
        let article = $(this).parents('.cart-product-data').find('.cart-product-article span').text();
        cart = getCart();
        // addToCart(article, 1);
        let amount = cart[article].amount + 1;
        let total = cart[article].price * amount;
        changeAmount(article, 1);
        $(this).parents('.cart-product-data').find('.cart-product-amount').text(amount);
        $(this).parents('.cart-product-data').find('.cart-product-price span').text(formatPrice(total));
        let total_sum = totalItemsSum();
        let total_count = totalItemsAmount();
        let discount = totalItemsDiscount();
        let sum_to_pay = total_sum - discount;
        $('.cart-product-sum-amount').text(formatPrice(total_sum));
        $('.cart-product-sum-amount-discount').text(formatPrice(discount));
        $('.cart-product-sum-to-pay, .header-cart-sum').text(formatPrice(sum_to_pay));
        $('.header-cart-total').text(total_count);
    });
    $('body').on('click', '.cart-product-minus', function(){
        let article = $(this).parents('.cart-product-data').find('.cart-product-article span').text();
        cart = getCart();
        changeAmount(article, -1);
        // console.log(cart[article].amount);
        // $(this).parents('.cart-product-data').remove();
        let amount = cart[article].amount - 1;
        let total = cart[article].price * amount;
        if (amount > 0) {
            $(this).parents('.cart-product-data').find('.cart-product-amount').text(amount);
            $(this).parents('.cart-product-data').find('.cart-product-price span').text(formatPrice(total));
        } else {
            removeFromCart(article);
            $(this).parents('.cart-product-data').remove();
        }
        let total_sum = totalItemsSum();
        let total_count = totalItemsAmount();
        let discount = totalItemsDiscount();
        let sum_to_pay = total_sum - discount;
        $('.cart-product-sum-amount').text(formatPrice(total_sum));
        $('.cart-product-sum-amount-discount').text(formatPrice(discount));
        $('.cart-product-sum-to-pay, .header-cart-sum').text(formatPrice(sum_to_pay));
        $('.header-cart-total').text(total_count);
        if(total_count == 0){
          $('.cart-product-sum-amount, .header-cart-sum').text(0);
          $('.cart-make-order').css('display', 'none');
          showAttention(total_sum);
        }
    });

    /* КОРЗИНА - УДАЛЕНИЕ СТРОКИ ТОВАРА */
    $('body').on('click', '.cart-product-delete', function(){
        $(this).parents('.cart-product-data').remove();
        let article = $(this).parents('.cart-product-data').find('.cart-product-article span').text();
        cart = getCart();
        delete cart[article];
        setCart(cart);
        let total_sum = totalItemsSum();
        let total_count = totalItemsAmount();
        let discount = totalItemsDiscount();
        let sum_to_pay = total_sum - discount;
        $('.cart-product-sum-amount').text(formatPrice(total_sum));
        $('.cart-product-sum-amount-discount').text(formatPrice(discount));
        $('.cart-product-sum-to-pay, .header-cart-sum').text(formatPrice(sum_to_pay));
        $('.header-cart-total').text(total_count);
        if(total_count == 0){
          $('.cart-product-sum-amount, .header-cart-sum').text(0);
          $('.cart-make-order').css('display', 'none');
          showAttention(total_sum);
        }
    });
    // removeFromCart(article, type);
    // $('.cart-product-plus').click(function(){
    //     let article = $(this).parents('.cart-product-data').find('.cart-product-article span').text();
    //     // cart = getCart();
    //     addToCart(article, 1);
    //     $(this).parents('.cart-product-data').find('.cart-product-amount').text(cart[article].amount);
    // });

    /* КОРЗИНА - ОТПРАВКА ЗАЯВКИ */
    $('#cart-go-third').click(function(){
      let isEmpty = true;
      let elements = [];
      $('.cart .form-field').each(function(index, element){
        isEmpty = isEmpty && !!$(this).val();
        console.log(isEmpty);
        if($(this).val().length < 1){
          $(element).addClass('form-required');
        }
        else {
          $(element).removeClass('form-required');
        }
        elements.push(element);
      });
      let email = $("#cart-form-email").val();
      if (!validateEmail(email)) {
        $("#cart-form-email").addClass('form-required');
        isEmpty = false;
      }
      else {
        $("#cart-form-email").removeClass('form-required');
      }
      if (!isEmpty) {
        return;
      }
      let cart = getCart();
      let total = 0;
      let strResult = "";
      for (i in cart) {
        let diameter = '';
        if(cart[i].diameter){
          diameter = cart[i].diameter;
        }
        if(cart[i].cap){
          cap = cart[i].cap;
        }
        if (cart[i] && cart[i]['amount']) {
            strResult += i + ' : ' + cart[i]['amount'] + 'шт, Хомуты: ' + cart[i]['color_clamp'] + ' цвет'
            + ', Стойки: ' + cart[i]['color_pipe'] + ' цвет, диаметр ' + diameter  + 'мм, заглушки ' + cap  + '; <br />  \r\n';
            total += cart[i]['amount'] * cart[i]['price'];
        }
        final_sum = Math.ceil(total * 0.95)
        $('input[name="content[items]"]').val(strResult);
        $('input[name="content[total]"]').val(final_sum);
        $('#form').submit();
        $(".cart-second").css("display", "none");
        $(".cart-third").css("display", "block");
        setCart();
        totalCount();
      }
    });

    /* ГАЛЕРЕЯ FANCYBOX */
    $('a.fancybox').fancybox({
        'transitionIn'  :   'none',
        'transitionOut' :   'none'

    });
    $(document).on('click','.fancyclose',function(){
      $.fancybox.close();
    })

    // $(".feedback-form").fancybox({
    //   helpers : {
    //       media: true
    //   },
    //   width: "100%",
    //   height: 870,
    //   autoSize: false,
    //   scrolling: false
    //   });


  /* ОБРАТНЫЙ ЗВОНОК */
    $('.callopen').click(function(){
      let place = $(this).data("place");
      $("#form-callback input[name='content[place]']").val(place);
    }).fancybox({
      href: "#callback",
      width: 782,
      height: 499,
      autoSize: false,
      padding: 0,
      margin: 0,
      wrapCSS: 'red-popup'
    });

  /* ТУЛТИПЫ */
    $(document).tooltip();

  /* FAQ */
    $('.faq_clickans').click(function(){
        $(this).prev('.faq-answer').slideUp();
        $(this).css("display", "none");
        $(this).parent().children('.faq-question').children('.faq_clickques').slideDown();
    });
    $('.faq_clickques').click(function(){
        $(this).css("display", "none");
        $(this).parent().next('.faq-answer').slideDown();
        $(this).parent().parent().children('.faq_clickans').css("display", "flex");
    });

    /* ФОРМА КУПИТЬ В ОДИН КЛИК */
    $('a#one-click').click(function(){
      let article = $('#product-order-article').text();
      let diameter = $('.productorder-diameter-mm .selected span').text();
      let cap = $('.productorder-cap.shown .productorder-cap-material .selected span').text();
      let pipe_color = $('.product-color-pipe .active').attr("data-color");
      let clamp_color = $('.product-color-clamp .active').attr("data-color");
      $('#oneclick input[name="content[items]"]').val("ЗАКАЗ В ОДИН КЛИК. Артикул: " + article + "; диаметр: " + diameter + " мм; заглушка: " + cap + "; цвет трубы: " + pipe_color + "; цвет хомутов: " + clamp_color);
    });


    $('.open-oneclick').fancybox({
      href: "#oneclick",
      width: 383,
      height: 499,
      autoSize: false,
      padding: 0,
      margin: 0,
      wrapCSS: 'red-popup'
    });

    /* СЛАЙДЕР КАЛЬКУЛЯТОРА */
    $("#slider-summ").slider({
        range: "max",
        min: 40000,
        max: 550000,
        step: 10000,
        value: 300000,
        create: function( event, ui ) {
            $(this).find('.ui-state-default').append("<div class='amount'><span>300 000</span> руб</div>");
        },
        slide: function( event, ui ) {
            $(this).find('.amount span').text(convertPrice(ui.value));
            $('#dealer_profit span').text(convertPrice(calculateProfit(ui.value, $('#slider-count').slider("option", "value"))));
      }
    });

    $("#slider-count").slider({
        range: "max",
        min: 10,
        max: 30,
        value: 20,
        create: function( event, ui ) {
            $(this).find('.ui-state-default').append("<div class='amount'>20</div>");
        },
        slide: function( event, ui ) {
            $(this).find('.amount').text(ui.value);
            $('#dealer_profit span').text(convertPrice(calculateProfit($('#slider-summ').slider("option", "value"),ui.value)));
        }
    });

  $('.js-dealers-calc').change(function(){
    let sum = $('#dealers-calc-sum').val();
    let amount = $('#dealers-calc-amount').val();
    $('#dealer_profit-mobile span').text(convertPrice(calculateProfit(sum, amount)));
  });


    /* ПРОБЕЛ В ЦЕНЕ */
    $('.format').each(function(){
        try {
            $(this).text( formatPrice( $(this).text() ) );
        }
        catch(e) {
            console.log("empty price");
        }
    });

    function calculateProfit(price, sales){
        var total = price * sales;
        if(total <= 1000000){
            var profit = total * 0.2;
        }
        else {
            var profit = total * 0.25;
        }
        return Math.round(profit);
    }
    $('#dealer_profit span').text(convertPrice(calculateProfit(300000,20)));

    function convertPrice(price){
        var price = '' + price;
        var ttl = Math.floor(price.length / 3);
        var array = [];
        for(i=1; i<= 2;i++){
            array.push(i);
        }
        var conv_price = '';
        var fdl = price.length % 3;
        var comp = 0;
        if (fdl > 0){
            conv_price += price.substr(0, fdl);
            comp = 1;
        }
        for(i in array){
            conv_price += ' ' + price.substr(array[i]*3 - 3 + fdl, array[i]*3 + fdl - comp);
        }
        return conv_price;
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});


var showCart = function(){
    var cartItems = JSON.parse(localStorage['cart']);
    var html = '';
    for (i in cartItems){
        // console.log(cartItems[i].price);
        if(cartItems[i].amount > 0){
            var total_amount = cartItems[i].price * cartItems[i].amount;
            html += '<li class="basket__item cart-product-data"><div class="basket__item-img"><img src="' + cartItems[i].pic + '" alt="" width="309" height="220"></div><div class="basket__item-text"><p class="cart-product-title">' + cartItems[i].title + '</p><p class="cart-product-article">Артикул: <span>' + cartItems[i].article + '</span></p><p>' + cartItems[i].description + '</p></div><div class="basket__item-q-n-p"><div class="basket__item-quantity"><p class="cart-table-title">Количество</p><div class="basket__buttons"><button class="cart-product-minus"></button><span class="cart-product-amount">' + cartItems[i].amount + '</span><button class="cart-product-plus"></button></div></div><div class="basket__item-price"><p class="cart-table-title">Стоимость</p><p class="cart-product-price"><span class="format">' + total_amount + '</span> руб.</p></div></div><div class="basket__item-delete"><p class="cart-table-title">Удалить</p><button class="cart-product-delete"></button></div></li>';
        }
    }
    // console.log(html);
    $('#cart-table').html(html);
    $('#cart-table .format').each(function(){
      $(this).text(formatPrice($(this).text()));
    });
}


var showAttention = function(sum){
  if(sum == 0){
    $('.cart').css('display', 'none');
    $('.cart-empty').removeClass('hidden').css('display', 'block');
  }
}

var totalItemsAmount = function(){
  let amount = 0;
  if(localStorage['cart']){
    let cartItems = JSON.parse(localStorage['cart']);
    for(i in cartItems){
      amount += cartItems[i].amount;
    }
  }
  return amount;
}
var totalItemsSum = function(){
  let sum = 0;
  if(localStorage['cart']){
    let cartItems = JSON.parse(localStorage['cart']);
    for(i in cartItems){
      sum += cartItems[i].amount * cartItems[i].price;
    }
  }
  return sum;
};
var totalItemsDiscount = function(){
  let sum = totalItemsSum();
  let discount = Math.ceil(sum * 0.05);
  return discount;
};


var formatPrice = function(price) {
    var s = price + '';
    s = s.replace(/ /g,'');
    if(s.length > 2){
      var a = s.length % 3;
      var str1 = s.substring(0,a);
      var str2 = s.substring(a);
      var arr = str2.match(/.{3}/g);
      str1 += ' ' ;
      str1 += arr.join(' ');
    } else {
      srt1 = s;
    }
    return str1;
};
