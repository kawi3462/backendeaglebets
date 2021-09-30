const Prediction = require('../models/prediction');





exports.getPredictions = (req, res, next) => {
    var date = req.params.date;

    Prediction.find({ "prediction.date": { $gt: new Date(date) } })
        .then(predictions => {
            res.status(200).json(predictions);

        })
        .catch(err => {
            console.log(err);
            res.status(404).json({
                message: "No today predictions"

            });

        });



}

exports.postPredictions = (req, res) => {



    const fixtureId = req.body.fixtureId;
    const tip = req.body.tip;
    const category = req.body.category;
    const odd = req.body.odd;
    const status = req.body.status;
    const date = req.body.date;



    console.log(date);
    console.log(req.body);
    const prediction = new Prediction(req.body);

    // const prediction = new Prediction({
    //     fixtureId: fixtureId,
    //     tip: tip,
    //     category: category,
    //     odd: odd,
    //     status: status,
    //     date: date

    // });
    prediction.save()
        .then(result => {
            console.log(result);
            res.status(200).json(prediction);

        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Error occured"

            });

        });



}