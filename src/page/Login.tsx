import React from 'react'

function Login() {
  return (
    <div className='container'>
       <div className='row mt-5'>
            <div className='col-3'></div>
            <div className='col-6 p-3' style={{border: '1px solid red', height: '500px', borderRadius:'20px'}}>
                <div className='text-center m-2'>
                    <img width={150} height={200} src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678129-lock-512.png" />
                </div>
                <div className="mb-3">
                    <label className="form-label">E-Posta Adresi giriniz</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Şifrenizi giriniz</label>
                    <input type="password" className="form-control" />
                </div>
                <div className='text-end'>
                    <button type='button' className='btn btn-success'>Giriş Yapınız</button>
                </div>
            </div>
            <div className='col-3'></div>                    
       </div>
    </div>
  )
}

export default Login