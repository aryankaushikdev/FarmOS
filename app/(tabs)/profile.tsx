import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, Bell, User, MapPin, Calendar, Award, TrendingUp, Leaf, Shield, Phone, Mail, Plus, FileText, CreditCard, Building2, X, Save, CreditCard as Edit3, ChevronRight, CircleAlert as AlertCircle, CircleCheck as CheckCircle, Clock } from 'lucide-react-native';

export default function ProfileScreen() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    // Insurance Claim Data
    claimType: '',
    cropAffected: '',
    damageDate: '',
    damageDescription: '',
    estimatedLoss: '',
    
    // Bank Loan Data
    loanAmount: '',
    loanPurpose: '',
    repaymentPeriod: '',
    collateralType: '',
    
    // Profile Data
    farmSize: '142',
    soilType: 'Heavy Clay',
    waterSource: 'Rainfed 70%, Irrigated 30%',
    organicCertified: 'Yes',
    carbonCredits: '45.2',
  });

  const stats = [
    { icon: Leaf, label: 'Active Fields', value: '6', color: '#16a34a' },
    { icon: TrendingUp, label: 'Yield Increase', value: '+15%', color: '#3b82f6' },
    { icon: Award, label: 'Certifications', value: '4', color: '#f59e0b' },
    { icon: Shield, label: 'Insurance', value: 'Active', color: '#8b5cf6' },
  ];

  const menuItems = [
    { icon: User, label: 'Personal Information', color: '#3b82f6', action: () => setActiveModal('profile') },
    { icon: MapPin, label: 'Farm Locations', color: '#16a34a', action: () => setActiveModal('farm') },
    { icon: Calendar, label: 'Planting Schedule', color: '#f59e0b', action: () => setActiveModal('schedule') },
    { icon: TrendingUp, label: 'Analytics & Reports', color: '#8b5cf6', action: () => setActiveModal('analytics') },
    { icon: Bell, label: 'Notifications', color: '#ef4444', action: () => {} },
    { icon: Settings, label: 'Settings', color: '#6b7280', action: () => {} },
  ];

  const certifications = [
    { name: 'Organic Farming', issuer: 'Soil Association', year: '2023', status: 'Active' },
    { name: 'Sustainable Agriculture', issuer: 'LEAF', year: '2022', status: 'Active' },
    { name: 'Red Tractor Assured', issuer: 'Red Tractor', year: '2024', status: 'Active' },
    { name: 'RSPB Conservation', issuer: 'RSPB', year: '2023', status: 'Active' },
  ];

  const recentClaims = [
    { id: 1, type: 'Crop Insurance', status: 'Approved', amount: '£12,500', date: '2024-11-15' },
    { id: 2, type: 'Equipment Insurance', status: 'Processing', amount: '£3,200', date: '2024-12-01' },
  ];

  const activeLoans = [
    { id: 1, type: 'Equipment Loan', amount: '£45,000', remaining: '£32,000', rate: '4.5%', nextPayment: '2025-01-15' },
    { id: 2, type: 'Working Capital', amount: '£15,000', remaining: '£8,500', rate: '3.8%', nextPayment: '2025-01-10' },
  ];

  const handleSubmitClaim = () => {
    if (!formData.claimType || !formData.cropAffected || !formData.damageDate) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    Alert.alert('Success', 'Insurance claim submitted successfully. You will receive a confirmation email shortly.');
    setActiveModal(null);
    setFormData({ ...formData, claimType: '', cropAffected: '', damageDate: '', damageDescription: '', estimatedLoss: '' });
  };

  const handleSubmitLoan = () => {
    if (!formData.loanAmount || !formData.loanPurpose || !formData.repaymentPeriod) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    Alert.alert('Success', 'Loan application submitted successfully. A loan officer will contact you within 2 business days.');
    setActiveModal(null);
    setFormData({ ...formData, loanAmount: '', loanPurpose: '', repaymentPeriod: '', collateralType: '' });
  };

  const renderModal = () => {
    if (!activeModal) return null;

    const modalContent = () => {
      switch (activeModal) {
        case 'insurance':
          return (
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Submit Insurance Claim</Text>
                <TouchableOpacity onPress={() => setActiveModal(null)}>
                  <X size={24} color="#6b7280" />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalBody}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Claim Type *</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.claimType}
                    onChangeText={(text) => setFormData({ ...formData, claimType: text })}
                    placeholder="e.g., Crop Loss, Weather Damage, Pest Damage"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Crop Affected *</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.cropAffected}
                    onChangeText={(text) => setFormData({ ...formData, cropAffected: text })}
                    placeholder="e.g., Winter Wheat, Barley"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Date of Damage *</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.damageDate}
                    onChangeText={(text) => setFormData({ ...formData, damageDate: text })}
                    placeholder="DD/MM/YYYY"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Damage Description</Text>
                  <TextInput
                    style={[styles.formInput, styles.textArea]}
                    value={formData.damageDescription}
                    onChangeText={(text) => setFormData({ ...formData, damageDescription: text })}
                    placeholder="Describe the damage in detail..."
                    multiline
                    numberOfLines={4}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Estimated Loss (£)</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.estimatedLoss}
                    onChangeText={(text) => setFormData({ ...formData, estimatedLoss: text })}
                    placeholder="0.00"
                    keyboardType="numeric"
                  />
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmitClaim}>
                  <Text style={styles.submitButtonText}>Submit Claim</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );

        case 'loan':
          return (
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Apply for Bank Loan</Text>
                <TouchableOpacity onPress={() => setActiveModal(null)}>
                  <X size={24} color="#6b7280" />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalBody}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Loan Amount (£) *</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.loanAmount}
                    onChangeText={(text) => setFormData({ ...formData, loanAmount: text })}
                    placeholder="0.00"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Loan Purpose *</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.loanPurpose}
                    onChangeText={(text) => setFormData({ ...formData, loanPurpose: text })}
                    placeholder="e.g., Equipment Purchase, Working Capital, Land Expansion"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Repayment Period (months) *</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.repaymentPeriod}
                    onChangeText={(text) => setFormData({ ...formData, repaymentPeriod: text })}
                    placeholder="e.g., 12, 24, 36"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Collateral Type</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.collateralType}
                    onChangeText={(text) => setFormData({ ...formData, collateralType: text })}
                    placeholder="e.g., Land Title, Equipment, Warehouse Receipts"
                  />
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmitLoan}>
                  <Text style={styles.submitButtonText}>Submit Application</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );

        case 'profile':
          return (
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Update Farm Profile</Text>
                <TouchableOpacity onPress={() => setActiveModal(null)}>
                  <X size={24} color="#6b7280" />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalBody}>
                <Text style={styles.sectionHeader}>Farm Details</Text>
                
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Total Farm Size (hectares)</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.farmSize}
                    onChangeText={(text) => setFormData({ ...formData, farmSize: text })}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Soil Type</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.soilType}
                    onChangeText={(text) => setFormData({ ...formData, soilType: text })}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Water Sources</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.waterSource}
                    onChangeText={(text) => setFormData({ ...formData, waterSource: text })}
                  />
                </View>

                <Text style={styles.sectionHeader}>Certifications & Credits</Text>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Organic Certified</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.organicCertified}
                    onChangeText={(text) => setFormData({ ...formData, organicCertified: text })}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Carbon Credits (tonnes CO₂)</Text>
                  <TextInput
                    style={styles.formInput}
                    value={formData.carbonCredits}
                    onChangeText={(text) => setFormData({ ...formData, carbonCredits: text })}
                    keyboardType="numeric"
                  />
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={() => {
                  Alert.alert('Success', 'Profile updated successfully');
                  setActiveModal(null);
                }}>
                  <Save size={20} color="#ffffff" />
                  <Text style={styles.submitButtonText}>Save Changes</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );

        default:
          return null;
      }
    };

    return (
      <Modal
        visible={!!activeModal}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={styles.modalContainer}>
          {modalContent()}
        </SafeAreaView>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#16a34a', '#15803d', '#166534']}
          style={styles.header}
        >
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop' }}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.profileName}>William Harrison</Text>
            <Text style={styles.profileTitle}>Farm Owner & Manager</Text>
            <View style={styles.locationContainer}>
              <MapPin size={16} color="#d1fae5" />
              <Text style={styles.locationText}>Gravesend, Kent</Text>
            </View>
            <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <Phone size={14} color="#d1fae5" />
                <Text style={styles.contactText}>+44 1474 567890</Text>
              </View>
              <View style={styles.contactItem}>
                <Mail size={14} color="#d1fae5" />
                <Text style={styles.contactText}>w.harrison@gravesendfarming.co.uk</Text>
              </View>
            </View>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: stat.color }]}>
                  <stat.icon size={20} color="#ffffff" />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity 
              style={[styles.quickActionCard, { backgroundColor: '#ef4444' }]}
              onPress={() => setActiveModal('insurance')}
            >
              <Shield size={24} color="#ffffff" />
              <Text style={styles.quickActionText}>Insurance Claim</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionCard, { backgroundColor: '#3b82f6' }]}
              onPress={() => setActiveModal('loan')}
            >
              <Building2 size={24} color="#ffffff" />
              <Text style={styles.quickActionText}>Bank Loan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionCard, { backgroundColor: '#16a34a' }]}
              onPress={() => setActiveModal('profile')}
            >
              <Edit3 size={24} color="#ffffff" />
              <Text style={styles.quickActionText}>Update Data</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Farm Overview */}
        <View style={styles.farmOverviewSection}>
          <Text style={styles.sectionTitle}>Farm Overview</Text>
          <View style={styles.farmOverviewCard}>
            <View style={styles.farmStat}>
              <Text style={styles.farmStatNumber}>142</Text>
              <Text style={styles.farmStatLabel}>Total Hectares</Text>
            </View>
            <View style={styles.farmStat}>
              <Text style={styles.farmStatNumber}>£1.8M</Text>
              <Text style={styles.farmStatLabel}>Annual Revenue</Text>
            </View>
            <View style={styles.farmStat}>
              <Text style={styles.farmStatNumber}>1978</Text>
              <Text style={styles.farmStatLabel}>Est. Year</Text>
            </View>
          </View>
        </View>

        {/* Recent Claims */}
        <View style={styles.claimsSection}>
          <Text style={styles.sectionTitle}>Recent Insurance Claims</Text>
          <View style={styles.claimsList}>
            {recentClaims.map((claim) => (
              <View key={claim.id} style={styles.claimItem}>
                <View style={styles.claimIcon}>
                  {claim.status === 'Approved' ? (
                    <CheckCircle size={20} color="#16a34a" />
                  ) : (
                    <Clock size={20} color="#f59e0b" />
                  )}
                </View>
                <View style={styles.claimContent}>
                  <Text style={styles.claimType}>{claim.type}</Text>
                  <Text style={styles.claimDetails}>{claim.amount} • {claim.date}</Text>
                </View>
                <View style={[styles.claimStatus, { 
                  backgroundColor: claim.status === 'Approved' ? '#dcfce7' : '#fef3c7' 
                }]}>
                  <Text style={[styles.claimStatusText, {
                    color: claim.status === 'Approved' ? '#16a34a' : '#f59e0b'
                  }]}>{claim.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Active Loans */}
        <View style={styles.loansSection}>
          <Text style={styles.sectionTitle}>Active Loans</Text>
          <View style={styles.loansList}>
            {activeLoans.map((loan) => (
              <View key={loan.id} style={styles.loanItem}>
                <View style={styles.loanHeader}>
                  <Text style={styles.loanType}>{loan.type}</Text>
                  <Text style={styles.loanRate}>{loan.rate} APR</Text>
                </View>
                <View style={styles.loanDetails}>
                  <View style={styles.loanStat}>
                    <Text style={styles.loanStatLabel}>Original</Text>
                    <Text style={styles.loanStatValue}>{loan.amount}</Text>
                  </View>
                  <View style={styles.loanStat}>
                    <Text style={styles.loanStatLabel}>Remaining</Text>
                    <Text style={styles.loanStatValue}>{loan.remaining}</Text>
                  </View>
                  <View style={styles.loanStat}>
                    <Text style={styles.loanStatLabel}>Next Payment</Text>
                    <Text style={styles.loanStatValue}>{loan.nextPayment}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.certificationsSection}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.certificationsList}>
            {certifications.map((cert, index) => (
              <View key={index} style={styles.certificationItem}>
                <View style={styles.certificationIcon}>
                  <Award size={20} color="#f59e0b" />
                </View>
                <View style={styles.certificationContent}>
                  <Text style={styles.certificationName}>{cert.name}</Text>
                  <Text style={styles.certificationDetails}>{cert.issuer} • {cert.year}</Text>
                </View>
                <View style={styles.certificationStatus}>
                  <Text style={styles.certificationStatusText}>{cert.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Account Management</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={item.action}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIcon, { backgroundColor: `${item.color}20` }]}>
                  <item.icon size={20} color={item.color} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <ChevronRight size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {renderModal()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#ffffff',
    marginBottom: 16,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  profileTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#d1fae5',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#d1fae5',
    marginLeft: 4,
  },
  contactInfo: {
    alignItems: 'center',
    gap: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#d1fae5',
    marginLeft: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#d1fae5',
    textAlign: 'center',
  },
  quickActionsSection: {
    backgroundColor: '#ffffff',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickActionCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginTop: 8,
    textAlign: 'center',
  },
  farmOverviewSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 16,
  },
  farmOverviewCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 20,
  },
  farmStat: {
    alignItems: 'center',
  },
  farmStatNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#16a34a',
    marginBottom: 4,
  },
  farmStatLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
  },
  claimsSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  claimsList: {
    gap: 12,
  },
  claimItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
  },
  claimIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  claimContent: {
    flex: 1,
  },
  claimType: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 2,
  },
  claimDetails: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  claimStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  claimStatusText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  loansSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  loansList: {
    gap: 16,
  },
  loanItem: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  loanType: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  loanRate: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#16a34a',
  },
  loanDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loanStat: {
    alignItems: 'center',
  },
  loanStatLabel: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 2,
  },
  loanStatValue: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  certificationsSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  certificationsList: {
    gap: 12,
  },
  certificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 12,
  },
  certificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  certificationContent: {
    flex: 1,
  },
  certificationName: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 2,
  },
  certificationDetails: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  certificationStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#dcfce7',
    borderRadius: 8,
  },
  certificationStatusText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#16a34a',
  },
  menuSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#1f2937',
  },
  logoutButton: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ef4444',
  },
  
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
  },
  modalBody: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 16,
    marginTop: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
    marginBottom: 8,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16a34a',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
    gap: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
  },
});