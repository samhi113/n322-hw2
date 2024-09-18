import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View style={styles.html}>
      <h2 style={styles.contactTitle}>Contact Us</h2>
      <div style={styles.LRSec}>
        <div style={styles.LRSecDiv}>
          <h3 style={styles.LRSecTitle}>Email Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem explicabo reiciendis praesentium enim nisi ipsam debitis distinctio consequuntur! Alias reprehenderit fugit ab officia fuga, reiciendis in eaque, blanditiis laboriosam vel debitis asperiores eum neque saepe architecto facere odit omnis consectetur illo. Facere aut dolor quis corporis enim doloribus delectus illo facilis asperiores. Aliquid unde qui, fugit alias asperiores quisquam numquam tenetur nulla aliquam deserunt beatae accusantium repudiandae atque ab delectus doloribus consequatur odit officiis amet nihil? Esse itaque est suscipit molestiae nam dicta iste atque porro.</p>
          <a href="mailto:samhigg@iu.edu" style={styles.LRBtn}>Email Now</a>
        </div>
        <div style={styles.LRSecDiv}>
          <h3 style={styles.LRSecTitle}>Call Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem explicabo reiciendis praesentium enim nisi ipsam debitis distinctio consequuntur! Alias reprehenderit fugit ab officia fuga, reiciendis in eaque, blanditiis laboriosam vel debitis asperiores eum neque saepe architecto facere odit omnis consectetur illo. Facere aut dolor quis corporis enim doloribus delectus illo facilis asperiores. Aliquid unde qui, fugit alias asperiores quisquam numquam tenetur nulla aliquam deserunt beatae accusantium repudiandae atque ab delectus doloribus consequatur odit officiis amet nihil? Esse itaque est suscipit molestiae nam dicta iste atque porro.</p>
          <a href="#" style={styles.LRBtn}>Call Now</a>
        </div>
      </div>
    </View>
  )
}

const styles = StyleSheet.create({
  html: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  contactTitle: {
    width: "100vw",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#253",
    color: "#ddd",
    fontSize:"5vh",

  },

  LRSec: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  LRSecDiv: {
    maxWidth: "30vw",
    margin: "5vw",
    fontSize: "2vh",
  },

  LRSecTitle: {
    fontSize: "5vh",
  },

  LRBtn: {
    backgroundColor: "#253",
    color: "#ddd",

    fontSize: "4vh",
    textDecorationColor: "transparent",

    width: "30vw",
    height: "7.5vh",
    borderRadius: "calc(100vw + 100vh)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})