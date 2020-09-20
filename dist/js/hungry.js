(function (d, w, c) {
  (w[c] = w[c] || []).push(function() {
    try {

      w.ab_variation2 = $.cookie("ab_variation2") || ((Math.random()>0.5) ? "variant2" : "variant1")
      $.cookie("ab_variation2", w.ab_variation2, { expires: 365, path: '/' });
      // $('html').addClass("variant2");//w.ab_variation2
      yaParams={ ab_variation2: ab_variation2 };

/////////////////////////////////////////
$(function(){
  var getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ""])[1].replace(/\+/g, '%20')) || null;
  };
  var utm = []
  $.each(["utm_source", "utm_medium", "utm_campaign", "utm_term", 'source_type', 'source', 'position_type', 'position', 'added', 'creative', 'matchtype'], function(i, v) {
    utm[v] = getURLParameter(v) || $.cookie(v);
    $.cookie(v, utm[v], {
      expires: 365,
      path: '/'
    });
    $('<input type="hidden" />').attr({
      name: "content[" + v + "]",
      value: utm[v]
    }).appendTo("form:not(#yandex_pay)");
  });

  $('a.btn,button, a.fancybox').click(function(event) {
    $('input[name="content[place]"]').val($(event.delegateTarget).data("button"));
  });


  var multi="тренаж.*улич.*площ;Тренажерные уличные площадки\n\
турник.*улиц;Турники для улицы\n\
тренажер.*дач;Тренажеры для дачи\n\
улич.*тренаж;Уличные тренажеры\n\
спортив.*комплекс;Уличные спортивные комплексы\n\
воркаут.*тренажер;Тренажеры для воркаут\n\
тренажер.*площ;Тренажерные площадки\n\
улич.*турник;Уличные турники\n\
street.*workout;Тренажеры для Streen Workout\n\
стрит.*воркаут;Тренажеры для Стрит Воркаут\n\
комплекс.*воркаут;Спортивные воркаут-комплексы\n\
атлетическ.*комплекс;Уличные атлетические комплексы\n\
улич.*брус;Уличные брусья и турники\n\
детск.*спорт.*комплекс;Детские спортивные комплексы\n\
тренажерн.*комплекс;Уличные тренажерные комплексы\n\
брус.*улиц;Брусья и турники для улицы;площадки для ГТО;тренажеры для ГТО";

  var ab_title = "default";
  if(utm['utm_term']){
    multi=multi.split('\n');
    multi=$.map(multi,function(v, i){
      arr1=v.split(';');
      r=new RegExp(arr1[0]);
      return {reg: r,val: arr1[1]};
    });
    multi=$.grep(multi,function(v,i){
      return utm['utm_term'].search(v.reg) > -1
    });
    if(multi[0]){
      ab_title=multi[0].val;
      $("h1").html(ab_title);
    }
    yaParams={ ab_title: ab_title, ab_variation2: ab_variation2 };
    try { //если метрика уже была, то тут. Если нет, то в коде метрики.
      yaCounter.params(yaParams);
    } catch(e) { }  
  }
});
///////////////////////


          } catch(e) { }
        });

var n = d.getElementsByTagName("script")[0],
s = d.createElement("script"),
f = function () { n.parentNode.insertBefore(s, n); };
s.type = "text/javascript";
s.async = true;
s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

if (w.opera == "[object Opera]") {
  d.addEventListener("DOMContentLoaded", f, false);
} else { f(); }

})(document, window, "yandex_metrika_callbacks");
