const fs = require('fs');

module.exports = function(app) {
    fs.readFile("./db.json", (err, data) => {
        if (err) throw err;
        var note = JSON.parse(data);

        app.get("./api/notes", function(req, res){
            res.json(note)
        });

        app.post("./api/notes", function(req, res){
            let myNote = req.body;
            note.push(myNote);
            return console.log("New note")
        });

        app.delete()
    })
}