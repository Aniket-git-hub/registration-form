<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:8080/">
        <h1 class="title is-4">Student Registration Form</h1>
      </a>

      <a
        role="button"
        :class="'navbar-burger' + (isActive ? ' is-active' : '')"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="'navbar-menu' + (isActive ? 'is-active' : '')">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> Addmission From </router-link>
        <router-link class="navbar-item" to="/notice">
          Notification
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>SignOut</strong>
            </a>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>