// Code for date and time function

var d = new Date();
var h = d.getHours();
var q = d.getMinutes();
var n = d.getDate();
var y = d.getFullYear();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var w = weekday[d.getDay()];

var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var m = month[d.getMonth()];

// Converted getMinutes to an array to ensure minutes are displayed in digital format

var minute = new Array(10);
minute[0] = "00";
minute[1] = "01";
minute[2] = "02";
minute[3] = "03";
minute[4] = "04";
minute[5] = "05";
minute[6] = "06";
minute[7] = "07";
minute[8] = "08";
minute[9] = "09";
minute[10] = "10";
minute[11] = "11";
minute[12] = "12";
minute[13] = "13";
minute[14] = "14";
minute[15] = "15";
minute[16] = "16";
minute[17] = "17";
minute[18] = "18";
minute[19] = "19";
minute[20] = "20";
minute[21] = "21";
minute[22] = "22";
minute[23] = "23";
minute[24] = "24";
minute[25] = "25";
minute[26] = "26";
minute[27] = "27";
minute[28] = "28";
minute[29] = "29";
minute[30] = "30";
minute[31] = "31";
minute[32] = "32";
minute[33] = "33";
minute[34] = "34";
minute[35] = "35";
minute[36] = "36";
minute[37] = "37";
minute[38] = "38";
minute[39] = "39";
minute[40] = "40";
minute[41] = "41";
minute[42] = "42";
minute[43] = "43";
minute[44] = "44";
minute[45] = "45";
minute[46] = "46";
minute[47] = "47";
minute[48] = "48";
minute[49] = "49";
minute[50] = "50";
minute[51] = "51";
minute[52] = "52";
minute[53] = "53";
minute[54] = "54";
minute[55] = "55";
minute[56] = "56";
minute[57] = "57";
minute[58] = "58";
minute[59] = "59";
var o = minute[d.getMinutes()];

var time = h + ":" + o;
var date = w + ", " + n + " " + m + ", " + y;

document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;

// Time-dependent CSS updates

if (h >= 20 || h <= 6) {
    document.getElementById("body-id").style.background = "-webkit-linear-gradient(#00001a,#000066) no-repeat";
    var nightText = document.getElementsByClassName("text");
    for (var i=0; i<nightText.length; i++) {
        nightText[i].style.color = "#e6e6e6";
    }
} else if (h >= 19 || h <= 7) {
    document.getElementById("body-id").style.background = "-webkit-linear-gradient(#000066,#0000b3) no-repeat";
    var nightText = document.getElementsByClassName("text");
    for (var i=0; i<nightText.length; i++) {
        nightText[i].style.color = "#d9d9d9";
    }
}

// Weather query function

document.getElementById("button").addEventListener("click", searchLocation);

function searchLocation(){
    
    // Reveal info
    $("#img-container").slideDown(500);
    $("#weather-div").slideDown(500);
    document.getElementById("welcome").style.display = "none";
    document.getElementById("welcome2").style.display = "none";
    document.getElementById("weather-div").style.display = "inline-block";
    
    var location = document.getElementById("searchLocation").value;
    console.log(location);
    
    // jQuery required for getJSON method
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + location + ",uk&units=metric&APPID=aa96febe178298f316229d2b94465ff5", function(data){
        console.log(data);
        
        var img = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var humidity = data.main.humidity;
        
        $('.weather-img').attr('src', img);
        $('.city').html(city);
        $('.temp').html(temp);
        $('.weather-desc').html(desc);
        $('.humidity').html(humidity);

        // Floating cloud backdrop dependent on weather description

        if (data.weather[0].description.indexOf("clouds") >= 0){
            document.getElementById('cloud').classList.remove('disappear');
            document.getElementById('cloud2').classList.remove('disappear');
            document.getElementById('cloud3').classList.remove('disappear');
        } else {
            document.getElementById('cloud').classList.add('disappear');
            document.getElementById('cloud2').classList.add('disappear');
            document.getElementById('cloud3').classList.add('disappear');
        }
    });
}