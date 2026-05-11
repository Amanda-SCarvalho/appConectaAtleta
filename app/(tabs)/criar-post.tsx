import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import { router } from 'expo-router';

import {
  colors,
  spacing,
  radius,
} from '@/constants/theme';

type Tab = 'post' | 'projeto';

export default function CriarPostScreen() {
  const [tab, setTab] =
    useState<Tab>('post');

  const [text, setText] =
    useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons
              name="close"
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Criar
          </Text>

          <TouchableOpacity
            style={styles.publishBtn}
            onPress={() => router.back()}
          >
            <Text
              style={styles.publishText}
            >
              Publicar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[
              styles.tabBtn,
              tab === 'post' &&
                styles.tabBtnActive,
            ]}
            onPress={() =>
              setTab('post')
            }
          >
            <Text
              style={[
                styles.tabText,
                tab === 'post' &&
                  styles.tabTextActive,
              ]}
            >
              📝 Post
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabBtn,
              tab === 'projeto' &&
                styles.tabBtnActiveGreen,
            ]}
            onPress={() =>
              setTab('projeto')
            }
          >
            <Text
              style={[
                styles.tabText,
                tab === 'projeto' &&
                  styles.tabTextActive,
              ]}
            >
              🎯 Projeto
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={
            styles.body
          }
          keyboardShouldPersistTaps="handled"
        >
          {tab === 'post' ? (
            <View style={styles.form}>
              <View
                style={styles.postHeader}
              >
                <View
                  style={styles.avatar}
                >
                  <Text
                    style={
                      styles.avatarText
                    }
                  >
                    AS
                  </Text>
                </View>

                <TextInput
                  style={styles.textarea}
                  placeholder="O que está acontecendo na sua jornada esportiva?"
                  placeholderTextColor={
                    colors.textMuted
                  }
                  multiline
                  value={text}
                  onChangeText={setText}
                  textAlignVertical="top"
                />
              </View>

              <View
                style={styles.mediaRow}
              >
                <TouchableOpacity
                  style={styles.mediaBtn}
                >
                  <Ionicons
                    name="image-outline"
                    size={20}
                    color={
                      colors.primary
                    }
                  />

                  <Text
                    style={
                      styles.mediaBtnText
                    }
                  >
                    Foto
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.mediaBtn}
                >
                  <Ionicons
                    name="videocam-outline"
                    size={20}
                    color={
                      colors.primary
                    }
                  />

                  <Text
                    style={
                      styles.mediaBtnText
                    }
                  >
                    Vídeo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Título do projeto"
                placeholderTextColor={
                  colors.textMuted
                }
              />

              <TextInput
                style={[
                  styles.input,
                  styles.textarea2,
                ]}
                placeholder="Descrição do projeto"
                placeholderTextColor={
                  colors.textMuted
                }
                multiline
                textAlignVertical="top"
              />

              <View
                style={styles.moneyWrap}
              >
                <Text
                  style={
                    styles.moneyPrefix
                  }
                >
                  R$
                </Text>

                <TextInput
                  style={
                    styles.moneyInput
                  }
                  placeholder="Meta financeira"
                  placeholderTextColor={
                    colors.textMuted
                  }
                  keyboardType="numeric"
                />
              </View>

              <TouchableOpacity
                style={styles.mediaBtn}
              >
                <Ionicons
                  name="image-outline"
                  size={20}
                  color={
                    colors.accent
                  }
                />

                <Text
                  style={[
                    styles.mediaBtnText,
                    {
                      color:
                        colors.accent,
                    },
                  ]}
                >
                  Adicionar imagem
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.card,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:
      'space-between',
    paddingHorizontal:
      spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 0.5,
    borderBottomColor:
      colors.border,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },

  publishBtn: {
    backgroundColor:
      colors.primary,
    paddingHorizontal:
      spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
  },

  publishText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },

  tabRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.lg,
    paddingBottom: spacing.md,
  },

  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: radius.lg,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },

  tabBtnActive: {
    backgroundColor:
      colors.primary,
  },

  tabBtnActiveGreen: {
    backgroundColor:
      colors.accent,
  },

  tabText: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.textMuted,
  },

  tabTextActive: {
    color: '#fff',
  },

  body: {
    flexGrow: 1,
    paddingHorizontal:
      spacing.lg,
  },

  form: {
    gap: spacing.md,
  },

  postHeader: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor:
      colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

  textarea: {
    flex: 1,
    minHeight: 120,
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },

  mediaRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingTop: spacing.md,
    borderTopWidth: 0.5,
    borderTopColor:
      colors.border,
  },

  mediaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: '#E3F2FD',
    paddingHorizontal:
      spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
  },

  mediaBtnText: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.primary,
  },

  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor:
      colors.border,
    paddingHorizontal:
      spacing.lg,
    paddingVertical: spacing.md,
    fontSize: 15,
    color: colors.text,
  },

  textarea2: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  moneyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor:
      colors.border,
    paddingHorizontal:
      spacing.lg,
  },

  moneyPrefix: {
    fontSize: 15,
    color: colors.textMuted,
    marginRight: spacing.sm,
  },

  moneyInput: {
    flex: 1,
    height: 52,
    fontSize: 15,
    color: colors.text,
  },
});