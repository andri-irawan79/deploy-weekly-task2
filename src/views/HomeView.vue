<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
    methods: {
    fetchSection() {
        this.$store.dispatch('getDataSection');
      }
    },
    mounted() {
      this.fetchSection();
    }
  }
</script>
