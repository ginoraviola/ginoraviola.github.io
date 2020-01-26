<template>
  <div class="title-container">
    <span>About</span>
    <h2>About me</h2>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
};
</script>

<style scoped>
  .title-container {
    position: relative;
    height: 60px;
    margin: 10rem 0 0 1rem;
    animation: appearance 2s 1s forwards;
    opacity: 0;
  }
  span {
    position: absolute;
    font-weight: bold;
    font-size: 100px;
    color: rgba(0, 0, 0, 0.30);
    left: 3rem;
    bottom: 0;
  }
  h2 {
    color: white;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    font-size: 50px;
    left: 0;
    top: 0;
  }
</style>
