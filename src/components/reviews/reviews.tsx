import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCommentsAction } from '../../store/action-api-creators';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { store } from '../../store/store';
import CurrentReview from '../current-review/current-review';
import { FIRST_COMMENT, STEP_COMMENTS } from '../../const';
import { loadNextComments } from '../../store/actions';
import { Link } from 'react-router-dom';
import { IComment } from '../../types/comment';
import dayjs from 'dayjs';

function Reviews() {
  const comments = useAppSelector((state) => state.commentReducer.comments);
  const nextComments = useAppSelector((state) => state.commentReducer.lastcomment);
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    store.dispatch(fetchCommentsAction(Number(id)));
  }, [id]);

  const navigate = useNavigate();
  const location = useLocation();

  const getSortedUpDays = (commentsArray: IComment[]): IComment[] => commentsArray.slice().sort((prevDate, currentDate) => (dayjs(currentDate.createAt).isAfter(dayjs(prevDate.createAt)) ? 1 : -1));
  const commentsSort = useMemo(() => getSortedUpDays(comments), [comments]).slice(0, nextComments);

  if(comments.length === 0){
    return (
      <div>
        <section className="reviews">
          <h3 className="reviews__title title title--bigger">Отзывы</h3>
          <Link to={'/review'}className="button button--red-border button--big reviews__sumbit-button" >Оставить отзыв </Link>
          <h1>Пока нет отзывов, станьте первым!</h1>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <button onClick={() => navigate(`${location.pathname}/review`)} className="button button--red-border button--big reviews__sumbit-button" >Оставить отзыв</button>

        {commentsSort.slice(FIRST_COMMENT, nextComments).map((it) => <CurrentReview key={it.id} comment={it} />)}

        {nextComments < comments.length
          ?
          <button
            onClick={() => dispatch(loadNextComments(STEP_COMMENTS))}
            className="button button--medium reviews__more-button"
          >
            Показать еще отзывы
          </button>
          : null}

        {
          nextComments > 6
            ?
            <a onClick={() => {
            // eslint-disable-next-line no-console
              console.log('click');
            }} className="button button--up button--red-border button--big reviews__up-button " href="#headLink"
            >Наверх
            </a>
            : ''
        }

      </section>
    </div>
  );
}

export default Reviews;
