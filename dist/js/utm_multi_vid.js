multi="пол;Доска пола, деревянная отделка с доставкой по Башкирии\n\
хво|лип|осин|отдел;Отделочные материалы из хвои, липы, осины. Доставка по башкирии\n\
полок|бан;Отделочные материалы для бань и саун. Доставка по Башкирии\n\
лестни|баляс|ступ|тетив|поруч;Элементы лестниц из дерева и отедлочные материалы. Доставка по Башкирии \n\
имитац;Имитация бруса, отделочные материалы из дерева. Доставка по Башкирии\n\
короб;Дверные коробки, отделочные материалы из дерева. Доставка по Башкирии\n\
двер;Двери для бани, отделочные материалы из дерева. Доставка по Башкирии\n\
обшив;Обшивка из хвои, липы, осины. Доставка по Башкирии\n\
евроваг;Евровагонка, имитация бруса, блок-хаус с доставкой по Башкирии\n\
плинтус|рейк|угол|штап|наличн;Отделочные материалы из дерева с доставкой по Башкирии\n\
щит|мебел;Щиты мебельные, отделочные материалы из дерева с доставкой по Башкирии\n\
евро;Доска для европола, отделочные материалы с доставкой по Башкирии\n\
погон;Деревянный погонаж из хвои, липы, осины с доставкой по Башкирии\n\
блок;Блок-хаус, имитация бруса, евровагонка с доставкой по Башкирии";

yaParams={}
$(function() {

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

  // UTM
  utm=[];
  $.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){
      utm[v]=getURLParameter(v) || $.cookie(v);
    $.cookie(v, utm[v], { expires: 365, path: '/' });
      $('<input type="hidden" />').attr({
        name: "content["+v+"]",
        value: getURLParameter(v)
      }).appendTo("form")
  });
  
  // MULTI

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
  }

  yaParams={ ab_title: ab_title }
  try { //если метрика уже была, то тут. Если нет, то в коде метрики.
    yaCounter.params(yaParams);
  } catch(e) { }  

);




































