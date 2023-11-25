import { defineStore } from "pinia";


export const useCartStore = defineStore("cart", {
  state: () => ({
    productsInCart: {},
    products: [],
    product:[],
  }),
        
  
  actions: {
    
     async fetchProducts() {  
            let {data} = await useFetch('https://654e4e21cbc325355742b673.mockapi.io/Products/')
            this.products = data;

        },
        async fetchProductById(id) {
                  const {data}= 
            await useFetch('https://654e4e21cbc325355742b673.mockapi.io/Products/'+id ,{key:id})
            this.product = data;
        },
    add(productId) {
      if (this.productsInCart.hasOwnProperty(productId)) {
        this.productsInCart[productId] = {
          productId,
          quantity: this.productsInCart[productId].quantity + 1,
        };
      } else {
        this.productsInCart[productId] = {
          productId,
          quantity: 1,
        };
      }
    },
    remove(productId) {
      if (!this.productsInCart[productId]) {
        return;
      }
      this.productsInCart[productId].quantity -= 1;

      if (this.productsInCart[productId].quantity === 0) {
        delete this.productsInCart[productId];
      }
    },
    removeProduct(productId) {
      delete this.productsInCart[productId];
    },
   
  },

  getters: {
   
    formattedCart(state) {
        return Object.keys(this.productsInCart).map((productId) => {
        const product = this.productsInCart[productId];

        return {
          id: product.productId,
          image: this.products.find(p => p.id === product.productId).image,
          name: this.products.find(p => p.id === product.productId).title,
          price: this.products.find(p => p.id === product.productId).price,
          quantity: product.quantity,
          cost:
           parseFloat( product.quantity *
            this.products.find(p => p.id === product.productId).price).toFixed(2),
        };
      });
     
    },
    
    total() {
      return Object.keys(this.productsInCart).reduce((acc, id) => {
        let sum=acc,index=0
        const product = Object.keys(this.products).map(p =>{
          index=this.products[p].id == id?p:0    
        })? this.products[index]:{}
        if (product) {
          return parseFloat(sum + product.price * this.productsInCart[id].quantity).toFixed(2);
        }
        return parseFloat(sum.toFixed(2));

      }, 0);
    },
    productsTotal() {
      return Object.keys(this.productsInCart).reduce((acc, id) => {
        return acc + this.productsInCart[id].quantity;
      }, 0);
    },
  },
});

