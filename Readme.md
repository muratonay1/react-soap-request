<!--UL-->
*   Sample using:
*   Copy Api.ts file, paste your project file

#
-   import Api.ts
```javascript
//import file
import {SoapService} from '/Api.ts';
var url = "https://ip:port/Webservice.asmx"
```

#
-   Using without parameter
```javascript
componentDidMount(){
    var data = SoapService.withoutParameter(url,"[WebMethodName]")
    var myData = Promise.resolve(data);
    myData.then(function(val){
        console.log("response data: ",val)
    })
}
```

#
-   Using with parameter
```javascript
componentDidMount(){
    var data = SoapService.withPostParameter(url,"[WebMethodName]",({
        Parameter1:'value1',
        Parameter2:'value2'
        .
        .
        .
    }))
    var myData = Promise.resolve(data);
    myData.then(function(val){
        console.log("response data: ",val)
    })
}
```

