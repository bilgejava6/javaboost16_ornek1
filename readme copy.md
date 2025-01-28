# ReactJS Kurulum ve Kullanım Notları

## React Kurulumları

### NodeJS
    ilk olarak react kodlarını işletmek için gerekli olan server-side bir sunucuya ihtiyaç var 
    bu nedenle nodeJS kurulumunu yapıyoruz.

```link
    https://nodejs.org/en/download
```
    kurulum sonrasında işlemin doğruluğunu sağlamak amacıyla console(Win: cmd, MacOS: terminal) da 
    aşağıdaki kodları çalıştırıyoruz. 
```bash
    node -v

    npm -v
```
    kodlar çalıştıktan sonra sırasıyla node versiyonu ve npm paket verisyonu gelecektir.
    v18.20.2 gibi

### ReactJS

    reactjs için öncelikle dokümantaayonları incelemek faydalı olacaktır.
    - https://react.dev/learn/start-a-new-react-project
    - https://create-react-app.dev/docs/getting-started

```bash
    # TS(typeScript) olmadan oluşturulan bir projedir.
    npx create-react-app UYGULAMA_ADI
```

```bash
    # TypeScript olan versiyon ile uygulama oluşturmak.
    npx create-react-app UYGULAMA_ADI --tamplate typescript
# aşağıdaki gibi uyumsuzluk yaşanan sürümlerin kurulumunu yapmak için kurulumu bu şekilde düzenlemek gerekiyor.
    npx --legacy-peer-deps create-react-app ornek1 --template typescript
```
    HTML TAGS -> sayfanın temel iskeletini oluşturan kodlama olarak adlanadırılabilir.
    CSS -> bir internet sayfasının tasarımı ve şeklini oluşturan kodlar bütünüdür.
    JS -> bir internet sayfasının aksiyonlarını yöneten kodlamalardır.
    ----------
    JS internetin doğal progralama dili gibi düşünebiliriz, bir web sayfasındaki aksiyonları yönetir. Ancak,
    java gibi dillerde olduğu haliyle JS de tip güvenliği yoktur. mesela, java da bir değişkenin önceden türü
    bellidir, int olarak tanımlanan bir değişkene sadece tam sayı atabilir.
    JAVA: 
    int sayi = 5;
    sayi = "Ahmet"; // Yanlış tır yazılamaz.
    public void topla(int s1, int s2)
    JS:
    var sayi = 6;
    sayi = "Deniz";
    sayi = [423,423,432,4234,234];
    sayi = true
    functoin topla(s1,s2)

    TS - TypeScript, js kodlamayı daha güvenli ve okunaklı kılmayı sağlayan bir yapıdır. Bu sadece tip güvenliği
    de sağlanmış olur. 

## İlk Örnek Proje oluşturma 

```bash
    npx create-react-app ilkproje --template typescript
```

    ilk kurulum işlemi tamamlandıktan sonra, genellikle bulunduğumuz dizi oluşturduğıumuz dizinin parent folder ı dır
    bu nedenle ilk yapmamız gereken şey oluşturduğumuz dosyanın içerisine girmektir.

```bash
    cd ilkproje
```

    sonra uygulamayı çalıştırmak için,

```bash
    npm start
```
    uygulama çalıştığında bir browser ekranı açar ve ekranda dönen bir react logosu görürsünüz. 
    uygulamadan çıkmak yada kapatmak için terminalde CRTL+C tuşlarına basınız.

### node 18 için yaşanan sorunun çözümü için 
    aşağıdaki gibi uyumsuzluk yaşanan sürümlerin kurulumunu yapmak için kurulumu bu şekilde düzenlemek gerekiyor.

    npx --legacy-peer-deps create-react-app ornek1 --template typescript

    Eğer bunu PC de sürekli kılmak istiyor isek, aşağıdaki komutu çalıştırmak yeterlidir.
    npm config set legacy-peer-deps true 


    Olası Hatalar için:
    1- npm install --force
    2- npm audit fix --force
    3- npm install --legacy-peer-deps

    NOT!!! Projenin package.json dosyasında react 19 sürümlerini 18 ile değiştirmek ve tekrardan npm install ile 
    kurulumu tamamlamak gerekli.
```json
  "dependencies": {  
    "react": "^18.3.1",
    "react-dom": "^18.3.1",   
  },
```
### Boorstrap in uygulama içerisinde kullanılması.

```bash
    npm i bootstrap@5.3.3
```
    sonra index.tsx içerisine "import 'bootstrap/dist/css/bootstrap.min.css';" ekliyoruz.

