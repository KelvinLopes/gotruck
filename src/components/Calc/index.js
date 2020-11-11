import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import {
  Container,
  GoupElements,
  InputNumberBalance,
  InputNumberDoc,
  InputNumberPallets,
  ButtonCalc,
  TextButtonCalc,
  TextResult,
  BackgroundText,
  TextMessage,
  ButtonClearValues,
  TextButtonClearValues
} from './styles';


function Calc() {

  let [balanceValue, setBalanceValue] = useState(0);
  let [docValue, setDocValue] = useState(0);
  let [palletsValue, setPalletsValue] = useState(0);
  let [finalResult, setFinalResult] = useState(0);

  function sumCalculator() {

    //Add more types pallets
    let weightPalletTypePBR = 27;
    let weightPalletTypePlastic = 15;

    let realPalletsValue = palletsValue * weightPalletTypePBR;

    let total = balanceValue - realPalletsValue - docValue;


    function AlertTruckOK() {
      Alert.alert(
        'Carga Ok!',
        `A carga não apresenta diferenças ou excesso 🚚`,
        [
          { text: 'Ok' }
        ],
      );
    }


    function AlertTruckExcedent() {
      Alert.alert(
        'Carga excessiva',
        `A carga apresenta excesso de ${total} kgs 🚧`,
        [
          { text: 'Ok' }
        ],
      );
    }


    function AlertTruckIncomplent() {
      Alert.alert(
        'Carga Faltante',
        `A carga apresenta diferença de ${total} kgs 🚨`,
        [
          { text: 'Ok' }
        ],
      );
    }

    setFinalResult(total);

    if (total === 0 && balanceValue !== 0 && docValue !== 0 && palletsValue !== 0) {
      AlertTruckOK();
    }

    if (total < 0) {
      AlertTruckIncomplent();
    }

    if (total > 0) {
      AlertTruckExcedent();
    }

    setPalletsValue('');
    setBalanceValue('');
    setDocValue('');

  }

  function clearValues() {

    setFinalResult('');
    setPalletsValue('');
    setBalanceValue('');
    setDocValue('');

  }

  return (

    <Container>
      <GoupElements>
       
          <View>
            <TextResult>
              Resultado do peso da carga: {finalResult} kgs
        </TextResult>
          </View>


          <InputNumberPallets
            type="number"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'numeric'}
            name="NumberPallets"
            placeholder="Digite a quantidade de pallets"
            placeholderTextColor="rgba(250,250,250,0.5)"
            value={palletsValue}
            onChangeText={setPalletsValue}
          />

          <InputNumberBalance
            type="number"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'numeric'}
            name="NumberBalance"
            placeholder="Digite o peso da balança"
            placeholderTextColor="rgba(250,250,250,0.5)"
            value={balanceValue}
            onChangeText={setBalanceValue}
          />


          <InputNumberDoc
            type="number"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'numeric'}
            name="NumberDoc"
            placeholder="Digite o peso da minuta"
            placeholderTextColor="rgba(250,250,250,0.5)"
            value={docValue}
            onChangeText={setDocValue}
          />
          {
            balanceValue && docValue > 0 ?
              (
                <ButtonCalc
                  onPress={sumCalculator}>
                  <TextButtonCalc> Calcular </TextButtonCalc>
                </ButtonCalc>
              )
              :
              (
                <>
                  <BackgroundText>
                    <TextMessage>
                      Digite os valores ⌨️
                   </TextMessage>
                  </BackgroundText>
                </>
              )
          }

          <ButtonClearValues onPress={clearValues}>
            <TextButtonClearValues>
              Limpar valores
          </TextButtonClearValues>
          </ButtonClearValues>
  
      </GoupElements>
    </Container>
  );
}

export default Calc;