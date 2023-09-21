(function(){
    "use strict";

    $(".addTask-btn").on("click", function(){
        var inputText = $(".addTask-container input").val();

        var countChildren = $(".todos-container").children().length;

        if (countChildren != 0){
            $(".todos-container").append('<div class="divider-container"><div class="divider"></div></div>');
        }
        
        $(".todos-container").append('<div class="todos"><div class="taskCompleted-btn"></div><div class="task"><p>'+ inputText +'</p></div></div>');

        //console.log(inputText);
    });


})();