$( document ).ready(function() {
    $("#btn-customize").click(function() {
        $("#tab-customize").show();
        $("#tab-review").hide();
        $("#tab-guests").hide();
        $("#tab-guests2").hide();
        $("#tab-homepage").hide();
    });

    $("#btn-start").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").show();
        $("#tab-guests").hide();
        $("#tab-guests2").hide();
        $("#tab-homepage").hide();
    });

    $("#btn-random").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").show();
        $("#tab-guests").hide();
        $("#tab-guests2").hide();
        $("#tab-homepage").hide();
        
        generate(1);
    })

    $("#btn-guests").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").hide();
        $("#tab-guests").show();
        $("#tab-guests2").hide();
        $("#tab-homepage").hide();
    });

    $("#btn-guests2").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").hide();
        $("#tab-guests").hide();
        $("#tab-guests2").show();
        $("#tab-homepage").hide();
    });

    $("#btn-homepage").click(function() {
        $("#tab-customize").hide();
        $("#tab-review").hide();
        $("#tab-guests").hide();
        $("#tab-guests2").hide();
        $("#tab-homepage").show();
    });

    $("#guestbook-send").click(function() {
        alert(`
        CRITICAL PHP QUERY ERROR IN STATEMENT: 'LOGIN GUESTBOOK_DB WITH USER='root' PASSWORD='Chr15tMas92'
        `);
    })

    generate(0);
});

function generate(random) {
    var rules = erratic.parse(spec);

    if (random == 1) {
        $("#review-header").html("Review generated PC")
    } else {
        $("#review-header").html("My Rig")
    }
        
    $("#spec-cpu").html(erratic.generate(rules, 'cpu'));
    $("#spec-ram").html(erratic.generate(rules, 'ram'));
    $("#spec-application").html(erratic.generate(rules, 'application'));
    $("#spec-os").html(erratic.generate(rules, 'os'));

    $("#spec-mouse").html(erratic.generate(rules, 'mouse'));
    $("#spec-keyboard").html(erratic.generate(rules, 'keyboard'));
    $("#spec-storage").html(erratic.generate(rules, 'storage'));
    $("#spec-display").html(erratic.generate(rules, 'display'));
    // $("#spec-printer").html(erratic.generate(rules, 'printer'));
    $("#spec-mousepad").html(erratic.generate(rules, 'mousepad'));

    $("#spec-toolbar1").html(erratic.generate(rules, 'toolbar1'));
    $("#spec-toolbar2").html(erratic.generate(rules, 'toolbar2'));
    $("#spec-toolbar3").html(erratic.generate(rules, 'toolbar3'));
    $("#spec-toolbar4").html(erratic.generate(rules, 'toolbar4'));

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