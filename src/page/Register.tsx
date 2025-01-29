import React, { useState } from 'react'
import swal from 'sweetalert';
function Register() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isEquals, setIsEquals] = useState(true);
    /**
     * 
     * İnput değeri için
     * onChange -> input un içeriği değiştiğinde çalışır
     * onKeyDown -> klavyeden bir tuşa bastınız ve bırakmadınız, işte tam o anı ifade eder. Ancak 
     * dikkat etmeniz gereken bir nokta var. tuşa basıldığı anda input un değeri değişmiş olmaz.
     * onKeyUp -> klavyeden bir tuşa bastınız ve bıraktınız, işte tam o anı ifade eder.
     *      */
    const register = ()=>{
        if(email === '' || password === '' || rePassword === ''){
            swal('Hata','Lütfen tüm alanları doldurunuz','error');
            return;
        }
        /**
            if(password !== rePassword){
                swal('Hata','Şifreler uyuşmuyor','error');
                return;
            }
         */
        fetch('http://localhost:9090/auth/register',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.code === 200)
                swal('Başarılı','Kayıt işlemi başarılı','success');
            else
                swal('Hata',data.message,'error');
        })
    }
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-4"></div>
            <div className="col-4 shadow p-4 rounded-5 ">
                <h3 className='mb-5'>Register</h3>
                <div className="mb-4">
                    <label className="form-label">E-Posta Adresi giriniz</label>
                    <input onChange={evt=> setEmail(evt.target.value)} type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Şifrenizi giriniz</label>
                    <input onChange={evt=> setPassword(evt.target.value)} type="password" className="form-control" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Şifrenizi doğrulayınız </label>
                    <input onKeyUp={()=> setIsEquals(password===rePassword)} onChange={evt=> setRePassword(evt.target.value)} type="password" className="form-control" />
                    {
                        isEquals ? null :  <label className='text-danger'>* şifreler uyuşmuyor</label>
                    }
                   
                </div>
                <div className='text-end'>
                    <button onClick={register} type='button' className='btn btn-success'>Üyeliği Tamamla</button>
                </div>
            </div>
            <div className="col-4"></div>                
        </div>
    </div>
  )
}

export default Register