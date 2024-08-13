// img tag のプロパティを外部から受け取れるようにするPropsを定義
type ImageComponentProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
}
// typeを使用して、外部から変更可能にする
const ImageComponent = (props: ImageComponentProps) => {
  return (
    <div>
        <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
    </div>
  )
}

export default ImageComponent;