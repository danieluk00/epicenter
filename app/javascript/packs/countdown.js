
const joinWrapper = document.querySelector('.join-wrapper')

if (joinWrapper) {

  console.log('test')

  //const deadline = eventData.dataset.deadline;
  const deadline = "December 13, 2019 18:15:00"
  //const tokenEvent = eventData.dataset.token;

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  let clock = document.getElementById('clockdiv');



  function initializeClock(endtime){

    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);


        if (t.days>0) {
          clock.innerHTML = `<span class="clock"><span class="hour">${t.days}</span>d <span class="hour">${t.hours}</span>h <span class="hour">${t.minutes}</span>m</span>`;
        } else {
          clock.innerHTML = `<span class="clock"><span class="hour">${t.hours}</span>h <span class="hour">${t.minutes}</span>m <span class="hour">${t.seconds}</span>s</span>`;
        }


      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }

  initializeClock(deadline);
}
