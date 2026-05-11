// src/screens/PerfilScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius } from '@/constants/theme';

const { width } = Dimensions.get('window');
const GRID_SIZE = (width - 2) / 3;

const mockImages = [
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
  'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400',
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
  'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
];

type Tab = 'posts' | 'projetos';

export default function PerfilScreen() {
  const [tab, setTab] = useState<Tab>('posts');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profileTop}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/200?img=1' }}
              style={styles.avatar}
            />
            <View style={styles.profileMeta}>
              <Text style={styles.name}>Ana Silva</Text>
              <View style={styles.athleteBadge}>
                <Text style={styles.athleteBadgeText}>Atleta</Text>
              </View>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={12} color={colors.textMuted} />
                <Text style={styles.location}>São Paulo, SP</Text>
              </View>
            </View>
          </View>

          <Text style={styles.bio}>
            🏃‍♀️ Atleta de atletismo | Sonhando com as Olimpíadas | Cada passo conta!
          </Text>

          <View style={styles.statsRow}>
            {[
              { val: '248', label: 'Hypes' },
              { val: '1.2k', label: 'Conexões' },
              { val: '3', label: 'Projetos' },
            ].map((s) => (
              <View key={s.label} style={styles.stat}>
                <Text style={styles.statVal}>{s.val}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionBtnAccent}>
              <Ionicons name="heart-outline" size={16} color="#fff" />
              <Text style={styles.actionBtnText}>Apoiar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="chatbubble-outline" size={16} color={colors.text} />
              <Text style={[styles.actionBtnText, { color: colors.text }]}>Mensagem</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabBar}>
          {(['posts', 'projetos'] as Tab[]).map((t) => (
            <TouchableOpacity
              key={t}
              style={[styles.tabItem, tab === t && styles.tabItemActive]}
              onPress={() => setTab(t)}
            >
              <Ionicons
                name={t === 'posts' ? 'grid-outline' : 'folder-outline'}
                size={16}
                color={tab === t ? colors.primary : colors.textMuted}
              />
              <Text style={[styles.tabItemText, tab === t && styles.tabItemTextActive]}>
                {t === 'posts' ? 'Posts' : 'Projetos'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {tab === 'posts' ? (
          <View style={styles.grid}>
            {mockImages.map((uri, i) => (
              <Image key={i} source={{ uri }} style={styles.gridImage} />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="folder-open-outline" size={48} color={colors.border} />
            <Text style={styles.emptyText}>Seus projetos aparecerão aqui</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  profileSection: {
    backgroundColor: colors.card,
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.lg,
    marginBottom: spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  profileMeta: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  athleteBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.full,
  },
  athleteBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  location: {
    fontSize: 12,
    color: colors.textMuted,
  },
  bio: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 21,
    marginBottom: spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  statVal: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textMuted,
  },
  actionRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionBtnAccent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.accent,
    paddingVertical: 12,
    borderRadius: radius.lg,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: '#EEEEEE',
    paddingVertical: 12,
    borderRadius: radius.lg,
  },
  actionBtnText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    gap: spacing.xs,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabItemActive: {
    borderBottomColor: colors.primary,
  },
  tabItemText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
  },
  tabItemTextActive: {
    color: colors.primary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
  },
  gridImage: {
    width: GRID_SIZE,
    height: GRID_SIZE,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xxl * 2,
    gap: spacing.md,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textMuted,
  },
});
