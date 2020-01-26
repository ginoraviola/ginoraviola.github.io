<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap" rel="stylesheet">
    <header-component></header-component>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import HeaderComponent from './components/HeaderComponent.vue';

@Component({
  name: 'App',
  components: {
    HeaderComponent,
    HelloWorld,
  },
})
export default class App extends Vue {
}
</script>

<style>
  @import "styles/main.css";
  * {
    margin: 0;
    padding: 0;
    background-color: #151515;
  }
#app {
  font-family: 'Fira Code', monospaced;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #151515;
  margin: 5px;
  width: 100%;
  height: 100%;
}


</style>
