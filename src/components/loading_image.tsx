import Image from "next/image";
import { useState } from "react";

type TypeLoadingImage = {
  src: string;
  alt: string;
  key?: string | number;
  width?: number;
  height?: number;
  contentCss?: string,
  className?: string,
};

export default function LoadingImage({ src, alt, width, height, contentCss, className }: TypeLoadingImage) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className={`relative z-0 ${contentCss}`}>

      <div className={`w-full h-full flex justify-center items-center ${!loading && "animate-image-scale-bottom"}`}>
        <div className="refresh_icon"></div>
      </div>

      {error && (
        <Image
          className="w-full h-auto"
          src="/imgs/hide_image.png"
          width={3264}
          height={2177}
          alt={`The image can not be loading, image: ${alt}`}
        />
      )}
      <Image
        src={src}
        width={width ?? 2094}
        height={height ?? 2176}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        alt={alt}
        className={`${className} scale-0 ${(!loading && !error) && 'animate-image-scale-top'}`}
      />
    </div>
  );
}
