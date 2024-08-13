import React from 'react';
import ImageComponent from './ui-component/Image';

const App: React.FC = () => {
  return (
    <div>
        <h1>Reactで画像を表示する</h1>
        <ImageComponent src="public/assets/android.jpg" alt="Google" width={272} height={92} />
        <ImageComponent src="public/assets/iphone.jpg" alt="Google" width={272} height={92} />
    </div>
  );
};

export default App;