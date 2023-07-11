const pool = require('../config/connectingDb');

exports.getAnimals = async function (req,res) {
    pool.query(`SELECT * FROM  animal `, (error,result) => {
        if(error){
            throw error;
        }
        else {
            res.json(result.rows)
        }
    })
}

exports.updateAdoptedAnimal = async function(req,res){
    id = req.params.id;
    adopted = req.body.adopted;

    pool.query(`UPDATE animal
                SET adopted = ${adopted}
                WHERE id = ${id}`, (error, result) => {
                    if(error)
                        throw error;
                    else {
                        res.json({success: true})
                    }
                })
}

exports.updateAnimal = async function (req,res) {
    
    var name = req.body.name;
    var age = req.body.age;
    var kind = req.body.kind;
    var adopted = req.body.adopted;
    var checkup = req.body.checkup;
    var chip = req.body.chip;
    var description = req.body.description;

    var sqlQuery = 'UPDATE animal SET';
    var conditions = [];

    if(name){
        conditions.push(`name = '${name}'`)
    }
    if(age){
        conditions.push(`age = ${age}`)
    }
    if(kind){
        conditions.push(`kind = '${kind}'`)
    }
    if(adopted != undefined){
        conditions.push(`adopted = ${adopted}`)
    }
    if(checkup){
        conditions.push(`checkup = '${checkup}'`)
    }
    if(chip != undefined){
        conditions.push(`chip = ${chip}`)
    }
    if(description){
        conditions.push(`description = '${description}'`)
    }

    sqlQuery += ' ' + conditions.join(', ') + ' WHERE id= ' + req.params.id + ';'
    // console.log(sqlQuery);

    pool.query(sqlQuery, (error, result) => {
        if(error) throw error;
        else {
            res.json({success:true})
        }
    })
}

exports.getAnimalKind = async function(req,res){
    pool.query(`SELECT * FROM vrstaZivotinja`, (error, result) => {
        if(error)
            throw error;
        else {
            res.json(result.rows);
        }
    })
}

exports.postAnimal = async function(req,res){

    var adopted = false;

    var name = req.body.name;
    var age = req.body.age;
    var kind = req.body.kind;
    var checkup = req.body.checkup;
    var chip = req.body.chip;
    var description = req.body.description;
    var photo = req.body.photo;

    pool.query(`INSERT INTO animal (name,kind,chip,age,checkup,description,adopted,photo) VALUES 
    ('${name}', 
     '${kind}', 
      ${chip}, 
      ${age},
     '${checkup}', 
     '${description}', 
     ${adopted},
     '${photo}')`, (error, result) => {
        if(error) throw error;
        else {
            res.json({success:true});
        }
     })
}