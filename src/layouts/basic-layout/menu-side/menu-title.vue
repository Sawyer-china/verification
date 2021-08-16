<template>
    <span class="i-layout-menu-side-title" :class="{ 'i-layout-menu-side-title-with-collapse': collapse }">
        <span class="i-layout-menu-side-title-icon" :class="{ 'i-layout-menu-side-title-icon-single': hideTitle }" v-if="withIcon">
            <Icon :type="menu.icon" v-if="menu.icon" />
            <Icon :custom="menu.custom" v-else-if="menu.custom" />
            <img :src="menu.img" v-else-if="menu.img" />
        </span>
        <span class="i-layout-menu-side-title-text" :class="{ 'i-layout-menu-side-title-text-selected': selected, 'i-layout-menu-side-title-text-with-subtitle': menu.subtitle, 'i-layout-menu-side-title-text-with-icon': withIcon }" v-if="!hideTitle">{{ tTitle(menu.title) }}<em v-if="menu.subtitle">{{ tTitle(menu.subtitle) }}</em></span>
    </span>
</template>
<script>
    import tTitle from '../mixins/translate-title';

    export default {
        name: 'iMenuSideTitle',
        mixins: [ tTitle ],
        props: {
            menu: {
                type: Object,
                default () {
                    return {}
                }
            },
            hideTitle: {
                type: Boolean,
                default: false
            },
            // 用于侧边栏收起 Dropdown 当前高亮
            selected: {
                type: Boolean,
                default: false
            },
            // 侧边栏折叠状态
            collapse: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            withIcon () {
                return this.menu.icon || this.menu.custom || this.menu.img;
            }
        }
    }
</script>
