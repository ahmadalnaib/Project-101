<template>
  <header class="w-full text-sm ">
<div class="fixed top-0 left-0 w-full h-16 bg-white">
  <div class="flex flex-nowrop h-full border-b border-solid border-gray-200 px-8 mx-auto">
  <a href="/"  class="flex h-full items-center text-xl ">{{ company }}</a>
  <nav class="ml-12  h-full">
    <ul class="flex h-full list-none">
     
      <li v-for="item in menuItems" :key="item" class="h-full ml-9 first:ml-0">
       <a href="#" class="flex h-full items-center py-2.5">{{ item }}</a>
      </li>

    

    </ul>
    
  </nav>
  <div class="ml-auto flex h-full items-center">
  <ActionButton/>
  </div>

  </div>

</div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
export default{
  name: 'MainNav',
  components:{
    ActionButton
  },
  data(){
    return{
    company: 'Dundung',
    url: 'https://www.dundung.com',
    menuItems:[
      "Teams",
      "Locations",
      "Life of Dundung",
      "How we hire",
      "Students",
      "Jobs"
    ]
    }
  },
}
</script>