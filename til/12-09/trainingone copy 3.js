$(() => { 
    $("#inner").on("click", () => { 
        $("#space").text(new Date().toLocaleTimeString());
    })
        
    $("img").attr("border", "5px solid orange");
    $("#show").attr("disabled", true);
    $("#minus").attr("disabled", true);

    $("#plus").on("click", () => { 
        $("img").attr("width", "400px");
        $("#plus").attr("disabled", true);
        $("#minus").attr("disabled", false);
    })

    $("#minus").on("click", () => { 
        $("img").attr("width", "200px");
        $("#minus").attr("disabled", true);
        $("#plus").attr("disabled", false);
    })

    $("#show").on("click", () => { 
        $("img").show();
        $("#show").attr("disabled", true);
        $("#hide").attr("disabled", false);
        
        if ($("img").width() === 400) {
            $("#minus").attr("disabled", false);
        } else {
            $("#plus").attr("disabled", false);
        }
    })

    $("#hide").on("click", () => { 
        $("img").hide();
        $("#show").attr("disabled", false);
        $("#hide").attr("disabled", true);
        $("#minus").attr("disabled", true);
        $("#plus").attr("disabled", true);
    })


})