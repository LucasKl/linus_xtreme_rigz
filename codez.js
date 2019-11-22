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
        
        generate();
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
        
        generate();
    });
    generate();
});

function generate() {
    var rules = erratic.parse(spec);
        
    $("#spec-cpu").html(erratic.generate(rules, 'cpu'));
    $("#spec-ram").html(erratic.generate(rules, 'ram'));
    $("#spec-mousepad").html(erratic.generate(rules, 'mousepad'));
    $("#spec-application1").html(erratic.generate(rules, 'application1'));

    $("#software1").html(erratic.generate(rules, 'software'));
    $("#software1-version").html(erratic.generate(rules, 'version'));
    $("#software2").html(erratic.generate(rules, 'software'));
    $("#software2-version").html(erratic.generate(rules, 'version'));
    $("#software3").html(erratic.generate(rules, 'software'));
    $("#software3-version").html(erratic.generate(rules, 'version'));
    $("#software4").html(erratic.generate(rules, 'software'));
    $("#software4-version").html(erratic.generate(rules, 'version'));
    $("#software5").html(erratic.generate(rules, 'software'));
    $("#software5-version").html(erratic.generate(rules, 'version'));
    $("#software6").html(erratic.generate(rules, 'software'));
    $("#software6-version").html(erratic.generate(rules, 'version'));
}