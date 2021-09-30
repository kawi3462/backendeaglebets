const axios = require('axios').default;

const api = require('../util/api');
const Fixture = require('../models/fixture');





exports.getFixtures = (req, res, next) => {

    var date = req.params.date;




    Fixture.find({ "fixture.date": { $gt: new Date(date) } })
        .then(fixtures => {


            // console.log(fixtures);

            res.status(200).json(fixtures);



        })
        .catch(err => {

            res.status(404).json({
                message: "No today games"

            });


        })



}

exports.postFixtures = (req, res, next) => {


    var todayDate = new Date().toISOString().slice(0, 10);
    console.log(todayDate);

    console.log("getting games");
    try {
        var options = {
            method: 'GET',
            url: api.AllFixtures,
            params: { date: todayDate },
            headers: api.headers
        };

        axios.request(options).then(async function (response) {


            for (let i = 0; i < response.data.response.length; i++) {
                // for (let i = 0; i < 5; i++) {
                // console.log(response.data.response[i]);
                const jsonString = JSON.stringify(response.data.response[i]);

                const jsonObject = JSON.parse(jsonString);
                const fixture = new Fixture(jsonObject);
                fixture.save()
                    .then(result => {
                        console.log(result);
                        console.log("Fixture added");

                    })
                    .catch(err => {
                        console.log("Error occured adding the games");
                        console.log(err);
                    })



                // const result = await fixtures.insertOne(jsonObject);
                // console.log(
                //     `A document was inserted with the _id: ${result.insertedId}`,
                // );

            }





        }).catch(function (error) {
            console.error(error);
        });



    } finally {
        // Ensures that the client will close when you finish/error
        console.log("Client closing");
        // await client.close();
        // setTimeout(() => {
        //     process.kill(process.pid);
        // }, 60000);





    }




}