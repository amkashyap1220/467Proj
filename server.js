const express = require('express')
const app = express();
const router = require("./routes/routes");
const port = 3100;
const cors = require("cors");
app.use(cors());
app.use('/',router);

app.listen(port,()=>{
    console.log(`connected to port ${port}`);

})
