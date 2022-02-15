<template>
  <body>
  <div class="banner" data-aos="fade-down">
    <img src="@/assets/school1.jpg" class="bannerImage" style="width:100%;">
    <div class="centeredTextOverImage">재정보고</div>
  </div>
  <container class="report-container" data-aos="slide-up">
    <dropdown :id = "drop-down"
              class="drop-down-year"
              :options="dropdownOptions"
              :selected="dropdownOptions[0]"
              v-on:updateOption="methodToRunOnSelect"
              :placeholder="'연도를 선택하세요'"
              :closeOnOutsideClick="boolean">
    </dropdown>
    <br>
    <button class = "download"><a href="https://m.cafe.daum.net/_attachefileview?grpcode=combodiaschool&url=https://t1.daumcdn.net/cafeattach/1QmbR/6dd01f91c0583f457e1e75245241d78fb712a536?download&filekey=/cafeattach/1QmbR/6dd01f91c0583f457e1e75245241d78fb712a536&service=cafe&filename=2021%EB%85%84%EB%8F%84%20%EC%88%98%EC%A7%80%EA%B2%B0%EC%82%B0%EC%84%9C.hwp" target="_blank">파일 다운로드</a></button>
    <Table2021></Table2021>
  </container>
  </body>
</template>

<script>
import dropdown from 'vue-dropdowns';
import Table2021 from "@/components/Table2021";
export default({
  name: 'Report',
  components: {
    'dropdown': dropdown,
    Table2021,
  },
  data() {
    return {
      dropdownOptions: [
        { id: 0, name: '2021'},
        { id: 1, name: '2020'},
        { id: 2, name: '2019'},
        { id: 3, name: '2018'},
        { id: 4, name: '2017'},
        { id: 5, name: '2016'},
      ],
    }
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  }
});
</script>

<style>
body{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.report-container{
  /*padding-left: 10px;*/
  /*padding-right: 10px;*/
  padding: 40px 5%;
  align-items: center;
}
.drop-down-year {
  border-radius: 5px;
}
.download{
  background-color: #42b983;
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  float: right;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>