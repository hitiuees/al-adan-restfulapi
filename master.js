
let inputcountry=document.querySelectorAll('input')[0].value;
let  button=document.getElementById("button")


    button.onclick=function(){  
        
        let inputCity = document.querySelectorAll('input')[1].value;
        console.log(inputCity)}
      
  

    

function getprayertime(){
    axios.get('http://api.aladhan.com/v1/calendarByCity/2024/7?city=fes&country=morocco&method=2')
  .then((response)=>{
    let datas=response.data.data
  for(data of datas)
    console.log(data)


  })
  
}
getprayertime()



