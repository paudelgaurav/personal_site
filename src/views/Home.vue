<template>
  <div class="font-mont bg-gray-900 border-b border-black pb-8 w-full h-screen overflow-hidden">
    <div class="flex flex-col-reverse lg:flex-row text-green-700 justify-between items-center lg:items-start">
      <div class="w-full lg:w-1/2 px-14 lg:px-36 pt-12 lg:pt-52 font-semibold tracking-widest text-gray-400">
        <h3 class="text-xl lg:text-3xl"><span class="text-gray-300">Gaurav Paudel</span></h3>
        <h2 class="text-2xl lg:text-4xl mt-8">Full-stack Developer</h2>
      </div>
      <div class="w-full lg:w-1/2 py-10 px-10 lg:px-0">
        <img src="../assets/img/headshot.png" class="">
      </div>
    </div>
  </div>
  <About />
  <Project />
  <Contact />

</template>

<script>
// @ is an alias to /src
import About from './About.vue'
import Project from './Project.vue'
import Contact from './Contact.vue'



export default {
  name: 'Home',
  components: {
    About,
    Project,
    Contact,
  }
}
</script>
