function enviar() { 
    let inputValue = document.getElementById("fname").value;
    let inputValue1 = document.getElementById("lname").value;
    let inputValue2 = document.getElementById("country").value;
    let inputValue3 = document.getElementById("subject").value;
    alert("Su Formulario Fue Enviado");
    console.log({inputValue:inputValue,inputValue1:inputValue1,inputValue2:inputValue2,inputValue3:inputValue3});
 }