const translate = require('./google-translate-api');
var PythonShell = require('./python-shell');
var readline = require('readline');


// end the input stream and allow the process to exit
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
//    console.log("> ch: "+line);
    translate(line, {to: 'en'}).then(res => {
        console.log("> en: "+res.text);
        //=> I speak English
//        console.log(res.from.language.iso);
        //=> nl
        var pyshell = new PythonShell('bot.py');
        pyshell.send(res.text);
        pyshell.on('message', function (message) {
            console.log("< en: "+message);
            translate(message, {to: 'zh-TW'}).then(res_ch => {
                console.log("< ch: "+res_ch.text);
//                console.log(res_ch.from.language.iso);
            });
        });

//      pyshell.end(function (err) {
//          if (err) throw err;
//              console.log('finished');
//      });
    }).catch(err => {
        console.error(err);
    });    
        
 
});

   




/*
translate('我只會講中文', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});*/
