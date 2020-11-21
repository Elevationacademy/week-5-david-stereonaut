$("#price").on("click", function(){
    let name = $("input").val()

    $.get(`/priceCheck/${name}`, function(data){
        $("body").append(`<p>${data.price}</p>`)
    })
})

$("#buy").on("click", function(){
    let name = $("input").val()

    $.get(`/buy/${name}`, function(data){
        $("body").append(`Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store`)
    })
})