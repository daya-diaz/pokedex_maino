<template>
  <div class="card_container">
    <div class="left_side">
      <h2>
        Pikachu
      </h2>
      <div class="details_conteiner">
        <div>
        <div>
          <span>419</span>
          <p>Ataque</p>
        </div>
      </div>
      <div>
        <div>
          <span>49</span>
          <p>Defesa</p>
        </div>
      </div>
      </div>
    </div>
    <div class="right_side">
      <img src="../assets/CardBoxImgPikachu.png" alt="" />
    </div>
  </div>
  </template>
  <script>
  export default {
    name: 'PokemonCard',
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
      padding-top: .5rem;
      padding-inline: .8rem;
      display: flex;
      flex-direction: column;
      gap: .75rem;

      .details_conteiner {
        display: flex;
        gap: .75rem;
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
  
          font-size: 12px;
          color: #4B4B4B;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #212121;
            border: 3px solid #212121;
            border-radius: 100%;
            width: 38px;
            height: 38px;
            font-size: 1rem;
          }
        }
      }
    }
  }
  </style>