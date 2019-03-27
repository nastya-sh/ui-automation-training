import React from "react";
import { Link } from "react-router-dom";

const AlbumPage = props => {
  const albumId = props.match.params.id;
  return (
    <div>
      <Link to="/">Назад</Link>
      <p>Album page</p>
      <p>albumId- {albumId}</p>
    </div>
  );
};

export default AlbumPage;
