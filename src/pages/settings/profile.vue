<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <ProfileContainer>
      <template #heading>
        {{ t('profile.profile') }}
      </template>
      <template #firstName>
        <FormInput
          name="firstName"
          :label="t('profile.name')"
          :placeholder="t('profile.name-placeholder')"
          :model-value="model.firstName"
        />
      </template>
      <template #lastName>
        <FormInput
          name="lastName"
          :label="t('profile.last-name')"
          :placeholder="t('profile.last-name-placeholder')"
          :model-value="model.lastName"
        />
      </template>
      <template #avatar>
        <SettingsProfileAvatar />
      </template>
      <template #username>
        <FormInput
          name="username"
          :label="t('profile.username')"
          :placeholder="t('profile.username-placeholder')"
          :model-value="model.username"
        />
      </template>
      <template #phone>
        <FormInput
          name="phone"
          :model-value="model.phone"
          :label="t('telInput.phone')"
        />
      </template>
      <template #job>
        <FormInput
          name="job"
          :label="t('profile.job')"
          :placeholder="t('profile.job-placeholder')"
          :model-value="model.job"
        />
      </template>
      <template #button>
        <Button
          variant="primary"
          :is-loading="isLoading"
        >
          {{ t('profile.submit') }}
        </Button>
      </template>
    </ProfileContainer>
  </Form>
</template>

<script lang="ts" setup>
import ProfileContainer from '@/containers/profileContainer/ProfileContainer.vue';
import FormInput from '@/components/core/formInput/FormInput.vue';
import SettingsProfileAvatar from '@/components/core/settingsProfileAvatar/SettingsProfileAvatar.vue';
import TelInput from '@/components/core/telInput/TelInput.vue';
import Button from '@/components/core/button/Button.vue';
import Form from '@/components/core/form/Form.vue';

import { useI18n } from 'vue-i18n';
import { useProfile } from '@/hooks/useProfile';

const { t } = useI18n();

const {
  isLoading,
  model,
  validationSchema,
  submit,
  fetchProfile,
} = useProfile();

fetchProfile();
</script>

<style lang="scss" module>
</style>
