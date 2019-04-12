import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import "./album-list-item.css";

const AlbumListItem = ({ album, onOpenAlbum }) => {
  const { source, title, createdTime, photoList, id } = album; //id,
  return (
    <Fragment>
      <div className="flex_item flex__img">
        <img className="flex-img" src={source} alt={title} />
      </div>
      <div className="flex_item flex__desc">
        <span>{title}</span>
        <span className="info">
          <i className="fa  fa-image" aria-hidden="true" />
          {`${photoList.length} files`}
        </span>
        <span className="info">
          <i className="fa fa-clock " aria-hidden="true" />
          {createdTime}
        </span>
      </div>
      <div className="flex_item flex__next" data-e2e={`open-album-${id}`}>
        {/* <Link to={`/albums/${id}`}> */}
        <i
          onClick={onOpenAlbum}
          className=" fa fa-angle-double-right fa-2x"
          aria-hidden="true"
        />
        {/* </Link> */}
      </div>
    </Fragment>
  );
};

export default AlbumListItem;
