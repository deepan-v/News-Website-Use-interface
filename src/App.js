import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BodyBottom from "./components/body/BodyBottom/BodyBottom";
import Bodylast from "./components/body/BodyLast/Bodylast";
import Bodywspl from "./components/body/BodyWSPL/Bodywspl";
import BodyMiddle from "./components/body/bodyMid/bodyMiddle";
import BodyTop from "./components/body/bodyTop/bodyTop";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BodyTop/>
      <BodyMiddle/>
      <Bodywspl/>
      <BodyBottom/>
      <Bodylast/>
      <Footer/>
        </div>
  );
}

export default App;
