import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Badge } from '../atoms';
import { colors, radius, shadow, spacing } from '../theme

export interface Product {
  id: string;
  name: string;
  sku: string;
  stock: number;
  profit: number;
  purchaseCost?: number;
  salePrice?: number;
}

interface ProductCardProps {
  product: Product;
  onSell: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSell }) => {
  const isLowStock = product.stock <= 5;

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text variant="h3" style={styles.name}>{product.name}</Text>
          <Text variant="caption" color={colors.textMuted}>SKU {product.sku}</Text>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text variant="caption" color={colors.textSecondary}>Stock: </Text>
              <Text variant="caption" color={isLowStock ? colors.error : colors.success} style={styles.statValue}>
                {product.stock}
              </Text>
            </View>
            <View style={styles.stat}>
              <Text variant="caption" color={colors.textSecondary}>Ganancia: </Text>
              <Text variant="caption" color={colors.success} style={styles.statValue}>
                ${product.profit.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          {isLowStock && (
            <Badge label="Bajo" color={colors.error} style={styles.badge} />
          )}
          <Button
            label="VENDER"
            onPress={() => onSell(product)}
            variant="accent"
            style={styles.sellButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginRight: spacing.md,
  },
  name: {
    fontSize: 15,
    marginBottom: 2,
  },
  stats: {
    flexDirection: 'row',
    marginTop: spacing.xs,
    gap: spacing.md,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontWeight: '600',
  },
  actions: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  badge: {
    marginBottom: spacing.xs,
  },
  sellButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minHeight: 36,
  },
});

export default ProductCard;
