<template>
  <div class="popup-container">
    <div class="left-side">
      <img :src="pokemon_info.imgSrc" alt="">
    </div>
    <div class="right-side">
      <h2>{{ pokemon_info.name }}</h2>
      <DetailsPokemons :title="$t('popup.abilitys')">
        <div class="details-content">
          <p v-for="(hab, index) in pokemon_info.abilities" :key="index">{{ hab.ability.name }}</p>
        </div>
      </DetailsPokemons>

      <DetailsPokemons :title="$t('popup.sprites')">
        <div id="sprites-content">
          <div v-for="(sprite, index) in pokemon_info.sprites" :key="index">
            <img :src="sprite" alt="">
          </div>
        </div>
      </DetailsPokemons>

      <DetailsPokemons :title="$t('popup.gameIndices')">
        <div class="details-content">
          <p v-for="(gameIndexPokemon, index) in pokemon_info.gameIndices" :key="index">
            {{ gameIndexPokemon.version.name }}</p>
        </div>
      </DetailsPokemons>

      <DetailsPokemons :title="$t('popup.moves')">
        <div class="details-content">
          <p v-for="move in pokemon_info.attacks" :key="move.name">
            {{ move.name }}

          </p>
        </div>
      </DetailsPokemons>
    </div>
    <button class="close-popup" @click="closePopup">
      <img src="../assets/close-icon.png"
        alt="Botão com fundo branco e um 'X' na cor preta, sua funcionalidade é fechar o Popup do Pokémon.">
    </button>
  </div>
</template>
<script>
import DetailsPokemons from './DetailsPokemons.vue';

export default {
  name: 'PokemonPopup',
  props: {
    pokemon_info: [],
    closePopup: Function
  },
  components: {
    DetailsPokemons
  },
  methods: {
    closePopupOnOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.closePopup();
      }
    },
    mounted() {
      window.addEventListener('click', this.closePopupOnOutsideClick);
    },
    beforeUnmount() {
      window.removeEventListener('click', this.closePopupOnOutsideClick);
    }
  },
}
</script>
<style>
.popup-container {
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);

  z-index: 99;

  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    top: 40%;

    .right-side {
      width: 340px !important;
      border-top-right-radius: 0px !important;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    .left-side {
      width: 340px !important;
      border-bottom-left-radius: 0px !important;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }

  .close-popup {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -15px;
    top: -15px;

    padding: 8px;
    border: none;
    border-radius: 50%;

    background-color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: #f8f4cf;
    }

    img {
      width: 24px;
    }
  }

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
    max-width: 430px;
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