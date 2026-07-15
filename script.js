
const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('nav ul');
if(btn){btn.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const form=document.querySelector('#quote-form');
if(form){
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent('Northwood Event Rental Quote Request');
  const body=encodeURIComponent(
   `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nEvent date: ${data.get('date')}\nEvent type: ${data.get('type')}\nRentals interested in: ${data.get('rentals')}\n\nDetails:\n${data.get('message')}`
  );
  window.location.href=`mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
 });
}
