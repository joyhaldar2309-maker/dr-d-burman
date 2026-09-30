const WHATSAPP_NUMBER='918240502823';
function sendAppointment(e){
  e.preventDefault();
  const n=document.getElementById('name').value;
  const p=document.getElementById('phone').value;
  const s=document.getElementById('service').value;
  const d=document.getElementById('date').value||'Not specified';
  const m=document.getElementById('message').value||'None';
  const text=`Appointment Request\n\nPatient: ${n}\nMobile: ${p}\nService: ${s}\nPreferred date: ${d}\nMessage: ${m}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank');
}
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
