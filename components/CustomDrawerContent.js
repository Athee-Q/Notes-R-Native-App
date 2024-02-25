import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ironicons from '@expo/vector-icons/Ionicons'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sent" icon={() => <Ironicons
        name='send' size={24} color="black" />} />
      <DrawerItem label="Trash" icon={() => <Ironicons
        name='trash-outline' size={24} color="black" />} />
    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;