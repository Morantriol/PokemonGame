import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./components/Layout/Layout.jsx";
import bg3 from './assets/bg3.jpeg';

const App = () => {
  return (
    <div className="App">
      <Header
        title = "This is title"
        descr = "This is Description!"
        />
      <Layout 
        title = "First block"
        descr = "Description"
        urlBg = {bg3}
        />
      <Layout 
        title = "Second block"
        descr = "Description"
        colorBg = "red"
        />
      <Layout 
        title = "Last block"
        descr = "Description"
        urlBg = {bg3}
      />
      <Footer />
    </div>
  );
}

export default App;
