// TODO

// Add functionality to middle top-row buttons
// Make borders better when clicked
// Create limiter for decimals
// Block user from multiple operators
        // Also consider allowing them to replace keyed operator with new operator
        // Also ensure highlighter feature follows proper operator only


$(document).ready(function() {
    

    
    var calc_list = [];
    var checker = [];

    
    
    
    $(".number").click(function() {
        checker.push($(this).text());
        console.log(checker);
 
        $(".event-button").removeClass("highlight");
        
        var number = $(this).text();
        
        calc_list.push(number);    
        calc_list.join("");
        
        $(".display").html(calc_list);
        
    });
      
    
    
    
    
    
    
    
    
    
    
    $(".event-button").click(function() {
    
    
    // Indented code below is in progress, doesn't seem like this is going to solve anything...
//                    checker.push($(this).text());
//                    console.log(checker);
//
//                    if (checker[checker.length-1] === checker[checker.length-2]) {
//                        checker.pop();
//                    }
//
//                    console.log(checker[checker.length-1]);
//                    console.log(checker[checker.length-2]);
    // See above comment for above code
        
        
        
        
        var operator = $(this).text();
        
        $(this).addClass("highlight");

        test5 = calc_list.join("");
        
        calc_list = [eval(test5)];
   
        $(".display").html(calc_list);
        
        calc_list.push(operator);    
    });
    
    
    
    
    $(".clearout").click(function() {
        checker.push($(this).text());
        console.log(checker);
        
        calc_list = [];
        
        $(".display").html(0);
        
        $(".event-button").removeClass("highlight");
    });

    
    
    
    $(".equals").click(function() {
        checker.push($(this).text());
        console.log(checker);
        
        test = calc_list.join("");
        
        $(".display").html(eval(test));    
        
        calc_list = [eval(test)];
        
        $(".event-button").removeClass("highlight");
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(".pct-button").click(function() {
        checker.push("*");
        checker.push(100);
        
        calc_list.push("*");
        calc_list.push(100);
        
        console.log(checker);
        
        test = calc_list.join("");
        
        $(".display").html(eval(test)+"%");  
        
        
        
        calc_list = [eval(test)];
        
        $(".event-button").removeClass("highlight");
    });
    
    
    
    
    
        $(".polarity-button").click(function() {
        checker.push("*");
        checker.push(-1);
        
        calc_list.push("*");
        calc_list.push(-1);
        
        console.log(checker);
        
        test = calc_list.join("");
        
        $(".display").html(eval(test));    
        
        calc_list = [eval(test)];
        
        $(".event-button").removeClass("highlight");
    });
    
    
    
}); //End doc ready fxn