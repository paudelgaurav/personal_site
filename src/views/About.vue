<template>
  <div class="font-mont bg-gray-900 flex flex-col  py-10 lg:py-16 w-full border-b border-black tracking-wider">
    <h1 class="text-3xl lg:text-4xl text-gray-300 font-semibold text-center">About Me</h1>
    <p class="text-gray-400 px-10 lg:px-60 pt-8 lg:pt-14" >
       Hi, I'm Gaurav Paudel, full-stack Django developer with a passion for web-design. I'm currently living in Nepal. I'm an amid admirer of technology and loves geeking out in web trends, linux distros.
    </p>
    <p class="text-gray-400 px-10 lg:px-60 pt-4 lg:pt-8" >
       I love making web-apps with fast, dyanamic ,responsive and smooth experience. My favoutite stack is Django, Vuejs, PostgreSQL, Tailwind and Linux.
    </p>
    
    <div class="px-10 lg:px-60 text-left pt-10 lg:pt-14 text-gray-400">
      <h2 class="text-gray-300 text-2xl font-semibold underline">Skills</h2>
      <h3 class="text-xl pt-8">Framework</h3>
      <div class="flex space-x-8 pt-2">
        <h4 v-for="i in frameworks" :key="i">{{i}}</h4>
      </div>
      <h3 class="text-xl pt-8">Languages</h3>
      <div class="flex space-x-8 pt-2">
        <h4 v-for="i in Languages" :key="i">{{i}}</h4>
      </div>
      <h3 class="text-xl pt-8">Tools</h3>
      <div class="flex space-x-8 pt-2">
        <h4 v-for="i in Tools" :key="i">{{i}}</h4>
      </div>
    </div>
    <a href="#" class="text-center text-gray-400 text-lg lg:text-xl pt-6 lg:pt-16 underline hover:text-gray-200 transition ease-out duration-500">Resume</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      frameworks: [
        'Django','DRF', 'Vue', 'Tailwind','Alpine','Bootstrap'
      ],
      Languages: [
        'Python', 'HTML5', 'CSS3', 'Javascript'
      ],
      Tools:[
        'Browser Dev Tools', 'NPM', 'PIP', 'VSCode','Linux(Arch)','KDE'
      ]
    }
  }
}
</script>