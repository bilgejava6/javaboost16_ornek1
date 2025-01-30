import React from 'react'
import { IProduct } from '../../model/IProduct'

function ProductCard(props: {product: IProduct}) {
  /**
   * String name;
   * User user = new User();
   * name = user.getName();
   */
  const product = props.product;
  console.log('render prodct card');
  return (
    <div className="col-4 mb-2">
        <div className="card shadow">
            <img height={350} src={product.thumbnail} className="card-img-top p-4" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                    {product.description}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-danger">{product.price}</li>
                <li className="list-group-item">{product.discountPercentage}</li>
                <li className="list-group-item text-bg-warning"><small>{product.shippingInformation}</small></li>
            </ul>
            <div className="card-body text-end">
                <input type='button' className="btn btn-warning" value={'Sepete Ekle'} />                           
            </div>
        </div> 
    </div>  
  )
}

export default ProductCard