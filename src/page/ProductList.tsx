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
  const [toplam, setToplam] = useState<number>(0);
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
  const sepeteEkle= (product: IProduct)=>{
    let varMi = sepet.find((x)=>x.markaModel === product.title);
    if(varMi){
        varMi.adet++;
        varMi.toplamFiyat = varMi.adet * varMi.birimFiyat;
        setToplam(toplam+product.price);
        return;
    }
    const item: ISepetItem = {
        adet: 1,
        birimFiyat: product.price,
        markaModel: product.title,
        resim: product.thumbnail,
        toplamFiyat: product.price
    }
    /**
     * useState ile kullandığınız dğeişkenlere = ile atama yapmazsınız. eğer bu bir dizi ise push()
     * ekleme yapamazsınız. React bir değişkenin değiştiğini ancak ve ancak set Methodu tetiklenir ise 
     * anlar. 
     * ... özel bir kullanımdır. bir dizinin dizi [] paranteslerini siler.
     * [{},{},{},{}] -> ... -> {},{},{},{}
     * ...[{},{},{}],{} -> {},{},{},{}
     * [...[{},{},{}], {}] -> [{},{},{},{}]
     * -------
     * let dizi = [];
     * dizi.push(1);
     * dizi = [1]
     * dizi.push(2);
     * dizi = [1,2]
     */
    setSepet([...sepet,item]);
    setToplam(toplam+product.price);
  }
  let TrPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    });
    /**
     * forEach
     * filter
     */
    const sil = (item: ISepetItem)=>{
        let yeniSepet = sepet.filter((x)=>x!==item);
        setSepet(yeniSepet);
        setToplam(toplam-item.toplamFiyat);
    }
    /**
     * 
     * onChangeCount =   (item,tip)=>{}
     * arttirmaAzaltma = (item,tip)=>{}
     * changeCount={arttirmaAzaltma}
     * 
     * @param item sepete eklenen ürün
     * @param tip 0 -> azaltma, 1 -> arttırma
     */
    const arttirmaAzaltma = (item: ISepetItem, tip: number)=>{
        /**
         * eğer ürün adedi 1 ise ve 0 (azaltma butonuna basıldıysa) ise ürünü sil
         */
        if(item.adet === 1 && tip === 0){
            sil(item);
            return;
        }
            /**
             * !!! DİKKAT !!!
             * map her bir eleman için belli bir değer dönüşü yapar. eğer if gibi koşullar ile ya da try..cacth gibi
             * kontrol mekanizmalarında tüm değerleri kapsayacak şekilde değer dönüşü yapmazsanız belli değerler undefined
             * yani tanımsız kalır. Bu nedenle değişkeninizin tipi değişebilir.
             * aşağıdaki örnekte  if(urun=== item) koşulu sağlandığında işlem yapmasını istedik ancak eğer 
             * bu koşul sağlanmadığında yani else{} durumunda ne yapılacağını yazmadığımız için normalde dönmesi gereken guncelSepet
             * değişken değeri ISepetItem[] olması gerekirken (ISepetItem | undefined)[] olmuştur.
             */
            const guncelSepet = sepet.map((urun)=>{
                if(urun === item){ // eğer ürün bulundu ise
                    if(tip === 0){ // eğer azaltma butonuna basıldıysa
                        urun.adet--;
                        urun.toplamFiyat = urun.adet * urun.birimFiyat;
                        setToplam(toplam-urun.birimFiyat);
                    }else{ // eğer arttırma butonuna basıldıysa
                        urun.adet++;
                        urun.toplamFiyat = urun.adet * urun.birimFiyat;
                        setToplam(toplam+urun.birimFiyat);
                    }
                 
                    return urun;
                }else
                    return urun;
            });
            
            setSepet(guncelSepet);
        
    }
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-8">
                    <div className="row m-5" >
                        {
                        products.map((product,index)=>{
                            return <ProductCard product={product} sepeteEkle={sepeteEkle}/>
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
                                    return <SepetItem item={item} sil={sil} changeCount={arttirmaAzaltma}/>
                                })
                            }
                        <hr />
                        <div className="row" style={{fontSize: '16px', fontWeight: 'bold'}}>
                            <div className="col-8"></div>
                            <div className="col-2">Toplam Fiyat</div>
                            <div className="col-2">{TrPrice.format(toplam)}</div>
                        </div>
                    </div>
            </div>
        </div>
     </div>
  )
}

export default ProductList