<template>
  <label class="label">{{ label }}</label>
  <div v-if="type" class="info" @mouseenter="mouseEnter()" @mouseleave="mouseLevea()">
    <span>?</span>
    <template v-if="is_show">
      <div class="tri"></div>
      <div class="wrap">
        <table>
          <tr v-for="(val, key) in type">
            <th>{{ key }}</th>
            <td>{{ val }}</td>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface TypeProps {
  label: string
  type?: Record<string, string>
}
defineProps<TypeProps>()

const is_show = ref(false)
const mouseEnter = () => {
  is_show.value = true
}
const mouseLevea = () => {
  is_show.value = false
}
</script>

<style lang="scss" scoped>
.label,
.info {
  --line-height: 14px;
  font-size: 12px;
  line-height: var(--line-height);
}

.info {
  position: relative;
  display: inline-block;
  width: var(--line-height);
  height: var(--line-height);
  border: 1px solid #fff;
  border-radius: 50%;
  margin-left: 0.5em;
  text-align: center;

  &:hover {
    border-color: #6092ff;

    span {
      color: #6092ff;
    }
  }

  span {
    line-height: var(--line-height);
    cursor: pointer;
  }
}

.info .wrap {
  position: absolute;
  z-index: 100;
  left: calc(var(--line-height) + 1em);
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
  background-color: var(--vp-c-bg-soft);

  table {
    margin: 0;
  }
}

.info .tri {
  position: absolute;
  left: var(--line-height);
  top: 50%;
  transform: translateY(-50%);
  border: 1em solid transparent;
  border-left-width: 0;
  border-right-color: var(--vp-c-bg-soft);
}
</style>