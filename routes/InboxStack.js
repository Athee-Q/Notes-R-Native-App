import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../screens/Inbox";
import Detail from "../screens/Detail";
import AppBar from "../components/AppBar";

const Stack = createNativeStackNavigator()

export const InboxStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InboxScreen"
                component={Inbox}
                options={{ headerTitle: (props) => <AppBar title="Inbox" /> }}
            />
            <Stack.Screen name="DetailScreen" component={Detail} />
        </Stack.Navigator>
    )
}