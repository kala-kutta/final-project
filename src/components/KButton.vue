<script setup lang="ts">
import type { ButtonController } from "./controllers";

const props = defineProps<{
  label?: string,
  controller: ButtonController,
  onclick: () => Promise<void> | void,
  asynchronous?: boolean
}>();

async function onClickHandler() {
  if (props.asynchronous) {
    props.controller.setLoading();
    await props.onclick();
    props.controller.clearLoading();
  }
  else {
    await props.onclick();
  }
}

</script>

<template>
  <button
    :name="props.controller.name"
    class="text-xs shadow bg-stone-800 hover:bg-stone-950 text-gray-50 font-bold w-full py-2.5 rounded-md cursor-pointer transition-all duration-200"
    @click.prevent="onClickHandler"
  >
    <span v-if="props.label">
      {{ props.label }}
    </span>
    <span v-else>
      <slot />
    </span>
    <div v-if="props.controller.errorMessage.value">
      {{ props.controller.errorMessage.value }}
    </div>
  </button>
</template>