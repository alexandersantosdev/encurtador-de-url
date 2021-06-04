import React from 'react'
import {View, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {ContainerButton, Link} from './styles'

const ListItem = ({data}) => {
    return (
        <View>
            <ContainerButton
            activeOpacity={0.9}
            onPress={()=>{}}
            >
                <Feather name="link" color="#fff" size={24}/>
            <Link
            numberOfLines={1}
            >{data.link}</Link>
            </ContainerButton>
        </View>
    )
}

export default ListItem