<template>
  <section class="section">
    <h1 class="subtitle is-5">Notifications</h1>
    <div class="notification is-danger">
      <button class="delete"></button>
      Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
      dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
      porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
      gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </div>
    <article class="message is-success">
      <div class="message-header">
        <p>Success</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
    <article class="message">
      <div class="message-header">
        <p>Normal message</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla.Nullam gravida purus diam, et dictum
        <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in
        mollis lectus.
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "notice",
};
</script>

<style>
</style>