Blockly.Blocks['print_log'] = {
  init: function() {
    this.appendValueInput("PRINT")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("Print"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['import_pygame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Use Pygame");
    this.appendDummyInput()
        .appendField("Screen Size")
        .appendField(new Blockly.FieldNumber(0), "SCREEN_X")
        .appendField(new Blockly.FieldNumber(0), "SCREEN_Y");
    this.appendValueInput("CAPTION")
        .setCheck("String")
        .appendField("Window Title");
    this.appendValueInput("FPS")
        .setCheck("Number")
        .appendField("FPS")
        .appendField(new Blockly.FieldDropdown([["Default","TICK"], ["Accurate","TICK_BUSY_LOOP"]]), "FPS_TYPE");
    this.appendStatementInput("MAIN")
        .setCheck(null)
        .appendField("Main");
    this.setInputsInline(false);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



