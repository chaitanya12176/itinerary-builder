import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const ASSETS = {
  headerBg:
    'https://static.vecteezy.com/system/resources/thumbnails/066/703/825/large/simple-purple-gradient-background-suitable-for-presentations-social-media-posts-website-headers-and-graphic-design-projects-versatile-and-eyecatching-video.jpg',
  logo:
    'https://media.licdn.com/dms/image/v2/D560BAQESvNvMpxHaBQ/company-logo_200_200/B56ZfkfaWvHEAI-/0/1751885129914/vigovia_logo?e=2147483647&v=beta&t=2l1TUMEWFP88KMUQ4jeynmUWlQ9_iTvDhxoAbQ5XqdQ',
  timeline: 'https://static.thenounproject.com/png/3339023-200.png',
  taxi:
    'https://www.svgrepo.com/show/105580/frontal-taxi-cab.svg',
  dayPics: [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0a/92/56/sands-skypark.jpg?w=900&h=500&s=1',
    'https://upload.wikimedia.org/wikipedia/commons/5/5d/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/50/Double-Helix-Bridge.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/73/ab/43/caption.jpg?w=900&h=500&s=1',
  ],
  footerStamp:
    'https://cdn11.bigcommerce.com/s-3emlyccep3/images/stencil/500x659/products/994243/1479173/rs-138990-p-footer-rubber-stamp-no-4__46248.1684648431.jpg?c=1',
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 34,
    paddingTop: 18,
    paddingBottom: 24,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    fontSize: 12,
    color: '#111',
  },
  headerWrap: { marginBottom: 20, position: 'relative', alignItems: 'center', width: '100%' },
  headerBg: { position: 'absolute', top: 0, left: 0, width: '100%', height: 150, borderRadius: 12, objectFit: 'cover' },
  headerBox: {
    width: '100%',
    borderRadius: 12,
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(123, 58, 232, 0.7)',
  },
  logo: { width: 180, height: 50, marginBottom: 10, objectFit: 'contain' },
  headerTitle: { fontSize: 20, color: '#fff', fontWeight: '700', textAlign: 'center', textTransform: 'uppercase' },
  headerDestination: { fontSize: 16, color: '#fff', fontWeight: '600', marginTop: 5, textAlign: 'center' },
  headerDuration: { fontSize: 11, color: '#fff', opacity: 0.9, marginTop: 5 },
  infoPillWrap: { marginTop: 15, width: '100%', alignItems: 'center' },
  infoPill: {
    width: '90%',
    borderRadius: 10,
    border: '1 solid #7b3ae8',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  infoCell: { flex: 1, textAlign: 'center', fontSize: 10, color: '#333' },
  dayContainer: { marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', width: '100%' },
  dayTabWrap: { width: 45, alignItems: 'center', marginRight: 15 },
  dayTab: {
    width: 45,
    backgroundColor: '#3b1e70',
    borderRadius: 25,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTabText: { color: '#fff', fontSize: 10, transform: 'rotate(-90deg)' },
  dayLeft: { width: 140, alignItems: 'center' },
  dayImage: { width: 100, height: 100, borderRadius: 50, objectFit: 'cover' },
  dayDate: { fontSize: 11.5, marginTop: 10, fontWeight: '700', color: '#111' },
  daySmall: { fontSize: 10, color: '#666', marginTop: 5 },
  timelineCol: { width: 35, alignItems: 'center', paddingTop: 8 },
  timelineImg: { width: 12, height: 80, objectFit: 'contain' },
  dayRight: { flex: 1, paddingLeft: 12 },
  activityRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 },
  activityLabel: { width: 75, fontWeight: '700', color: '#7c3aed', fontSize: 11 },
  activityText: { flex: 1, fontSize: 11, color: '#333' },
  smallIconDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#7c3aed', marginRight: 8 },
  inclinedDotContainer: { marginTop: 2 },
  hr: { height: 1, backgroundColor: '#e9e8f0', width: '100%', marginTop: 15, marginBottom: 15 },
  sectionTitle: { marginTop: 8, fontSize: 13, fontWeight: '700', color: '#3b1e70' },
  sectionBox: { marginTop: 8, paddingTop: 10, borderTop: '1 solid #eee' },
  visaDetailBox: {
    marginTop: 8,
    border: '1 solid #e8dafb',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  visaDetailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  visaLabel: {
    width: '40%',
    fontWeight: '700',
    color: '#3b1e70',
    fontSize: 10,
  },
  visaValue: {
    flex: 1,
    fontSize: 10,
    color: '#333',
  },
  paymentDetailBox: {
    marginTop: 8,
    border: '1 solid #e8dafb',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentColumn: {
    flex: 1,
  },
  paymentDetailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  paymentLabel: {
    width: '50%',
    fontWeight: '700',
    color: '#3b1e70',
    fontSize: 10,
  },
  paymentValue: {
    flex: 1,
    fontSize: 10,
    color: '#333',
  },
  installmentRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  installmentLabel: {
    width: '50%',
    fontWeight: '600',
    color: '#3b1e70',
    fontSize: 10,
  },
  installmentValue: {
    flex: 1,
    fontSize: 10,
    color: '#333',
  },
  flightRow: {
    marginTop: 10,
    borderRadius: 16,
    border: '1 solid #e8dafb',
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flightDate: {
    width: 95,
    fontSize: 10,
    color: '#3b1e70',
    fontWeight: '700',
  },
  flightDesc: { flex: 1, fontSize: 11 },
  table: { width: '100%', marginTop: 10, borderRadius: 10, border: '1 solid #f0e6ff', overflow: 'hidden' },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f7effb',
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontWeight: '700',
    fontSize: 11,
  },
  tableRow: { flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 8, borderTop: '1 solid #f1edf8', fontSize: 10 },
  tableCell: { flex: 1 },
  paymentTable: { width: '100%', marginTop: 10, borderRadius: 10, border: '1 solid #f0e6ff', padding: 10, backgroundColor: '#fff8ff' },
  footerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 12,
    marginTop: 24,
  },
  footerInfo: {
    flex: 1,
    marginRight: 16,
  },
  footerTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 4,
  },
  footerText: {
    fontSize: 10,
    lineHeight: 1.3,
  },
  footerContact: {
    flex: 1,
    marginRight: 16,
  },
  footerBold: {
    fontWeight: 'bold',
  },
  footerLogoBox: {
    alignItems: 'center',
    flex: 1,
  },
  footerLogo: {
    width: 85,
    height: 22,
    marginBottom: 3,
  },
  footerSlogan: {
    fontSize: 9,
    color: '#555',
    marginTop: 2,
  },
  linkText: {
    color: '#1e90ff',
    textDecoration: 'underline',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 8,
  },
});

const safeSplit = (text) => (typeof text === 'string' && text.length ? text.split('\n') : []);

const formatDate = (d) => {
  if (!d) return 'Not Specified';
  const iso = d.includes('/') ? d.split('/').reverse().join('-') : d;
  try {
    const dt = new Date(iso);
    if (!isNaN(dt)) return dt.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
  } catch (e) {}
  return d;
};

const Footer = () => (
  <View style={styles.footerWrap}>
    <View style={styles.footerInfo}>
      <Text style={styles.footerTitle}>Vigovia Tech Pvt. Ltd</Text>
      <Text style={styles.footerText}>
        Registered Office: Hd-109 Cinnabar Hills, {'\n'}
        Links Business Park, Karnataka, India.
      </Text>
    </View>
    <View style={styles.footerContact}>
      <Text style={styles.footerText}>
        <Text style={styles.footerBold}>Phone:</Text> +91-9504061112{' '}
        <Text style={styles.footerBold}>Email ID:</Text> utkarsh@vigovia.com{' '}
        <Text style={styles.footerBold}>CIN:</Text> U79110KA2024PTC191890
      </Text>
    </View>
    <View style={styles.footerLogoBox}>
       <Image
                src="/figmaAssets/frame-206-1.png" // Ensure local assets
                
              />




    </View>
  </View>
);

const ItineraryPDF = ({ itinerary = {} }) => {
  const {
    tourOverview = {},
    dailyActivities = [],
    flightSummary = [],
    hotels = [],
    importantNotes = [],
    scopeOfService = [],
    inclusionSummary = [],
    activityTable = [],
    paymentPlan = { totalAmount: '456789', tcs: 'xcvbnm', installments: [] },
    visaDetails = {},
    termsAndConditions = '',
    inclusions = '',
    exclusions = '',
  } = itinerary;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerWrap}>
          <Image src={ASSETS.headerBg} style={styles.headerBg} />
          <View style={styles.headerBox}>
            <Image src={ASSETS.logo} style={styles.logo} />
            <Text style={styles.headerTitle}>Hi, {tourOverview.clientName || 'Traveler'}!</Text>
            <Text style={styles.headerDestination}>{tourOverview.destination || 'Your Destination'} Itinerary</Text>
            <Text style={styles.headerDuration}>{tourOverview.duration || 'Duration: 5 Days'} | {tourOverview.departFrom || 'Departure City'}</Text>

            {/* Corrected PLAN PACK GO with airplane icon */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              
            </View>
            {/* Icons at the bottom */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
              <Image
                src="/figmaAssets/airplane-take-off.png" // Ensure local assets
                style={{ width: 12, height: 12, marginHorizontal: 4 }}
              />
              <Image
                src="/figmaAssets/bed.png"
                style={{ width: 12, height: 12, marginHorizontal: 4 }}
              />
              <Image
                src="/figmaAssets/clock.png"
                style={{ width: 12, height: 12, marginHorizontal: 4 }}
              />
              <Image
                src="/figmaAssets/car.png"
                style={{ width: 12, height: 12, marginHorizontal: 4 }}
              />
            </View>
          </View>
          <View style={styles.infoPillWrap}>
            <View style={styles.infoPill}>
              <Text style={styles.infoCell}>
                Departure From: {tourOverview.departFrom || 'Not Specified'}
              </Text>
              <Text style={styles.infoCell}>
                Departure: {formatDate(tourOverview.departureDate)}
              </Text>
              <Text style={styles.infoCell}>
                Arrival: {formatDate(tourOverview.arrivalDate)}
              </Text>
              <Text style={styles.infoCell}>
                Destination: {tourOverview.destination || 'Not Specified'}
              </Text>
              <Text style={styles.infoCell}>
                Travelers: {tourOverview.numTravelers || 'Not Specified'}
              </Text>
            </View>
          </View>
        </View>
        {dailyActivities.map((day, idx) => (
          <View key={idx}>
            <View style={styles.dayContainer}>
              <View style={styles.dayTabWrap}>
                <View style={styles.dayTab}>
                  <Text style={styles.dayTabText}>Day {idx + 1}</Text>
                </View>
              </View>
              <View style={styles.dayLeft}>
                <Image src={ASSETS.dayPics[idx % ASSETS.dayPics.length]} style={styles.dayImage} />
                <Text style={styles.dayDate}>{formatDate(day.date) || 'Not Specified'}</Text>
                <Text style={styles.daySmall}>{day.title || 'Not Specified'}</Text>
              </View>
              <View style={styles.timelineCol}>
                <Image src={ASSETS.timeline} style={styles.timelineImg} />
              </View>
              <View style={styles.dayRight}>
                <View style={[styles.activityRow, styles.inclinedDotContainer]}>
                  <View style={styles.smallIconDot} />
                  <Text style={styles.activityLabel}>Morning:</Text>
                  <Text style={styles.activityText}>{day.morning || 'Not Specified'}</Text>
                </View>
                <View style={[styles.activityRow, { ...styles.inclinedDotContainer, marginTop: 8 }]}>
                  <View style={styles.smallIconDot} />
                  <Text style={styles.activityLabel}>Afternoon:</Text>
                  <Text style={styles.activityText}>{day.afternoon || 'Not Specified'}</Text>
                </View>
                <View style={[styles.activityRow, { ...styles.inclinedDotContainer, marginTop: 16 }]}>
                  <View style={styles.smallIconDot} />
                  <Text style={styles.activityLabel}>Evening:</Text>
                  <Text style={styles.activityText}>{day.evening || 'Not Specified'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.hr} />
          </View>
        ))}
        <Text style={styles.sectionTitle}>Flight Summary</Text>
        <View style={styles.sectionBox}>
          {flightSummary.map((f, i) => (
            <View key={i} style={styles.flightRow}>
              <Text style={styles.flightDate}>{formatDate(f.date) || 'Not Specified'}</Text>
              <Text style={styles.flightDesc}>{f.description || 'Not Specified'}</Text>
            </View>
          ))}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Hotel Bookings</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>City</Text>
            <Text style={styles.tableCell}>Check In</Text>
            <Text style={styles.tableCell}>Check Out</Text>
            <Text style={styles.tableCell}>Nights</Text>
            <Text style={styles.tableCell}>Hotel Name</Text>
          </View>
          {hotels.map((h, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{h.city || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{formatDate(h.checkIn) || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{formatDate(h.checkOut) || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{h.nights || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{h.name || 'Not Specified'}</Text>
            </View>
          ))}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Important Notes</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Point</Text>
            <Text style={styles.tableCell}>Details</Text>
          </View>
          {importantNotes.map((n, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{n.point || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{n.details || 'Not Specified'}</Text>
            </View>
          ))}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Scope of Service</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Service</Text>
            <Text style={styles.tableCell}>Details</Text>
          </View>
          {scopeOfService.map((s, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{s.service || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{s.details || 'Not Specified'}</Text>
            </View>
          ))}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Inclusion Summary</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Category</Text>
            <Text style={styles.tableCell}>Count</Text>
            <Text style={styles.tableCell}>Details</Text>
            <Text style={styles.tableCell}>Status</Text>
          </View>
          {inclusionSummary.map((inc, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{inc.category || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{inc.count || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{inc.details || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{inc.status || 'Not Specified'}</Text>
            </View>
          ))}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Activity Table</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>City</Text>
            <Text style={styles.tableCell}>Activity</Text>
            <Text style={styles.tableCell}>Type</Text>
            <Text style={styles.tableCell}>Time Required</Text>
          </View>
          {activityTable.map((a, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{a.city || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{a.activity || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{a.type || 'Not Specified'}</Text>
              <Text style={styles.tableCell}>{a.timeRequired || 'Not Specified'}</Text>
            </View>
          ))}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Visa Details</Text>
        <View style={styles.visaDetailBox}>
          <View style={styles.visaDetailRow}>
            <Text style={styles.visaLabel}>Visa Type:</Text>
            <Text style={styles.visaValue}>{visaDetails.type || 'Not Specified'}</Text>
          </View>
          <View style={styles.visaDetailRow}>
            <Text style={styles.visaLabel}>Processing Date:</Text>
            <Text style={styles.visaValue}>{formatDate(visaDetails.processingDate) || 'Not Specified'}</Text>
          </View>
          <View style={styles.visaDetailRow}>
            <Text style={styles.visaLabel}>Validity:</Text>
            <Text style={styles.visaValue}>{formatDate(visaDetails.validity) || 'Not Specified'}</Text>
          </View>
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Payment Plan</Text>
        <View style={styles.paymentDetailBox}>
          <View style={styles.paymentRow}>
            <View style={styles.paymentColumn}>
              <View style={styles.paymentDetailRow}>
                <Text style={styles.paymentLabel}>Total Amount:</Text>
                <Text style={styles.paymentValue}>{paymentPlan.totalAmount || 'Not Specified'}</Text>
              </View>
              <View style={styles.paymentDetailRow}>
                <Text style={styles.paymentLabel}>TCS:</Text>
                <Text style={styles.paymentValue}>{paymentPlan.tcs || 'Not Specified'}</Text>
              </View>
            </View>
            <View style={styles.paymentColumn}>
              {/* This column remains empty as no installments are provided */}
            </View>
          </View>
          {paymentPlan.installments.length > 0 && (
            <View style={styles.paymentRow}>
              <View style={styles.paymentColumn}>
                {/* Empty column to maintain symmetry */}
              </View>
              <View style={styles.paymentColumn}>
                {paymentPlan.installments.map((installment, i) => (
                  <View key={i} style={styles.installmentRow}>
                    <Text style={styles.installmentLabel}>Installment {i + 1}:</Text>
                    <Text style={styles.installmentValue}>
                      {installment.amount || 'Not Specified'} (Due: {formatDate(installment.dueDate) || 'Not Specified'})
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
        <View style={styles.hr} />
        <Text style={styles.sectionTitle}>Terms & Conditions</Text>
        <Text style={styles.linkText}>View all terms and conditions</Text>
        <Text style={{ fontSize: 10, marginTop: 6 }}>{termsAndConditions || ''}</Text>
        {inclusions && (
          <>
            <Text style={styles.sectionTitle}>Inclusions</Text>
            <View style={styles.sectionBox}>
              {safeSplit(inclusions).map((l, i) => (
                <Text key={i} style={{ fontSize: 10, marginTop: 6 }}>• {l || 'Not Specified'}</Text>
              ))}
            </View>
          </>
        )}
        {exclusions && (
          <>
            <Text style={styles.sectionTitle}>Exclusions</Text>
            <View style={styles.sectionBox}>
              {safeSplit(exclusions).map((l, i) => (
                <Text key={i} style={{ fontSize: 10, marginTop: 6 }}>• {l || 'Not Specified'}</Text>
              ))}
            </View>
          </>
        )}
        <Footer />
      </Page>
    </Document>
  );
};

export default ItineraryPDF;