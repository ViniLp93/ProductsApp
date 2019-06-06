const Product = require('../models/product.model');
exports.test = function(req, res){
    res.send("Greeting from the Test controller");
};
exports.product_create = function (req, res) {//CREATE
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
};

exports.product_details = function (req, res) {//READ
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {//UPDATE
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//req.body.name = campo enviado na requisi��o em formul�rio, json, etc
//req.params.id = campo enviado na url e especificado na rota