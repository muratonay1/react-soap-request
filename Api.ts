/**
 * FETCH SOAP REQUEST APİ (Asp.Net Web Service)
 * Author:  https://github.com/muratonay1
 * If you have a question? 
 * ContactMe: imuratony@gmail.com
 */

/**
 * @param {JSON} params JSON SoapParameter
 * @return {string} new Parameter format = "userMail=***&userName=***" for fetch request
 */
function bodyParameterParser(params:JSON) {
    try {
        var param = params;
        var keys = Object.keys(param);
        var values = Object.values(param);
        var bodyObject="";
        for(var i=0;i<keys.length;i++){
            var key = keys[i];
            var value = values[i];
            bodyObject=bodyObject+key+"="+value+"&"
        }
        console.log("bodyObject: ",bodyObject.substring(0,bodyObject.length-1))
        return bodyObject.substring(0,bodyObject.length-1)
    } catch (error) {
        console.log("bodyParserERROR: ",error)
    }
}


export class SoapService {
    /**
     * @param {string} Url "https://localhost:44339/WebService-EJI.asmx" 
     * @param {string} WebMethod "GetUsers"
     * @param {JSON} Parameter "Soap input parameters" ({userMail:***,userName:***})
     * @returns {JSON} Soap Response
     */
    static withPostParameter=(Url:String, WebMethod:String, Parameter:JSON)=>{
        var responseParser;
        var promisVal;
        Parameter === null ? console.log("Post Parameter Invalid"):responseParser=bodyParameterParser(Parameter)
        
        return fetch(Url + '/' + WebMethod,{
            method:'POST',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:responseParser
        })
        .then(response => response.json())
        .then((data) => {
           return data
        })
        .catch(err=>{
            console.log(err)
        })
    }
   /**
    * @param {string} Url "https://ip:port/WebService.asmx" 
    * @param {string} WebMethod "GetCitys"
    */
    static withoutParameter=(Url:String, WebMethod:String)=>{
        fetch(Url + '/' + WebMethod, {
            method: 'POST',
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        })
        .then(response => response.json())
        .then((data) => {return data})
        .catch(error=>{
            console.log(error)
        })
    }
}