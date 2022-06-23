<template>
  <div
    class="font-mont bg-gray-900 flex flex-col  pt-10 pb-12 lg:py-16 w-full border-b border-black tracking-wider overflow-hidden">
    <h1 class="text-3xl lg:text-4xl text-gray-300 text-center">About Me</h1>
    <p class="text-gray-400 px-10 lg:px-60 pt-8 lg:pt-14">
      Hi, I'm Gaurav Paudel. I'm working as a full-stack developer for reputed IT firm in Nepal. I'm an amid admirer of
      technology and love geeking out in web trends, linux distros.
    </p>
    <p class="text-gray-400 px-10 lg:px-60 pt-4 lg:pt-8">
      I love making web-apps with fast, dynamic, responsive and smooth experience. My favoutite stack is Django, Vue,
      PostgreSQL and Tailwind.
    </p>

    <div class="px-10 lg:px-60 text-left py-10 lg:py-14 text-gray-400">
      <h2 class="text-gray-300 text-2xl font-semibold">Skills</h2>
      <h3 class="text-xl pt-8">Framework</h3>
      <div class="flex flex-wrap  px-4 space-x-4 lg:space-x-10 pt-2">
        <h4 v-for="i in frameworks" :key="i">{{ i }}</h4>
      </div>
      <h3 class="text-xl pt-8">Languages</h3>
      <div class="flex flex-wrap px-4 space-x-4 lg:space-x-10 pt-2">
        <h4 v-for="i in Languages" :key="i">{{ i }}</h4>
      </div>
      <h3 class="text-xl pt-8">Tools</h3>
      <div class="flex flex-wrap px-4 space-x-4 lg:space-x-10 pt-2">
        <h4 v-for="i in Tools" :key="i">{{ i }}</h4>
      </div>
    </div>
    <a href="https://pdfhost.io/v/RWB~1NVSe_my_resumepdf.pdf" target="_blank"
      class="text-center text-gray-400 text-lg lg:text-xl underline hover:text-gray-200 transition ease-out duration-500">Resume</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frameworks: [
        'Django', 'Vue', 'Tailwind', 'Alpine'
      ],
      Languages: [
        'Python', 'Javascript'
      ],
      Tools: [
        'Browser Dev Tools', 'VSCode', 'Linux(Arch)', 'KDE'
      ]
    }
  }
}
</script>