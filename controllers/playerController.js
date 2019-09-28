const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Player = require('../models/player');
// Creating the index route
// index route should show all the players
router.get('/', async(req, res, next) => {
    // req.body this is from the fetch request
    console.log(req.body, ' this is get all')
    try {
        req.body.user = req.session.userId;
        const allPlayers = await Player.find({ user: req.session.userId });
        console.log('allplayers', allPlayers);
        // This is the response to react
        res.json({
            status: {
                code: 200,
                message: "Success"
            },
            data: allPlayers
        });

    } catch (err) {

        res.send(err)

    }
});

router.post('/', async(req, res) => {

    try {
        // console.log('like what', req)
        console.log(req.body, ' this is req.body');
        console.log('is this set', req.session);
        req.body.user = req.session.userId;
        const createdPlayer = await Player.create(req.body);
        console.log('response happening?')
        res.json({
            status: {
                code: 201,
                message: "Resource successfully created"
            },
            data: createdPlayer
        });

    } catch (err) {
        console.log(err);
        res.send(err);
    }
});





router.get('/:id', async(req, res, next) => {


    try {

        const foundPlayer = await Player.findById(req.params.id);
        res.json({
            status: {
                code: 200,
                message: "Success"
            },
            data: foundPlayer
        });

    } catch (err) {
        res.send(err);
    }



});

router.put('/:id', async(req, res) => {

    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: {
                code: 201,
                message: "Resource successfully updated"
            },
            data: updatedPlayer
        });
    } catch (err) {
        res.send(err)
    }
});


// Delete route
router.delete('/', async(req, res) => {

    try {
        console.log('userid', req.session);
        console.log('what', Player.deleteMany({ user: req.session.userId }))
        const deletedPlayer = await Player.deleteMany({ user: req.session.userId });
        console.log('this', deletedPlayer);
        res.json({
            status: {
                code: 200,
                message: "Resource successfully deleted"
            }
        });
    } catch (err) {
        res.send(err);
    }
});

// Delete route
router.delete('/:id', async(req, res) => {

    try {
        console.log('userid', req.session);
        const deletedPlayer = await Player.findByIdAndRemove(req.params.id);
        console.log('this', deletedPlayer);
        res.json({
            status: {
                code: 200,
                message: "Resource successfully deleted"
            },
            data: deletedPlayer
        });
    } catch (err) {
        res.send(err);
    }
});



module.exports = router;