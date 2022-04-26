// Open and close side nav bar
function openNav() {
    document.getElementById("leftSideNav").style.width = "250px";
    document.getElementById("mainBody").style.opacity = "0.4";
    document.getElementById("logo").style.opacity = "0.4";
}


function closeNav() {
    document.getElementById("leftSideNav").style.width = "0";
    document.getElementById("mainBody").style.marginLeft = "0";
    document.getElementById("mainBody").style.opacity = "1";
    document.getElementById("logo").style.opacity = "1";
}


// Open and close impact results
function openImpact() {
    document.getElementById("Results").style.display = "block"; 
    document.getElementById("mainBody").style.opacity = "0.4";
    document.getElementById("logo").style.opacity = "0.4";
}

// Close function also has a reload page to prevent previous info stacking 
// if the impact calculator is run again
function closeImpact() {
    document.getElementById("Results").style.display = "none";
    document.getElementById("mainBody").style.opacity = "1";
    document.getElementById("logo").style.opacity = "1";
    location.reload();
}

// Valid check for email sign up
function signedUp() {
    var format = "@";
    var address = document.forms["mail"]["email"].value;
    if (address.match(format)) {
        alert("Thanks for joining the mailing list! \nUse the code 'environment' for 10% off!");
    } else {
        alert("Please enter a valid email address");
    }
}

// Changes cup images on click to show different color options
var images=["green.png", "orange.png", "blue.png", "cream.png", "black.png"];
var current = 0;
function nextImage() {
    current +=1;
    if(current >= images.length){
        current = 0;
    }
    document.getElementById("cupImage").src = images[current];
}


// Order Form Functions

// Valid order calling on all other functions

$(document).ready(function(){
    total();
});

function validOrder(){
    var a = total();
    var b = discountAlert();
    var c = validName();
    return a && b && c;
}

// Ensure name supplied for order form
function validName() {
    let x = document.forms["OrderCup"]["fname"].value && document.forms["OrderCup"]["sname"].value;
    let y = document.forms["OrderCup"]["colors"].value && document.forms["OrderCup"]["amount"].value;
    if (x === ""){
        alert("Full name required");
    } else {
        alert("Order Sent!");
    }
    if (y === ""){
            alert("Please complete your order");
    } 
}

// Total and new total if discount applied
function total() {
    $('select').change(function(){
        var col = $('#colors').val();
    $('input').change(function(){
        var amount = $('#amount').val();
        var cost = col * amount;
        $('#total').val("€" + cost);
    var code = document.forms["OrderCup"]["discount"].value.toLowerCase();
    if (code === "environment"){
        var discount = (cost / 10);
        var newCost = (cost - discount);
        $('#total').val("€" + newCost);
    }
    });
    });
}

// Discount
function discountAlert(){
    var code = document.forms["OrderCup"]["discount"].value.toLowerCase();
    if (code != null){
        if(code === "environment"){
            alert("10% discount applied");
        } else if (code === ""){
            alert("No discount applied. Sign up to our mailing list for 10% off.");
        } else {
            alert("Invalid discount code. Discount not applied");
        }
    }
}

// Special offer 
$(document).ready(function(){
    $('select').change(function(){
    if($('#colors').val() === "10"){
        alert("Special Offer \nThe black cups are discounted to €10 while stocks last!"); 
    }
    });
});


// Contact Us Form

function validContact() {
    let x = document.forms["myContact"]["fname"].value && document.forms["myContact"]["lname"].value && document.forms["myContact"]["email"].value && document.forms["myContact"]["subject"].value && document.forms["myContact"]["message"].value;
    if (x=="") {
        alert("All fields required");
    } else {
        alert("Sent!");
    }
}

// Impact

function impact(){
    openImpact();
    var amount = document.getElementById('amount').value;
    var monthly = amount * 4;
    var yearly = amount * 52;
    var weekRounded = amount * 0.20;
    var weeklyCost = weekRounded.toFixed(2);
    var monthRounded = monthly * 0.20;
    var monthlyCost = monthRounded.toFixed(2);
    var yearRounded = yearly * 0.20;
    var yearlyCost = yearRounded.toFixed(2);
    document.getElementById("impact").innerHTML += "You use " + amount + " cups per week, " + monthly + " cups per month, " + yearly + " cups per year.";
    document.getElementById("impact").innerHTML += "<br>";
    document.getElementById("impact").innerHTML += "<br>";
    document.getElementById("impact").innerHTML += "Under the new disposable cup levy, " + amount + " cups will cost you €" + weeklyCost + " per week, €" + monthlyCost + " per month,  €" + yearlyCost + " per year.";
    document.getElementById("impact").innerHTML += "<br>";
    document.getElementById("impact").innerHTML += "<br>";
}

