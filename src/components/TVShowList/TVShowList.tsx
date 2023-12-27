import s from "./style.module.css";
import { TVShowListItem } from '../TVShowListItem/TVShowListItem';

export function TVShowList({ tvShowList, onClickItem }: any) {
 
  return (
    <div>
      <div className={s.title}>you'll probably like: </div>
      <div className={s.list}>
        { tvShowList.map((tvShow: any, index: number) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          )
        })};
      </div>
    </div>
  );
}