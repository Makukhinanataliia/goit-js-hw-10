import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const h=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.disabled=!0;let u;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0].getTime();t<Date.now()?(f.error({title:"Error",position:"topCenter",message:"Please choose a date in the future"}),o.disabled=!0):(o.disabled=!1,u=t)}};m(h,y);o.addEventListener("click",p);function p(){const e=u,t=setInterval(()=>{const d=Date.now(),r=e-d;if(r<=0)clearInterval(t);else{const{days:i,hours:a,minutes:s,seconds:c}=S(r);document.querySelector("[data-days]").textContent=`${i}`,document.querySelector("[data-hours]").textContent=`${a}`,document.querySelector("[data-minutes]").textContent=`${s}`,document.querySelector("[data-seconds]").textContent=`${c}`}document.getElementById("datetime-picker").disabled=!0,o.disabled=!0},1e3)}function S(e){const a=n(Math.floor(e/864e5)),s=n(Math.floor(e%864e5/36e5)),c=n(Math.floor(e%864e5%36e5/6e4)),l=n(Math.floor(e%864e5%36e5%6e4/1e3));return{days:a,hours:s,minutes:c,seconds:l}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
