let selectedEvent = "";
 
function openForm(eventName){
  document.getElementById("popup").style.display =" block";
  selectedEvent = eventName;
  document.getElementById("eventName").innerText = "Event: " + eventName;
} 
function closeForm(){
  document.getElementById("popup").style.display = "none";
} 
function submitedForm(){
     document.getElementById("sub").style.display = "block";
}
function submitForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let roll = document.getElementById("roll").value;

  if(name === "" || email === "" || roll ===""){
    alert("Please fill all fields");
    return;
  }

  let data = {
    name: name,
    email: email,
    roll : roll,
    event: selectedEvent
  };
  closeForm();
  submitedForm();
  
}