(function(){
    "use strict";

    
    $(".addTask-btn").on("click", function(){
        addToDo();
    });

    $(".addTask-container form").on("submit", function(event){
        event.preventDefault();
        addToDo();
    });

    //To Do hinzufügen
    function addToDo(){
        var inputText = $(".addTask-container input").val();
        if (inputText != 0){
            var countChildren = $(".todos-container").children().length;
            if (countChildren != 0){
                $(".todos-container").append('<div class="divider-container"><div class="divider"></div></div>');
            }
           $(".todos-container").append('<div class="todos"><div class="taskCompleted-btn"><div class="taskCompleted-circle hidden"></div></div><div class="task"><p>'+ inputText +'</p></div><div class="positionUNDdelete-container hidden"><div class="delete-container"><i class="bx bx-trash"></i></div><div class="position-container"><i class="bx bx-chevron-up" ></i><i class="bx bx-chevron-down" ></i></div></div></div>'); 
        }
        $(".addTask-container input").val("");
    }
    

   // To Do als erledigt markieren, wenn Text gedrückt wird
    $(".todos-container").on("click", ".task", function(){
        $(this).find("p").toggleClass("markTaskComplete");
        $(this).siblings(".taskCompleted-btn").find(".taskCompleted-circle").toggleClass("show");
    });

    // To Do als erledigt markieren, wenn Button gedrückt wird
    $(".todos-container").on("click", ".taskCompleted-btn", function(){
        $(this).siblings(".task").find("p").toggleClass("markTaskComplete");
        $(this).find(".taskCompleted-circle").toggleClass("show");
    });
    

    //taskCompleted-circle hover Effekt
    $(".todos-container").on("mouseenter", ".taskCompleted-btn", function(){
        $(this).find(".taskCompleted-circle").removeClass("hidden");
    });
    $(".todos-container").on("mouseleave", ".taskCompleted-btn", function(){
        $(this).find(".taskCompleted-circle").addClass("hidden");
    });
    
    
    
    
    
         
    


    //Delete Icon und die Postionspfeile anzeigen wenn man über die Task hovert
    $(".todos-container").on("mouseenter", ".todos", function(){
        $(this).find(".positionUNDdelete-container").removeClass("hidden");
    });
    
    $(".todos-container").on("mouseleave", ".todos", function(){
        $(this).find(".positionUNDdelete-container").addClass("hidden");
    });
    
    
    

})();