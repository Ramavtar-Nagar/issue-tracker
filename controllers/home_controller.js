const Project = require('../models/project');
module.exports.home = async function(req, res){
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issues Tracker | Home',
      projects,
    });
  } catch (error) {
    console.log('Error :  ', error);
    return;
  }
};