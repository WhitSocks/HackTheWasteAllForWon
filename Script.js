
function login() {
    const loginBtn = document.querySelector('#login-btn');
    
    loginBtn.addEventListener('click', handleLogin);
    
    function handleLogin(event) {
        event.preventDefault();
    
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
    
        if (email === 'user@example.com' && password === 'password') {
            window.location.href = '';
        }
        else 
        {
            alert('Invalid email or password. Please try again.');
        }
    }
    }



function allowDrop(ev) {
    ev.preventDefault();
   
    
  }
  
  function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
   
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    try{
        if(data=="drag1"){
            Find1();
        }else if(data=="drag2"){
            Find2();
        }else if(data=="drag3"){
            Find3();
        }else if(data=="drag4"){
            Find4();
        }
    }
    catch(err){
        window.location.reload();
    }
  

  }
  function Find1(){
    const CollectPlastic = document.getElementById("Plastic").children;
    
    if(CollectPlastic[0].id== "drag1") {
            console.log("HEllo");
      
    }else if (CollectPlastic[0].id!= "drag1"){
       
    }



   
  }
  function Find2(){
    const CollectPaper = document.getElementById("Paper").children;
    if(CollectPaper[0].id== "drag2"){
            console.log("HEllo");
    }else{
        console.log("Bye");
    }
    


 
  }
  function Find3(){
    const CollectTin = document.getElementById("Tin").children;
    if(CollectTin[0].id== "drag3"){
            console.log("HEllo");
    }else{
        console.log("Bye");
    }
    


 
  }
  function Find4(){
    const CollectGlass = document.getElementById("Glass").children;
    if(CollectGlass[0].id== "drag4"){
            console.log("HEllo");
    }else{
        console.log("Bye");
    }
    


 
  }