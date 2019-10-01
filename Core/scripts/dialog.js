$(function(){
    $('#new_sprite_dialog').dialog({
        autoOpen: false,
        title: '새로운 스프라이트 추가',
        modal: true,
        width: '800',
        height: '800',
        closeText: "",
        resizable: false,
        buttons: {
            "생성": function(){
                var ws_option = {};
                var typeOpt = document.getElementById("sprite_type");
                var divnameText = document.getElementById("divname");
                
                if(divNames.some(x => x == divnameText.value)){
                    alert("Sprite name '" + divnameText.value + "' is already exist");
                } else {
                    ws_option["type"] = typeOpt.options[typeOpt.selectedIndex].value;
                    ws_option["divname"] = divnameText.value;
                    
                    addWorkspace(ws_option);
                    divnameText.value = "";
                    $(this).dialog("close");
                }      
            }
        }
    });
    $( "#show_dialog_button" ).click(function() {
        $( "#new_sprite_dialog" ).dialog( "open" );
    });
});