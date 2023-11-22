<script setup>
const {product}=defineProps(['product'])


</script>


<template>

    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <NuxtLink :to="  `/products/${product.id}`  ">
            <img :src="product.image"
                    alt="Product" class="img-style object-cover rounded-t-xl" />
            <div class="px-4 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$ {{ product.price }}</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    
                </div>
            </div>
            
        </NuxtLink>

<div class=" text-center space-x-3 py-8">              
<NuxtLink :to="  `/products/${product.id}/editproduct`  "
class="relative  items-center justify-center 
p-4 px-10 py-2 overflow-hidden font-medium text-purple-500
border-2 border-purple-500 text-md rounded-full shadow-md group
hover:text-purple-600  hover:border-purple-600 ">
Edit
</NuxtLink>

<!-- <button @click="deleteProduct(product.id)"
  class="mb-2 inline-block rounded-full text-center text-lg align-middle p-3 
  border-2 border-red-400 text-red-400 active:shadow-lg">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>
</button> -->
    </div>
    </div>

</template>


<style scoped>
.img-style{
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>