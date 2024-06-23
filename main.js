const number = document.querySelector("#tiro")
const incrementbtn = document.querySelector("#incrementbtn")
const resetbtn = document.querySelector("#resetbtn")
const box = document.querySelector("#box")
const input = document.querySelector("#input")



let initialvalue = 0
incrementbtn.addEventListener("click", function(){
    initialvalue ++

    number.innerHTML = initialvalue
    
    if(initialvalue == 4 ){
        box.style.backgroundColor = "yellow"
    }
    if (initialvalue>=5){
        box.style.backgroundColor="red"
    }
    if (initialvalue >= 6){
        box.style.backgroundColor = "green"
    }
     if (initialvalue >= 7){
        box.style.backgroundColor = "blue"
    }
     if (initialvalue == 8){
        box.style.backgroundColor = "black"
    } 
   
    // if (initialvalue >= 9){
    //     document.write("BY 🧏‍♂️🧏‍♂️🧏 BY BY BY ")
    // } 
    // else {
    //     document(box.style.backgroundColor="gray")
    // }
      
    
})

resetbtn.addEventListener("click", function(){
    initialvalue=0
    number.innerHTML = initialvalue
    if( initialvalue < 1){
        box.style.backgroundColor = "red"
    }
})


input.addEventListener("input", function(){
    initialvalue = parseInt(input.value)
    number.innerHTML = initialvalue
    if( initialvalue < 1){
        box.style.backgroundColor = "red"
    }
    if( initialvalue == 1){
        box.style.backgroundColor = "yellow"
    }
    if( initialvalue == 2){
        box.style.backgroundColor = "green"
    }
    if( initialvalue == 3){
        box.style.backgroundColor = "blue"
    }
    if( initialvalue == 4){
        box.style.backgroundColor = "black"
    }
    if( initialvalue == 5){
        box.style.backgroundColor = "gray"
    }
    if( initialvalue == 6){
        box.style.backgroundColor="red"
    
    }
    if( initialvalue == 7){
        box.style.backgroundColor="BLUE"
    }
    if( initialvalue == 8){
        box.style.backgroundColor="LIME"
    }
    if( initialvalue == 9){
        box.style.backgroundColor="PURPLE"
    }
    if( initialvalue == 10){
        box.style.backgroundColor="ORANGE"
    }

})












// number.innerHTML = 0

// incrementbtn.addEventListener("click", () => {
//     number.innerHTML = parseInt(number.innerHTML) + 1
// })

// resetbtn.addEventListener("click", () => {
//     number.innerHTML = 0
// })
