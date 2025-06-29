import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bell, Sun, Thermometer, Droplets, Plus, TrendingUp, Calendar, ChartBar as BarChart3 } from 'lucide-react-native';

export default function StatisticsScreen() {
  const notes = [
    {
      id: 1,
      date: 'Jun 15',
      time: '2:30pm',
      title: 'Spring barley showing excellent grain fill, harvest expected in 10-14 days',
      image: 'https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
      category: 'Harvest'
    },
    {
      id: 2,
      date: 'Jun 14',
      time: '4:15pm',
      title: 'Sugar beet crop looking healthy, applied aphid monitoring traps in warm weather',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
      category: 'Pest Control'
    },
    {
      id: 3,
      date: 'Jun 13',
      time: '11:45am',
      title: 'Potato earthing up completed, blight protection spray applied before forecast rain',
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
      category: 'Cultivation'
    },
    {
      id: 4,
      date: 'Jun 12',
      time: '9:20am',
      title: 'Soil moisture levels good after recent showers, ideal for summer crop development',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
      category: 'Soil'
    },
  ];

  const weeklyPredictions = [
    { day: 'Mon', temp: '24°C', rain: '0mm', condition: 'Sunny', icon: '☀️' },
    { day: 'Tue', temp: '26°C', rain: '0mm', condition: 'Clear', icon: '☀️' },
    { day: 'Wed', temp: '23°C', rain: '5mm', condition: 'Light Showers', icon: '🌦️' },
    { day: 'Thu', temp: '21°C', rain: '12mm', condition: 'Showers', icon: '🌧️' },
    { day: 'Fri', temp: '22°C', rain: '2mm', condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Sat', temp: '25°C', rain: '0mm', condition: 'Sunny', icon: '☀️' },
    { day: 'Sun', temp: '27°C', rain: '0mm', condition: 'Hot', icon: '🌞' },
  ];

  const yieldPredictions = [
    { crop: 'Spring Barley', current: '5.8 t/ha', predicted: '6.4 t/ha', change: '+10%', color: '#16a34a' },
    { crop: 'Sugar Beet', current: '68 t/ha', predicted: '75 t/ha', change: '+10%', color: '#3b82f6' },
    { crop: 'Potatoes', current: '42 t/ha', predicted: '48 t/ha', change: '+14%', color: '#f59e0b' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Farm Analytics</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#1f2937" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Current Weather Card */}
        <View style={styles.weatherCard}>
          <View style={styles.weatherGradient}>
            <View style={styles.weatherHeader}>
              <View>
                <Text style={styles.locationText}>Gravesend, Kent - 15 Jun 2024</Text>
                <Text style={styles.temperature}>22°C</Text>
                <Text style={styles.humidity}>Humidity 62%</Text>
              </View>
              <View style={styles.weatherIconContainer}>
                <Sun size={60} color="#ffffff" />
                <Text style={styles.weatherCondition}>Sunny</Text>
              </View>
            </View>
            <Text style={styles.weatherAdvice}>
              🌾 Perfect harvest conditions for spring barley. Dry weather ideal for combining. Monitor sugar beet for aphid activity in warm temperatures.
            </Text>
          </View>
        </View>

        {/* Weekly Weather Predictions */}
        <View style={styles.predictionsSection}>
          <Text style={styles.sectionTitle}>7-Day Weather Forecast</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.predictionsScroll}>
            {weeklyPredictions.map((day, index) => (
              <View key={index} style={styles.predictionCard}>
                <Text style={styles.predictionDay}>{day.day}</Text>
                <Text style={styles.predictionIcon}>{day.icon}</Text>
                <Text style={styles.predictionTemp}>{day.temp}</Text>
                <Text style={styles.predictionRain}>💧 {day.rain}</Text>
                <Text style={styles.predictionCondition}>{day.condition}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* June-July Outlook */}
        <View style={styles.outlookSection}>
          <Text style={styles.sectionTitle}>June-July Growing Outlook</Text>
          <View style={styles.outlookCard}>
            <View style={styles.outlookHeader}>
              <Text style={styles.outlookTitle}>Summer Growing Season</Text>
              <Text style={styles.outlookSubtitle}>Excellent conditions for crop development</Text>
            </View>
            
            <View style={styles.outlookStats}>
              <View style={styles.outlookStat}>
                <Thermometer size={20} color="#f59e0b" />
                <Text style={styles.outlookStatLabel}>Temperature Range</Text>
                <Text style={styles.outlookStatValue}>18-26°C</Text>
              </View>
              <View style={styles.outlookStat}>
                <Droplets size={20} color="#3b82f6" />
                <Text style={styles.outlookStatLabel}>Rainfall Expected</Text>
                <Text style={styles.outlookStatValue}>45-60mm</Text>
              </View>
              <View style={styles.outlookStat}>
                <Sun size={20} color="#fbbf24" />
                <Text style={styles.outlookStatLabel}>Sunshine</Text>
                <Text style={styles.outlookStatValue}>8-9 hrs/day</Text>
              </View>
            </View>

            <View style={styles.outlookAdvice}>
              <Text style={styles.outlookAdviceTitle}>Key Activities June-July</Text>
              <Text style={styles.outlookAdviceText}>
                • Spring barley harvest (late June)
                • Sugar beet pest monitoring & cultivation
                • Potato blight prevention & earthing
                • Winter crop planning & soil preparation
              </Text>
            </View>
          </View>
        </View>

        {/* Yield Predictions */}
        <View style={styles.yieldSection}>
          <Text style={styles.sectionTitle}>Summer Yield Predictions for Kent</Text>
          <View style={styles.yieldCards}>
            {yieldPredictions.map((crop, index) => (
              <View key={index} style={styles.yieldCard}>
                <View style={styles.yieldHeader}>
                  <Text style={styles.yieldCrop}>{crop.crop}</Text>
                  <View style={[styles.yieldBadge, { backgroundColor: crop.color }]}>
                    <Text style={styles.yieldChange}>{crop.change}</Text>
                  </View>
                </View>
                <View style={styles.yieldStats}>
                  <View style={styles.yieldStat}>
                    <Text style={styles.yieldLabel}>Current</Text>
                    <Text style={styles.yieldValue}>{crop.current}</Text>
                  </View>
                  <TrendingUp size={20} color={crop.color} />
                  <View style={styles.yieldStat}>
                    <Text style={styles.yieldLabel}>Predicted</Text>
                    <Text style={[styles.yieldValue, { color: crop.color }]}>{crop.predicted}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Farm Notes Section */}
        <View style={styles.notesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Farm Notes</Text>
            <TouchableOpacity>
              <BarChart3 size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Notes List */}
          <View style={styles.notesList}>
            {notes.map((note) => (
              <View key={note.id} style={styles.noteItem}>
                <View style={styles.noteImageContainer}>
                  <Image source={{ uri: note.image }} style={styles.noteImage} />
                  <View style={styles.noteCategoryBadge}>
                    <Text style={styles.noteCategoryText}>{note.category}</Text>
                  </View>
                </View>
                <View style={styles.noteContent}>
                  <View style={styles.noteHeader}>
                    <Text style={styles.noteDate}>{note.date} • {note.time}</Text>
                    <Calendar size={12} color="#6b7280" />
                  </View>
                  <Text style={styles.noteTitle}>{note.title}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Add New Note Button */}
          <TouchableOpacity style={styles.addNoteButton}>
            <View style={styles.addNoteGradient}>
              <Plus size={20} color="#ffffff" />
              <Text style={styles.addNoteText}>Add Farm Observation</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.quickStatsSection}>
          <Text style={styles.sectionTitle}>Quick Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>142</Text>
              <Text style={styles.statLabel}>Hectares Managed</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>£3,240</Text>
              <Text style={styles.statLabel}>Weekly Revenue</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>94%</Text>
              <Text style={styles.statLabel}>Crop Health Score</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Days to Harvest</Text>
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
  weatherCard: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  weatherGradient: {
    backgroundColor: '#16a34a',
    padding: 20,
  },
  weatherHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#d1fae5',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  humidity: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#d1fae5',
  },
  weatherIconContainer: {
    alignItems: 'center',
  },
  weatherCondition: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#ffffff',
    marginTop: 8,
  },
  weatherAdvice: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 12,
  },
  predictionsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  predictionsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  predictionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  predictionDay: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6b7280',
    marginBottom: 8,
  },
  predictionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  predictionTemp: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  predictionRain: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#3b82f6',
    marginBottom: 4,
  },
  predictionCondition: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
  },
  outlookSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  outlookCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  outlookHeader: {
    marginBottom: 20,
  },
  outlookTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  outlookSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  outlookStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  outlookStat: {
    alignItems: 'center',
    flex: 1,
  },
  outlookStatLabel: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  outlookStatValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    textAlign: 'center',
  },
  outlookAdvice: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
  },
  outlookAdviceTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 8,
  },
  outlookAdviceText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    lineHeight: 18,
  },
  yieldSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  yieldCards: {
    gap: 12,
  },
  yieldCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  yieldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  yieldCrop: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  yieldBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  yieldChange: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
  },
  yieldStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yieldStat: {
    alignItems: 'center',
  },
  yieldLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 4,
  },
  yieldValue: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
  },
  notesSection: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  notesList: {
    marginBottom: 24,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  noteImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
    position: 'relative',
  },
  noteImage: {
    width: '100%',
    height: '100%',
  },
  noteCategoryBadge: {
    position: 'absolute',
    bottom: 2,
    left: 2,
    backgroundColor: 'rgba(22, 163, 74, 0.9)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  noteCategoryText: {
    fontSize: 8,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
  },
  noteContent: {
    flex: 1,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  noteDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  noteTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#1f2937',
    lineHeight: 20,
  },
  addNoteButton: {
    marginBottom: 32,
  },
  addNoteGradient: {
    backgroundColor: '#16a34a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
  },
  addNoteText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginLeft: 8,
  },
  quickStatsSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#16a34a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
  },
});