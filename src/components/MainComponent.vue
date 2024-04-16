<template>
  <div class="main_section">
    <h1>300 <strong>Pokémons</strong> para você conhecer</h1>
    <form class="form_input">
      <input type="text" placeholder="Pesquise por pokémon..." v-model="search" @input="filterPokemons">
    </form>
    <main class="main_container">
      <PokemonCard
        v-for="(pokemon, index) in filteredPokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :imgSrc="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon)}.png`"
        :weight="pokemon.weight"
        :height="pokemon.height"
      />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from './PokemonCard.vue';

export default {
  name: 'MainComponent',
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemons: [],
      search: ''
    }
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((response) => {
      this.pokemons = response.data.results;

      this.pokemons.forEach(pokemon => {
        axios.get(pokemon.url).then(res => {
          pokemon.weight = res.data.weight;
          pokemon.height = res.data.height;
        });
      });
    });
  },

  computed: {
    filteredPokemons() {
      return this.pokemons.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    getId(pokemon) {
      return Number(pokemon.url.split("/")[6]); 
    }
  }
}
</script>

<style>
.main_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 3rem 13rem; 

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