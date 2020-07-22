<template>
  <section id="projects">
    <div class="container">
      <div class="row">
        <div id="snr" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>Simple Novel Reader</h2>
              <div class="links">
                <a href="https://github.com/gzygmanski/simple-novel-reader" target="_blank">
                  <span>github</span><font-awesome-icon icon="external-link-alt" />
                </a>
                <a href="https://pypi.org/project/simple-novel-reader" target="_blank">
                  <span>pypi</span><font-awesome-icon icon="external-link-alt" />
                </a>
              </div>
              <p>Prosty czytnik książek w formacie EPUB z wykorzystaniem biblioteki Curses.</p>
              <div class="links">
                <span class="badge primary">Python</span>
                <span class="badge tertiary">Curses</span>
              </div>
            </div>
          </div>
        </div>
        <div id="pg-kancelaria" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>PG Kancelaria</h2>
              <div class="links">
                <a href="http://pgkancelaria.pl/" target="_blank">
                  <span>strona</span><font-awesome-icon icon="external-link-alt" />
                </a>
              </div>
              <p>Strona domowa kanclelarii adwokackiej.</p>
              <div class="links">
                <span class="badge primary">PHP</span>
                <span class="badge primary">HTML</span>
                <span class="badge tertiary">Sass</span>
                <span class="badge tertiary">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div id="cb-universal" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>CB Universal</h2>
              <div class="links">
                <a href="http://cbuniversal.us/" target="_blank">
                  <span>strona</span><font-awesome-icon icon="external-link-alt" />
                </a>
              </div>
              <p>Strona domowa firmy CB Universal.</p>
              <div class="links">
                <span class="badge secondary">Node.js</span>
                <span class="badge primary">JavaScript</span>
                <span class="badge primary">HTML</span>
                <span class="badge tertiary">Less</span>
              </div>
            </div>
          </div>
        </div>
        <div id="startpage" class="card-container">
          <div class="project-card">
            <div class="project-info">
              <h2>Startpage 2</h2>
              <div class="links">
                <a href="https://github.com/gzygmanski/startpage2" target="_blank">
                  <span>github</span><font-awesome-icon icon="external-link-alt" />
                </a>
              </div>
              <p>Projekt strony startowej z zakładkami i interfejsem MPD</p>
              <div class="links">
                <span class="badge secondary">Vue</span>
                <span class="badge secondary">Flask</span>
                <span class="badge primary">Python</span>
                <span class="badge primary">JavaScript</span>
                <span class="badge tertiary">CSS</span>
              </div>
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

    @media @sm {
      .row {
        flex-direction: column;
      }

      .project-card {
        padding: 50px 75px;
      }
    }

    .project-card {
      overflow: scroll;
      overflow-x: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }

      width: 100%;
      height: 380px;
      text-align: center;
      padding: 40px 50px;

      &:hover {
        transition: ease .25s;
        background-color: @base-bg-blend2;
        .project-info {
          display: block;
        }
      }

      .project-info {
        display: none;
        color: @base-fg-light;

        .links {
          margin: 20px 0;

          a {
            color: @base-secondary;
            margin: 20px;

            span {
              margin-right: 5px;
            }
          }
        }
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
  background-position: left top;
  background-size: cover;
}

#cb-universal {
  background-image: url(../assets/project-cbuniversal.png);
  background-position: center top;
  background-size: cover;
}

#startpage {
  background-image: url(../assets/project-startpage2.png);
  background-position: center bottom;
  background-size: cover;
}

</style>
