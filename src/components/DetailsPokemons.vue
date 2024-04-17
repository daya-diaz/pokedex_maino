<template>
<div class="details-container">
  <span>{{title}}</span>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'DetailsPokemon',
  props: {
    title: String
  }
}
</script>

<style>
.details-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: .5rem;
  border-radius: 6px;
  gap: 6px;

  span {
    font-size: 1rem; 
    color: black;
    width: 100%;
    font-weight: 500;
  }

  #details-content {
    display: flex;
    gap: 24px;

    p {
      color: #4E4E4E;
      position: relative;
      &::after {
        content: '';
        width: 6px;
        height: 6px;
        background-color: #F5DB13; /* Corrigindo a propriedade de cor para background-color */
        border-radius: 50%;
        position: absolute;
        top: 40%; 
        right: -14px;
      }

    }
    
  }
}
</style>