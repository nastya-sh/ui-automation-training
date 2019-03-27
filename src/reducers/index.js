const initialState = {
  albums: [],
  loading: true,
  error: null,
  currentAlbum: {},
  currentPhoto: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUMS_REQUEST":
      return {
        ...state,
        albums: [],
        loading: true,
        error: null
      };
    case "FETCH_ALBUMS_SUCCESS":
      return {
        ...state,
        albums: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_ALBUMS_FAILURE": {
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    }
    case "ALBUM_OPEN_DETAILS": {
      const albumId = action.payload;
      const album = state.albums.find(album => album.id === albumId);

      return {
        ...state,
        currentAlbum: { ...state.currentAlbum, album }
      };
    }
    case "CURRENT_ALBUM_CLOSE": {
      return {
        ...state,
        currentAlbum: { ...state.currentAlbum, album: undefined }
      };
    }
    case "PHOTO_OPEN_DETAILS": {
      const photoId = action.payload;
      const { photoList } = state.currentAlbum.album;
      const photo = photoList.find(photo => photo.id === photoId);
      return {
        ...state,
        currentPhoto: { ...state.currentPhoto, photo }
      };
    }
    case "PHOTO_CLOSE_DETAILS": {
      return {
        ...state,
        currentPhoto: { ...state.currentPhoto, photo: undefined }
      };
    }
    default:
      return state;
  }
};

export default reducer;
