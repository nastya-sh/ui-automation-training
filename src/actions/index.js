const albumsRequested = () => {
  return {
    type: "FETCH_ALBUMS_REQUEST"
  };
};

const albumsLoaded = newAlbums => {
  return {
    type: "FETCH_ALBUMS_SUCCESS",
    payload: newAlbums
  };
};

const albumsError = error => {
  return {
    type: "FETCH_ALBUMS_FAILURE",
    payload: error
  };
};
export const albumOpenDetails = albumId => {
  return {
    type: "ALBUM_OPEN_DETAILS",
    payload: albumId
  };
};

export const currentAlbumClose = () => {
  return {
    type: "CURRENT_ALBUM_CLOSE"
  };
};

export const openPhotoDetails = photoId => {
  return {
    type: "PHOTO_OPEN_DETAILS",
    payload: photoId
  };
};

export const closePhotoDetails = () => {
  return {
    type: "PHOTO_CLOSE_DETAILS"
  };
};
const fetchAlbums = (albumstoreService, dispatch) => () => {
  dispatch(albumsRequested());
  albumstoreService
    .getAlbums()
    .then(data => {
      dispatch(albumsLoaded(data));
    })
    .catch(err => dispatch(albumsError(err)));
};

export { fetchAlbums };
