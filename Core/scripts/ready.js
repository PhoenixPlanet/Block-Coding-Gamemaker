var divNames = [];
var workspaces = {};
var currentWorkspace = "";

$(document).ready(function() {
    // 새로운 스프라이트 탭 생성 다이얼로그
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
                } 
                else if(divnameText.value == ""){
                    alert("Sprite Name is blank");
                }
                else {
                    ws_option["type"] = typeOpt.options[typeOpt.selectedIndex].value;
                    ws_option["divname"] = divnameText.value;
                    divNames.push(ws_option['divname']);
                    addWorkspace(ws_option);
                    divnameText.value = "";
                    $(this).dialog("close");
                }      
            }
        }
    });

    // 다이얼로그 띄우는 버튼
    $( "#show_dialog_button" ).click(function() {
        $( "#new_sprite_dialog" ).dialog( "open" );
    });

    // 기본 탭(main) 생성
    var ws_option = {};
    ws_option["type"] = "main";
    ws_option["divname"] = "main";
    divNames.push("main");
    addWorkspace(ws_option);
    currentWorkspace = "main";

    $('#tabs a.tab').live('click', function() {
        currentWorkspace = $(this).attr("id");
        
        $("#tab_content div").hide();
        $("tabs li").removeClass("current");
    });
});