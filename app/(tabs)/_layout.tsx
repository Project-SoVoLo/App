import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type IconName = "home" | "chatbubble-ellipses" | "document-text" | "medkit" | "people";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: IconName;

          if (route.name === "index") iconName = "home";
          else if (route.name === "chatbot") iconName = "chatbubble-ellipses";
          else if (route.name === "diagnosis") iconName = "document-text";
          else if (route.name === "mindcare") iconName = "medkit";
          else iconName = "people";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="chatbot" options={{ title: "Chatbot" }} />
      <Tabs.Screen name="diagnosis" options={{ title: "Diagnosis" }} />
      <Tabs.Screen name="mindcare" options={{ title: "Mindcare" }} />
      <Tabs.Screen name="community" options={{ title: "Community" }} />
    </Tabs>
  );
}
