<template>
  <div class="login-box-form">
    <Form
      ref="formRef"
      :model="form"
      :style="{ width: '320px' }"
      @submit="handleSubmit"
    >
      <FormItem field="username">
        <Input
          v-model="form.username"
          placeholder="用户名"
          :style="{ width: '320px' }"
        >
          <template #prefix>
            <IconUser />
          </template>
        </Input>
      </FormItem>
      <FormItem field="password">
        <Input
          v-model="form.password"
          placeholder="密码"
          :style="{ width: '320px' }"
        >
          <template #prefix>
            <IconLock />
          </template>
        </Input>
      </FormItem>
      <FormItem :style="{ marginTop: '15px' }">
        <Button
          html-type="submit"
          type="primary"
          :style="{ marginRight: '24px' }"
          >登录</Button
        >
        <Button @click="handleReset">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import { Form, FormItem, Button, Input } from "@arco-design/web-vue"
import { IconUser, IconLock } from "@arco-design/web-vue/es/icon"
// 表单ref对象
const formRef = ref<InstanceType<typeof Form> | null>(null)
const form = reactive({
  username: "",
  password: "",
  isRead: false
})
// 提交表单
const handleSubmit = (data: any) => {
  console.log(data)
}
// 重置表单
const handleReset = () => {
  formRef.value?.resetFields()
}
</script>

<style lang="scss" scoped></style>
