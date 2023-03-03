<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{ user.displayName }}</p>
      <p>{{ user.email }}</p>
      <button @click="logout">ログアウト</button>
    </div>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase"
export default {
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  },
  created() {
    const user = firebase.auth().currentUser
    if (user) {
      this.user = user
    } else {
      this.$router.push('/')
      return
    }
  }
}
</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>