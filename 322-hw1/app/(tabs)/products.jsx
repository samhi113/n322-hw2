import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function products() {
  return (
    <View style={styles.html}>
      <div style={styles.sortBar}>
        <a href="#" style={styles.sortBarItem}>Sort</a>
        <a href="#" style={styles.sortBarItem}>Filter</a>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 50,}}>
        <a href="#" style={styles.product}>
          <img src="https://picsum.photos/720/720" alt="Sample image." style={styles.productImg}/>
          <h3 style={styles.productTitle}>Product 1</h3>
          <div style={styles.priceTag}>$14.99</div>
        </a>

        <a href="#" style={styles.product}>
          <img src="https://picsum.photos/1080/1080" alt="Sample image." style={styles.productImg}/>
          <h3 style={styles.productTitle}>Product 2</h3>
          <div style={styles.priceTag}>$19.99</div>
        </a>

        <a href="#" style={styles.product}>
          <img src="https://picsum.photos/1920/1920" alt="Sample image." style={styles.productImg}/>
          <h3 style={styles.productTitle}>Product 3</h3>
          <div style={styles.priceTag}>$24.99</div>
        </a>
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

  sortBar: {
    width: "70vw",
    height: "5vh",
    marginTop: "5vh",
    borderRadius: "calc(100vw + 100vh)",

    backgroundColor: "#bbb",
    color: "#222",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  sortBarItem: {
    backgroundColor: "#999",
    color: "#222",
    fontSize: "3vh",
    textDecorationColor: "transparent",

    width: "10vw",
    height: "5vh",
    
    marginLeft: "12.5vw",
    marginRight: "12.5vw",
    borderRadius: "calc(100vw + 100vh)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  product: {
    width: "25vw",
    borderRadius: "2.5vw",
    backgroundColor: "#ccc",
    color: "#222",
    textDecorationColor: "transparent",
    margin: "2.5vw",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  productImg: {
    width: "20vw",
    aspectRatio: 1,
    objectFit: "cover",
    objectPosition:"center",
  },

  productTitle: {
    textDecorationColor: "transparent",
    fontSize: "5vh",
    lineHeight: "2vh",
  },

  priceTag: {
    minWidth: "10vw",
    minHeight: "5vh",
    marginBottom: "1vw",

    backgroundColor: "#253",
    color: "#ddd",
    fontSize: "2vw",
    textDecorationColor: "transparent",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})