/////////////////////////// AUTHENTICATION STUFF /////////////////////////////////////

// Check Password and give token
function authorizeEmployee(requestHeaders){
    
}

function authorizeCustomer(requestHeaders){
    let results = executeQuery("select * from customers where username = '" + requestHeaders.username +  "';");
    console.log(results + "---");
    return results;
}

function revokeAuth(){}

function checkForAuthPermissions(){}