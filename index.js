const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
    { id: 0, name: 'amirul hosain', email: 'amirul@hosain.com' },
    { id: 1, name: 'nafi', email: 'nafi@hosain.com' },
    { id: 2, name: 'ofi', email: 'amirul@hosain.com' },
    { id: 3, name: 'johny', email: 'johny@hosain.com' },
    { id: 4, name: 'roony', email: 'roony@hosain.com' },
]

app.get('/', (req, res) => {
    res.send('Hello i am  learning node and express so i am very exited')
})

app.get('/users', (req, res) => {
    res.send(users)
})

// use query parameters
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUer = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser)
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple', 'jack fruits'])
})

app.listen(port, () => {
    console.log('listening to port', port)
})
