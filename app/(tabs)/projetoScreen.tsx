// src/screens/ProjetoScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, radius } from '@/constants/theme';

const project = {
  title: 'Material esportivo para jovens atletas',
  image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
  author: 'Ana Silva',
  authorAvatar: 'https://i.pravatar.cc/100?img=1',
  goal: 5000,
  raised: 3800,
  supporters: 42,
  daysLeft: 14,
  description:
    'Estamos arrecadando fundos para comprar material esportivo (tênis, uniformes e equipamentos de treino) para 20 jovens atletas da comunidade do Jardim São Paulo. Cada contribuição nos aproxima do sonho de competir em igualdade de condições! 🏅',
};

export default function ProjetoScreen() {
  const navigation = useNavigation();
  const progress = Math.min((project.raised / project.goal) * 100, 100);

  const formatCurrency = (val: number) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero image */}
        <View style={styles.imageWrap}>
          <Image source={{ uri: project.image }} style={styles.image} resizeMode="cover" />
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <Ionicons name="share-social-outline" size={22} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>{project.title}</Text>

          <View style={styles.authorRow}>
            <Image source={{ uri: project.authorAvatar }} style={styles.authorAvatar} />
            <Text style={styles.authorText}>
              por <Text style={styles.authorName}>{project.author}</Text>
            </Text>
          </View>

          {/* Progress */}
          <View style={styles.progressSection}>
            <View style={styles.progressLabels}>
              <Text style={styles.raised}>{formatCurrency(project.raised)}</Text>
              <Text style={styles.goal}>Meta: {formatCurrency(project.goal)}</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
            <View style={styles.progressMeta}>
              <Text style={styles.progressPct}>{Math.round(progress)}% da meta alcançada</Text>
              <Text style={styles.daysLeft}>⏱ {project.daysLeft} dias restantes</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{project.supporters}</Text>
              <Text style={styles.statLabel}>Apoiadores</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{Math.round(progress)}%</Text>
              <Text style={styles.statLabel}>Concluído</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{project.daysLeft}</Text>
              <Text style={styles.statLabel}>Dias restantes</Text>
            </View>
          </View>

          <Text style={styles.description}>{project.description}</Text>

          <TouchableOpacity style={styles.supportBtn}>
            <Ionicons name="heart" size={20} color="#fff" />
            <Text style={styles.supportBtnText}>Apoiar este projeto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageWrap: {
    position: 'relative',
    aspectRatio: 16 / 9,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.card,
    marginTop: -spacing.xl,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    padding: spacing.xl,
    paddingBottom: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 28,
    marginBottom: spacing.md,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  authorText: {
    fontSize: 13,
    color: colors.textMuted,
  },
  authorName: {
    fontWeight: '700',
    color: colors.text,
  },
  progressSection: {
    marginBottom: spacing.xl,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  raised: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.accent,
  },
  goal: {
    fontSize: 13,
    color: colors.textMuted,
  },
  progressTrack: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: radius.full,
  },
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  progressPct: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.accent,
  },
  daysLeft: {
    fontSize: 12,
    color: colors.textMuted,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.xl,
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
    fontSize: 11,
    color: colors.textMuted,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  supportBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: radius.lg,
    paddingVertical: 16,
  },
  supportBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
