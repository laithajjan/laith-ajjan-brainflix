import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import './video-gallery.scss';

const VideoGalleryItem = ({ item, handleClick }) => (
  <Link key={item.id} to={`/home/${item.id}`}>
    <div className="video-next__list" onClick={() => handleClick(item.id)}>
      <img src={item.image} alt={item.title} className="video-next__list--thumbnail" />
      <aside className="video-next__list--aside">
        <h3 className="video-next__list--aside-title">{item.title}</h3>
        <h4 className="video-next__list--aside-author">{item.channel}</h4>
      </aside>
    </div>
  </Link>
);

const VideoGallery = ({ VideoDetails, getVideoById, chosenVideo }) => {
  const handleClick = (id) => {
    getVideoById(id);
  };

  return (
    <div className="video-next">
      <h5 className="video-next__header">NEXT VIDEOS</h5>
      {VideoDetails?.filter((item) => item.id !== chosenVideo.id)
        .map((item) => (
          <VideoGalleryItem key={item.id} item={item} handleClick={handleClick} />
        ))}
    </div>
  );
};

export default VideoGallery;
