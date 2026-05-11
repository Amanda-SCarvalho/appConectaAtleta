import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

import { colors, spacing, radius } from '@/constants/theme';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',

    title: 'Apoie Atletas',

    description:
      'Ajude atletas de comunidades a alcançar seus sonhos através do seu apoio direto.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',

    title: 'Descubra Talentos',

    description:
      'Conecte-se com atletas incríveis e acompanhe suas jornadas inspiradoras.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',

    title: 'Participe de Projetos',

    description:
      'Contribua com projetos esportivos e faça parte da transformação social.',
  },
];

export default function OnboardingScreen() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      router.replace('/login');
    }
  };

  const slide = slides[current];

  return (
    <ImageBackground
      source={{ uri: slide.image }}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={[
          'transparent',
          'rgba(0,0,0,0.5)',
          'rgba(0,0,0,0.92)',
        ]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>CA</Text>
            </View>

            <Text style={styles.logoLabel}>
              Conecta Atleta
            </Text>
          </View>

          <Text style={styles.title}>
            {slide.title}
          </Text>

          <Text style={styles.description}>
            {slide.description}
          </Text>

          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i === current && styles.dotActive,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={handleNext}
          >
            <Text style={styles.btnText}>
              {current < slides.length - 1
                ? 'Próximo'
                : 'Começar'}
            </Text>
          </TouchableOpacity>

          {current < slides.length - 1 && (
            <TouchableOpacity
              onPress={() =>
                router.replace('/login')
              }
            >
              <Text style={styles.skip}>
                Pular
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 48,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },

  logo: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },

  logoLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  description: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginBottom: spacing.xl,
  },

  dot: {
    width: 8,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },

  dotActive: {
    width: 24,
    backgroundColor: '#fff',
  },

  btn: {
    backgroundColor: colors.accent,
    borderRadius: radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  skip: {
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: spacing.sm,
  },
});