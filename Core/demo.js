Blockly.Blocks['print_log'] = {
  init: function() {
    this.appendValueInput("Print")
        .setCheck("String")
        .appendField("Print");
    this.setColour(230);
 this.setTooltip("Print text to console");
 this.setHelpUrl("");
  }
};