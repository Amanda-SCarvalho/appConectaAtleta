import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import PostCard from '@/components/PostCard';

import {
  colors,
  spacing,
} from '@/constants/theme';

const mockPosts = [
  {
    id: '1',
    username: 'Ana Silva',
    avatar:
      'https://i.pravatar.cc/100?img=1',
    time: '2h atrás',
    content:
      'Mais um treino concluído! 🏃‍♀️',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    hypes: 234,
    comments: 18,
    userType: 'atleta' as const,
  },

  {
    id: '2',
    username: 'Carlos Mendes',
    avatar:
      'https://i.pravatar.cc/100?img=3',
    time: '5h atrás',
    content:
      'Orgulho de apoiar jovens atletas 🌟',
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
    hypes: 156,
    comments: 12,
    userType: 'apoiador' as const,
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View
            style={styles.logoIcon}
          >
            <Text
              style={
                styles.logoIconText
              }
            >
              CA
            </Text>
          </View>

          <Text style={styles.logoText}>
            Conecta Atleta
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bellBtn}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.text}
          />

          <View style={styles.bellDot} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockPosts}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <PostCard {...item} />
        )}
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={
          styles.list
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:
      'space-between',
    backgroundColor: colors.card,
    paddingHorizontal:
      spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 0.5,
    borderBottomColor:
      colors.border,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor:
      colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoIconText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },

  logoText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primary,
  },

  bellBtn: {
    position: 'relative',
    padding: 4,
  },

  bellDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor:
      colors.danger,
    borderWidth: 1.5,
    borderColor: colors.card,
  },

  list: {
    paddingBottom: 16,
  },
});