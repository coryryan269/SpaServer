// let modAddon = require('./modifyTables/modifyAddon.ts');
// let modAppt = require('./modifyTables/modifyAppointment.ts');
// let modCustomer = require('./modifyTables/modifyCustomer.ts');
let modEmployee = require('./modifyTables/modifyEmployee.ts');
// let modLineItem = require('./modifyTables/modifyLineItem.ts');
// let modPayment = require('./modifyTables/modifyPayment.ts');
// let modProduct = require('./modifyTables/modifyProduct.ts');
// let modRoom = require('./modifyTables/modifyRoom.ts');
// let modSchedule = require('./modifyTables/modifySchedule.ts');
// let modServiceCategory = require('./modifyTables/modifyServiceCategory';
// let modTransaction = require('./modifyTables/modifyTransaction.ts');

let jsonFuncs = require("./jsonFunctions.ts");

module.exports = {modEmployee, jsonFuncs};