/*

ВАЖНОЕ:
function EditList({ data, i, handleDelete, container }) {
  const { id, pTitle: title } = data; нужно переделать на универсальный компонент

добавить кнопку "очистить форму" для удаления всех записей на полях ввода
(нужно в юзЕффект изменять данные при добавлении в поля ввода данных)
нужно получить весь список полей ввода и отслеживать изменения их данных

- нужно на сервере при сохранении данных сначала проверять по массиву обьектов есть ли по такому номеру идентифик. продукт
- если есть тогда перезаписать новые данные 
- если нет тогда создается новый продукт

нужно поставить ограничение на:
- не допускать пустые поля ввода
- в цене только цифры (регулярные выражения)


нужно добавить универсальный метод для уникального ид. для компонентов.

    линк админ пароль оооочень длинний

    сделать роут на удаление и добавление рекламы на сервере

    проработать рекламу:
    - добавить в админ панель удаление и редактирование рекламы
    - продумать функцию на удаление и редактирование данных общую для всех разделов карусели
      (можно сделать с коллбеками)

    записати медіазапроси після закінчення роботи



    заполнить ссылки для кнопок соцсе













            <div className="carousel__wrapper">
          <button
            className="btn carousel__btn carousel__btn_left"
            onClick={leftHandle}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
          <div className="carousel__inner" ref={carouselInner}>
            <div
              className={`carousel__item-wrapper ${
                activeSlide === 1 ? "carousel__item-wrapper_active" : ""
              } `}
            >
              <form action="POST" onSubmit={handleSubmit}>
                <div className="item__container" ref={itemContainer}>
                  <h2 className="main-text">
                    Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę
                    produktu
                  </h2>
                  <div className="categories__wrapper">
                    {categoriesRadioButton}
                  </div>
                  {Object.keys(productCard.value).map((el, i) => {
                    return (
                      <Fragment key={i}>
                        <label className="label" htmlFor={el}>
                          {el}
                        </label>
                        <input
                          className="data-input"
                          type="text"
                          name={el}
                          onChange={onDataChangeHandler}
                          placeholder={
                            el === "id"
                              ? productCard.value.id
                              : null || el === "category"
                              ? productCard.value.category
                              : null
                          }
                          disabled={
                            el === "id" || el === "category" ? true : false
                          }
                        />
                      </Fragment>
                    );
                  })}
                  <div className="btn-wrapper">
                    <button className="btn btn_create" type="submit">
                      CREATE
                    </button>

                    <button className="btn btn_clear" type="button">
                      clear form
                    </button>
                  </div>
                </div>
              </form>

              {/* DATA CONTAINER */}
              <div className="data-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                  <ul>{productEditList}</ul>
                </form>
              </div>
            </div>
            {/* create advertising tab * */}
            
          </div>
          <button
            className="btn carousel__btn carousel__btn_right"
            onClick={rightHandle}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
        </div>

*/