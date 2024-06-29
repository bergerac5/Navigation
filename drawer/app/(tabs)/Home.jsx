import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

export default function Home({navigation}) {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.blue, Colors.bluewhite]}
    >
      <View style={{ flex: 1 }}>
        <View>
          
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 400,
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: '800',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 60,
              fontWeight: '800',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            To
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: '800',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            My App
          </Text>
          <View
            style={{
              marginTop: 60,
              width: '100%',
            }}
          >
            <Button
              title='Join Now'
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16, color: '#fff' }}>
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}
              >
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
  
}

const styles = StyleSheet.create({})