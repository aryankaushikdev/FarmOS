import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Bell, User, MapPin, Calendar, Award, TrendingUp, Leaf, Shield, Phone, Mail } from 'lucide-react-native';

export default function ProfileScreen() {
  const stats = [
    { icon: Leaf, label: 'Active Fields', value: '6', color: '#16a34a' },
    { icon: TrendingUp, label: 'Yield Increase', value: '+15%', color: '#3b82f6' },
    { icon: Award, label: 'Certifications', value: '4', color: '#f59e0b' },
    { icon: Shield, label: 'Insurance', value: 'Active', color: '#8b5cf6' },
  ];

  const menuItems = [
    { icon: User, label: 'Personal Information', color: '#3b82f6' },
    { icon: MapPin, label: 'Farm Locations', color: '#16a34a' },
    { icon: Calendar, label: 'Planting Schedule', color: '#f59e0b' },
    { icon: TrendingUp, label: 'Analytics & Reports', color: '#8b5cf6' },
    { icon: Bell, label: 'Notifications', color: '#ef4444' },
    { icon: Settings, label: 'Settings', color: '#6b7280' },
  ];

  const certifications = [
    { name: 'Organic Farming', issuer: 'Soil Association', year: '2023' },
    { name: 'Sustainable Agriculture', issuer: 'LEAF', year: '2022' },
    { name: 'Red Tractor Assured', issuer: 'Red Tractor', year: '2024' },
    { name: 'RSPB Conservation', issuer: 'RSPB', year: '2023' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
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
              </View>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Account Management</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIcon, { backgroundColor: `${item.color}20` }]}>
                  <item.icon size={20} color={item.color} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Leaf size={16} color="#16a34a" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Completed winter wheat planting in heavy clay fields</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <TrendingUp size={16} color="#3b82f6" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Updated yield forecasting for Thames Estuary conditions</Text>
                <Text style={styles.activityTime}>1 day ago</Text>
              </View>
            </View>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Award size={16} color="#f59e0b" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>RSPB Conservation certification achieved</Text>
                <Text style={styles.activityTime}>3 days ago</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
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
    backgroundColor: '#16a34a',
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
  farmOverviewSection: {
    backgroundColor: '#ffffff',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
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
  menuArrow: {
    fontSize: 20,
    color: '#9ca3af',
  },
  activitySection: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  activityList: {
    gap: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#1f2937',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
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
});