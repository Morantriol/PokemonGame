import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
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
