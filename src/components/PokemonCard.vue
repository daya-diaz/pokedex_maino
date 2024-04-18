<template>
  <button class="card_container" @click="() => console.log(id)">
    <div class="left_side">
      <h2>
        {{ name }}
      </h2>
      <div class="details_container">
        <div>
          <div id="weight">
            <span>{{ weight }}</span>
            <p>Peso (hg)</p>
          </div>
        </div>
        <div>
          <div id="height">
            <span>{{ height }}</span>
            <p>Altura (dm)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right_side">
      <img :src="imgSrc" alt="" />
    </div>
  </button>
</template>
<script>
import PokemonPopup from './PokemonPopup.vue';

export default {
  name: 'PokemonCard',
  components: {
    PokemonPopup
  },
  props: {
    name: String,
    weight: Number,
    height: Number,
    imgSrc: String,
    id: Number
  },
  data() {
    return {
      isVisible: Boolean
    }
  }
}

</script>

<style scoped>
.card_container {
  display: flex;
  background-color: #F6F7F9;
  transition: all 300ms ease-out;
  &:hover {
    background-color: rgba(245, 219, 19, .2)
  };

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

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Define o movimento para cima */
  }
  100% {
    transform: translateY(0);
  }
}
</style>
