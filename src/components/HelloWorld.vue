<template>
  <section>
    <link href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap" rel="stylesheet">
    <title-component></title-component>

    <div class="description">
      <i class="fas fa-terminal"></i>
      <span v-text="profileData.profile.about"></span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from '../resume-data';
import TitleComponent from './TitleComponent.vue';


@Component({
  name: 'HelloWorld',
  components: {
    TitleComponent,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      profileData: data,
    };
  },
})

export default class HelloWorld extends Vue {

}

</script>

<style scoped>
  section {
    margin: 3rem auto
  }
  .description {
    animation: appearance 2s 2s forwards;
    opacity: 0;
    margin-top: 2rem;
    line-height: 2.5rem;
    color: var(--secondary-color);
    font-size: 18px;
    padding: 0 8rem 0 4rem;
    text-align: justify;
  }
  .description i {
    padding-right: 1.5rem
  }

</style>
