<template>
  <section id="about">
    <div class="container static">
      <div class="stretch secondary">
        <div class="box story-card secondary">
          <h2>Początek</h2>
          <h3>2014</h3>
          <div class="story-image">
            <img src="../assets/sun.svg" alt=""/>
          </div>
          <p>Swoją przygodę zacząłem w techników, gdzie nauczyłem się programować w C++ oraz
            rozpocząłem naukę języka Python. Wiedzę zgromadzoną w tym czasie zabrałem ze sobą na
            studia, gdzie napisałem moje pierwsze projekty...</p>
        </div>
      </div>
      <div class="stretch primary">
        <div class="box story-card primary">
          <h2>Pierwsze projekty</h2>
          <h3>2017</h3>
          <div class="story-image">
            <img src="../assets/mountain.svg" alt=""/>
          </div>
          <p>W czasie studiów uczestniczyłem w kilku projektach. Były to proste strony w czystym
            HTML z nutą Bootstrap'a niemniej jednak były one cennym doświadczeniem. Wziąłem także
            udział w dwóch edycjach warsztatów prowadzonych przez firmę STX Next o nazwie PyPiła,
            w których poznałem Django i Flask.</p>
        </div>
      </div>
      <div class="stretch tertiary">
        <div class="box story-card tertiary">
          <h2>Rewitalizacja</h2>
          <h3>2020</h3>
          <div class="story-image">
            <img src="../assets/forest.svg" alt=""/>
          </div>
          <p>W ostatnim roku studiów nie miałem wiele czasu aby poświęcić na programowanie, gdyż
            byłem pochłonienty pisaniem pracy magisterskiej. Od 2020 jednak powróciłem z nowymi
            siłami. Zacząłem na nowo poznawać języki i środowiska programistyczne.</p>
        </div>
      </div>
    </div>
    <carousel
      :autoplay=autoplay
      :autoplayTimeout=autoplayTimeout
      :autoplayHoverPause=autoplayHoverPause
      :perPage=perPage
      :paginationEnabled=paginationEnabled
      :loop=loop
      :resistanceCoef=resistanceCoef
      class="container carousel"
    >
      <slide class="stretch secondary">
        <div class="box story-card secondary">
          <h2>Początek</h2>
          <h3>2014</h3>
          <div class="story-image">
            <img src="../assets/sun.svg" alt=""/>
          </div>
          <p>Swoją przygodę zacząłem w techników, gdzie nauczyłem się programować w C++ oraz
            rozpocząłem naukę języka Python. Wiedzę zgromadzoną w tym czasie zabrałem ze sobą na
            studia, gdzie napisałem moje pierwsze projekty...</p>
        </div>
      </slide>
      <slide class="stretch primary">
        <div class="box story-card primary">
          <h2>Pierwsze projekty</h2>
          <h3>2017</h3>
          <div class="story-image">
            <img src="../assets/mountain.svg" alt=""/>
          </div>
          <p>W czasie studiów uczestniczyłem w kilku projektach. Były to proste strony w czystym
            HTML z nutą Bootstrap'a niemniej jednak były one cennym doświadczeniem. Wziąłem także
            udział w dwóch edycjach warsztatów prowadzonych przez firmę STX Next o nazwie PyPiła,
            w których poznałem Django i Flask.</p>
        </div>
      </slide>
      <slide class="stretch tertiary">
        <div class="box story-card tertiary">
          <h2>Rewitalizacja</h2>
          <h3>2020</h3>
          <div class="story-image">
            <img src="../assets/forest.svg" alt=""/>
          </div>
          <p>W ostatnim roku studiów nie miałem wiele czasu aby poświęcić na programowanie, gdyż
            byłem pochłonienty pisaniem pracy magisterskiej. Od 2020 jednak powróciłem z nowymi
            siłami. Zacząłem na nowo poznawać języki i środowiska programistyczne.</p>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'About',
  components: {
    Carousel,
    Slide
  },
  data: () => {
    return {
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      perPage: 1,
      paginationEnabled: false,
      loop: true,
      resistanceCoef: 0
    }
  }
}
</script>

<style lang="less" scoped>
@import "../less/vars.less";

#about {

  .carousel {
    display: none !important;
  }

  .container {
    display: flex;
    max-width: none;

    .stretch {
      width: 100%;

      .story-image {
        position: relative;
        height: 70px;

        img {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          max-width: 300px;
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
      padding: 50px 75px;
      min-width: 500px;
    }

    .story-card.secondary {
      float: right;
    }

  }

  @media @sm {
    .static {
      display: none;
    }

    .carousel {
      display: block !important;
    }

    .container {
      .story-card {
        margin: auto;
        min-width: 0;
        max-width: 500px;
        padding: 50px 75px;
      }

      .story-card.secondary {
        float: none;
      }
    }
  }

  @media @md {
    .static {
      display: none !important;
    }

    .carousel {
      display: block !important;
    }

    .container {
      .story-card {
        margin: auto;
      }

      .story-card.secondary {
        float: none;
      }
    }
  }

  @media @lg {
    .carousel {
      display: none !important;
    }
  }
}
</style>
