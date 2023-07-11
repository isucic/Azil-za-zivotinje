const pool = require('../config/connectingDb');

exports.getDonations = async function (req,res) {
    pool.query(`SELECT * FROM donation`, (error,result) => {
        if(error){
            throw error;
        }
        else {
            res.json(result.rows)
        }
    })
}

exports.changeDonationCategory = async function (req,res){
    id = req.params.id;
    category = req.body.category;

    pool.query(`UPDATE donation 
                SET category='${category}' 
                WHERE id=${id}`, (error, result) => {
                    if(error)
                        throw error;
                    else {
                        res.json({success:true})
                    }
                })
}

exports.copyToRequest = async function (req,res){

    category = req.body.category;
    type = req.body.type;
    value = req.body.value;
    details = req.body.details;

    pool.query(`INSERT INTO donation (category,"type","value",details) VALUES (
        '${category}',
        '${type}',
        '${value}',
        '${details}'
    )`, (error, result) => {
        if(error)
            throw error;
        else {
            res.json({success:true})
        }
    })
}

exports.getType = async function (req,res){
    pool.query(`SELECT * FROM typeDonation`, (error, result) => {
        if(error) throw error;
        else {
            res.json(result.rows)
        }
    }
    )
}

exports.deleteDonation = async function (req,res){
    pool.query(`DELETE FROM donation WHERE id=${req.params.id}`, (error,result) => {
        if(error) throw error;
        else {
            res.json({success:true})
        }
    })
}