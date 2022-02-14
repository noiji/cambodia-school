<template>

  <body>
    <div class="banner" data-aos="fade-down">
      <img src="@/assets/children.jpg" class="bannerImage" style="width:100%;">
      <div class="centeredTextOverImage">활동</div>
    </div>
    <div class="activityCard" data-aos="zoom-in">
      <img src="@/assets/school1.jpg" class="bannerImage" style="width:100%;">
      <div class="activityTitle">1. 학교 설립 및 운영</div>
    </div>
    <div class="activityCard" data-aos="zoom-in">
      <img src="@/assets/children.jpg" class="bannerImage" style="width:100%;">
      <div class="activityTitle">2. 어린이/청소년 결연</div>
    </div>
    <div class="activityCard" data-aos="zoom-in">
      <img src="@/assets/school1.jpg" class="bannerImage" style="width:100%;">
      <div class="activityTitle">3. 교육/의료 봉사</div>
    </div>
  </body>
</template>


<script>
export default {
  name: "Activity"
}
</script>

<style scoped>
body{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.activityCard{

}
.activityTitle{

}
.title{

}
p{
  margin-top: 100px;
  font-size: 100px;
}
</style>