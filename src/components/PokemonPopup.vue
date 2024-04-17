<template>
  <div class="popup-container">
    <div class="left-side">
      <img src="../assets/pokemonPopup.png" alt="">
    </div>
    <div class="right-side">
      <h2>Charzard</h2>
      <DetailsPokemons title="Habilidades">
        <div id="details-content">
          <p>Overgrow</p>
          <p>Chlorophyll</p>
        </div>
      </DetailsPokemons>
      
    </div>
  </div>
</template>
<script>
import DetailsPokemons from './DetailsPokemons.vue';

export default {
  name: 'PokemonPopup',
  components: {
    DetailsPokemons
  }
}
</script>
<style>
.popup-container {
  display: flex;
  height: 100%;
  .left-side {
    width: 320px;
    height: 320px;
    background-color: #F5DB13;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 300px;
      height: 300px;
    }
  }

  .right-side {
    height: 320px;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 430px;
    padding: 1rem 1rem;
    background-color: #c3ad06;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: white;
      padding-bottom: .5rem;
    }
  }
}
</style>