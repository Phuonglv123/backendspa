<template>
  <div id="homepage">
    <b-container>
      <b-card no-body class="overflow-hidden mt-3 border-0 aboutus">
        <b-row no-gutters class="align-items-center">
          <b-col md="4">
            <b-card-body title="VỀ CHÚNG TÔI">
              <b-card-text class="text-aboutus">
                Hệ thống Thẩm mỹ viện Ngọc Dung – Đồng hành cùng hàng triệu phái
                đẹp Việt hoàn thiện sắc vóc…
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="8">
            <b-card-img
              :src="require('~/assets/img/aboutus.jpeg')"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
    <b-jumbotron class="mt-3" id="h-service">
      <b-container>
        <div class="h-service-title">
          <h4>Dịch Vụ Nổi Bật</h4>
        </div>
        <div class="h-service-content">
          <b-card-group deck>
            <b-card
              v-for="i in homeService"
              :key="i.id"
             :img-src="`http://localhost:1337${i.image.url}`"
              img-alt="Card image"
              img-top
              class="text-center"
            >
              <b-card-text>
                {{ i.name }}
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </b-jumbotron>

    <section class="mt-5 p-5">
      <b-container>
        <b-row>
          <b-col md="6">
            <div>
              <h5>TIN TỨC & SỰ KIỆN</h5>
            </div>
            <div class="homeNew">
              <b-card
                :img-src="require('~/assets/img/news.jpeg')"
                img-alt="Card image"
                img-left
                class="mb-3 border-0 mt-2"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
              <b-card
                :img-src="require('~/assets/img/news.jpeg')"
                img-alt="Card image"
                img-left
                class="mb-3 border-0 mt-2"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
              <b-card
                :img-src="require('~/assets/img/news.jpeg')"
                img-alt="Card image"
                img-left
                class="mb-3 border-0 mt-2"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="6">
            <div>
              <h5>BÍ QUYẾT LÀM ĐẸP</h5>
            </div>
            <div class="homeNew">
              <b-card
                :img-src="require('~/assets/img/news.jpeg')"
                img-alt="Card image"
                img-left
                class="mb-3 border-0 mt-2"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
              <b-card
                :img-src="require('~/assets/img/news.jpeg')"
                img-alt="Card image"
                img-left
                class="mb-3 border-0 mt-2"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
              <b-card
                :img-src="require('~/assets/img/news.jpeg')"
                img-alt="Card image"
                img-left
                class="mb-3 border-0 mt-2"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeService: []
    };
  },

  async fetch() {
    this.homeService = await this.$strapi.$services.find({ homepage: true });
    console.log(this.homeService);
  }

  // mounted(){
  //   this.homeService =
  // },
};
</script>

<style lang="scss" scope>
#homepage {
  .aboutus {
    background-color: #12197b;
    color: white;
  }

  .carCustome {
    .carItem {
      background-image: url("~/assets/img/header-bck.jpeg");
      background-size: cover;
      flex-direction: row;
      column-count: 2;
      justify-content: center;
      align-items: center;
      color: white;
      img {
        width: 70%;
        padding: 20px;
        margin: 0 auto;
      }
    }
  }

  .homeNew {
    img {
      width: 40%;
    }
  }

  .h-service-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h-service-item {
      height: 560px;
      padding: 20px;
      .card-service-item-title {
        background-color: cornflowerblue;
        color: white;
        margin-bottom: 20px;
      }
    }

    .card-service {
      flex-direction: column;
      column-count: 3;
      .card-service-item {
        height: 260px;
        padding: 40px;
        .card-service-item-title {
          background-color: cornflowerblue;
          color: white;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
