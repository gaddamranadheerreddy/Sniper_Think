import axios from 'axios';

// const API_BASE = 'https://sniperthink-backend.onrender.com';
const API_BASE = 'https://sniper-think.onrender.com';
// const API_BASE = 'http://localhost:5000/api'; // change later after deployment

// const API_BASE = '/api';

export const getSlides = () => axios.get(`${API_BASE}/slides`);
export const getFeatures = () => axios.get(`${API_BASE}/features`);
export const getPricing = () => axios.get(`${API_BASE}/pricing`);
export const sendContact = (data) => axios.post(`${API_BASE}/contact`, data);

// export const getSlides = () =>
//   Promise.resolve({
//     data: [
//       {
//         title: "Clarity That Scales",
//         subtitle: "Dashboards that actually drive growth.",
//         cta: "See It Live",
//         image: "https://source.unsplash.com/1600x500/?dashboard,technology"
//       },
//       {
//         title: "Launch with Confidence",
//         subtitle: "Production-grade stability from day one.",
//         cta: "Learn More",
//         image: "https://source.unsplash.com/1600x500/?startup,tech"
//       },
//       {
//         title: "Analytics Made Simple",
//         subtitle: "Visualize. Analyze. Optimize.",
//         cta: "Try Now",
//         image: "https://source.unsplash.com/1600x500/?analytics,data"
//       }
//     ]
//   });

// export const getFeatures = () =>
//   Promise.resolve({
//     data: [
//       {
//         icon: "📊",
//         title: "Live Insights",
//         description: "Your KPIs, updated by the second."
//       },
//       {
//         icon: "⚡",
//         title: "Fast Setup",
//         description: "Get started in minutes, not hours."
//       },
//       {
//         icon: "🔒",
//         title: "Secure by Design",
//         description: "Built with security best practices from the ground up."
//       }
//     ]
//   });

//   export const getPricing = () =>
//   Promise.resolve({
//     data: [
//       {
//         tier: "Starter",
//         price: "₹0",
//         features: ["1 Dashboard", "Basic Alerts"]
//       },
//       {
//         tier: "Pro",
//         price: "₹499/mo",
//         features: ["Unlimited Dashboards", "Advanced Analytics", "Email Support"]
//       },
//       {
//         tier: "Enterprise",
//         price: "₹1499/mo",
//         features: ["Custom Solutions", "Dedicated Manager", "Priority Support"]
//       }
//     ]
//   });
