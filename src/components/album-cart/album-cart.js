import React from "react";
import { connect } from "react-redux";
import { currentAlbumClose, openPhotoDetails } from "../../actions";

import "./album-cart.css";

const AlbumCart = ({
  currentAlbum,
  onClickPrev,
  onMouseMove,
  openPhotoDetails
}) => {
  const { photoList, title } = currentAlbum.album;

  return (
    <div>
      <div className="title-page">
        <i className="fa fa-angle-left fa-lg" onClick={() => onClickPrev()} />
        <span className="fa fa-folder" aria-hidden="true" />
        {title}
      </div>
      <ul className="photoList">
        {photoList.map(photo => {
          return (
            <li
              className="photo-item test"
              key={photo.id}
              data-e2e={`photo-${photo.id}`}
            >
              <img
                className="photo-item__img"
                src={photo.source}
                alt={photo.title}
                onMouseOver={onMouseMove}
              />
              <span
                className="photo-item__title"
                onClick={() => openPhotoDetails(photo.id)}
              >
                <i className="fa fa-check" aria-hidden="true" />
                {photo.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ currentAlbum }) => {
  return {
    currentAlbum: currentAlbum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickPrev: () => dispatch(currentAlbumClose()),
    onMouseMove: () => {
      // console.log("onMouseMove");
    },
    openPhotoDetails: id => dispatch(openPhotoDetails(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCart);
