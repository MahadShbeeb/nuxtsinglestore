<template>
 

  <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" >
    
  <div v-for="product in cartStore.products" :key="product.id">
 

      <ProductCard :product='product'/>

    </div>
  </div>
</template>


<script setup>


definePageMeta({
    layout:'products'
})
import { useCartStore } from '../store/cart.js';
const cartStore = useCartStore();
await cartStore.fetchProducts()

// const {data : products}= await useFetch('https://654e4e21cbc325355742b673.mockapi.io/Products/')
// const products= await cartStore.fetchProducts()
//const products=cartStore.products;

</script>