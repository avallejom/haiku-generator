console.log("app");

$(document).ready(function() {

    function loadGrammar(name) {
        //$("#output").html("");	
		
        var grammar = tracery.createGrammar(grammars[name]);
        //$("#grammar").html(grammar.toText());

        for (var i = 0; i < 1; i++) {

            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "alert alert-danger",
                html : s
            });

            $("#output").html(div);

        }

    }

    setTimeout(function() {
        //loadGrammar("haikus");

    }, 10);

    $('#btn').on('click', function() {
        loadGrammar("haikus");
    });
});
