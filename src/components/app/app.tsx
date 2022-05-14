import Cart from '../../pages/cart/cart';
import Main from '../../pages/main/main';
import Product from '../../pages/product/product';

function App(): JSX.Element {

  const pages = (a: number) => {
    if(a === 1){
      return <Main />;
    }
    if(a === 2){
      return <Cart/>;
    }
    return <Product/>;
  };

  return (
    <div>
      {pages(1)}
      <div></div>
    </div>
  );
}

export default App;
