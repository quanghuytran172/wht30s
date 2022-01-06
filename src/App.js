import "./styles/main.scss";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/MainBanner/MainBanner";
import Introduction from "./components/Introduction/Introduction";
import BestProduct from "./components/BestProduct/BestProduct";
import Products from "./components/Products/Products";
import BrandStory from "./components/BrandStory/BrandStory";
import News from "./components/News/News";
import Video from "./components/Video/Video";
function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <MainBanner></MainBanner>
            <Introduction></Introduction>
            <BestProduct></BestProduct>
            <Products></Products>
            <BrandStory></BrandStory>
            <News></News>
            <Video></Video>
        </div>
    );
}

export default App;
