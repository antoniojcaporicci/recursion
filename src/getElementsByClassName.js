// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //Two things:  when to stop?  How to go deeper? - .childNodes? .class
  var elementArray = []; 
 
	function walk(node, func) {
	   var children = node.childNodes;
	   for (var i = 0; i < children.length; i++)  
     	walk(children[i], func);
	   	func(node);
	} 

	walk(document, function(node){
		if(node.classList){
			if(node.classList.contains(className)){
				elementArray.unshift(node)
			}
		}
	})
	
  return elementArray
};



