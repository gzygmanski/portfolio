<template>
  <section id="skills">
    <div class="container">
      <div class="image-container">
        <img src="../assets/skills.svg" alt="" />
      </div>
      <div class="box content">
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
          at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
          ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
          tincidunt ex vulputate. </p>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Skills',
  data: () => {
    return {
      winHeight: 0
    }
  },
  created () {
    this.winHeight = window.innerHeight
    window.addEventListener('resize', () => {
      this.winHeight = window.innerHeight
    })
  }
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#skills {
  background-color: @base-bg-blend;
  background-image: url(../assets/skills.jpg);
  background-position: left;
  background-size: cover;
  background-blend-mode: overlay;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    position: relative;

    .content {
      background: linear-gradient(@base-bg-dark, #ffffff00);
      color: @base-fg-light;
      padding: 40px 50px;
    }

    @media @sm {
      .content {
        display: none;
      }
    }

    .image-container {
      max-width: 1000px;
      padding: 40px 50px;
    }

    img {
      width: 100%;
    }
  }

}
</style>
