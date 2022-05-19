import { Link } from 'react-router-dom';
import CardProduct from '../../components/card-product/card-product';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import CartAdd from '../../components/modals/cart-add';
import CartSuccess from '../../components/modals/cart-success';
import { useAppSelector } from '../../hooks/redux';
import usePagination from '../../hooks/usePagination';

const CONTENT_PER_PAGE = 9;
const VALUE_FOR_THE_BACK_BUTTON = 1;


function Main() {
  const guitars = useAppSelector((state) => state.guitarReducer.guitars);
  const currentGuitar = useAppSelector((state) => state.guitarReducer.currentGuitar);
  const openCartAddPopup = useAppSelector((state) => state.cartAddReducer.openCartAddPopup);
  const openCartSuccess = useAppSelector((state) => state.cartAddReducer.closeCartSuccess);
  const poginationSettings = {
    contentPerPage: CONTENT_PER_PAGE,
    count: guitars.length,
  };

  // eslint-disable-next-line no-console
  console.log('currentGuitar', currentGuitar);

  const nextPageButton = (page:number, totalPages: number, nextPage: () => void ) => {
    if(page < totalPages){
      return (
        <li onClick={() => nextPage()} className="pagination__page pagination__page--next" id="next"><Link to='/' className="link pagination__page-link">Далее</Link>
        </li>
      );
    }
  };

  const prevPageButton = (page:number, prevPage: () => void ) => {
    if(page > VALUE_FOR_THE_BACK_BUTTON){
      return (
        <li onClick={() => prevPage()} className="pagination__page pagination__page--next" id="next"><Link to='/' className="link pagination__page-link">Назад</Link>
        </li>
      );
    }
  };

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination(poginationSettings);


  return (
    <div>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><Link className="link" to='/'>Каталог</Link>
            </li>
          </ul>
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Цена, ₽</legend>
                <div className="catalog-filter__price-range">
                  <div className="form-input">
                    <label className="visually-hidden">Минимальная цена</label>
                    <input type="number" placeholder="1 000" id="priceMin" name="от"/>
                  </div>
                  <div className="form-input">
                    <label className="visually-hidden">Максимальная цена</label>
                    <input type="number" placeholder="30 000" id="priceMax" name="до"/>
                  </div>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Тип гитар</legend>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic"/>
                  <label htmlFor="acoustic">Акустические гитары</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="electric" name="electric" checked/>
                  <label htmlFor="electric">Электрогитары</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked/>
                  <label htmlFor="ukulele">Укулеле</label>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Количество струн</legend>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked/>
                  <label htmlFor="4-strings">4</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked/>
                  <label htmlFor="6-strings">6</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings"/>
                  <label htmlFor="7-strings">7</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled/>
                  <label htmlFor="12-strings">12</label>
                </div>
              </fieldset>
              <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
            </form>
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
                <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
              </div>
              <div className="catalog-sort__order">
                <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
                <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
              </div>
            </div>
            <div className="cards catalog__cards">

              {guitars.slice(firstContentIndex,lastContentIndex).map((it) =>
                <CardProduct key={it.id} {...it} />,
              )}
            </div>
            <div className="pagination page-content__pagination">
              <ul className="pagination__list">

                {prevPageButton(page, prevPage)}

                {[...Array(totalPages).keys()].map((it) =>
                  (
                    <div key={it}>
                      <li
                        onClick={() => setPage(it+1)} key={it}
                        className={`pagination__page ${page === it + 1
                          ?'pagination__page--active'
                          : '' }`}
                      >
                        <li className="link pagination__page-link" >{it + 1}</li>
                      </li>
                    </div>
                  ),
                )}

                {nextPageButton(page, totalPages, nextPage)}

              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
      {openCartAddPopup? <CartAdd guitar={currentGuitar}/>: null}
      {openCartSuccess? <CartSuccess/>: null}
    </div>
  );
}

export default Main;
