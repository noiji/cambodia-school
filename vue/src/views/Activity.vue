<template>

  <body>
    <div class="banner" data-aos="fade-down">
      <img src="@/assets/children.jpg" class="bannerImage" style="width:100%;">
      <div class="centeredTextOverImage">활동</div>
    </div>
    <container class="activityCard" data-aos="zoom-in">
      <div class="activityText">
        <div class="activityLine"></div>
        <div class="activityTitle" style="text-align: left;">1. 학교 설립 및 운영</div>
        <div class="activityDetail" style="text-align: left;">쁘렉농 희망학교와 깜뽕츠낭 희망학교를 개교 및 운영 중에 있습니다. 전·현직 교사와 많은 분들이 뜻을 합쳐서  ‘쁘렉농 희망학교’가 2011년 10월 개교되었습니다. 유치원(25명), 초등학교(190명) 과정이며 2019년 11월 중학교를 개교했으며, 쁘렉농 마을 청/장년들을 위해서 기술학교(용접, 오토바이 정비, 미용, 봉재)를 세우는 꿈을 갖고 있습니다. 또 다른 지역 깜뽕츠낭에 ‘깜뽕츠낭 꿈의학교’가 2014년 11월  세워졌습니다. 유치원(24명) 초등학교(144명) 과정이며  2019년 9월 중학교를 개교하였습니다.</div>
      </div>
      <Carousel></Carousel>
    </container>

    <container class="activityCard" data-aos="zoom-in">
      <div class="activityText">
        <div class="activityLine"></div>
        <div class="activityTitle" style="text-align: right;">2. 어린이/청소년 결연</div>
        <div class="activityDetail" style="text-align: right;">학교에 다니려면 비공식적으로  리언꾸(수업료)를 내는 것이 관행화되어 있어서
          가정형편이 어려운 많은 아이들이 학교를 못 다니고 있습니다.
          캄보디아 세곳의 낙후지역(스텅스러우, 벙축, 싸앙)  어린이·청소년들이
          한국 후원자와 결연(월 2만원)을 맺어 초등학교, 중학교를 다니도록 돕고 있습니다.</div>
      </div>
    </container>

    <container class="activityCard" data-aos="zoom-in">
      <div class="activityText">
        <div class="activityLine"></div>
        <div class="activityTitle" style="text-align: left;">3. 교육/의료봉사</div>
        <div class="activityDetail" style="text-align: left;">쁘렉농 희망학교와 깜뽕츠낭 희망학교를 개교 및 운영 중에 있습니다. 전·현직 교사와 많은 분들이 뜻을 합쳐서  ‘쁘렉농 희망학교’가 2011년 10월 개교되었습니다. 유치원(25명), 초등학교(190명) 과정이며 2019년 11월 중학교를 개교했으며, 쁘렉농 마을 청/장년들을 위해서 기술학교(용접, 오토바이 정비, 미용, 봉재)를 세우는 꿈을 갖고 있습니다. 또 다른 지역 깜뽕츠낭에 ‘깜뽕츠낭 꿈의학교’가 2014년 11월  세워졌습니다. 유치원(24명) 초등학교(144명) 과정이며  2019년 9월 중학교를 개교하였습니다.</div>
      </div>
    </container>

  </body>
</template>


<script>
// const text = "쁘렉농 희망학교와 깜뽕츠낭 희망학교를 개교 및 운영 중에 있습니다. 전·현직 교사와 많은 분들이 뜻을 합쳐서  ‘쁘렉농 희망학교’가 2011년 10월 개교되었습니다. 유치원(25명), 초등학교(190명) 과정이며 2019년 11월 중학교를 개교했습니다. 소풀을 베어 팔거나, 냇가에서 물고기를 잡아 생활하는 쁘렉농 마을 청년, 장년들을 위해서 기술학교(용접, 오토바이 정비, 미용, 봉재)를 세우는 꿈을 갖고 있습니다. 또 다른 지역 깜뽕츠낭에 ‘깜뽕츠낭 꿈의학교’가 2014년 11월  세워졌습니다. 유치원(24명) 초등학교(144명) 과정이며  2019년 9월 중학교를 개교하였습니다."
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
  margin: 5vh;
  height: 40vh;
}
.activityText{
  width: 50vh;
}
.activityTitle{
  margin-top: 3vh;
  font-size: xxx-large;
  font-family: "OTWelcomeBA";
}
.activityDetail{

  line-height: 2vh;
}
.title{

}
p{
  margin-top: 100px;
  font-size: 100px;
}
</style>