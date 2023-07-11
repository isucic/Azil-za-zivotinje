const pool = require('../config/connectingDb');

exports.getPosts = async function (req,res){
    pool.query(`SELECT * FROM post`, (error,result) => {
        if(error){
            throw error;
        }
        else {
            res.json(result.rows)
        }
    })
}

exports.addPost = async function(req,res){
    novaOb = req.body;

    title = novaOb.naslov;
    description = novaOb.tekst;
    importance = novaOb.vazno;
    date = novaOb.datum;

    // console.log(novaOb);
    // console.log(title);
    // console.log(description);
    // console.log(importance);
    // console.log(date);

    pool.query(`INSERT INTO post (title, description, importance, date) VALUES (
        '${title}',
        '${description}',
        '${importance}',
        '${date}'
    )`, (error,result) => {
            if(error){
                throw error;
            }
            else {
                res.json({"correct":true});
            }
        })
}

exports.deletePost = async function (req,res){
    pool.query(`DELETE FROM post WHERE id=${req.params.id}`,
    (error, result) => {
        if(error) throw error;
        else {
            res.json({success:true})
        }
    })
}