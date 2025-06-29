import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Bell, TrendingUp, MapPin, Calendar, Droplets, Thermometer, Zap, Target, PoundSterling } from 'lucide-react-native';

export default function MyFarmScreen() {
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>MyFarm</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#1f2937" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Farm Overview */}
        <View style={styles.farmOverview}>
          <View style={styles.farmHeader}>
            <View>
              <Text style={styles.farmName}>Gravesend Farm</Text>
              <View style={styles.locationContainer}>
                <MapPin size={16} color="#6b7280" />
                <Text style={styles.locationText}>Kent, Thames Estuary</Text>
              </View>
            </View>
            <View style={styles.farmStats}>
              <Text style={styles.farmSize}>142 hectares</Text>
              <Text style={styles.farmType}>Mixed Arable</Text>
            </View>
          </View>
        </View>

        {/* AI Optimization Alert */}
        <View style={styles.aiAlert}>
          <LinearGradient
            colors={['#3b82f6', '#1d4ed8']}
            style={styles.aiAlertGradient}
          >
            <View style={styles.aiAlertHeader}>
              <Zap size={24} color="#ffffff" />
              <Text style={styles.aiAlertTitle}>AI Optimization Available</Text>
            </View>
            <Text style={styles.aiAlertText}>
              Field 12 can be optimized for +21% profit increase
            </Text>
          </LinearGradient>
        </View>

        {/* Field Optimization Card */}
        <View style={styles.optimizationCard}>
          <View style={styles.optimizationHeader}>
            <View style={styles.fieldInfo}>
              <Text style={styles.fieldNumber}>Field 12</Text>
              <Text style={styles.fieldSize}>8.5 hectares • Heavy Clay</Text>
            </View>
            <View style={styles.profitBadge}>
              <TrendingUp size={16} color="#16a34a" />
              <Text style={styles.profitIncrease}>+21%</Text>
            </View>
          </View>

          {/* Current vs Optimized Toggle */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[styles.toggleButton, !showOptimized && styles.toggleButtonActive]}
              onPress={() => setShowOptimized(false)}
            >
              <Text style={[styles.toggleText, !showOptimized && styles.toggleTextActive]}>
                Current Setup
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleButton, showOptimized && styles.toggleButtonActive]}
              onPress={() => setShowOptimized(true)}
            >
              <Text style={[styles.toggleText, showOptimized && styles.toggleTextActive]}>
                AI Optimized
              </Text>
            </TouchableOpacity>
          </View>

          {/* Field Visualization */}
          <View style={styles.fieldVisualization}>
            <View style={styles.fieldMap}>
              {!showOptimized ? (
                // Current Layout - 100% Wheat
                <View style={styles.currentField}>
                  <View style={styles.wheatSection}>
                    <Text style={styles.cropLabel}>100% Winter Wheat</Text>
                  </View>
                </View>
              ) : (
                // Optimized Layout - 85% Wheat + 15% Subsidy
                <View style={styles.optimizedField}>
                  <View style={styles.wheatSectionOptimized}>
                    <Text style={styles.cropLabel}>85% Winter Wheat</Text>
                  </View>
                  <View style={styles.subsidySection}>
                    <Text style={styles.cropLabelSubsidy}>15% Bird Food</Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          {/* Yield Comparison */}
          <View style={styles.yieldComparison}>
            <View style={styles.yieldColumn}>
              <Text style={styles.yieldLabel}>Current Yield</Text>
              <Text style={styles.yieldValue}>£1,200</Text>
              <Text style={styles.yieldUnit}>per hectare</Text>
              <View style={styles.cropBreakdown}>
                <Text style={styles.breakdownText}>100% Wheat: £1,200/ha</Text>
              </View>
            </View>
            
            <View style={styles.yieldArrow}>
              <TrendingUp size={24} color="#16a34a" />
            </View>
            
            <View style={styles.yieldColumn}>
              <Text style={styles.yieldLabel}>AI Optimized</Text>
              <Text style={[styles.yieldValue, styles.yieldValueOptimized]}>£1,456</Text>
              <Text style={styles.yieldUnit}>per hectare</Text>
              <View style={styles.cropBreakdown}>
                <Text style={styles.breakdownText}>85% Wheat: £1,020/ha</Text>
                <Text style={styles.breakdownText}>15% Subsidy: £436/ha</Text>
              </View>
            </View>
          </View>

          {/* Profit Increase Highlight */}
          <View style={styles.profitHighlight}>
            <LinearGradient
              colors={['#16a34a', '#15803d']}
              style={styles.profitGradient}
            >
              <PoundSterling size={32} color="#ffffff" />
              <View style={styles.profitDetails}>
                <Text style={styles.profitAmount}>+£256</Text>
                <Text style={styles.profitText}>per hectare increase</Text>
                <Text style={styles.profitPercentage}>+21% profit boost</Text>
              </View>
            </LinearGradient>
          </View>

          {/* Optimization Details */}
          <View style={styles.optimizationDetails}>
            <Text style={styles.detailsTitle}>Why This Works</Text>
            <View style={styles.detailsList}>
              <View style={styles.detailItem}>
                <Target size={16} color="#16a34a" />
                <Text style={styles.detailText}>
                  Winter bird food subsidy: £2,900/hectare for 15% allocation
                </Text>
              </View>
              <View style={styles.detailItem}>
                <Calendar size={16} color="#3b82f6" />
                <Text style={styles.detailText}>
                  Optimal for Thames Estuary heavy clay soil conditions
                </Text>
              </View>
              <View style={styles.detailItem}>
                <Droplets size={16} color="#06b6d4" />
                <Text style={styles.detailText}>
                  Maintains soil health with diverse crop rotation
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Additional Farm Insights */}
        <View style={styles.insightsSection}>
          <Text style={styles.insightsTitle}>Farm Insights</Text>
          
          <View style={styles.insightCards}>
            <View style={styles.insightCard}>
              <View style={styles.insightIcon}>
                <Thermometer size={20} color="#f59e0b" />
              </View>
              <Text style={styles.insightLabel}>Soil Temperature</Text>
              <Text style={styles.insightValue}>8.2°C</Text>
              <Text style={styles.insightStatus}>Optimal for winter crops</Text>
            </View>
            
            <View style={styles.insightCard}>
              <View style={styles.insightIcon}>
                <Droplets size={20} color="#3b82f6" />
              </View>
              <Text style={styles.insightLabel}>Moisture Level</Text>
              <Text style={styles.insightValue}>78%</Text>
              <Text style={styles.insightStatus}>Good for establishment</Text>
            </View>
            
            <View style={styles.insightCard}>
              <View style={styles.insightIcon}>
                <TrendingUp size={20} color="#16a34a" />
              </View>
              <Text style={styles.insightLabel}>Market Price</Text>
              <Text style={styles.insightValue}>£195/t</Text>
              <Text style={styles.insightStatus}>Wheat futures up 2%</Text>
            </View>
          </View>
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
  farmOverview: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  farmHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  farmName: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginLeft: 4,
  },
  farmStats: {
    alignItems: 'flex-end',
  },
  farmSize: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#16a34a',
  },
  farmType: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  aiAlert: {
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  aiAlertGradient: {
    padding: 16,
  },
  aiAlertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  aiAlertTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginLeft: 8,
  },
  aiAlertText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#dbeafe',
  },
  optimizationCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  optimizationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  fieldInfo: {
    flex: 1,
  },
  fieldNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  fieldSize: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  profitBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  profitIncrease: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#16a34a',
    marginLeft: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6b7280',
  },
  toggleTextActive: {
    color: '#1f2937',
  },
  fieldVisualization: {
    marginBottom: 24,
  },
  fieldMap: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  currentField: {
    flex: 1,
    backgroundColor: '#16a34a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheatSection: {
    flex: 1,
    width: '100%',
    backgroundColor: '#16a34a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optimizedField: {
    flex: 1,
    flexDirection: 'row',
  },
  wheatSectionOptimized: {
    flex: 0.85,
    backgroundColor: '#16a34a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subsidySection: {
    flex: 0.15,
    backgroundColor: '#f59e0b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropLabel: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    textAlign: 'center',
  },
  cropLabelSubsidy: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    textAlign: 'center',
    transform: [{ rotate: '90deg' }],
  },
  yieldComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 20,
  },
  yieldColumn: {
    flex: 1,
    alignItems: 'center',
  },
  yieldLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 8,
  },
  yieldValue: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  yieldValueOptimized: {
    color: '#16a34a',
  },
  yieldUnit: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 12,
  },
  yieldArrow: {
    marginHorizontal: 20,
  },
  cropBreakdown: {
    alignItems: 'center',
  },
  breakdownText: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 2,
  },
  profitHighlight: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  profitGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profitDetails: {
    marginLeft: 16,
    flex: 1,
  },
  profitAmount: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  profitText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#dcfce7',
    marginBottom: 2,
  },
  profitPercentage: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
  },
  optimizationDetails: {
    marginBottom: 24,
  },
  detailsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 12,
  },
  detailsList: {
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
  insightsSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  insightsTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  insightCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  insightCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  insightIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  insightLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 4,
    textAlign: 'center',
  },
  insightValue: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  insightStatus: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#16a34a',
    textAlign: 'center',
  },
});