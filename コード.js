function myFunction() {
  var selectSpreadSheet = SpreadSheetApp.getActiveSpreadsheet();
  var sheet = selectSpreadSheet.getSheetByName('シート1');
  var range = sheet.getRange(1,1,1);

  range.setValue('HelloGASWord');
}
