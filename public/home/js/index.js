let TW
let BW = 0
let TPW = 0
let plateNum = 0
let Plates = []
let PVs = []

$(".plate").on("click", function(){
    PVs.push(parseInt($(this).val()))
    Plates.push($(this).text())
    // TPW = $(this).val()
    
    TPW = PVs.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
    }, 0)
    TW = (parseInt(BW) + parseInt(TPW))

    $("#TW").text(TW)
    $("#TPW").text(TPW)
    $("#Plates").empty()
    for(let i=0; i<Plates.length; i++){
        var newdiv = $("<div>")
        var newPlate = $("<h1>"+ Plates[i] + "</h1>")
        var newAdd = $("<button class='add' value="+parseInt(Plates[i])+">-</button>")
        $(newdiv).append(newPlate, newAdd)
        $("#Plates").append(newdiv, newPlate, newAdd)
    }
})
$(".bar").on("click", function(){
    BW = $(this).val()
    TW = (parseInt(BW) + parseInt(TPW))
    $("#TW").text(TW)
    $("#BW").text(BW)
})


