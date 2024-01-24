import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {httpBatchLink} from "@trpc/client"
import {useState} from "react"
import { trpc } from "./trcp"
import SuperJSON from "superjson"
import { getBaseUrl } from "./api"


export const TrpcProvider: React.FC<{children: React.ReactNode}> = p => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`
      })
    ],
    transformer: SuperJSON
  })
)
    
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {p.children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}