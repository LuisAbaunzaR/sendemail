const request = require('request');



const mail = "luis@so" 
const name = "Luis"
const mensaje = "prueba"
const subject = "prueba 1"

function sendEmail () {
    
    const jsonDataObj = {"sender": {"name":"Abraham Ortiz","email":"aortiz@mts"},"to":[{"email":mail,"name":name}],"htmlContent":mensaje,"subject":subject,"replyTo":{"email":"aortiz@mts"},"tags":["saludos"]}
    
      
    request.post({
        url: 'https://api.sendinblue.com/v3/smtp/email',
        headers : {
            'api-key': ''
        } ,
        body: jsonDataObj,
        json: true
      }, function(error, response, body){
      console.log(body);
    });



    }

sendEmail()

