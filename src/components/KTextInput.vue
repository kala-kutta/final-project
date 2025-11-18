<script setup lang="ts">
import type { TextInputController } from "./controllers";

const props = defineProps<{
  label?: string,
  placeholder?: string,
  type?: string
  controller: TextInputController,
  oninput: () => void
}>();

</script>

<template>
  <div class="flex flex-col w-fit">
    <label class="text-xs px-2 py-0.5"> {{ props.label }} </label>
    <input
      v-model="props.controller.value.value"
      :class="[
        'shadow-xs border-2 focus:shadow-sm outline-none px-3 py-2 rounded-md placeholder:text-xs text-xs min-w-xs transition-all duration-150',
        props.controller.errorMessage.value ? 'border-rose-700 error-anim' : 'border-gray-200'
      ]"
      :name="props.controller.name"
      :placeholder="placeholder"
      :type="props.type ? props.type : 'text'"
      @input="props.oninput"
    >

    <div
      v-if="props.controller.errorMessage.value"
      class="text-xs text-rose-700 px-2 font-black"
    >
      {{ props.controller.errorMessage.value }}
    </div>
  </div>
</template>

<style scoped></style>