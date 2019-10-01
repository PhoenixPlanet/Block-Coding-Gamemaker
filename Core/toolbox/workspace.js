/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
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

var mainWorkspace = Blockly.inject("aDiv", options);

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, mainWorkspace);