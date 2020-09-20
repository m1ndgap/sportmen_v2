$( document ).ready(function() {
  var cart =
  {'СВС-19-M-mm76-plastik':
    {article: "СПОРТ.КОМПЛЕКС ДЛЯ ПОДГОТОВКИ К СДАЧЕ НОРМ ВФСК", pic: '/images/pc_fish_1.jpg', cap: "пластик", color1: 5, color2: 2, count: 2, diameter: "mm76", disc_price: 810, price_diameter: "3216200", stainless: false, key: 'СВС-19-M-mm76-plastik'},
    'СП-2-mm108-undefined':
    {article: "СП-2", pic: '/images/pc_fish_2.png', cap: "металл", color1: 8, color2: 5, count: 1, diameter: "mm108", disc_price: 9927.5, price_diameter: "198550", stainless: false, key: 'СП-2-mm108-undefined'}
  };

  localStorage.setItem('cart', JSON.stringify(cart));
});
