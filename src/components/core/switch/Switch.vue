<template>
  <div
    :class="$style.root"
  >
    <template
      v-for="(button, i) in buttons"
      :key="i"
      v-model="localModel"
    >
      <div
        :class="$style.button"
        @click="listType(button.value)"
      >
        <Icon :icon="button.icon" />
      </div>
      <div
        v-if="i + 1 !== buttons.length"
        :class="$style.divider"
      ></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/core/icon/Icon.vue';
import { computed, defineProps, ref } from 'vue';

const props = defineProps<{
  buttons: [],
}>();
const emit = defineEmits([
  'update:modelValue',
]);
const localModel = computed({
  get: () => props.buttons,

  set: (value) => {
    emit('update:modelValue', value);
  },
});

const type = ref('list');

const listType = (button: any) => {
  type.value = button;
  console.log(type.value);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  height: rem(20px);
  display: flex;
}
.button {
  cursor: pointer;
  width: rem(20px);
  height: rem(20px);
  display: flex;
}
.divider {
  width: rem(1px);
  height: rem(18px);
  background: rgb(var(--color-border));
  margin: 0 rem(16px);
}
</style>
