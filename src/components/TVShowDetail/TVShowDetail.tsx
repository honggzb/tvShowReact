import s from "./style.module.css";
import FiveStarRating from '../FiveStarRating/FiveStarRating';

export function TVShowDetail ({tvShow}: any) {
  const rating = tvShow.vote_average;
  return (
    <div className={s.container}>
      <span className={s.title}>{tvShow.name}</span>
      <div className={s.rating_container}>
        <FiveStarRating rating={tvShow.vote_average} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          {tvShow.overview}
        </div>
      </div>
    </div>
  );
}