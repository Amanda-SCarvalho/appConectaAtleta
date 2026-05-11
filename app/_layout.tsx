// app/(tabs)/_layout.tsx

import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { colors } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarButton: HapticTab,

        tabBarActiveTintColor: colors.primary,

        tabBarInactiveTintColor: colors.textMuted,

        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopWidth: 0.5,
          borderTopColor: colors.border,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="house.fill"
              color={color}
            />
          ),
        }}
      />

      {/* EXPLORE */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="magnifyingglass"
              color={color}
            />
          ),
        }}
      />

      {/* CONEXÕES */}
      <Tabs.Screen
        name="conexoes"
        options={{
          title: 'Conexões',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="person.2.fill"
              color={color}
            />
          ),
        }}
      />

      {/* CRIAR POST */}
      <Tabs.Screen
        name="criarPost"
        options={{
          title: 'Criar',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="plus.circle.fill"
              color={color}
            />
          ),
        }}
      />

      {/* PROJETOS */}
      <Tabs.Screen
        name="projetoScreen"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="folder.fill"
              color={color}
            />
          ),
        }}
      />

      {/* PERFIL */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="person.fill"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}