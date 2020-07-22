<template>
  <section id="contact">
    <div class="container">
      <h2>Zostańmy w kontakcie!</h2>
      <div class="row">
        <div class="box call">
          <p>Jestem otwarty na propozycje współpracy. Podejrzyj moje CV i napisz lub zadzwoń</p>
        </div>
        <div class="contact-list">
          <ul>
            <li><a href="mailto:gzygmanski@hotmail.com"><font-awesome-icon icon="envelope" /><span>gzygmanski@hotmail.com</span></a></li>
            <li><a href="tel:+48579633775"><font-awesome-icon icon="phone-alt" /><span>+48 579 633 775</span></a></li>
            <li><a href="https://github.com/gzygmanski" target="_blank"><font-awesome-icon :icon="['fab', 'github-alt']" /><span>github.com/gzygmanski</span></a></li>
            <li><a href="./cv.pdf" download><font-awesome-icon icon="file-pdf" /><span>CV</span></a></li>
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
      }

      .contact-list {
        padding-right: 50px;
        width: 50%;

        ul {
          li {
            a {
              color: @base-fg-light;
            }
            margin-bottom: 25px;
            span {
              margin-left: 20px;
            }
          }
        }
      }
    }

    @media @sm {
      .row {
        flex-direction: column;

        .contact-list {
          width: 100%;
          margin-top: 25px;
        }
      }
    }

  }
}

</style>
