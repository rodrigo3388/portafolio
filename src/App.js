import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Cover from "./components/cover/Cover";
import About from "./components/about/About";
import Projects from "./components/proyects/Projects";
import Cv from "./components/cv/Cv";
import Info from './components/info/Info';
import Footer from './components/footer/Footer';



function App() {
  const [scrollHeight,setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight])

  return (
    <div className="App">      
    <Navbar isScrolling={scrollHeight}/> 
      <Navbar />
      <Cover/>
      <About/>
      <Projects/> 
      <Cv/>
      <Info/>
      <Footer/>

    </div>

  );
};

export default App;
