// interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'crossOrigin'> Required< {
interface ImageProps
  extends Required<Pick<React.HTMLProps<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'>>,
    Pick<React.HTMLProps<HTMLImageElement>, 'title' | 'className'> {
  src: string;
  webp: string;
  containerStyle?: any;
}

export default function Image({ src, webp, containerStyle, ...rest }: ImageProps) {
  return (
    <picture {...rest} style={containerStyle}>
      {webp ? <source srcSet={webp} type='image/webp' /> : null}
      <img src={src} title={rest.title ?? rest.alt} {...rest} />
    </picture>
  );
}
