<script context="module" lang="ts">
</script>

<section>
  <!-- <div class="background-images">
    <img src="/daaag.svg" alt="abstract dog" />
  </div> -->
  <div class="footer">
    <h3>information</h3>
    <div class="links">
      <a href="/">Ludwig Aspegrén</a>
      <a href="mailto:me@ludwigaspegren.se">me@ludwigaspegren.se</a>
    </div>
  </div>
</section>

<style>
  /* .background-images {
    position: fixed;
    bottom: 0;
    display: flex;
    height: 150px;
    z-index: 2;
  } */
  section {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
  .footer {
    position: fixed;
    bottom: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    z-index: 1;
    height: 150px;
    width: 100vw;
    background-color: rgb(240, 240, 240);
  }
  .links {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 2rem;
  }
  h3 {
    text-align: center;
    margin-top: 0;
    font-weight: 600;
  }

  /* img {
    z-index: 3;
    transform: scale(0.7);
    opacity: 0.1;
  } */
</style>
