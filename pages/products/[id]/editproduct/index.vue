<template>
    <section class="bg-white ">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16 ">
        <h2 class="mb-4 text-2xl font-bold py-4 text-gray-700 ">Update this product</h2>
        <form @submit.prevent="updateProduct(id)">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-lg   
                text-gray-700 font-semibold">Product Name</label>
                <input type="text" name="name" id="name" class="bg-gray-50
                border border-purple-100  text-lg rounded-lg 
                    block w-full p-2.5  
                text-gray-700 font-medium 
                " placeholder="Type product name" v-model="productName" required>
            </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-lg  
                   text-gray-700 font-semibold">Category</label>
                  <input type="text" name="brand" id="brand" class="bg-gray-50 border
                   border-purple-100  text-lg rounded-lg 
                     block w-full p-2.5 text-gray-700 font-medium "
                      placeholder="Product Category" v-model="productCategory" required>
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-lg  
                   text-gray-700 font-semibold">Price</label>
                  <input type="number" name="price" id="price" class="bg-gray-50 
                  border border-purple-100  text-lg rounded-lg  
                    block w-full p-2.5 text-gray-700 font-medium  " 
                    placeholder="$2999" v-model="price" required>
              </div>
             
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 
                  text-gray-700 text-lg font-semibold">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-lg bg-gray-50
                    rounded-lg border border-purple-100 text-gray-700 font-medium" 
                    placeholder="Your description here" v-model="productDescription"></textarea>
              </div>
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-lg   
                  text-gray-700 font-semibold">Image URL</label>
                  <input type="text" name="name" id="name" class="bg-gray-50
                   border border-purple-100  text-lg rounded-lg 
                    block w-full p-2.5 text-gray-700 font-medium 
                 " placeholder="Add your image url" v-model="imageURL" >
              </div>
          </div>
          <div class="flex gap-x-3">
            <button  class=" btn inline-flex items-center px-6 py-1.5
           mt-4 sm:mt-6 text-lg  text-center text-white bg-primary-700
            rounded-lg hover:bg-primary-800" >
              Update  
          </button>
          <button @click="deleteProduct(id)"  class=" p-2 px-6 bg-red-500
           hover:bg-red-600 inline-flex items-center py-1.5
           mt-4 sm:mt-6 text-lg  text-center text-white bg-primary-700
            rounded-lg hover:bg-primary-800" >
              Delete  
          </button>
         
          </div>
      </form>
      
  </div>
</section>
</template>

<script setup>
const {id}=useRoute().params
const router = useRouter()
let productName=''
let productCategory=''
let price=''
let productDescription=''
let imageURL=''

let deleteProduct= async (id) => {
    await useFetch('https://654e4e21cbc325355742b673.mockapi.io/Products/'+id ,{
            method:"DELETE"
        }) 
    router.back() 
}

let updateProduct= async (id) => {

    await useFetch('https://654e4e21cbc325355742b673.mockapi.io/Products/'+id ,{
            method:"PUT",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(
                {
                    title: productName,
                    price: price,
                    description: productDescription,
                    image: imageURL,
                    category: productCategory
                }
            )       
        }) 
    router.push({ path: "/admin" })

}
</script>