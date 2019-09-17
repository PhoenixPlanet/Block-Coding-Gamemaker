Blockly.Python['import_pygame'] = function(block) {
  var number_screen_x = block.getFieldValue('SCREEN_X');
  var number_screen_y = block.getFieldValue('SCREEN_Y');
  var value_caption = Blockly.Python.valueToCode(block, 'CAPTION', Blockly.Python.ORDER_ATOMIC);
  var dropdown_fps_type = block.getFieldValue('FPS_TYPE');
  var value_fps = Blockly.Python.valueToCode(block, 'FPS', Blockly.Python.ORDER_ATOMIC);
  var statements_main = Blockly.Python.statementToCode(block, 'MAIN');
  // TODO: Assemble Python into code variable.

  Blockly.Python.definitions_['import_pygame'] =
          'import pygame';
  var functionName = Blockly.Python.provideFunction_(
      'init_game',
      // This operation excludes null values:
      // math_median([null, null, 1, 3]) == 2.0.
      [ 'screen = (' + number_screen_x + ', ' + number_screen_y + ')',
        'window = pygame.display.set_mode(screen)',
        'clock = pygame.time.Clock()\n',
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '  pygame.init()',
        '  window = pygame.display.set_mode(screen)',
        '  pygame.display.set_caption(' + value_caption + ')']);
  var code = 
    functionName + '()\n'
    'while True:\n';
  if (dropdown_fps_type == "TICK"){
    code = code + '  clock.tick(' + value_fps + ')\n\n';
  } else if (dropdown_fps_type == "TICK_BUSY_LOOP"){
    code = code + '  clock.tick_busy_loop(' + value_fps + ')\n\n';
  }

  code = code + statements_main;
  
  return code;
};

Blockly.Python['print_log'] = function(block) {
  var value_print = Blockly.Python.valueToCode(block, 'PRINT', Blockly.Python.ORDER_ATOMIC);
  var code = "print("+ value_print +")\n";
  return code;
};

