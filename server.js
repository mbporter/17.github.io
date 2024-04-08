const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

app.get("/", (req, res) => {
res.sendFile(__dirname + "/index.html");
});

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
    .connect("mongodb+srv://Mbporter:Darcy123123@cluster0.sefh4en.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("connected to mongodb");
    })
    .catch((error) => console.log("couldn't connect to mongodb", error));

    app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/crafts", (req, res) => {
    const crafts = [];
    crafts[0]={
        name: "Beaded JellyFish",
        image: "images/bead-jellyfish.jpg",
        description: "Create a hanging jellyfish using eggcartons and multicolored beads",
        supplies: [
            "string",
            "egg cartons",
            "beads"
        ]
    };
    crafts[1]={
        name: "Character Bookmarks",
        image: "images/bookmarks.jpeg",
        description: "Create a little birdy bookmark to always remin you were you were",
        supplies: [
            "yellow construction paper",
            "orange construction paper",
            "black construction paper"
        ]
    };
    crafts[2]={
        name: "Button Flowers",
        image: "images/button-flowers.jpeg",
        description: "Create a fun bouquet of flowers with your favorite buttons",
        supplies: [
            "multicolored buttons",
            "multicolored flet",
            "green straws",
            "ribbon"
        ]
    };
    crafts[3]={
        name: "Cheerio Necklaces",
        image: "images/cheerio-necklace.webp",
        description: "Create a fun and edible necklace",
        supplies: [
            "Cheerios or Fruit Loops",
            "Elastic string"
        ]
    };

    crafts[4]={
        name: "Cotton Ball Cupcakes",
        image: "images/cotton-ball-cupcakes.webp",
        description: "Decorate your fun filled cupcake however you want.",
        supplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ]
    };

    crafts[5]={
        name: "School Themed Mason Jars",
        image: "images/decorated-jars.jpeg",
        description: "Let's make mason jars to ",
        supplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ]
    };

    crafts[6]={
        name: "Egg Carton Flowers",
        image: "images/egg-carton-flowers.jpg",
        description: "Make a beautiful bouquet with egg cartons and other items you can find around the house",
        supplies: [
            "Egg Cartons",
            "Butons",
            "Green Pipe Cleaner",
            "Ribbon",
            "Canvas"
        ]
    };

    crafts[7]={
        name: "Finger Puppets",
        image: "images/finger-puppets.jpeg",
        description: "These little critters are easy to make, and will entertain your little one while they make a show.",
        supplies: [
            "Pom-poms",
            "Googly Eyes",
            "Pipe Cleaner"
        ]
    };

    crafts[8]={
        name: "Ribbon Flower Headbands",
        image: "images/flower-headbands.jpg",
        description: "Let your little one show off her new style with these pretty and customizable headbands",
        supplies: [
            "Plain headband",
            "Ribbon",
            "Buttons",
            "Gems"
        ]
    };

    crafts[9]={
        name: "Hand Print Fish Puppets",
        image: "images/handprint-fish.jpg",
        description: "We all need to take every opportunity we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
        supplies: [
            "Popsicle sticks",
            "Cardstock",
            "Gems",
            "Googly Eyes"
        ]
    };

    crafts[10]={
        name: "Hand Print Tree",
        image: "images/hand-print-tree.jpeg",
        description: "This is a fun way to get your little one into finger painting.",
        supplies: [
            "Watercolor Paper",
            "Finger paint"
        ]
    };

    crafts[11]={
        name: "Melted Bead Bowl",
        image: "images/melted-bead-bowl.jpeg",
        description: "All they need to do is shape their faviorte design, warm it up and they have a brand new bowl.",
        supplies: [
            "Beads",
            "Bowl",
            "Parchment paper"
        ]
    };

    crafts[12]={
        name: "Monster Kites",
        image: "images/monster-rolls.jpg",
        description: "Let's make those scary toilet paper rolls fly!",
        supplies: [
            "Toilet paper rolls",
            "Paint",
            "Tissue Paper",
            "String"
        ]
    };
    crafts[13]={
        name: "Pool Noodle Boats",
        image: "images/noodle-boats.png",
        description: "Let's make a boat that will actually float, due to the floating bottom of a pool noodle.",
        supplies: [
            "Pool Noodle",
            "Straw",
            "Plastic Paper"
        ]
    };
    crafts[14]={
        name: "Paper Plate Bees",
        image: "images/paper-plate-bees.jpeg",
        description: "Let's have fun with making cute little bees, or big bees actually.",
        supplies: [
            "Paper Plate",
            "Googly Eyes",
            "Close Pins",
            "Black pom poms",
            "Yellow Paint",
            "Black Paint"
        ]
    };
    crafts[15]={
        name: "Paper Plate Dinosaurs",
        image: "images/paper-plate-dinosaurs.jpg",
        description: "Who would have thought that half a paper plate would be the base of a dinosaur.",
        supplies: [
            "Paper Plate",
            "Paint",
            "Close Pins",
            "Construction Paper"
        ]
    };
    crafts[16]={
        name: "Porcupine Leafs",
        image: "images/porcupine-leaf.webp",
        description: "Let's turn an ordinary paper plate into a fun filled mask.",
        supplies: [
            "Leafs",
            "Berries",
            "Acorns",
            "Construction Paper"
        ]
    };
    crafts[17]={
        name: "Rainbow Cloud",
        image: "images/rainbow-cloud.webp",
        description: "Some cotton and color and you'll have a beautiful rainbow.",
        supplies: [
            "Paper Plate",
            "Cotton Balls",
            "Construction Paper"
        ]
    };
    crafts[18]={
        name: "Fun Shaped Crayons",
        image: "images/shaped-crayons.jpg",
        description: "Let's melt some crayons together and let them harden into fun shapes.",
        supplies: [
            "Broken Crayons",
            "Mold"
        ]
    };
    
    crafts[19]={
        name: "Sunny String",
        image: "images/sun-string.jpg",
        description: "Let's practice our fine motor skills while we weave the string into a fun sun.",
        supplies: [
            "Yellow String",
            "Paper Plate",
            "Yellow construction paper",
            "Yellow and Orange beads"
        ]

    };
    crafts[20]={
        name: "Tissue Ballerinas",
        image: "images/tisue-dancer.jpeg",
        description: "These beautiful dancers will look great on display",
        supplies: [
            "Pipe cleaner",
            "Tissue Paper",
            "Elastics"
        ]
    };



    res.json(crafts);
});


app.put("/api/albums/:id", (req, res) => {
    const albumIndex = albums.findIndex(a => a._id == parseInt(req.params.id));
    if (albumIndex > -1) {
        const updatedAlbum = { ...albums[albumIndex], ...req.body };
        albums[albumIndex] = updatedAlbum;
        res.send(albums);
    } else {
        res.status(404).send('Album not found');
    }
});

app.delete("/api/albums/:id", (req, res) => {
    const albumIndex = albums.findIndex(a => a._id == parseInt(req.params.id));
    if (albumIndex > -1) {
        albums.splice(albumIndex, 1);
        res.send(albums);
    } else {
        res.status(404).send('Album not found');
    }
    
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    // Send the error details to the client
    res.status(500).send('Something went wrong!');
});





app.listen(3000, ()=> {

    console.log("Listening");
});