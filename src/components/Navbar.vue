<template>
  <v-container>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-spacer />
      <v-btn outlined class="ml-3">
        <router-link style="text-decoration: none; color: inherit;" to="/">
          Main</router-link
        >
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link style="text-decoration: none; color: inherit;" to="/photo">
          Photo</router-link
        >
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>
