import { defineStore } from 'pinia'
import { generate, getRgbStr } from '@arco-design/color'
import defaultSettings from '@/config/setting.json'
import type { TabModeType, animateModeType } from '@/config/option'

type ThemeState = {
  theme: 'light' | 'dark'
  themeColor: string
  header: boolean
  footer: boolean
  menu: boolean
  hideMenu: boolean
  menuWidth: number
  menuCollapse: boolean
  tab: boolean
  tabMode: string
  animate: boolean
  animateMode: string
}

const ThemeStorage = JSON.parse(localStorage.getItem('Theme') || '{}')

export const useThemeStore = defineStore({
  id: 'Theme',
  state: (): ThemeState => {
    return {
      ...defaultSettings,
      ...ThemeStorage
    }
  },
  getters: {
    transitionName(): string {
      return this.animate ? this.animateMode : ''
    }
  },
  actions: {
    // 初始化主题
    initTheme() {
      if (this.theme === 'dark') {
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        document.body.removeAttribute('arco-theme')
      }
      this.changeThemeColor(this.themeColor)
    },
    // 切换主题  暗黑模式|简白模式
    toggleTheme() {
      if (this.theme === 'light') {
        document.body.setAttribute('arco-theme', 'dark')
        this.theme = 'dark'
        localStorage.setItem('Theme', JSON.stringify(this.$state))
      } else {
        document.body.removeAttribute('arco-theme')
        this.theme = 'light'
        localStorage.setItem('Theme', JSON.stringify(this.$state))
      }
      this.changeThemeColor(this.themeColor)
    },
    // 设置主题色
    setThemeColor(color: string) {
      this.themeColor = color
      localStorage.setItem('Theme', JSON.stringify(this.$state))
    },
    // 改变主题色
    changeThemeColor(themeColor: string) {
      const list = generate(themeColor, { list: true, dark: this.theme === 'dark' ? true : false })
      list.forEach((color: string, index: number) => {
        const rgbStr = getRgbStr(color)
        document.body.style.setProperty(`--primary-${index + 1}`, rgbStr)
      })
    },
    // 设置页签可见
    setTabVisible(visible: boolean) {
      this.tab = visible
      localStorage.setItem('Theme', JSON.stringify(this.$state))
    },
    // 设置页签的样式类型
    setTabMode(mode: TabModeType) {
      this.tabMode = mode
      localStorage.setItem('Theme', JSON.stringify(this.$state))
    },
    // 设置是否使用过渡动画
    setAnimateVisible(visible: boolean) {
      this.animate = visible
      localStorage.setItem('Theme', JSON.stringify(this.$state))
    },
    // 设置页面过渡动画类型
    setAnimateMode(mode: animateModeType) {
      this.animateMode = mode
      localStorage.setItem('Theme', JSON.stringify(this.$state))
    }
  }
})
