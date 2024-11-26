import { getStrapiURL } from "@/utils/api-helpers";
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Props {
  data: any;
}

const LightBox: React.FC<Props> = ({ data }) => {
  const { files } = data;

  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={files.data.map((item: any) => ({
          src: getStrapiURL(item.attributes.url),
          width: item.attributes.width,
          height: item.attributes.height,
          alt: "gallery-item-" + item.id,
        }))}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={files.data.map((item: any) => ({
          src: getStrapiURL(item.attributes.url),
          width: item.attributes.width,
          height: item.attributes.height,
          alt: "gallery-item-" + item.id,
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default LightBox;
