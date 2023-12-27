import { useEffect, useState } from 'react';
import './global.css';
import s from './style.module.css';
import logoImg from './assets/logo.png';
import { BACKDROP_BASE_URL } from "./config";
import { TVShowAPI } from './api/tv-show';
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail';
import { Logo } from './components/Logo/Logo';
import { TVShowList } from './components/TVShowList/TVShowList';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  
  const [currentTVShow, setCurrentTVShow] = useState<any>([]);
  const [recommendations, setRecommendations] = useState<any>([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList: any = await TVShowAPI.fetchPopulars();
      if(popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[1]);
      }
    } catch (error) {
      alert("Something went wrong when fetching the popular tv shows");
    }
  }

  async function fetchRecommendations(tvShowId: number) {
    try {
      const recommendations: any = await TVShowAPI.fetchRecommendations(tvShowId);
      if(recommendations.length > 0) {
        setRecommendations(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert("Something went wront fetching the recommendations");
    }
  }

  async function searchTVShow(tvShowName: string) {
    try {
      const searchResponse: any = await TVShowAPI.fetchByTitle(tvShowName);
      if(searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Something went wrong when fetching the popular tv shows");
    }
  }
  
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if(currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  //console.log(currentTVShow); 

  function setCurrentTvShowFromRecommendation(tvShow: any) {
    alert(JSON.stringify(tvShow));
  }

  function updateCurrentTVShow(tvShow: any) {
    setCurrentTVShow(tvShow);
  }

  return (
    <div 
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo image={logoImg} title="Watowatch" subtitle="Find a show you may like" />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow &&<TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        { currentTVShow && 
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendations} />
        }
      </div>
    </div>
  );
}

export default App;
