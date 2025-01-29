import React from 'react'
import UrunCard from '../component/molecules/UrunCard'

function UrunListesi() {
    /**
     * class urun{
     *  ad,
     * fiyat,
     * isStok,
     * indirim
     * }
     * public Urun getAll(){
     * 
     * return "urun listesi", 35, true, 87.99;
     * }
     * 
     * reactJS te sadece kapsayıcı bir TAG dönülebilir.
     *  <>
        <div>ürün listesi </div>
        <div>kalem listesi</div>
        </>  
     */
  return (
     <div className='container'>
        <div className="row mt-5">

            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
           
        </div>
     </div>
  )
}

export default UrunListesi