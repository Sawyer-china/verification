<template>
    <div class="i-frame">
        <iframe v-if="ready" :src="src" frameborder="0" class="i-frame-iframe"></iframe>
    </div>
</template>
<script>
    const noMarginClassName = 'i-layout-content-main-no-margin';
    const noCopyrightClassName = 'i-copyright-hidden';
    const contextFlexClassName = 'i-layout-content-flex';
    const contextMainFlexClassName = 'i-layout-content-main-flex';

    export default {
        name: 'i-frame',
        props: {
            src: {
                type: String,
                default: ''
            },
            // 是否保留默认左右边距（24px）
            margin: {
                type: Boolean,
                default: false
            },
            // 是否显示底部版权
            copyright: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                ready: false,
                $content: null,
                $copyright: null,
                $layoutContent: null,
                $layoutContentMain: null
            }
        },
        watch: {
            margin: {
                handler (val) {
                    this.$nextTick(() => {
                        if (this.$content) {
                            if (!val) {
                                this.$content.classList.add(noMarginClassName);
                            } else {
                                this.$content.classList.remove(noMarginClassName);
                            }
                        }
                    });
                },
                immediate: true
            }
        },
        mounted () {
            this.$content = document.getElementsByClassName('i-layout-content-main')[0];

            this.$copyright = document.getElementsByClassName('i-copyright')[0];
            if (this.$copyright && !this.copyright) this.$copyright.classList.add(noCopyrightClassName);

            this.$layoutContent = document.getElementsByClassName('i-layout-content')[0];
            if (this.$layoutContent) this.$layoutContent.classList.add(contextFlexClassName);

            this.$layoutContentMain = document.getElementsByClassName('i-layout-content-main')[0];
            if (this.$layoutContentMain) this.$layoutContentMain.classList.add(contextMainFlexClassName);

            this.$nextTick(() => {
                this.ready = true;
            });
        },
        beforeDestroy () {
            if (this.$content) this.$content.classList.remove(noMarginClassName);
            if (this.$copyright) this.$copyright.classList.remove(noCopyrightClassName);
            if (this.$layoutContent) this.$layoutContent.classList.remove(contextFlexClassName);
            if (this.$layoutContentMain) this.$layoutContentMain.classList.remove(contextMainFlexClassName);
            this.$content = null;
            this.$copyright = null;
            this.$layoutContent = null;
            this.$layoutContentMain = null;
        }
    }
</script>
<style lang="less">
    .i-frame{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        overflow-y: auto;

        &-iframe{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
</style>
