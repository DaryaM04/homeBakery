
// Бургер меню

class Burger{
  constructor(burgerMenu, menuBody, body, menuLink){
    this.burgerMenu = burgerMenu;
    this.menuBody = menuBody;
    this.body = body;
    this.menuLink = menuLink;

    this.clickEvent();
  }

  //показать/скрыть бургер меню 
  burgerShow(){
    if(this.burgerMenu && this.menuBody){
      this.menuBody.classList.toggle('active');
      this.burgerMenu.classList.toggle('active');
      this.body.classList.toggle('lock');
    }
  }

  //привятзка события на кнопки и ссылки бургера
  clickEvent(){
    this.burgerMenu.addEventListener('click', () => this.burgerShow());
    this.menuLink.forEach((elem) => {
      elem.addEventListener('click', () => this.burgerShow())
    })
  }
}

// Инициализация бургер-меню
const burgerMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
const body = document.body;
const menuLink = document.querySelectorAll('.menu_link');

const burgerMobile = new Burger(burgerMenu, menuBody, body, menuLink);


// console.log(domElements);

{
  // //генерация карточек через цикл (данные хранятся в файле data.js)
  // function generateCards(cardsData){
  //   const cards = [];
  //   for(let i = 0; i < cardsData.length; i++){
  //     cards.push(`
  //     <div class="container_catalog_elem">
  //       <img class="imgCatalogElem" src="img/elem${cardsData[i].id}.jpg" alt="">
  //       <h3 class="cards_tittle">${cardsData[i].tittle}</h3>
  //       <p class="cards_descriptions">${cardsData[i].descriptions}</p>
  //       <h3 class="cards_price">${cardsData[i].price}</h3>
  //     </div>
  //     `)
  //   }
  //   return cards;
  // }
  // // отрисовка карточек с товаром в HTML
  // const cardsArr = generateCards(cardsData);
  // domElements.catalog.innerHTML = cardsArr.join('');
  
  // //поиск товаров
  //   let searchValue = '';
  //   //изменение значения поля поиска
  //   domElements.search.input.oninput = (event) => {
  //     // alert(event.target.value);
  //     searchValue = event.target.value;
  //     // filterSearch();
  //   }
  
  // //клик по кнопке поиска
  //   domElements.search.button.onclick = () => {
  //   // alert('клик по кнопке поиск');
  //   filterSearch();
  //   }
    
  // //функция поиска найденных товаров(фильтрация)
  //   function filterSearch(){
  //     const regx = new RegExp(searchValue, 'i');
  //     let filterCardsData = cardsData.filter((cards) => {
  //       if(regx.test(cards.tittle)){
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     if(filterCardsData.length == 0){
  //       domElements.catalog.innerHTML = 'Ничего не найдено'};
  //     domElements.catalog.innerHTML = generateCards(filterCardsData).join('');
  //   }
  // //отрисовка всех карточек каталога по клику кнопки "Весь каталог"
  // domElements.allCatalog.onclick = () => {
  //   domElements.catalog.innerHTML = cardsArr.join('');
  // }
  
  // //отрисовка карточек каталога с Тортами  по клику кнопки "Торты"
  // domElements.cake.onclick = () => {
  //   filterCake();
  // }
  
  // //функция фильтрации тортов
  //   function filterCake(){
  //   const regx = new RegExp('Торт', 'i');
  //   let filterCardsData = cardsData.filter((cards) => {
  //     if(regx.test(cards.tittle)){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  //   if(filterCardsData.length == 0){
  //     domElements.catalog.innerHTML = 'Ничего не найдено'};
  //   domElements.catalog.innerHTML = generateCards(filterCardsData).reverse().join('');
  //   }
  
  // //отрисовка карточек каталога с пирожными  по клику кнопки "Пирожные"
  //   domElements.miniCake.onclick = () => {
  //   filterMiniCake();
  // }
  
  // //функция фильтрации тортов
  //   function filterMiniCake(){
  //   const regx = new RegExp('Пирожное', 'i');
  //   let filterCardsData = cardsData.filter((cards) => {
  //     if(regx.test(cards.tittle)){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  //   if(filterCardsData.length == 0){
  //     domElements.catalog.innerHTML = 'Ничего не найдено'};
  //   domElements.catalog.innerHTML = generateCards(filterCardsData).join('');
  //   }
  
  // //отрисовка карточек каталога с макарон  по клику кнопки "Макаронс"
  //   domElements.macarons.onclick = () => {
  //     filterMacarons();
  //   }
  
  // //функция фильтрации тортов
  //   function filterMacarons(){
  //   const regx = new RegExp('Макарон', 'i');
  //   let filterCardsData = cardsData.filter((cards) => {
  //     if(regx.test(cards.tittle)){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  //   if(filterCardsData.length == 0){
  //     domElements.catalog.innerHTML = 'Ничего не найдено'};
  //   domElements.catalog.innerHTML = generateCards(filterCardsData).join('');
  //   }
}

// ===== секция Каталог реализованная через класс =====
class FilterCatalog{
  constructor(catalog, input, button, allCatalog, cake, miniCake, macaron, easter, cards, cardsData, searchValue, regxCake, regxMiniCake, regxMacaron){
    this.catalog = catalog;
    this.input = input;
    this.button = button;
    this.allCatalog = allCatalog;
    this.cake = cake;
    this.miniCake = miniCake;
    this.macaron = macaron;
    this.easter = easter;

    this.cards = cards;
    this.cardsData = cardsData;
    this.searchValue = searchValue;
    // this.regx = regx;
    this.regxCake = regxCake;
    this.regxMiniCake = regxMiniCake;
    this.regxMacaron = regxMacaron;

    this.writeCards();
  }

  //генерация карточек через цикл (данные хранятся в файле data.js)
  generateCards(cardsData){
    this.cards = [];
    for(let i = 0; i < cardsData.length; i++){
      this.cards.push(`
      <div class="container_catalog_elem">
      <img class="imgCatalogElem" src="img/elem${cardsData[i].id}.jpg" alt="">
        <h3 class="cards_tittle">${cardsData[i].tittle}</h3>
        <p class="cards_descriptions">${cardsData[i].descriptions}</p>
        <h3 class="cards_price">${cardsData[i].price}</h3>
      </div>
      `)
    }
    return this.cards;
  }

  // отрисовка карточек с товаром в HTML
  writeCards(){
    this.catalog.innerHTML = this.generateCards(this.cardsData).join('');
  }

  //поиск товаров 
  //изменение значения поля поиска
  changeInput(){
    this.input.oninput = (event) => this.searchValue = event.target.value;
    return this.searchValue;
  }

  //функция фильтрации карточек 
  filterSearch(){
    let regx = new RegExp(this.searchValue, 'i');
    // console.log('фильтрация карточек писка');
    return this.cardsData.filter((cards) => {
      if(regx.test(cards.tittle)){
        return true;
      } else {
        return false;
      }
    })
  }

  //отрисовка найденных карточек в HTML
  writeSearchCards(){
    this.catalog.innerHTML = this.generateCards(this.filterSearch()).join('');
    // console.log('отрисовка карточек после поиска');
  }

  // функция фильтрации карточек с Тортами
  filterCake(){
     return this.cardsData.filter((cards) => {
        if(this.regxCake.test(cards.tittle)){
          return true;
        } else {
          return false;
        }
    })
  }
  
  //отрисовка отфильтрованных карточек с Тортами в HTML
  writeFilterCardsCake(){
    this.catalog.innerHTML = this.generateCards(this.filterCake()).join('');
  }

  // функция фильтрации карточек с Пирожными
  filterMiniCake(){
   return this.cardsData.filter((cards) => {
      if(this.regxMiniCake.test(cards.tittle)){
        return true;
      } else {
        return false;
      }
    })
  }

  //отрисовка отфильтрованных карточек с Пирожными в HTML
  writeFilterCardsMiniCake(){
    this.catalog.innerHTML = this.generateCards(this.filterMiniCake()).join(''); // код дубрируется 
  }

  // функция фильтрации карточек с Макарон
  filterMacarons(){
    return this.cardsData.filter((cards) => {
      if(this.regxMacaron.test(cards.tittle)){
        return true;
      } else {
        return false;
      }
    })
  }

  //отрисовка отфильтрованных карточек с Макарон в HTML
  writeFilterCardsMacaron(){
    this.catalog.innerHTML = this.generateCards(this.filterMacarons()).join('');
  }

  clickButton(){
    //клик по кнопке поиска
    this.button.onclick = () => this.writeSearchCards();
    //клик по кнопке Весь каталог
    this.allCatalog.addEventListener('click', () => this.writeCards());

    //клик по кнопке Торты
    this.cake.onclick = () => {
      // alert('клик по кнопке поиск Торты');
      // console.log('клик по кнопке поиск Торты');
      this.writeFilterCardsCake();
    }
      
    //клик по кнопке Пирожные
    this.miniCake.onclick = () => {
      // alert('клик по кнопке поиск Пирожные');
      // console.log('клик по кнопке поиск Пирожные');
      this.writeFilterCardsMiniCake();
    }
      
    
    //клик по кнопке Макаронс
    this.macaron.onclick = () => {
      this.writeFilterCardsMacaron();
    }
  }
}

//переменные, в которой хранятся элементы дом дерева секции каталог 
const catalog = document.getElementById('container_catalog');
const input = document.getElementById('search');
const button = document.querySelector('.buttonSearch');
const allCatalog = document.getElementById('allCatalog');
const cake = document.getElementById('cake');
const miniCake = document.getElementById('miniCake');
const macarons = document.getElementById('macarons');
const easter = document.getElementById('easter');

//переменные, реулизующие регулярное выражение для функции поиска 
// const regx = new RegExp(searchValue, 'i');

let searchValue = '';
const cards = [];
const regxCake = new RegExp('Торт', 'i');
const regxMiniCake = new RegExp('Пирожное', 'i');
const regxMacaron = new RegExp('Макарон', 'i');

const cardsData = [
  {
      id: 1,
      tittle: 'Торт "Анна Павлова"',
      descriptions: 'Хрустящее безе, воздушное суфле, сливочный крем-чиз с бурбонской ванилью и свежие ягоды.',
      price: '2000 руб/шт',
      category: category.cake,
  },
  {
      id: 2,
      tittle: 'Торт "Карамельный медовик"',
      descriptions: 'Нежные медовые коржи, сдивочный крем с добавлением соленой карамели. Свежие ягоды.',
      price: '1800 руб/кг',
      category: category.cake,
    
  },
  {
      id: 3,
      tittle: 'Пирожное "Нежность"',
      descriptions: 'Медовые коржи, сливочный крем-чиз и вишневый конфитюр. Декор из свежих ягод.',
      price: '350 руб/шт',
      category: category.miniCake,
  },
  {
      id: 4,
      tittle: 'Коробка эклеров 5шт',
      descriptions: 'В ассортименте: Сникерс, Баунти, Тирамису, Ванильные.',
      price: '1000 руб/шт',
      category: category.miniCake,
  },
  {
      id: 5,
      tittle: 'Торт "Наполеон"',
      descriptions: 'Слоеные коржи, сливочный заварной крем "Пломбир".',
      price: '1600 руб/кг',
      category: category.сake,
  },
  {
      id: 6,
      tittle: 'Торт "Нежность"',
      descriptions: 'Медовые коржи, сливочный крем-чиз и вишневый конфитюр.',
      price: '2000 руб/кг',
      category: category.сake,
  },
  {
      id: 7,
      tittle: 'Макарон "Малина"',
      descriptions: 'Французское печенье на 100% миндальной муке, ганаш на белом итальянском шоколаде.',
      price: '150 руб/шт',
      category: category.macaron,
  },
  {
      id: 8,
      tittle: 'Макарон "Лаванда"',
      descriptions: 'Французское печенье на 100% миндальной муке, ганаш на белом итальянском шоколаде.',
      price: '150 руб/шт',
      category: category.macaron,
  },
  {
      id: 9,
      tittle: 'Макарон "Манго"',
      descriptions: 'Французское печенье на 100% миндальной муке, ганаш на белом итальянском шоколаде.',
      price: '150 руб/шт',
      category: category.macaron,
  },
  {
      id: 10,
      tittle: 'Пирожное "Анна Павлова"',
      descriptions: 'Хрустящее безе, воздушное суфле, сливочный крем-чиз с бурбонской ванилью и свежие ягоды.',
      price: '350 руб/шт',
      category: category.miniCake,
  },
  {
      id: 11,
      tittle: 'Пирожное "Шоколадный медовик"',
      descriptions: 'Шоколадные медовые коржи, шоколадный крем-чиз, соленая карамель, свежая голубика.',
      price: '350 руб/шт',
      category: category.miniCake,
  },
  {
      id: 12,
      tittle: 'Торт "Морковный"',
      descriptions: 'Морковный бисквит с грецкими орехами, крем-чиз, конфитюр из свежей вишни.',
      price: '1800 руб/кг',
      category: category.cake,
  },
  {
      id: 13,
      tittle: 'Пирожное "Медовик"',
      descriptions: 'Медовые коржи, сливочный крем-чиз и вишневый конфитюр.',
      price: '350 руб/шт',
      category: category.miniCake,
  },
  {
      id: 14,
      tittle: 'Торт "Шоколадный Медовик"',
      descriptions: 'Шоколадные медовые коржи, ванильное суфле с черносливом, сливочный крем.',
      price: '1800 руб/кг',
      category: category.cake,
  },
  {
      id: 15,
      tittle: 'Меренговый рулет',
      descriptions: 'Тонкий слой хрустящего безе, нежное суфле, крем-чиз, свежая клубника.',
      price: '2500 руб/кг',
      category: category.cake,
  },
  {
      id: 16,
      tittle: 'Торт "Ваниль"',
      descriptions: 'Заварное воздушное тесто, заварной крем с бурбонской ванилью, свежие ягоды.',
      price: '1700 руб/кг',
      category: category.cake,
  },
  {
      id: 17,
      tittle: 'Торт "Три Шоколада"',
      descriptions: 'Три слоя мусса из темного, молочного и белого шоколада. Шоколадный бисквит.',
      price: '2000 руб/кг',
      category: category.cake,
  },
  {
      id: 18,
      tittle: 'Торт "Медовик классический"',
      descriptions: 'Нежные коржи на майском меде, сливочно-сиетанный крем, свежие ягоды.',
      price: '1600 руб/кг',
      category: category.cake,
  },
]

const filterCatalogWrite = new FilterCatalog(catalog, input, button, allCatalog, cake, miniCake, macarons, easter, cards, cardsData, searchValue, regxCake, regxMiniCake, regxMacaron);
// filterCatalogWrite.writeCards();
filterCatalogWrite.clickButton();
filterCatalogWrite.changeInput();



// Слайдер 
class Slider
{
  constructor({slider, visibleNum = 1, autoScroll = true, paginations = true, arrows = true})
  {
    this.slider = slider; //Объект slider-container
    this.visibleNum = visibleNum; //Количество одновременно видимых слайдов
    this.autoScroll = autoScroll; //Вкл-Откл автопролистывания слайдера
    this.paginations = paginations; //Вкл-Откл пагинанацию для слайдера
    this.arrows = arrows; //Вкл-Откл стрелок влево-вправо
    this.setup(this.slider); //Обновление текущих значений слайдера
    this.attachEvents();
  }

  setup(slider) 
  {
    this.position = 0; //Текущая позиция слайдера
    this.pagIndex = 0; //Текущая позиция пагинации

    this.sliderLine = slider.querySelector('.slider-line'); //Движущаяся линия слайдера
    this.sliderPaginationBlock = slider.querySelector('.slider-block__pagination'); //Блок для пагинаций

    this.sliderWrapperWidth = slider.querySelector('.slider-block__wrapper').offsetWidth; //Ширина неподвижного окна просмотра
    this.sliderLineWidth = slider.querySelector('.slider-line').scrollWidth; //Ширина всей прокручиваемой линии слайдера
    this.lineItemWidth = slider.querySelector('.slider-line__item').offsetWidth; //Ширина одного элемента линии слайдера
    this.lineItemsNumber = slider.querySelectorAll('.slider-line__item').length; //Количество элементов в линии слайдера
    this.scrollLength = this.lineItemWidth + ((this.sliderLineWidth - (this.lineItemWidth * this.lineItemsNumber)) / (this.lineItemsNumber - 1)); //Длина прокрутки линии слайдера

    this.posX1 = 0; //Координаты начала касания
    this.posX2 = 0; //Координаты конца касания
    this.swipeLength = 0; //Длинна касания
    this.swipeThreshold = this.sliderWrapperWidth / 3; //Длинна касания достаточная для свайпа

    this.createPaginations();
    this.goToSlide(this.pagIndex);

    if(!this.paginations)                    //Скрытие блока пагинации при включённой настройке,
    {                                        //но автопереключение будет продолжаться.
      this.sliderPaginationBlock.classList.add('hiden-block');
    }

    if(!this.arrows)
    {
      this.slider.querySelector('.slider__arrow-left').classList.add('hiden-block');
      this.slider.querySelector('.slider__arrow-right').classList.add('hiden-block');
      this.slider.style.justifyContent = 'center';
    }
  }

  createPaginations() //Создание блоков пагинации
  {
    const pagNum = (this.lineItemsNumber - this.visibleNum) + 1; //Количество пагинации в зависимости от количества одновременно видимых слайдов
    const pagNode = document.createElement('div');
    pagNode.className = 'pagination-block';
    pagNode.innerHTML = '<div class="pagination-block__filler"></div>';
    this.sliderPaginationBlock.innerHTML = '';

    for(let i = 0; i < pagNum; i++)
    {
      this.sliderPaginationBlock.append(pagNode.cloneNode(true));
    }

    this.paginationBlocks = slider.querySelectorAll('.pagination-block'); //Все блоки пагинации

    this.paginationBlocks.forEach((item, index) => 
    {                                        
      item.addEventListener('animationend', () => //Установка события на конец анимации пагинации,
      {                                           //для автоматического переключения на следующий слайд
        this.nextSlide();
      });

      item.addEventListener('click', () => //Установка события на переключение слайдов,
      {                                    //при нажатии на пагинацию
        this.goToSlide(index);
      });
    });
  }

  goToSlide(num) 
  {
    this.position = this.scrollLength * num;
    this.pagIndex = num;
    this.sliderLine.style.transform = `translateX(${-this.position}px)`;
    this.activatePagination();
  }

  nextSlide() 
  {
    if(this.position < ((this.lineItemsNumber - this.visibleNum) * this.scrollLength))
    {
      this.position += this.scrollLength;
      this.pagIndex++;
    }
    else
    {
      this.position = 0;
      this.pagIndex = 0;
    }

    this.sliderLine.style.transform = `translateX(${-this.position}px)`;
    this.activatePagination();
  }

  prevSlide() 
  {
    if(this.position > 0)
    {
      this.position -= this.scrollLength;
      this.pagIndex--;
    }
    else
    {
      this.position = (this.lineItemsNumber - this.visibleNum) * this.scrollLength;
      this.pagIndex = this.lineItemsNumber - this.visibleNum;
    }

    this.sliderLine.style.transform = `translateX(${-this.position}px)`;
    this.activatePagination();
  }

  activatePagination() //Активация пагинации
  {
    if(this.autoScroll) // анимированная авто пагинация
    {
      this.paginationBlocks.forEach((item) =>                            //Берём все блоки пагинации;
      {                                                                  //Удаляем стиль анимации для каждого;
        item.firstChild.classList.remove('activ-pagination-animation');  //Для пагинации актуального слайда
      })                                                                 //добавляем стиль анимации;   
      this.paginationBlocks[this.pagIndex].firstChild.classList.add('activ-pagination-animation');
    }
    else // не анимированная статичная пагинация
    {
      this.paginationBlocks.forEach((item) =>                  //Берём все блоки пагинации;
      {                                                        //Удаляем стиль активации для каждого;
        item.firstChild.classList.remove('activ-pagination');  //Для пагинации актуального слайда
      })                                                       //добавляем стиль активации;   
      this.paginationBlocks[this.pagIndex].firstChild.classList.add('activ-pagination');
    }
  }

  attachEvents() 
  {
    const arrowLeft = this.slider.querySelector('.arrow-left__block');
    const arrowRight = this.slider.querySelector('.slider__arrow-right');

    arrowLeft.addEventListener('click', () => this.prevSlide()); //Переключение слайдера влево
    arrowRight.addEventListener('click', () => this.nextSlide());//Переключение слайдера вправо

    this.sliderLine.addEventListener('touchstart', (event) => //Установка события на начало касания
    {
      this.posX1 = event.changedTouches[0].clientX; //Координаты начала касания по оси Х

      const activPagination = this.slider.querySelector('.activ-pagination-animation'); //Текущая активная пагинация
      activPagination.style.animationPlayState = 'paused'; //Ставим анимацию на паузу
    });

    this.sliderLine.addEventListener('touchend', (event) => //Установка события на конец касания
    {
      this.posX2 = event.changedTouches[0].clientX; //Координаты конца касания по оси Х
      this.swipeAction();
  
      this.removePausePagination();
    });

    this.sliderLine.addEventListener('mousedown', (event) => //Установка события на зажатие кнопки мыши (левой)
    {
      this.posX1 = event.clientX; //Координаты клика по оси Х
    });
      
    this.sliderLine.addEventListener('mouseup', (event) => //Установка события на отпускание кнопки мыши (левой)
    {
      this.posX2 = event.clientX; //Координаты отжатия кнопки по оси Х
      this.swipeAction();
    });
  }

  swipeAction()
  {
    this.swipeLength = this.posX1 - this.posX2; //Определение длинны свайпа

    if(Math.abs(this.swipeLength) > this.swipeThreshold) //Сравнение с необходимой длинной свайпа, 
    {                                                    //для прокрутки слайдера
      if(this.swipeLength > 0) this.nextSlide(); //Положительное число => свайп вправо
      if(this.swipeLength < 0) this.prevSlide(); //Отрицательное число => свайп влево
    }
  }

  removePausePagination() //Очистка стилей для завершения паузы анимации
  {
    this.paginationBlocks.forEach((item) =>
    {
      item.firstChild.style = '';
    })
  }
}


const slider = document.querySelector('.slider-container');

const sliderSetup = 
{
  slider: slider,
  visibleNum: 1,
  autoScroll: true,
  paginations: true,
  arrows: true,
}

const sliderObj = new Slider(sliderSetup);
// console.log(sliderObj);

/* добавлено */
// Для адаптации слайдера можно использовать фукцию: 
window.addEventListener('resize',(e) => 
{
  // Здесь меняете стили слайдера
  // После обязательно переинициализируете с помощью sliderObj.setup(slider - переменная для слайдера из DOM)
  sliderObj.setup(slider);
});




