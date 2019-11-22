$( document ).ready(function() {
    $("#btn-customize").click(function() {
        $("#tab-customize").show();
        $("#tab-review").hide();
        $("#tab-guests").hide();
        $("#tab-homepage").hide();
    });

    $("#btn-review").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").show();
        $("#tab-guests").hide();
        $("#tab-homepage").hide();
    });

    $("#btn-random").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").show();
        $("#tab-guests").hide();
        $("#tab-homepage").hide();
        
        var rules = erratic.parse(spec);
        
        $("#spec-cpu").html(erratic.generate(rules, 'cpu'));
        $("#spec-ram").html(erratic.generate(rules, 'ram'));
        $("#spec-mousepad").html(erratic.generate(rules, 'mousepad'));
    })

    $("#btn-guests").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").hide();
        $("#tab-guests").show();
        $("#tab-homepage").hide();
    });

    $("#btn-homepage").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").hide();
        $("#tab-guests").hide();
        $("#tab-homepage").show();
    });

    $("#btn-generate").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").show();
        $("#tab-guests").hide();
        $("#tab-homepage").hide();
        
        var rules = erratic.parse(spec);

        $("#spec-cpu").html(erratic.generate(rules, 'cpu'));
        $("#spec-ram").html(erratic.generate(rules, 'ram'));
    })
});