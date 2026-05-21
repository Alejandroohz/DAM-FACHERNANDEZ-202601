import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterProductForm } from '../organisms';
import { Text } from '../atoms';
import type { ProductFormData } from '../organisms/RegisterProductForm';
import { colors, spacing } from '../theme
import { RootStackParamList } from '../navigation/types';

type RegisterPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterPage: React.FC<RegisterPageProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: ProductFormData) => {
    setLoading(true);
    // Simulated API call — replace with real implementation
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        '¡Producto creado!',
        `"${data.name}" fue registrado exitosamente con SKU ${data.sku}.`,
        [{ text: 'OK', onPress: () => navigation.goBack() }],
      );
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text variant="h3" color={colors.white}>REGISTRAR PRODUCTO</Text>
          <Text variant="caption" color="rgba(255,255,255,0.65)">
            Create a new product listing
          </Text>
        </View>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <RegisterProductForm onSubmit={handleSubmit} loading={loading} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backLink}>
            <Text variant="bodySmall" color={colors.textSecondary} align="center">
              ← Back to Catalog
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 50,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 22,
    color: colors.white,
    fontWeight: '300',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.lg,
    shadowColor: 'rgba(45,85,128,0.12)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  backLink: {
    marginTop: spacing.md,
    paddingVertical: spacing.sm,
  },
});

export default RegisterPage;
