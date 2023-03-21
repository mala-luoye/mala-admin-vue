<template>
  <div class="login-box-form">
    <Form
      ref="formRef"
      :model="form"
      :style="{ width: '320px' }"
      @submit="handleSubmit"
    >
      <FormItem field="username" :rules="[{ required: true }]">
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
      <FormItem field="password" :rules="[{ required: true }]">
        <InputPassword
          v-model="form.password"
          placeholder="密码"
          :style="{ width: '320px' }"
        >
          <template #prefix>
            <IconLock />
          </template>
        </InputPassword>
      </FormItem>
      <FormItem :style="{ marginTop: '15px' }">
        <Button
          html-type="submit"
          type="primary"
          :style="{ width: '80px', marginRight: '24px' }"
          :loading="loading"
          >登录</Button
        >
        <Button @click="handleReset" :style="{ width: '80px' }">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import {
  Form,
  FormItem,
  Button,
  Input,
  InputPassword,
  Message
} from "@arco-design/web-vue"
import { IconUser, IconLock } from "@arco-design/web-vue/es/icon"
import { cache } from "@/utils"
const router = useRouter()
const loading = ref(false)
// 表单ref对象
const formRef = ref<InstanceType<typeof Form> | null>(null)
const form = reactive({
  username: "",
  password: ""
})
// 提交表单
const handleSubmit = async () => {
  // 验证表单
  const res = await formRef.value?.validate()
  if (res) return
  // 设置loading效果
  loading.value = true
  const { username, password } = form
  // 权限处理
  switch (username) {
    case "admin":
      cache.setCache("token", { username, auth: 1 })
      break
    default:
      cache.setCache("token", { username, auth: 2 })
  }
  // 路由跳转
  setTimeout(() => {
    Message.success("登录成功")
    router.push("/home")
  }, 2000)
}
// 重置表单
const handleReset = () => {
  formRef.value?.resetFields()
}
</script>

<style lang="scss" scoped></style>
