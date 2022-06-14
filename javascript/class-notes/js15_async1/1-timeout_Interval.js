//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
const bekle=(ms)=>{
    //! blocking-code
    const start=new Date().getTime();2000
    while(new Date().getTime()<start+ms );
}

console.log('TIMEOUT');
console.log('hello');
//alert("ıtf") //! blocking-code
console.time('timer'); // ne kadar üsre kaybettiğini geçen süreyi gösterir
bekle(1000);
console.timeEnd('timer'); // ne kadar üsre kaybettiğini geçen süreyi gösterir
console.log('FS11');

//* Asenkron(setTimeout)
//* ---------------------------------------------------------------
// macro task kuruğu setTimeout macro olduğunu gösterir
setTimeout(() => {
    console.log("selam");
});
console.log("aleyküm");

// micro task kuruğu
console.log("selam");
console.log("aleyküm");

setTimeout(() => {
    console.log("merhaba");
},2000);
console.log("dostum");

//* Asenkron(setInterval,clearInterval )
let counter=0;
// setInterval(() => {
 //   console.log(++counter);
// }, 1000);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)