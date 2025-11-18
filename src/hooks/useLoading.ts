import { type Ref, ref } from "vue";


export default function useLoading() {

  const loading: Ref<boolean> = ref(false);

  function setLoading() {
    loading.value = true;
  }

  function clearLoading() {
    loading.value = false;
  }
  return { loading, setLoading, clearLoading };
}