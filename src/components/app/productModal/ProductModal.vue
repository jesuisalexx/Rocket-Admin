<template>
  <Modal v-click-outside="close">
    <ProductsModalContainer>
      <div :class="$style.root">
        <div :class="$style.imagesWrapper">
          <!--          <PhotoGallery :pictures="product.images" />-->
        </div>
        <PhotoGallery :pictures="pics" />
        <div
          v-if="isAdmin"
          :class="$style.modalInfo"
        >
          <Form
            v-model="model"
            :validation-schema="validationSchema"
          >
            <div
              :class="$style.heading"
            >
              {{ product.name }}
              <FormInput
                :class="$style.input"
                :placeholder="product.name"
                name="name"
              />
            </div>
            <div :class="$style.number">
              {{ product.code }}
              <FormInput
                :class="$style.input"
                :placeholder="product.code"
                name="code"
              />
            </div>
            <div :class="$style.description">
              {{ t("productsModal.description") }}
            </div>
            <div :class="$style.priceWrapper">
              <div>
                <div :class="$style.quantity">
                  {{ t("productsModal.quantity") }}
                </div>
                <CounterInput
                  v-model="counter"
                  :class="$style.counter"
                  :model-value="counter"
                  @decrease="decreaseCounter"
                  @increase="increaseCounter"
                />
              </div>
              <div :class="$style.price">
                {{ product.price }}
                <FormInput
                  :class="$style.input"
                  :placeholder="product.price"
                  name="price"
                  type="number"
                />
              </div>
            </div>
            <div :class="$style.buttons">
              <div :class="$style.cartAddBtn">
                <Button
                  variant="primary-extended"
                  @click="submit(product.id)"
                >
                  {{ t("productsModal.update") }}
                  {{ t("productsModal.add-to-cart") }}
                </Button>
              </div>
              <div :class="$style.favAddBtn">
                <Button
                  variant="primary-orange"
                  @click="deleteProduct(product.id)"
                >
                  {{ t("productsModal.delete") }}
                </Button>
              </div>
            </div>
            <div :class="$style.specificationsWrapper">
              <div :class="$style.specificationHeading">
                {{ t("productsModal.specifications") }}
              </div>
              <div
                v-for="specification in specifications"
                :key="specification"
                :class="$style.specificationWrapper"
              >
                <div :class="$style.specificationName">
                  {{ specification.name }}
                </div>
                <div :class="$style.specificationVal">
                  {{ specification.value }}
                </div>
              </div>
            </div>
          </Form>
        </div>
        <div
          v-else
          :class="$style.modalInfo"
        >
          <div :class="$style.heading">
            {{ product.name }}
          </div>
          <div :class="$style.number">
            {{ t("productsModal.number") }}
            {{ product.code }}
          </div>
          <div :class="$style.description">
            {{ t("productsModal.description") }}
          </div>
          <div :class="$style.priceWrapper">
            <div>
              <div :class="$style.quantity">
                {{ t("productsModal.quantity") }}
              </div>
              <CounterInput
                v-model="counter"
                :class="$style.counter"
                :model-value="counter"
                @decrease="decreaseCounter"
                @increase="increaseCounter"
              />
            </div>
            <div :class="$style.price">
              {{ product.price }}
            </div>
          </div>
          <div :class="$style.buttons">
            <div :class="$style.cartAddBtn">
              <Button variant="primary-extended">
                {{ t("productsModal.add-to-cart") }}
              </Button>
            </div>
            <div :class="$style.favAddBtn">
              <Button
                variant="primary-orange"
              >
                <Like :class="$style.likeIcon" />
              </Button>
            </div>
          </div>
          <div :class="$style.specificationsWrapper">
            <div :class="$style.specificationHeading">
              {{ t("productsModal.specifications") }}
            </div>
            <div
              v-for="specification in specifications"
              :key="specification"
              :class="$style.specificationWrapper"
            >
              <div :class="$style.specificationName">
                {{ specification.name }}
              </div>
              <div :class="$style.specificationVal">
                {{ specification.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductsModalContainer>
  </Modal>
</template>

<script lang="ts" setup>
import Modal from '@/components/core/modal/Modal.vue';
import ProductsModalContainer from '@/containers/productsModalContainer/ProductsModalContainer.vue';
import PhotoGallery from '@/components/core/photoGallery/PhotoGallery.vue';
import CounterInput from '@/components/core/counterInput/CounterInput.vue';
import Button from '@/components/core/button/Button.vue';
import Form from '@/components/core/form/Form.vue';
import Like from '@/components/core/icon/assets/like.svg';
import { computed, defineProps, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';
import { useProductsStorage } from '@/stores/products';
import { useUpdateProduct } from '@/hooks/useUpdateProducts';
import FormInput from '@/components/core/formInput/FormInput.vue';

const profileStore = useProfileStore();
const isAdmin = computed(() => profileStore.isAdmin);
const { t } = useI18n();
const props = defineProps<{
  product: {},
}>();

const { deleteProduct } = useProductsStorage();
const {
  validationSchema,
  model,
  submit,
} = useUpdateProduct();
const counter = ref(1);
const increaseCounter = () => counter.value++;
const decreaseCounter = () => {
  if (counter.value !== 1) {
    counter.value -= 1;
  }
};
const pics = [
  {
    val: 'pic1',
  },
  {
    val: 'pic2',
  },
  {
    val: 'pic3',
  },
  {
    val: 'pic4',
  },
];

const emit = defineEmits(['close']);
const close = () => emit('close');
const specifications = [
  {
    name: 'Display',
    value: '6.1‑inch',
  },
  {
    name: 'Chip',
    value: 'A13 Bionic chip',
  },
  {
    name: 'Camera',
    value: 'Dual 12MP Ultra Wide',
  },
  {
    name: 'OS',
    value: 'iOS 13',
  },
];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
}
//.imagesWrapper {
//}

//.modalInfo {
//  margin-left: rem(72px);
//}

.modalInfo {
  margin-left: rem(72px);
}

.heading {
  font-size: rem(20px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}

.number {
  margin-top: rem(10px);
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
}

.description {
  margin-top: rem(20px);
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-light));
}

.priceWrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: rem(35px);
}

.input {
  margin-top: rem(5px);
}

.quantity {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
}

.counter {
  margin-top: rem(10px);
}

.price {
  font-size: rem(24px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}

.likeIcon {
  width: rem(16px);
  height: rem(16px);
  padding-top: rem(5px);
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: rem(25px);
}

.cartAddBtn {
  width: 75%;
}

.specificationsWrapper {
  margin-top: rem(30px);
}

.specificationHeading {
  font-size: rem(15px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
  margin-bottom: rem(10px);
}

.specificationWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: rem(1px) solid rgb(var(--color-border));
  width: 100%;
  height: rem(50px);
}

.specificationName {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-body-dark));
}

.specificationVal {
  font-size: rem(14px);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(var(--color-heading));
}
</style>
