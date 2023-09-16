let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let AMPM = document.getElementById("AMPM");

setInterval(() => {   //it is an arrow function for speccific interval
  let clock = new Date();
  let hrs = clock.getHours();
  let min = clock.getMinutes();
  let sec = clock.getSeconds();
  
  if (hrs < 12) {
    AMPM.innerHTML = "AM";
  } else {
    AMPM.innerHTML = "PM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs < 10) {      //if it is less than ten like 9,8,7...so it will add 0 before the digit as 09,08,07.....
    hrs = "0" + hrs;
  }
  if (min < 10) {       //same as above
    min = "0" + min;
  }
  if (sec < 10) {       //same as above
    sec = "0" + sec;
  }
  if (hrs == 0) {        //it will run when exactly on 12 noon
    hrs = 12;
  }
  

  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
});
