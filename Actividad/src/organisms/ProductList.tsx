import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from '../atoms';
import { ProductCard, SearchBar } from '../molecules';
import type { Product } from '../molecules';
import { colors, spacing } from '../theme

interface ProductListProps {
  products: Product[];
  onSell: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSell }) => {
  const [search, setSearch] = useState('');

  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />
      {filtered.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>📦</Text>
          <Text variant="body" color={colors.textMuted} align="center">
            No se encontraron productos
          </Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductCard product={item} onSell={onSell} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    marginBottom: spacing.md,
  },
  list: {
    paddingBottom: spacing.xl,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
});

export default ProductList;
