<template> 
    <div class="w-auto h-auto block h-screen  bg-purple-50 p-4 flex items-center justify-center" >
    <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-gray-700 mb-12">
            Login 
        </div>
        <form  >
             <div>
                 <input type="username" class="focus:outline-none border-b w-full pb-2
                  border-purple-400 placeholder-gray-500 my-8"
                  v-model="username"  placeholder="User Name "/>
            </div>
            <div class="">
                <input type="password" class="focus:outline-none border-b w-full pb-2
                 border-purple-400 placeholder-gray-500 mb-8" 
                 v-model="password" placeholder="Password " />
            </div>
            <div class="">
    <div class="flex flex-col max-w-sm gap-2 ">

  
</div>

            <div class="flex justify-center my-6">
                <button @click="onSubmit" class=" rounded-full  p-3 w-full sm:w-56 bg-gradient-to-r
                    from-purple-500  to-pink-300 hover:from-purple-600
                    hover:to-pink-400 text-white text-lg font-semibold " >
                    Login  
                </button>
            </div>
            <!-- <div class="flex justify-center ">
                <p class="text-gray-500">Don't have an acount? </p>
                <NuxtLink to="/signup" class="text-purple-400 pl-2">Sign up</NuxtLink>
            </div>  -->
        </div>
    </form>
</div>
</div> 



</template>

<script setup> 

let username='';
let password='';
let dataObj={}

// let onSubmit = async()=>{
//    dataObj=JSON.stringify({ username: "mor_2314",password: "83r5^_" })
//    let data = await useFetch('https://fakestoreapi.com/auth/login',
//    {method:'POST',body:dataObj})       
//}
</script>