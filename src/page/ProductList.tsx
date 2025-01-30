import React,{useEffect, useState} from 'react'
import { IProduct } from '../model/IProduct';
import ProductCard from '../component/molecules/ProductCard';
import { ISepetItem } from '../model/ISepetItem';
import SepetItem from '../component/molecules/SepetItem';
function ProductList() {
    /**
     * useState -> react in değişken tanımlama  ve takip etme methodu
     * useState<[DATA TYPE]> -> içerisine veri tipi yazılır, tanımlanan değişkenin türünü belirtiyorsunuz.
     */
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sepet, setSepet] = useState<ISepetItem[]>([]);
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
    setSepet([
        {
           resim: "https://productimages.hepsiburada.net/s/349/424-600/110000357018013.jpg/format:webp",
           markaModel: 'Samsung Galaxy S21',
           birimFiyat: 10000,
           adet: 2,
           toplamFiyat: 20000
        },{
            resim: "https://productimages.hepsiburada.net/s/777/424-600/110000798161757.jpg/format:webp",
            markaModel: 'IPhone 227 Pro Ultara Max',
            birimFiyat: 1000000,
            adet: 1,
            toplamFiyat: 1000000
        },{
            resim: "https://images.hepsiburada.net/assets/Bilgisayar/ProductDesc/PRIME-B450M-K-II-P_setting_fff_1_90_end_500_210210.png",
            markaModel: 'MSİ Anakar',
            birimFiyat: 25000,
            adet: 3,
            toplamFiyat: 75000
        }
    ])
  },[]);

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
                            {
                                sepet.map((item,index)=>{
                                    return <SepetItem item={item}/>
                                })
                            }
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