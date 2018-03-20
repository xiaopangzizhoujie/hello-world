<script type="text/javascript">  
        const json = {
            string: 'hello world',
            number: 100,
            date: new Date(),
            buf: new Buffer('hello world')
        };

    function encode(json){
        var jsonText = JSON.stringify(json);
        return jsonText;
    }

    function decode(jsonStr){
        var jsonobject = JSON.parse(jsonText,function(key,value){  
            if(key == "date"){  
                return new Date(value);  
            }else{  
                return new Buffer(value);
            }else{
                return value;  
            }  
        });
        return jsonobject;
    }

    const jsonStr = encode(json);
    const obj = decode(jsonStr);
</script>  