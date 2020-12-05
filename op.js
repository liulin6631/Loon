var body = $request.body;
var reg = new RegExp("amount=50", "g");
var reg1 = new RegExp("amount=100", "g");
body = body.replace(reg, "amount=1");
body = body.replace(reg1, "amount=1");
$done({body});