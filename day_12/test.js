var str = 'fee fi fo fum';
var re = /\w+\s/g;
var xArray; while(xArray = re.exec(str)) console.log(xArray);
// produce:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
