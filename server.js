var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page = {
     'page1': {
         title: 'Page 1 : About Sanket Mehta' ,
        heading: 'Article One' ,
        date: '09 May, 2017' ,
        content: `<p>
                This is where the actual content is written. Sanket is an IT student and to be engineer and loves South Indian food :). 
                His mom also loves Mendu Vada. Born in Ahmedabad, he is studying and staying at Changa, Anand.
                </p>`
    },
     'page2': {
        title: 'Page 2 : About Sanket Mehta' ,
        heading: 'Article Two' ,
        date: '10 May, 2017' ,
        content: `<p>
            This is where the actual content is written. Sanket is an IT student and to be engineer and loves South Indian food :). 
            His mom also loves Mendu Vada. Born in Ahmedabad, he is studying and staying at Changa, Anand.
            </p>`
    }
};

function createTemplate (data) {
    var title = data.title , heading = data.heading, date = data.date , content = data. content;
    
    var htmlTempl = `
    <html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            <title>
                ${title}
            </title>
        </head>
        <body>
            <div class="con">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                    <h3>
                        ${heading}
                    </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>    
    </html>`;
    return htmlTempl;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:pageName', function (req, res) {
   // pageName == page-1;
   // page[pageName] == {} content obj of page1
  var pageName = req.params.pageName; 
  res.send(createTemplate(page[pageName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req, res) {
    //Get the name from req
    var nm = req.params.name;
    
    names.push(nm);
    //JSON JavaScript Object Notation
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
