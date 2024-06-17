import { useRouter } from "next/router";

const useApp = () => {
  const { push } = useRouter();

  return {
    push: (payload: string) => push(payload),
  };
};

export default useApp;
