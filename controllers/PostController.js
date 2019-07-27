/**
 * Module : PostController
 * Author : Eshant Sahu
 * Date : 27th, Jul, 2019
 */

var methods = {};

/**
 * List Post of customers
 */
methods.list = (req, res) => {

    let list = [{id: 1, text: "I liked the product"}, {id: 2, name:"I want to buy more products"}];
    return res.send(list);

}

module.exports = methods;