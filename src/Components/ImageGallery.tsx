import { imageGalleryImages } from "@/data/siteData/imageGalleryImages";
import ZoomImage from "./ZoomImage";

export default function ImageGallery() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3">
      {imageGalleryImages.map(({ src, alt, width, height, title }, index) => (
        <ZoomImage
          key={index}
          src={src}
          width={width}
          height={height}
          alt={alt}
          title={title}
        />
      ))}
    </div>
  );
}
