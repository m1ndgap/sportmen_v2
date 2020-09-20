$(document).ready(function() {

var win = $(window);
var navBarToHide = $('.header-menu-fixed .header-top-bar');

win.bind('scroll', function() {
   if (win.scrollTop() > 50) {
     navBarToHide.slideUp();
     var hlogo = $('.header-logo');
     var header = $('.header-nav-container');
     var hpm = $('.header-logo-mobile-phone');
     header.addClass('header-nav-container-short');
     hlogo.addClass('header-logo-short');
     hlogo.removeClass('header-logo');
     hpm.addClass('h-l-m-p');
   }
   else {
     navBarToHide.slideDown();
     var hlogo = $('.header-logo-short');
     var header = $('.header-nav-container');
     var hpm = $('.header-logo-mobile-phone');
     header.removeClass('header-nav-container-short');
     hlogo.addClass('header-logo');
     hlogo.removeClass('header-logo-short');
     hpm.removeClass('h-l-m-p');
   }
});

// basket number bubble
basketBubbleFill();

// basket popup controls
$('.header-basket.hide-sm').on('mouseenter', function() {
  $('#header-basket__hover').removeClass('hidden-rd').addClass('shown-rd');
  $('#header-basket__hover .basket__item').each(function(){$(this).remove();});
  // populating wrapper cart with items from LS
  var ls_cart_items = JSON.parse(localStorage.getItem('cart'));
  var target = $('#header-basket__hover');
  $.each(ls_cart_items, function(index, value){
    var key = ls_cart_items[index].key;
    var name = ls_cart_items[index].article;
    var count = ls_cart_items[index].count;
    var pic = ls_cart_items[index].pic;
    var price = ls_cart_items[index].price_diameter;
    //global_price += parseInt(price);
    //countPrices();
    $(target).prepend(
      `
      <div class="basket__item" data-lsid='${key}'>
        <img src="${pic}" alt="">
        <div class='basket__item-text'>
          <p>${name}</p>
          <p><span class="basket__item-price">${numberFormat(price.toString(), ' ')}</span> р.</p>
        </div>
        <div class="basket__item-close"></div>
      </div>
      `
      );
    basketBubbleFill();
  });
  basketIsEmptyWrapper();
});


$('.header-basket.hide-lg').on('click', classClickHide);

$('.header-basket.hide-lg').on('click', function(){
  $('#header-basket__hover .basket__item').each(function(){$(this).remove();});
  var ls_cart_items = JSON.parse(localStorage.getItem('cart'));
  var target = $('#header-basket__hover');
  $.each(ls_cart_items, function(index, value){
    var key = ls_cart_items[index].key;
    var name = ls_cart_items[index].article;
    var count = ls_cart_items[index].count;
    var pic = ls_cart_items[index].pic;
    var price = ls_cart_items[index].price_diameter;
    //global_price += parseInt(price);
    //countPrices();
    $(target).prepend(
      `
      <div class="basket__item" data-lsid='${key}'>
        <img src="${pic}" alt="">
        <div class='basket__item-text'>
          <p>${name}</p>
          <p><span class="basket__item-price">${numberFormat(price.toString(), ' ')}</span> р.</p>
        </div>
        <div class="basket__item-close"></div>
      </div>
      `
      );
    basketBubbleFill();
  });
  basketIsEmptyWrapper();
});

// $('#header-basket__hover').on('mouseleave', function() {
//   $(this).removeClass('shown-rd').addClass('hidden-rd');
// });

// removing items from the basket
$('#header-basket__hover').on('click', '.basket__item-close', function(){
  $(this).closest('.basket__item').remove();
  var lsid = $(this).closest('.basket__item').data('lsid');
  var cart = JSON.parse(localStorage.getItem('cart'));
  delete cart[lsid];
  localStorage.setItem('cart', JSON.stringify(cart));
  basketIsEmptyWrapper();
  basketBubbleFill();
});



// main menu controls

// this function checks if the current menu item class and closes submenus for all other items
$('.with-submenu').on('mouseenter', function(){
  var current_target = $(this).data('target');
  // removing grey bar if its the first tab

  $('.main-submenu').each(function(){
    //console.log($(this).hasClass(current_target.substring(1)) + " ?");
    if ($(this).hasClass(current_target.substring(1))){
      //console.log('not hiding ' + $(this).toString());
    } else {
      //console.log('hiding ' + $(this).toString());
      //if (current_target == ".main-menu-sub-1") {
      $('.header-nav-container').addClass('no_after');
      // } else {
      //   $('.header-nav-container').removeClass('no_after');
      // };
      $(this).addClass('hidden-rd');
    }
  });
  var target = $(current_target);
  if (target.hasClass('hidden-rd')) {
    target.removeClass('hidden-rd').addClass('shown-rd');
    return false;
  } else {
    target.removeClass('shown-rd').addClass('hidden-rd');
    return false;
  };


});

// hides submenu
$('.header-nav-container').on('mouseleave', function() {
  hideAllSubmenus();
  $('#header-basket__hover').removeClass('shown-rd').addClass('hidden-rd');
});


// $('.container-rd-nav').on('mouseleave', function(){
//   console.log(123);
//   var listHover = $('.container-rd-nav').filter(":hover");
//   var menuHover = $('.main-submenu').filter(":hover");
//   if (menuHover & listHover) {
//   } else {
//     hideAllSubmenus();
//   };
// });

//mobile menu controls
  $('.header-mobile-menu-icon').on('click', classClickHide);

  // mobile submenu item display
  $('.with-submenu-mobile').on('click', function(){
    var target = $(this).find('.main-submenu-mobile');
    if (target.hasClass('dnone-rd')) {
      target.removeClass('dnone-rd').addClass('dnone-rd-off');
      return false;
    } else {
      target.removeClass('dnone-rd-off').addClass('dnone-rd');
      return false;
    };
  });


// number formatting function
function numberFormat(_number, _sep) {
_number = Math.round(_number).toString();
_number = typeof _number != "undefined" && _number > 0 ? _number : "";
_number = _number.replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
if(typeof _sep != "undefined" && _sep != " ") {
    _number = _number.replace(/\s/g, _sep);
}
return _number;}


// basket number bubble function
function basketBubbleFill(){
  var ls_cart_items = JSON.parse(localStorage.getItem('cart'));
  var basket_bubble_count = 0;
  $('.basket-count').text(basket_bubble_count);
  $.each(ls_cart_items, function(index, value){
    basket_bubble_count += 1;
  });
  if (basket_bubble_count >= 1) {
    $('.basket-count').removeClass('hidden-rd').addClass('shown-rd');
    $('.basket-count').text(basket_bubble_count);
  } else {
    $('.basket-count').removeClass('shown-rd').addClass('hidden-rd');
  };
};


// actions if the basket is empty: removing the buttons and adding empty basket text
function basketIsEmptyWrapper(){
  $('.basket__buttons').removeClass('hidden-rd');
  $('#eader-basket__hover .basket_empty_warning').remove();
  var added_products = $('#header-basket__hover .basket__item').length;
  var empty_message_count = $('#header-basket__hover .basket_empty_warning').length;
  console.log(added_products);
  console.log(empty_message_count);
  if (added_products == 0 && empty_message_count == 0) {
    var product_list = $('#header-basket__hover');
    $("<p class='basket_empty_warning'> Ваша корзина пуста.</p>").appendTo(product_list);
    $('.basket__buttons').addClass('hidden-rd');
  } else if (added_products == 0) {
    $('.basket__buttons').addClass('hidden-rd');
  };
};

function classClickHide() {
  var target = $($(this).data('target'));
  if (target.hasClass('hidden-rd')) {
    target.removeClass('hidden-rd').addClass('shown-rd');
    $('.header-nav-container').addClass('no_after');
    return false;
  } else {
    target.removeClass('shown-rd').addClass('hidden-rd');
    $('.header-nav-container').removeClass('no_after');
    return false;
  };
};

function hideAllSubmenus() {
  $('.main-submenu').each(function(){
      $(this).addClass('hidden-rd');
    });
  // getting the grey bar back
  $('.header-nav-container').removeClass('no_after');

};

$('a.fancybox').fancybox({
    'transitionIn'  :   'none',
    'transitionOut' :   'none'

});
$(document).on('click','.fancyclose',function(){
  $.fancybox.close();
})

});
