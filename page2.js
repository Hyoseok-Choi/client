var neo4j = require('neo4j-js');
//var application_root = __dirname,
//    express = require("express"),
//	path = require("path"),
//	HTTPStatus = require('http-status');

neo4j.connect('http://210.107.221.101:7474/db/data/', function (err, graph) {
    if (err)
        throw err;

    // do something with the graph

    // get node
    //graph.getNode(10, function (err, node) {
        //console.log(err ? err : node.data); // print the node's properties
    //});

var query = [
    'START n = node(*) MATCH p = n-[r]-n2',
    'RETURN p',
    'LIMIT 5'
];

graph.query(query.join('\n'), { id: 1 }, function (err, results) {
    if (err) {
        console.log(err);
        console.log(err.stack);
    }
    else {
        for (var i = 0; i < results.length; i++) {
            var relationship = results[i].r;
            var node = results[i].m;

            // ... do something with the nodes and relationships we just grabbed 
        }

        console.log(JSON.stringify(results, null, 5 )); // printing may help to visualize the returned structure
    }
});

});



var http = require('http'),
    fs = require('fs');

fs.readFile('./index2.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
	response.write("Hello World!!");
        response.end();
    }).listen(8080);
});

