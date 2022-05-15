import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-sm-4 mb-3">
          <div className="card" style={{ height: "100%" }}>
            <img
              src={product.image}
              className="card-img-top"
              style={{
                minHeight: "300px",
                maxHeight: "300px",
                objectFit: "contain",
              }}
              alt={product.title}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description.substring(0, 100)}
              </p>
              <Link to={`${product.id}`} className="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ProductList };
