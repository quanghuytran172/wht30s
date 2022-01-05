import "./styles/main.scss";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/MainBanner/MainBanner";
import Introduction from "./components/Introduction/Introduction";
import BestProduct from "./components/BestProduct/BestProduct";
import Products from "./components/Products/Products";
import BrandStory from "./components/BrandStory/BrandStory";
function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <MainBanner></MainBanner>
            <Introduction></Introduction>
            <BestProduct></BestProduct>
            <Products></Products>
            <BrandStory></BrandStory>
        </div>
    );
}

export default App;
