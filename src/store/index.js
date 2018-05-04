import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawings: [
      {
        // top strap
        205: true, 206: true, 207: true, 208: true, 209: true, 210: true,
        237: true, 238: true, 239: true, 240: true, 241: true, 242: true,
        269: true, 270: true, 271: true, 272: true, 273: true, 274: true,
        301: true, 302: true, 303: true, 304: true, 305: true, 306: true,
        // bottom strap
        589: true, 590: true, 591: true, 592: true, 593: true, 594: true,
        621: true, 622: true, 623: true, 624: true, 625: true, 626: true,
        653: true, 654: true, 655: true, 656: true, 657: true, 658: true,
        685: true, 686: true, 687: true, 688: true, 689: true, 690: true,
        // lugs
        332: true, 339: true, 556: true, 563: true,
        // face left edge
        363: true, 395: true, 427: true, 459: true, 491: true, 523: true,
        // face right edge
        372: true, 404: true, 436: true, 468: true, 500: true, 532: true,
        // hour hand
        462: true, 463: true, 464: true,
        // minute hand
        368: true, 400: true, 432: true,
        // crown
        437: true, 469: true
      }
    ]
  },

  mutations: {
  }
})
