import React from "react";
import ReactPlayer from "react-player";

const videos = "https://vimeo.com/241495043";

const Hearder = () => {
  return (
    <div className="container__header">
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi
        illum consequuntur sit ipsam hic autem quam provident laborum, tempora
        beatae ut alias adipisci nemo facere quae accusantium excepturi. Magni
        iure fugiat cupiditate, aliquid corrupti deserunt totam velit dolor enim
        consequatur architecto nostrum esse debitis! Illum, similique dolores
        soluta nesciunt minima atque molestiae repellat saepe eius sapiente et
        minus explicabo repudiandae quasi natus magni, nisi, architecto cumque
        nostrum voluptate! Sed eligendi quia commodi labore aperiam optio
        quidem, doloribus blanditiis provident iusto deserunt non quae eaque ut
        quis aliquid fugiat excepturi ducimus assumenda sunt animi dolorum ipsum
        explicabo magnam? Excepturi, corrupti!
      </p>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          controls={true}
          playing
          muted
          url={videos}
        />
      </div>
    </div>
  );
};

export default Hearder;
