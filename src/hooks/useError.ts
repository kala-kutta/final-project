import { type Ref, ref } from "vue";

export default function useError() {
  const _errorMessage: Ref<string | undefined> = ref(undefined);

  function setError(errorMessage: string) {
    _errorMessage.value = errorMessage;
  }

  function clearError() {
    _errorMessage.value = undefined;
  }
  return { errorMessage: _errorMessage, setError, clearError };
}