<template>
<!--  <table>-->
<!--    <tr>-->
<!--      <th>학년</th>-->
<!--      <th>반</th>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <td>1</td>-->
<!--      <td>1</td>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <td>1</td>-->
<!--      <td>2</td>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <td colspan='2'>2-1</td>-->
<!--      &lt;!&ndash;<td>1</td>&ndash;&gt;-->
<!--    </tr>-->
<!--  </table>-->

  <table>
    <tr id="firstHeader">
      <th colspan="3">
        수입
      </th>
      <th colspan="3">
        지출
      </th>
    </tr>
    <tr id="secondHeader">
      <th colspan="2">
        과목
      </th>
      <th>
        금액
      </th>
      <th colspan="2">
        과목
      </th>
      <th>
        금액
      </th>
    </tr>
    <div id="data">
      <tr>
        <td rowspan="2">① 회비</td>
        <td>개인</td>
        <td>108,454,795</td>
        <td rowspan="4">① 사업비</td>
        <td rowspan="2">캄보디아 어린이·청소년 결연 맺기</td>
        <td rowspan="2">12,370,000</td>
      </tr>
      <tr>
        <td>단체</td>
        <td>108,454,795</td>
      </tr>
      <tr>
        <td>② 후원금</td>
        <td>단체(삼성꿈장학재단)</td>
        <td>34,800,000</td>
        <td>쁘레엑롱 학교 (초등, 중등) 운영비</td>
        <td>68,761,413</td>
      </tr>
      <tr>
        <td>③ 보조금</td>

        <td>.</td>
        <td>.</td>
        <td>깜뽕츠낭 학교(초등, 중등)운영비</td>
        <td>76,038,505</td>
      </tr>
      <tr>
        <td>④ 기타수입</td>
        <td>예금이자</td>
        <td>11,197</td>
        <td rowspan="2">② 차년도 이월액</td>
        <td rowspan="2"></td>
        <td rowspan="2">9,595,199</td>
      </tr>
      <tr>
        <td>⑤ 전년도 이월액</td>
        <td></td>
        <td>11,819,125</td>
      </tr>
    </div>
  </table>
</template>

<script>
export default {
  name: "Table2021"
}
</script>

<style scoped>
table{
  font-family: Pretendard-Regular;
  font-size: medium;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}
th{
  border: solid white;
  padding: 15px;
}
#firstHeader{
  background-color: #42b983;
  color: white;
  border: #f0f0f0;
}
#secondHeader{
  background-color: #bbd9bb;
}
td{
  border: solid #a0a0a0;
  padding: 15px;
}
</style>