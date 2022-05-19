import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ESCAPE, SELECTOR_MODAL } from '../../const';
import { useAppDispatch } from '../../hooks/redux';
import { closePopupCartSuccess } from '../../store/actions';

function CartSuccess() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const closeSuccessAdd = () => dispatch(closePopupCartSuccess(false));

  const handleEscapeKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === ESCAPE) {
      closeSuccessAdd();
    }
  };

  const handlePopupOutClick = (evt: MouseEvent) => {
    if (evt.target instanceof Element && !evt.target.closest(SELECTOR_MODAL)) {
      closeSuccessAdd();
    }
  };

  const handleCloseBtnClick = () => closeSuccessAdd();

  const handleToCartBtnClick = () => {
    // history.push('/cart');
    navigate('/cart');
    closeSuccessAdd();
  };

  const handleToCatalogBtnClick = () => {
    navigate('/');
    closeSuccessAdd();
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
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
      <div className="modal is-active modal--success modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <svg className="modal__icon" width="26" height="20" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <p className="modal__message">Товар успешно добавлен в корзину</p>
            <div className="modal__button-container modal__button-container--add">
              <button
                onClick={handleToCartBtnClick}
                className="button button--small modal__button"
              >Перейти в корзину
              </button>
              <button
                onClick={handleToCatalogBtnClick}
                className="button button--black-border button--small modal__button modal__button--right"
              >Продолжить покупки
              </button>
            </div>
            <button
              onClick={handleCloseBtnClick}
              className="modal__close-btn button-cross" type="button" aria-label="Закрыть"
            ><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSuccess;
