// import { useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { ESCAPE, SELECTOR_MODAL } from '../../const';
import { useAppDispatch } from '../../hooks/redux';
import { closePopupCartSuccess, openCartAddPopup } from '../../store/actions';
import { IGuitar } from '../../types/guitar';
interface CardAddProps {
    guitar: IGuitar
}

function CartAdd( {guitar}: CardAddProps) {
  const dispatch = useAppDispatch();
  const handleEscapeKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === ESCAPE) {
      dispatch(openCartAddPopup(false));
    }
  };

  const handlePopupOutClick = (evt: MouseEvent) => {
    if (evt.target instanceof Element && !evt.target.closest(SELECTOR_MODAL)) {
      dispatch(openCartAddPopup(false));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);
    document.addEventListener('click', handlePopupOutClick);

    return function cleanup() {
      document.removeEventListener('keydown', handleEscapeKeyDown);
      document.removeEventListener('click', handlePopupOutClick);
    };
  });

  return (
    <div style={{position: 'relative', width: '550px', height: '440px', marginBottom: '50px'}}>
      <div className="modal is-active modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
            <div className="modal__info">
              <img className="modal__img" src={guitar.previewImg} srcSet={guitar.previewImg} width="67" height="137" alt="Честер bass" />
              <div className="modal__info-wrapper">
                <h3 className="modal__product-name title title--little title--uppercase">{guitar.name}</h3>
                <p className="modal__product-params modal__product-params--margin-11">{guitar.vendorCode}</p>
                <p className="modal__product-params">{guitar.stringCount}</p>
                <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{guitar.price} ₽</span></p>
              </div>
            </div>
            <div className="modal__button-container">
              <button
                onClick={() => {
                  dispatch(openCartAddPopup(false));
                  dispatch(closePopupCartSuccess(true));
                }}
                className="button button--red button--big modal__button modal__button--add"
              >
                Добавить в корзину
              </button>
            </div>
            <button onClick={() => dispatch(openCartAddPopup(false))}
              className="modal__close-btn button-cross"
              type="button" aria-label="Закрыть"
            >
              <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartAdd;
