<template>
    <div id="login">
        <div class="bg_img">
            <div class="title">神农架可视化综合指挥中心</div>
            <div class="login_box">
                <div class="login_title">用户登录</div>
                <div class="login_user_name">
                    <el-input placeholder="请输入用户名" size="large">
                        <i
                            slot="prefix"
                            class="el-input__icon el-icon-user-solid"
                        >
                            |
                        </i>
                    </el-input>
                </div>
                <div class="login_password">
                    <el-input placeholder="请输入密码">
                        <i slot="prefix" class="el-input__icon el-icon-unlock">
                            |
                        </i>
                    </el-input>
                </div>
                <div class="about_passward">
                    <div class="remember">
                        <input type="checkbox" name id />
                        <span>记住密码</span>
                    </div>
                    <div class="forgot">忘记密码？</div>
                </div>
                <div class="login_btn" @click="goHome">登录</div>
            </div>
            <div class="footer">湖北智旅云科技有限公司授权</div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "login",
    methods: {
        goHome() {
            this.$router.push({ path: "/home" });
        }
    }
};
</script>
<style lang="less" scoped>
.bg_img {
    height: 100%;
    width: 100%;
    background: url("../assets/img/background_img.png") no-repeat top;
    background-size: cover;
}

#login,
.bg_img {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
}

.title {
    width: 100%;
    margin-top: 203px;
    height: 55px;
    text-align: center;
    font-size: 60px;
    font-family: RTWSShangGoG0v1-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 47px;
    text-shadow: 0px 2px 3px rgba(1, 54, 103, 1);
}
.login_box {
    box-sizing: border-box;
    height: 468px;
    width: 480px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -30%);
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(26, 139, 255, 1);
    padding: 0 80px 72px 83px;
    opacity: 0.91;
    .login_title {
        width: 100%;
        text-align: center;
        margin-top: 73px;
        height: 28px;
        font-size: 30px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(51, 78, 213, 1);
        line-height: 33px;
    }

    .login_user_name,
    .login_password {
        margin-top: 40px;
        color: #96a4ec;
        /deep/input::-webkit-input-placeholder {
            color: #95a4ef;
        }
        /deep/input::-moz-input-placeholder {
            color: #95a4ef;
        }
        /deep/ input::-ms-input-placeholder {
            color: #95a4ef;
        }
        /deep/ .el-input__inner {
            border: 1px solod #95a4ef;
        }
    }

    .about_passward {
        font-size: 12px;
        color: #324bca;
        padding: 50px 0;
        width: 100%;

        .remember {
            float: left;
            input {
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
                &:hover {
                    cursor: pointer;
                }
            }
        }

        .forgot {
            float: right;
            &:hover {
                cursor: pointer;
            }
        }
    }

    .login_btn {
        text-align: center;
        color: #fff;
        width: 100%;
        height: 44px;
        background: rgba(96, 119, 239, 1);
        border-radius: 4px;
    }
    .login_btn::before {
        display: inline-block;
        content: "";
        height: 100%;
        vertical-align: middle;
    }
}
.footer {
    color: rgba(231, 251, 255, 1);
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 61px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    opacity: 0.74;
}
</style>
