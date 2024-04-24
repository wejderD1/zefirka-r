/*
  разбить на компоненты повторяющиеся блоки.

    сделать страницу для полного описания товара

    на вкладці АДМІН треба зробити список массиву товарів і щоб його можна було редагувати
    - сделать карусель для разных разделов обслуживания
    - редагувати данні
    - добавлення реклами (так само як продукти)
    
    записати медіазапроси після закінчення роботи
    
<<<<<<< HEAD
    в картках продуктів різна висота залежить від кількості тексту
=======
    після видалення карточки продукта треба почистити обробники події на кнопкі видалити

    
    в карточках продуктів треба опис зробити визначеною довжиною, а протім три крапки в кінці.


    сторінка детально продукція
    - посилати в пропсах данні
    -переписати  роути - зробити идентифікаційний номер продуктів в url
    - з головної сторінки посилати пропси до продукції данні з масиву продуктів

    (на майбутнє під картинкою продукта вставити наклейку знижка або акція)

<<<<<<< HEAD
    линк админ пароль оооочень длинний
=======
    заполнить ссылки для кнопок соцсе

    кнопка назад на вкладці докладно продукт


         <Carousel key={key}>
          /* create new product tab *
          <div className="data__item-wrapper">
            <div className="data-input__container">
              <h2 className="main-text">
                Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę produkt
              </h2>
              <div className="categories__wrapper">{categoriesRadio}</div>
              <label className="label" htmlFor="pTitle">
                title
              </label>
              <input
                className="data-input"
                type="text"
                name="pTitle"
                onChange={onDataChangeHandler}
              />

              <label className="label" htmlFor="pDescription">
                product description
              </label>
              <input
                className="data-input"
                type="text"
                name="pDescription"
                onChange={onDataChangeHandler}
              />

              <label className="label" htmlFor="pPrice">
                product price
              </label>
              <input
                className="data-input"
                type="text"
                name="pPrice"
                onChange={onDataChangeHandler}
              />

              <label className="label" htmlFor="pImg">
                product img
              </label>
              <input
                className="data-input"
                type="text"
                name="pImg"
                onChange={onDataChangeHandler}
              />

              <button
                className="btn admin-panel__button"
                type="button"
                onClick={() => {
                  newProductCreate(productCard);
                }}
              >
                CREATE
              </button>
            </div>
            <div className="data-wrapper">
              <ul>{dataItem}</ul>
            </div>
          </div>
          {/* create advertising tab *
          <div className="data__item-wrapper">
            <div className="data-input__container">
              <h2 className="main-text">
                Utwórz reklamę, napisz nagłówek i opis reklamy.
              </h2>
              <label className="label" htmlFor="pTitle">
                title
              </label>
              <input
                className="data-input"
                type="text"
                name="pTitle"
                onChange={onDataChangeHandler}
              />

              <label className="label" htmlFor="pDescription">
                advertising description
              </label>
              <input
                className="data-input"
                type="text"
                name="pDescription"
                onChange={onDataChangeHandler}
              />

              <label className="label" htmlFor="pImg">
                img
              </label>
              <input
                className="data-input"
                type="text"
                name="pImg"
                onChange={onDataChangeHandler}
              />
            </div>
          </div>
          {/* NONE *
          <div className="data__item-wrapper">
            <h2 className="main-text">nowa pozycja</h2>
            <img
              src={require(`../../assets/images/20220914_141213.jpg`)} //относительный путь, работает только в папке components/component
              alt="information-img"
              className="information__photo"
            />
          </div>
        </Carousel>
*/