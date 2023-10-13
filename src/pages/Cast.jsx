// import { useSearchParams } from 'react-router-dom';
// import { ProductList } from '../components/ProductList';
// import { SearchBox } from '../components/SearchBox';
// import { getProducts } from '../fakeAPI';

const Cast = () => {
  // const products = getProducts();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';

  // const visibleProducts = products.filter(product =>
  //   product.name.toLowerCase().includes(productName.toLowerCase())
  // );

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
      <h1>Cast</h1>
      {/* <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} /> */}
    </main>
  );
};

export default Cast;
