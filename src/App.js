import "./styles/main.scss";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/MainBanner/MainBanner";
import Introduction from "./components/Introduction/Introduction";
function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <MainBanner></MainBanner>
            <Introduction></Introduction>
        </div>
    );
}

export default App;
