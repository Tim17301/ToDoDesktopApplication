(function(){
    "use strict";

    //Event Listener für das hinzufügen von Todos
        //Sunday
        $(".sunday .addTask-btn").on("click", function(){
            addToDo(".sunday");
            deleteDividerAdd();
        });

        $(".sunday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".sunday");
            deleteDividerAdd();
        });
        //Monday
        $(".monday .addTask-btn").on("click", function(){
            addToDo(".monday");
            deleteDividerAdd();
        });

        $(".monday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".monday");
            deleteDividerAdd();
        });
        //Tuesday
        $(".tuesday .addTask-btn").on("click", function(){
            addToDo(".tuesday");
            deleteDividerAdd();
        });

        $(".tuesday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".tuesday");
            deleteDividerAdd();
        });
        //Wednesday
        $(".wednesday .addTask-btn").on("click", function(){
            addToDo(".wednesday");
            deleteDividerAdd();
        });

        $(".wednesday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".wednesday");
            deleteDividerAdd();
        });
        //Thursday
        $(".thursday .addTask-btn").on("click", function(){
            addToDo(".thursday");
            deleteDividerAdd();
        });

        $(".thursday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".thursday");
            deleteDividerAdd();
        });
        //Friday
        $(".friday .addTask-btn").on("click", function(){
            addToDo(".friday");
            deleteDividerAdd();
        });

        $(".friday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".friday");
            deleteDividerAdd();
        });
        //Saturday
        $(".saturday .addTask-btn").on("click", function(){
            addToDo(".saturday");
            deleteDividerAdd();
        });

        $(".saturday .addTask-container form").on("submit", function(event){
            event.preventDefault();
            addToDo(".saturday");
            deleteDividerAdd();
        });

    //To Do hinzufügen
    function addToDo(weekday){
        var inputText = $(weekday + " input").val();
        if (inputText != 0){
            var countChildren = $(weekday + " .todos-container").children().length;
            if (countChildren != 0){
                $(weekday + " .todos-container").append('<div class="divider-container"><div class="divider"></div></div>');
            }
           $(weekday + " .todos-container").append('<div class="todos"><div class="taskCompleted-btn"><div class="taskCompleted-circle hidden"></div></div><div class="task"><p>'+ inputText +'</p></div><div class="positionUNDdelete-container hidden"><div class="delete-container"><i class="bx bx-trash"></i></div><div class="position-container"><i class="bx bx-chevron-up" ></i><i class="bx bx-chevron-down" ></i></div></div></div>'); 
        }
        $(weekday + " .addTask-container input").val("");
    }




    //Falls erstes Element ein Divider ist, dann löschen (beim hinzufügen von todos)
    function deleteDividerAdd(){
        if($(".todos-container .divider-container").index() == 0){
            $(".todos-container .divider-container").remove();
        }
    }
    //Falls erstes Element ein Divider ist, dann löschen (beim löschen von Todos)
    function deleteDividerDelete(){
        if($(".todos-container .divider-container").index() == 0){
            $(".todos-container .divider-container:first-child").remove();
        }
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
    

    //To Do löschen, wenn man auf Abfalleimer-Icon drückt
    $(".todos-container").on("click",".delete-container", function(){
        $(this).parents(".todos").prev().remove();
        $(this).parents(".todos").remove();
        deleteDividerDelete();
    });

    //To Do Position ändern, wenn man auf Pfeile drückt
        //Nach unten bewegen
        $(".todos-container").on("click",".position-container .bx-chevron-down", function(){
            //To Do bewegen
            $(this).parents(".todos").insertAfter($(this).parents(".todos").next());
            $(this).parents(".todos").insertAfter($(this).parents(".todos").next());
            //Divider bewegen
            $(this).parents(".todos").prev().prev().insertAfter($(this).parents(".todos").prev());
        });
        
        //Nach oben bewegen
        $(".todos-container").on("click",".position-container .bx-chevron-up", function(){
            //To Do bewegen
            $(this).parents(".todos").insertBefore($(this).parents(".todos").prev());
            $(this).parents(".todos").insertBefore($(this).parents(".todos").prev());
            //Divider bewegen
            $(this).parents(".todos").next().next().insertBefore($(this).parents(".todos").next());
        });
    
    
    


})();