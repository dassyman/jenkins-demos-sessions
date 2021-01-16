const express = require('express');
//const axios = require('axios');
const PORT=8080;

const app = express();
//callback from /?

app.get('/', (req, res) => {
   console.log(req.headers);
   const instance = (process.env.INSTANCE) ? process.env.INSTANCE : 'no instance feed';
   //axios.get('myapp2').then(()=>{})
   res.send(`Hello world from ${instance}\n`);
})

//queueMicrotask.subscribe()
//gRPC - uses http2. constant channel, like websockets - used in go. Simplifies the infrastructure
//      MTLS - certificated access between trusted partners with gRPC
//udp- used for iot. not guaranteed delivery, like for constantly reporting temporature
//kafka - if you want to scale to milliones of messages. gPRC if not so many

app.listen(PORT);

console.log(`Running on port; ${PORT})`);