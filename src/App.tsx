import ButtonComponent from "./ui-component/ButtonComponent";
import CardComponent from "./ui-component/CardComponent";
import MediaComponent from "./ui-component/MediaComponent";

const onButtonClick = () => {
  alert('ボタンがクリックされました');
}

function App() {
  return (
    <div className="App">
      <ButtonComponent onClick={onButtonClick} title={"ボタン"} />
      <MediaComponent imageSrc={"public/assets/android.jpg"} imageAlt={"Androidユーザーが増えた背景"} title={"android"} content={`
        Androidユーザーが増えた背景には、価格の安さと性能の向上があります。Androidは、
        スマートフォンのOSの中でも比較的安価で購入できるため、多くの人が利用しています。
        また、AndroidはGoogleが提供しているため、Googleのサービスとの親和性が高いことも理由の一つです。
        日本国内でもiPhoneのシェアが高いですが、半分の価格で買えて、性能も十分なAndroidスマートフォンが
        近年多く売れています。Pixelシリーズなど、Googleが提供しているスマートフォンが人気です。
        `} />
        <CardComponent imageSrc={"public/assets/android.jpg"} imageAlt={"iPhoneユーザーが増えた背景"} title={"iPhone"} content={`
        iPhoneユーザーが増えた背景には、デザインやセキュリティの高さがあります。iPhoneは、
        スマートフォンの中でもデザイン性が高く、高級感があります。また、セキュリティの面でも、
        Androidよりも高いと言われています。そのため、ビジネスマンやセキュリティを重視する人に
        選ばれることが多いです。iPhoneは、iOSというOSを使用しており、Appleが提供しているため、
        iPhoneとMac、iPadなどのデバイスを連携させることができます。また、App Storeという
        アプリストアも充実しており、多くのアプリが提供されています。
        `} />
    </div>
  );
}

export default App;