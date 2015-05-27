class Order {
  getRecentOrders() {
    return require('../../staticOrderData');
  }
};

module.exports = new Order();
