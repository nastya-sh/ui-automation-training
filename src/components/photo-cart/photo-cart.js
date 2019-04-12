import React, { Fragment } from "react";
import { connect } from "react-redux";
import { closePhotoDetails } from "../../actions";

import "./photo-cart.css";

const PhotoCart = ({ currentPhoto, onClickPrev }) => {
  const { photo } = currentPhoto;
  return (
    <Fragment>
      <div className="title-page">
        <i className="fa fa-angle-left fa-lg" onClick={() => onClickPrev()} />
        <div className="fa fa-folder" aria-hidden="true" />
        {photo.source}
      </div>
      <div className="detail-image">
        <img
          className="detail-image__img"
          src={photo.source}
          alt={photo.title}
        />
      </div>
      <ul className="photo-details">
        <li className="photo-detail">
          <div className="photo-detail__title">File name:</div>
          <div className="photo-detail__value" data-e2e={"source"}>
            {photo.source}
          </div>
        </li>
        <li className="photo-detail">
          <div className="photo-detail__title">Object name:</div>
          <div className="photo-detail__value" data-e2e={"title"}>
            {photo.title}
          </div>
        </li>
        <li className="photo-detail">
          <div className="photo-detail__title">Caption:</div>
          <div className="photo-detail__value" data-e2e={"desc"}>
            {photo.desc}
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

const mapStateToProps = ({ currentPhoto }) => {
  return {
    currentPhoto: currentPhoto
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickPrev: () => dispatch(closePhotoDetails())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoCart);
