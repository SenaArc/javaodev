let userName = prompt("Kullanici Adi:")
let myName = document.querySelector("#myName")
myName.innerHTML = ` ${userName}`
var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
function timer() {
    let tarih = new Date().toLocaleTimeString()
    let tarihh = new Date().getDay()
    let date = document.querySelector("#date")
    date.innerHTML = `${tarih} ${gunler[tarihh]}`
}
setInterval(timer,1000)

