import express from 'express';
import cors from 'cors'
import process from 'process'
import fetch from 'node-fetch';
const app = express()
app.use(express.json())
app.use(cors())

app.get('/test', function(req, res){
    res.send("Hello from the root application URL");
});

app.post('/completions', async (req, res) => {
    const options = {
        method: "post",
        headers: {
            "Authorization": `Bearer ${process.env.KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: 'user',
                content: req.body.message
            }],
        })       
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        .then((datares) => {
                const data = datares.json()
                return data
            }
        )
        console.log(response, req)
        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

app.listen(process.env.PORT, () => console.log('your server is running on port ' + process.env.PORT))