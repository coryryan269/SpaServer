"use strict";
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
  
    xhr.open("GET", "/query", true);
  
    // Set the specified headers
    for (const header in headers) {
      xhr.setRequestHeader(header, headers[header]);
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

