import React from 'react'
import {View, Text} from 'react-native'

const ListItem = ({data}) => {
    return (
        <View>
            <Text>{data.link}</Text>
        </View>
    )
}

export default ListItem