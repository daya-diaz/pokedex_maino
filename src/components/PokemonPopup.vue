<template>
  <div class="popup-container">
    <div class="left-side">
      <img :src="pokemon_info.imgSrc" alt="">
    </div>
    <div class="right-side">
      <h2>{{ pokemon_info.name }}</h2>
      <DetailsPokemons title="Habilidades">
        <div class="details-content">
          <p v-for="(hab, index) in pokemon_info.abilities" :key="index">{{ hab.ability.name }}</p>
        </div>
      </DetailsPokemons>

      <DetailsPokemons title="Sprites">
        <div id="sprites-content">
          <div v-for="(sprite, index) in pokemon_info.sprites" :key="index">
            <img :src="sprite" alt="">
          </div>
        </div>
      </DetailsPokemons>

      <DetailsPokemons title="Game índices">
        <div class="details-content">
          <p v-for="(gameIndexPokemon, index) in pokemon_info.gameIndices" :key="index">
          {{ gameIndexPokemon.version.name }}</p>
        </div>
      </DetailsPokemons>

      <DetailsPokemons title="Ataques">
        <div class="details-content">
          <p v-for="(move, index) in pokemon_info.attacks" :key="index">
          {{ move.name}}
          </p>
        </div>
      </DetailsPokemons>
    </div>
  </div>
</template>
<script>
import DetailsPokemons from './DetailsPokemons.vue';

export default {
  name: 'PokemonPopup',
  props: {
    pokemon_info: []
  },
  components: {
    DetailsPokemons
  },
}
</script>
<style>
.popup-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
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
    overflow: auto;


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