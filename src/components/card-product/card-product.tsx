import { Link } from 'react-router-dom';
import { fetchCurrentGuitarAction } from '../../store/action-api-creators';
import { store } from '../../store/store';
import { IGuitar } from '../../types/guitar';
import { openCartAddPopup } from '../../store/actions';
import Rating from '../rating/rating';
import { useAppDispatch } from '../../hooks/redux';


function CardProduct(props: IGuitar) {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card"><img src={props.previewImg} srcSet="img/content/catalog-product-0@2x.jpg 2x" width="75" height="190" alt={props.name}/>
      <div className="product-card__info">
        <div className="rate product-card__rate">

          {<Rating rating={props.rating}/>}

          <p className="visually-hidden">{props.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{props.stringCount}</p>
        </div>
        <p className="product-card__title">{props.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${props.price} ₽`}
        </p>
      </div>
      <div
        className="product-card__buttons"

      >
        <Link
          className="button button--mini"
          to={`/${props.id}`}
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
