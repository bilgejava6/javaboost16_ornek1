import React from 'react'

function OrneSayfa() {
    /**
     * Object -> json object
     * {
     *  Key: Value
     * }
     * ürün json
     * JAva da new Urun() -> oluşan nesne ile aynı şetyi ifade eder.
     * urun.ad java da bu ürünün bilgilerini alabilir ve değiştirebiliriz.
     */
    let urun = {
        id: 5,
        ad: 'Asus Anakart',
        fiyat: 8900,
        stok: 10,
        durum: true
    }
    /**
     * Object Array -> Json Array
     * dizi nedir bir grup bileşenin oluşturduğu topluluk
     * [] -> bu bir boş dizi dir. içerisine eklediklerinizle doldurulur.
     * [32,423,4324,234] bu sayı dizisi olur aynı mantıkla
     * [urun,urun,urun] -> ürün dizisi eğer ürün bir json ise
     * [{},{},{}] -> json array olur
     */
    let urunListesi = [
        {
            id: 1,
            ad: 'şeker',
            fiyat: 10
        },
        {
            id: 2,
            ad: 'un',
            fiyat: 5
        },
        {
            id: 3,
            ad: 'yağ',
            fiyat: 100
        },
        {
            id: 6,
            ad: 'Çay',
            fiyat: 25
        }
    ];
  return (
    <div className="container">
        <div className="row">
            ürün adı....: {urun.ad}
        </div>
        <div className="row">
            1. ürünün adı...: {urunListesi[0].ad}
            <hr />
            {
                /**
                 * map listeyi dolaşır ve her bir item için siz bir değer dönüşü sağlar
                 */
                urunListesi.map(urun=>{
                    return <h2>{urun.id+ ' - '+ urun.ad + ' - ' + urun.fiyat}</h2>
                })
            }
            <hr />

            <table className="table">
                <thead className='table-primary'>
                    <tr>                    
                        <th scope="col">Id</th>
                        <th scope="col">Ürün Adı</th>
                        <th scope="col">Ürünün Fiyatı</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        urunListesi.map(urun=>{
                            return <tr>                                        
                                        <td>{urun.id}</td>
                                        <td>{urun.ad}</td>
                                        <td>{urun.fiyat}</td>
                                    </tr>
                        })
                    }
                    
                    
                   
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default OrneSayfa