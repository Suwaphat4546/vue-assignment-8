<template>
  <Navbar />
  <!-- skills section starts  -->

    <section class="skills">

        <h1 class="heading"> <span>{{name}}</span> </h1>

        <div class="box-container">
            <div class="box">
                <img src="images/1.png" alt="">
                <h3>MONKEY D. LUFFY</h3>
            </div>
            <div class="box">
                <img src="images/2.png">
                <h3>RORONOA ZORO</h3>
            </div>
            <div class="box">
                <img src="images/3.png">
                <h3>Vinsmoke Sanji</h3>
            </div>
            <div class="box">
                <img src="images/4.png">
                <h3>Usopt</h3>
            </div>
            <div class="box">
                <img src="images/5.png">
                <h3>jinbei</h3>
            </div>
        </div>
        <br>
        <div class="box-container">
            <div class="box">
                <img src="images/6.png" alt="">
                <h3>Franky</h3>
            </div>
            <div class="box">
                <img src="images/7.png">
                <h3>Nico Robin</h3>
            </div>
            <div class="box">
                <img src="images/8.png">
                <h3>Tony Tony Chopper</h3>
            </div>
            <div class="box">
                <img src="images/9.png">
                <h3>NAMI</h3>
            </div>
            <div class="box">
                <img src="images/10.png">
                <h3>Hamming Brook</h3>
            </div>
        </div>
      
    </section>

    <!-- skills section ends -->
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar },
    data() {
    return {
      name: 'Character',
    }
}

}
</script>

<style>

</style>