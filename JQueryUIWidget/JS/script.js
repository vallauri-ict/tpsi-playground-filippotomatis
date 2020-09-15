let LButtons = ["Accordion","Collapsible", "Disabled", "HeightStyle"];
let RButtons = ["Tabs", "Collapsible", "Disabled", "HeightStyle"];
$(document).ready(function(){
    $("<div id='accordion'></div>").appendTo(".main");
    $("<div id='tabs'></div>").appendTo(".right");
    addButtons(LButtons,"lmenu","accordion");
    addButtons(RButtons,"rmenu","tabs");
});

function addButtons(buttons, position,id){
    $.each(buttons,function(index,value){
        $("<button class='" + position + "Buttons' onclick='" + id + value + "(this,\"" + id + "\")'>" + value + "</button>" )
            .hide()
            .appendTo('.'+ position)
            .fadeIn(3000)
    });
}

function accordionAccordion(e, id){
    $.get("./JSON/proverbi.json",function(data){createAccordion(data,id,e)},"json")
}
function tabsTabs(e,id){
    $.get("./JSON/controls.json",function(data){createTabs(data,id,e)});
}

function createTabs(data, parent, e){
    let tabs = $("#" +  parent);
    if (tabs.tabs("instance")){
        tabs.tabs("destroy").children().remove();
        $("." + $(e).attr("class")).not(":first").attr("disabled", true);
        $(e).css("background-color","#f0f0f0");
    }else{
        $("<ul></ul>").appendTo(tabs)
        $.each(data["Labels"], function(index, element){
            tabs.children("ul").append("<li><a href='#tabs-" + index +"'>"+ element +"</a></li>");
            $("<div id='tabs-" + index + "'></div>").appendTo(tabs);
        });
        tabs.tabs();
        $("." + $(e).attr("class")).not(":first").removeAttr("disabled");
        $(e).css("background-color","#fcefa1");
    }
}
function tabsCollapsible(e, id){
    if ($("#" + id).tabs("option", "collapsible")){
        $("#" + id).tabs("option", "collapsible",false);
        $(e).css("background-color","#f0f0f0")
    } else {
        $("#" + id).tabs("option", "collapsible",true);
        $(e).css("background-color","#fcefa1")
    }
}
function tabsDisabled(e,id){
    if ($("#" + id).tabs("option", "disabled")){
        $("#" + id).tabs("option", "disabled",false);
        $(e).css("background-color","#f0f0f0")
    } else {
        $("#" + id).tabs("option", "disabled",true);
        $(e).css("background-color","#fcefa1")
    }
}
function tabsHeightStyle(e,id){
    if ($("#" + id).tabs("option", "heightstyle") === "auto"){
        $("#" + id).tabs("option", "heightstyle", "fill");
        $(e).css("background-color","#f0f0f0")
    } else if ($("#" + id).tabs("option", "heightstyle") === "fill"){
        $("#" + id).tabs("option", "heightstyle", "content");
        $(e).css("background-color","#fa6e47")
    }else{
        $("#" + id).tabs("option", "heightstyle", "auto");
        $(e).css("background-color","#fcefa1")
    }
    $("#"+id).tabs("refresh");
}

function createAccordion(data,idAccordion,e){
    let accordion = $("#" + idAccordion);
    if (accordion.accordion("instance")){
        accordion.accordion("destroy").children().remove();
        $("." + $(e).attr("class")).not(":first").attr("disabled", true);
        $(e).css("background-color","#f0f0f0");
    }else{
        $.each(data["dati"], function(index,element){
           $.each(element, function(subindex,subElement){
               $("<"+ subindex + ">" + subElement + "</" + subindex + ">").appendTo(accordion)
           });
        });
        accordion.accordion();
        $("." + $(e).attr("class")).not(":first").removeAttr("disabled");
        $(e).css("background-color","#fcefa1");
        return accordion
    }
}

function accordionDisabled(e,id){
    if ($("#" + id).accordion("option", "disabled")){
        $("#" + id).accordion("option", "disabled",false);
        $(e).css("background-color","#f0f0f0")
    } else {
        $("#" + id).accordion("option", "disabled",true);
        $(e).css("background-color","#fcefa1")
    }
}

function accordionCollapsible(e,id){
    if ($("#" + id).accordion("option", "collapsible")){
        $("#" + id).accordion("option", "collapsible",false);
        $(e).css("background-color","#f0f0f0")
    } else {
        $("#" + id).accordion("option", "collapsible",true);
        $(e).css("background-color","#fcefa1")
    }
}

function accordionHeightStyle(e,id){
    if ($("#" + id).accordion("option", "heightstyle") === "auto"){
        $("#" + id).accordion("option", "heightstyle", "fill");
        $(e).css("background-color","#f0f0f0")
    } else if ($("#" + id).accordion("option", "heightstyle") === "fill"){
        $("#" + id).accordion("option", "heightstyle", "content");
        $(e).css("background-color","#fa6e47")
    }else{
        $("#" + id).accordion("option", "heightstyle", "auto");
        $(e).css("background-color","#fcefa1")
    }
    $("#"+id).accordion("refresh");
}