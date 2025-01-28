import React, { useState } from 'react'

function ToplamaVeHooks() {
    /**
     * Normalde JS te tip tanımlama yoktur. yeni let,var,const ile tanımlanan değişkenlerin tipi belirsizdir.
     * Fakat TS de tip tanımlamaları yapılabilir. Kullanılan tipler uyumsuz ise sorun çıkarır.
     */
    let s1='', s2='', toplam; 
    /**
     * bir değişkenin değişlik göstermesini ReactJS in algılaması gereklidir. Bunu sağlamak için
     * useState hook kullanılır. Bu dizi içerisinde dğeişimi sağlayan method render işlemini tetikler.
     */
    //      değeri okumak,  değiştirmek için 
    const [  toplamDegeri , setToplamDegeri  ] = useState(0);
    /**
     * function topla(){}  Eşittir ()=>{} - arrowfunction
     */
    const toplamaIslemi = ()=>{ 
        toplam = parseInt(s1) + parseInt(s2);
        setToplamDegeri(toplam);
        console.log('toplam', toplam);
     }
     console.log('toplama render');
  return (
    <div>
        <h1>Toplama Ve Render</h1>
        <div>
            <input onChange={evt=> s1=evt.target.value} type="text" placeholder='1. sayıyı giriniz' />
        </div>
        <div>
            <input onChange={evt=> s2=evt.target.value} type="text" placeholder='2. sayıyı giriniz' />
        </div>
        <div>
            <button onClick={toplamaIslemi} >Topla</button>
        </div>
        <div>
            <label>sonuç....: {toplamDegeri}</label>
        </div>
    </div>
  )
}

export default ToplamaVeHooks