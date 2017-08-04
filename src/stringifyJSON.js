// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  var stringObj = ''

	if(typeof obj === 'number'){
		stringObj += obj.toString();
	}else if(typeof obj === 'string' && obj !== undefined){
		stringObj += '"' + obj.toString() + '"';
	}else if(obj === null){
		stringObj += 'null';
	}else if(typeof obj === 'boolean'){
		if(obj === true){
			stringObj += 'true';
		}else{
			stringObj += 'false';
		}
	}else if(typeof Obj === undefined){
		stringObj += ''
	}else if(typeof obj === 'object' && Array.isArray(obj) === true){

		if(obj.length === 0){
			stringObj += '[]';
		}else{
			stringObj += '[';
			for(var i = 0; i < obj.length; i++){
				if(typeof obj[i] === 'object' && Array.isArray(obj[i])){
					stringObj += stringifyJSON(obj[i]) + ',';
				}else if(typeof obj[i] === 'number'){
					stringObj += obj[i].toString() + ',';
				}else if(typeof obj[i] === 'object'  && !Array.isArray(obj[i])){
					stringObj += stringifyJSON(obj[i]) + ',';
				}else if(typeof obj[i] === undefined){
			  	stringObj += '';
		  	}else{
					stringObj += '"' + obj[i].toString() + '"'  + ',';
				}
			}
			stringObj += ']';
		}

	}else if(typeof obj === 'object'){

		var propertyArray = Object.keys(obj)

		if(propertyArray.length === 0){
			stringObj += '{}';
		}else{
				stringObj += '{';

	  	for(var key in obj){
	  		console.log(key, obj[key])
		  	if(typeof obj[key] === 'function'){
		  		stringObj += ''
		  	}else if(typeof obj[key] === 'undefined'){
			  	stringObj += '';
			  }else if(typeof obj[key] === 'boolean'){
						if(obj[key] === true){
							stringObj += '"' + key.toString() + '"' + ':' + 'true'  + ',';
						}else{
							stringObj += '"' + key.toString() + '"' + ':' + 'false' + ',';
						}
		  	}else if(typeof obj[key] === 'object' && obj[key] !== null){
		  		stringObj += '"' + key.toString() + '"' + ':' + stringifyJSON(obj[key]) + ',';
		  	}else if(obj[key] === null || typeof obj[key] !== 'object'){
					if(obj[key] === null){
						stringObj += '"' + key.toString() + '"' + ':' + 'null' + ',';
					}else{
		  			stringObj += '"' + key.toString() + '"' + ':' + '"' + obj[key].toString() + '"' + ',';
		  		}
			  }else{
			  	stringObj += '"' + key.toString() + '"' + ':' + stringifyJSON(obj[key]) + ',';
			  }
			}
			stringObj += '}';
		}
	}
  



	if(stringObj[stringObj.length-2] === ','){
		if(stringObj[stringObj.length-1] === ']'){
			return stringObj = stringObj.substring(0, stringObj.length - 2)+ ']';
		}else{
			return stringObj = stringObj.substring(0, stringObj.length - 2)+ '}';
		}
	}else{
  	return stringObj
  }

};
