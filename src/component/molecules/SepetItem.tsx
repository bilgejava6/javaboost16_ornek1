import React from 'react'
import { ISepetItem } from '../../model/ISepetItem'

function SepetItem(props: {item: ISepetItem, sil: any, changeCount: any }) {
  const item = props.item;  
  /**
   * Arrow function larda bire bir eşleşme ararız
   * onClick = (evt: any) =>{}
   * changeCount = (item: ISepetItem: tip: number) =>{} 
   * burada iki method bir birine ek olmadığı için kullanım sonsuz döngüye sokar.
   * onClick= {changeCount(item,0)}  -- HATALI KULLANMIM
   * 
   * onClick = {()=>{
   *  changeCount(item,0)
   * }}  -- DOĞRU KULLANIM 
   */
  return (
    <div className="row m-1 p-2" style={{backgroundColor: '#FFF6E3', borderRadius: '5px'}}>
        <div className="col-2">
          <a onClick={()=>{props.sil(item)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg>
          </a>    
            <img src={item.resim} style={{width:'50px', height:'50px', borderRadius: '50px'}}/>
        </div>
        <div className="col-5">{item.markaModel}</div>
        <div className="col-2">{item.birimFiyat}</div>
        <div className="col-2">
           <span onClick={()=>props.changeCount(item,0)} className='text-danger m-1' style={{cursor: 'pointer'}}>-</span>
           <label className='ms-2 me-2'>{item.adet}</label>
           <span onClick={()=>props.changeCount(item,1)} className='text-success m-1' style={{cursor: 'pointer'}}>+</span>   
        </div>
        <div className="col-1">{item.toplamFiyat}</div>                            
    </div>
  )
}

export default SepetItem