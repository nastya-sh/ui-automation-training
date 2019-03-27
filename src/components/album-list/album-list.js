import React, { Component, Fragment } from "react";
import AlbumListItem from "../album-list-item";
import { connect } from "react-redux";

import withAlbumstoreService from "../hoc";
import { fetchAlbums, albumOpenDetails } from "../../actions";
import { compose } from "../../utils";

import AlbumCart from "../album-cart";
import PhotoCart from "../photo-cart";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import "./album-list.css";

const AlbumList = ({ albums, onOpenAlbum, currentAlbum, currentPhoto }) => {
  if (currentAlbum.album === undefined) {
    return (
      <Fragment>
        <div className="title-page">Welcome, user_name</div>
        <div>
          {albums.map(album => {
            return (
              <li key={album.id} className="flex">
                <AlbumListItem
                  album={album}
                  onOpenAlbum={() => onOpenAlbum(album.id)}
                />
              </li>
            );
          })}
        </div>
      </Fragment>
    );
  } else if (currentPhoto.photo === undefined) {
    return <AlbumCart />;
  } else {
    return <PhotoCart />;
  }
};

class AlbumListContainer extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }
  render() {
    const {
      albums,
      loading,
      error,
      onOpenAlbum,
      currentAlbum,
      currentPhoto
    } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <AlbumList
        albums={albums}
        onOpenAlbum={onOpenAlbum}
        currentAlbum={currentAlbum}
        currentPhoto={currentPhoto}
      />
    );
  }
}

const mapStateToProps = ({
  albums,
  loading,
  error,
  currentAlbum,
  currentPhoto
}) => {
  return {
    albums,
    loading,
    error,
    currentAlbum,
    currentPhoto
  };
};

const mapDispatchToProps = (dispatch, { albumstoreService }) => {
  return {
    fetchAlbums: fetchAlbums(albumstoreService, dispatch),
    onOpenAlbum: id => dispatch(albumOpenDetails(id))
  };
};

export default compose(
  withAlbumstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AlbumListContainer);
