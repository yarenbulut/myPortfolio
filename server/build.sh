#!/usr/bin/env bash
# Exit on error
set -e

echo "Installing backend dependencies..."
cd server
npm install --production

echo "Build completed successfully!" 