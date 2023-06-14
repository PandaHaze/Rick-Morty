<template>
  <v-card>

    <v-app-bar app class="vapp">
      <v-app-bar-nav-icon color="black" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <h1 class="ml-3">Rick & Morty</h1>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary align-center src="https://i.pinimg.com/564x/f9/b8/ee/f9b8ee4b0402040158ac41f6e36f7b8d.jpg">
      <v-divider></v-divider>
      <v-list class="mt-4 text-center"  >
        <v-list-item to="/pagina">
          <v-list-item-icon>
            <v-icon color="#212121">mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title >Pagina Principal</v-list-item-title>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon color="#212121">mdi-account-star-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Personajes</v-list-item-title>
        </v-list-item>
        <v-list-item to="/episodios">
          <v-list-item-icon>
            <v-icon color="#212121">mdi-monitor-eye</v-icon>
          </v-list-item-icon>
          <v-list-item-title >Episodios</v-list-item-title>
        </v-list-item>
        <v-list-item to="/locations">
          <v-list-item-icon>
            <v-icon color="#212121" >mdi-map-marker-radius-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Locations</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    }
  },
}
</script>

<style>
.vapp{
background: linear-gradient(45deg, #76FF03, #EEFF41, #76FF03, 
#EEFF41); height: 100vh; width: 100%;
}
</style>