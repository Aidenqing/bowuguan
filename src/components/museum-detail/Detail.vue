<template>
<div class="exhibits">

</div>
</template>

<script>
import {ERR_OK} from '@/common/config'
import {getUrlParam} from '@/common/common'
export default {
  created () {
    this._getExhibits()
  },
  data () {
    return {
      width: 0,
      height: 0,
      oheight: 0,
      left: 0,

      index: 0,
      exhibitsId: ''
    }
  },
  methods: {

  }

}
</script>

<style scoped >
  .exhibits{
    height: 100%;
    overflow-y: hidden;
  }
.leftimg{
  position: fixed;
  bottom: 60%;
  left: 5px;
  width: 30px;
  z-index: 999;

}
.rightimg{
  filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  position: fixed;
  bottom: 60%;
  right: 5px;
  width: 30px;
  z-index: 999;
}
#app .background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(20px);
  background: #afa6a6;
}
.indroduce{

  margin-top: 20px;
  color: white;
  font-size: 14px;
}
.info{
  position: fixed;
  left: 4px;
  font-size: 14px;
  color: #ffc240;
}
.info span{
  color: white;
}
.info .collectCount{
  font-size: 12px;
}
.info .name{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.info img{
  height: 20px;
  width: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
[v-cloak] {
  display: none;
}
.video{
  position: fixed;
  bottom: 25%;
}
#BG{
  background-repeat: no-repeat;
  background-size: 100% 100%;

}

</style>
