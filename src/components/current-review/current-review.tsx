import { IComment } from '../../types/guitar';

interface CurrentReviewProps {
    comment: IComment
}

function CurrentReview({comment}: CurrentReviewProps) {

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4
          className="review__title review__title--author title title--lesser"
        >
          {comment.userName}
        </h4><span className="review__date">{new Date(comment.createAt).toLocaleDateString()}</span>
      </div>
      <div className="rate review__rating-panel">
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
        <p className="visually-hidden">Оценка: Хорошо</p>
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{comment.advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{comment.disadvantage}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment.comment}</p>
    </div>
  );
}

export default CurrentReview;
