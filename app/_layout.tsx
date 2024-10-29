import { Stack } from "expo-router";
import Index from "./index";
export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen 
  name="index" 
  // component={Index} 
  options={{ headerShown: false }} 
/>

      <Stack.Screen name="home"
       options={{ headerShown: false }}  />
    </Stack>
  );
}



// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import IndexScreen from './index'; // Replace with actual path
// // import HomeScreen from './home';   // Replace with actual path

// const Stack = createNativeStackNavigator();

// export default function RootLayout() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="index" />
//         <Stack.Screen name="home" />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

