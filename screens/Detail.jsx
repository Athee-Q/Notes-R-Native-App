import { Box, Button, HStack, ListItem, Spacer, Text, VStack } from "@react-native-material/core";

const Detail = ({ route }) => {

    const { item } = route.params

    return (
        <VStack m={20} spacing={20} divider={true}>
            <ListItem title={item.content} />
            <HStack m={20}>
                <Button title="delete" />
                <Spacer />
                <Button title="close" />
            </HStack>
        </VStack>
    );
}

export default Detail;