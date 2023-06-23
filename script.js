var tablinks=document.getElementsByClassName('tab-links')
var tabcontents=document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add('active-tab')
}




var sidemenu=document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0"
   
}
function closemenu(){
    sidemenu.style.right="-200px"
   
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyV65gsYuzBD775Qv7NkG3Zp6jDXg5dQpRMDAUq8-EzugXMJcIrhYNFLSogoqADLRdvkQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})





document.getElementById('Phone').addEventListener('input', function() {
  var phoneInput = document.getElementById('Phone');
  var phoneValue = phoneInput.value;
  
  // Remove any non-digit characters from the input value
  var numericValue = phoneValue.replace(/\D/g, '');
  
  if (numericValue.length === 10) {
    phoneInput.setCustomValidity(''); 
  } else {
    phoneInput.setCustomValidity('Phone number must be 10 digits long');
  }
});

