const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');

const dataHide=document.querySelector('.middle_layer')

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Please write the city name before Search`;
    }else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a5f240334b6a7e4e00325293a0efdb8a`;
        const response=await fetch(url);
        const data=await response.json();
        const arrayData=[data];
        
        city_name.innerText=`${arrayData[0].name},${arrayData[0].sys.country}`;
        temp_real_val.innerText=arrayData[0].main.temp;


        const tempMood=arrayData[0].weather[0].main;

        if(tempMood=="Clear"){
            temp_status.innerHTML=`<i class="fas fa-sun" style="color: #eccc68;"></i>`;
        }else if(tempMood=="Clouds"){
            temp_status.innerHTML=`<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
        }else if(tempMood=="Rain"){
            temp_status.innerHTML=`<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>`;
        }else{temp_status.innerHTML=`<i class="fas fa-sun" style="color: #eccc68;"></i>`;}
        dataHide.classList.remove('data_hide');
    }
       catch{
        city_name.innerText=`Please enter the correct city name`;
        dataHide.classList.add('data_hide');
       }
    }
}

submitBtn.addEventListener('click',getInfo);