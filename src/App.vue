<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import {Button,message,AutoComplete} from "ant-design-vue"
import {ref} from "vue"
import copy from 'copy-to-clipboard'

let start= ref(1)
let end = ref(100)
let count = ref(1)
let suijishu = ref([0])
let NumberRegExp= /^(0|\+?[1-9][0-9]*)$/


const changestart = (e) => {
  if(NumberRegExp.test(start.value) == false){
    message.error('最小值请输入正整数');
    return
  }
  start.value=e.currentTarget.value
  console.log(start.value)
  

}

const changeend = (e) => {
  if(NumberRegExp.test(end.value) == false){
    message.error('最大值请输入正整数');
    return
  }
  end.value = e.currentTarget.value
  console.log(end.value)
  
}

const changecount = (e) => {
  if(NumberRegExp.test(count.value) == false){
    message.error('生成个数请输入正整数');
    return
  }
  count.value = e.currentTarget.value
  console.log(count.value)
  
}

const shengcheng = () => {
  var s = parseInt(start.value)
  var e = parseInt(end.value)
  var c = parseInt(count.value)
  if (c>100){
    message.error('生成个数不能超过100个');
    return
  }
  if (c<1){
    message.error('生成个数不能小于1个');
    return
  }
  if (e<=s){
    message.error('最大值不能小于等于最小值');
    return
  }
 
   if(NumberRegExp.test(start.value) == false){
    message.error('最小值请输入正整数');
    return
  }
   if(NumberRegExp.test(end.value) == false){
    message.error('最大值请输入正整数');
    return
  }
  if(NumberRegExp.test(count.value) == false){
    message.error('生成个数请输入正整数');
    return
  }

  
        // console.log('start:'+s)
        // console.log('end:'+e)
        suijishu.value = []
        for (var i=0 ; i < c; i++) {
            let tmp = Math.round(Math.random()*(e-s)+s)
            //防止重复
            if(suijishu.value.indexOf(tmp) == -1){
              suijishu.value.push(tmp)
            }else{
              i--
            }
            
        }
        //this.formData.suijishu = suijishu
        
        console.log(suijishu.value)
}

const reset = () => {

  start.value = 1
  end.value = 100
  count.value = 1
  suijishu.value = [0]
   console.log(start.value)
  console.log(end.value)
  console.log(count.value)
  
}

const copythat = () => {
  let re = copy(suijishu.value)
  if(re){
    message.success('成功复制到剪切板');
  }else{
    message.error('复制失败，请手动复制');
  }
  
  
}

</script>



<template>

  <img class="headshot" alt="headshot" src="./assets/headshot.jpg" />
     
  <a-row>
      <a-col :span="12" :offset="6" type="flex" justify="center" align="center">
        
  <div style=" padding:30px;">
    <a-card class="card "  :bordered="true" headStyle="T">
      <h1 style="margin-bottom:0px">唯灵の随机数生成器</h1>
      <p style="color:white;margin:0px">喜欢可以在B站点下关注哟~</p>
      <a href="https://space.bilibili.com/1823778" target="_blank">B站主页 </a>
      <a href="https://github.com/wierli/wierli_RandomGenerater/tree/master" target="_blank"> Github仓库</a>
      <br><br>
      
      
      <a-input :value="start" @change="changestart($event)" placeholder="请输入最小值" addonBefore="最小值" defaultValue="1" style="width: 200px;" />
      <br><br>
      
      <a-input  :value="end" @change="changeend($event)" placeholder="请输入最大值" addonBefore="最大值" defaultValue="100" style="width: 200px;" />
      <br><br>
     
      <a-input :value="count" @change="changecount($event)" placeholder="请输入生成个数" addonBefore="生成个数" defaultValue="1" style="width: 200px;" :min="1" :max="100"/>
      <br><br>
      
      <span v-for="(n,i) in suijishu" :key="n" class="result">
        <span v-if="i === suijishu.length-1">
          {{n}}
       
        
        </span>
        <span v-else>
          {{n}},
        
        </span>

      </span>
      <br><br>
      <a-button value="small" @click="copythat">
        复制结果剪切板
      </a-button>
      <br><br>
      <a-button type="primary" @click="shengcheng()">
        生成
      </a-button>
      
      <a-button type="default" @click="reset()">
        重置
      </a-button>

      
    </a-card>
  </div>
  </a-col>
    </a-row>


  
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
h1{
  color: white !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
body{
  background: url("assets/bg.jpg");
  background-size: auto auto;
  background-position: center center;
  animation: bg 65s linear infinite;
  overflow: hidden;
}
@keyframes bg {
  0% {
    background-position-y: 0px;
  }
  100%{
    background-position-y: 1080px;
  }
}
.headshot {
  width: 100px;
  border: 3px solid white;
  border-radius: 100px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
}
.card{
  width:500px;
  background:rgba(255,255,255,0.3) !important;
  z-index: 0;/* 为不影响内容显示必须为最高层 */
  position: relative;
  overflow: hidden;
  border-radius: 15px !important;
}
.card:before{
  content: "";/* 必须包括 */
  position: absolute;/* 固定模糊层位置 */
  width:300%;
  height:300%;
  left: -100%;/* 回调模糊层位置 */
  top: -100%;/* 回调模糊层位置 */
  background:url("assets/bg.jpg") repeat center center fixed;/* 与上面的bg中的background设置一样 */
  filter: blur(10px);/* 值越大越模糊 */
  z-index: -2;/* 模糊层在最下面 */
  animation: bg 65s linear infinite;
}
.result{
  color: white;
  font-size: 16px;
}

</style>