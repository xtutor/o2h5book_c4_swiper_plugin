require('../index.html')
require('../css/package.scss')

// 使用 Swiper 组件 http://idangero.us/swiper/
import Swiper from 'swiper'

var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
})
