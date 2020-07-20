<template>
  <section id="projects">
    <div class="container">
      <div class="row">
        <div id="snr" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>Simple Novel Reader</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
                at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
                ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
                tincidunt ex vulputate. </p>
            </div>
          </div>
        </div>
        <div id="pg-kancelaria" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>Simple Novel Reader</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
                at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
                ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
                tincidunt ex vulputate. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div id="cb-universal" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>Simple Novel Reader</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
                at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
                ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
                tincidunt ex vulputate. </p>
            </div>
          </div>
        </div>
        <div id="startpage" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>Simple Novel Reader</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nisl, aliquam
                at luctus vitae, commodo iaculis libero. Nunc vel libero et magna rhoncus aliquam sed eu
                ante. Donec eleifend eleifend metus in rutrum. Mauris tempus magna ut dui egestas, vel
                tincidunt ex vulputate. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#projects {
  background: @base-bg-dark2;

  .container {

    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

      .card-container {
        width: 100%;
        height: 380px;
      }
    }

    .project-card {
      width: 100%;
      height: 380px;
      text-align: center;
      padding: 40px 50px;

      &:hover {
        transition: ease .25s;
        background-color: @base-primary;
        opacity: .9;
        .project-info {
          display: block;
        }
      }

      .project-info {
        display: none;
        color: @base-fg-light;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

#snr {
  background-image: url(../assets/project-snr.png);
  background-position: center top;
  background-size: cover;
}

#pg-kancelaria {
  background-image: url(../assets/project-pgkancelaria.png);
  background-position: top left;
  background-size: cover;
}

#cb-universal {
  background-image: url(../assets/project-snr.png);
  background-position: center;
  background-size: cover;
}

#startpage {
  background-image: url(../assets/project-startpage2.png);
  background-position: center bottom;
  background-size: cover;
}

</style>
