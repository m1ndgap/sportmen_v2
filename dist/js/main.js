$(window).on('beforeunload', function() {
    $.cookies.del('showPromo2k18');
});

// $(window).unload(function() {
//    $.cookies.del('showPromo2k18');
// });

$(function ($) {
        window.callbacks = [];

        window.onload = function() {
            for (var i = 0; i < this.callbacks.length; i++) {
                this.callbacks[i].call();
            }
        };

        window.myOnLoadFunction = function(KVK) {
            var button, form, data;

            window.callbacks.push(function() {
                button = document.getElementById("tinkoff");
                button.removeAttribute("disabled");
                button.onclick = function() {
                    console.log( localStorage['cart']);
                    $.ajax({
                        url: "/tinkoff.json",
                        data: { cart: localStorage['cart']},
                        dataType: 'json',
                        type: 'POST',
                        success: function(data) {
                            form = KVK.ui("form", {
                                order: data['base64'],
                                sign: data['sign'],
                                type: "full"
                            });
                        form.open();
                        },
                        failure: function() {
                            alert("Unsuccessful");
                        }
                    });
            };
        });
    }  
  
    $('html').addClass("ver_b");
    $("input[name='content[phone]']").mask("+9(999)999-99-99");

var frame = 0;
function inIframe () {
    if ( window.self !== window.top){
        $('nav, header, footer, .fixed_menu_side, .wrapper-left').css('display', 'none');
        $('.wrapper-right').css('padding-left', '0px');
        frame = 1;
    } else {
        $('.iframe').css('display', 'none');
        $('#item').css('margin', '0px auto');
    }
}

inIframe();

ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation;
    $("#geoip city").append(geolocation.city);
    console.log(geolocation.city);
    $("#geoip").css('display','block');
}


function lightingArrows(e){
    $(e).addClass('lighting').delay(1000).queue(function() {
       $(this).removeClass('lighting');
       $(this).dequeue();
   });

}
$.each($('.dealer_steps > div'), function(i, el){
    setTimeout(function(){
       setInterval(function(){
            lightingArrows(el);
        }, 5000);
    },i*1000);

});


    var clearLocal = getCookie('clearLocal') || 'none';
    var date = new Date( new Date().getTime() + 86400000 );
    console.log(clearLocal);

    if(clearLocal == 'none'){
      localStorage.clear();
      document.cookie = "clearLocal=ok; expires="+date.toUTCString()+"; path=/; domain=sportmen.ru";
    } 

    var showPromo2k18 = getCookie('showPromo2k18') || 'none';
    console.log(showPromo2k18);
    if(showPromo2k18 == 'none'){
      document.cookie = "showPromo2k18=ok; expires=0; path=/; domain=sportmen.ru";
    } else {
      $('#promo-open').css("display", "block");
      $('#promo-battle').css("display", "none");
    }






    /*var city = getCookie('city') || 'none';
    var date = new Date( new Date().getTime() + 2592000000 );
    console.log(city);

    if(city == 'none'){
        $.ajax({
            type: 'GET',
            url: '/geoip.json',
            success: function (data) {
                if(data.city != ''){
                    $("#geoip city").append(data.city);
                     document.cookie = "city=" + data.city +"; expires="+date.toUTCString()+"; path=/; domain=sportmen.ru";
                }
                else {
                    $("#geoip city").append('Москва');
                    document.cookie = "city=Москва; expires="+date.toUTCString()+"; path=/; domain=sportmen.ru";
                }
            },
            error: function(){
                $("#geoip city").append('Москва');
                document.cookie = "city=Москва; expires="+date.toUTCString()+"; path=/; domain=sportmen.ru";
            },
            complete: function(){
                $("#geoip").css('display','block');
            }
        });
    } else {
        $("#geoip city").append(city);
        $("#geoip").css('display','block');
    }*/

    $(".geoip_arrow").click(function(){
        $(".geoip_city-select").toggle();
    });

    $('.map').click(function(e) {
        //var posX = $(this).position().left,posY = $(this).position().top;
        //var dim = e.getBoundingClientRect();
        //var x = evt.clientX - dim.left;
        //var y = evt.clientY - dim.top;
        var offset = $(this).offset();

        console.log( Math.round(e.pageX - offset.left - 3) + ' - x; ' + Math.round(e.pageY - offset.top - 13) + ' - y');
    });

    $('.faq_clickans').click(function(){
        if( $(this).parent().next('.faq_answer').css('display') == 'block'){
            $(this).parent().next('.faq_answer').slideUp();
        } else {
            $('.faq_answer').slideUp()
            $(this).parent().next('.faq_answer').slideDown();
        }
    });

    //открытие подменю по клику
    /*
    $('.wrapper-left > ul > li > span').click(function(){
        if( $(this).next().css('display') == 'block'){
            $(this).parent().removeClass('green-arrow');
            $(this).next().slideUp();
        } else {
            $('.wrapper-left > ul ul').slideUp();
            $('.wrapper-left > ul li').removeClass('green-arrow');
            $(this).parent().addClass('green-arrow');
            $(this).next().slideDown();
        }
    });
    */

    // открытие меню по наведению мыши
    $('.wrapper-left > ul > li').mouseover(function(){
        $(this).children('ul').css('display', 'block');
    });
    $('.wrapper-left > ul > li').mouseout(function(){
        $(this).children('ul').css('display', 'none');
    });


    /*$('.wrapper-left > ul > li > span').mouseover(function(){
        $(this).addClass('green-arrow');
        if( $(this).next().css('display') != 'block' && $(this).next().children().attr('class') != 'active'){
            $(this).next().slideDown('slow');
        }
    });
    $('.wrapper-left > ul > li').mouseleave(function(){
        $(this).children('span').removeClass('green-arrow');
        if( $(this).children('span').next().css('display') == 'block' && $(this).find('a').hasClass('active')!= true){
            $(this).children('span').next().slideUp('slow');
        }
    });*/



    $(".geoip_city-select div").click(function(){
        var city = $(this).attr('data-ct');
        $("#geoip city").text(city);
        document.cookie = "city=" + city +"; expires="+date.toUTCString()+"; path=/; domain=sportmen.ru";
        $(".geoip_city-select").css('display', 'none');
    });

    $(document).mouseup(function (e) {
        var select = $(".geoip_city-select");
        if (!select.is(e.target) && select.css('display') == 'block') {
            select.css('display', 'none');
        }
    });

    var windowHeight = window.innerHeight;

    $('.js-tooltip').each(function(){
        var text = $(this).data('tooltip') ? $('#' +  $(this).data('tooltip') ).html() : $(this).attr('title');
        $(this).tooltipster({
            content: $(text),
            position:'right',
            maxWidth:550
        });
    });

    var formatPrice = function(price) {

        var s = price + '';
        var a = s.length % 3;
        var str1 = s.substring(0,a);
        var str2 = s.substring(a);
        var arr = str2.match(/.{3}/g);
        str1 += ' ' ;
        str1 += arr.join(' ');

        return str1;
    }
    $('.format').each(function(){
        try {
            $(this).text( formatPrice( $(this).text() ) );
        }
        catch(e) {
            console.log("empty price");
        }
    });
    var bodyClass = 'no-mobile ';
    var mobilecheck = function() {
        if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {return true;}
        return false;
    };
    var art = '';

    var body = $('body');

    if (mobilecheck()) {
        bodyClass = '';
        body.removeClass('no-mobile');
    }

    var colors = {
        1: 'серый',
        2: 'черный',
        3: 'голубой',
        4: 'красный',
        5: 'оранжевый',
        6: 'зеленый',
        7: 'Без цвета',
        8: 'желтый',
        9: 'коричневый'
    }

    var caps = {
      'steel': 'металл',
      'plastik': 'пластик'
    }

    $('#slider2 a').fancybox({
        'transitionIn'  :   'none',
        'transitionOut' :   'none'
    });

    $('a.fancybox').fancybox({
        'transitionIn'  :   'none',
        'transitionOut' :   'none'
    });
    // $('.catalog-item').click(function(){
    //     var el = $(this)/*.parents('.catalog-item ')*/;
    //     var item = $('#item');

    //     var cartItem = getCart()[el.data('art')] ||  {color1:5,color2:2,count:0,stainless:false, option1:1,option2:1};

    //     item.data('art', el.data('art'));

    //     var option = cartItem.option1 + '' + cartItem.option2;
    //     var index = option == '11' ? 'new-price' : ('price' + option);

    //     item.find('#option-' + cartItem.option1).click();
    //     item.find('#option-2' + cartItem.option2).click();
    //     item.find('.item-title').html( el.data('title') );
    //     item.find('.tech-params').html( el.data('specs') );
    //     item.find('.art .value').html( el.data('art') );
    //     item.find('.description-text').html( el.data('description') );
    //     item.find('.old-price .price').html( formatPrice(el.data('old-price')) );
    //     item.find('.new-price .price').html( formatPrice(el.data(index)) );
    //     item.find('.item-img').attr('src', el.data('img') );
    //     item.find('.colors-selector').each(function(){
    //         var colorGroup = $(this).data('colorgroup');
    //         var index = cartItem['color' + colorGroup] - 1;
    //         $($(this).find('.color').removeClass('active').get(index)).addClass('active');

    //     });

    //     /*if (!el.data('price2')) {
    //         item.find('.checkbox-container').hide();
    //     }
    //     else {
    //         item.find('.checkbox-container').data('price2', el.data('price2')).data('new-price', el.data('new-price')).show();
    //     }*/


    //     item.find('.add-to-cart').toggleClass('already-in-cart', cartItem.count > 0);
    //     item.find('.add-to-cart').toggle(!!parseInt(el.data('new-price'))); //Какого хуя?
    //     $('.add-to-cart.add-to-cart-item').css('display', 'block');
    //     /*$('#chechkbox-item').prop('checked', cartItem.stainless);*/

    // }).fancybox({
    //     'transitionIn'  :   'none',
    //     'transitionOut' :   'none',
    //     'type' : 'iframe',
    //     'width': '960px'
    // });


    var option3 = $('#option-3').parent();
    $('body').on('change', '.options-container input', function(){
        var priceContainer = $('#item .new-price .price');

        if ($(this).attr('id') == 'option-22') {
            option3.hide();
            $('#option-1').click();
        }
        else if($(this).attr('name') == 'option2') {
            option3.show();
        }


        var index = $('#item input[name="option1"]:checked').val() + '' + $('#item input[name="option2"]:checked').val();
        index = index == '11' ? 'new-price' : ('price' + index);

        var el = $('[data-art="' + $('#item .art .value').text() + '"]');

        var cartItem = getCart();
        priceContainer.text( formatPrice(el.data(index) ? el.data(index) : el.data('new-price')) );
        var cartItem = getCart()[el.data('art')];// ||  {color1:5,color2:2,count:0,stainless:false, option1:1,option2:1};
        $('#item').find('.add-to-cart').toggle(!!parseInt( priceContainer.text() ) );
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
    window.clearCart = function(){ setCart({}); calculateCartNew(); };

    var removeFromCart = function(article, type) {
        addToCart(article,0,1, type);
    }

    var addToCart = function(article, count, addOrSet, type) {
        type = type || '';
        count = count === 0 ? count : count||1;
        addOrSet = addOrSet || 0;
        if (!supports_html5_storage()) {
            return;
        }

        var cart = getCart();

        if (type.indexOf('clamp') == 0) {
            var clamps = cart.clamps || {};
            var item = clamps[article] || {color:7, count:0};

            if (addOrSet === 0) {
                item['count'] = (cart[article]['count'] || 0) + count;
            }
            else {
                item['count'] = count;
            }
            clamps[article] = item;
            cart.clamps = clamps;
        }
        else {
            cart[article] = cart[article] || {count:0, stainless:false};
            if (addOrSet === 0) {
                cart[article]['count'] = (cart[article]['count'] || 0) + count;
            }
            else {
                cart[article]['count'] = count;
            }

        }

        setCart(cart);
    };






    var calculateCart = function() {
        var cart = getCart();
        var action = $('.cart-item[data-art="action"]');
        var total = action.find('input[type="checkbox"]').prop('checked') ?  990 : 0;
        var cartHtml = '';
        var total_disc = 0;
        for(i in cart) {
            if (i) {
                var el = $('.catalog-item[data-art=' + i + ']');
                var index = cart[i].option1 +  '' + cart[i].option2;
                index = index == '11' ? 'new-price' : ('price' + index);
                console.log(el);
                console.log(el.size());
                if (el.size()) {
                    var price = el.data(index) ? el.data(index) : el.data('new-price');
                    if(cart[i].price_diameter){
                      price = cart[i].price_diameter;
                    }
                    console.log(price);
                    var disc_price = el.data('disc-price') ? el.data('disc-price') : 0;
                    total_disc += disc_price * cart[i]['count'];
                    subtotal = price * cart[i]['count'];
                    total += subtotal;
                    //<span class="subtitle">Жилет утяжелитель для workout</span>
                    var tpl = '<tr class="cart-item" data-art="' + el.data('art') + '"><td class="image"><img src="' + el.data('img-preview') + '"></td><td class="title">' +
                    '<span class="title-text">Артикул: ' + el.data('art')  + '</span><span class="subtitle">' + el.data('title') + '</span>' +
                    '</td><td class="count"><input type="text" value="' + cart[i]['count'] + '" class="form-control" > </td>' +
                    '<td class="sub-total"> <span class="price">' + formatPrice(price) + '</span> руб. </td><td class="btns"><span class="remove-item"></span></td></tr>';
                    if (cart[i]['count'] > 0) {
                        cartHtml += tpl;
                    }
                }
            }

        }
        // console.log('totals');
        console.log(total);
        console.log(total_disc);
        // console.log('totals-end');
        if (cart.clamps) {
            for(i in cart.clamps) {
                if (i) {
                    var el = $('tr[data-art=' + i + ']');
                    if (el.size()) {
                        var price = el.data('price');
                        price += (cart.clamps[i]['color']+'' == '7' ? 0 : 85);
                        subtotal = price * cart.clamps[i]['count'];
                        total += subtotal;
                        //<span class="subtitle">Жилет утяжелитель для workout</span>
                        var tpl = '<tr data-type="clamp" class="cart-item" data-art="' + el.data('art') + '"><td class="image"><img src="/sites/53f3ae6ee1a7d4c142098c84/theme/images/pic.png?1431094394"></td><td class="title">' +
                        '<span class="title-text">Артикул: ' + el.data('art')  + '</span><span class="subtitle">Хомут ' + el.data('size') + '</span>' +
                        '</td><td class="count"><input type="text" value="' + cart.clamps[i]['count'] + '" class="form-control" > </td>' +
                        '<td class="sub-total"> <span class="price">' + formatPrice(price) + '</span> руб. </td><td class="btns"><span class="remove-item"></span></td></tr>';

                        if (cart.clamps[i]['count'] > 0) {
                            cartHtml += tpl;
                        }
                    }
                }

            }

        }
    console.log(total_disc);
    var disc_sum = total_disc; //total * 0.05;

    $('.cart-table').html(cartHtml);

    if (frame == 1){
        $('.cart-table', window.parent.document).html(cartHtml);
        if(total != 0) {$('.cart .total', window.parent.document).html(formatPrice(total))};
        //$('.cart-table', window.parent.document).html(cartHtml);
        if(total != 0) {
            console.log($("iframe").contents().find('#cart .total .total-prev'));
            $('#cart .total .total-prev').html(formatPrice(total));
            if(disc_sum > 0){
                $('#cart .total .total-disc').html(formatPrice(Math.round(disc_sum)));
                $('#cart .total .total-sum').html(formatPrice(total - Math.round(disc_sum)));
            } else {
                $('#cart .total .total-disc').html(0);
                $('#cart .total .total-sum').html(formatPrice(total));
            }
    } else {
                $('#cart .total .total-prev').html(0);
            $('#cart .total .total-disc').html(0);
            $('#cart .total .total-sum').html(0);
            $('.cart .total').html(0);
    };
    }
    else {
        if(total != 0) {$('.cart .total').html(formatPrice(total))};
    }
    if(total != 0) { 
            $('#cart .total .total-prev', window.parent.document).html(formatPrice(total));
            if(disc_sum > 0){
                $('#cart .total .total-disc', window.parent.document).html(formatPrice(Math.round(disc_sum)));
                $('#cart .total .total-sum', window.parent.document).html(formatPrice(total - Math.round(disc_sum)));
            } else {
                $('#cart .total .total-disc', window.parent.document).html(0);
                $('#cart .total .total-sum', window.parent.document).html(formatPrice(total));
            }
    }
    else {
            $('#cart .total .total-prev', window.parent.document).html(0);
            $('#cart .total .total-disc', window.parent.document).html(0);
            $('#cart .total .total-sum', window.parent.document).html(0);        
            $('.cart .total', window.parent.document).html(0);        
    }
};

    var calculateCartNew = function() {
        var cart = getCart();
        var action = $('.cart-item[data-art="action"]');
        var total = action.find('input[type="checkbox"]').prop('checked') ?  990 : 0;
        var cartHtml = '';
        var total_disc = 0;
        for(i in cart) {
            if (i) {
              // console.log(i);
                var el = $('.catalog-item[data-art=' + cart[i].article + ']');
                var index = cart[i].option1 +  '' + cart[i].option2;
                index = index == '11' ? 'new-price' : ('price' + index);
                // console.log(el);
                // console.log(el.size());
                if (el.size()) {
                    var price = el.data(index) ? el.data(index) : el.data('new-price');
                    if(cart[i].price_diameter){
                      price = cart[i].price_diameter;
                    }
                    // console.log(price);
                    // disc_data = 'disc-price' + cart[i].diameter;
                    // console.log(disc_data);
                    // console.log(el.data(disc_data));
                    disc_price = cart[i].disc_price;
                    total_disc += disc_price * cart[i]['count'];
                    subtotal = price * cart[i]['count'];
                    total += subtotal;
                    let text_info = '';
                    if(cart[i].diameter){
                      text_info += cart[i].diameter;
                    }
                    if(cart[i].cap){
                      text_info += ', заглушка - ' + cart[i].cap;
                    }
                    text_info = ' (' + text_info + ')'; 
                    //<span class="subtitle">Жилет утяжелитель для workout</span>
                    var tpl = '<tr class="cart-item" data-art="' + i + '"><td class="image"><img src="' + el.data('img-preview') + '"></td><td class="title">' +
                    '<span class="title-text">Артикул: ' + el.data('art')  + '</span><span class="subtitle">' + el.data('title') + text_info + '</span>' +
                    '</td><td class="count"><input type="text" value="' + cart[i]['count'] + '" class="form-control" > </td>' +
                    '<td class="sub-total"> <span class="price">' + formatPrice(price) + '</span> руб. </td><td class="btns"><span class="remove-item"></span></td></tr>';
                    if (cart[i]['count'] > 0) {
                        cartHtml += tpl;
                    }
                }
            }

        }
        // console.log('totals');
     //    console.log(total);
     //    console.log(total_disc);
     //    // console.log('totals-end');
        if (cart.clamps) {
            for(i in cart.clamps) {
                if (i) {
                    var el = $('tr[data-art=' + i + ']');
                    if (el.size()) {
                        var price = el.data('price');
                        price += (cart.clamps[i]['color']+'' == '7' ? 0 : 85);
                        subtotal = price * cart.clamps[i]['count'];
                        total += subtotal;
                        //<span class="subtitle">Жилет утяжелитель для workout</span>
                        var tpl = '<tr data-type="clamp" class="cart-item" data-art="' + el.data('art') + '"><td class="image"><img src="/sites/53f3ae6ee1a7d4c142098c84/theme/images/pic.png?1431094394"></td><td class="title">' +
                        '<span class="title-text">Артикул: ' + el.data('art')  + '</span><span class="subtitle">Хомут ' + el.data('size') + '</span>' +
                        '</td><td class="count"><input type="text" value="' + cart.clamps[i]['count'] + '" class="form-control" > </td>' +
                        '<td class="sub-total"> <span class="price">' + formatPrice(price) + '</span> руб. </td><td class="btns"><span class="remove-item"></span></td></tr>';

                        if (cart.clamps[i]['count'] > 0) {
                            cartHtml += tpl;
                        }
                    }
                }

            }

        }
      // console.log(total_disc);
      var disc_sum = total_disc; //total * 0.05;

      $('.cart-table').html(cartHtml);

      if (frame == 1){
          $('.cart-table', window.parent.document).html(cartHtml);
          if(total != 0) {$('.cart .total', window.parent.document).html(formatPrice(total))};
          //$('.cart-table', window.parent.document).html(cartHtml);
          if(total != 0) {
              console.log($("iframe").contents().find('#cart .total .total-prev'));
              $('#cart .total .total-prev').html(formatPrice(total));
              if(disc_sum > 0){
                  $('#cart .total .total-disc').html(formatPrice(Math.round(disc_sum)));
                  $('#cart .total .total-sum').html(formatPrice(total - Math.round(disc_sum)));
              } else {
                  $('#cart .total .total-disc').html(0);
                  $('#cart .total .total-sum').html(formatPrice(total));
              }
      } else {
                  $('#cart .total .total-prev').html(0);
              $('#cart .total .total-disc').html(0);
              $('#cart .total .total-sum').html(0);
              $('.cart .total').html(0);
      };
      }
      else {
          if(total != 0) {$('.cart .total').html(formatPrice(total))};
      }
      if(total != 0) { 
              $('#cart .total .total-prev', window.parent.document).html(formatPrice(total));
              if(disc_sum > 0){
                  $('#cart .total .total-disc', window.parent.document).html(formatPrice(Math.round(disc_sum)));
                  $('#cart .total .total-sum', window.parent.document).html(formatPrice(total - Math.round(disc_sum)));
              } else {
                  $('#cart .total .total-disc', window.parent.document).html(0);
                  $('#cart .total .total-sum', window.parent.document).html(formatPrice(total));
              }
      }
      else {
              $('#cart .total .total-prev', window.parent.document).html(0);
              $('#cart .total .total-disc', window.parent.document).html(0);
              $('#cart .total .total-sum', window.parent.document).html(0);        
              $('.cart .total', window.parent.document).html(0);        
      }
  };  

calculateCartNew();

body.on('click','.remove-item', function(){
    var e = $(this).parents('.cart-item');
    var article = e.data('art');
    var type = e.data('type');
    e.remove();
    removeFromCart(article, type);
    calculateCartNew();

    return false;
});

body.on('click','.add-to-cart.add-to-cart-item', function(){
    if ($(this).hasClass('already-in-cart')) {
        return false;
    }
    $(this).addClass('already-in-cart');
    var e = $(this).parents('#item');
    article = e.find('.art .value').text();


    addToCart(article,1);
    var cart = getCart();

    //cart[article].stainless = e.find('.checkbox-container input').prop('checked');
    cart[article].option1 = e.find( 'input[name="option1"]:checked' ).val();
    cart[article].option2 = e.find( 'input[name="option2"]:checked' ).val();

    setCart(cart);

    e.find('.colors-selector, .pc-config-color').each(function(){
        var colorGroup = $(this).data
        ('colorgroup');
        cart[article]['color' + colorGroup] = parseInt($(this).find('.color.chosen').data('color'))||1;
    });
    setCart(cart);
    calculateCartNew();
    alert('Товар добавлен в корзину');
    $( '#item' ).parent().scrollTop(10000);
    return false;
});

body.on('click','.to-cart', function(){
    if ($(this).hasClass('already-in-cart')) {
        return false;
    }
    $(this).addClass('already-in-cart');
    var e = $(this).parents('.pc-data');
    art = e.find('.pc-article .value').text();
    diameter = e.find( '.pc-dpipe.chosen' ).attr('id');
    article = '';
    if(!$('.pc-cap').hasClass('.nonshown')){
      var cap = $('#' + diameter + 'cap .pc-cpipe.chosen').attr('data-cap');
      article = art + '-' + diameter + '-' + cap;
    } else {
      article = art + '-' + diameter + '-steel';
    }

    addToCart(article,1);
    var cart = getCart();

    //cart[article].stainless = e.find('.checkbox-container input').prop('checked');
    cart[article].option1 = e.find( 'input[name="option1"]:checked' ).val();
    cart[article].option2 = e.find( 'input[name="option2"]:checked' ).val();

    cart[article].diameter = diameter;

    cart[article].article = art;
    if(cap){
      console.log(cap);
      cart[article].cap = caps[cap];
    }
    else {
      cart[article].cap = caps['steel'];
    }

    cart[article].price_diameter = e.find('.pc-price-new.pc-active span').text().replace(/ /g,'');
    cart[article].disc_price = parseInt(cart[article].price_diameter) * 0.05;


    e.find('.pc-config-color').each(function(){
        var colorGroup = $(this).data('colorgroup');
        cart[article]['color' + colorGroup] = parseInt($(this).find('.color.chosen').data('color'))||1;
    });
    setCart(cart);
    console.log(cart);
    calculateCartNew();
    alert('Товар добавлен в корзину');
    $( '#item' ).parent().scrollTop(10000);
    return false;
});


body.on('click','.add-to-cart.add-clamp-to-cart', function(){

    if ($(this).hasClass('already-in-cart')) {
        return false;
    }


    $(this).addClass('already-in-cart');
    var e = $(this).parents('#clamp-item');
    var article = e.data('art');
    var type = e.data('type');


    var cart = getCart();
    var clamps = cart['clamps'] || {}
    var item = cart[article] || {count:0, color:1};
    item.count += 20;
    item.color = e.find('.color.active').data('color') || 7;
    clamps[article] = item;
    cart.clamps = clamps;
    setCart(cart);

    calculateCart();
    alert('Товар добавлен в корзину');
    $( '#clamp-item' ).parent().scrollTop(10000);
    return false;
});

body.on('click', '.colors-selector .color', function(){
    var item = $(this).parents('.colors-selector');
    item.find('.color').removeClass('active');
    $(this).addClass('active');
});


        /*body.on('keyup keydown', '#cart .user-data .form-control', function(){
            var isEmpty = true;
            $('#cart .form-control').each(function(){
                isEmpty = isEmpty && !!$(this).val();
            })
            $('.cart-order-btn').prop('disabled', !isEmpty);

        }) */
body.on('keyup', '#cart .table .form-control', function(){

    var el = $(this).parents('.cart-item');
    var art = el.data('art');
    var type = el.data('type');
    if (art != 'action') {
        var item = $('.catalog-item[data-art=' + i + ']');
        var price = item.data('new-price');

        var itemCount = ((type && type.indexOf('clamp') == 0) ? getCart()['clamps'][art] :  getCart()[art] ) || {count:0};

        if ( (itemCount.count + '') ==  $(this).val() ) {
            return;
        }

        if( $(this).val().trim() != '' ) {
            $(this).val( parseInt( $(this).val() ) || itemCount );
        }
        itemCount = parseInt($(this).val());

        addToCart(art, itemCount, 1,type||'');
    }
    else {
        if( $(this).val().trim() != '' ) {
            $(this).val( parseInt( $(this).val() ) || 0 );
        }
    }

    calculateCartNew();

            //Put cursor at the end of input
            var input = $('#cart .table .cart-item[data-art="' + art + '"] input.form-control');
            input.focus();
            var val = input.val();
            input.val('');
            input.val(val);

        });

body.on('click','.go-back', function(){
    $.fancybox.close();
    if (!!art) {
        $('.catalog-item[data-art="' + art + '"] .catalog-item-btn').click();
    }

    /*console.log(art, );*/
});

body.on('change', '#item .checkbox-container input', function(){
    var priceContainer = $('#item .new-price .price');
    var cartItem = getCart()
    priceContainer.text( $(this).parents('.checkbox-container').data( $(this).prop('checked') ? 'price2' : 'new-price' ) );
});

body.on('click', '#clamp-item .color', function(){
  console.log(1);
    var art = $('#clamp-item').data('art');
    var price = $('tr[data-art="' + art + '"]').data('price');
    $('#clamp-item .new-price .price').text( price + ($(this).data('color') == '7' ? 0 : 85) );
});

body.on('click','.cart-order-btn, .credit-btn', function(){

    var isEmpty = true;
    $('#cart .form-control').each(function(){
        isEmpty = isEmpty && !!$(this).val();
    });

    if (!isEmpty) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    var cart = getCart();
    var strResult = ""; //$(this).hasClass('credit-btn') ? 'КРЕДИТ; ' : '';
    if($(this).hasClass('credit-btn')) {
      $('input[name="content[pay_type]"]').val("card");
    }
    strResult += $('#action-checkbox').prop('checked') ? 'Жилет по акции; ' : '';

    var options1Params  =  [ '' , '89mm', '102mm', '109mm'];
    var options2Params  =  ['' ,  'Любительский', 'Профессиональный', 'Любительский нержавейка'];

    for (i in cart) {
      let diameter = '';
      if(cart[i].diameter){
        diameter = cart[i].diameter;
      }
      if(cart[i].cap){
        cap = cart[i].cap;
      }
        if (cart[i] && cart[i]['count']) {
            strResult += i + ' : ' + cart[i]['count'] + 'шт, Хомуты: ' + colors[cart[i].color1] + ' цвет'
            + ', Стойки: ' + colors[cart[i].color2] + ' цвет, диаметр ' + diameter  + ', заглушки ' + cap  + '; <br />  \r\n';
        }
    }
    if (cart.clamps) {
        for (i in cart.clamps) {
            if (cart.clamps[i] && cart.clamps[i]['count']) {
                strResult += 'Хомут ' + i + ' : ' + cart.clamps[i]['count'] + 'шт цвет ' + colors[cart.clamps[i]['color']] + '; <br />  \r\n';
            }
        }
    }
    $('input[name="content[items]"]').val(strResult);
    var total = parseInt($('.total-sum').html().replace(/\s+/g, ''));
    $('input[name="content[total]"]').val(total);
    $('#form').submit();
});

body.on('click','.pc-cart-order-btn', function(){

    var isEmpty = true;
    $('#cart .form-control').each(function(){
        isEmpty = isEmpty && !!$(this).val();
    });

    if (!isEmpty) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    var cart = getCart();
    var strResult = ""; //$(this).hasClass('credit-btn') ? 'КРЕДИТ; ' : '';
    if($(this).hasClass('credit-btn')) {
      $('input[name="content[pay_type]"]').val("card");
    }
    strResult += $('#action-checkbox').prop('checked') ? 'Жилет по акции; ' : '';

    for (i in cart) {
        if (cart[i] && cart[i]['count']) {
            strResult += i + ' : ' + cart[i]['count'] + 'шт, Хомуты: ' + colors[cart[i]['color1']] + ' цвет'
            + ', Стойки: ' + colors[cart[i]['color2']] + ' цвет, диаметр ' + cart[i].diameter  + ', заглушки ' +  cart[i].cap  + '; <br /> \r\n';
        }
    }
    if (cart.clamps) {
        for (i in cart.clamps) {
            if (cart.clamps[i] && cart.clamps[i]['count']) {
                strResult += 'Хомут ' + i + ' : ' + cart.clamps[i]['count'] + 'шт цвет ' + colors[cart.clamps[i]['color']] + '; <br />  \r\n';
            }
        }
    }
    $('input[name="content[items]"]').val(strResult);
    var total = parseInt($('.total-sum').html().replace(/\s+/g, ''));
    $('input[name="content[total]"]').val(total);
    $('#form').submit();
});


body.on('click','.cart-item[data-art="action"] input[type="checkbox"]', function(){
    calculateCartNew();
});
body.on('click', '.add-clamp', function(){
    var parent = $(this).parents('tr');
    var container = $('#clamp-item');

    var item = getCart()['clamps'] || {};
    item = item[parent.data('art')] || {};
    var color = item.color || 7;
    container.data('art', parent.data('art'));
    container.data('type', parent.data('type'));
    container.find('.color').removeClass('active');
    container.find('.color.color-' + color).addClass('active');
    container.find('.item-title').text( 'Хомут ' + parent.data('size') );
    container.find('.new-price .price').text( parent.data('price') );

    container.find('.add-to-cart').toggleClass('already-in-cart', !!item.count);
    container.find('.add-to-cart').toggle(!!parseInt(parent.data('price')));
    $.fancybox({href: "#clamp-item"});

    return false;
});
body.on('mousedown', '.fancybox-cart', function(){
    var cart = getCart();
    art = '';
    var empty = true;
    for (i in cart) {
        if (cart[i] && cart[i].count) {
            empty = false;
        }
    }
    if (cart.clamps) {
        for (i in cart.clamps) {
            if (cart.clamps[i] && cart.clamps[i].count) {
                empty = false;
            }
        }
    }

    if (!empty) {
        $.fancybox({href: "#cart"});
    }
})
body.on('mousedown', '.go-to-cart', function(){
    var cart = getCart();
    var empty = true;
    art = $(this).parents('.fancybox-content').find('.art .value').text();
    for (i in cart) {
        if (cart[i] && cart[i].count) {
            empty = false;
        }
    }
    if (cart.clamps) {
        for (i in cart.clamps) {
            if (cart.clamps[i] && cart.clamps[i].count) {
                empty = false;
            }
        }
    }

    if (!empty) {
        $('.fancybox-cart').mousedown();
    }

});
$('#cart .user-data .form-control').trigger('keydown');


var counters = $('.count .animate');


counters.each(function(){
    $(this).prop('maxCount', $(this).text().replace(',','.')).text(0);
});
var grayAnimated = false;
var diplomsAnimated = false;
var sponsorsAnimated = false;

$('.gray-element').each(function(index, element) {
    $(this).css({opacity:0});
});

var countersScroll = function(){

    var scrollTop = $(window).scrollTop();


    counters.each(function(){
        var t = $(this);
        // if (scrollTop + windowHeight > t.offset().top && !t.hasClass('animation-started')) {
            t.addClass('animation-started').animate({
                Counter: Math.ceil(parseFloat($(this).prop('maxCount')))
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text( (Math.min( Math.ceil(now), parseFloat(t.prop('maxCount'))  ) + '').replace('.', ',') );
                }
            });
        // }

    });

};

var animateZoomZoom = function(t) {

    var width = t.data('width');


    var newWidth = Math.ceil(width * 1.1);
    var margin = (width - newWidth) / 2;

    t.animate({
        marginLeft: margin + 'px',
        marginTop: (margin*2)  + 'px',
        width: newWidth
    }, function(){
        t.animate({
            marginLeft: 0,
            marginTop: 0,
            width: width
        })
    });
}

setTimeout(countersScroll, 500);
var nav = $('.nav');
var fileCheckbox = $('#file-checkbox');
var fileInput = $('input[name="content[requ]"]');

$('body').on('mousemove','#item .image, .pc-photo', function(e){
    e = e || window.event; // IE-ism
    var img = $(this);
    //console.log( img.outerHeight(),  $(window).scrollTop() , img.offset().top,  e.clientY, ( img.offset().top - $(window).scrollTop() < e.clientY && img.offset().top + img.outerHeight() - $() > e.clientY ) );
    if ( ( img.offset().top - $(window).scrollTop() < e.clientY && img.offset().top + img.outerHeight() - $(window).scrollTop() > e.clientY ) &&
        (img.offset().left - $(window).scrollLeft() < e.clientX && img.offset().left + img.outerWidth() > e.clientX )  ) {
        $(this).addClass('hover');
}
else {
    $(this).removeClass('hover');
}

}).on('mouseleave','#item .image, .pc-photo', function(){ $(this).removeClass('hover'); }).on('mouseover', function(){
    if (fileCheckbox.prop('checked')){
        fileCheckbox.prop('checked', !!fileInput.val());
    }

});



fileInput.change(function(){
    fileCheckbox.prop('checked', !!$(this).val());
}).mouseover(function(){
    $( this ).parent().find('.label').addClass('hover');
}).mouseout(function(){
    $( this ).parent().find('.label').removeClass('hover');
});

fileCheckbox.change(function(){
    if (!$(this).prop('checked'))  {
        fileInput.val('');
    }
    else {
        fileInput.click();
    }
});

if (mobilecheck()) {
    grayAnimated = true;
    $('.gray-element').css({opacity:1});
}
$(window).on('scroll', function(){


    var scrollTop = $(window).scrollTop();
    var scrollLeft = $(window).scrollLeft();
    nav.css('left', '-' + scrollLeft + 'px');
    var grayScroll = $('.gray').length? $('.gray').offset().top : 0;
    var diplomsScroll = $('.diploms').length ? $('.diploms').offset().top : 0;
    var sponsorsScroll = $('.sponsors-text').length ? $('.sponsors-text').offset().top : 0;



    // body.toggleClass('scrolled', scrollTop > 10);
    /*if(scrollTop == 0){
        $('.wrapper-left ul').css('top', 0);
    }
    else {        
        $('.wrapper-left ul').css('top', scrollTop - 10);
    }*/


    if (!grayAnimated && scrollTop >= grayScroll - (windowHeight/3)) {
        grayAnimated = true;
        $('.gray-element').each(function(index, element) {
            var t = $(this);
            setTimeout(function(){
                t.animate({opacity:1},200);
            }, index * 150);

        });
    }
    if (!diplomsAnimated && scrollTop >= diplomsScroll - (windowHeight/2)) {
        diplomsAnimated = true;
        $('.diploms li').each(function(index, element) {
            var t = $(this);
            setTimeout(function(){
                t.addClass('to-top');
                setTimeout(function(){ t.removeClass('to-top'); }, 400);
            }, index * 200);

        });
    }
    if (!sponsorsAnimated && scrollTop >= sponsorsScroll - (windowHeight/2)) {
        sponsorsAnimated = true;
        $('.sponsor-img').addClass('hovered');
        setTimeout(function(){ $('.sponsor-img').removeClass('hovered') }, 400);
    }



    $('.zoom-zoom').each(function(){
        if(!$(this).hasClass('animated') && $(this).offset().top <= scrollTop + (windowHeight/3)) {
            $(this).addClass('animated');
            animateZoomZoom($(this));
        }

    })



}).trigger('scroll');

/*
$('.tabs').each(function(){

    var tabs = $(this);
    var switcher = tabs.parents('.tabs-class-switcher');
    var switcherCLass = switcher.attr('class') || '';
    var tabButtons = $(this).find('[data-for]');

    var dict_anchor = ["mobile", "outdoor", "platform", "home"];
    var anchor = window.location.hash.substring(1);

    tabButtons.on('click', function(){
                //console.log( $(this).data('tabgroup'),$(this).data('for') );
                $('[data-tabgroup="' + $(this).data('tabgroup') + '"][data-tabid]').hide();
                $('[data-tabgroup="' + $(this).data('tabgroup') + '"][data-tabid="' + $(this).data('for') + '"]').show();
                tabButtons.removeClass('active');
                $(this).addClass('active');
                if (switcher.size())  {
                    switcher.removeClass().addClass(switcherCLass).addClass('active-' +  $(this).data('for'));
                }
                if (tabs.hasClass('global')) {
                    $('body').removeClass().addClass(bodyClass + 'active-' +  $(this).data('for'));
                }
                /*console.log( $('[data-tabgroup="' + $(this).data('tabgroup') + '"][data-tabid]') );
            });
    for(var i = 0; i < dict_anchor.length; i++) {
        if(dict_anchor[i] == anchor){
            $("#" + anchor).addClass('active');
            $('[data-tabgroup="' + $("#" + anchor).data('tabgroup') + '"][data-tabid]').hide();
            $('[data-tabgroup="' + $("#" + anchor).data('tabgroup') + '"][data-tabid="' + $("#" + anchor).data('for') + '"]').show();
        }
        if(!tabButtons.hasClass('active')){
            tabButtons.first().trigger('click');
        }
    }
});*/




var index = window.location.href.indexOf('for=gov') != -1 ? 0 :  window.location.href.indexOf('for=factory') != -1 ? 2 : 1

$($('.tabs [data-tabgroup="tabs2"]').get(index)).trigger('click');


$('.zoom-zoom').each(function(){
    var width = $(this).width(); $(this).data('width', width);
}).on('mouseover', function(){
    animateZoomZoom($(this));
});

$(window).on('resize', function(){
    $('.header .header-bg .bg').css('width', ($('body').width()) + 'px');
}).resize();


/*$('.advantages .cell div').hover(function(){
    $('.adv-long-text').css('display','block');
});*/



    /* new menu *
    url = window.location.pathname + window.location.hash;
    $(".fixed_menu_side a").each(function(){
        if($(this).attr("href") == url){
            $(this).children("li").addClass('menu_act_left');
        }
    })
    var hash = window.location.hash.split('#')[1];
    if(typeof(hash) != 'undefined'){
        $("#catalog > div").hide();
        $('[data-tabid="' + hash + '"]').show();
        $("#fixed_menu_left a[href=#" + hash + "] li").addClass('menu_act_left');
        console.log(1);
    }
    else {
        if(window.location.pathname != '/sponsorship' && window.location.pathname != '/turniks' && window.location.pathname != '/dealers' && window.location.pathname != '/map' && window.location.pathname != '/rubber' && window.location.pathname != '/gto_platforms' && window.location.pathname != '/faq'){
            $("#fixed_menu_left a li").first().addClass('menu_act_left');
        }
        $("#fixed_menu_left a.clk").each(function(){
            console.log(1);
            var url_hash = $(this).attr("href");
            $(this).attr('href', '/' + url_hash);
        });
        
    }
    $("#fixed_menu_left a.clk").click(function(){
      if(window.location.pathname == '/sponsorship' || window.location.pathname == '/turniks' || window.location.pathname == '/dealers' || window.location.pathname == '/map' || window.location.pathname == '/rubber' || window.location.pathname == '/gto_platforms' || window.location.pathname == '/faq' || window.location.pathname == '/'){
            document.location.href = '/' + $(this).attr("href");
        }
        else {
            var tab = $(this).attr('href').split('#')[1];
            if(tab != ''){
                $("#fixed_menu_left a li").removeClass('menu_act_left');
                $(this).children("li").addClass('menu_act_left');
                $("#catalog > div").hide();
                $('[data-tabid="' + tab + '"]').show();
            }
            $('html, body').animate({scrollTop: $("#full_catalog").offset().top - 50}, 500);
        }
    });


    /*wrapper-menu*/
    url = window.location.pathname + window.location.hash;
    $(".wrapper-left a").each(function(){
        if($(this).attr("href") == url){
            $(this).addClass('active');
        }
    })
    //var hash = window.location.hash.split('#')[1];
    /*if(typeof(hash) != 'undefined'){
        $("#catalog > div").hide();
        $('[data-tabid="' + hash + '"]').show();
        $(".wrapper-left a[href=#" + hash + "]").addClass('active');
    }
    else {
        if(window.location.pathname != '/sponsorship' && window.location.pathname != '/turniks' && window.location.pathname != '/dealers' && window.location.pathname != '/map' && window.location.pathname != '/rubber' && window.location.pathname != '/government' && window.location.pathname != '/factory' && window.location.pathname != '/' && window.location.pathname != '/gto_platforms' && window.location.pathname != '/faq'){
            $(".wrapper-left a").first().addClass('active');
        }
        $(".wrapper-left a.clk").each(function(){
            var url_hash = $(this).attr("href");
            $(this).attr('href', '/' + url_hash);
        });
        
    }*/
    /*$(".wrapper-left a.clk").click(function(){
      if(window.location.pathname == '/sponsorship' || window.location.pathname == '/turniks' || window.location.pathname == '/dealers' || window.location.pathname == '/map' || window.location.pathname == '/rubber' || window.location.pathname == '/government' || window.location.pathname == '/factory' || window.location.pathname == '/gto_platforms' || window.location.pathname == '/faq'){
            document.location.href = '/' + $(this).attr("href");
        }
        else {
            var tab = $(this).attr('href').split('#')[1];
            if(tab != ''){
                $(".wrapper-left a").removeClass('active');
                $(this).addClass('active');
                $("#catalog > div").hide();
                $('[data-tabid="' + tab + '"]').show();
            }
            $('html, body').animate({scrollTop: $("#full_catalog").offset().top - 50}, 500);
        }
    });
    
    //проверка активного подпункта меню и открытие подменю, если подпункт активный
    $('.wrapper-left ul ul a').each(function(){
        if($(this).hasClass('active')){
            $(this).parent().css('display', 'block');
            $(this).parent().parent().addClass('green-arrow');
        }
    });

*/

    if(frame==1){
        $('.old-price .price').each(function(){
            $(this).html(formatPrice($(this).html()));
        });
        $('.new-price .price').each(function(){
            $(this).html($(this).html());
        });
    }

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
            $('#dealer_profit').text(convertPrice(calculateProfit(ui.value, $('#slider-count').slider("option", "value"))));
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
            $('#dealer_profit').text(convertPrice(calculateProfit($('#slider-summ').slider("option", "value"),ui.value)));
        }
    });

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
    $('#dealer_profit').text(convertPrice(calculateProfit(300000,20)));


    /*var new_year = getCookie('new_year') || 'none';
    var ny_date = new Date( new Date().getTime() + 8640000000 );
    if(new_year == 'none'){
      $("#ny_href").trigger('click');
      document.cookie = "new_year=yes; expires="+ny_date.toUTCString()+"; path=/; domain=sportmen.ru";
    } */


    if (mobilecheck()) {
        if(window.innerHeight > window.innerWidth){
            $("#ml_href").trigger('click');
        }
        $( window ).on( "orientationchange", function( event ) {
            if(window.innerHeight < window.innerWidth){
                $.fancybox.close();
            }
        });
    }

    $('.pc-dpipe').click(function(){
      $('.pc-dpipe').removeClass('chosen');
      $(this).addClass('chosen');
      let id = $(this).attr('id');

      $('.pc-cap').addClass('nonshown');
      $('#' + id + 'cap').removeClass('nonshown');
      $('#' + id + 'steel').addClass('chosen');
      $('#' + id + 'cap div[data-cap="plastik"]').removeClass('chosen');

      $('.pc-price-new').removeClass('pc-active');
      $('#pc-new-' + id + 'steel').addClass('pc-active');
      $('.pc-price-old').removeClass('pc-active');
      $('#pc-old-' + id).addClass('pc-active');
      $('.to-cart').removeClass('already-in-cart');
    });

    $('.pc-cpipe').click(function(){
      $('.pc-cpipe').removeClass('chosen');
      $(this).addClass('chosen');
      let id = $(this).parent().attr('data-diameter');
      let cap = $(this).attr('data-cap');
      $('.pc-price-new').removeClass('pc-active');
      $('#pc-new-' + id + cap).addClass('pc-active');
    });

    $('.pc-config-color > div').click(function(){
      $(this).parent().children('div').removeClass('chosen');
      $(this).addClass('chosen');
    });

    $('.pc-thumbs div').click(function(){
      $('.pc-thumbs div').removeClass('active');
      $(this).addClass('active');
      $('.pc-photo img').removeClass('active').eq($(this).index()).addClass('active');
    }); 

 
    $('#promo-open').click(function(){
      $('#promo-open').css("display", "none");
      $('#promo-battle').css("display", "block");
    }); 
  
    $('#promo-battle .close').click(function(){
      $('#promo-battle').css("display", "none");
      $('#promo-open').css("display", "block");
      document.cookie = "showPromo2k18=ok; expires=0; path=/; domain=sportmen.ru";
    }); 
 
    $('#mounting_schema div').mouseover(function(){
        $("#mounting_schema_info span").removeClass('hover');
        $("#" + $(this).attr("id") + '_info').addClass('hover');
    }); 

    $('#mounting_schema div').mouseout(function(){
        $("#mounting_schema_info span").removeClass('hover');
    }); 

    $('.pc-tooltip').tooltip({
  position: { my: "center top", at: "center bottom-45" }
    });
    $('a#one_click').click(function(){
      let article = $('.pc-article span').text();
      let diameter = $('.pc-dpipe.chosen').attr("id");
      let clamp_color = colors[$('#pc-clamp .color.chosen').attr("data-color")];
      let rack_color = colors[$('#pc-rack .color.chosen').attr("data-color")];
      $('#feedback-form-message input[name="content[items]"]').val("ЗАКАЗ В ОДИН КЛИК. Артикул: " + article + "; диаметр: " + diameter + "; цвет хомутов: " + clamp_color + "; цвет стойки: " + rack_color);
    });

});

function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
