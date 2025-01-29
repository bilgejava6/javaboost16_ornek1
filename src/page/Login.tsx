import React, { useState } from 'react'
import swal from 'sweetalert';

function Login() {
  const [email,setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(false);
  const doLogin = ()=>{
    if(email === '' || password === ''){
        setWarning(true);
        return;
    }else{
        setWarning(false);
    }  
    fetch('http://localhost:9090/auth/do-login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        // DİKKAT!!!! sunucunun değişken adları buradaki değişken adı ile aynı olmalıdır.
        // email: email -> bu ksımıda iletilen bilgi şöyledir. [DEĞİŞKEN]: [DEĞER] şeklindedir.
        // bu nedenle DEĞİŞKEN adı sunucudaki değişken adı ile aynı olmalıdır
        body: JSON.stringify({
            email: email,
            password: password
        }) // Buraya email ve password gönderilecek
    }).then(res=> res.json())
    .then(data=>{
       if(data.code === 400){ // eğer 400 gelir ise kullanıcı adı veya şifre yanlış demektir.
        //       başlık       mesaj      ikon
            swal('Hata!',data.message, 'error');
       }else{ // 200 gelir ise kullanıcı giriş yapmış demektir.
            swal('Başarılı',data.message,'success');
       }
    })
  }
  return (
    <div className='container'>
       <div className='row mt-5'>
            <div className='col-4'></div>
            <div className='col-4 p-4 shadow-lg rounded-5' style={{border: '1px solid grey', minHeight: '500px', borderRadius:'20px'}}>
                <div className='text-center m-2'>
                    <img width={150} height={200} src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678129-lock-512.png" />
                </div>
                {
                    warning && (
                    <div className='alert alert-warning' role='alert'>
                        <h4 className='alert-heading'>!!! Uyarı</h4>
                        <p>
                            Bu sayfaya giriş yapabilmek için lütfen e-posta adresinizi ve şifrenizi boş geçemezsiniz.
                        </p>
                    </div>
                    )
                }
                
                <div className="mb-3">
                    <label className="form-label">E-Posta Adresi giriniz</label>
                    <input onChange={evt=> setEmail(evt.target.value)} type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Şifrenizi giriniz</label>
                    <input onChange={evt=> setPassword(evt.target.value)} type="password" className="form-control" />
                </div>
                <div className='text-end'>
                    <button onClick={doLogin} type='button' className='btn btn-success'>Giriş Yapınız</button>
                </div>
            </div>
            <div className='col-4'></div>                    
       </div>
    </div>
  )
}

export default Login