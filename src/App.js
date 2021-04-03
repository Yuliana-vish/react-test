

import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
///
import "./styles.css"





function App() {
  return (
    <div className="shop">
      <Header />
      <div className="container">
       <Menu />
       <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
