import { Stack } from "expo-router/stack";
import { Provider } from "react-redux";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="index"
      />
      <Stack.Screen
        options={{
          title: "Retailer",
        }}
        name="retailerList"
      />
      <Stack.Screen
        options={{
          title: "Retailer's Location",
        }}
        name="retailerLocation"
      />
    </Stack>
  );
}
