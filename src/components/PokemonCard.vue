<template>
  <div class="card_container">
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
  </div>
</template>
<script>
export default {
  name: 'PokemonCard',
  props: {
    name: String,
    weight: Number,
    height: Number,
    imgSrc: String
  },
}

</script>

<style scoped>
.card_container {
  display: flex;

  .left_side {
    border-left-color: #F5DB13;
    border-left-style: solid;
    border-left-width: 5px;
    background-color: #F6F7F9;
    justify-content: center;
    padding-inline: .8rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;

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
          background-color: rgba(245, 219, 19, .2);
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
    }
  }
}
</style>