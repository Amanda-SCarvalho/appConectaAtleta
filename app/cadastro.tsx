import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { api } from "@/services/api";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { colors, spacing, radius, typography } from "@/constants/theme";

export default function CadastroScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [profileType, setProfileType] = useState<"atleta" | "apoiador" | null>(
    null,
  );

  const handleSubmit = async () => {
    try {
      if (!name || !email || !password) {
        Alert.alert("Erro", "Preencha todos os campos");

        return;
      }

      await api.post("/auth/register", {
        name,
        email,
        password,
        type: profileType,
      });

      Alert.alert("Sucesso", "Conta criada com sucesso!");

      router.replace("/login");
    } catch (error) {
      console.log(error);

      Alert.alert("Erro", "Não foi possível criar a conta");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>

          <Text style={styles.title}>Criar conta</Text>

          <Text style={styles.subtitle}>
            Junte-se à comunidade Conecta Atleta
          </Text>

          <View style={styles.form}>
            <View style={styles.inputWrap}>
              <Ionicons
                name="person-outline"
                size={20}
                color={colors.textMuted}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputWrap}>
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.textMuted}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={colors.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputWrap}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={colors.textMuted}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={colors.textMuted}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.inputWrap}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={colors.textMuted}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor={colors.textMuted}
                secureTextEntry
              />
            </View>

            <View style={styles.inputWrap}>
              <Ionicons
                name="calendar-outline"
                size={20}
                color={colors.textMuted}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholder="Data de nascimento"
                placeholderTextColor={colors.textMuted}
                keyboardType="numeric"
              />
            </View>

            <Text style={styles.sectionLabel}>Tipo de perfil</Text>

            <View style={styles.typeRow}>
              <TouchableOpacity
                style={[
                  styles.typeBtn,

                  profileType === "atleta" && {
                    backgroundColor: colors.primary,

                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => setProfileType("atleta")}
              >
                <Text style={styles.typeEmoji}>🏅</Text>

                <Text
                  style={[
                    styles.typeLabel,

                    profileType === "atleta" && {
                      color: "#fff",
                    },
                  ]}
                >
                  Atleta
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.typeBtn,

                  profileType === "apoiador" && {
                    backgroundColor: colors.accent,

                    borderColor: colors.accent,
                  },
                ]}
                onPress={() => setProfileType("apoiador")}
              >
                <Text style={styles.typeEmoji}>🤝</Text>

                <Text
                  style={[
                    styles.typeLabel,

                    profileType === "apoiador" && {
                      color: "#fff",
                    },
                  ]}
                >
                  Apoiador
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit}>
              <Text style={styles.btnPrimaryText}>Continuar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta?</Text>

            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/login",
                })
              }
            >
              <Text style={styles.footerLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },

  backBtn: {
    marginBottom: spacing.lg,
  },

  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: 4,
  },

  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },

  form: {
    gap: spacing.md,
  },

  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },

  icon: {
    marginRight: spacing.sm,
  },

  input: {
    flex: 1,
    height: 52,
    fontSize: 15,
    color: colors.text,
  },

  sectionLabel: {
    ...typography.body,
    fontWeight: "600",
    color: colors.text,
    marginTop: spacing.sm,
  },

  typeRow: {
    flexDirection: "row",
    gap: spacing.md,
  },

  typeBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: "#fff",
  },

  typeEmoji: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },

  typeLabel: {
    fontWeight: "700",
    fontSize: 14,
    color: colors.text,
  },

  btnPrimary: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  btnPrimaryText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.xl,
  },

  footerText: {
    ...typography.body,
    color: colors.textMuted,
  },

  footerLink: {
    ...typography.body,
    color: colors.primary,
    fontWeight: "700",
  },
});
