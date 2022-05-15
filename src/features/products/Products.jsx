import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../api";
import { Breadcrumb } from "../../app/Breadcrumb";
import { Error } from "../../app/Error";
import { Spinner } from "../../app/Spinner";
import { ProductList } from "./ProductList";
import { fetchProducts, getAllProducts } from "./productsSlice";

const Products = () => {
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === STATUS.IDLE) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;
  if (status === STATUS.ERROR) {
    content = <Error error={error} />;
  } else if (status === STATUS.LOADING) {
    content = <Spinner />;
  } else if (status === STATUS.COMPLETED) {
    content = (
      <div className="row">
        <div className="col-sm-2">Slider</div>
        <div className="col-sm-10">
          <ProductList products={products} />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumb />
      <h3>Title</h3>
      {content}
    </div>
  );
};

export { Products };
