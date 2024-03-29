<template>
  <div :class="$style.root">
    <Table
      v-if="switchTableValue === 'list'"
      :columns="columns"
      :is-loading="props.isLoading"
      :records="records"
      :selectable="true"
      :type="switchTableValue"
    >
      <template
        v-if="isAdmin"
        #column(select)="{ isSelected }"
      >
        <Checkbox
          :class="$style.checkbox"
          :model-value="isSelected"
        />
      </template>
      <template #column(name)="{ column }">
        <div>{{ column.label }}</div>
        <Arrow
          v-if="column.sortable"
          :class="$style.sortable"
        />
      </template>
      <template #column(number)="{ column }">
        <div>{{ column.label }}</div>
        <Arrow
          v-if="column.sortable"
          :class="$style.sortable"
        />
      </template>
      <template #column(category)="{ column }">
        <div>{{ column.label }}</div>
        <Arrow
          v-if="column.sortable"
          :class="$style.sortable"
        />
      </template>
      <template #column(date)="{ column }">
        <div>{{ column.label }}</div>
        <Arrow
          v-if="column.sortable"
          :class="$style.sortable"
        />
      </template>
      <template #column(price)="{ column }">
        <div>{{ column.label }}</div>
        <Arrow
          v-if="column.sortable"
          :class="$style.sortable"
        />
      </template>
      <template
        v-if="isAdmin"
        #column(status)="{ column }"
      >
        <div>{{ column.label }}</div>
        <Arrow
          v-if="column.sortable"
          :class="$style.sortable"
        />
      </template>
      <template #options>
        <More :class="$style.moreBtn" />
      </template>
      <template
        v-if="isAdmin"
        #cell(select)="{ isSelected }"
      >
        <Checkbox
          :class="$style.checkbox"
          :model-value="isSelected"
        />
      </template>
      <template
        #cell(name)="{ record }"
      >
        <div
          :class="$style.recordLightText"
          @click="showProductModal(record)"
        >
          {{ record.name }}
        </div>
      </template>
      <template
        #cell(number)="{ record }"
      >
        <div :class="$style.recordDarkText">
          {{ record.code }}
        </div>
      </template>
      <template
        #cell(category)="{ record }"
      >
        <div :class="$style.recordLightText">
          {{ record.category }}
        </div>
      </template>
      <template
        #cell(date)="{ record }"
      >
        <div :class="$style.recordDarkText">
          {{ record.createDate }}
        </div>
      </template>
      <template
        #cell(price)="{ record }"
      >
        <div :class="$style.recordLightText">
          {{ record.price }}$
        </div>
      </template>
      <template
        v-if="isAdmin"
        #cell(status)="{ record }"
      >
        <Badge
          :variant="statusMap[record.status]"
        >
          {{ record.status }}
        </Badge>
      </template>
    </Table>
    <Table
      v-else-if="switchTableValue === 'grid'"
      :columns="columns"
      :is-loading="props.isLoading"
      :records="records"
      :selectable="true"
      :type="switchTableValue"
    >
      <template #image="{ img }">
        <div :class="$style.img">
          <img
            :src="img"
            alt=""
          >
        </div>
      </template>
      <template #badge="{ record }">
        <Badge :variant="statusMap[record.status]">
          {{ record.status }}
        </Badge>
      </template>
      <template
        #select="{ isSelected }"
      >
        <div
          :class="$style.gridCheckWrap"
        >
          <div
            v-if="!isSelected"
            :class="$style.gridCheck"
          />
          <Check v-else />
        </div>
      </template>
      <template #recordData="{ record }">
        <div
          :class="$style.gridRecordData"
          @click="showProductModal(record)"
        >
          <div
            :class="$style.recordName"
          >
            {{ record.name }}
          </div>
          <div :class="$style.recordFlexDataWrap">
            <div :class="$style.recordFlexData">
              {{ record.createDate }}
            </div>
            <div :class="$style.recordFlexData">
              {{ record.category }}
            </div>
            <div :class="$style.recordFlexData">
              {{ record.price }}$
            </div>
          </div>
        </div>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import Table from '@/components/core/table/Table.vue';
import Check from '@/components/core/icon/assets/checked.svg';
import Badge from '@/components/core/badge/Badge.vue';
import Checkbox from '@/components/core/checkbox/Checkbox.vue';
import More from '@/components/core/icon/assets/more.svg';
import Arrow from '@/components/core/icon/assets/arrowDown.svg';
import { computed } from 'vue';
import { modalType } from '@/types/modal';
import { useModalStore } from '@/stores/modals';
import { useI18n } from 'vue-i18n';
import { useProductsStorage } from '@/stores/products';
import { useProfileStore } from '@/stores/profile';

const productsStorage = useProductsStorage();
const profileStore = useProfileStore();
const isAdmin = computed(() => profileStore.isAdmin);
const props = defineProps<{
  records: [],
  isLoading: boolean,
}>();
const switchTableValue = computed(() => productsStorage.localSwitchValue);
const { t } = useI18n();
const statusMap = {
  active: 'success',
  disabled: 'warning',
};
const columns = computed(() => [
  ...(isAdmin.value ? [
    {
      label: '',
      size: 0.5,
      value: 'select',
      sortable: false,
      selectable: true,
    },
  ] : []),
  {
    label: 'product name',
    size: 3.5,
    value: 'name',
    sortable: true,
  },
  {
    label: 'product no.',
    size: 2.5,
    value: 'number',
    sortable: true,
  },
  {
    label: 'category',
    size: 2.5,
    value: 'category',
    sortable: true,
  },
  {
    label: 'date',
    size: 2,
    value: 'date',
    sortable: true,
  },
  {
    label: 'price',
    size: 1.4,
    value: 'price',
    sortable: true,
  },
  ...(isAdmin.value ? [
    {
      label: 'status',
      size: 1.4,
      value: 'status',
      sortable: true,
    },
  ] : []),
]);
const modalsStore = useModalStore();

const showProductModal = (product: any) => modalsStore.showModal(
  {
    type: modalType.PRODUCT,
    payload: { product },
  },
);

</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  padding-top: rem(25px);
  font-family: 'Poppins', sans-serif;
}

.table {
  margin-top: rem(33px);
}

.pagination {
  width: 100%;
  height: rem(35px);
  display: flex;
  justify-content: center;
  margin-top: rem(30px);
}

.moreBtn {
  position: absolute;
  top: rem(18px);
  right: 0;
  cursor: pointer;
}

.recordLightText {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}

.recordDarkText {
  font-size: rem(15px);
  font-weight: 400;
  color: rgb(var(--color-body-dark));
}

.columnArrow {
  display: flex;
  align-items: center;
}

.gridCheck {
  width: rem(16px);
  height: rem(16px);
  border-radius: 50%;
  border: rem(1px) solid grey;
}

.gridRecordData {
  width: 100%;
  padding: rem(16px);
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: rem(17px) rem(17px) 0 0;
  top: 0;
  left: 0;
  z-index: 1;
}

.gridCheckWrap {
  width: rem(16px);
  height: rem(16px);
  z-index: 5;
}

.recordFlexDataWrap {
  display: flex;
  justify-content: space-between;
}

.recordFlexData {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
  font-weight: 400;
  margin-top: rem(25px);
}

.sortable {
  margin-left: rem(7px);
}

.recordName {
  width: 100%;
  font-size: rem(14px);
  font-weight: 400;
  color: rgb(var(--color-heading));
}
</style>
