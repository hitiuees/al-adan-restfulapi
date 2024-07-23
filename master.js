//declare variable needed in the whole code
let button = document.getElementById("button");
let containerprayer = document.getElementById("divtime");

//function of getting the api by using axios and filtering data by date class
function getprayertime(inputCity, inputcountry) {
    let prayertime = new Date();
    let day = prayertime.getDate() - 1;
    let month = prayertime.getMonth() + 1;
    let year = prayertime.getFullYear();

    axios.get(`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${inputCity}&country=${inputcountry}&method=2`)
        .then((response) => {
            let datas = response.data.data;
            
            if (!datas || datas.length === 0) {
                alert(`${inputCity} or ${inputcountry} does not exist`);
                return;
            }

            let prayerDiv = document.createElement('div');
            prayerDiv.className = 'icon-container';
            prayerDiv.innerHTML = `<div>
                <i class="fas fa-map-marker-alt"></i>
                <p>${inputCity}</p>
            </div>
    
            <div>
                <i class="fas fa-sun"></i>
                <p>${datas[day].timings.Fajr}</p>
            </div>
            <div>
                <i class="fas fa-cloud-sun"></i>
                <p>${datas[day].timings.Dhuhr}</p>
            </div>
            <div>
                <i class="fas fa-cloud-moon"></i>
                <p>${datas[day].timings.Asr}</p>
            </div>
            <div>
                <i class="fas fa-moon"></i>
                <p>${datas[day].timings.Maghrib}</p>
            </div>
            <div>
                <i class="fas fa-star"></i>
                <p>${datas[day].timings.Isha}</p>
            </div>`;

            containerprayer.appendChild(prayerDiv);
        })
        .catch((error) => {
            alert(`${inputCity} or ${inputcountry} does not exist`);
        });
}

//function of showing prayer timing at screen 
button.onclick = function () {
    containerprayer.innerHTML = '';
    let inputCity = document.querySelectorAll('input')[1].value;
    let inputcountry = document.querySelectorAll('input')[0].value;
    if (inputCity && inputcountry) {
        getprayertime(inputCity, inputcountry);
    } else {
        containerprayer.innerHTML = '';
    }
};

