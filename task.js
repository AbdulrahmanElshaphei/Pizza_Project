let email=["7sam3mad@gmail.com","abdulrahmanelshaphei@gmail.com","emadalyaa039@gmail.com"]
let Pass=["12345678910","abduuu1235","aliaaa543"]
let btn=document.querySelector("#nlog")
let inemail=document.querySelector("#Email")
let inpass=document.querySelector("#Password")
btn.onclick=function(){
    let x=inemail.value
    let y=inpass.value
    let z=email.indexOf(x)
    if(y==Pass[z] && z!=-1){
        alert("Successful")
    }else{
        alert("fail")
    }
}
let btn2=document.querySelector("#fullmenu")
let count=0
btn2.onclick=function(){
    ++count
    if(count%2!=0){
        document.querySelector(".menu-items").style.cssText="height: 770px;"
    }else{
        document.querySelector(".menu-items").style.cssText="height: 275px;"
    }
}
