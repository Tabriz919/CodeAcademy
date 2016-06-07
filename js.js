
function chatting() {
 		    var node = document.createElement("p");
    var input =  document.getElementById("text").value;
    var textnode = document.createTextNode(input);

 	if (input.length == 0) {
alert("Bos qoydun mesaji!")

 		
 	} else {
    node.className = "customer";

    node.appendChild(textnode);
    document.getElementById("chat").appendChild(node);
    document.getElementById("text").value = "";
 	}

}
addEventListener("keydown", function(event){
 			if(event.keyCode == 13){
 				chatting();
 			}
 		})