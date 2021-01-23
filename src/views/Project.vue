<template>
  <div class="font-mont bg-gray-900 text-gray-300 py-10 lg:py-16 w-full border-b border-black">
    <h1 class="text-3xl lg:text-4xl font-semibold text-center">Project</h1>
    <div class="flex flex-col lg:flex-row items-center pt-8 lg:pt-20">
      <div v-for="p in projects1" :key="p.title" class="w-full lg:w-1/3 px-12 py-8 lg:py-0 overflow-hidden flex flex-col items-center filter-none hover:filter-grayscale transition ease-out duration-500">
        <a :href="p.live_url" target="_blank"><img :src="p.pic_url" /></a>
        <h2 class="text-2xl pt-4 hover:text-gray-500 transition ease-out duration-500"><a :href="p.live_url" target="_blank">{{ p.title }}</a></h2>
        <p class="text-md pt-2">{{ p.description }}</p>
        <p class="flex space-x-8 pt-4">
          <a :href="p.live_url" target="_blank"><svg class="w-5 h-5 text-green-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg></a>
          <a href="p.code_url" target="_blank"><img src="../assets/img/gt.svg" class="h-5 w-5"></a>
        </p>
      </div>       
    </div>
    <!-- seconds-->
    <div class="flex flex-col lg:flex-row items-center pt-8 lg:pt-20">
      <div v-for="p in projects2" :key="p.title" class="w-full lg:w-1/3 px-12 overflow-hidden flex flex-col items-center">
        <a :href="p.live_url" target="_blank"><img :src="p.pic_url" /></a>
        <h2 class="text-2xl pt-4 hover:text-gray-500 transition ease-out duration-500"><a :href="p.live_url" target="_blank">{{ p.title }}</a></h2>
        <p class="text-md pt-2">{{ p.description }}</p>
        <p class="flex space-x-8 pt-4">
          <a :href="p.live_url" target="_blank"><svg class="w-5 h-5 text-green-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg></a>
          <a href="p.code_url" target="_blank"><img src="../assets/img/gt.svg" class="h-5 w-5"></a>
        </p>
      </div>       
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      projects1: [
        {
          title: 'mPasal',
          pic_url: 'https://i.ibb.co/hDcq2DY/mpasal.jpg',
          live_url: 'https://www.mpasal.com/',
          code_url: 'https://github.com/gauravpaudel/mPasal',
          description: 'Worked as a Full-Stack developer.'
        },
        {
          title: 'DJ Vue',
          pic_url: 'https://i.ibb.co/Yfkkfpp/djvue.jpg',
          live_url: 'https://blog.paudelgaurav.com.np/',
          code_url: 'https://github.com/gauravpaudel/blog',
          description: 'Build a blog with Django and Bootstrap4.'

        },
        {
          title: 'Rojgari Clone',
          pic_url: 'https://i.ibb.co/bzL8K9m/rojgari.jpg',
          live_url: 'https://laughing-sammet-202832.netlify.app/',
          code_url: 'https://github.com/gauravpaudel/rojgari-clone',
          description: 'Redesigned rojgar.com with Vuejs and Tailwind.'
        }
      ],
      projects2: [
        {
          title: 'Instagram',
          pic_url: 'https://i.ibb.co/mz28vWp/instagram.jpg',
          live_url: 'https://gauravpaudel.github.io/instagram-design/',
          code_url: 'https://github.com/gauravpaudel/instagram-design',
          description: 'Redesigned instagram frontend with tailwind and alpine.'
        },
        {
          title: 'Insta',
          pic_url: 'djvue.jpg',
          live_url: 'https://github.com/gauravpaudel/instagram_clone',
          code_url: 'https://github.com/gauravpaudel/instagram_clone',
          description: 'Custom made (full stack ) clone with Django.'

        },
        {
          title: 'Portfolio site',
          pic_url: 'rojgari.jpg',
          live_url: 'https://paudelgaurav.com.np/',
          code_url: 'https://github.com/gauravpaudel/rojgari-clone',
          description: 'Fully responsive portfolio site with Vuejs.'
        }
      ]
    }
  }

}
</script>

<style>

</style>