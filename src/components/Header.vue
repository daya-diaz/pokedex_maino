<template>
  <header>
    <img src="../assets/pokemon-logo.png" alt="" />
    <nav>
      <ul>
        <li><a href="#">Pokedéx</a></li>
        <li><a href="https://linkedin.com/in/dayane-santos-melo" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/daya-diaz" target="_blank">Github</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background-color: #F5DB13;
  color: #212121;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 6rem; 
  padding-block: 1rem;
  width: 100%; 
  filter: drop-shadow(0px 3px 8px #cccccc);

  @media (max-width: 768px) {
    padding-inline: 1rem; 
  }

  nav {
    ul {
      list-style: none;
      padding: 0;
      display: flex;

      li {
        margin-right: 1rem;

        &:last-child {
          margin-right: 0; 
        }

        a {
          color: #212121;
          font-size: 1.2rem;
          text-decoration: none;

          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

</style>
