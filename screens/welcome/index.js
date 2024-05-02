import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View } from "react-native";

const StockPricePredictionScreen = () => {
  const [stockPrice, setStockPrice] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePrediction = () => {
    // This is where you would integrate your prediction logic or API call
    // For demonstration, we'll just mock a predicted price
    const mockPredictedPrice = (parseFloat(stockPrice) * 1.1).toFixed(2);
    setPredictedPrice(mockPredictedPrice);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter Stock Price" keyboardType="numeric" value={stockPrice} onChangeText={setStockPrice} />
        <Button title="Predict" onPress={handlePrediction} />
      </View>
      {predictedPrice && <Text style={styles.predictionText}>
          Predicted Stock Price: ${predictedPrice}
        </Text>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#cccccc'
  },
  predictionText: {
    fontSize: 18,
    marginTop: 20
  }
});
export default StockPricePredictionScreen;