<template>
  <div class="chooseElement-container">
    <div class="small-title">
      <strong>5. 使用:nth-child()选择指定元素</strong>
      <ul>
        <li> 要点：通过:nth-child()筛选指定的元素设置样式</li>
        <li>场景：表格着色、边界元素排版(首元素、尾元素、左右两边元素)</li>
        <li>nth-child()</li>
        <!-- 选择指定元素 -->
        <div class="chooseElement">
          <ul class="specified-scope">
            <li>10001</li>
            <li>10002</li>
            <li>10003</li>
            <li>10004</li>
            <li>10005</li>
            <li>10006</li>
            <li>10007</li>
            <li>10008</li>
            <li>10009</li>
            <li>10010</li>
          </ul>

        </div>
      </ul>
    </div>
    <!-- 水印内容具体实现 -->
    <div class="watermark">
    </div>
  </div>
</template>

<script>
export default {
  name: "chooseTheElement"
}
</script>

<style lang="less" scoped>
.chooseElement-container {
  position: relative;
  width: 800px;
  color: #fff;
  margin-top: 40px;

  div {
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

  /***** 不同的元素书写不同的颜色 *****/

  .chooseElement {
    .specified-scope {
      width: 300px;
      list-style: none;
      margin-top: 40px;

      li {
        line-height: 40px;
        color: #fff;

        //偶数项
        &:nth-child(odd) {
          background-color: #f66;
        }

        //基数项
        &:nth-child(even) {
          background-color: #66f;
        }

        &:nth-child(n+6):nth-child(-n+10) {
          background-color: #3c9;
        }
      }
    }
  }

}

</style>