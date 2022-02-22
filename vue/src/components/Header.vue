<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="topnav" id="myTopnav">
<!--    <ul class = "navbar__menu">&lt;!&ndash;일렬 정렬을 위해 div보다는 순서가 있는 ul 사용 &ndash;&gt;-->

<!--    <a class = "logoItem">-->
      <router-link to="/" exact>
        <img class="logo" src="./logo.png" alt="logo" >
      </router-link>
<!--    </a>-->
    <a class = "menuItem"><router-link to="/about">소개</router-link></a>
    <a class = "menuItem"><router-link to="/activity">활동</router-link></a>
    <a class = "menuItem"><router-link to="/donate">함께해요</router-link></a>
    <a class = "menuItem"><router-link to="/report">재정보고</router-link></a>
    <a href="javascript:void(0);" class="icon" @click="navResponsive">
      <i class="fa fa-bars"></i>
    </a>
<!--    </ul>-->

  </div>
</template>

<script>
export default {
  name: 'Header.vue',
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  methods: {
    navResponsive() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}
</script>

<style>

.topnav{
  background-color: white;
  overflow: hidden; /*내용이 넘칠 때 자른다. */
  /*position: fixed;*/
  /*z-index: 999;*/
  /*height: 10vh;*/
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  font-family: OTWelcomeBA;

}
.topnav a {
  float: left;
  display: block;
  color: #42b983;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  vertical-align: middle;
  height: 4vh;
}
.topnav .logoItem{
  width: 20vw;
  min-width: 200px;
  max-width: 300px;
  float:left;
  height: 4vh;
}
.topnav .logo{
  height: inherit;
  width: inherit;
}
.topnav .menuItem{
  float: left;
  height: 4vh;
}
.topnav a:hover{
  color: #bbd9bb;
}
.topnav a.active{
  color: #303030;
}
.topnav router-link{
  text-decoration: none;
  color: inherit;
}
/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* When the screen is less than 740 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 740px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
    padding: 2vh 6vw 0 0;
  }
  .topnav a.menuItem{
    padding: 1vh 0 0 3vw;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 740px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>