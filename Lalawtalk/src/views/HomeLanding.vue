
<template>
    <component :is="currentTab" ></component>
    <div>
        <div class="container">
          <h1 class="text-center" style="color: #FBD653; font-size: 84px; font-family: Inter; font-weight: 700; line-height: 16.71px; word-wrap: break-word">
            LALAWTALK
          </h1>
        </div>
    </div>
</template>

<script>
import  NavBar from '../components/NavBar.vue'
export default {
    components: {
    NavBar,
   
  },
  data() {
    return {
      currentTab: 'NavBar',
    
    }
    
}
}
</script>

<style lang="scss" scoped>

</style>