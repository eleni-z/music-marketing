/* Shared Chart.js defaults so every chart on the site matches the dark theme */
if (window.Chart) {
  Chart.defaults.color = "#a6a6bf";
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.borderColor = "rgba(255,255,255,0.08)";
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.boxWidth = 8;
  Chart.defaults.plugins.legend.labels.padding = 16;
  Chart.defaults.plugins.tooltip.backgroundColor = "#212437";
  Chart.defaults.plugins.tooltip.titleColor = "#f4f3fa";
  Chart.defaults.plugins.tooltip.bodyColor = "#a6a6bf";
  Chart.defaults.plugins.tooltip.borderColor = "rgba(255,255,255,0.12)";
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
}

const PALETTE = {
  accent: "#8b6bff",
  accent2: "#ff4fa3",
  pop: "#ff4fa3",
  country: "#e8a13a",
  rock: "#ff5c4d",
  hiphop: "#7c5cff",
  platform: "#34d1c6",
  muted: "#3a3d55",
};
