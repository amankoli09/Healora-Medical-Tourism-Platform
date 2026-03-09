
const treatmentData = {

"Heart Bypass Surgery":{
India:{
    cost:"$6000",recovery:"4 Weeks", rating:"4.8", success:"96%"
},
Turkey:{
    cost:"$9000", recovery:"3 Weeks", rating:"4.7", success:"95%"
},
Thailand:{
    cost:"$8500", recovery:"3 Weeks", rating:"4.6", success:"96%"
},
Germany:{
    cost:"$20000", recovery:"5 Weeks", rating:"4.9", success:"98%"
},
Singapore:{
    cost:"$18000", recovery:"4 Weeks", rating:"4.8", success:"97%"
},
UAE:{cost:"$16000", recovery:"4 Weeks", rating:"4.7", success:"96%"
}
},

"Knee Replacement":{
India:{
    cost:"$4500", recovery:"3 Weeks", rating:"4.7", success:"95%"
},
Turkey:{
    cost:"$6500", recovery:"3 Weeks", rating:"4.6", success:"94%"
},
Thailand:{
    cost:"$7000", recovery:"3 Weeks", rating:"4.7", success:"95%"
},
Germany:{
    cost:"$15000", recovery:"5 Weeks", rating:"4.8", success:"97%"
},
Singapore:{
    cost:"$14000", recovery:"4 Weeks", rating:"4.7", success:"96%"
},
UAE:{
    cost:"$12000", recovery:"4 Weeks", rating:"4.6", success:"95%"
}
},

"Dental Implants":{
India:{
    cost:"$900", recovery:"1 Week",  rating:"4.6", success:"95%"
},
Turkey:{
    cost:"$1200", recovery:"1 Week", rating:"4.7", success:"96%"
},
Thailand:{
    cost:"$1100", recovery:"1 Week", rating:"4.6", success:"95%"
},
Germany:{
    cost:"$3000", recovery:"2 Weeks", rating:"4.8", success:"97%"
},
Singapore:{
    cost:"$2800", recovery:"2 Weeks",  rating:"4.7", success:"96%"
},
UAE:{
    cost:"$2500", recovery:"2 Weeks", rating:"4.7",  success:"96%"}
},

"Hair Transplant":{
India:{
    cost:"$1500", recovery:"1 Week", rating:"4.7", success:"96%"
},
Turkey:{
    cost:"$2200", recovery:"1 Week", rating:"4.8", success:"97%"
},
Thailand:{
    cost:"$2500", recovery:"1 Week", rating:"4.7", success:"96%"
},
Germany:{
    cost:"$5000", recovery:"2 Weeks", rating:"4.8",  success:"97%"
},
Singapore:{
    cost:"$4800", recovery:"2 Weeks", rating:"4.7",  success:"96%"
},
UAE:{
    cost:"$4200", recovery:"2 Weeks", rating:"4.7", success:"96%"
}
},

"Hip Replacement":{
India:{
    cost:"$5200", recovery:"4 Weeks", rating:"4.7", success:"95%"
},
Turkey:{
    cost:"$7000", recovery:"3 Weeks", rating:"4.6",  success:"94%"
},
Thailand:{
    cost:"$7500", recovery:"3 Weeks", rating:"4.7", success:"95%"
},
Germany:{
    cost:"$16000", recovery:"5 Weeks", rating:"4.8", success:"97%"
},
Singapore:{
    cost:"$15000", recovery:"4 Weeks", rating:"4.7", success:"96%"
},
UAE:{
    cost:"$13000", recovery:"4 Weeks", rating:"4.7", success:"96%"}
},

"Spine Surgery":{
India:{
    cost:"$4800", recovery:"4 Weeks", rating:"4.7", success:"95%"
},
Turkey:{
    cost:"$6900", recovery:"3 Weeks", rating:"4.6", success:"94%"
},
Thailand:{
    cost:"$7200", recovery:"3 Weeks", rating:"4.7", success:"95%"
},
Germany:{
    cost:"$14000", recovery:"5 Weeks", rating:"4.8", success:"97%"
},
Singapore:{
    cost:"$13500", recovery:"4 Weeks", rating:"4.7", success:"96%"
},
UAE:{
    cost:"$12000", recovery:"4 Weeks", rating:"4.6", success:"95%"}
},

"Liver Transplant":{
India:{
    cost:"$32000", recovery:"6 Weeks", rating:"4.8", success:"94%"
},
Turkey:{
    cost:"$42000", recovery:"6 Weeks", rating:"4.7", success:"93%"
},
Thailand:{
    cost:"$40000", recovery:"6 Weeks", rating:"4.7", success:"94%"
},
Germany:{
    cost:"$85000", recovery:"8 Weeks", rating:"4.9", success:"96%"
},
Singapore:{
    cost:"$80000", recovery:"8 Weeks", rating:"4.8", success:"95%"
},
UAE:{
    cost:"$70000", recovery:"7 Weeks", rating:"4.8", success:"95%"}
},

"Kidney Transplant":{
India:{
    cost:"$15000", recovery:"5 Weeks", rating:"4.7", success:"95%"
},
Turkey:{
    cost:"$21000", recovery:"5 Weeks", rating:"4.6", success:"94%"
},
Thailand:{
    cost:"$20000", recovery:"5 Weeks", rating:"4.7", success:"95%"
},
Germany:{
    cost:"$45000", recovery:"7 Weeks", rating:"4.8", success:"97%"
},
Singapore:{
    cost:"$42000", recovery:"7 Weeks", rating:"4.8", success:"96%"
},
UAE:{
    cost:"$38000", recovery:"6 Weeks", rating:"4.7", success:"96%"}
},

"Cosmetic Surgery":{
India:{
    cost:"$3000", recovery:"2 Weeks", rating:"4.6", success:"94%"
},
Turkey:{
    cost:"$4200", recovery:"2 Weeks", rating:"4.7", success:"95%"
},
Thailand:{
    cost:"$4000", recovery:"2 Weeks", rating:"4.6", success:"94%"
},
Germany:{
    cost:"$9000", recovery:"3 Weeks", rating:"4.8", success:"96%"
},
Singapore:{
    cost:"$8500", recovery:"3 Weeks", rating:"4.7", success:"95%"
},
UAE:{
    cost:"$7800", recovery:"3 Weeks", rating:"4.7", success:"95%"}
},

"Eye LASIK Surgery":{
India:{
    cost:"$1200", recovery:"1 Week", rating:"4.8", success:"98%"
},
Turkey:{
    cost:"$1600", recovery:"1 Week", rating:"4.7", success:"97%"
},
Thailand:{
    cost:"$1500", recovery:"1 Week", rating:"4.6", success:"97%"
},
Germany:{
    cost:"$4000", recovery:"2 Weeks", rating:"4.9", success:"99%"
},
Singapore:{
    cost:"$3800", recovery:"2 Weeks", rating:"4.8", success:"98%"
},
UAE:{
    cost:"$3500", recovery:"2 Weeks", rating:"4.7", success:"98%"}
}

};


function compareTreatment(){

let treatment = document.getElementById("treatment").value;
let c1 = document.getElementById("country1").value;
let c2 = document.getElementById("country2").value;

let data1 = treatmentData[treatment][c1];
let data2 = treatmentData[treatment][c2];

document.getElementById("resultBox").innerHTML =

`
<h3>${treatment} Comparison</h3>

<table class="compare-table">

<tr>
<th>Feature</th>
<th>${c1}</th>
<th>${c2}</th>
</tr>

<tr>
<td>Average Cost</td>
<td>${data1.cost}</td>
<td>${data2.cost}</td>
</tr>

<tr>
<td>Recovery Time</td>
<td>${data1.recovery}</td>
<td>${data2.recovery}</td>
</tr>

<tr>
<td>Hospital Rating</td>
<td>★★★★★ ${data1.rating}</td>
<td>★★★★★ ${data2.rating}</td>
</tr>

<tr>
<td>Success Rate</td>
<td>${data1.success}</td>
<td>${data2.success}</td>
</tr>

</table>

`;

}