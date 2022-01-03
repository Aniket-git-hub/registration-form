<template>
  <section class="section tile is-ancestor">
    <h1 class="subtitle tile is-3">Notifications</h1>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child message is-danger">
              <div class="message-header">
                <p>Very Important </p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu
                et sollicitudin porttitor, tortor urna tempor ligula, id
                porttitor mi magna a neque. Donec dui urna, vehicula et sem
                eget, facilisis sodales sem.
              </div>
            </article>

            <article class="tile is-child notification is-warning">
              <p class="title">Notice</p>
              <p class="subtitle">Important</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Meeting</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Form Filling Starts Today</p>
            <p class="subtitle">Attention</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">PTM is Tomorrow</p>
            <p class="subtitle">Results will be shown</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "notice",
};
</script>

<style>
</style>