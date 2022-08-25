//DEPENDENCIES
const app = require("./app");

//CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App live on port: ${PORT}`);
});