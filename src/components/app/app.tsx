import {Route,BrowserRouter, Routes} from 'react-router-dom';
import Cart from '../../pages/cart/cart';
import Main from '../../pages/main/main';
import Product from '../../pages/product/product';
import {createBrowserHistory} from 'history';

export const browserHistory = createBrowserHistory();


function App(): JSX.Element {

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Main/>}
        />
        <Route
          path='/page_:id'
          element={<Main/>}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        />
        <Route
          path='/data:id'
          element={<Product/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
