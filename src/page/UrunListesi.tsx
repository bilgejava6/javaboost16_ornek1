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
   /**
    * json object -> java da bir sınıftan oluşturulan bir nesneye karşılık gelen
    * web objesine json denir.
    * class urun{
    *    id,
    *    ad,
    *    fiyat
    * }
    * 
    * json objesi
    * {
    *    id: 1,
    *    ad: "kalem",
    *    fiyat: 5.99
    * }
    * 
    * [3,4,25,6] -> dizi dir, sayı dizisi
    * [{},{},{}] -> json dizisi
    */
   const urunList = [
      {
         id: 1,
         ad: "Msı Mag B760 Tomahawk",
         aciklama: "Yeni nesil teknolojiyi evinize getiren MSI MAG B760 Tomahawk WiFi anakart ile tanışın. Bu anakart, performans ve stilin mükemmel bir birleşimini sunarak, bilgisayar deneyiminizi bir üst seviyeye taşıyor",
         fiyat: 7847,
         stok: true,
         promosyon: "30 günün en düşük fiyatı",
         teslimat: "Tahmini 1 Şubat Cumartesi kapında",
         resim: "https://productimages.hepsiburada.net/s/349/424-600/110000357018013.jpg/format:webp"
      },
      {
         id: 2,
         ad: "MSI MPG B550 Gaming Plus",
         aciklama: "MSI MPG B550 Gaming Plus anakart, AMD Ryzen işlemcilerle uyumlu olup, oyunculara ve yüksek performans gerektiren kullanıcılara hitap eder.",
         fiyat: 1999,
         stok: true,
         promosyon: "30 günün en düşük fiyatı",
         teslimat: "Tahmini 5 Şubat Cumartesi kapında",
         resim: "https://productimages.hepsiburada.net/s/777/424-600/110000798161757.jpg/format:webp"
      },
      {
         id: 3,
         ad: "Asus Prime B450M-K II Ddr4 ",
         aciklama: "M.2 desteği, HDMI/DVI-D/D-Sub, SATA 6 Gbps, 1 Gb Ethernet, USB 3.2 Gen 1 Type-A ve BIOS FlashBack™ özelliklerine sahip AMD B450 (Ryzen AM4) micro ATX anakart",
         fiyat: 2400,
         stok: true,
         promosyon: "30 günün en düşük fiyatı",
         teslimat: "Tahmini 10 Şubat Cumartesi kapında",
         resim: "https://images.hepsiburada.net/assets/Bilgisayar/ProductDesc/PRIME-B450M-K-II-P_setting_fff_1_90_end_500_210210.png"
      },
   ];       
   return (
     <div className='container'>
        <div className="row mt-5" >

            <UrunCard urun={urunList[0]}/>
            <UrunCard urun={urunList[1]}/>
            <UrunCard urun={urunList[2]}/>
           
        </div>
     </div>
  )
}

export default UrunListesi