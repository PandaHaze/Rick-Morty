<template>
 <v-app>
<NavBar></NavBar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components:{NavBar}
};
</script>

<style>
*{ 
  font-family: 'Philosopher', sans-serif;
}
</style>
