```sh
npx create-expo-app -e with-router
npm install react-native-paper react-hook-form zod @hookform/resolvers
```

```tsx
export default function page() {
  return <Redirect href="/checkout" />;
}
```

```ts
import { createContext, useContext } from "react";

type CheckoutContextType = {};
const CheckoutContext = createContext<CheckoutContextType>({});

export default function CheckoutContextProvider({ children }) {
  return <CheckoutContext.Provider value={{ test: "abc" }}>{children}</CheckoutContext.Provider>;
}

export const useCheckoutContext = () => useContext(CheckoutContext);
```
