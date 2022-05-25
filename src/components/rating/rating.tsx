import { COUNT_STARS } from '../../const';

function Star(): JSX.Element {
  return (
    <svg width='12' height='11' aria-hidden="true" data-testid="star">
      <use xlinkHref="#icon-star"></use>
    </svg>
  );
}

function FullStar(): JSX.Element {
  return (
    <svg width='12' height='11' aria-hidden="true" data-testid="full-star">
      <use xlinkHref="#icon-full-star"></use>
    </svg>
  );
}
interface RatingProps {
  rating: number
}
function Rating({rating}: RatingProps): JSX.Element {

  const fullCount = Math.round(rating);
  const emptyCount = COUNT_STARS - fullCount;

  const fullStars = new Array(fullCount).fill(null).map((_, i) => i).map((i) => <FullStar key={i}/>);
  const emptyStars = new Array(emptyCount).fill(null).map((_, i) => i).map((i) => <Star key={i} />);

  return (
    <>
      {fullStars}
      {emptyStars}
    </>
  );
}

export default Rating;
