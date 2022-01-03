<template>
  <section class="section">
    <h1 class="title is-2">Looks like you're lost!</h1>
    <div class="columns is-centered is-vcentered">
      <div class="column is-half">
        <figure class="image">
          <img src="../assets/illustrations/404.svg" />
        </figure>
      </div>
    </div>
    <div class="columns is-centered">
    <h2 class="title">let's go <router-link to="/">back</router-link> </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "404error",
};
</script>