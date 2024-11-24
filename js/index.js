let quotes = [
    { text: 'Be yourself; everyone else is already taken.', personName: '― Oscar Wilde' },
    { text: 'So many books, so little time.', personName: '― Frank Zappa' },
    { text: 'A room without books is like a body without a soul.', personName: '― Marcus Tullius Cicero' },
    { text: 'You only live once, but if you do it right, once is enough.', personName: '― Mae West' },
    { text: 'Be the change that you wish to see in the world.', personName: '― Mahatma Gandhi' },
    { text: 'If you tell the truth, you do not have to remember anything.', personName: '― Mark Twain' },
]

let RemovedQuotes = []

function changeQuate() {
    if (quotes.length == 0) {
        quotes = RemovedQuotes
        RemovedQuotes = []
    }
    let index = Math.floor(Math.random() * quotes.length)
    document.getElementById('quoteID').innerText = quotes[index].text
    document.getElementById('personName').innerText = quotes[index].personName
    RemovedQuotes.push(quotes[index])
    quotes.splice(index, 1)
} 