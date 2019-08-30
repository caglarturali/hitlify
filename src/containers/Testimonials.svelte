<script>
  import dummy from "../data/dummy.json";

  let randomIndex = Math.floor(Math.random() * dummy.length);
  let randomTestimonial = dummy[randomIndex];
</script>

<style>
  .testimonial {
    font-family: "Lobster Two", cursive;
    font-size: 1.5rem;
    margin: 1rem;
  }
  .user {
    margin: 1rem;
  }
</style>

<div class="tile is-child box">
  <div class="has-text-centered">
    <p class="testimonial">“{randomTestimonial.message}”</p>
    <p class="user">- {randomTestimonial.user}</p>
  </div>
</div>
