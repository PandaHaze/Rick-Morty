<template>
  <div class="container">
    <div class="centered">
      <v-progress-circular 
        indeterminate
        color="#00C853"
        :size="70"
        :width="7"
      ></v-progress-circular>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta la altura según tus necesidades */
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>