import React from 'react'
import { IUrun } from '../../model/IUrun'
/**
 * Soru: Java da bir kod öbeğini method haline getirdiniz, bu methodu çağırarak başka bir yerde 
 * defalarca kullanabilirsiniz. Peki her kullanıldığı yerde farklı tepkiler vermesini istiyorsanız ne yaparsınız?
 * 
 * DİKKAT!!!!
 * JS de değişkenlerin türünü tanımlamak zorunda değilsiniz. ancak
 * TS de değişkenlerin türünü tanımlamak zorundasınız.
 * any -> her türü ifade eder. Java da ki Object türüne karşılık gelir.
 */
function UrunCard(props: {urun: IUrun}) {
  
  return (
    <div className="col-4 mb-2">
        <div className="card shadow">
            <img height={350} src={props.urun.resim} className="card-img-top p-4" />
            <div className="card-body">
                <h5 className="card-title">{props.urun.ad}</h5>
                <p className="card-text">
                    {props.urun.aciklama}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-danger">{props.urun.fiyat}</li>
                <li className="list-group-item">{props.urun.promosyon}</li>
                <li className="list-group-item text-bg-warning"><small>{props.urun.teslimat}</small></li>
            </ul>
            <div className="card-body text-end">
                <input type='button' className="btn btn-warning" value={'Sepete Ekle'} />                           
            </div>
        </div> 
    </div>  
  )
}

export default UrunCard