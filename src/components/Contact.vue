<template>
  <section id="contact">
    <div class="container">
      <h2>Zostańmy w kontakcie!</h2>
      <div class="row">
        <div class="call">
          <p>Jestem otwarty na propozycje współpracy. Podejrzyj moje CV i napisz lub zadzwoń</p>
        </div>
        <div class="contact-list">
          <ul>
            <li>gzygmanski@hotmail.com</li>
            <li>+48 000 000 000</li>
            <li>github.com/gzygmanski</li>
            <li>CV</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#contact {
  background: @base-bg-dark;
  color: @base-fg-light;

  .container {
    padding: 50px 75px;

    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: flex-start;

      .call {
        padding-right: 50px;
        width: 50%;
      }

      .contact-list {
        padding-right: 50px;
        width: 50%;

        ul {
          li {
            margin-bottom: 25px;
          }
        }
      }
    }

  }
}

</style>
