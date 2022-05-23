import { COUNT_STARS } from '../../const';

const stars = [...Array(COUNT_STARS).keys()];

function Starsы() {
  return (
    <div className='rect-rate'>
      {/* {stars} */}
      <div className="rate rate--reverse">
        {stars.map((it) => (
          <div className="rate rate--reverse"  key={it}>
            <input onClick={(evt) => {
              // eslint-disable-next-line no-console
              console.log('evt', evt.currentTarget.value);
            }}
            className="visually-hidden" id={`${it+1}`} name="rate" type="radio" value={`${it+1}`}
            />
            <label className="rate__label" htmlFor={`${it+1}`} title="Отлично">
            </label>
          </div>
        ),
        ).reverse()}
      </div>
    </div>
  );
}


export default Starsы;
