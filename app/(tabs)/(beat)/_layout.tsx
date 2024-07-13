import { Stack } from "expo-router/stack";
import { Provider } from "react-redux";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="beat" />
    </Stack>
  );
}
