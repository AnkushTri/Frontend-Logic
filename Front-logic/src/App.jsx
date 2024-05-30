import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProgressBar from './Components/reactCompo/ProgressBar'
import Filter from './Components/reactCompo/Filter/Filter'
import ProductSearch from './Components/reactCompo/ProductSearch/ProductSearch'
import SortedProducts from './Components/reactCompo/SortedProduct.jsx/SortedProduct'
import ProductList from './Components/reactCompo/SingleProduct/SingleProduct'
import ProductDetail from './Components/reactCompo/SingleProduct/ProductDetails'
import Pagination from './Components/reactCompo/Pagination/Pagination'
import InfiniteScroll from './Components/reactCompo/InfiniteScroll/InfiniteScroll';
import FormValidation from './Components/reactCompo/FormValidation/FormValidation';
import FileUpload from './Components/reactCompo/FileUpload/FileUpload';
import DragAndDrop from './Components/reactCompo/DragAndDrop/DragAndDrop';
import LazyLoading from './Components/reactCompo/LazyLoading/LazyLoading';

const App = () => {
  return (
    <div>
      {/* <ProgressBar value={10} max={100}/> */}
      <BrowserRouter>
      <Routes>
        <Route  path="/products" element={<ProductList />}/>
        <Route  path="/filter" element={<Filter />}/>
        <Route  path="/fileupload" element={<FileUpload/> }/>
        <Route  path="/draganddrop" element={<DragAndDrop/> }/>
        <Route  path="/lazyloading" element={<LazyLoading/> }/>
        <Route  path="/productsearch" element={<ProductSearch />}/>
        <Route  path="/sortedproduct" element={<SortedProducts />}/>
        <Route  path="/sortedproduct" element={<SortedProducts />}/>
        <Route  path="/pagination" element={<Pagination/> }/>
        <Route exact path="/infinteScroll" element={<InfiniteScroll/> }/>
        <Route exact path="/formvalidation" element={<FormValidation/> }/>
        <Route  path="/products/:id" element={<ProductDetail />}/>
      </Routes>
      </BrowserRouter>
      {/* <ProductList/> */}
    </div>
  )
}

export default App
