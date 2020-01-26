<template>
  <section>
    <header>
      <img src="../assets/profile-pic.jpg">
      <div class="name" v-text="fullName"></div>
    </header>
    <div class="tagline" v-text="profileData.profile.tagline"></div>
    <div class="info">
      <span v-text="profileData.profile.birth_date"></span>
    </div>
  </section>
</template>

<script>
import data from '../resume-data';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      profileData: data,
    };
  },
  computed: {
    fullName() {
      return `${this.profileData.profile.name} ${this.profileData.profile.last_name}`;
    },
  },
};
</script>

<style scoped>
  @import "../styles/main.css";
  header {
    animation: appearance 2s;
    text-align: center;
  }
  .name {
    font-size: 50px;
    background: rgba(0, 0, 0, 0);
    color: var(--primary-color);
    text-align: center;
    position: relative;
  }
  .tagline {
    font-size: 30px;
    text-align: center;
    animation: appearance 3s;
    color: var(--secondary-color);
  }
  .info {
    color: var(--primary-color);
    text-align: center;
    margin: 2rem 0 0 0;
    animation: appearance 5s;
  }
  img {
    width: 230px;
    display: block;
    margin: auto;
    border-radius: 50%;
    animation: shadow-drop-center 0.4s ease-in-out 1s both;
  }

</style>
