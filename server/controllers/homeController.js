const { response } = require('express');
const pool = require('../config/connectingDb');

exports.sendMessage = async function (req,res){
    pool.query(`INSERT INTO contactMessage VALUES
    (DEFAULT, '${req.body.name}', '${req.body.email}', '${req.body.message}')`, (error, result) => {
        if (error) throw error;
        else {
            res.json({success:true})
        }
    })
}

exports.getPhotoSlider = async function(req,res){
    pool.query(`SELECT photo from animal`, (error, result) =>{
        if(error) throw error;
        else {
            var allPhotos = res.data;
            // console.log(result.rows);


            res.json({success:true})
        }
    })
}