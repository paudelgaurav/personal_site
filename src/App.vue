<template>
  <div class="font-mont lg:flex lg:items-center lg:justify-between bg-black text-gray-300 sticky top-0 z-10 shadow-sm lg:px-32 pt-6 pb-4">
    <div class="lg:pl-24 px-2 w-full flex justify-between items-center">
        <span></span>
        <div class="block lg:hidden">
          <button @click="isOpen = !isOpen" type="button" class="mr-6 hover:text-gray-700 focus:outline-none focus:text-gray-700" aria-label="toggle menu">
              <svg class="w-6 h-6 text-gray-400 focus:outline-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path v-if="!isOpen" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                </path>
                <path v-if="isOpen" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                </path>
              </svg>
            </button>
        </div>
    </div>
      <div :class="isOpen? 'block':'hidden'" class="lg:flex uppercase lg:space-x-10 text-lg w-full items-center shadow-md lg:shadow-none">
        <router-link to="/" class="block py-2 px-3 lg:py-0 lg:px-0 hover:text-gray-500 focus:outline-none transition ease-out duration-500">HOME</router-link>
        <router-link :to="{ name:'About' }" class="block py-2 px-3 lg:py-0 lg:px-0 hover:text-gray-500 focus:outline-none transition ease-out duration-500">ABOUT ME</router-link>
        <router-link :to="{ name:'Project' }" class="block py-2 px-3 lg:py-0 lg:px-0 hover:text-gray-500 focus:outline-none transition ease-out duration-500">PROJECT</router-link>
        <router-link :to="{ name:'Contact' }" class="block py-2 px-3 lg:py-0 lg:px-0 hover:text-gray-500 focus:outline-none transition ease-out duration-500">Contact</router-link>
    </div>
    <span></span>
  </div>
  <router-view/>
</template>

<script>
export default {
  watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'Gaurav Paudel'
      }
    },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>


<style src='./assets/css/app.css' />


