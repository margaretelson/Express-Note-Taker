const fs = require('fs');
const path = require('path');

module.exports = function(app) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var note = JSON.parse(data);

        app.get("/api/notes", function(req, res){
            res.json(note)
        });

        app.post("/api/notes", function(req, res){
            let myNote = req.body;
            note.push(myNote);
            return console.log("New note")
        });

        app.delete("/api/notes/:title", function(req, res){
            let title = req.params.title.toString();
            console.log(title);
            
            for (let i=0; i < note.length; i++){
                if (note[i].title == title){
                    res.send(note[i]);
                    note.splice(i,1);
                    break
                }
            }
        })
    })
}