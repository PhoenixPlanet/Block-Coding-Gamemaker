var toolbox = BLOCKLY_TOOLBOX_XML['basic'];
//var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'media/', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true, 
	zoom : {
		controls : true, 
		wheel : true, 
		startScale : 1, 
		maxScale : 3, 
		minScale : 0.3, 
		scaleSpeed : 1.2
	}
};

function addWorkspace(workspaceData){
    $('#tabs li').removeClass("current");
    $('#tab_content div').hide()
    var newTab = "<li class='current'><a class='tab' id='" 
            + workspaceData['divname']
            + "' href='#'>" + workspaceData['divname']
            + "</a>";

    if (workspaceData['removable']){
        newTab += "</a><a href='#' class='remove'>x</a></li>";
    }

    $("#tabs").append("<li class='current'><a class='tab' id='" 
                + workspaceData['divname']
                + "' href='#'>" + workspaceData['divname']
                + "</a><a href='#' class='remove'>x</a></li>");
    
    $("#tab_content").append('<div id="'+ workspaceData['divname'] +'Div" style="height:100%; width:100%;"></div>');
    workspaces[workspaceData['divname']] = Blockly.inject(workspaceData['divname'] +"Div", options);

    $('#' + workspaceData['divname'] + 'Div').show();
}