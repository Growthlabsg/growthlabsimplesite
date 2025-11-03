#!/bin/bash
# Fix script for GrowthLab development server

echo "🔧 Fixing GrowthLab setup..."

# Kill any existing Next.js processes
pkill -f "next dev" 2>/dev/null
sleep 2

# Unset NODE_ENV to avoid conflicts
unset NODE_ENV

# Clear cache
rm -rf .next
echo "✅ Cleared .next cache"

# Verify PostCSS config
if [ ! -f "postcss.config.js" ]; then
  echo "Creating postcss.config.js..."
  cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF
fi

# Start the server
echo "🚀 Starting development server..."
echo "📍 Server will be available at http://localhost:3000"
echo ""
npm run dev

