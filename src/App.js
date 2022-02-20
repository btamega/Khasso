import { Component } from 'react';
import Header from './components/include/header';
import Footer from './components/include/footer';
import Produits from './components/views/produits';
import Newsletter from './components/views/newsletter';
import Home from './components/views/home';
import Shops from './components/views/shop';
import Contact from './components/views/contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      
      <div>
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produits' element={<Produits />} />
          <Route path='/shops' element={<Shops />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default App;