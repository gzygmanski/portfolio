<template>
  <section id="about">
    <div class="container">
      <div class="stretch secondary">
        <div class="box story-card secondary">
          <h2>2014 - Początek</h2>
          <div class="story-image">
            <img src="../assets/sun.svg" alt=""/>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
            at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
            ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
            tincidunt ex vulputate. </p>
        </div>
      </div>
      <div class="stretch primary">
        <div class="box story-card primary">
          <h2>2017 - Pierwsze projekty</h2>
          <div class="story-image">
            <img src="../assets/mountain.svg" alt=""/>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
            at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
            ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
            tincidunt ex vulputate. </p>
        </div>
      </div>
      <div class="stretch tertiary">
        <div class="box story-card tertiary">
          <h2>2020 - Kolejne kroki</h2>
          <div class="story-image">
            <img src="../assets/forest.svg" alt=""/>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
            at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
            ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
            tincidunt ex vulputate. </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#about {
  .container {
    display: flex;
    max-width: none;

    .stretch {
      width: 100%;

      .story-image {
        position: relative;
        height: 140px;

        img {
          position: absolute;
          bottom: 0;
          left: -25px;
          max-width: 500px;
        }
      }

      p {
        margin-top: 20px;
      }
    }

    .stretch.primary {
      width: auto;
    }

    .story-card {
      padding: 40px 50px;
      min-width: 500px;
    }

    .story-card.secondary {
      float: right;
    }

  }

  @media @sm {
    .container {
      flex-direction: column;

      .story-card {
        margin: auto;
        min-width: 100%;

        .story-image {
          img {
            left: 50%;
            transform: translateX(-50%);
            max-width: 100%;
          }
        }
      }

      .story-card.secondary {
        float: none;
      }
    }
  }

  @media @md {
    .container {
      flex-direction: column;

      .story-card {
        margin: auto;
      }

      .story-card.secondary {
        float: none;
      }
    }
  }
}
</style>
