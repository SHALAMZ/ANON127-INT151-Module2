// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  if(typeof quote.id=== 'number' &&
    typeof quote.content === 'string' &&
    typeof quote.author ==='string'
  ){
    quotes.push(quote)
  }else{
    console.log("invalid input")
  }
}
addQuote({id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs'})
addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' })
addQuote({id: 3,content: 'Simplicity is the ultimate sophistication.',author: 'Leonardo da Vinci'})
console.log(quotes)

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(q => q.id === id);
  if (index !== -1) {
    quotes.splice(index, 1);
  }
}
deleteQuote(3); 
console.log(quotes)


/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updateQuote) {
  // TODO: Find the quote by id and update its properties
  const quote = quotes.find(q => q.id === id);
  if(quote){
    if(updateQuote.content !==undefined){
      quote.content = updateQuote.content
    }
    if(updateQuote.author !== undefined){
      quote.author = updateQuote.author
    }
  }else{
    console.log(`quote${id} not found`)
  }
}
updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' })
console.log(quotes)

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes;
}
console.log(getAllQuotes())

// 6. Test your functions below
// ✅ Add 3 quotes using addQuote()
addQuote({ id: 4, content: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' })
addQuote({ id: 5, content: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' })
addQuote({ id: 6, content: 'Life is 10% what happens to us and 90% how we react to it.', author: 'Charles R. Swindoll' })

// ✅ Delete 1 quote using deleteQuote()
deleteQuote(4)

// ✅ Update 1 quote using updateQuote()
updateQuote(5, { author: 'Einstein', content: 'In the midst of every crisis, lies great opportunity.' })

// ✅ Print all quotes using getAllQuotes()
console.log(getAllQuotes())
