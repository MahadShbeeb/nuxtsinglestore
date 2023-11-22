<template>
  <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" >
<NuxtLink to="/admin/addproduct">
    <div class="w-72 bg-gray-300 shadow-md rounded-xl duration-500 hover:scale-105
    hover:shadow-xl">
   <div class=" text-gray-50 text-center m-auto relative flex justify-center py-24">
     <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
   </div>
    </div>  
   </NuxtLink>
  <div v-for="product in cartStore.products" :key="product.id">
      
      <AdminProductCard :product='product'/>

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


// cartStore.getProducts();
// const products=cartStore.products;
</script>