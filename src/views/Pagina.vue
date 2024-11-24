<template>
    <div class="content">  
  </div>

</template>

<script>

export default {
  name: 'Pagina'
}
</script>

<style scoped>


.content {
  background: url('https://images.hdqwalls.com/download/rick-and-morty-hd-art-kz-1366x768.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
}
@media(max-width: 768px){
    .content{
      margin: 0 auto; 
      background-position: center;
      justify-content: space-around;
    }
}
</style>
