<template>
  <div class="container">
    <h3>CARLOS' DASHBOARD</h3>
    <iframe :src="reactAppUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Update this URL to match the path of your React app's index.html
      reactAppUrl: 'https://daily-dashboard-c289f.firebaseapp.com/',
    };
  },
};
</script>

<style>
.container {
  margin-top: 150px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container iframe {
  padding-top: 10px;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 850px) {
  .container {
    padding-top: 250px;
  }

  .container iframe {
    padding-top: 0px;
  }
}
</style>
