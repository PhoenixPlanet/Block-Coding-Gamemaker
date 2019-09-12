"""
Change toolbox xml file to javascript file
"""

import re

print("Input File Name:")
file_name = str(input())
print("Output File Name:")
file_out_name = str(input())
if file_out_name == "" : file_out_name = file_name
print("Toolbox Name:")
toolbox_name = str(input())

f_xml = open(file_name, 'r')
f_js = open(file_out_name+".js", 'w')

f_js.write("var BLOCKLY_TOOLBOX_XML = BLOCKLY_TOOLBOX_XML || Object.create(null);\n")
f_js.write("\nBLOCKLY_TOOLBOX_XML['" + toolbox_name + "'] =\n")

xml_all = f_xml.read()
lines = xml_all.split("\n")

for i, line in enumerate(lines):
    if i == 0:
        line_changed = re.sub(r"\s?(\s*)?(<.*>)", r"\1'\2'\n", line)
    else:
        line_changed = re.sub(r"\s?(\s*)?(<.*>)", r"+\1'\2'\n", line)
    f_js.write(line_changed)

f_xml.close()
f_js.close()

print("success!")
