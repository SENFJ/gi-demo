import { createApp } from 'vue'
import { isObject } from '@/utils/typeof'
import Loading from '@/components/GiLoading.vue'

/**
 * @desc v-loading 指令
 * @param {el} 指令所绑定的元素, 可以直接操作DOM
 * @param {binding} 是一个对象, 包含该指令的所有信息
 *     arg 自定义指令的参数名
 *     value 自定义指令绑定的值
 *     oldValue 指令绑定的前一个值
 *     dir 被执行的钩子函数
 *     modifiers 一个包含修饰符的对象
 */

const name: string = Loading.name // 组件名(实例key)

function addClass(el: HTMLElement, className: string) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

function removeClass(el: HTMLElement, className: string) {
  el.classList.remove(className)
}

function append(el: any) {
  if (!['relative', 'absolute', 'fixed'].includes(el.style.position)) {
    addClass(el, 'gi_relative')
  }
  el.style['pointer-events'] = 'none'
  el.appendChild(el[name].instance.$el)
}

function remove(el: any) {
  removeClass(el, 'gi_relative')
  el.style['pointer-events'] = 'inherit'
  el.removeChild(el[name].instance.$el)
}

const app = createApp(Loading)
const instance = app.mount(document.createElement('div'))

// 创建实例
function createInstance(el: any, binding) {
  const loadingType = el.getAttribute('gi-loading-type')
  const loadingText = el.getAttribute('gi-loading-text')

  if (loadingType) {
    instance.setLoadingType(loadingType)
  }
  if (loadingText) {
    instance.setLoadingText(loadingText)
  }
  if (!el[name]) {
    el[name] = {}
  }
  el[name].instance = instance
  if (binding.value) {
    append(el)
  }
}

const loadingObj = {
  // 在绑定元素的父组件被挂载前调用
  mounted(el: any, binding) {
    console.log('el', el)
    console.log('binding', binding)
    createInstance(el, binding)
  },
  // 在包含组件的 VNode 及其子组件的 VNode 更新后调用
  updated(el: HTMLElement, binding) {
    if (!el[name]) {
      el[name] = {}
    }
    if (binding.value !== binding.oldValue) {
      createInstance(el, binding)
      if (!binding.value) {
        remove(el)
      }
    }
  },
  // 在卸载绑定元素的父组件之前调用
  beforeUnmount(el: HTMLElement, binding) {},
  // 当指令与元素解除绑定且父组件已卸载时，只调用一次
  unmounted(el: HTMLElement, binding) {}
}

export default loadingObj
