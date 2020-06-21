<template>
  <div>
    <PageHeader>
      <Button text="Nova cerveja" icon="plus.svg" size="lg" />
    </PageHeader>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue';
import Button from '../../components/Button.vue';

export default {
  components: {
    PageHeader,
    Button,
  },
};
</script>
