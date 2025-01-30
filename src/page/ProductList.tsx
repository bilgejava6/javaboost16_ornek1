import React,{useEffect, useState} from 'react'
import { IProduct } from '../model/IProduct';
import ProductCard from '../component/molecules/ProductCard';
function ProductList() {
    /**
     * useState -> react in değişken tanımlama  ve takip etme methodu
     * useState<[DATA TYPE]> -> içerisine veri tipi yazılır, tanımlanan değişkenin türünü belirtiyorsunuz.
     */
  const [products, setProducts] = useState<IProduct[]>([]);

  /**
   * useEffect -> react bileşenlerinin değişimini takip ederek kendini tetikleyen method.
   * iki parametresi vardır;
   * 1. arrow function  -> tetiklenme durumunda çalışacak olan method -  ()=>{}
   * 2. array -> tetiklenme durumunu belirleyen array - []
   * çalışma mantığı, Array içerisindeki değişkenlerden birisi dğeişir ise fonksiyon çalışır.
   * Eğer array boş ise [] ise, bu durumda ilgili method sadece yükleme esnasında 1 kere çalışır.
   * JAva da ki constructor methodunun yerine geçer.
   */
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  },[]);

 console.log('RENDER PRODUCT LIST');
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-8">
                    <div className="row m-5" >
                        {
                        products.map((product,index)=>{
                            return <ProductCard product={product} />
                        })
                        }           
                    </div>
            </div>
            <div className="col-4">
                    <div className="alert alert-info mt-5 p-2">
                        <h4 className='text-center'>Sepet</h4>
                        <div className="row ">
                            <div className="col-2">Resim</div>
                            <div className="col-5">Marka-Model </div>
                            <div className="col-2">Birim Fiyat</div>
                            <div className="col-1">Adet</div>
                            <div className="col-2">Toplam Fiyat</div>                            
                        </div>
                        <hr />

                        <hr />
                        <div className="row" style={{fontSize: '16px', fontWeight: 'bold'}}>
                            <div className="col-8"></div>
                            <div className="col-2">Toplam Fiyat</div>
                            <div className="col-2">00.000₺</div>
                        </div>
                    </div>
            </div>
        </div>
     </div>
  )
}

export default ProductList