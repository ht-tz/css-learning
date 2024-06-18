<template>
  <div class="list">
    <p>
      <strong>参数列表自适应对齐 </strong>
    </p>
    <!-- display:table -->
    <div class="data-list">
      <div class="param-item">
        <div class="param-cell font-bold">key</div>
        <div class="param-cell font-bold">value</div>
      </div>
      <div class="param-item" v-for="(item,index) in  data" :key="index">
        <div class="param-cell">{{ item.name }}</div>
        <div class="param-cell">{{ item.value }}</div>
      </div>
    </div>

    <p>
      <strong> div列表对齐 </strong>
    </p>
    <!-- div实现列表自定对齐 -->
    <div class="list-container">
      <div class="flex-container" v-for="(item,index) in data" :key="index">
        <div class="list-left">{{ item.name }}</div>
        <div class="list-right">{{ item.value }}</div>
      </div>
    </div>
    <p>
      <strong> ul-li列表对齐 </strong>
    </p>
    <!-- 使用ul实现列表对齐 -->
    <ul class="ul-container">
      <li class="li-list" v-for="(item,index) in data" :key="index">
        <div class="left">{{ item.name }}</div>
        <div class="right">{{ item.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'li-alignment',
  setup: () => {

    //列表参数
    const data: array = [
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
      {value: '不同的方式实现列表', name: 'css技巧分享'},
    ];

    return {
      data,
    }
  }
})
</script>
<style lang="less" scoped>
.list {
  position: relative;
  width: 800px;
  color: #fff;

  p {
    cursor: pointer;
    line-height: 2.2vmin;
    font-size: 2vmin;
    color: #fff;

    strong {
      display: inline-block;
      margin: 0 3px;
      border-radius: 5px;
      line-height: 20px;
      color: #fff;

      .span {
        color: #fff;
        font-size: 1.8vmin;
      }
    }
  }


  .data-list {
    display: table;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;

    .param-item {
      display: table-row;
    }

    .param-cell {
      display: table-cell;
      /* padding: 10px; */
      width: 200px;
      height: 40px;
      line-height: 40px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      /* 缩进距离，调整文字与边框的高度 */
      text-indent: 10px;
      //text-align: center;
    }

    .font-bold {
      font-weight: bold;
    }
  }

  .list-container {
    position: relative;
    width: 400px;
    //background-color:#fff;
    /** 绘制外层边框 **/
    border: solid 1px rgb(225, 227, 230);
    /*去除最后底部,*/
    //border-bottom: none;

    margin-bottom: 40px;

    .flex-container {
      display: flex;
      justify-content: flex-start;
      height: 40px;
      line-height: 40px;
      /* 每一个div绘制底部边框 */
      border-bottom: 1px solid #ececec;
      color: #fff;
      padding-right: 9px;
      font-size: 14px;


      .list-left {
        height: 100%;
        width: 50%;
        padding-left: 10px;
        text-align: left;
        border-right: 1px solid #ececec;
      }

      .list-right {
        height: 100%;
        padding-left: 10px;
        width: 50%;
      }
    }

    /* 不去除最外层底部的边框 最后的元素设置*/

    div:last-child {
      border-bottom: none
    }

  }

  .ul-container {
    /*浏览器中有默认的padding和margin*/
    margin: 0;
    padding: 0;
    position: relative;
    width: 400px;
    //margin: 20px 0px;
    border: solid 1px rgb(225, 227, 230);
    border-bottom: none;

    .li-list {
      display: flex;
      justify-content: flex-start;
      height: 40px;
      line-height: 40px;
      /* 每一个div绘制底部边框 */
      border-bottom: 1px solid #ececec;
      color: #fff;
      font-size: 14px;
      list-style-type: none;


      .left {
        height: 100%;
        width: 50%;
        border-right: 1px solid #ececec;
      }

      .right {
        height: 100%;
        width: 50%;
      }

      li:first-child {
        border-right: none;
      }
    }


  }
}
</style>