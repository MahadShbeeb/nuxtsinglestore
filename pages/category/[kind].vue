<template>
 <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" >   
        <div v-for="product in products">
      
      <ProductCard :product='product'/>

     </div>
    </div>
</template>

<script  setup>
const {kind}=useRoute().params
const url='https://fakestoreapi.com/products/category/'+kind

const {data:products}= await useFetch(url,{key:kind})
definePageMeta({
    layout:'products'
})
</script>