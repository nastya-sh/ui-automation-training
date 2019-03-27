import React from "react";
import { GalleryServiceConsumer } from "../gallery-service-context";

const withAlbumstoreService = () => Wrapped => {
  return props => {
    return (
      <GalleryServiceConsumer>
        {AlbumstoreService => {
          return <Wrapped {...props} albumstoreService={AlbumstoreService} />;
        }}
      </GalleryServiceConsumer>
    );
  };
};

export default withAlbumstoreService;
