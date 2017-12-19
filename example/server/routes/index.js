exports.index = function(req, res){
  console.log(req.body);
  res.send({ title: 'Express 3.' });
};