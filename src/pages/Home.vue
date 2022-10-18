<template>
  <Navbar />
  <section class="home">

    <div class="image">
        <img src="images/profile.png" alt="">
    </div>

    <div class="content">
        <h1 class="heading"> {{name}} </h1>
        <span>{{motto}}</span>
        <p>{{content}}</p>
    </div>

</section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      name: 'One Piece',
      motto: '“สมบัติของข้ารึ? ถ้าอยากได้ ข้าจะยกให้ ก็ลองหาดูสิ ข้าได้เอาทุกสิ่งทุกอย่างบนโลกใบนี้ไว้ ณ ที่แห่งนั้นแล้ว”',
      content: 'วันพีซ เป็นผลงานการเขียนของ ‘เออิจิโร โอดะ’ (Eiichiro Oda) เรื่องราวการผจญภัยของกลุ่มโจรสลัดหมวกฟาง นำโดย ‘ลูฟี่’ เด็กหนุ่มสวมหมวกฟางผู้มีความฝันอยากเป็นเจ้าแห่งโจรสลัด เขาและพรรคพวกออกเดินทางเข้าสู่แกรนด์ไลน์เพื่อตามหาสมบัติล้ำค่าที่เจ้าแห่งโจรสลัดในตำนาน ‘โกลด์ ดี. โรเจอร์’ ทิ้งเอาไว้'
    }
  }

}
</script>

<style>

</style>