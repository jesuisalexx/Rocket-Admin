<template>
  <div :class="$style.root">
    <div :class="$style.headingWrap">
      <div :class="$style.heading">
        {{ t('charts.statistics') }}
      </div>
      <Button
        variant="secondary"
        icon-before="calendar"
        icon-after="arrowDown3"
      >
        19 Aug – 25 Aug
      </Button>
    </div>
    <Chart :data="data" />
  </div>
</template>

<script lang="ts" setup>
import Chart from '@/components/core/chart/Chart.vue';
import Button from '@/components/core/button/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const data = {
  height: 300,
  type: 'bar',
  chartOptions: {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    legend: {
      horizontalAlign: 'right',
    },
  },
  series: [
    {
      name: 'Income',
      data: [200, 100, 220, 190, 200, 180, 150],
      color: '#0090FF',
    },
    {
      name: 'Expenses',
      data: [190, 172, 171, 80, 170, 140, 60],
      color: '#FF955C',
    },
  ],
};

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";
* {
  font-family: 'Poppins', sans-serif;
}
.root {
  width: auto;
  height: rem(400px);
  padding: rem(20px);
  background-color: rgb(var(--color-surface));
  border-radius: rem(20px);
}
.headingWrap {
  width: 100%;
  height: rem(40px);
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(10px);
}
.heading {
  font-size: rem(20px);
  font-weight: 500;
  color: rgb(var(--color-heading));
  margin-left: rem(15px);
}
</style>
