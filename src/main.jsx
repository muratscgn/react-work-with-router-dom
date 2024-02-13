import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

/*
- [x] React-Rouder-Dom ve Bootstrap Kurulumu
- [x] Navbar Olusturulmasi
- [x] Sayfa Yapisinin Olusturulmasi
- [x] Sayfalara React Router Dom Uzerinden Ulasilabilmesi
- [ ] Urunler Kisminin Olusturulmasi
- [ ] Ana Sayfada 10 Urun Gosterilmesi
- [ ] Urun Layout Yapisinin Olusturulasi -> Kategoriler ve Son 5 Urunun Linki
- [ ] Urunlere Tiklaninca Detay Sayfasinin Acilmasi
- [ ] Login Yapisinin Olusturulmasi (localStorage)
- [ ] Eger Kullanici Login ise Logout Olabilmesi (localStorage)
- [ ] Eger Kullanici Login ise Urunleri Favorilere Atabilsin(localStorage)
- [ ] Eger Kullanici Login ise Favoriler Sayfasina Gidebilsin
*/