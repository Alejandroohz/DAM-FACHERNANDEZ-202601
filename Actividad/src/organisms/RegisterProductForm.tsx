import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../atoms';
import { FormField } from '../molecules';
import { spacing } from '../theme

export interface ProductFormData {
  name: string;
  sku: string;
  stock: string;
  purchaseCost: string;
  salePrice: string;
  description: string;
}

interface RegisterProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  loading?: boolean;
}

const RegisterProductForm: React.FC<RegisterProductFormProps> = ({
  onSubmit,
  loading = false,
}) => {
  const [form, setForm] = useState<ProductFormData>({
    name: '',
    sku: '',
    stock: '',
    purchaseCost: '',
    salePrice: '',
    description: '',
  });
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});

  const update = (field: keyof ProductFormData) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors: Partial<ProductFormData> = {};
    if (!form.name.trim()) newErrors.name = 'Nombre requerido';
    if (!form.sku.trim()) newErrors.sku = 'SKU requerido';
    if (!form.stock.trim()) newErrors.stock = 'Cantidad requerida';
    else if (isNaN(Number(form.stock))) newErrors.stock = 'Debe ser un número';
    if (!form.purchaseCost.trim()) newErrors.purchaseCost = 'Costo requerido';
    else if (isNaN(Number(form.purchaseCost))) newErrors.purchaseCost = 'Debe ser un número';
    if (!form.salePrice.trim()) newErrors.salePrice = 'Precio requerido';
    else if (isNaN(Number(form.salePrice))) newErrors.salePrice = 'Debe ser un número';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onSubmit(form);
  };

  return (
    <View style={styles.container}>
      <FormField
        label="Nombre del Producto"
        placeholder="Ej: Camisa Azul"
        value={form.name}
        onChangeText={update('name')}
        error={errors.name}
      />
      <FormField
        label="SKU / Código"
        placeholder="Ej: CA001"
        value={form.sku}
        onChangeText={update('sku')}
        autoCapitalize="characters"
        error={errors.sku}
      />
      <FormField
        label="Cantidad en Stock"
        placeholder="0"
        value={form.stock}
        onChangeText={update('stock')}
        keyboardType="numeric"
        error={errors.stock}
      />
      <View style={styles.row}>
        <View style={styles.halfField}>
          <FormField
            label="Costo de Compra"
            placeholder="$ 0.00"
            value={form.purchaseCost}
            onChangeText={update('purchaseCost')}
            keyboardType="numeric"
            error={errors.purchaseCost}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.halfField}>
          <FormField
            label="Precio de Venta"
            placeholder="$ 0.00"
            value={form.salePrice}
            onChangeText={update('salePrice')}
            keyboardType="numeric"
            error={errors.salePrice}
          />
        </View>
      </View>
      <FormField
        label="Descripción"
        placeholder="Descripción del producto..."
        value={form.description}
        onChangeText={update('description')}
      />
      <Button
        label="CREAR PRODUCTO"
        onPress={handleSubmit}
        fullWidth
        loading={loading}
        style={styles.submitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  halfField: {
    flex: 1,
  },
  spacer: {
    width: spacing.sm,
  },
  submitButton: {
    marginTop: spacing.sm,
  },
});

export default RegisterProductForm;
