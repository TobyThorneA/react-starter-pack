import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentGuitarAction } from '../../store/action-api-creators';
import { store } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
// import { fetchCurrentGuitarAction } from '../../store/action-api-creators';
import { IGuitar } from '../../types/guitar';
import { openCartAddPopup } from '../../store/actions';

function CardProduct(props: IGuitar) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="product-card"><img src={props.previewImg} srcSet="img/content/catalog-product-0@2x.jpg 2x" width="75" height="190" alt={props.name}/>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">{props.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{props.stringCount}</p>
        </div>
        <p className="product-card__title">{props.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${props.price} ₽`}
        </p>
      </div>
      <div onClick={() => navigate(props.id)}
        className="product-card__buttons"

      >
        <Link
          // onClick={() => dispatch(fetchCommentsAction(props.id))}
          className="button button--mini"
          to={`data${props.id}`}
        >
          Подробнее
        </Link>
        <Link onClick={() => {
          store.dispatch(fetchCurrentGuitarAction(props.id));
          dispatch(openCartAddPopup(true));
        }}
        className="button button--red button--mini button--add-to-cart" to="#"
        >Купить
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;

// <div className="product-card"><img src="img/content/catalog-product-0.jpg" srcSet="img/content/catalog-product-0@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
//     <div className="product-card__info">
//       <div className="rate product-card__rate">
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-star"></use>
//         </svg>
//         <p className="visually-hidden">Рейтинг: Хорошо</p>
//         <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>9</p>
//       </div>
//       <p className="product-card__title">СURT Z30 Plus Acoustics</p>
//       <p className="product-card__price"><span className="visually-hidden">Цена:</span>129 500 ₽
//       </p>
//     </div>
//     <div className="product-card__buttons"><a className="button button--mini" href="#">Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
//     </div>
// </div>
//   <div className="product-card"><img src="img/content/catalog-product-1.jpg" srcSet="img/content/catalog-product-1@2x.jpg 2x" width="75" height="190" alt="Честер Bass"/>
//     <div className="product-card__info">
//       <div className="rate product-card__rate">
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-full-star"></use>
//         </svg>
//         <svg width="12" height="11" aria-hidden="true">
//           <use xlinkHref="#icon-star"></use>
//         </svg>
//         <p className="visually-hidden">Рейтинг: Хорошо</p>
//         <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>9</p>
//       </div>
//       <p className="product-card__title">Честер Bass</p>
//       <p className="product-card__price"><span className="visually-hidden">Цена:</span>51 100 ₽
//       </p>
//     </div>
//     <div className="product-card__buttons"><a className="button button--mini" href="#">Подробнее</a><a className="button button--red-border button--mini button--in-cart" href="#">В Корзине</a>
//     </div>
//   </div>
