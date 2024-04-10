function Practice() {
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let countDate=new Date()
    let date=countDate.getDate();
    let month=countDate.getMonth()+1;
    let year=countDate.getFullYear();

    let day=days[countDate.getDay()];

    let hour=countDate.getHours();
    const minutes=countDate.getMinutes();

    console.log(`${date}-${month}-${year}` );
    console.log(`${day}`);
   
    console.log(`${hour} : ${minutes}`);
}
Practice();