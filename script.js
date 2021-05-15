// To stop the page from reloading when the submit button is pressed
const a = document.getElementsByClassName("a")
for(i=0;i<a.length;i++){
    a[i].addEventListener("submit", (e)=>{
        e.preventDefault()
    })
}
// Randomiser
const c = document.getElementById("c")
const res = document.getElementById("result")
document.getElementById("d").addEventListener("click", ()=>{
    var RanList = c.value.split(",")
    var RanNum = Math.random() * RanList.length
    if(Math.round(RanNum) >= RanList.length){
        res.innerHTML = `The result is "${RanList[Math.floor(RanNum)]}"`
    }
    else{
        res.innerHTML = `The result is "${RanList[Math.round(RanNum)]}"`
    }
    c.value = ""
})


// Prime number determiner
const e = document.getElementById("e")
const primeRes = document.getElementById("primeRes")
document.getElementById("f").addEventListener("click", ()=>{
    if(e.value > 99999){
        primeRes.innerHTML = "Number too big to calculate. The computer can only handle so much."
    }
    else{
        numList = []
        for(i=1;i<=e.value;i++){
            if(e.value % i === 0){
                numList.push(i)
            }
        }
        if(numList.length === 2){
            primeRes.innerHTML = "The number is prime"
        }
        else if(numList.length === 1){
            primeRes.innerHTML = "1 is not a prime number"
        }
        else{
            primeRes.innerHTML = numList.join(" , ")
        }
    }
    e.valueL = ""
})


//factoriser
const g = document.getElementById("g")
const h = document.getElementById("h")
const k = document.getElementById("k")
const factorised = document.getElementById("factorised")
document.getElementById("l").addEventListener("click", () => {
    var discriminant = parseInt(h.value) * parseInt(h.value) - 4 * parseInt(g.value) * parseInt(k.value)
    if (discriminant < 0 || parseInt(g.value) === 0 || parseInt(h.value) === 0 || parseInt(k.value) === 0) {
        factorised.innerHTML = "No solution"
    }
    else {
        let result = (Math.sqrt(discriminant) - parseInt(h.value)) / (2 * parseInt(g.value))
        if (discriminant === 0) {
            factorised.innerHTML = "The solution is " + String(result)
        }
        else {
            factorised.innerHTML = "The soutions are " + String(result) + " and " + String(-result)
        }
    }
    g.value = ""
    h.value = ""
    k.value = ""
})


//RNG
const m = document.getElementById("m")
const ranNum = document.getElementById("ranNum")
document.getElementById("n").addEventListener("click", () => {
    let maxMin = m.value.split(",")
    let min = Math.min(parseInt(maxMin[0]), parseInt(maxMin[1]))
    let max = Math.max(parseInt(maxMin[0]), parseInt(maxMin[1]))
    ranNum.innerHTML = Math.round((max - min) * Math.random()) + min
    m.value = ""
})