# vue3自定义组件v-model使用案例

[[TOC]]
## 子组件配置

```html
<template>
  <div>
    <label
       v-if="label !== ''"
       :for="id"
       class="form-label"
    >
        {{ label }}
    </label>
    <input
       class="form-control"
       :value="value"
       :type="password ? 'password' : 'text'"
       :id="id"
       :placeholder="placeholder"
       @input="changeHandler"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { guid } from '@xizher/js-extension/utils'
export default defineComponent({
  name: 'BsInput',
  props: {
    label: { type: String, default: ''},
    placeholder: { type: String, default: ''},
    value: { type: String, default: '' },
    password: Boolean,
  },
  setup (props, { emit }) {
    const id = guid()
    const changeHandler = event => {
      emit('update:value', event.target.value) // ※
    }
    return {
      id,
      changeHandler,
    }
  }
})
</script>
```

## 父组件配置

```html
<template>
  <bs-input v-model:value="text"></bs-input>
  <!--
	若直接使用 v-model="" 的形式，则
	子组件配置： 
	  :value="value" 变为➡ :modelValue="value"
	  emit('update:value', event.target.value) 
		变为 ⬇
	  emit('update:modelValue', event.target.value)
  -->
</template>
```
