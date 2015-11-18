

 var newHeading = document.createElement("h3");
 var newParagraph = document.createElement("p");

 //to add content, you can create a child node manually
 var h3Text = document.createTextNode("Exercise");
 var paraText = document.createTextNode("This text has been created dynamically using Javascript");

 //to attach these new elements to the document:
 document.getElementById("exercise").appendChild(newHeading);
 document.getElementById("exercise").appendChild(newParagraph);
 newHeading.appendChild(h3Text);
 newParagraph.appendChild(paraText);
