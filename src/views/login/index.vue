<template>
  <div class="login">
    <h2>重庆市可视化综合指挥中心</h2>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      label-width="0px"
      class="login-form"
    >
      <h3 class="title">
        用户登录
      </h3>
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user"
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
        </el-input>
      </el-form-item>

      <div>
        <el-checkbox
          v-model="loginForm.rememberMe"
          style="margin:0 0 25px 0;;color: rgb(117,129,229)"
        >
          记住我
        </el-checkbox>
        <a class="pull-right a" style="margin-top: 2px" href="javascript:;"
          >忘记密码?</a
        >
      </div>

      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div id="login-footer">
      <span>版权所有 智旅云</span>
      <span> ⋅ 2020</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      codeUrl: "",
      cookiePass: "",
      loginForm: {
        username: "admin",
        password: "",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [{ required: true, trigger: "blur", message: "密码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(validate => {
        const user = {
          username: this.loginForm.username,
          password: this.loginForm.password,
          rememberMe: this.loginForm.rememberMe,
          code: this.loginForm.code,
          uuid: this.loginForm.uuid
        };
        if (validate) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            if (user.username == "admin" && user.password == "123456") {
              this.$router.push({ path: "/nav" });
            } else {
              this.loading = false;
              this.$message.error("账号或密码错误");
            }
          }, 2000);
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("/img/background_image/bg.png");
  background-size: cover;
  position: relative;
  h2 {
    position: absolute;
    top: 150px;
    height: 55px;
    font-size: 60px;
    font-family: RTWS ShangGothic G0v1;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 47px;
    text-shadow: 0px 2px 3px rgba(1, 54, 103, 1);
  }
}
.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 385px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
  .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: rgb(108, 119, 203);
    font-size: 21px;
    letter-spacing: 5px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: rgb(117, 129, 229);
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
#login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial, serif;
  font-size: 12px;
  letter-spacing: 1px;
}
@media (max-width: 1800px) {
  .login {
    h2 {
      top: 100px;
    }
  }
}
</style>
