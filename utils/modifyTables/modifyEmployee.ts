

function checkForValidityOfNewData(obj){
    // Variable for any error messages
    let errors = false;
    let errorMessages = "";
    // Set up map for easier employee reference
    const employeeMap = new Map();
    for (const [key, value] of Object.entries(obj)) {
        employeeMap.set(key, value);
    }

    // Check for First Name
    if (obj['firstname'] != undefined)
        if (employeeMap.get('firstname') == ""  || employeeMap.get('firstname').length > 99){
            errors = true;
            errorMessages += "~~ Need a valid first name ";
        }

    // Check for Last Name
    if (obj['firstname'] != undefined)
        if (employeeMap.get('lastname') == "" || employeeMap.get('lastname').length > 99){
            errors = true;
            errorMessages += "~~ Need a valid last name ";
        }
    
    // Check DOB
    let dob = employeeMap.get("dateofbirth");
    dob = new Date(dob);
    if (dob < new Date() && dob > new Date("01/01/1900")){
        let year = dob.getFullYear();
        let month = (dob.getMonth() + 1).toString().padStart(2, '0'); // Adjust month to 1-based index and pad with 0
        let day = (dob.getDate()).toString().padStart(2, '0');
        dob = `${year}-${month}-${day}`;
        obj['dateofbirth'] = dob;
    }
    else {
        delete obj.dateofbirth;
    }

    // Check zip validity
    if (obj['addresszip'] != undefined && (obj['addresszip'].length != 5 || /^\d+$/.test(obj['addresszip']))){
        delete obj['addresszip'];
    }

    // Check for valid state
    let states = [
        "Alabama", "AL",
        "Alaska", "AK",
        "Arizona", "AZ",
        "Arkansas", "AR",
        "California", "CA",
        "Colorado", "CO",
        "Connecticut", "CT",
        "Delaware", "DE",
        "Florida", "FL",
        "Georgia", "GA",
        "Hawaii", "HI",
        "Idaho", "ID",
        "Illinois", "IL",
        "Indiana", "IN",
        "Iowa", "IA",
        "Kansas", "KS",
        "Kentucky", "KY",
        "Louisiana", "LA",
        "Maine", "ME",
        "Maryland", "MD",
        "Massachusetts", "MA",
        "Michigan", "MI",
        "Minnesota", "MN",
        "Mississippi", "MS",
        "Missouri", "MO",
        "Montana", "MT",
        "Nebraska", "NE",
        "Nevada", "NV",
        "New Hampshire", "NH",
        "New Jersey", "NJ",
        "New Mexico", "NM",
        "New York", "NY",
        "North Carolina", "NC",
        "North Dakota", "ND",
        "Ohio", "OH",
        "Oklahoma", "OK",
        "Oregon", "OR",
        "Pennsylvania", "PA",
        "Rhode Island", "RI",
        "South Carolina", "SC",
        "South Dakota", "SD",
        "Tennessee", "TN",
        "Texas", "TX",
        "Utah", "UT",
        "Vermont", "VT",
        "Virginia", "VA",
        "Washington", "WA",
        "West Virginia", "WV",
        "Wisconsin", "WI",
        "Wyoming", "WY"
    ];
    states = states.map(str => str.toUpperCase());
    if (obj['addressstate'] != undefined)
        if (!states.includes(obj['addressstate'].toUpperCase())){
            delete obj['addressstate'];
        }

    // Checking for valid gender
    if (obj['gender'] != undefined)
        if (obj['gender'].toUpperCase() != 'MALE' && obj['gender'].toUpperCase() != 'FEMALE')
            delete obj['gender'];
        else{
            if (obj['gender'].toUpperCase == 'MALE')
                obj['gender'] = "MALE";
            if (obj['gender'].toUpperCase == 'FEMALE')
                obj['gender'] = "FEMALE";
        }
    // Checking for valid email
        if (obj['email'] != undefined)
        {    let isValidEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj['email']);
            if (!isValidEmail)
                delete obj["email"];}

    // THIS WILL BE LEFT BLANK FOR NOW. DONT FEEL LIKE QUERYING FOR ALREADY USED USERNAMES
    // Check for valid username. You cannot set a username to an email. You can, however leave it blank and use your email to log in
    // let isUsernameAnEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj['email']);
    // if (isUsernameAnEmail)
    //     delete obj["username"];
    
    // Checking for valid password
    if (obj['password'] != undefined)
    {    let isPasswordValid = true;
        isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(obj['employeepassword']) && !obj['employeepassword'].toLowerCase().includes('password');}

    // CHECKING FOR VALID PHONE NUMBER
    if (typeof(obj.phonenumber) == "string"){
        var isValidPhone = /^\d+$/.test(obj['phonenumber'].replace(/[-+]/g, "")) && obj['phonenumber'].length > 6 && obj['phonenumber'].length < 21;
        if (!isValidPhone)
            delete obj['phonenumber'];
    }

    // CHECKING FOR VALID PHONE NUMBER
    if (typeof(obj.secondaryphonenumber) == "string"){
    var isValidPhone = /^\d+$/.test(obj['secondaryphonenumber'].replace(/[-+]/g, "")) && obj['secondaryphonenumber'].length > 6 && obj['secondaryphonenumber'] < 21;
    if (!isValidPhone)
        delete obj['secondaryphonenumber'];
    }

    // CHECKING FOR VALID LENGTH OF GENERAL NOTES
    if (obj['generalnotes'] != undefined)
        if (obj['generalnotes'].length > 1000)
            delete obj['generalnotes']

    // CHECKING FOR VALIDITY OF START DATE
    if (obj['startdate'] != undefined)
    {    
        let startDate = employeeMap.get("startdate");
        startDate = new Date(startDate);
        if (startDate < new Date() && startDate > new Date("01/01/1900")){
            let year = startDate.getFullYear();
            let month = (startDate.getMonth() + 1).toString().padStart(2, '0'); // Adjust month to 1-based index and pad with 0
            let day = (startDate.getDate()).toString().padStart(2, '0');
            startDate = `${year}-${month}-${day}`;
            obj['startdate'] = startDate;
        }
        else {
            delete obj.startdate;
        }
    }

    // CHECKING FOR VALIDITY OF END DATE
    if (obj['enddate'] != undefined)
    {    let endDate = employeeMap.get("enddate");
        endDate = new Date(endDate);
        if (endDate < new Date() && endDate > new Date("01/01/1900")){
            let year = endDate.getFullYear();
            let month = (endDate.getMonth() + 1).toString().padStart(2, '0'); // Adjust month to 1-based index and pad with 0
            let day = (endDate.getDate()).toString().padStart(2, '0');
            endDate = `${year}-${month}-${day}`;
            obj['enddate'] = endDate;
        }
        else {
            delete obj.enddate;
        }
    }

    // If there are errors, don't pass anything back for object
    if (errors){
        console.log(errorMessages);
        obj = undefined;
    }
    else {
        // Need to add query string
    }

    // Return if there is an error and if so, what the errors are
    if (errorMessages != "") console.log(errors);
    return [errors,errorMessages,obj];
}

function addEmployee(obj){
    delete obj['employee_id'];
    let obj2 = JSON.parse(JSON.stringify(obj))
    // Checks validity of data. There should be additional checks in addition to this. It just covers the basics.
    if (checkForValidityOfNewData(obj2)[2] == undefined)
        return undefined;
    else
        obj = checkForValidityOfNewData(obj)[2]

    // Set up map for easier employee reference
    let employeeMap = new Map();
    for (let [key, value] of Object.entries(obj)) {
        employeeMap.set(key, value);
    }
    
    
    let returnedQuery = "insert into employees (" + Array.from(employeeMap.keys()).join(",") + `) values (` + Array.from(employeeMap.values()).map(value => `'${value}'`).join(",") + `);`;
    if (Object.keys(obj).length == 1){
        returnedQuery = returnedQuery.replace("set (","set ");
        returnedQuery = returnedQuery.replace("= (","= ");
        returnedQuery = returnedQuery.replace(") ="," =");
        returnedQuery = returnedQuery.replace(") where"," where");
    }
    console.log(returnedQuery);
    return returnedQuery;
}

function editEmployee(obj){
    let employee_id = obj['employee_id'];
    delete obj['employee_id'];
    // Set up map for easier employee reference
    let obj2 = JSON.parse(JSON.stringify(obj))
    // Checks validity of data. There should be additional checks in addition to this. It just covers the basics.
    if (checkForValidityOfNewData(obj2)[2] == undefined)
        return undefined;
    else
        obj = checkForValidityOfNewData(obj)[2]

    // Set up map for easier employee reference
    let employeeMap = new Map();
    for (let [key, value] of Object.entries(obj)) {
        employeeMap.set(key, value);
    }
    // console.log(JSON.stringify(obj));
    
    console.log("UPDATE employees set (" + Array.from(employeeMap.keys()).join(",") + `) = (` + Array.from(employeeMap.values()).map(value => `'${value}'`).join(",") + `) where employee_id = ${employee_id};`);
    let returnedQuery = "UPDATE employees set (" + Array.from(employeeMap.keys()).join(",") + `) = (` + Array.from(employeeMap.values()).map(value => `'${value}'`).join(",") + `) where employee_id = ${employee_id};`;
    if (Object.keys(obj).length == 1){
        returnedQuery = returnedQuery.replace("set (","set ");
        returnedQuery = returnedQuery.replace(") ="," =");
        returnedQuery = returnedQuery.replace("= (","= ");
        returnedQuery = returnedQuery.replace(") where"," where");
    }
    console.log(returnedQuery);
    return returnedQuery;
}

function findEmployee(obj){
    let returnString = "Select * from employees where";
    for (const [key, value] of Object.entries(obj)) {
        if (key == 'firstname' || key == 'lastname' || key == 'addressnumberandstreet' || key == 'addresscity' || key == 'addresszip'|| key== 'addressstate' || key == 'gender' || key == 'email' || key == 'username' || key == 'generalnotes')
            returnString += ` UPPER(${key}) LIKE UPPER('%${value}%') and`;
        else if (key == 'employee_id')
            returnString += ` ${key} ='${value}' and`;
    }
    returnString = returnString.substring(0, returnString.length - 3) + ";";
    return returnString;
    
}

// console.log(addEmployee({firstname: 'Duncan', lastname: 'Jones', dateofbirth: '1991/05/16', addressnumberandstreet: '3219 Bordon Dr.', addresscity: 'Temple',
//     addressstate: 'TX', addresszip: '76502', gender: 'male', email: 'coryryan269@gmail.com', username: 'coryryan269', employeepassword: 'storm123', phonenumber: '254-493-4596',
//     generalnotes: 'this guy is so cool',  startdate: '05/16/2024', hourlyrate: '23.42', active: true, security_level: 1
// }));
module.exports = {addEmployee, editEmployee,findEmployee};

