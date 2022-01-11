function submitForm(){
    var name = document.getElementById('name').value;
    var regno = document.getElementById('regno').value;

    if(name == ""){
        alert('Please Enter Name');
    }else if (regno == ""){
        alert('Please Enter Reg No');
    }
}