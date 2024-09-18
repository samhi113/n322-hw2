import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function home() {
  return (
    <View style={styles.html}>
      <div style={styles.hero}>
        <h2>THE REAL</h2>
        <h2>PRODUCT CO.</h2>
      </div>

      <div style={styles.textSec}>
        <h3>Consume our products!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus omnis dolorum maxime odio deserunt exercitationem amet explicabo quaerat assumenda impedit tempore esse eos dolores consectetur quis perspiciatis, mollitia officiis aut unde id, rem architecto dolor. Odit blanditiis labore cum aperiam esse maxime magnam, aliquid quos culpa.</p>
        <button style={styles.readBtn}><a href="products" style={styles.readBtn}>Read More</a></button>
      </div>

      <div style={styles.photoSec}>
        <img src="https://picsum.photos/1920/1920" alt="Sample photo." title="Sample photo." style={styles.photoSecImg}/>
        <img src="https://picsum.photos/1080/1080" alt="Sample photo." title="Sample photo." style={styles.photoSecImg}/>
        <img src="https://picsum.photos/720/720" alt="Sample photo." title="Sample photo." style={styles.photoSecImg}/>
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

  hero: {
    backgroundColor: "#253",
    color: "#ddd",

    fontSize: "25px",
    lineHeight: "0px",

    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textSec: {
    width: "60vw",
    fontSize: "1.25em",
  },

  readBtn: {
    width: 250,
    height: 50,
    backgroundColor: "#253",
    color: "#ddd",
    fontSize: "25px",
    textDecorationColor:"transparent",

    borderWidth: 0,
    borderRadius: 10,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  photoSec: {
    marginTop: 33.333,
    flex: 1,
    justifyContent: "spaceBetween",
    alignContent: "center",
  },

  photoSecImg: {
    width: "25vw",
    aspectRatio: 1,
    objectFit: "cover",
    objetPosition: "center",
  }
})