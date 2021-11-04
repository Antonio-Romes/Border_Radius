let firstPoint = 30;
let secondPoint = 70;
let thirdPoint = 70;
let fourPoint = 30;
let fifthPoint = 38;
let sixthPoint = 43;
let seventhPoint = 57;
let eighthPoint = 62;

$(document).ready(function(){

    hideElements();
    viewPointsBorderRadius();
    setValuePointsBorderRadius();
    setDefaultValueBorder();
});

let hideElements = ( ) => { 
    $("#divWidthHeigth").hide();
    $("#divColor").hide();
    $(".pontsSecondary").hide();
}

function hideShowElement(element, nameElement){
    if(element.checked){
        nameElement == "pontsSecondary"? $(`.${nameElement}`).show():$(`#${nameElement}`).show();
    }
    else{
        nameElement == "pontsSecondary"? $(`.${nameElement}`).hide():$(`#${nameElement}`).hide();  
    } 
}
 

function resetWidth (element){ 
    $(".item-border1").css("width",element.value);
}

function resetHeight (element){ 
    $(".item-border1").css("height",element.value);
}

function resetColor (){ 
    let firstColor = $("#firstColor").val();
    let secondColor = $("#secondColor").val();
    let thirdColor = $("#thirdColor").val();

    $(".item-border2").css( 
        "background-image", 
        "linear-gradient( to right,"+ firstColor+", "+secondColor+", "+thirdColor+")" )
}

function viewPointsBorderRadius (){
    $("#viewPointsBorderRadius").text(firstPoint +"% " + secondPoint +"% " + thirdPoint +"% " + fourPoint +"% / " + fifthPoint +"% " + sixthPoint +"% " + seventhPoint +"% " + eighthPoint +"% ");
 }

 function setValuePointsBorderRadius (){
    $(".item-border2").css("border-radius",firstPoint +"% " + secondPoint +"% " + thirdPoint +"% " + fourPoint +"% / " + fifthPoint +"% " + sixthPoint +"% " + seventhPoint +"% " + eighthPoint +"% ");
 }

 function setDefaultValueBorder(){ 
     $("#firstScore").val(firstPoint);
     $("#secondScore").val(sixthPoint);
     $("#thirdScore").val(thirdPoint);
     $("#fourScore").val(fifthPoint);
     $("#fifthScore").val(secondPoint);
     $("#sixthScore").val(seventhPoint);
     $("#seventhScore").val(fourPoint);
     $("#eighthScore").val(eighthPoint);
 }

 $( "#firstScore").on( "change", function() {
    if($('#visualizarPontos').is(":checked")){
        firstPoint = this.value; 
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    }
    else{
        firstPoint = this.value; 
        secondPoint = 100 - this.value;
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    } 
  });

  $( "#secondScore").on( "change", function() {
    if($('#visualizarPontos').is(":checked")){
        sixthPoint = this.value; 
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    }
    else{
        sixthPoint = this.value; 
        seventhPoint = 100 - this.value;
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    } 
      
 });

 $( "#thirdScore").on( "change", function() {
    if($('#visualizarPontos').is(":checked")){
        thirdPoint = this.value; 
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    }
    else{
        thirdPoint = this.value; 
        fourPoint = 100 - this.value;
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    } 
    
 });

 $( "#fourScore").on( "change", function() {
    if($('#visualizarPontos').is(":checked")){
        fifthPoint = this.value; 
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    }
    else{
        fifthPoint = this.value; 
        eighthPoint = 100 - this.value;
        setValuePointsBorderRadius();
        viewPointsBorderRadius();
    } 
    
 });

 $( "#fifthScore").on( "change", function() {
    secondPoint = this.value;
    setValuePointsBorderRadius();
    viewPointsBorderRadius();
 });

 $( "#sixthScore").on( "change", function() {
    seventhPoint = this.value;
    setValuePointsBorderRadius();
    viewPointsBorderRadius();
 });

 $( "#seventhScore").on( "change", function() {
    fourPoint = this.value;
    setValuePointsBorderRadius();
    viewPointsBorderRadius();
 });

 $( "#eighthScore").on( "change", function() {
    eighthPoint = this.value;
    setValuePointsBorderRadius();
    viewPointsBorderRadius();
 });
  