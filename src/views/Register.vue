<template>
  <div>
    <hm-header>注 册</hm-header>
    <hm-logo></hm-logo>

    <van-form class="register" @submit="onSubmit">
      <van-field
        v-model="user.username"
        placeholder="用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="user.nickname"
        placeholder="昵称"
        :rules="rules.nickname"
      />
      <van-field
        v-model="user.password"
        type="password"
        placeholder="密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" class="btn" native-type="submit">
          注 册
        </van-button>
        <p class="link">
          已有账号？去 <router-link to="/login">登录</router-link>
        </p>
      </div>
    </van-form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        nickname: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          {
            pattern: /^\d{5,11}$/,
            message: '用户名只能是5-11位数字',
            trigger: 'onChange'
          }
        ],
        nickname: [
          { required: true, message: '请填写昵称', trigger: 'onChange' },
          {
            pattern: /^[\u4e00-\u9fa5]{2,9}$/,
            message: '昵称只能是3-9位的文字',
            trigger: 'onChange'
          }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          {
            pattern: /^\w{3,12}$/,
            message: '用户密码在3-12位',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async onSubmit() {
      const res = await this.$axios.post('/register', this.user)
      console.log(res)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push({
          name: 'login',
          params: {
            username: this.user.username,
            password: this.user.password
          }
        })
      } else {
        this.$toast.success(message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register {
  .btn {
    margin-top: 40px;
  }
  .link {
    float: right;
    margin: 20px 10px 0 0;
    a {
      color: crimson;
    }
  }
  .van-cell {
    border-radius: 25px;
    width: 343px;
    margin: 10px auto;
  }
}
</style>
