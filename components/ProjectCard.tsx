import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  colors,
  spacing,
  radius,
  typography,
} from '@/constants/theme';

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  goal: number;
  raised: number;
  author: string;
  onPress?: () => void;
}

export default function ProjectCard({
  title,
  image,
  goal,
  raised,
  author,
  onPress,
}: Readonly<ProjectCardProps>) {
  const progress = Math.min(
    (raised / goal) * 100,
    100
  );

  const formatCurrency = (val: number) =>
    val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.author}>
          por {author}
        </Text>

        <View style={styles.progressWrap}>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%` },
              ]}
            />
          </View>

          <View style={styles.progressMeta}>
            <Text style={styles.raised}>
              {formatCurrency(raised)}
            </Text>

            <Text style={styles.goal}>
              Meta: {formatCurrency(goal)}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>
            Apoiar
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },

  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },

  body: {
    padding: spacing.md,
  },

  title: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  author: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },

  progressWrap: {
    marginTop: spacing.sm,
  },

  progressTrack: {
    height: 8,
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
    marginTop: 6,
  },

  raised: {
    ...typography.caption,
    fontWeight: '700',
    color: colors.accent,
  },

  goal: {
    ...typography.caption,
    color: colors.textMuted,
  },

  button: {
    marginTop: spacing.md,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});