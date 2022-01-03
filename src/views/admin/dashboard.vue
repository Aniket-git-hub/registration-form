<template>
  <section class="section is-clipped">
    <h1 class="title is-4">Admin Dashboard</h1>
    <h2 class="subtitle is-2">Hello Admin</h2>

    <button class="button is-warning" @click="isActive = !isActive">
      Create Notice
    </button>

    <div :class="'modal ' + (isActive ? ' is-active' : '')">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create Notice</p>
          <button
            class="delete"
            aria-label="close"
            @click="isActive = false"
          ></button>
        </header>
        <section class="modal-card-body ">
          <form class="">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div class="field">
              <label class="label">Priority</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Create</button>
          <button class="button" @click="isActive = false">Cancel</button>
        </footer>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "adminDashboard",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
