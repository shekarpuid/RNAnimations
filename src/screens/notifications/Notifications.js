import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated, Button } from 'react-native'
import { Value } from 'react-native-reanimated'

const getRandomMessage = () => {
    const number = Math.trunc(Math.random() * 1000)
    return 'Random Message ' + "'" + number + "'"
}

const Message = (props) => {
    const opacity = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1, duration: 500, useNativeDriver: true
            }),
            Animated.delay(2000),
            Animated.timing(opacity, {
                toValue: 0, duration: 500, useNativeDriver: true
            })
        ]).start(() => {
            props.onHide()
        })
    }, [])

    return (
        <Animated.View style={{
            opacity,
            transform: [
                {
                    translateY: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, 0]
                    })
                }
            ],
            margin: 10, marginBottom: 5, backgroundColor: '#fff', padding: 10, borderRadius: 4,
            shadowColor: '#aaa',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.25, shadowRadius: 5, elevation: 6
        }}>
            <Text>{props.message}</Text>
        </Animated.View>
    )
}
const Notifications = () => {
    const [messages, setMessages] = useState([])

    return (
        <>
            <View style={{position: 'absolute', top: 44, left: 0, right: 0}}>
                {messages.map(message => (
                    <Message key={message} message={message}
                        onHide={() => {
                            setMessages(messages => messages.filter(
                                currentMessage => currentMessage !== message
                            ))
                        }}
                    />
                ))}
            </View>
            <Button 
                title="Add Message" onPress={() => {
                    const message = getRandomMessage()
                    setMessages([...messages, message])
                }}
            />
        </>
    )
}

export default Notifications