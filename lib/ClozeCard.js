/*This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

The constructor should accept two arguments: text and cloze.

The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

The constructed object should have a partial property that contains only the partial text.

The constructed object should have a fullText property that contains only the full text.

The constructor should throw or log an error when the cloze deletion does not appear in the input text.

Use prototypes to attach these methods, wherever possible.*/

//Constructor function for the ClozeCard
function ClozeCard (question, deletion) {
	 if (!(this instanceof ClozeCard)) {
    return new ClozeCard(question, deletion);
  }

  var startEndPositions=[question, deletion];
  this.partial = makePartial();   //Call a function that builds the partial
  this.cloze = cloze;       //only has the cloze-deleted portion of text
  
  function makePartial(question, startEndPositions)	{
  	var start=question.slice(0, startEndPositions[0]);
  	var end = question.slice(startEndPostions[1], question.length);
  	return start + "..." + end;
  }
	
}

module.exports = ClozeCard;