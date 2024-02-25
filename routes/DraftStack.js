import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Draft from "../screens/Draft";
import AppBar from "../components/AppBar";

const Stack = createNativeStackNavigator()

export const DraftStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="draftScreen" component={Draft}
            options={{ headerTitle: (props) => <AppBar title="Draft" />}}
            />
        </Stack.Navigator>
    )
}