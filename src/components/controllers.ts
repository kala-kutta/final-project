import type { Ref } from "vue";
import useError from "@/hooks/useError";
import useLoading from "@/hooks/useLoading";
import useValue from "@/hooks/useValue";

export interface TextInputController {
  name: string,
  value: Ref<string>;
  setValue: (nv: string) => void;
  clearValue: () => void;
  errorMessage: Ref<string | undefined>,
  setError: (errorMessage: string) => void;
  clearError: () => void;
}

export function textInputController(name: string): TextInputController {
  const { value, setValue, clearValue } = useValue();
  const { errorMessage, setError, clearError } = useError();
  return { name, value, setValue, clearValue, errorMessage, setError, clearError };
}


export interface ButtonController {
  name: string,
  errorMessage: Ref<string | undefined, string | undefined>;
  setError: (errorMessage: string) => void;
  clearError: (setterId?: number) => void;
  loading: Ref<boolean>;
  setLoading: () => void;
  clearLoading: () => void;
}


export function buttonController(name: string) : ButtonController {
  const { errorMessage, setError, clearError } = useError();
  const {loading, setLoading, clearLoading} = useLoading();
  return { name, errorMessage, setError, clearError, loading, setLoading, clearLoading };
}