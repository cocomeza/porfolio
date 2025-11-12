"use client";

import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from "@tanstack/react-query";
import { ReactNode, useMemo, useState } from "react";

const defaultConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
};

export function QueryProvider({
  children,
  config,
}: {
  children: ReactNode;
  config?: QueryClientConfig;
}) {
  const mergedConfig = useMemo(
    () => ({
      ...defaultConfig,
      ...config,
    }),
    [config]
  );

  const [client] = useState(() => new QueryClient(mergedConfig));

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}


