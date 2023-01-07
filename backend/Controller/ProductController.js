const ProductModel = require("../Model/ProductsModel");

//--------------Send Data to Database----------

const sendProduct = async (req, res) => {
  try {
    let { title, disc, price, image } = await req.body;
    const productData = new ProductModel({
      title,
      disc,
      price,
      image,
    });
    productData
      .save()
      .then((response) => {
        res.status(200).send({
          data: response,
          message: "Data save successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message,
        });
      });
  } catch (error) {
    return res.send(error.message);
  }
};

//-------Get all Data from Database-------

const getProduct = async (req, res) => {
  try {
    await ProductModel.find({}, (err, data) => {
      if (err) {
        res.send(err).status(400);
      } else {
        
        res.send({ data }).status(200);
      }
    }).clone();
  } catch (error) {
    return res.json(error.message);
  }
};

//----------get by id---------

const getProductByID = async (req, res) => {
  try {
    let id = req.params.id;
    await ProductModel.find({ _id: id }, (err, data) => {
      if (err) {
        res.send(err).status(404);
      } else {
        res.send(data).status(200);
      }
    })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    return res.status(401).send({ success: false, message: error.message });
  }
};
//--------Update Product----------

const updateProduct = async (req, res) => {
  try {
    let { title, disc, price, id } = await req.body;
    const updateProduct1 = {};
    if (title) {
      updateProduct1.title = title;
    }
    if (disc) {
      updateProduct1.disc = disc;
    }
    if (price) {
      updateProduct1.price = price;
    }
    if (id) {
      updateProduct1.id = id;
    }

    let product = await ProductModel.findById(req.params.id)
      .clone()
      .catch((err) => {
        console.log(err);
      });
    if (!product) {
      return res.status(404).send("post Not Found");
    }

    product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateProduct1 },
      { new: true }
    );
    res.send("Updation Successfull");
  } catch (error) {
    return res.status(401).send({ success: false, message: error.message });
  }
};

//----------Delete Product----------

const deleteProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.json("Not found").status(404);
    }
    product = await ProductModel.findByIdAndDelete(req.params.id);
    res.send("Delete Successfully").status(200);
  } catch (error) {
    return res.json({ success: false, message: error.message }).status(401);
  }
};

module.exports = {
  sendProduct,
  getProduct,
  getProductByID,
  updateProduct,
  deleteProduct,
};
