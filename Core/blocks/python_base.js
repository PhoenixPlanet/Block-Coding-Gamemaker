Blockly.Blocks['print_log'] = {
    init: function() {
      this.appendValueInput("PRINT")
          .setCheck(null)
          .appendField("Print");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };