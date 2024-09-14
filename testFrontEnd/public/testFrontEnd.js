"use strict";
// const CryptoJS = require('crypto-js');
function ref(id) {return document.getElementById(id);}

ref("submit").addEventListener('click', networkRequestWrapper);

function networkRequestWrapper(){
    let headers = {};
    // Setting all headers
    let getHeaders = () => {
        if (ref("key1").value.trim() != "" && ref("value1").value.trim() != ""){headers[ref("key1").value] = ref("value1").value}
        if (ref("key2").value.trim() != "" && ref("value2").value.trim() != ""){headers[ref("key2").value] = ref("value2").value}
        if (ref("key3").value.trim() != "" && ref("value3").value.trim() != ""){headers[ref("key3").value] = ref("value3").value}
        if (ref("key4").value.trim() != "" && ref("value4").value.trim() != ""){headers[ref("key4").value] = ref("value4").value}
        if (ref("key5").value.trim() != "" && ref("value5").value.trim() != ""){headers[ref("key5").value] = ref("value5").value}
        if (ref("key6").value.trim() != "" && ref("value6").value.trim() != ""){headers[ref("key6").value] = ref("value6").value}
        if (ref("key7").value.trim() != "" && ref("value7").value.trim() != ""){headers[ref("key7").value] = ref("value7").value}
        if (ref("key8").value.trim() != "" && ref("value8").value.trim() != ""){headers[ref("key8").value] = ref("value8").value}
        if (ref("key9").value.trim() != "" && ref("value9").value.trim() != ""){headers[ref("key9").value] = ref("value9").value}
        if (ref("key10").value.trim() != "" && ref("value10").value.trim() != ""){headers[ref("key10").value] = ref("value10").value}
        if (ref("key11").value.trim() != "" && ref("value11").value.trim() != ""){headers[ref("key11").value] = ref("value11").value}
        if (ref("key12").value.trim() != "" && ref("value12").value.trim() != ""){headers[ref("key12").value] = ref("value12").value}
        if (ref("key13").value.trim() != "" && ref("value13").value.trim() != ""){headers[ref("key13").value] = ref("value13").value}
        if (ref("key14").value.trim() != "" && ref("value14").value.trim() != ""){headers[ref("key14").value] = ref("value14").value}
        if (ref("key15").value.trim() != "" && ref("value15").value.trim() != ""){headers[ref("key15").value] = ref("value15").value}
        if (ref("key16").value.trim() != "" && ref("value16").value.trim() != ""){headers[ref("key16").value] = ref("value16").value}
        if (ref("key17").value.trim() != "" && ref("value17").value.trim() != ""){headers[ref("key17").value] = ref("value17").value}
        if (ref("key18").value.trim() != "" && ref("value18").value.trim() != ""){headers[ref("key18").value] = ref("value18").value}
        if (ref("key19").value.trim() != "" && ref("value19").value.trim() != ""){headers[ref("key19").value] = ref("value19").value}
        if (ref("key20").value.trim() != "" && ref("value20").value.trim() != ""){headers[ref("key20").value] = ref("value20").value}
        if (ref("key21").value.trim() != "" && ref("value21").value.trim() != ""){headers[ref("key21").value] = ref("value21").value}
        if (ref("key22").value.trim() != "" && ref("value22").value.trim() != ""){headers[ref("key22").value] = ref("value22").value}
        if (ref("key23").value.trim() != "" && ref("value23").value.trim() != ""){headers[ref("key23").value] = ref("value23").value}
        if (ref("key24").value.trim() != "" && ref("value24").value.trim() != ""){headers[ref("key24").value] = ref("value24").value}
        if (ref("key25").value.trim() != "" && ref("value25").value.trim() != ""){headers[ref("key25").value] = ref("value25").value}
        if (ref("key26").value.trim() != "" && ref("value26").value.trim() != ""){headers[ref("key26").value] = ref("value26").value}
        if (ref("key27").value.trim() != "" && ref("value27").value.trim() != ""){headers[ref("key27").value] = ref("value27").value}
        if (ref("key28").value.trim() != "" && ref("value28").value.trim() != ""){headers[ref("key28").value] = ref("value28").value}
        if (ref("key29").value.trim() != "" && ref("value29").value.trim() != ""){headers[ref("key29").value] = ref("value29").value}
        if (ref("key30").value.trim() != "" && ref("value30").value.trim() != ""){headers[ref("key30").value] = ref("value30").value}
    }; getHeaders();
    sendNetworkRequest(headers);
}

function sendNetworkRequest(headers) {
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", "/queryTest", true);
  
    // Set the specified headers
    for (const header in headers) {
      xhr.setRequestHeader(header, (headers[header]));
    }
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState   
   === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Request successful:", xhr.responseText);
        } else {
          console.error("Request failed:", xhr.status, xhr.statusText);
        }
      }
    };
  
    xhr.send();
  }

ref("prefillKeys").addEventListener('change', () => {
    switch(ref("prefillKeys").value){
      case "employeeAdd":
        ref('key1').value = 'authToken';
        ref('key2').value = "actionType";
        ref('key3').value = "firstname";
        ref('key4').value = "lastname";
        ref('key5').value = "dateofbirth";
        ref('key6').value = "addressnumberandstreet";
        ref('key7').value = "addresscity";
        break;
      default:
        console.log(this.value);
        break;
    }
});



//   let encrypt = new JSEncrypt();
// function encryptTraffic(dataToEncrypt){
    
//     encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----AAAAB3NzaC1yc2EAAAADAQABAAACAQDF5nPHrf1waWmBHQ70/d5KbXxorne441+j0n0aqJ+VoLDfGiUJq9xOxylEPpkK9TUDgoQUEfcOTp0CfBh0YDdNrWeK8ZX4cc8xqGw/De+GUMEcGCq+9Z89hF0ogyl+8eWXBHVw6Vhc4wGyratA7JoTpQRxhUXlsUVB0L61MmjdoLQe9wLxPfN76T1BYT7uAw2Ul0o+asl+W+svL5/93BZYeGC53AhyCIPPR4RzuXVbkEa527algnpGmxidZ+7Nl4/nEc1u2wunT1Ii2mPjE+UXsuBCMJzf4CNVLP7uKnM5jqwE11YC/vMDFojUTzj1uDPc2r7Jx3zphjDYByVMGAYhMD/mCo2a+N3Q54YlwjijUvmDZIsgDU1CMNSJU6OmnOhOKjOHQlFcV1y6ovokoUAf4FEXMQxzQACUfEFnyrY3PtZ/j+p1oaAR5/S+/OKzuNdNTiRFCArxBf4xpSazo+wC3LgLX2TN3SnGWXRAIUFaG8JgxURnyxGdmPZzYLkW0EVmzA6w1rhj5zbo1cDfkmTFQTPmYBZiB0L0G8/QHfSZYD90A4IjYk5uf3U2iBc2DZ6QtKomUXUB5UZ+iKNrpfm7yXKOFR+/ZcmUSFPiQNE387Enmc3ugWakTEUFNIwqNryiJSSk/xWn9gxxTGopeSennN9ZLae7m53UNygNdaaSMw==-----END PUBLIC KEY-----");

//     // Encrypt Data
//     let encryptedData = encrypt.encrypt(dataToEncrypt);
//     console.log(encryptedData);
//     // The encrypted data will be in base64 format
//     return encryptedData;
// }