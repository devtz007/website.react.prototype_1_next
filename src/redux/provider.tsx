'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

interface Props {
  children: React.ReactNode;
}
/**
 * StoreProvider component to provide the Redux store to the application.
 * It creates a Redux store instance once and provides it to its children.
 * @param props.children - The child components to be rendered within the provider.
 * @returns The Provider component wrapping the children.
 */
const StoreProvider: React.FC<Props> = (props) => {
  const { children } = props;

  // Create a ref to hold the store instance
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  // Provide the store to the children components
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
