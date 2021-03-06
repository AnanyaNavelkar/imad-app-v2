var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
title: 'Article One | Ananya Navelkar',
heading:'Article One',
date:'12th February, 2017',
content:`<p>
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
</p>
<p>
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
</p>
<p>
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
Content for article-one.Content for article-one.Content for article-one.
</p>
`
};

function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
var htmltemplate=
`<html>
<head>
<title>
${title}
</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div>
<div class="container">
<a href="/">Home</a>
</div>
<hr/>
<h1>
${heading}
</h1>
<div>
${date}
</div>
<div>
<div >
${content}
</div>
</div>
</body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
res.send(createtemplate(articleone));
});
app.get('/article-two',function(req,res){
res.send('Article-two will be requested and sent here');
});
app.get('/article-three',function(req,res){
res.send('Article-three will be requested and sent here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
