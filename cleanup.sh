#!/bin/bash


if [ -d ".next" ]; then
  echo "Removing .next directory..."
  rm -rf .next
fi

if [ -d "node_modules" ]; then
  echo "Removing node_modules directory..."
  rm -rf node_modules
fi

if [ -d "out" ]; then
  echo "Removing out directory..."
  rm -rf out
fi

echo "Installing node modules..."
pnpm install

echo "Running the project on localhost:3000..."
pnpm run dev

echo "Cleanup done."