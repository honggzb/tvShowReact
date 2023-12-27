import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }: any) {
  const onClick_ = () => { onClick(tvShow) };

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={tvShow ? SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path : ''}
        className={s.img}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}