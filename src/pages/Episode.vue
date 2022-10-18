<template>
  <Navbar />
    <section class="education">

        <h1 class="heading"> <span>{{name}}</span> </h1>

        <div class="box-container">

            <div class="box" v-for="e in experiences" :key="e.years">
                <i class="fas fa-briefcase"></i>
                <span>{{e.episode}}</span>
                <h3>{{e.name}}</h3>
            </div>

        </div>

    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar },
    data() {
    return {
      name: 'Episode',
      experiences: [{
        episode:'1-52',
        name:'One Piece อิสท์บลู ซีซั่น 1'
      },{
        episode:'53-76',
        name:'One Piece บาร็อกเวิร์คส์ ซีซั่น 2'
      },{
        episode:'77-92',
        name:'One Piece สโนว์ไอส์แลนด์ ซีซั่น 3'
      },{
        episode:'93-132',
        name:'One Piece อลาบัสต้า ซีซั่น 4'
      },{
        episode:'133-144',
        name:'One Piece เรนโบว์ อาร์ค ซีซั่น 5'
      },{
        episode:'145-196',
        name:'One Piece สกายเปีย ซีซั่น 6'
      },{
        episode:'197-228',
        name:'One Piece จี-เอท เดวี แบค ไฟท์ ซีซั่น 7'
      },{
        episode:'229-264',
        name:'One Piece วอเตอร์เซเว่น ซีซั่น 8'
      },{
        episode:'265-336',
        name:'One Piece เอนิเอสล็อบบี้ ซีซั่น 9'
      },{
        episode:'337-384',
        name:'One Piece ทริลเลอร์บาร์ค ซีซั่น 10'
      },{
        episode:'385-404',
        name:'One Piece ชาบอนดี้ ซีซั่น 11'
      },{
        episode:'405-420',
        name:'One Piece อเมซอล ลิลี่ ซีซั่น 12'
      },{
        episode:'421-456',
        name:'One Piece อิมเพลดาวน์ ซีซั่น 13'
      },{
        episode:'457-516',
        name:'One Piece สงคราม มารีนฟอร์ด ซีซั่น 14'
      },{
        episode:'517-578',
        name:'One Piece เกาะมนุษย์เงือก ซีซั่น 15'
      },{
        episode:'579-628',
        name:'One Piece พังค์ฮาซาร์ด ซีซั่น 16'
      },{
        episode:'629-750',
        name:'One Piece เดรสโรซ่า ซีซั่น 17'
      },{
        episode:'751-782',
        name:'One Piece ซิลเวอร์มาย โซ ซีซั่น 18'
      },{
        episode:'783-890',
        name:'One Piece เกาะโฮลเค้ก ซีซั่น 19'
      },{
        episode:'891-Present',
        name:'One Piece วาโนะคุนิ ซีซั่น 20'
      }]
    }
}

}
</script>

<style>

</style>