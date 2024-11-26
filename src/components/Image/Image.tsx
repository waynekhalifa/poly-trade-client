import Image, { ImageProps as NextImageProps } from 'next/image';

type Props = NextImageProps & { alt: string };

const NextImage: React.FC<Props> = ({ alt, ...props }) => {
	return <Image {...props} alt={alt} />;
};

export default NextImage;
