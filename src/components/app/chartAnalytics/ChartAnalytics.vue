<template>
  <div :class="$style.root">
    <div :class="$style.headingWrapper">
      <div :class="$style.heading">
        {{ t('charts.analytics') }}
      </div>
      <Button
        variant="secondary"
        icon-before="calendar"
        icon-after="arrowDown3"
      >
        19 Aug – 25 Aug
      </Button>
    </div>
    <div :class="$style.arrowsWrapper">
      <div :class="$style.incomeWrapper">
        <div :class="$style.income">
          <ArrowUp />
        </div>
        <div :class="$style.numbers">
          $5.850
        </div>
      </div>
      <div :class="$style.expensesWrapper">
        <div :class="$style.expenses">
          <ArrowDown />
        </div>
        <div :class="$style.numbers">
          $1.750
        </div>
      </div>
    </div>
    <Chart :data="data" />
  </div>
</template>

<script lang="ts" setup>
import Chart from '@/components/core/chart/Chart.vue';
import Button from '@/components/core/button/Button.vue';
import ArrowUp from '@/components/core/icon/assets/arrow-up-accent.svg';
import ArrowDown from '@/components/core/icon/assets/arrow-down-orange.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const data = {
  height: 250,
  type: 'area',
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
      align: 'left',
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [
        'Mon', 'Tue', 'Wed', 'Thu',
        'Fri', 'Sat', 'Sun',
      ],
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    zoom: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
  },
  series: [
    {
      name: 'Income',
      data: [0, 350, 270, 1000, 500, 1500, 2100],
      color: '#0090FF',
    },
    {
      name: 'Expense',
      data: [0, 250, 600, 850, 550, 400, 300],
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
  height: auto;
  padding: rem(20px);
  background-color: rgb(var(--color-surface));
  border-radius: rem(20px);
}
.headingWrapper {
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
}
.arrowsWrapper {
  width: 100%;
  display: flex;
}
.incomeWrapper {
  display: flex;
  align-items: center;
}
.expensesWrapper {
   display: flex;
   align-items: center;
 }
.income {
  width: rem(40px);
  height: rem(40px);
  background: rgb(0, 144, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: rem(10px);
}
.expenses {
  margin-left: rem(50px);
  width: rem(40px);
  height: rem(40px);
  background: rgb(255, 149, 92, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: rem(10px);
}
.numbers {
  font-size: rem(18px);
  font-weight: 400;
  color: rgb(var(--color-heading));
  margin-left: rem(16px);
}
</style>
