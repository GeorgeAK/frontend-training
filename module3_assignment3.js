function promptDialogeExample()
{
    let len = window.prompt("give length ","10")
    len = len ? len: "10"
    let bre = prompt("Give breadth","5")
    bre = bre ? bre:"5"
    let ht = prompt("Give height","3")
    ht = ht ? ht:"3"
    let lenint = parseInt(len)
    let breint = parseInt(bre)
    let htint = parseInt(ht)
    let vol = len*bre*ht;
    console.log("vol = ",vol)
}