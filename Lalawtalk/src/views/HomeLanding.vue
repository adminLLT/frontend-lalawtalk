
<template>
    <component :is="currentTab" ></component>
    <div>
<h1>hello madafak</h1>
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