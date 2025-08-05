const testingController = (req,res) =>{
    res.status(200).send("<h1>Welcome todo app server </h1>");
};

module.exports = {testingController};