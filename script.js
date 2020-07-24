// Randomiser
const a = document.getElementById("a")
const c = document.getElementById("c")
const d = document.getElementById("d")
const res = document.getElementById("result")
a.addEventListener("submit", (e)=>{
    e.preventDefault()
})
d.addEventListener("click", (e)=>{
    var RanList = c.value.split(",")
    var RanNum = Math.random() * RanList.length
    if(Math.round(RanNum) >= RanList.length){
        res.innerHTML = `The result is "${RanList[Math.floor(RanNum)]}"`
    }
    else{
        res.innerHTML = `The result is "${RanList[Math.round(RanNum)]}"`
    }
})


