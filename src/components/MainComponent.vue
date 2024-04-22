<template>
  <div class="main_section">
    <h1>{{ $t('home.title') }}</h1>
    <form class="form_input">
      <input type="text" :placeholder="$t('home.searchPlaceholder')"  v-model="search" @input="filterPokemons">
    </form>
    <main class="main_container">
      <button class="card_container" v-for="(pokemon, index) in filteredPokemons" @click="sendInfo(pokemon)">
        <div class="left_side">
          <h2>
            {{ pokemon.name }}
          </h2>
          <div class="details_container">
            <div>
              <div id="weight">
                <span>{{ pokemon.weight }}</span>
                <p>{{ $t('card.weight') }}</p>
              </div>
            </div>
            <div>
              <div id="height">
                <span>{{ pokemon.height }}</span>
                <p>{{ $t('card.height') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right_side">
          <img :src="pokemon.imgSrc" alt="" />
        </div>
      </button>

      <div class="popup_div_container" v-if="showModal" @click="closePopup">
        <PokemonPopup :pokemon_info="selected_pokemon"></PokemonPopup>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from './PokemonCard.vue';
import PokemonPopup from './PokemonPopup.vue';

export default {
  name: 'MainComponent',
  components: {
    PokemonCard,
    PokemonPopup
  },
  data() {
    return {
      pokemons: [],
      search: '',
      selected_pokemon: [],
      showModal: false,
    }
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=300").then((response) => {
      this.pokemons = response.data.results;

      this.pokemons.forEach(pokemon => {
        axios.get(pokemon.url).then(res => {
          pokemon.id = res.data.id;
          pokemon.weight = res.data.weight;
          pokemon.height = res.data.height;
          pokemon.imgSrc = res.data.sprites.front_default;
          pokemon.abilities = res.data.abilities;
          pokemon.sprites = res.data.sprites;
          pokemon.gameIndices = res.data.game_indices;
          pokemon.attacks = res.data.moves.map(move => {
            return {
              name: move.move.name,
              level_learned: move.version_group_details.map((level) => level.level_learned_at)


            };
          });
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
    },
    sendInfo(pokemon_info) {
      this.selected_pokemon = pokemon_info;
      this.showModal = true;
      document.body.style.overflow = "hidden";
    },
    closePopup() {
      this.showModal = false;
      document.body.style.overflow = "scroll";
    }
  },
}


</script>

<style>
.main_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 10rem 13rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    width: 100%;
    text-align: center;
    color: #000;
    text-align: center;
    letter-spacing: 3px;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      height: 3.3rem;
      min-width: 340px;
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


    .card_container {
      display: flex;
      background-color: #F6F7F9;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: rgba(245, 219, 19, .3);
      }

      ;

      cursor: pointer;
      height: 153px;
      border: none;

      .left_side {
        border-left-color: #F5DB13;
        border-left-style: solid;
        border-left-width: 5px;

        justify-content: center;
        padding-inline: .8rem;
        display: flex;
        flex-direction: column;
        gap: .75rem;
        height: 100%;

        h2 {
          width: 140px;
        }

        .details_container {
          display: flex;
          gap: .5rem;

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4px;
            align-items: center;
            font-size: 12px;
            color: #443c00;

            span {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #443c00;
              border: 3px solid #443c00;
              border-radius: 100%;
              width: 38px;
              height: 38px;
              font-size: 1rem;
              background-color: rgba(245, 219, 19, .3);
            }
          }

        }
      }

      .right_side {
        width: 153px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F5DB13;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;

        img {
          width: 100%;
          animation: floating 3s infinite alternate;
        }
      }
    }
    .card_container:hover .right_side img {
      transform: scale(1.2);
      transition: all 300ms ease-in-out;
    }
    .popup_div_container {
      z-index: 61;
      display: flex;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.3);
      position: fixed;
      top: 0;
    }
  }
}
</style>