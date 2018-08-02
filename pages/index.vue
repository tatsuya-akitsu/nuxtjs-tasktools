<template>
  <section id="app" class="md-container">
    <header class="l-header">
      <div class="md-wrapper--head">
        <h1 class="md-title md-title--main"><a href="/">master</a></h1>
        <a href="/login" class="md-btn btn--style02">ログイン</a>
      </div>
    </header>
    <div class="l-container">
      <div class="main-box">
        <div class="main-box--leftPanel">
          <img src="~/static/images/main.svg" alt="" />
        </div>
        <div class="main-box--rightPanel">
          <h2 class="md-title md-title--catch">より分かりやすく、よりシンプルに</h2>
          <p class="md-text md-text--main">
            masterはより分かりやすく、よりシンプルに管理しやすいチーム開発管理ツールを目指しています。<br>
            ガントチャート、カンバン、ドキュメントなどの更新…チーム制作ではあらゆる管理と工数が発生します。<br>
            その度に複数のツールを使い分けるのは更に手間です。<br>
            masterではそんな悩みを一括で管理し解決することでよりチーム開発が行いやすいようにしていくことを目指しています。
          </p>
          <a href="/signup" class="md-btn btn--style01">masterを始める</a>
          <p class="md-text md-text--small">すでにアカウントをお持ちの方は<a href="login" @click="login">こちら</a>よりログインしてください</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'normalize.css'
import '~/assets/scss/style.scss'
export default {
  name: 'top',
}
</script>
