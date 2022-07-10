// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
    let info='EVENTS';
    const handleClick = () => {
      alert("Btn Clicked");
    };
    const handleClear = (text) => {
        alert('text');
      };
      const handleChange = (text) => {
        alert('text');
      };
    return (
      <div className="container text-center mt-4">
         <div className="display-4 text-danger mt-4 " >{info}</div>
        <button onClick={handleClick} className="btn btn-warning">
          Click
        </button>       
        <button onClick={()=>handleClear('clear btn pressed')} className="btn btn-dark">
          Clear
        </button>
         {/* Eger bir event fonksiyonunun paremetresi olmasi gerkiyorsa 
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi 
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}

     

        <button onClick={handleChange} className="btn btn-danger " >Change</button>




      </div>
    );
  };
  
  export default Events;