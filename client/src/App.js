import './App.css';
import Card from './componnets/features/card/Card';
import ImageSlider from './componnets/features/Slider/imageSlider';
import { NavBar } from './componnets/features/navBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
       <ImageSlider />
       <Card /> 
    </>
  );
}

export default App;
