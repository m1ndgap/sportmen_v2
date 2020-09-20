$( document ).ready(function() {

    $('#tabs').tabs();

    $('.magnific-image').magnificPopup({type:'image'});


    $(".pc-diam>li").on('click', function(event){
      event.preventDefault();
      $('.pc-diam>li').each(function(){
        $(this).removeClass('pc-selector-active');
      });
      $(this).addClass('pc-selector-active');
      var text = $(this).data('value');
      $('.pc-med-selected-diam').text(text);
    });

    $(".pc-caps>li").on('click', function(event){
      event.preventDefault();
      $('.pc-caps>li').each(function(){
        $(this).removeClass('pc-selector-active');
      });
      $(this).addClass('pc-selector-active');
      var text = $(this).data('value');
      $('.pc-med-selected-caps').text(text);
    });

    $(".pc-strap-color>li").on('click', 'a', function(event){
      event.preventDefault();
      $('.pc-strap-color>li a').each(function(){
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });


    $(".pc-rack-color>li").on('click', 'a', function(event){
      event.preventDefault();
      $('.pc-rack-color>li a').each(function(){
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });

    $(".pc-diam-collapse").on('click', function(){
      $('.pc-diam').slideToggle();
      var arrow = $(this).find('.pc-collapse-arrow')
      if (arrow.hasClass('arrow_rotate')) {
        arrow.removeClass('arrow_rotate');
      } else {
        arrow.addClass('arrow_rotate');
      };
    });

    $(".pc-caps-collapse").on('click', function(){
      $('.pc-caps').slideToggle();
      var arrow = $(this).find('.pc-collapse-arrow')
      if (arrow.hasClass('arrow_rotate')) {
        arrow.removeClass('arrow_rotate');
      } else {
        arrow.addClass('arrow_rotate');
      };
    });

    $('.pc-info-tabs-mobile-title').on('click', function(){
      $(this).next().slideToggle();
      var arrow = $(this).find('.pc-collapse-arrow')
      if (arrow.hasClass('arrow_rotate')) {
        arrow.removeClass('arrow_rotate');
      } else {
        arrow.addClass('arrow_rotate');
      };
    });



    // document.querySelectorAll('.clamps-table-collapse').forEach((root) => {
    // root.querySelector('.clamps-table-collapse-button').addEventListener('click', () => {
    //   if (root.classList.contains('opened')) {
    //     $(root.querySelector('.clamps-table-collapse-content')).slideUp(150); // jquery
    //     root.classList.remove('opened');
    //   } else {
    //     $(root.querySelector('.clamps-table-collapse-content')).slideDown(150); // jquery
    //     root.classList.add('opened');
    //   }
    // });
    // });
});
