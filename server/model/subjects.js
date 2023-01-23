const db = require("./db");
const creatTabeles = async () => {
  try {
    await db.query(`
    create type subject_type as enum ('Python' ,'Docker','Java','Javascript' ,'Mongo' ,'SQL','React');
    create type level as enum ('hard' ,'mediun','easy');
    
    create TABLE  "subjects" 
        (
        subject_id SERIAL PRIMARY KEY ,
            level level,
           subject subject_type,
           rating NUMERIC(2,1) check(rating >=0.0 and rating<=10.0 )
      )`);
    console.log("todo Table created");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { creatTabeles };
