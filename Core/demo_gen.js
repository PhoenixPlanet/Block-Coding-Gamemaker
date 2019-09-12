Blockly.Python['print_log'] = function(block) {
  var value_print = Blockly.Python.valueToCode(block, 'PRINT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "print("+ value_print +")";
  return code;
};