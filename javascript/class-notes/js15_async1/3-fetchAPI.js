//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. wait until water boiled -> kettle -> work or failed
//* 2. add tea --> tea is avalaible or not
//* 3. wait for brewing


/* const wait = (ms) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  };
  const brewTea = () => {
    boil()
      .then((status1) => {
        console.log(status1);
        return addTea();
      })
      .then((status2) => {
        console.log(status2);
        wait(1000);
        return "Tea is ready. Bon Appetite";
      })
      .then((status3) => {
        console.log(status3);
      })
      .catch((err) => console.log(err));
  };
  const boil = () => {
    return new Promise((resolve, reject) => {
      const boiled = Math.floor(Math.random() * 5);
      if (boiled) {
        wait(1000);
        resolve("Water Boiled");
      } else {
        reject(new Error("Kettle Failed"));
      }
    });
  };
  
  const addTea = () => {
    return new Promise((resolve, reject) => {
      const teaAvalaible = Math.floor(Math.random() * 3);
      if (teaAvalaible) {
        wait(1000);
        resolve("Tea was added");
      } else {
        reject(new Error("Tea unavailable"));
      }
    });
  };
  
  brewTea();*/

  const userDiv=document.querySelector('.users');

  fetch('https://api.github.com/users')
  .then((res)=>
  if (!res.ok){
    throw new Error(`something went wrong:${res.status`)
  }
  return res.json();})
  .then((data)=>updateDom(data) )
  .catch((err)=>console.log(err) );
  
  
    };