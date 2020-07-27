<template>
  <section id="skills" :style="{'min-height': contentHeight + 'px'}">
    <div class="container">
      <div class="image-container" :style="{'min-height': contentHeight + 'px'}">
        <img src="../assets/skills.svg" alt="" />
      </div>
      <div class="box content">
        <h2>Umiejętności</h2>
        <p>Posiadam wiedzę i umiejętności z zakresu programowania, projektowania i tworzenia stron
          internetowych.</p>
        <p>Najchętniej pracuje z:</p>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Sass</li>
          <li>Python</li>
          <li>Vue</li>
          <li>JavaScript ...</li>
        </ul>
        <p class="small">Więcej informacji znajdziesz w moim CV:</p>
        <a class="btn" href="./cv.pdf" download>
          <font-awesome-icon icon="file-pdf" />
          <span>Pobierz CV (2.72MB)</span>
        </a>
      </div>
    </div>
  </section>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Skills',
  computed: {
    ...mapGetters(['contentHeight'])
  }
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#skills {
  background-image: url(../assets/skills.jpg);
  background-position: left;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .content {
      background: linear-gradient(@base-bg-dark, #ffffff00);
      color: @base-fg-light;
      padding: 40px 50px;

      a {
        span {
          margin-left: 10px;

        }
      }

      ul {
        margin: 0 0 50px 20px;
        li {
          margin: 0;
          list-style: inside '+ ';
        }
      }
    }

    @media @sm {
      .content {
        display: none;
      }
    }

    .image-container {
      position: relative;
      max-width: 1000px;
      padding: 40px 50px;
      width: 100%;

      img {
        position: absolute;
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    img {
      width: 100%;
    }
  }

}
</style>
