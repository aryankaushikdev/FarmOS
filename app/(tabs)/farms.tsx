import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Bell, Plus, Star, MapPin, Calendar, Droplets, Thermometer } from 'lucide-react-native';

export default function FarmsScreen() {
  const [selectedCrop, setSelectedCrop] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const crops = [
    { 
      id: 1, 
      name: 'Winter Wheat', 
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      season: 'Winter',
      yield: 'High'
    },
    { 
      id: 2, 
      name: 'Winter Barley', 
      image: 'https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      season: 'Winter',
      yield: 'Medium'
    },
    { 
      id: 3, 
      name: 'Oil Seed Rape', 
      image: 'https://images.pexels.com/photos/162209/rapeseed-field-yellow-nature-162209.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      season: 'Autumn',
      yield: 'High'
    },
    { 
      id: 4, 
      name: 'Sugar Beet', 
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      season: 'Spring',
      yield: 'Very High'
    },
  ];

  const relatedProducts = [
    { 
      id: 1, 
      name: 'Organic Fertilizer', 
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '£52/bag'
    },
    { 
      id: 2, 
      name: 'Seed Treatment', 
      image: 'https://images.pexels.com/photos/1595105/pexels-photo-1595105.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '£34/L'
    },
    { 
      id: 3, 
      name: 'Irrigation Kit', 
      image: 'https://images.pexels.com/photos/1595106/pexels-photo-1595106.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '£145/set'
    },
    { 
      id: 4, 
      name: 'Soil Tester', 
      image: 'https://images.pexels.com/photos/1595107/pexels-photo-1595107.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '£95/unit'
    },
  ];

  const currentCrop = crops[selectedCrop];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Crop Details</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#1f2937" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Main Crop Image */}
        <View style={styles.mainImageContainer}>
          <Image
            source={{ uri: currentCrop.image }}
            style={styles.mainImage}
          />
          <View style={styles.locationBadge}>
            <MapPin size={12} color="#16a34a" />
            <Text style={styles.locationBadgeText}>Gravesend Farm</Text>
          </View>
        </View>

        {/* Crop Selection */}
        <View style={styles.cropSelection}>
          <View style={styles.selectionCircle}>
            <View style={[styles.selectionIndicator, { left: `${selectedCrop * 25}%` }]} />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cropScroll}>
            {crops.map((crop, index) => (
              <TouchableOpacity
                key={crop.id}
                style={[
                  styles.cropOption,
                  selectedCrop === index && styles.selectedCropOption
                ]}
                onPress={() => setSelectedCrop(index)}
              >
                <Image source={{ uri: crop.image }} style={styles.cropOptionImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{currentCrop.name} Seeds</Text>
          <Text style={styles.availabilityText}>Available for planting</Text>
          
          <View style={styles.priceRow}>
            <View style={styles.ratingContainer}>
              <Star size={16} color="#fbbf24" fill="#fbbf24" />
              <Text style={styles.ratingText}>4.8 (156 reviews)</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>£95</Text>
              <Text style={styles.priceUnit}>/hectare</Text>
            </View>
          </View>

          {/* Crop Stats */}
          <View style={styles.cropStats}>
            <View style={styles.statItem}>
              <Calendar size={16} color="#16a34a" />
              <Text style={styles.statLabel}>Season</Text>
              <Text style={styles.statValue}>{currentCrop.season}</Text>
            </View>
            <View style={styles.statItem}>
              <Thermometer size={16} color="#f59e0b" />
              <Text style={styles.statLabel}>Yield</Text>
              <Text style={styles.statValue}>{currentCrop.yield}</Text>
            </View>
            <View style={styles.statItem}>
              <Droplets size={16} color="#3b82f6" />
              <Text style={styles.statLabel}>Water Need</Text>
              <Text style={styles.statValue}>Medium</Text>
            </View>
          </View>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Hectares to plant:</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity} ha</Text>
              <TouchableOpacity
                style={[styles.quantityButton, styles.quantityButtonAdd]}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Plus size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Growing Conditions */}
          <View style={styles.conditionsSection}>
            <Text style={styles.sectionTitle}>Optimal Growing Conditions for Kent</Text>
            <View style={styles.conditionsList}>
              <View style={styles.conditionItem}>
                <Text style={styles.conditionLabel}>Soil pH:</Text>
                <Text style={styles.conditionValue}>6.0 - 7.5</Text>
              </View>
              <View style={styles.conditionItem}>
                <Text style={styles.conditionLabel}>Temperature:</Text>
                <Text style={styles.conditionValue}>12°C - 22°C</Text>
              </View>
              <View style={styles.conditionItem}>
                <Text style={styles.conditionLabel}>Rainfall:</Text>
                <Text style={styles.conditionValue}>650-750mm/year</Text>
              </View>
              <View style={styles.conditionItem}>
                <Text style={styles.conditionLabel}>Harvest time:</Text>
                <Text style={styles.conditionValue}>July - August</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              {currentCrop.name} is well-suited for Kent's Thames Estuary climate and heavy clay soils. This variety offers excellent disease resistance and consistent yields in the region's maritime conditions. Perfect for rotation with other crops...
              <Text style={styles.readMoreText}> Read More</Text>
            </Text>
          </View>

          {/* Related Products */}
          <View style={styles.relatedSection}>
            <Text style={styles.sectionTitle}>Recommended Supplies</Text>
            <View style={styles.relatedGrid}>
              {relatedProducts.map((product) => (
                <TouchableOpacity key={product.id} style={styles.relatedItem}>
                  <Image source={{ uri: product.image }} style={styles.relatedImage} />
                  <Text style={styles.relatedName}>{product.name}</Text>
                  <Text style={styles.relatedPrice}>{product.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Add to Plan Button */}
          <TouchableOpacity style={styles.addToPlanButton}>
            <LinearGradient
              colors={['#16a34a', '#15803d']}
              style={styles.addToPlanGradient}
            >
              <Plus size={20} color="#ffffff" />
              <Text style={styles.addToPlanText}>Add to Planting Plan</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#ef4444',
    borderRadius: 4,
  },
  mainImageContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  locationBadge: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  locationBadgeText: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    color: '#16a34a',
    marginLeft: 2,
  },
  cropSelection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
  },
  selectionCircle: {
    width: 300,
    height: 2,
    backgroundColor: '#e5e7eb',
    borderRadius: 1,
    marginBottom: 20,
    position: 'relative',
  },
  selectionIndicator: {
    position: 'absolute',
    width: 40,
    height: 2,
    backgroundColor: '#16a34a',
    borderRadius: 1,
    transition: 'left 0.3s ease',
  },
  cropScroll: {
    paddingHorizontal: 20,
  },
  cropOption: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCropOption: {
    borderColor: '#16a34a',
  },
  cropOptionImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    marginTop: -24,
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  availabilityText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#16a34a',
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
  },
  priceUnit: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginLeft: 2,
  },
  cropStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  quantityContainer: {
    marginBottom: 24,
  },
  quantityLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#1f2937',
    marginBottom: 12,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonAdd: {
    backgroundColor: '#16a34a',
  },
  quantityButtonText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#6b7280',
  },
  quantityText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginHorizontal: 16,
  },
  conditionsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 12,
  },
  conditionsList: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
  },
  conditionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  conditionLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  conditionValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  descriptionSection: {
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    lineHeight: 20,
  },
  readMoreText: {
    color: '#16a34a',
    fontFamily: 'Inter-SemiBold',
  },
  relatedSection: {
    marginBottom: 32,
  },
  relatedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  relatedItem: {
    width: '48%',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  relatedImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  relatedName: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 4,
  },
  relatedPrice: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#16a34a',
  },
  addToPlanButton: {
    marginBottom: 32,
  },
  addToPlanGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
  },
  addToPlanText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginLeft: 8,
  },
});