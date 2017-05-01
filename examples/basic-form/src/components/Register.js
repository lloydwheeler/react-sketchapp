import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';
import { colors, spacing } from '../designSystem';

import TextBox from './primitives/TextBox';
import Button from './button';


const styles = StyleSheet.create({
  formElement: {
    marginBottom: spacing.Medium
  },
  label: {
    marginBottom: spacing.Small,
    fontSize: 14,
  },
  textbox: {
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    fontFamily: 'GT Walsheim',
    fontSize: 16,
    lineHeight: 14,
    padding: spacing.Medium,
    width: 260,
  }
});


const Register = ({ sessions }: Props) => (
  <View style={styles.formElement}>
    {sessions.map(session => (
      <View>
        <TextBox
          label={"Email"}
          value={session.email}
        />
        <TextBox
          label={"Password"}
          value={session.password}
        />
        <Button
          label={"Register"}
          backgroundColor={colors.Rose}
        />
      </View>
    ))}
  </View>
);


export default Register;
