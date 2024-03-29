"use client"

import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from '../../../store/reducers/user';
import { RootState } from '../../../store';
import { ProductTypeList } from '../../../types';
import Image from 'next/image';


const ProductItem = ({ discount, images, id, name, price, currentPrice }: ProductTypeList) => {

  const dispatch = useDispatch();
  
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, productId => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id,
      }
    ))
  }

  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${id}`} legacyBehavior>
          <a>
            <Image src={images?.[0] } width={10} height={10} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{name}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>Rp{ currentPrice }</h4>

          {discount &&  
            <span>Rp{ price }</span>
          }
        </div>
      </div>
    </div>
  )
};


export default ProductItem;