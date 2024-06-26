<template>
  <a :href="`https://gitee.com/oauth/authorize?client_id=${clideId}&redirect_uri=http://106.15.90.238:8089/gitee/&response_type=code&scope=user_info`">Gitee获取</a>
</template>


<script setup lang='ts'>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

// 在 setup 函数中获取路由对象
const route = useRoute();
const code = ref(null);



const clideId = '6a64b8c3ebf1cf586324640ae7717b4079b5121b329d6c837d7e41fca291f080';






</script>
