import React, { useState } from 'react'
import { Avatar, Box, FAB, ListItem, Stack, Text } from '@react-native-material/core'
import { FlatList, Modal } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Inbox = ({ navigation }) => {

  const [modalOpen, setModalOpen] = useState(false)
  const [mails, setMails] = useState([
    { id: '4', subject: 'Hi!!!', content: ' Have a Nice Day Buddies' },
    { id: '2', subject: 'Whats up', content: ' What about tomorrow ' },
    { id: '3', subject: 'Wellcome ', content: ' Wellcome to our ofice Broo..!!' },
    { id: '1', subject: 'Meeting Today', content: ' will You come to atten the meeting' },
    { id: '5', subject: 'Meeting Tomorrow', content: ' InshaaAllah' }
  ])

  const handleTap = (item) => {
    navigation.push('DetailScreen', { item })
  }

  const handlePress = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <Box>
        <Modal visible={modalOpen}>
          <Stack fill justify='start' items='center' mt={20}>
            <FAB icon={props => <Icon name="close" {...props} />} color="black" onPress={handlePress} />
          </Stack>
        </Modal>
        <FlatList
          data={mails}
          keyExtractor={(item) => item.id}
          renderItem={(({ item, index }) =>
            <ListItem
              leadingMode="avatar"
              leading={
                <Avatar image={{ uri: `https://mui.com/static/images/avatar/${index + 1}.jpg` }} />
              }
              title={item.subject}
              secondaryText={item.content}
              onPress={() => handleTap(item)}
            />
          )}
        />
      </Box>
      <Stack fill justify='start' items='center' mt={20}>
        <FAB icon={props => <Icon name="plus" {...props} />} color="black" onPress={handlePress} />
      </Stack>
    </>
  )
}

export default Inbox