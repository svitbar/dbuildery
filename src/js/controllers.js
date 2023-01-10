const db = require('./config');

const sql = {

    createProject: `INSERT INTO PROJECT(NAME, DESCRIPTION) VALUES (?)`,
    
    readProjectList: `SELECT * FROM PROJECT`,
    readProjectById: `SELECT * FROM PROJECT WHERE ID=?`,
    readProjectByName: `SELECT * FROM PROJECT WHERE NAME=?`,
  
    updateProjectById: `UPDATE PROJECT SET NAME=?, DESCRIPTION=? WHERE ID=?`,
  
    deleteProjectById: `DELETE FROM PROJECT WHERE ID=?`
  
}

const getAllProjects = (req, res) => {

    db.query(sql.readProjectList, (err, results) => {

        if(err) return res.status(500).send({
                status: 500,
                error: `${err.toString()}`
            });

        return res.status(200).send(results);
    });

};

const getProjectById = (req, res) => {

    db.query(sql.readProjectById, [req.params.id], (err, result) => {

        if(err) return res.status(500).send({
                status: 500,
                error: `${err.toString()}`
            });

        if (result.length === 0) return res.status(404).send({
                status: 404,
                error: 'No project with such id'
            });

        return res.status(200).send(result);
    });

};

const createProject = (req, res) => {

    const dataBody = req.body;
    const data = [dataBody.name, dataBody.description]

    if (!data[0]) return res.status(400).send({
        status: 404,
        error: 'Name is required'
    });

    db.query(sql.readProjectByName, [data[0]], (err, result) => {

        if(err) return res.status(500).send({
                status: 500,
                error: `${err.toString()}`
            });

        if (result.length !== 0) return res.status(406).send({
                status: 406,
                error: 'There is already project with such name'
            });
  
            db.query(sql.createProject, [data], (error, row) => {

            if(error) return res.status(500).send({
                    status: 500,
                    error: `${err.toString()}`
                });

            return res.status(200).send(row);
        });
    });
};

const updateProject = (req, res) => {

    const dataBody = req.body;
    const data = [dataBody.name, dataBody.description, req.params.id];

    if (!data[0] || !data[1]) return res.status(400).send({
        status: 404,
        error: 'Name and description are required'
    });

    db.query(sql.readProjectById, [req.params.id], (err, result) => { 

        if(err) return res.status(500).send({
            status: 500,
            error: `${err.toString()}`
        });

        if (result.length === 0) return res.status(404).send({
            status: 404,
            error: 'No project with such id'
        });  

        db.query(sql.updateProjectById, data, (error, row) => {

            if(error) return res.status(500).send({
                    status: 500,
                    error: `${error.toString()}`
                });

            return res.status(200).send(row);
        });
    });
};

const deleteProject = (req, res) => {

    db.query(sql.readProjectById, [req.params.id], (err, result) => {

        if(err) return res.status(500).send({
                status: 500,
                error: `${err.toString()}`
            });

        if (result.length === 0) return res.status(404).send({
                status: 404,
                error: 'No project with such id'
            });

        db.query(sql.deleteProjectById, [req.params.id], (error, row) => {

            if(error) return res.status(500).send({
                    status: 500,
                    error: `${error.toString()}`
                });
            return res.status(200).send(row);
        });

    });

};

module.exports = {getAllProjects, getProjectById, createProject, updateProject, deleteProject};
