<template>
  <div :class="$style.root">
    <div :class="$style.mainPic" />
    <div :class="$style.smallPics">
      <div
        v-for="pic in pictures"
        :key="pic"
        :class="$style.smallPic"
      >
        <img
          :src="pic"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  pictures: []
}>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.mainPic {
  width: rem(400px);
  height: rem(556px);
  background-color: #000;
}

.smallPics {
  margin-top: rem(16px);
  max-width: rem(400px);
  height: rem(100px);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.smallPic {
  width: rem(90px);
  height: rem(100px);
  background-color: white;
}
</style>
