<template>
  <div>
    <Head />
    <nuxt />
    <Foot />
  </div>
</template>

<script>
  import Head from "../components/NavBar.vue"
  import Foot from "../components/Footer.vue"

  export default{
    components: {
      Head,
      Foot

    }
  }



</script>