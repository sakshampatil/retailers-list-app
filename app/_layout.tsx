import { Stack } from "expo-router/stack";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";

export default function Layout() {
  return (
    <AutocompleteDropdownContextProvider>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </AutocompleteDropdownContextProvider>
  );
}
