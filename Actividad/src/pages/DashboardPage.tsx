import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { DashboardTemplate } from '../templates';
import { ProductList, ProductList as PL } from '../organisms';
import { StatCard } from '../molecules';
import type { Product } from '../molecules';
import { colors, spacing } from '../theme
import { RootStackParamList } from '../navigation/types';

type DashboardPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
  route: RouteProp<RootStackParamList, 'Dashboard'>;
};

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Camisa Azul', sku: 'CA001', stock: 25, profit: 10.0 },
  { id: '2', name: 'Camisa Azul Premium', sku: 'CA002', stock: 25, profit: 12.5 },
  { id: '3', name: 'Pantalón Negro', sku: 'PN001', stock: 15, profit: 14.8 },
  { id: '4', name: 'Chaqueta Verde', sku: 'CH001', stock: 4, profit: 11.2 },
  { id: '5', name: 'Zapatos Café', sku: 'ZC001', stock: 8, profit: 22.0 },
];

const DashboardPage: React.FC<DashboardPageProps> = ({ navigation, route }) => {
  const userName = route.params?.userName ?? 'Jhon Doe';
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);

  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalProfit = products.reduce((sum, p) => sum + p.profit, 0);
  const lowStock = products.filter(p => p.stock <= 5).length;

  const handleSell = (product: Product) => {
    if (product.stock <= 0) {
      Alert.alert('Sin stock', 'Este producto no tiene unidades disponibles');
      return;
    }
    Alert.alert(
      'Confirmar venta',
      `¿Vender una unidad de ${product.name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Vender',
          onPress: () => {
            setProducts(prev =>
              prev.map(p =>
                p.id === product.id ? { ...p, stock: p.stock - 1 } : p,
              ),
            );
          },
        },
      ],
    );
  };

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Deseas salir?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Salir', onPress: () => navigation.replace('Login') },
    ]);
  };

  const handleRegisterProduct = () => {
    navigation.navigate('Register');
  };

  return (
    <DashboardTemplate
      userName={userName}
      onLogout={handleLogout}
      onRegisterProduct={handleRegisterProduct}
    >
      <View style={styles.statsRow}>
        <StatCard
          title="Productos"
          value={String(products.length)}
          icon="📦"
          color={colors.primary}
          style={styles.statCard}
        />
        <StatCard
          title="Stock Total"
          value={String(totalStock)}
          icon="📊"
          color={colors.accent}
          style={styles.statCard}
        />
        <StatCard
          title="Alertas"
          value={String(lowStock)}
          icon="⚠️"
          color={lowStock > 0 ? colors.error : colors.success}
          style={styles.statCard}
        />
      </View>
      <ProductList products={products} onSell={handleSell} />
    </DashboardTemplate>
  );
};

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
  },
});

export default DashboardPage;
