<template>
  <header>
    <a href="#"><img src="../assets/pokemon-logo.png" alt="" /></a>
    <nav>
      <ul>
        <li><a href="#">Pokédex</a></li>
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
  position: fixed;
  z-index: 60;
  background-color: #F5DB13;
  color: #212121;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 13rem;
  padding-block: 1rem;
  width: 100%;
  filter: drop-shadow(0px 3px 8px #cccccc);

  @media (max-width: 768px) {
    padding-inline: 1rem;
  }

  a {
    outline: none;
    border: none;
  }

  nav {
    ul {
      list-style: none;
      padding: 0;
      display: flex;

      li {
        margin-right: 1rem;
        transition: all 200ms ease-in-out;
        border: 2px solid transparent;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          border-bottom: 2px solid #212121;
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
