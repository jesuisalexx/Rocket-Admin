<template>
  <Card>
    <div
      :class="[
        $style.root,
        isLoading && $style.loading,
      ]"
    >
      <div :class="$style.label">
        <slot name="heading" />
      </div>
      <div :class="$style.topButton">
        <slot
          name="google-sign-up-button"
          :button-icon="$style.buttonIcon"
        />
      </div>
      <div :class="$style.topText">
        <div :class="$style.stripe" />
        <slot name="sign-up-text" />
        <div :class="$style.stripe" />
      </div>
      <div :class="$style.namesWrapper">
        <div :class="$style.name">
          <slot name="first-name" />
        </div>
        <div :class="$style.lastName">
          <slot name="last-name" />
        </div>
      </div>
      <div :class="$style.username">
        <slot name="username" />
      </div>
      <div :class="$style.login">
        <slot name="email" />
      </div>
      <div :class="$style.password">
        <slot name="password" />
      </div>
      <div :class="$style.confirmPassword">
        <slot name="password-confirm" />
      </div>
      <div :class="$style.checkboxWrapper">
        <slot
          name="accept"
        />
        <div :class="$style.termsButton">
          <slot
            name="terms-button"
          />
        </div>
      </div>
      <div :class="$style.bottomPartWrapper">
        <div
          :class="[
            $style.createButton,
            !isDisabled && $style.loading,
          ]"
        >
          <slot name="create-button" />
        </div>
        <div :class="$style.bottomTextWrapper">
          <div :class="$style.bottomText">
            <slot name="login-text" />
          </div>
          <div :class="$style.signUp">
            <router-link to="/auth/sign-in">
              <slot name="sign-in-button" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import Card from '@/components/core/card/Card.vue';

const props = defineProps({
  isLoading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isDisabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  width: rem(550px);
  padding: rem(10px) rem(70px);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loading {
  pointer-events: none;
}
.label {
  color: rgb(var(--color-heading));
  font-size: rem(28px);
  font-weight: 500;
  margin-top: rem(50px);
}
.topButton {
  width: 100%;
  font-size: rem(15px);
  margin-top: rem(36px);
  display: flex;
  position: relative;
}
.buttonIcon {
  top: rem(13px);
  left: rem(25px);
  position: absolute;
}
.topText {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(var(--color-body-dark));
  text-transform: uppercase;
  font-size: rem(12px);
  margin-top: rem(40px);
}
.stripe {
  width: rem(122px);
  height: rem(1px);
  background-color: rgb(var(--color-border));
}
.namesWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: rem(35px);
}
.name {
  width: 46%;
}
.lastName {
  width: 46%;
}
.username {
  width: 100%;
  margin-top: rem(30px);
}
.login {
  width: 100%;
  margin-top: rem(30px);
}
.password {
  width: 100%;
  margin-top: rem(30px);
}
.confirmPassword {
  width: 100%;
  margin-top: rem(30px);
}
.checkboxWrapper {
  display: flex;
  width: 100%;
  margin-top: rem(30px);
}
.termsButton {
  margin-left: rem(7px);
}
.createButton {
  width: 100%;
  margin-top: rem(30px);
}
.bottomText {
  color: rgb(var(--color-body-dark));
  font-size: rem(14px);
}
.bottomPartWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: rem(150px);
}
.signUp {
  margin-left: rem(7px);
}
.bottomTextWrapper {
  display: flex;
}
</style>
