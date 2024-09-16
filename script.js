document.getElementById('delete-btn').addEventListener('click', function(){
   const textMessage =  document.getElementById('text-msg');
   textMessage.style.display = 'none';
})
const inputField = document.getElementById('text-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('delete-btn');
    if (text === 'delete') {
        deleteButton.removeAttribute('disabled')
    } else{
        deleteButton.setAttribute('disabled', true);
    }

})