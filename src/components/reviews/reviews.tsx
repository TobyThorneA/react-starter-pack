import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCommentsAction } from '../../store/action-api-creators';
import { useParams } from 'react-router-dom';
import { store } from '../../store/store';
import CurrentReview from '../current-review/current-review';
import { FIRST_COMMENT, STEP_COMMENTS } from '../../const';
import { loadNextComments } from '../../store/actions';
import { Link } from 'react-router-dom';

interface ReviewsProps {
  id: string | undefined
}

function Reviews({...props}: ReviewsProps) {
  const comments = useAppSelector((state) => state.commentReducer.comments);
  const nextComments = useAppSelector((state) => state.commentReducer.lastcomment);
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    store.dispatch(fetchCommentsAction(Number(id)));
  }, [id]);

  // const comments1 = comments.sort((prev,next) => {
  //   // new Date(prev.createAt).toLocaleDateString();
  //   // new Date(next.createAt).toLocaleDateString();
  //   // eslint-disable-next-line no-console
  //   // console.log('dataaaaaaaaaaa', prev.createAt, next.createAt);
  //   return 1;
  // });

  // // eslint-disable-next-line no-console
  // console.log('dataaaaaaaaaaa', comments1);

  return (
    <div>
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <Link className="button button--red-border button--big reviews__sumbit-button" to="#">Оставить отзыв</Link>
        {comments.slice(FIRST_COMMENT, nextComments).map((it) => <CurrentReview key={it.id} comment={it} />)}

        {nextComments < comments.length
          ?
          <button
            onClick={() => dispatch(loadNextComments(STEP_COMMENTS))}
            className="button button--medium reviews__more-button"
          >
            Показать еще отзывы
          </button>
          : null}

        <a onClick={() => {
          // eslint-disable-next-line no-console
          console.log('click');
        }} className="button button--up button--red-border button--big reviews__up-button " href="#headLink"
        >Наверх
        </a>

      </section>
    </div>
  );
}

export default Reviews;
