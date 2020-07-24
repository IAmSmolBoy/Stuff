// To stop the page from reloading when the submit button is pressed
const a = document.getElementsByClassName("a")
for(i=0;i<a.length;i++){
    a[i].addEventListener("submit", (e)=>{
        e.preventDefault()
    })
}
// Randomiser
const c = document.getElementById("c")
const d = document.getElementById("d")
const res = document.getElementById("result")
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


// Prime number determiner
const e = document.getElementById("e")
const f = document.getElementById("f")
const primeRes = document.getElementById("primeRes")
f.addEventListener("click", ()=>{
    if(e.value > 9999999){
        primeRes.innerHTML = "Number too big to calculate. The computer can only handle so much."
    }
    else{
        Num = e.value
        numList = []
        for(i=1;i<=e.value;i++){
            if(Num%i===0){
                numList.push(i)
            }
        }
        if(numList.length === 2){
            primeRes.innerHTML = "The number is prime"
        }
        if(numList.length === 1){
            primeRes.innerHTML = "The number is 1"
        }
        else{
            primeRes.innerHTML = numList.join(" , ")
        }
    }
})