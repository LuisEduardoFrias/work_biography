import Image from "next/image";
import { useState } from "react";
import { useStore } from 'swh/index'

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
  const isLoading = useStore((state) => state.isLoading)
  const translate = useStore((state) => state.translate)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className={`relative z-0 ${contentCss}`}>

      <div className={`w-full h-full flex justify-center items-center ${!loading && "animate-image-scale-bottom"}`}>
        <div className="refresh_icon"></div>
      </div>

      {error && (
        <div className={`w-full h-full flex justify-center items-center`}>
                    {isLoading && <div className="refresh_icon"></div>}
          <Image
            className="w-20 h-auto"
            src="/imgs/hide_image.png"
            width={3264}
            height={2177}
            alt={`${translate('The image can not be loading, image: ')}${alt}`}
          />
        </div>
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
        className={`scale-0 ${(!loading && !error) && 'animate-image-scale-top'} ${className} `}
      />
    </div>
  );
}
