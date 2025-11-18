import { ref } from "vue";

export default function useValue() {
  const value = ref("");

  function setValue(nv: string) {
    value.value = nv;
  }

  function clearValue() {
    value.value = "";
  }
  return { value, setValue, clearValue };
}