$(document).ready(function() {
    
    // Initialize list to hold operators and numbers
    var calc_list = [];

    
    
    // If a number is clicked
    $(".number").click(function() {
        // Ensure previously selected event-button isnt highlighted
        $(".event-button").removeClass("highlight");
        
        // Send the number we clicked on to the calc list array
        calc_list.push($(this).text());    
        // Join the calc list array into a string (ie, [1, +, 2] becomes 1+2)
        calc_list.join("");
        // Display calc list
        $(".display").html(calc_list);
        
    });
      
    
    
    // If an operator (+-*/) is clicked
    $(".event-button").click(function() {
        
        $(this).addClass("highlight");
        // Send the operator symbol to the calc list
        calc_list.push($(this).text()); 
        // Join calc list together, evaluate the math inside, and set equal to calc list
        calc_list = [eval(calc_list.join(""))];
        // Display calc list
        $(".display").html(calc_list);
           
    });
    
    
    
    // Clear the display
    $(".clearout").click(function() {
       
        $(".event-button").removeClass("highlight");
        // Set calc list equal to zero
        calc_list = [];
        // Send a "0" to the display so it isnt blank
        $(".display").html(0);
        
    });

    
    
    // If we hit enter just evaluate the calc list
    $(".equals").click(function() {
        
        $(".event-button").removeClass("highlight");
        calc_list = [eval(calc_list.join(""))];
        $(".display").html(eval(calc_list.join("")));    
        
    })
    
    
    
    // If we hit the percent button just divide by 100
    $(".pct-button").click(function() {
        
        $(".event-button").removeClass("highlight");
        calc_list.push("/");
        calc_list.push(100);
        calc_list = [eval(calc_list.join(""))];
        $(".display").html(eval(calc_list.join(""))+"%");  
        
    });
    
    
    
    // If we click the +/- button
    $(".polarity-button").click(function() {
        
        $(".event-button").removeClass("highlight");
        calc_list.push("*");
        calc_list.push(-1);
        calc_list = [eval(calc_list.join(""))];
        $(".display").html(eval(calc_list.join("")));    
        
    });
    
    
    
    
}); //End doc ready fxn