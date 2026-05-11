import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  colors,
  spacing,
  radius,
  typography,
} from '@/constants/theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] =
    useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>
              CA
            </Text>
          </View>

          <Text style={styles.appName}>
            Conecta Atleta
          </Text>

          <Text style={styles.subtitle}>
            Entre na sua conta
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrap}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={colors.textMuted}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={
                colors.textMuted
              }
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrap}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={colors.textMuted}
              style={styles.inputIcon}
            />

            <TextInput
              style={[
                styles.input,
                { paddingRight: 44 },
              ]}
              placeholder="Senha"
              placeholderTextColor={
                colors.textMuted
              }
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              style={styles.eyeBtn}
              onPress={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              <Ionicons
                name={
                  showPassword
                    ? 'eye-off-outline'
                    : 'eye-outline'
                }
                size={20}
                color={colors.textMuted}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={handleLogin}
          >
            <Text
              style={styles.btnPrimaryText}
            >
              Entrar
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View
              style={styles.dividerLine}
            />

            <Text
              style={styles.dividerText}
            >
              ou
            </Text>

            <View
              style={styles.dividerLine}
            />
          </View>

          <TouchableOpacity
            style={styles.btnGoogle}
          >
            <Ionicons
              name="logo-google"
              size={20}
              color="#4285F4"
            />

            <Text
              style={styles.btnGoogleText}
            >
              Entrar com Google
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Não tem uma conta?
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push('/cadastro')
            }
          >
            <Text style={styles.footerLink}>
              Criar conta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },

  logo: {
    width: 72,
    height: 72,
    borderRadius: radius.lg,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },

  logoText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 24,
  },

  appName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },

  subtitle: {
    ...typography.body,
    color: colors.textMuted,
  },

  form: {
    gap: spacing.md,
  },

  inputWrap: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },

  inputIcon: {
    marginRight: spacing.sm,
  },

  input: {
    flex: 1,
    height: 52,
    fontSize: 15,
    color: colors.text,
  },

  eyeBtn: {
    position: 'absolute',
    right: spacing.md,
    padding: 4,
  },

  btnPrimary: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: spacing.sm,
  },

  btnPrimaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },

  dividerText: {
    ...typography.caption,
    color: colors.textMuted,
  },

  btnGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: '#fff',
    borderRadius: radius.lg,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },

  btnGoogleText: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.text,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },

  footerText: {
    ...typography.body,
    color: colors.textMuted,
  },

  footerLink: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '700',
  },
});