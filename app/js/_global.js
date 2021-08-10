  
// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        setTimeout(app.global.removeLoader, 3000);
        app.global.loadHeader();
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    },
    removeLoader: function () {
        
        const initdev = document.getElementsByClassName("init")[0];
        // initdev.style.display = "none";

        $(".init").fadeOut("slow", function () {
            document.body.style.overflow = "auto"
            console.log("faded out");
        });
    }
}

// Run the global stuff
app.global.init();