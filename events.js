document.getElementById('prompt-btn').addEventListener('click', function(){
     const inputBox = parseInt(prompt("Enter a number"));
     if(inputBox < 10 ){
        alert("Your number is less then 10");
     } else{
        alert("Sorry you cannot find the exact number")
     }
    
})