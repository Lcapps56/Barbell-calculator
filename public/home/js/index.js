let TW
let BW = 0
let TPW = 0
let plateNum = 0
let Plates = []
let PVs = []

$(".plate").on("click", function(){
    PVs.push(parseInt($(this).val()))
    Plates.push($(this).text())
    // total plate weight = the sum of the PVs array
    updateNums()
    // make the Plates show up on the page
    updatePlates()
    console.log("=======")
    console.log(Plates)
    console.log("=======")

})

$(".bar").on("click", function(){
    BW = $(this).val()
    $("#BW").text(BW)
    updateNums()
})

$(document).on("click", ".subtract", function(){
    // remove the selected weight from the PVs array
    PVs = PVs.splice(PVs.indexOf($(this).val()*2, 1))
    // console.log("Plate values: "+ PVs)
    updateNums()

    console.log(Plates.indexOf($(this).val()))
    // if(index > -1){
    //     Plates = Plates.splice(index, index+1)
    // }
    // Plates = Plates.splice(Plates.indexOf($(this).text), 1)
    console.log(Plates.length)
    
    updatePlates()
})

function updateNums (){
    // reduce the Plate values array to a sum
        TPW = PVs.reduce((accumulator, currentValue) =>{
            return accumulator + currentValue
        }, 0)

        console.log("Plate values after: " + PVs)
    // add with the bar weight
        TW = (parseInt(BW) + parseInt(TPW))
    // update the DOM
        $("#TPW").text(TPW)
        $("#TW").text(TW) 
}

function updatePlates (){
    $("#Plates").empty()

    for(let i=0; i<Plates.length; i++){
        var newdiv = $("<div>")
        var newPlate = $("<h4>"+ Plates[i] + "</h4>")
        var newAdd = $("<button class='subtract' value="+parseInt(Plates[i]*2)+">-</button>")
        $(newdiv).append(newPlate, newAdd)
        $("#Plates").append(newdiv, newPlate, newAdd)
    }
}