<template>
  <div class="watermark-container">
    <div class="small-title">
      <strong>4.使用伪类元素实现水印背景</strong>
      <ul>
        <li>属性:content与:before 及 :after 伪元素配合使用，来插入生成内容</li>
      </ul>
    </div>
    <!-- 水印内容具体实现 -->
    <div class="watermark">
      <p class="p-text">
        When a file is edited in a bundler-based build setup, it is inefficient to rebuild the whole bundle for obvious
        reasons: the update speed will degrade linearly with the size of the app.

        Some bundler dev server runs the bundling in memory so that it only needs to invalidate part of its module graph
        when a file changes, but it still needs to re-construct the entire bundle and reload the web page.
        Reconstructing the bundle can be expensive, and reloading the page blows away the current state of the
        application. This is why some bundlers support Hot Module Replacement (HMR): allowing a module to "hot replace"
        itself without affecting the rest of the page. This greatly improves DX - however, in practice we've found that
        even HMR update speed deteriorates significantly as the size of the application grows.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "watermark"
}
</script>

<style lang="less" scoped>
.watermark-container {
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

  /***** 水印具体css实现 *****/

  .watermark {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: auto;

    .p-text {
      padding: 45px;
      /* 文本缩进 */
      text-indent: 40px;
      font-size: 14px;
      font-weight: normal;
      /* 字体间距属性: 字母和中文字之间的左右间距 */
      letter-spacing: 3px;
      /* 字体间距属性:两个单词之间的左右间距 */
      word-spacing: 3px;
      /** 行与行之间的距离 **/
      line-height: 40px;
      z-index: 10;
    }

    .p-text:before {
      position: absolute;
      top: 270px;
      z-index: 0;
      /** 角度调整 **/
      transform: rotate(45deg);
      /*content 属性与 :before 及 :after 伪元素配合使用，来插入生成内容。*/
      content: "2021/05/18";
      font-family: monospace;
      font-size: 88px;
      font-weight: bold;
      color: rgba(189, 198, 198, 0.5);
    }
  }
}

</style>