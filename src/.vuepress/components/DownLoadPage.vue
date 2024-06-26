<template>
下载页面
</template>

<script setup>
import axios from "axios";

const giteeClideId = '6a64b8c3ebf1cf586324640ae7717b4079b5121b329d6c837d7e41fca291f080';

const githubClientId = 'e863200b3cb84e2b5b27';

const giteeVerfiy = ()=>{
  axios.get(`https://gitee.com/oauth/authorize?client_id=${giteeClideId}&redirect_uri=http://106.15.90.238:8089/gitee/&response_type=code&scope=user_info`)
}

const githubVerfiy = ()=>{
  axios.get(`\`https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=http://106.15.90.238:8089/github\``)
}

</script>

<style scoped>

</style>
