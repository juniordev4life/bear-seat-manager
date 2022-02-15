<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="c-modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="c-modal__inner">
          <span class="icon c-close-icon" @click="close"><i class="mdi mdi-close-circle icon-xxl"></i></span>
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps({
  modalActive: Boolean,
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

</script>

<style>
  .c-modal {
    position: fixed;
    display: flex;justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .c-modal__inner {
    padding: 3rem 1.5rem 1.5rem;
    background: white;
    min-width: 30%;
    position: relative;
  }

  .modal-animation-enter-active,
  .modal-animation-leave.active {
    transition: opacity .3s cubic-bezier(0.52, 0.2, 0.19, 1.02);
  }

  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }

  .modal-animation-inner-enter-active {
    transition: all .3s cubic-bezier(0.52, 0.2, 0.19, 1.02) 0.15s;
  }

  .modal-animation-inner-leave-active {
    transition: all .3s cubic-bezier(0.52, 0.2, 0.19, 1.02);
  }

  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }

  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }

  .c-close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .icon-xxl {
    font-size:35px;
  }
</style>
