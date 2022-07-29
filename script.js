let fnameNode=document.getElementById("fname");
let emailNode=document.getElementById("mail");
let passNode=document.getElementById("pass");
let c_passNode=document.getElementById("confirmpass");
let unameNode=document.getElementById("uname");

let errorNode1=document.getElementById("error1");
let errorNode4=document.getElementById("error4");
let errorNode5=document.getElementById("error5");
let errorNode6=document.getElementById("error6");
let errorNode7=document.getElementById("error7");
let checkboxNode=document.getElementById("check");

let array=[errorNode1,errorNode4,errorNode5,errorNode6,errorNode7];
for(let node of array){
  node.style.color="red";
}

function validateForm(){
    let v1=validate1();  
    let v4=validate4();
    let v5=validate5();
    let v6=validate6();
    let v7=validate7();
    return (v1 && v3 && v4 && v5 && v6 && v7); 
}


function validate1(){
    let fname=fnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(fname===''){
        errorNode1.innerHTML="<small>First name is required</small>";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(fname)==false){
        errorNode1.innerHTML="<small>First name must have only letters</small>";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else{
        fnameNode.style.border="2px solid green";
        return true;
    }
}


function validate4(){
    let email=emailNode.value;
    errorNode4.innerHTML="";
    if(email===''){
        errorNode4.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode4.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else{
        emailNode.style.border="2px solid green";
        return true;
    }
}


function validate5(){
    let uname=unameNode.value;
    errorNode5.innerHTML="";
    if(uname===''){
        errorNode5.innerHTML="<small>username is required</small>";
        unameNode.style.border="2px solid red";
        return false;
    }
    else if(uname.length<3 || uname.length>10){
        errorNode5.innerHTML="<small>username must be 3 to 10 characters long</small>";
        unameNode.style.border="2px solid red";
        return false;
    }
    else{
        unameNode.style.border="2px solid green";
        return true;
    }
}


function validate6(){
    let pass=passNode.value;
    errorNode6.innerHTML="";
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode6.innerHTML="<small>Password is required</small>";
        passNode.style.border="2px solid red";
        return false;
    }
    else if(regx.test(pass)==false){
        errorNode6.innerHTML="<small>password must be 8-16 characters</small>";
        let ulNode=document.createElement('ul');
        errorNode6.append(ulNode);
        ulNode.style.fontSize="10px";
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let val of ar){
            let liNode=document.createElement('li');
            liNode.textContent=val;
            ulNode.append(liNode);
        }
        passNode.style.border="2px solid red";
        return false;
    }
    else{
        passNode.style.border="2px solid green";
        return true;
    }
}


function validate7(){
    let cpass=c_passNode.value;
    let pass=passNode.value;
    errorNode7.innerHTML="";
    if(cpass===''){
        errorNode7.innerHTML="<small>Password is required</small>";
        c_passNode.style.border="2px solid red";
        return false;
    }
    else if(cpass!=pass){
        errorNode7.innerHTML="<small>Both passwords should match</small>";
        c_passNode.style.border="2px solid red";
        return false;
    }
    else{
        c_passNode.style.border="2px solid green";
        return true;
    }
}


function showPassword(){
 if(checkboxNode.checked){
    passNode.type="text";
 }else{
    passNode.type="password";
 }
}


    