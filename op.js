function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('');
}

let requestHeaders = $request.headers
let requestBody = $request.body

let nonceStr = requestBody.substr(10)
let date = formatDate()
let body = {
    "message": "success",
    "xianshi": requestHeaders["xianshi"],
    "is_pay": false,
    "use_info": {
        "date": `${date}`,
        "used": 1,
        "ins_number": 0,
        "total": 16
    },
    "nonce_str": nonceStr
}

console.log(body)

$done({
    response: {
        body: JSON.stringify(body)
    }
})
