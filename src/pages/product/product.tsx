import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';
import Reviews from '../../components/reviews/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCurrentGuitarAction } from '../../store/action-api-creators';
import { characteristicOrDescriptionAction } from '../../store/actions';
import { store } from '../../store/store';

function Product() {
  const guitar = useAppSelector((state) => state.guitarReducer.currentGuitar);
  const comments = useAppSelector((state) => state.commentReducer.comments);
  const characteristicOrDescription = useAppSelector((state) => state.guitarReducer.characteristicOrDescription);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    store.dispatch(fetchCurrentGuitarAction(Number(id)));
  }, [id]);

  return (
    <div>
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">{guitar.name}</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><Link className="link" to="/">Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link className="link" to="/">Каталог</Link>
            </li>
            <li className="breadcrumbs__item"><Link className="link" to={'/'}>{guitar.name}</Link>
            </li>
          </ul>
          <div className="product-container">
            <img className="product-container__img" src={guitar.previewImg} srcSet={guitar.previewImg} width="90" height="235" alt="">
            </img>
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
              <div className="rate product-container__rating">

                {<Rating rating={guitar.rating}/>}

                <p className="visually-hidden">Оценка: Хорошо</p>
                <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{comments.length}</p>
              </div>
              <div className="tabs">

                <button
                  onClick={() => dispatch(characteristicOrDescriptionAction(true))}
                  className={`${characteristicOrDescription
                    ?'button button--medium tabs__button'
                    :'button button--black-border button--medium tabs__button' }`}
                >Характеристики
                </button>

                <button
                  onClick={() => dispatch(characteristicOrDescriptionAction(false))}
                  className={`${characteristicOrDescription
                    ?'button button--black-border button--medium tabs__button'
                    :'button button--medium tabs__button'}`}
                >Описание
                </button>

                <div className="tabs__content" id="characteristics">
                  <table className={`tabs__table ${characteristicOrDescription? '' : 'hidden'}`}>
                    <tbody>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Артикул:</td>
                        <td className="tabs__value">{guitar.vendorCode}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Тип:</td>
                        <td className="tabs__value">{guitar.type}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Количество струн:</td>
                        <td className="tabs__value">{guitar.stringCount}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className={`tabs__product-description ${characteristicOrDescription? 'hidden' : ''}`}>
                    {guitar.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{guitar.price} ₽</p>
              <Link className="button button--red button--big product-container__button" to="#">Добавить в корзину</Link>
            </div>
          </div>
        </div>
        <Reviews/>
      </main>
      <Footer/>
      <Outlet/>
    </div>
  );
}

export default Product;

