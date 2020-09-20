$( document ).ready(function() {


  var global_price = 0;
  var global_discount = 0;

  //initializing jQUI tabs
  $('#cart_tabs').tabs({
    active: 0,
    disabled: [ 1 ]
  });

  $(".cart_file_upload").dropzone({ url: "/file/post" });

  //switching to tab 0 back on mobile
  $('#cart_step_2_back_button').on('click', function(e){
    $('#cart_tabs').tabs("option", "active", 0);
    //$('#cart_page_menu_button_1').trigger('click');
    //$('#cart_page_menu_button_1')[0].click();
    // console.log($('#cart_page_menu_button_1'));
    // console.log('11111');
  });


  // cart tab switching
  // switch via "process order"
  $('.cart_s1pb_proceed').on('click', function(e){
    e.preventDefault();
    // console.log($('.cart_s1_product_list').children);
    // console.log($('.cart_s1_product_list').children().length);
    // $('.cart_s1_product_list').children().each(function(){
    //   console.log($(this));
    // });
    var added_products = $('.cart_s1_product_list .cart_added_product').length;
    if (added_products > 0) {
      $("#cart_tabs").tabs( "enable" );
      $('#cart_tabs').tabs("option", "active", 1);
      $('#cart_page_menu_button_2').addClass('active');
    } else {
      var ap_warning = $('.cart_s1_product_list .cart_empty_warning').length;
      if (ap_warning > 0) {
        //$('.cart_empty_warning').
      } else {
        basketIsEmpty();
      };
    };
  });
  // switching via tab button
  $('#cart_page_menu_button_2').on('click', function(){
    var added_products = $('.cart_s1_product_list .cart_added_product').length;
    if (added_products > 0) {
      $("#cart_tabs").tabs( "enable" );
      $('#cart_tabs').tabs("option", "active", 1);
      $(this).addClass('active');
    } else {
      basketIsEmpty();
    };
  });

// deactivating second button 'active' css on desktop if user clicks first tab
  $('#cart_page_menu_button_1').on('click', function(){
    $('#cart_page_menu_button_2').removeClass('active');
  });


// removing product from the cart
  $('.cart_s1_product_list').on('click', '.cart_ap_remove_button', function(){
    var target = $(this).closest('.cart_added_product');
    //target.fadeOut(300, function(){ target.remove();});
    target.remove();
    basketIsEmpty();
    countPrices();
  });



// populating the product list from the LS
var ls_cart_items = JSON.parse(localStorage.getItem('cart'));
var target = $('.cart_s1_product_list')
$.each(ls_cart_items, function(index, value){
  var name = ls_cart_items[index].article;
  var count = ls_cart_items[index].count;
  var pic = ls_cart_items[index].pic;
  var price = ls_cart_items[index].price_diameter;
  var key = ls_cart_items[index].key;
  global_price += parseInt(price);

  $(target).append(
    `
    <div class="cart_added_product" data-id='${key}'>
      <div class="cart_ap_mobile_text">
        <div class="cart_apm_article">АРТ.ВФСК-4</div>
        <div class="cart_apm_name">${name}</div>
      </div>
      <img src="${pic}" alt="" class="cart_ap_img">
      <div class="cart_ap_text">
        <span class="cart_apt_name">${name}</span>
        <span class="cart_apt_article">АРТ.ВФСК-4</span>
        <div class="cart_apt_prices">
          <span class="cart_aptp_discount">-30%</span>
          <span class="cart_aptp_old_price" data-old-price=${price*count*2}> ${numberFormat((price*count).toString()*2, ' ')} Р.</span>
          <span class="cart_aptp_price" data-price=${price*count}>${numberFormat((price*count).toString(), ' ')} р.</span>
        </div>
      </div>
      <div class="cart_ap_buttons" data-count='${count}'>
        <div class="cart_apb_minus">–</div>
        <div class="cart_apb_amount">${count}шт</div>
        <div class="cart_apb_plus">+</div>
      </div>
      <div class="cart_ap_remove_button"></div>
    </div>
    `
  );
  countPrices();
});

basketIsEmpty();


// + and - buttons
$('.cart_s1_product_list').on('click', '.cart_apb_minus', function(){
  basketIsEmpty();
  var button_block = $(this).closest('.cart_ap_buttons');
  var count = button_block.data('count');
  var price = $(this).parent().parent().find('.cart_aptp_price').data('price');
  var price_block = $(this).parent().parent().find('.cart_apt_prices');
  price -= price/count;
  count -= 1;
  button_block.data('count', count);
  price_block.find('.cart_aptp_price').data('price', price);
  if (count < 1) {
    $(this).closest('.cart_added_product').remove();
    var id = $(this).closest('.cart_added_product').data('id');
    removeItemFromWrapper(id);
    basketIsEmpty();
  } else {
    price_block.find('.cart_aptp_price').data('price', price);
    price_block.find('.cart_aptp_price').text(`${numberFormat(price, ' ')} р.`);
    price_block.find('.cart_aptp_old_price').text(`${numberFormat(price*2, ' ')} р.`);
    button_block.find('.cart_apb_amount').text(`${count}шт`);
  };
  countPrices();
});

$('.cart_s1_product_list').on('click', '.cart_apb_plus', function(){
  var button_block = $(this).closest('.cart_ap_buttons');
  var price_block = $(this).parent().parent().find('.cart_apt_prices');
  var count = button_block.data('count');
  var price = price_block.find('.cart_aptp_price').data('price');
  price += price/count;
  count += 1;
  button_block.data('count', count);
  price_block.find('.cart_aptp_price').data('price', price);
  price_block.find('.cart_aptp_price').text(`${numberFormat(price, ' ')} р.`);
  price_block.find('.cart_aptp_old_price').text(`${numberFormat(price*2, ' ')} р.`);
  button_block.find('.cart_apb_amount').text(`${count}шт`);
  countPrices();
});


//sync removal of items
$('#header-basket__hover').on('click', '.basket__item-close', function(){
  var id = $(this).closest('.basket__item').data('lsid');
  removeItemFromWrapper(id);
  basketIsEmpty();
});




// displaying "basket is empty" message in case it is empty and there is no message present
function basketIsEmpty(){
  var added_products = $('.cart_s1_product_list .cart_added_product').length;
  var empty_message_count = $('.cart_s1_product_list .cart_empty_warning').length;
  if (added_products == 0 && empty_message_count == 0) {
    var product_list = $('.cart_s1_product_list')
    $("<p class='cart_empty_warning'> Ваша корзина пуста.</p>").hide().appendTo(product_list).show('normal');
    $('.cart_s1_product_list h3').hide();
    $('.cart_s1_price_block').hide();
  };
};

// calculating the total price
function countPrices(){
  var global_price = 0;
  $('.cart_s1_product_list .cart_added_product').each(function(){
    var local_price = $(this).find('.cart_aptp_price').data('price');
    global_price += parseInt(local_price);
  });
  $('.cart_s1pbp_price').text(numberFormat(global_price.toString(), ' ') + ' р.');
  $('.cart_s2pbp_price').text(numberFormat(global_price.toString(), ' ') + ' р.');
  $('.cart_s1pbp_old_price').text(numberFormat(global_price.toString()*2, ' ') + ' р.');
  $('.cart_s2pbp_old_price').text(numberFormat(global_price.toString()*2, ' ') + ' р.');

  $('.cart_s2pb_deldiscount_sum').text(numberFormat((global_price*0.05).toString(), ' ') + ' р.');

  $('.cart_s2pb_total_price p:nth-child(2)').text(numberFormat((global_price-global_price*0.05).toString(), ' ') + ' р.');
};

// removing the item from the wrapper cart
function removeItemFromWrapper(id){
  var victim = $('.cart_s1_product_list').find(`[data-id='${id}']`);
  victim.remove();
};

function numberFormat(_number, _sep) {
_number = Math.round(_number).toString();
_number = typeof _number != "undefined" && _number > 0 ? _number : "";
_number = _number.replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
if(typeof _sep != "undefined" && _sep != " ") {
    _number = _number.replace(/\s/g, _sep);
}
return _number;}

});
