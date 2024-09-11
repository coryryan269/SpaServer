"use strict"


// Permissions function
async function sendPermissionsQueryToServer(employeeOrCustomerRequest,typeOfRequest,idFrom,idTo, authToken){
    // If Customer, allow if typeof request is acceptable and it's only to themselves
    // if (employeeOrCustomerRequest == "Customer" && idFrom == idTo && "")
}



/////////////////////////// CUSTOMER STUFF /////////////////////////////////////
// Create Customer
function createCustomer(){}

// Edit Customer (by employee)
function editcustomerByEmployee(){}

// Delete Customer (as long as no transactions or appointments)
function deletecustomer(){}

// Change Customer Password (by customer)
function changeCustomerPasswordByCustomer(){}

// Reset Customer Password (by employee)
function changeCustomerPasswordByEmployee(){}

// Give Credit To Customer
function giveCustomerCredit(){}

// Credit Services, Products, or Categories to Customer
function creditServicesProductsCategoriesToCustomer() {}

// Set appointment
function setAppointmentForCustomer(){}

// Edit appointment
function editAppointmentForCustomer(){}

// Delete Appointment
function deleteAppointmentForCustomer(){}

// Search Appointments for transaction (this is for finding appointments to ring up)
function searchAppointmentsForTransaction(){}

// Buy Service or package online
function purchasePackageOrServiceOnline(){}

// Redeem Package
function redeemPackage(){}

// Redeem Service
function redeemService(){}

/////////////////////////// EMPLOYEE STUFF /////////////////////////////////////

// Add Employee
function addEmployee(){}

// Edit Employee
function editEmployee(){}

// Deactivate Employee
function deactiveEmployee(){}

// Adjust Employee Schedule
function adjustEmployeeSchedule(){}

// Change Services and Addons Employee offers
function adjustEmployeeServicesAndAddons(){}

/////////////////////////// STORE STUFF /////////////////////////////////////

// Adjust Store Hours
function adjustStoreHours(){}

// Add Service
function addService(){}

// Deactivate Service
function deactivateService(){}

// Edit Service
function editService(){}

// Add Product
function addProduct(){}

// Edit Product
function editProduct(){}

// Deactivate Product
function deactivateProduct(){}

// Adjust minimum notice for web appointments
function adjustMinNoticeForWebAppointments(){}

// Adjust how far out a web appointment can be made
function adjustMaxDaysOutWebAppt(){}

// Make special pricing rules
function adjustPricingForSpecial(){}




/////////////////////////// PERMISSION STUFF /////////////////////////////////////

function checkForPermission(customerOrEmployee,idNumber,action,onWhatOrWhom){
    if (customerOrEmployee == "Customer"){

    }
    else if (customerOrEmployee == "Employee"){

    }
    else {
      console.error("Check permissions function received invalid input on type of requester")
    }
}


/////////////////////////// TRANSACTION STUFF /////////////////////////////////////
// CREATE TRANSACTION
function createTransaction(){}

// ADD LINE ITEM
function addLineItem(){}

// EDIT LINE ITEM
function editLineItem(){}

// REMOVE LINE ITEM
function removeLineItem(){}

// Discount a line item
function discountLineItem(){}

// DISCOUNT WHOLE TRANSACTION
function discountWholeTransaction(){}

// FUNCTION TO ADD/EDIT TIPS TO EMPLOYEES
function editTips(){}

// ADD CASH PAYMENT
function addCashPayment(){}

// MODIFY CASH PAYMENT
function modifyCashPayment(){}

// REMOVE CASH PAYMENT
function removeCashPayment(){}

// ADD Check PAYMENT
function addCheckPayment(){}

// MODIFY Check PAYMENT
function modifyCheckPayment(){}

// REMOVE Check PAYMENT
function removeCheckPayment(){}

// Charge Card
function addCardPayment(){}

// Remove Card Payment
function removeCardPayment(){}

// Void Transaction
function voidTransaction(){}

// Reopen Transaction
function reopenTransaction(){}

// Add/Edit/Remote Transaction Notes
function editTransactionNotes(){}