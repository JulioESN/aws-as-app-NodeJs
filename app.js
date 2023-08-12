const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>AWS Auto Scaling Demo App NodeJs </h1> <h4>Message: Success</h4> <p>Version: 1.0.0 Dependencies express 4.18.2</p>');
})

app.listen(port, () => {
  console.log(`Demo app en NodeJs dependencies express 4.18.2 is up and listening to port ${port}`);
})