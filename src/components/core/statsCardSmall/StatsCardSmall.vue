<template>
  <div :class="$style.root">
    <div :class="$style.data">
      <div :class="$style.heading">
        {{ statistics.text }}
      </div>
      <div :class="$style.statWrap">
        <div :class="$style.stat">
          {{ statistics.value }}
        </div>
        <div :class="$style.percentsWrapper">
          <div
            :class="{
              [$style.arrowGreen]: statistics.percents.isIncrease,
              [$style.arrowRed]: !statistics.percents.isIncrease
            }"
          >
            <Icon icon="arrow" />
          </div>
          <div
            :class="{
              [$style.percentsGreen]: statistics.percents.isIncrease,
              [$style.percentsRed]: !statistics.percents.isIncrease,
            }"
          >
            {{ statistics.percents.value }}%
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.iconWrap">
      <Icon
        :icon="statistics.icon"
        :class="$style.icon"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/core/icon/Icon.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  statistics: [],
}>();

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: rem(120px);
  padding: rem(16px);
  background-color: rgb(var(--color-surface));
  border-radius: rem(20px);
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
}
.data {
  padding: rem(12px) rem(8px);
}
.heading {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}
.statWrap {
  margin-top: rem(1px);
  display: flex;
  align-items: flex-end;
}
.stat {
  font-size: rem(30px);
  font-weight: 500;
  color: rgb(var(--color-heading));
}
.percentsWrapper {
  display: flex;
  margin-bottom: rem(7px);
  align-items: center;
  margin-left: rem(11px);
}
.percentsGreen {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-green));
  &:hover {
    color: rgb(var(--color-blue));
  }
}
.percentsRed {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-red));
}
.arrowGreen {
  width: rem(12px);
  height: rem(11px);
  rotate: 90deg;
  color: rgb(var(--color-green));
  margin-right: rem(3px);
}
.arrowRed {
  width: rem(12px);
  height: rem(11px);
  rotate: 270deg;
  color: rgb(var(--color-red));
  margin-right: rem(3px);
}
.iconWrap {
  width: rem(88px);
  height: rem(88px);
  border-radius: rem(20px);
  background: rgba(255, 150, 93, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

}
.icon {
  width: rem(60px);
  height: rem(60px);
  color: rgb(var(--color-orange));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
