import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import {
  colors,
  spacing,
  radius,
} from '@/constants/theme';

const mockUsers = [
  {
    id: 1,
    name: 'Ana Silva',
    sport: 'Atletismo',
    avatar:
      'https://i.pravatar.cc/100?img=1',
    type: 'atleta',
  },

  {
    id: 2,
    name: 'Carlos Mendes',
    sport: 'Natação',
    avatar:
      'https://i.pravatar.cc/100?img=3',
    type: 'apoiador',
  },
];

export default function ConexoesScreen() {
  const [connected, setConnected] =
    useState<number[]>([]);

  const [search, setSearch] =
    useState('');

  const filtered = mockUsers.filter(
    (u) =>
      u.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const toggle = (id: number) => {
    setConnected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Conexões
        </Text>

        <View style={styles.searchWrap}>
          <Ionicons
            name="search-outline"
            size={18}
            color={colors.textMuted}
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor={
              colors.textMuted
            }
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) =>
          item.id.toString()
        }
        contentContainerStyle={
          styles.list
        }
        renderItem={({ item }) => {
          const isConnected =
            connected.includes(item.id);

          return (
            <View style={styles.userCard}>
              <Image
                source={{
                  uri: item.avatar,
                }}
                style={styles.avatar}
              />

              <View style={styles.userInfo}>
                <Text
                  style={styles.userName}
                >
                  {item.name}
                </Text>

                <Text
                  style={styles.sport}
                >
                  {item.sport}
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.connectBtn,

                  isConnected &&
                    styles.connectBtnDone,
                ]}
                onPress={() =>
                  toggle(item.id)
                }
              >
                <Text
                  style={
                    styles.connectBtnText
                  }
                >
                  {isConnected
                    ? 'Conectado'
                    : 'Conectar'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    padding: spacing.lg,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },

  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
  },

  searchIcon: {
    marginRight: spacing.sm,
  },

  searchInput: {
    flex: 1,
    height: 48,
  },

  list: {
    padding: spacing.lg,
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: spacing.md,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: spacing.md,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.text,
  },

  sport: {
    color: colors.textMuted,
    marginTop: 2,
  },

  connectBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
  },

  connectBtnDone: {
    backgroundColor: '#ddd',
  },

  connectBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
});