import {Route,BrowserRouter, Routes} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import Cart from '../../pages/cart/cart';
import Main from '../../pages/main/main';
import Product from '../../pages/product/product';
import {createBrowserHistory} from 'history';
import ReviewAdd from '../modals/review-add';
import NotFound from '../../pages/not-found';
import SuccessReview from '../modals/success-review';
import AllCats from '../all-cats/all-cats';

export const browserHistory = createBrowserHistory();


function App(): JSX.Element {

  // const {pathname} = useLocation().;
  // eslint-disable-next-line no-console
  // console.log('pathName',pathname);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route index element={<Main/>} />
        <Route path='page:id' element={<Main/>}/>
        <Route path='allCats' element={<AllCats/>}/>
        <Route path=':id' element={<Product/>}>
          <Route path='review' element={<ReviewAdd/>}/>
          <Route path='success/' element={<SuccessReview/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
