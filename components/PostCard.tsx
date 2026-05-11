import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, typography } from '@/constants/theme';

interface PostCardProps {
  username: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  hypes: number;
  comments: number;
  userType?: 'atleta' | 'apoiador';
}

export default function PostCard({
  username,
  avatar,
  time,
  content,
  image,
  hypes,
  comments,
  userType = 'atleta',
}: Readonly<PostCardProps>) {
  const [liked, setLiked] = useState(false);
  const [hypeCount, setHypeCount] = useState(hypes);

  const handleHype = () => {
    setLiked(!liked);
    setHypeCount(liked ? hypeCount - 1 : hypeCount + 1);
  };

  const badgeColor =
    userType === 'atleta' ? colors.primary : colors.accent;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        <View style={styles.meta}>
          <View style={styles.nameRow}>
            <Text style={styles.username}>{username}</Text>

            <View
              style={[
                styles.badge,
                { backgroundColor: badgeColor },
              ]}
            >
              <Text style={styles.badgeText}>
                {userType === 'atleta'
                  ? 'Atleta'
                  : 'Apoiador'}
              </Text>
            </View>
          </View>

          <Text style={styles.time}>{time}</Text>
        </View>

        <TouchableOpacity>
          <Ionicons
            name="ellipsis-horizontal"
            size={20}
            color={colors.textMuted}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.content}>{content}</Text>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.action}
          onPress={handleHype}
        >
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={22}
            color={
              liked ? colors.danger : colors.textMuted
            }
          />

          <Text
            style={[
              styles.actionText,
              liked && { color: colors.danger },
            ]}
          >
            {hypeCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <Ionicons
            name="chatbubble-outline"
            size={20}
            color={colors.textMuted}
          />

          <Text style={styles.actionText}>
            {comments}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.action, { marginLeft: 'auto' }]}
        >
          <Ionicons
            name="share-social-outline"
            size={20}
            color={colors.textMuted}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.lg,
    paddingBottom: spacing.sm,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
  },

  meta: {
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  username: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radius.full,
  },

  badgeText: {
    ...typography.tiny,
    color: '#fff',
  },

  time: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },

  content: {
    ...typography.body,
    color: colors.text,
    lineHeight: 21,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },

  postImage: {
    width: '100%',
    aspectRatio: 4 / 3,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.xl,
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  actionText: {
    ...typography.body,
    fontWeight: '500',
    color: colors.textMuted,
  },
});