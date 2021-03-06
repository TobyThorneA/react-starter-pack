import {  ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COUNT_STARS, ESCAPE, SELECTOR_MODAL } from '../../const';
import { useAppSelector } from '../../hooks/redux';
import { commentsPostAction } from '../../store/action-api-creators';
import { store } from '../../store/store';
import { PostComment } from '../../types/comment';

function ReviewAdd() {

  const stars = [...Array(COUNT_STARS).keys()];

  const {id} = useParams();
  const navigate = useNavigate();
  const guitar = useAppSelector((state) => state.guitarReducer.currentGuitar);
  const [postComment, setPostComment] = useState<PostComment>({
    guitarId: Number(id),
    userName:'',
    advantage:'',
    disadvantage:'',
    comment:'',
    rating: -1,
  });

  const onCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target) {
      setPostComment({ ...postComment, comment: event.currentTarget.value });
    }
  };

  const disabledButton = (dataComment: PostComment) => {
    if(dataComment.advantage.length< 1
      || dataComment.comment.length < 1
      || dataComment.disadvantage.length < 1
      || dataComment.userName.length < 1
      || dataComment.rating < 1
    ){
      return true;
    }
    return false;
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setPostComment({ ...postComment, userName: event.currentTarget.value });
    }
  };

  const onAdvantageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setPostComment({ ...postComment, advantage: event.currentTarget.value });
    }
  };

  const onDisadvantageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setPostComment({ ...postComment, disadvantage: event.currentTarget.value });
    }
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    store.dispatch(commentsPostAction(postComment));
    navigate(`/${id}/success`);
  };

  const onStarChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setPostComment({ ...postComment, rating: Number(event.currentTarget.value) });
    }
  };

  const handleEscapeKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === ESCAPE) {
      navigate(`/${id}`);
    }
  };

  const handlePopupOutClick = (evt: MouseEvent) => {
    if (evt.target instanceof Element && !evt.target.closest(SELECTOR_MODAL)) {
      navigate(`/${id}`);
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
    <div style={{position: 'relative', width: '550px', height: '610px', marginBottom: '50px'}}>
      <div className="modal is-active modal--review modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">???????????????? ??????????</h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar.name}</h3>
            <form onSubmit={handleFormSubmit} className="form-review" >
              <div className="form-review__wrapper">
                <div className="form-review__name-wrapper">
                  <label className="form-review__label form-review__label--required" htmlFor="user-name">???????? ??????</label>

                  <input
                    minLength={2}
                    className="form-review__input form-review__input--name" id="user-name" data-testid='user-name' type="text" autoComplete="off"
                    onChange={onNameChange}
                  />
                  <span className="form-review__warning">
                  </span>

                </div>
                <div>
                  <span className="form-review__label form-review__label--required" style={{marginBottom: '10px'}}>???????? ????????????</span>
                  <div className='rect-rate'>
                    <div className='rect-rate'>
                      <div className="rate rate--reverse">
                        {stars.map((it) => (
                          <div className="rate rate--reverse"  key={it}>
                            <input
                              onChange={onStarChange}
                              className="visually-hidden"
                              id={`star-${it}`}
                              name={`rate${it}`}
                              type="radio"
                              value={it +1 }
                              checked={it < postComment.rating}
                            />
                            <label className="rate__label" htmlFor={`star-${it}`} title="??????????????">

                            </label>
                          </div>
                        ),
                        ).reverse()}
                      </div>
                    </div>

                    <span className="rate__count"></span>
                    <span className="rate__message" style={{marginLeft: '-3px'}} >?????????????????? ????????????</span>

                  </div>
                </div>

              </div>
              <label className="form-review__label" htmlFor="user-name">??????????????????????</label>
              <input
                minLength={2}
                onChange={onAdvantageChange}
                className="form-review__input" id="pros" type="text" autoComplete="off"
              />
              <label className="form-review__label" htmlFor="user-name">????????????????????</label>
              <input
                minLength={2}
                onChange={onDisadvantageChange}
                className="form-review__input" id="user-name" type="text" autoComplete="off"
              />
              <label className="form-review__label" htmlFor="user-name">??????????????????????</label>
              <textarea
                minLength={2}
                onChange={onCommentChange}

                className="form-review__input form-review__input--textarea" id="user-name" rows={10} autoComplete="off"
              >
              </textarea>
              <div>
                <button
                  disabled={disabledButton(postComment)}
                  className="button button--medium-20 form-review__button"
                  type="submit"
                >?????????????????? ??????????
                </button>
              </div>

            </form>
            <button
              onClick={()=> navigate(`/${id}`)}
              className="modal__close-btn button-cross" type="button" aria-label="??????????????"
            >
              <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewAdd;
