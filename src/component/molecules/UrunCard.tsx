import React from 'react'

function UrunCard() {
  return (
    <div className="col-4 mb-2">
        <div className="card shadow">
            <img height={350} src="https://productimages.hepsiburada.net/s/349/424-600/110000357018013.jpg/format:webp" className="card-img-top p-4" />
            <div className="card-body">
                <h5 className="card-title">Msı Mag B760 Tomahawk</h5>
                <p className="card-text">
                    Yeni nesil teknolojiyi evinize getiren MSI MAG B760 Tomahawk WiFi anakart ile tanışın. Bu anakart, performans ve stilin mükemmel bir birleşimini sunarak, bilgisayar deneyiminizi bir üst seviyeye taşıyor
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-danger">7.847,00 TL</li>
                <li className="list-group-item">30 günün en düşük fiyatı</li>
                <li className="list-group-item text-bg-warning"><small>Tahmini 1 Şubat Cumartesi kapında</small></li>
            </ul>
            <div className="card-body text-end">
                <input type='button' className="btn btn-warning" value={'Sepete Ekle'} />                           
            </div>
        </div> 
    </div>  
  )
}

export default UrunCard