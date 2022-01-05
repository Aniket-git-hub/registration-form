<template>
  <section class="columns section ">
    <div class="column is-half container card">
      <form class="card-content">
        <h1 class="title is-4">Login</h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input 
              class="input" 
              type="text" 
              placeholder="Student Name"
              required
               />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-danger"
              type="email"
              placeholder="Email input"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
          <div class="control">
            <button type="submit" class="button is-link">
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
};
</script>
