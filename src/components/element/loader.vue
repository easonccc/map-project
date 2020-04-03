<template>
    <div class='loader-body'>
        <div class="loader">
            <div class="loader-inner line-scale-pulse-out">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <p class="loader-info" ref="loaderInfo">{{info}}</p>
    </div>
</template>
<script>
export default {
    name: 'laoder',
    data() {
        return {
            info: "数 据 加 载 中 . . ."
        }
    },
    mounted() {
        setTimeout(
            () => {
                this.info = "暂 无 数 据"
            }, 6000
        )
    }
}

</script>
<style>
.loader-info {
    color: #fff;
    font-size: 12px;
    margin: 0;
}

.loader-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
}

.loaders .loader {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 25%;
    max-width: 25%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
}

@-webkit-keyframes line-scale-pulse-out {
    0% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }

    50% {
        -webkit-transform: scaley(0.4);
        transform: scaley(0.4);
    }

    100% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }
}

@keyframes line-scale-pulse-out {
    0% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }

    50% {
        -webkit-transform: scaley(0.4);
        transform: scaley(0.4);
    }

    100% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }
}

.line-scale-pulse-out>div {
    background-color: #fff;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: line-scale-pulse-out 0.9s 0s infinite cubic-bezier(.85, .25, .37, .85);
    animation: line-scale-pulse-out 0.9s 0s infinite cubic-bezier(.85, .25, .37, .85);
}

.line-scale-pulse-out>div:nth-child(2),
.line-scale-pulse-out>div:nth-child(4) {
    -webkit-animation-delay: 0.2s !important;
    animation-delay: 0.2s !important;
}

.line-scale-pulse-out>div:nth-child(1),
.line-scale-pulse-out>div:nth-child(5) {
    -webkit-animation-delay: 0.4s !important;
    animation-delay: 0.4s !important;
}

</style>
