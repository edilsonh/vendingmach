const app = ("../../index");
const request = require("supertest");
const db = require("../../models");
const Item = db.item;
const Customer = db.customer;

describe('Customer router', () => {
  describe('POST /api/customer/items/:itemid/purchase - buy item', () => {
    it('has successful status code', () => {
        return request(app)
        .post("/api/customer/items/1/purchase")
        .then((res) => {
          expect(res).toBe("")
        });

        it("reduces the item quantity by one", () => {
          return Item,create({ description: "yay", quantity: 2, cost: 20})
          .then((item) => {
            Customer.create({ money: 50 })
            .then((customer) => {
              request (app)
              .post(`/customer/items/${item.id}/purchases`)
              .then(res => {
                Item.findById(item.id).then(updatedItem =>{
                  expect(updatedItem.quantity).toBe(item.quantity - 1);
                })
              })
            })
          })
        })

        it("respond with status success when customers can purchase items", () => {
          return Item.create({ description: "yay", quantity: 5, cost: 20})
          .then((item) => {
            Customer.create({ money: 50})
            .then ((customer) => {
              request(app)
              .post(`/customer/items/${item.id}/purchases`)
              .then(res = {
                expect(res.body.status).toBe("success")
              })
            })
          })
        });

        it("responds with status fail when customer has too little money", () => {
          return Item.create({ description: "yay", quantity: 5, cost 20})
          .then((item) => {
            Customer.create({ money: 5})
            .then((customer) => {
              request(app)
              .post(`/customer/items/${item.id}/purchases`)
              .then(res = {
                expect(res.body.status).toBe("fail");
              })
            })
          })
        })

      it("respnds with status: fail when item quantity is zero", () => {
        return Item.create({ description: "yay", quantity: 0, cost: 20})
        .then((item) => {
          Customer.create({ money: 50})
          .then((customer) => {
            request(app)
            .post(`/customer/items/${item.id}/purchases`)
            .then(res = {
              expect(res.body.status).toBe("fail");
            })
          })
        })
      })

      it("reduces the customer money by item cost", () => {
        return Item.create({ description: "yay", quantity: 2, cost: 20})
        .then((item) => {
          Customer.create({ money: 50 })
          .then((customer) => {
            request(app)
            .post(`/customer/items/${item.id}/purchases`)
            .then(res => {
              Customer.findById(customer.id).then(updatedCustomer => {
                expect(updatedCustomer.money).toBe(customer.money -
                item.cost)
              })
            })
          })
        })
      })

    });
  })
})
