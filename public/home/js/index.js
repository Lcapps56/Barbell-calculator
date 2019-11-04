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
    updatePlates(Plates)
    
    // update the image, put the plates on the barbell

})

$(".bar").on("click", function(){
    BW = $(this).val()
    $("#BW").text(BW)
    updateNums()
})

$(document).on("click", ".subtract", function(){
    console.log(Plates)

    let clicked = ($(this).data("number")).toString()
    let index = Plates.indexOf(clicked)

    Plates.splice(index, 1)

    console.log("=======")
    console.log(Plates)
    updatePlates()
})

function updateNums (){
    PVs.sort(function(a, b){return (b-a)})
    // reduce the Plate values array to a sum
        TPW = PVs.reduce((accumulator, currentValue) =>{
            return accumulator + currentValue
        }, 0)

    // add with the bar weight
        TW = (parseInt(BW) + parseInt(TPW))
    // update the DOM
        $("#TPW").text(TPW)
        $("#TW").text(TW) 
}

function updatePlates (){
    Plates = Plates
    $("#Plates").empty()

    Plates.sort(function(a, b){return (b-a)})

    for(let i=0; i<Plates.length; i++){
        var newdiv = $("<div>")
        var newPlate = $("<h4>"+ Plates[i] + "</h4>")
        var newAdd = $("<button class='subtract' value="+parseInt(Plates[i]*2)+" data-number="+Plates[i]+">-</button>")
        $(newdiv).append(newPlate, newAdd)
        $("#Plates").append(newdiv, newPlate, newAdd)
    }
}
