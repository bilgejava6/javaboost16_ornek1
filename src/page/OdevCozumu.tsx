import React, { useState } from 'react'
import { IModel } from '../model/IModel';
import { IUrunModel } from '../model/IUrunModel';

function OdevCozumu() {
    const markaList = ['Asus','HP','MSI','Asroc','ViewSonic'];
    const model: IModel[] = [
        {markaAd: 'Asus', modelAd: 'As-i9'},{markaAd: 'Asus', modelAd: 'As-i7'},{markaAd: 'Asus', modelAd: 'As-21'},
        {markaAd: 'HP', modelAd: 'hp-xcd'},{markaAd: 'HP', modelAd: 'hp-monitör'},{markaAd: 'HP', modelAd: 'hp-yazici'},
        {markaAd: 'MSI', modelAd: 'msi-motherboard'},{markaAd: 'MSI', modelAd: 'msi-vga 5080rtx'},{markaAd: 'MSI', modelAd: 'msi-tower'},
        {markaAd: 'Asroc', modelAd: 'arc-677mhz'},{markaAd: 'Asroc', modelAd: 'arc-ttr5'},{markaAd: 'Asroc', modelAd: 'arc-mbnttt'},
        {markaAd: 'ViewSonic', modelAd: 'vw-monitör 21'},{markaAd: 'ViewSonic', modelAd: 'vw-monitör 32 inch'},{markaAd: 'ViewSonic', modelAd: 'vw-monitör 19 inch'},
    ]
    const [modelList, setModelList] = useState<IModel[]>([]);
    const markaSec =(evt: any)=>{
        // index no 
        let index = evt.target.value;        
        let bulunanModelList = model.filter(x=> x.markaAd === markaList[index]);
        setModelList(bulunanModelList);
        setmarkaAdi(markaList[index]);
    }

    const [urunList,setUrunList] = useState<IUrunModel[]>([]);
    const [urunAdi,seturunAdi] = useState('');
    const [markaAdi,setmarkaAdi] = useState('');
    const [modelAdi,setmodelAdi] = useState(0);
    const [fiyat,setfiyat] = useState(0);
    const [url,seturl] = useState('');
    const [stok,setstok] = useState(0);
    
    
    const urunEkle = ()=>{
       
        let newUrun: IUrunModel  = {
                ad: urunAdi,
                marka: markaAdi,
                model: modelList[modelAdi].modelAd,
                url: url,
                fiyat: fiyat,
                stok: stok
        }
        setUrunList([...urunList, newUrun]);        
    }

  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-5">
                <div className="mb-3">
                    <label className="form-label">Ürün Adı</label>
                    <input type="text" className="form-control" onChange={evt=> seturunAdi(evt.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ürün Markası</label>
                    <select onChange={markaSec} className="form-select" aria-label="Default select example">
                        <option>Lütfen seçiniz</option>
                        {
                            markaList.map((marka,index)=>{
                                return <option key={index} value={index}>{marka}</option>
                            })
                        }                        
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ürün Model</label>
                    <select  onChange={evt=> setmodelAdi(parseInt(evt.target.value))}  className="form-select" aria-label="Default select example">
                        <option>Lütfen seçiniz</option>
                        {
                            modelList.map((model,index)=>{
                                return <option key={index} value={index}>{model.modelAd}</option>
                            })
                        }                  
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ürün Resmi</label>
                    <input  onChange={evt=> seturl(evt.target.value)}  type="text" className="form-control" />
                </div>
            </div>
            <div className="col-5">
                <div className="mb-3">
                        <label className="form-label">Ürün Fiyatı</label>
                        <input  onChange={evt=> setfiyat(parseInt(evt.target.value))}  type="text" className="form-control" />
                </div> 
                <div className="mb-3">
                        <label className="form-label">Ürün Stok Miktarı</label>
                        <input  onChange={evt=> setstok(parseInt(evt.target.value))}  type="text" className="form-control" />
                </div> 
            </div>
            <div className="col-2 align-content-end">
                <div className="mb-3 d-grid">
                    <input onClick={urunEkle} type="button" value="Ürünü Ekle" className='btn btn-success' />
                </div>
            </div>
        </div>
        <div className="row">
            <table className="table">
                <thead className='table-primary'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ürün Adı</th>
                        <th scope="col">Marka</th>
                        <th scope="col">Model</th>
                        <th scope="col">Fiyat</th>
                        <th scope="col">Stok</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        urunList.map((urun,index)=>{
                            return <tr>                    
                                        <td>{index+1}</td>
                                        <td>{urun.ad}</td>
                                        <td>{urun.marka}</td>
                                        <td>{urun.model}</td>
                                        <td>{urun.fiyat}</td>
                                        <td>{urun.stok}</td>                        
                                    </tr>  
                        })
                    }
                                     
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OdevCozumu