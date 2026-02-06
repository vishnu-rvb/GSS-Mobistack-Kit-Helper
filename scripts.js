// Mock Data
const mockData = [
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-1","Kit content":"COUNTER SUNK SELF TAPPING SCREW -M4 x 8","child Dwg No":"0","Qty":"9"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-2","Kit content":"Slotted Round head Cap Screw M4 x 16","child Dwg No":"0","Qty":"7"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-2","Kit content":"Hex Nut -M4","child Dwg No":"0","Qty":"7"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-3","Kit content":"COUNTER SUNK SELF TAPPING SCREW -M4 x 25 ","child Dwg No":"0","Qty":"7"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-3","Kit content":"PLASTIC SLEEVE : 8 x 25","child Dwg No":"0","Qty":"7"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-4","Kit content":"SLOTTED ROUND HEAD SCREW -M4 x 40","child Dwg No":"0","Qty":"4"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-4","Kit content":"Hex Nut -M4","child Dwg No":"0","Qty":"4"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-5","Kit content":"SLOTTED ROUND HEAD SCREW -M5 x 15","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-5","Kit content":"HEX NUT -M5","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-6","Kit content":"PAN HEAD SELF TAP SCREW -M5 x 10","child Dwg No":"0","Qty":"2"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-7","Kit content":"STAR SOCKET ROUND HEAD-SELF TAPPING SCREW -M6 x 12","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-8","Kit content":"HEX BOLT -M6 x 50","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-8","Kit content":"HEX NUT -M6","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-9","Kit content":"EXPANSION BOLT- M6 x 75","child Dwg No":"0","Qty":"13"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-10","Kit content":"HEX BOLT -M8 x 45","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-10","Kit content":"HEX SELF LOCKING NUT -M8","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-11","Kit content":"Slotted Counter Sunk bolt  M8x20","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-11","Kit content":"HEX NUT -M8","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-12","Kit content":"HEX BOLT -M8 x 20","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-12","Kit content":"HEX SERRATED FLANGE NUT -M8","child Dwg No":"0","Qty":"3"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-13","Kit content":"HEX BOLT -M8 x 20","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-13","Kit content":"HEX NUT -M8","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-13","Kit content":"PLAIN WASHER -M8","child Dwg No":"0","Qty":"5"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-M6","Kit content":"HEX BOLT -M6 x 15","child Dwg No":"0","Qty":"100"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-M6","Kit content":"HEX NUT -M6","child Dwg No":"0","Qty":"100"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-M8","Kit content":"HEX BOLT -M8 x 20","child Dwg No":"0","Qty":"100"},
{"Dwg No":"IS/BM/S3/205R1","Description":"Fastener kit-M8","Kit content":"HEX NUT -M8","child Dwg No":"0","Qty":"100"},
{"Dwg No":"IS/BM/S3/205R1","Description":"pton pin fastener kit","Kit content":"HEX BOLT -M6x10","child Dwg No":"0","Qty":"100"},
{"Dwg No":"IS/BM/S3/205R1","Description":"pton pin fastener kit","Kit content":"CAP nut M6","child Dwg No":"0","Qty":"100"},
{"Dwg No":"IS/BM/S3/205R1","Description":"pton pin fastener kit","Kit content":"Plain washer -M6","child Dwg No":"0","Qty":"100"}
];
let data = [];
const searchInp = $('#searchInput');
const arrow=$('.select2-container--default .select2-selection--single .select2-selection__arrow b');
function showLoading(value) {
    const loadingOverlay = document.querySelector('#loading-overlay');
    loadingOverlay.style.display = (value ? 'flex' : 'none');
}

function disableInputs(value){
    const elements=document.querySelectorAll('input, button');
    for(const i of elements){i.disabled=value;};
}

function filterOptionsCallback(txt, data){
    if ($.trim(txt.term) === '') {return data;}

    if (data.text.toLowerCase().indexOf(txt.term.toLowerCase()) > -1) {
        //var modifiedData = $.extend({}, data, true);
        return data;//modifiedData;
    }
    return null;
}

function CSSstyle(index,element){
    element.style.color ='black';
    element.style.backgroundColor= (index % 2 === 0)? '#D6EAF8':'#ffffff';
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor='#007bff';
        element.style.color ='white';
    });
    element.addEventListener("mouseout",()=>{
        element.style.backgroundColor = (index % 2 === 0)? '#D6EAF8':'#ffffff';
        element.style.color ='black';
    });
}

function formatOptionsCallback(item,container){
    if(!item.id){return item.text;};
    if(item.selected){
        $('#select2-searchInput-container').parent().css({
            'background-color':'#007bff'
        });
        arrow.css({
            'border-color': 'red transparent transparent transparent !important;'
        });
        return $(`<span id="selectedItem">${item.text}</span>`).css({
            'display':'flex',
            'justify-content':'center',
            'align-items':'center',
            'color':'white'
        });
    }
    else{
        CSSstyle(parseInt(item.id.replace('option-','')),container);
        return item.text;
    };
}

function setOptions(data=mockData){
    console.log('setting options');
    const options=[...new Set(data.map(item => item["Description"]))];
    searchInp.select2({
        placeholder: "Search Description...",
        matcher: filterOptionsCallback,
        templateResult:formatOptionsCallback,
        templateSelection:formatOptionsCallback
    });
    for(const i in options){
        const option=new Option(options[i],`option-${parseInt(i)+1}`,false,false);
        searchInp.append(option);
    };
}

function clearSearch() {
    searchInp.val(null).trigger('change');
    $('#select2-searchInput-container').parent().css({
        'background-color':'white'
    });
    arrow.css({
        'border-color': '#ccc transparent transparent transparent !important;'
    });
    updateTable(data);
}

function search() {
    try{
        disableInputs(true);
        showLoading(true);
        updateTable(data,searchInp.select2('data')[0].text);
    }
    catch(error){console.error(error);}
    finally{
        disableInputs(false);
        showLoading(false);
    }
}

function updateTable(data=mockData,filterText="") {
    console.log('updating table');
    
    const tTitle = document.querySelector('#kitName');
    const tbody = document.querySelector('#tableBody');
    const rowLimit=200;
    tTitle.innerHTML="";
    tbody.innerHTML=""; 

    if(filterText===""){tTitle.innerHTML="Kit Items";}
    else{tTitle.innerHTML=filterText;};

    const filtered = data.filter(item => 
        item["Description"].toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {return;}
    
    for(const i in filtered){
        if(parseInt(i)+1>rowLimit){break;}
        const row = `<tr>
            <td>${parseInt(i)+1}</td>
            <td>${filtered[i]["Kit content"]}</td>
            <td>${filtered[i]["child Dwg No"]}</td>
            <td>${filtered[i]["Qty"]}</td>
        </tr>`;
        tbody.innerHTML += row;
    }
}

async function fetchData(){
    try{
        console.log('fetching data');
        disableInputs(true);
        showLoading(true);
        const url="https://defaultd44ff7234fa7405eafc043c21e5730.43.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/70b90e32ccb741bda5d3a1c873db51a2/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zoKPUf_zDgpDHVL5jbmixtvUJoLSVETJHkMiJ6F_MKk";
        const payload={
            "connector":"onedrive",
            "params":{
                "file path":"/power automate files/Itoki Kit contents.txt"
            }
        };
        const response = await fetch(url,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(payload)
        }
        );
        if(response.ok){
            const rawData=await response.text();
            const data=rawData.split('\r\n').filter(i => i.trim() !=='').map(i => JSON.parse(i));
            return data;
        }
        else{
            console.error('data fetch error');
            alert('data fetch error');
            return []
        }
    }
    catch(error){console.error(error);}
    finally{
        disableInputs(false);
        showLoading(false);
    };
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetchData();
        data=response;
        setOptions(data);
        clearSearch();
        updateTable(data);
    } catch (error) {console.error("Initialization Error:", error);};
});