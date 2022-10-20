const configuration = {
    mongodb:{
        url:process.env.DB_URL || "mongodb+srv://adminRoot:adminRoot@persona.blwchb3.mongodb.net/real-state"
    }
}

module.exports = {
    configuration
}