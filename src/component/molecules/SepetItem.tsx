import React from 'react'
import { ISepetItem } from '../../model/ISepetItem'

function SepetItem(props: {item: ISepetItem }) {
  const item = props.item;  
  return (
    <div className="row m-1 p-2" style={{backgroundColor: '#FFF6E3', borderRadius: '5px'}}>
        <div className="col-2">
            <img src={item.resim} style={{width:'50px', height:'50px', borderRadius: '50px'}}/>
        </div>
        <div className="col-5">{item.markaModel}</div>
        <div className="col-2">{item.birimFiyat}</div>
        <div className="col-1">{item.adet}</div>
        <div className="col-2">{item.toplamFiyat}</div>                            
    </div>
  )
}

export default SepetItem