<template>
  <div class="main_section">
    <h1>800 <strong>Pokémons</strong> para você conhecer</h1>
    <form class="form_input">
      <input type="text" placeholder="Pesquise por pokémon...">
    </form>
    <main class="main_container">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </main>
  </div>
</template>
<script>
import PokemonCard from './PokemonCard.vue'

export default {
  name: 'MainComponent',
  components: {
    PokemonCard
  }
}
</script>
<style>
.main_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 3rem 10rem; 

  h1 {
    font-weight: 400;
    width: 100%;
    color: #000;
    text-align: center;
    letter-spacing: 3px;
  }

  form {
    width: 100%;
    input {
      height: 3.3rem;
      width: 100%;
      background-color: #F2F2F2;
      border: 1px solid #ab9700;
      padding-inline: 2rem;
      border-radius: 99px;
      font-size: 1rem;
      color: #212121;

      &:focus {
        outline: 2px solid #ab9700;
      }
    }
  }

  .main_container {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    row-gap: 2rem;

  }
}
</style>